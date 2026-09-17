/**
 * THE ARCHIVE — Archival Audio Engine
 *
 * Provides ambient environmental drone and voice fragment playback.
 * Features:
 * - Persistent playback during navigation
 * - Graceful fade in/out (exponential gain ramping)
 * - Autoplay policy compliance (unlock on user gesture)
 * - Session persistence
 * - Mutual exclusivity: background ambient tone automatically ducks when a voice
 *   fragment is played, and gently ramps back up when playback pauses or ends.
 * - Procedural room tone / analog tape noise synthesis when external files are absent.
 */

class ArchiveAudioEngine {
  constructor() {
    this.audioCtx = null;
    this.masterGain = null;
    this.ambientGain = null;
    this.noiseNode = null;
    this.droneOsc = null;
    this.droneOsc2 = null;

    this.isPlaying = false;
    this.volume = 0.75;
    this.storageKey = 'archive_audio_state';
    this.foregroundMediaCount = 0;

    this.loadPersistedState();
  }

  loadPersistedState() {
    try {
      const saved = sessionStorage.getItem(this.storageKey);
      if (saved) {
        const parsed = JSON.parse(saved);
        this.volume = parsed.volume ?? 0.75;
      }
    } catch {
      // Ignore storage restrictions
    }
  }

  saveState() {
    try {
      sessionStorage.setItem(this.storageKey, JSON.stringify({
        volume: this.volume,
        enabled: this.isPlaying
      }));
    } catch {
      // Ignore
    }
  }

  initAudioContext() {
    if (this.audioCtx) return;

    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;

    this.audioCtx = new AudioContext();

    // Master Gain
    this.masterGain = this.audioCtx.createGain();
    this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
    this.masterGain.connect(this.audioCtx.destination);

    // Ambient Sub-Gain with initial zero for fade-in
    this.ambientGain = this.audioCtx.createGain();
    this.ambientGain.gain.setValueAtTime(0.0001, this.audioCtx.currentTime);
    this.ambientGain.connect(this.masterGain);
  }

  /**
   * Generates a quiet, cold, low-frequency atmospheric room tone (55Hz drone + filtered noise)
   * simulating an analog recorder capturing an empty quiet room at night.
   */
  startSyntheticAmbience() {
    if (!this.audioCtx) return;

    // Sub-bass drone 1 (55Hz - A1)
    this.droneOsc = this.audioCtx.createOscillator();
    this.droneOsc.type = 'sine';
    this.droneOsc.frequency.setValueAtTime(55, this.audioCtx.currentTime);

    // Sub-bass drone 2 (110Hz - A2, slightly detuned for organic slow beating)
    this.droneOsc2 = this.audioCtx.createOscillator();
    this.droneOsc2.type = 'sine';
    this.droneOsc2.frequency.setValueAtTime(109.4, this.audioCtx.currentTime);

    const droneFilter = this.audioCtx.createBiquadFilter();
    droneFilter.type = 'lowpass';
    droneFilter.frequency.setValueAtTime(140, this.audioCtx.currentTime);

    const droneGain = this.audioCtx.createGain();
    droneGain.gain.setValueAtTime(0.12, this.audioCtx.currentTime);

    this.droneOsc.connect(droneFilter);
    this.droneOsc2.connect(droneFilter);
    droneFilter.connect(droneGain);
    droneGain.connect(this.ambientGain);

    // Analog Tape Hiss / Room Noise (Pinkish Bandpass Noise)
    const bufferSize = this.audioCtx.sampleRate * 2;
    const noiseBuffer = this.audioCtx.createBuffer(1, bufferSize, this.audioCtx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;

    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99765 * b0 + white * 0.05;
      b1 = 0.96300 * b1 + white * 0.11;
      b2 = 0.57000 * b2 + white * 0.55;
      output[i] = (b0 + b1 + b2) * 0.05;
    }

    this.noiseNode = this.audioCtx.createBufferSource();
    this.noiseNode.buffer = noiseBuffer;
    this.noiseNode.loop = true;

    const noiseFilter = this.audioCtx.createBiquadFilter();
    noiseFilter.type = 'bandpass';
    noiseFilter.frequency.setValueAtTime(800, this.audioCtx.currentTime);
    noiseFilter.Q.setValueAtTime(1.2, this.audioCtx.currentTime);

    const noiseGain = this.audioCtx.createGain();
    noiseGain.gain.setValueAtTime(0.04, this.audioCtx.currentTime);

    this.noiseNode.connect(noiseFilter);
    noiseFilter.connect(noiseGain);
    noiseGain.connect(this.ambientGain);

    this.droneOsc.start();
    this.droneOsc2.start();
    this.noiseNode.start();
  }

  async enable() {
    this.initAudioContext();
    if (!this.audioCtx) return false;

    if (this.audioCtx.state === 'suspended') {
      await this.audioCtx.resume();
    }

    if (!this.droneOsc) {
      this.startSyntheticAmbience();
    }

    // Graceful Fade-In (1.2s exponential ramp)
    const now = this.audioCtx.currentTime;
    this.ambientGain.gain.cancelScheduledValues(now);
    const targetGain = this.foregroundMediaCount > 0 ? 0.0001 : 1.0;
    this.ambientGain.gain.setValueAtTime(Math.max(this.ambientGain.gain.value, 0.0001), now);
    this.ambientGain.gain.exponentialRampToValueAtTime(targetGain, now + 1.2);

    this.isPlaying = true;
    this.saveState();
    return true;
  }

  disable() {
    if (!this.audioCtx || !this.isPlaying) return;

    // Graceful Fade-Out (0.8s exponential ramp)
    const now = this.audioCtx.currentTime;
    this.ambientGain.gain.cancelScheduledValues(now);
    this.ambientGain.gain.setValueAtTime(Math.max(this.ambientGain.gain.value, 0.0001), now);
    this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);

    this.isPlaying = false;
    this.saveState();
  }

  toggle() {
    return this.isPlaying ? this.disable() : this.enable();
  }

  setVolume(val) {
    this.volume = Math.max(0, Math.min(1, val));
    if (this.masterGain && this.audioCtx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
    }
    this.saveState();
  }

  /**
   * Foreground media coordination (Mutual Exclusivity)
   * Ducks the ambient room tone down when a voice fragment starts.
   */
  onForegroundMediaPlay() {
    this.foregroundMediaCount++;
    if (!this.audioCtx || !this.ambientGain || !this.isPlaying) return;

    const now = this.audioCtx.currentTime;
    this.ambientGain.gain.cancelScheduledValues(now);
    this.ambientGain.gain.setValueAtTime(Math.max(this.ambientGain.gain.value, 0.0001), now);
    this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
  }

  /**
   * Restores ambient room tone smoothly when voice fragment finishes or pauses.
   */
  onForegroundMediaPauseOrEnd() {
    this.foregroundMediaCount = Math.max(0, this.foregroundMediaCount - 1);
    if (this.foregroundMediaCount === 0 && this.audioCtx && this.ambientGain && this.isPlaying) {
      const now = this.audioCtx.currentTime;
      this.ambientGain.gain.cancelScheduledValues(now);
      this.ambientGain.gain.setValueAtTime(Math.max(this.ambientGain.gain.value, 0.0001), now);
      this.ambientGain.gain.exponentialRampToValueAtTime(1.0, now + 0.8);
    }
  }
}

/**
 * VoiceFragmentPlayer
 * Handles discrete recovered voice recording artifacts.
 * If actual audio files are missing, synthesizes an authentic analog voice memo snippet
 * (subtle magnetic flutter + bandpassed harmonic sweep) so the player functions completely.
 */
class VoiceFragmentPlayer {
  constructor(engine) {
    this.engine = engine;
    this.currentFragmentId = null;
    this.audioElement = new Audio();
    this.isPlaying = false;
    this.syntheticTimer = null;
    this.virtualCurrentTime = 0;
    this.activeDuration = 17;
    this.onProgressCallback = null;
    this.onStateChangeCallback = null;

    this.audioElement.addEventListener('timeupdate', () => {
      if (this.onProgressCallback) {
        this.onProgressCallback(this.audioElement.currentTime, this.audioElement.duration);
      }
    });

    this.audioElement.addEventListener('loadedmetadata', () => {
      if (this.audioElement.duration && !isNaN(this.audioElement.duration)) {
        this.activeDuration = this.audioElement.duration;
        if (this.onProgressCallback) {
          this.onProgressCallback(this.audioElement.currentTime, this.activeDuration);
        }
      }
    });

    this.audioElement.addEventListener('ended', () => {
      this.stop();
    });

    this.audioElement.addEventListener('error', () => {
      // Fallback to procedural playback when external file is absent
      this.playSyntheticFragment();
    });
  }

  play(fragment) {
    if (this.currentFragmentId === fragment.id && this.isPlaying) {
      this.pause();
      return;
    }

    this.stop();
    this.currentFragmentId = fragment.id;
    this.activeDuration = fragment.durationSeconds || 17;

    // Coordinate with ambient engine: duck ambient room tone
    this.engine.onForegroundMediaPlay();

    // Try HTML5 Audio first
    this.audioElement.src = fragment.audioSrc;
    const playPromise = this.audioElement.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          this.isPlaying = true;
          if (this.onStateChangeCallback) this.onStateChangeCallback(this.currentFragmentId, true);
        })
        .catch(() => {
          // If file not found or browser blocked, use synthetic fallback
          this.playSyntheticFragment();
        });
    } else {
      this.playSyntheticFragment();
    }
  }

  playSyntheticFragment() {
    this.engine.initAudioContext();
    const ctx = this.engine.audioCtx;
    if (!ctx) return;

    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    this.isPlaying = true;
    if (this.onStateChangeCallback) this.onStateChangeCallback(this.currentFragmentId, true);

    // Subtle magnetic flutter tone
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    const filter = ctx.createBiquadFilter();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(220, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(196, ctx.currentTime + 1.5);

    filter.type = 'bandpass';
    filter.frequency.setValueAtTime(1200, ctx.currentTime);
    filter.Q.setValueAtTime(2.0, ctx.currentTime);

    gain.gain.setValueAtTime(0.001, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.06, ctx.currentTime + 0.3);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 2.5);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(ctx.destination);

    osc.start();
    osc.stop(ctx.currentTime + 2.6);

    // Simulate playback timer
    this.virtualCurrentTime = 0;
    clearInterval(this.syntheticTimer);
    this.syntheticTimer = setInterval(() => {
      this.virtualCurrentTime += 0.25;
      if (this.onProgressCallback) {
        this.onProgressCallback(this.virtualCurrentTime, this.activeDuration);
      }
      if (this.virtualCurrentTime >= this.activeDuration) {
        this.stop();
      }
    }, 250);
  }

  pause() {
    this.isPlaying = false;
    this.audioElement.pause();
    clearInterval(this.syntheticTimer);
    this.engine.onForegroundMediaPauseOrEnd();
    if (this.onStateChangeCallback) this.onStateChangeCallback(this.currentFragmentId, false);
  }

  stop() {
    this.isPlaying = false;
    this.audioElement.pause();
    this.audioElement.currentTime = 0;
    clearInterval(this.syntheticTimer);
    this.virtualCurrentTime = 0;
    this.engine.onForegroundMediaPauseOrEnd();
    if (this.onStateChangeCallback) this.onStateChangeCallback(this.currentFragmentId, false);
    if (this.onProgressCallback) this.onProgressCallback(0, this.activeDuration);
    this.currentFragmentId = null;
  }
}

export const archiveAudioEngine = new ArchiveAudioEngine();
export const voiceFragmentPlayer = new VoiceFragmentPlayer(archiveAudioEngine);
