/**
 * THE ARCHIVE — Self-Contained Client Bundle
 * Complete rebuild. Audio engine preserved. Visual layer replaced.
 */

(function () {
  'use strict';

  /* ─────────────────────────────────────────────
     01. NARRATIVE CONFIG & DATA
     ───────────────────────────────────────────── */

  const ARCHIVE_CONFIG = {
    title: "THE ARCHIVE",
    period: "23.09.2023 — 10.10.2025",
    locations: "DARJEELING — SILIGURI",
    classification: "RESTRICTED AUTOBIOGRAPHICAL RECORD",
    recordId: "ARC-2309-1010",
    status: "INCOMPLETE"
  };

  /**
   * Complete chronological timeline.
   * Each entry is a moment. Some entries are empty — that is the point.
   */
  const ARCHIVE_TIMELINE = [
    {
      id: "tl-01",
      date: "23 SEPTEMBER 2023",
      location: "DARJEELING",
      title: "FIRST MEETING",
      detail: "A family wedding. A green kurta. An awkward attempted handshake that resolved into a Japanese bow and an accidental head bump.",
      annotation: "THE BEGINNING",
      hasPhoto: true,
      photoRef: "PLATE-01-DAR",
      photoCaption: "THE WEDDING BALCONY",
      photoSubtext: "where it began"
    },
    {
      id: "tl-02",
      date: "24 SEPTEMBER 2023",
      location: "DARJEELING",
      title: "GREEN KURTA / RECEPTION",
      detail: "Confession.",
      annotation: "YES — 3:29 PM",
      hasTimestamp: true,
      timestamp: "YES — 3:29 PM"
    },
    {
      id: "tl-03",
      date: "25 SEPTEMBER 2023",
      location: "DARJEELING",
      title: "PARTING / ROPEWAY",
      detail: "The beginning of distance.",
      annotation: "REF: ROPEWAY STATION"
    },
    {
      id: "tl-04",
      date: "LATE 2023 — MID 2024",
      location: "—",
      title: "BLANK ARCHIVE",
      detail: "The first absence.",
      annotation: "NO RECORDS",
      isEmpty: true
    },
    {
      id: "tl-05",
      date: "24 AUGUST 2024",
      location: "—",
      title: "RETURN MESSAGE",
      detail: "The silence breaks.",
      annotation: "REF: UNSOLICITED"
    },
    {
      id: "tl-06",
      date: "SEPTEMBER 2024",
      location: "—",
      title: "RECONNECTION",
      detail: "A virtual anniversary.",
      annotation: "REF: DISTANCE COMMUNICATION"
    },
    {
      id: "tl-07",
      date: "14 OCTOBER 2024",
      location: "DARJEELING",
      title: "20-HOUR MIRACLE",
      detail: "Four heavy bags. Oi uth! The hug. A Ferris wheel above the clouds. Holding hands. The first kiss. Twenty hours.",
      annotation: "REF: NIGHT WALKS / SECRETS",
      hasPhoto: true,
      photoRef: "PLATE-02-DAR",
      photoCaption: "DARJEELING — TWENTY HOURS",
      photoSubtext: "the hills before the mist settled"
    },
    {
      id: "tl-08",
      date: "LATE OCTOBER 2024 — JANUARY 2025",
      location: "—",
      title: "DRIFT / CRACKS",
      detail: "Things begin changing.",
      annotation: "REF: GRADUAL EROSION",
      isEmpty: true
    },
    {
      id: "tl-09",
      date: "12 JANUARY 2025",
      location: "HOSTEL",
      title: "THE MISUNDERSTANDING",
      detail: "The dog note. The breakup.",
      annotation: "REF: TERMINATION"
    },
    {
      id: "tl-10",
      date: "MAY — JUNE 2025",
      location: "HOSTEL",
      title: "HOSTEL RETURN",
      detail: "The phone returns. The search. The message.",
      annotation: "REF: RECOVERY"
    },
    {
      id: "tl-11",
      date: "10 JUNE 2025",
      location: "SILIGURI",
      title: "THE QUESTION",
      detail: "A second beginning.",
      annotation: "REF: RELOCATION"
    },
    {
      id: "tl-12",
      date: "JULY 2025",
      location: "SILIGURI",
      title: "HOSTEL EMAIL ERA",
      detail: "Communication through institutional spaces.",
      annotation: "REF: MEDIATED CONTACT"
    },
    {
      id: "tl-13",
      date: "AUGUST 2025",
      location: "SILIGURI",
      title: "SILIGURI SHIFT",
      detail: "Distance without geography.",
      annotation: "REF: PARADOX"
    },
    {
      id: "tl-14",
      date: "10 SEPTEMBER 2025",
      location: "SILIGURI",
      title: "FREEZE",
      detail: "The final quiet cutoff.",
      annotation: "REF: TERMINATION OF CONTACT",
      hasPhoto: true,
      photoRef: "PLATE-03-SIL",
      photoCaption: "SILIGURI — THE LAST ENTRY",
      photoSubtext: "image file missing"
    },
    {
      id: "tl-15",
      date: "24 SEPTEMBER 2025",
      location: "KALIMPONG",
      title: "UNCELEBRATED",
      detail: "The second anniversary that never happened.",
      annotation: "REF: UNANSWERED"
    },
    {
      id: "tl-16",
      date: "—",
      location: "—",
      title: "DEAD AIR",
      detail: "No new information. No continuation. The archive stops.",
      annotation: "NO FURTHER RECORDS",
      isEmpty: true,
      isFinal: true
    }
  ];

  /**
   * Soundtrack chronology. Songs are embedded into the archive timeline.
   */
  const SOUNDTRACK_ENTRIES = [
    { id: "st-01", period: "23–24 SEPTEMBER 2023", title: "Timro Pratiksha", artist: "Shallum Lama", audioSrc: "public/audio/music/timro_pratiksha.mp3" },
    { id: "st-02", period: "25 SEPTEMBER 2023", title: "Lakhau Hajarau", artist: "Yabesh Thapa", audioSrc: "public/audio/music/lakhau_hajarau.mp3" },
    { id: "st-03", period: "LATE 2023 — MID 2024", title: "NO MUSIC", artist: "", audioSrc: "", isEmpty: true },
    { id: "st-04", period: "24 AUGUST 2024", title: "The Night We Met", artist: "Lord Huron", audioSrc: "public/audio/music/the_night_we_met.mp3" },
    { id: "st-05", period: "SEPTEMBER 2024", title: "Manka Kura", artist: "Sashwot Khadka", audioSrc: "public/audio/music/manka_kura.mp3" },
    { id: "st-06", period: "14 OCTOBER 2024", title: "blue", artist: "yung kai", audioSrc: "public/audio/music/blue_yung_kai.mp3" },
    { id: "st-07", period: "LATE OCTOBER 2024 — 12 JANUARY 2025", title: "Cold/mess", artist: "Prateek Kuhad", audioSrc: "public/audio/music/cold_mess.mp3" },
    { id: "st-08", period: "12 JANUARY 2025", title: "Slipping Through My Fingers", artist: "ABBA", audioSrc: "public/audio/music/slipping_through_my_fingers.mp3" },
    { id: "st-09", period: "MAY — JUNE 2025", title: "Iris", artist: "The Goo Goo Dolls", audioSrc: "public/audio/music/iris.mp3" },
    { id: "st-10", period: "JULY 2025", title: "The Way I Love You", artist: "Michael Leah", audioSrc: "public/audio/music/the_way_i_love_you.mp3" },
    { id: "st-11", period: "AUGUST 2025", title: "I Love You So", artist: "The Walters", audioSrc: "public/audio/music/i_love_you_so.mp3" },
    { id: "st-12", period: "10–24 SEPTEMBER 2025", title: "Deslocado", artist: "", audioSrc: "public/audio/music/deslocado.mp3" },
    { id: "st-13", period: "—", title: "SILENCE", artist: "", audioSrc: "", isEmpty: true, isFinal: true }
  ];

  /**
   * Voice fragment metadata. User will provide actual recordings.
   */
  const VOICE_FRAGMENTS = [
    {
      id: "01",
      label: "VOICE FRAGMENT / 01",
      recordedDate: "25 OCTOBER 2024",
      recordedLocation: "DARJEELING",
      durationSeconds: 17,
      durationFormatted: "00:17",
      audioSrc: "public/audio/voices/timecapsule.m4a",
      annotation: "whispered voice memo / night of the first date"
    },
    {
      id: "02",
      label: "VOICE FRAGMENT / 02",
      recordedDate: "12 JANUARY 2025",
      recordedLocation: "HOSTEL",
      durationSeconds: 24,
      durationFormatted: "00:24",
      audioSrc: "public/audio/voices/voice_fragment_02.mp3",
      annotation: "whispered birthday greeting / phone audio"
    }
  ];

  /**
   * Photograph plate locations throughout the archive.
   * All intentionally empty. User provides actual images.
   */
  const PHOTO_PLATES = [
    {
      id: "photo-01",
      accessionNo: "PLATE-01-DAR",
      date: "23 SEPTEMBER 2023",
      location: "DARJEELING",
      title: "THE WEDDING BALCONY",
      caption: "where it began",
      subtext: "the balcony overlooking the hills"
    },
    {
      id: "photo-02",
      accessionNo: "PLATE-02-DAR",
      date: "14 OCTOBER 2024",
      location: "DARJEELING",
      title: "TWENTY HOURS",
      caption: "a leap into a hug",
      subtext: "the hills before the mist settled"
    },
    {
      id: "photo-03",
      accessionNo: "PLATE-03-SIL",
      date: "10 SEPTEMBER 2025",
      location: "SILIGURI",
      title: "THE LAST ENTRY",
      caption: "image file missing",
      subtext: ""
    },
    {
      id: "photo-04",
      accessionNo: "PLATE-04-UNDEF",
      date: "—",
      location: "—",
      title: "NOT YET ARCHIVED",
      caption: "photograph not yet provided",
      subtext: ""
    }
  ];

  /** Android APK */
  const ARCHIVE_DOWNLOAD_URL = "";

  const ARCHIVE_BUILD_INFO = {
    platform: "ANDROID",
    version: "BUILD 0.1",
    packageSize: "—",
    architecture: "ARM64-V8A",
    status: "IN DEVELOPMENT"
  };


  /* ─────────────────────────────────────────────
     02. AUDIO ENGINE (PRESERVED)
     ───────────────────────────────────────────── */

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
      } catch (e) {}
    }

    saveState() {
      try {
        sessionStorage.setItem(this.storageKey, JSON.stringify({
          volume: this.volume,
          enabled: this.isPlaying
        }));
      } catch (e) {}
    }

    initAudioContext() {
      if (this.audioCtx) return;
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      this.audioCtx = new AudioContext();
      this.masterGain = this.audioCtx.createGain();
      this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
      this.masterGain.connect(this.audioCtx.destination);
      this.ambientGain = this.audioCtx.createGain();
      this.ambientGain.gain.setValueAtTime(0.0001, this.audioCtx.currentTime);
      this.ambientGain.connect(this.masterGain);
    }

    startSyntheticAmbience() {
      if (!this.audioCtx) return;
      this.droneOsc = this.audioCtx.createOscillator();
      this.droneOsc.type = 'sine';
      this.droneOsc.frequency.setValueAtTime(55, this.audioCtx.currentTime);
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
      if (this.audioCtx.state === 'suspended') await this.audioCtx.resume();
      if (!this.droneOsc) this.startSyntheticAmbience();
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
      const now = this.audioCtx.currentTime;
      this.ambientGain.gain.cancelScheduledValues(now);
      this.ambientGain.gain.setValueAtTime(Math.max(this.ambientGain.gain.value, 0.0001), now);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.8);
      this.isPlaying = false;
      this.saveState();
    }

    toggle() { return this.isPlaying ? this.disable() : this.enable(); }

    setVolume(val) {
      this.volume = Math.max(0, Math.min(1, val));
      if (this.masterGain && this.audioCtx) {
        this.masterGain.gain.setValueAtTime(this.volume, this.audioCtx.currentTime);
      }
      this.saveState();
    }

    onForegroundMediaPlay() {
      this.foregroundMediaCount++;
      if (!this.audioCtx || !this.ambientGain || !this.isPlaying) return;
      const now = this.audioCtx.currentTime;
      this.ambientGain.gain.cancelScheduledValues(now);
      this.ambientGain.gain.setValueAtTime(Math.max(this.ambientGain.gain.value, 0.0001), now);
      this.ambientGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.4);
    }

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


  /* ─────────────────────────────────────────────
     03. VOICE FRAGMENT PLAYER (PRESERVED)
     ───────────────────────────────────────────── */

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
        if (this.onProgressCallback) this.onProgressCallback(this.audioElement.currentTime, this.audioElement.duration);
      });
      this.audioElement.addEventListener('loadedmetadata', () => {
        if (this.audioElement.duration && !isNaN(this.audioElement.duration)) {
          this.activeDuration = this.audioElement.duration;
          if (this.onProgressCallback) this.onProgressCallback(this.audioElement.currentTime, this.activeDuration);
        }
      });
      this.audioElement.addEventListener('ended', () => this.stop());
      this.audioElement.addEventListener('error', () => this.playSyntheticFragment());
    }

    play(fragment) {
      if (this.currentFragmentId === fragment.id && this.isPlaying) { this.pause(); return; }
      this.stop();
      this.currentFragmentId = fragment.id;
      this.activeDuration = fragment.durationSeconds || 17;
      this.engine.onForegroundMediaPlay();
      this.audioElement.src = fragment.audioSrc;
      const playPromise = this.audioElement.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => { this.isPlaying = true; if (this.onStateChangeCallback) this.onStateChangeCallback(this.currentFragmentId, true); })
          .catch(() => this.playSyntheticFragment());
      } else { this.playSyntheticFragment(); }
    }

    playSyntheticFragment() {
      this.engine.initAudioContext();
      const ctx = this.engine.audioCtx;
      if (!ctx) return;
      if (ctx.state === 'suspended') ctx.resume();
      this.isPlaying = true;
      if (this.onStateChangeCallback) this.onStateChangeCallback(this.currentFragmentId, true);
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
      this.virtualCurrentTime = 0;
      clearInterval(this.syntheticTimer);
      this.syntheticTimer = setInterval(() => {
        this.virtualCurrentTime += 0.25;
        if (this.onProgressCallback) this.onProgressCallback(this.virtualCurrentTime, this.activeDuration);
        if (this.virtualCurrentTime >= this.activeDuration) this.stop();
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


  /* ─────────────────────────────────────────────
     04. SOUNDTRACK PLAYER
     ───────────────────────────────────────────── */

  class SoundtrackPlayer {
    constructor(engine) {
      this.engine = engine;
      this.currentTrackId = null;
      this.audioElement = new Audio();
      this.isPlaying = false;
      this.onStateChangeCallback = null;

      this.audioElement.addEventListener('ended', () => {
        this.stop();
      });

      this.audioElement.addEventListener('error', () => {
        this.showMissingState();
      });
    }

    play(track) {
      if (this.currentTrackId === track.id && this.isPlaying) { this.pause(); return; }
      this.stop();

      if (!track.audioSrc || track.audioSrc.trim() === '') {
        this.showMissingState();
        return;
      }

      this.currentTrackId = track.id;
      this.engine.onForegroundMediaPlay();
      this.audioElement.src = track.audioSrc;

      const playPromise = this.audioElement.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            this.isPlaying = true;
            if (this.onStateChangeCallback) this.onStateChangeCallback(this.currentTrackId, true);
          })
          .catch(() => this.showMissingState());
      }
    }

    showMissingState() {
      this.isPlaying = false;
      this.engine.onForegroundMediaPauseOrEnd();
      const btn = document.getElementById(`st-btn-${this.currentTrackId}`);
      if (btn) {
        btn.textContent = '[ NOT YET ARCHIVED ]';
        setTimeout(() => {
          if (this.onStateChangeCallback) this.onStateChangeCallback(this.currentTrackId, false);
        }, 1500);
      }
    }

    pause() {
      this.isPlaying = false;
      this.audioElement.pause();
      this.engine.onForegroundMediaPauseOrEnd();
      if (this.onStateChangeCallback) this.onStateChangeCallback(this.currentTrackId, false);
    }

    stop() {
      const prevId = this.currentTrackId;
      this.isPlaying = false;
      this.audioElement.pause();
      this.audioElement.currentTime = 0;
      this.engine.onForegroundMediaPauseOrEnd();
      this.currentTrackId = null;
      if (this.onStateChangeCallback) this.onStateChangeCallback(prevId, false);
    }
  }


  /* ─────────────────────────────────────────────
     05. INSTANCES
     ───────────────────────────────────────────── */

  const archiveAudioEngine = new ArchiveAudioEngine();
  const voiceFragmentPlayer = new VoiceFragmentPlayer(archiveAudioEngine);
  const soundtrackPlayer = new SoundtrackPlayer(archiveAudioEngine);


  /* ─────────────────────────────────────────────
     06. RENDERING
     ───────────────────────────────────────────── */

  function renderTimeline() {
    const container = document.getElementById('timeline-entries');
    if (!container) return;

    container.innerHTML = ARCHIVE_TIMELINE.map((entry, idx) => {
      const classes = ['tl-entry'];
      if (entry.isEmpty) classes.push('tl-empty');
      if (entry.isFinal) classes.push('tl-final');
      if (entry.hasPhoto) classes.push('tl-has-photo');

      let photoHTML = '';
      if (entry.hasPhoto) {
        const plate = PHOTO_PLATES.find(p => p.accessionNo === entry.photoRef) || {};
        photoHTML = `
          <figure class="tl-photo-frame fade-in-archive">
            <div class="photo-frame-inner" role="img" aria-label="Photograph: ${entry.photoCaption}">
              <span class="photo-status">PHOTOGRAPH</span>
              <span class="photo-status-sub">NOT YET ARCHIVED</span>
            </div>
            <figcaption class="photo-caption">
              <span class="photo-ref">${entry.photoRef || '—'}</span>
              <span class="photo-title">${entry.photoCaption || '—'}</span>
            </figcaption>
          </figure>`;
      }

      let timestampHTML = '';
      if (entry.hasTimestamp) {
        timestampHTML = `<div class="tl-timestamp">${entry.timestamp}</div>`;
      }

      return `
        <div class="${classes.join(' ')} fade-in-archive" data-index="${idx + 1}">
          <div class="tl-rule"></div>
          <div class="tl-date">${entry.date}</div>
          <div class="tl-location">${entry.location}</div>
          <h3 class="tl-title">${entry.title}</h3>
          <p class="tl-detail">${entry.detail}</p>
          ${timestampHTML}
          <div class="tl-annotation">${entry.annotation}</div>
          ${photoHTML}
        </div>`;
    }).join('');
  }

  function renderSoundtrack() {
    const container = document.getElementById('soundtrack-entries');
    if (!container) return;

    container.innerHTML = SOUNDTRACK_ENTRIES.map((track) => {
      const isEmpty = track.isEmpty || track.isFinal;
      const classes = ['st-entry'];
      if (isEmpty) classes.push('st-empty');
      if (track.isFinal) classes.push('st-final');

      const playBtn = isEmpty
        ? '<span class="st-status">—</span>'
        : `<button type="button" class="st-play-btn" id="st-btn-${track.id}" data-track-id="${track.id}" aria-label="Play ${track.title} by ${track.artist}">[ PLAY ]</button>`;

      return `
        <div class="${classes.join(' ')} fade-in-archive" id="st-${track.id}">
          <div class="st-period">${track.period}</div>
          <div class="st-track-info">
            <span class="st-title">${track.title}</span>
            ${track.artist ? `<span class="st-artist">— ${track.artist}</span>` : ''}
          </div>
          <div class="st-action">${playBtn}</div>
        </div>`;
    }).join('');

    // Attach play listeners
    SOUNDTRACK_ENTRIES.forEach((track) => {
      if (track.isEmpty || track.isFinal) return;
      const btn = document.getElementById(`st-btn-${track.id}`);
      if (btn) {
        btn.addEventListener('click', () => soundtrackPlayer.play(track));
      }
    });

    // State change callback
    soundtrackPlayer.onStateChangeCallback = (activeId, isPlaying) => {
      SOUNDTRACK_ENTRIES.forEach((track) => {
        const btn = document.getElementById(`st-btn-${track.id}`);
        if (!btn) return;
        if (track.id === activeId) {
          btn.textContent = isPlaying ? '[ PAUSE ]' : '[ PLAY ]';
        } else {
          btn.textContent = '[ PLAY ]';
        }
      });
    };
  }

  function renderVoiceFragments() {
    const container = document.getElementById('voice-fragment-container');
    if (!container) return;

    container.innerHTML = VOICE_FRAGMENTS.map((voice) => `
      <article class="voice-artifact fade-in-archive" id="voice-artifact-${voice.id}">
        <div class="voice-header">
          <span class="voice-label">${voice.label}</span>
          <span class="voice-meta">${voice.recordedDate} / ${voice.recordedLocation}</span>
        </div>
        <div class="voice-player">
          <button type="button" class="voice-play-btn" id="btn-voice-${voice.id}" data-voice-id="${voice.id}" aria-label="Play ${voice.label}">PLAY</button>
          <div class="voice-track" id="track-voice-${voice.id}" role="progressbar" aria-label="Playback track" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100">
            <div class="voice-fill" id="fill-voice-${voice.id}"></div>
            <div class="voice-ticks" aria-hidden="true">
              ${Array.from({ length: 24 }).map((_, i) => `<div class="v-tick ${i % 4 === 0 ? 'v-tick-tall' : ''}"></div>`).join('')}
            </div>
          </div>
          <div class="voice-time" id="time-voice-${voice.id}" aria-live="off">00:00 / ${voice.durationFormatted}</div>
        </div>
        <div class="voice-note">${voice.annotation}</div>
      </article>
    `).join('');

    VOICE_FRAGMENTS.forEach((voice) => {
      const btn = document.getElementById(`btn-voice-${voice.id}`);
      const track = document.getElementById(`track-voice-${voice.id}`);
      if (btn) btn.addEventListener('click', () => voiceFragmentPlayer.play(voice));
      if (track) {
        track.addEventListener('click', (e) => {
          const rect = track.getBoundingClientRect();
          const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
          if (voiceFragmentPlayer.currentFragmentId === voice.id && voiceFragmentPlayer.audioElement) {
            voiceFragmentPlayer.audioElement.currentTime = ratio * voice.durationSeconds;
          }
        });
      }
    });

    voiceFragmentPlayer.onStateChangeCallback = (activeId, isPlaying) => {
      VOICE_FRAGMENTS.forEach((v) => {
        const btn = document.getElementById(`btn-voice-${v.id}`);
        if (!btn) return;
        if (v.id === activeId && isPlaying) {
          btn.textContent = 'PAUSE';
          btn.setAttribute('aria-label', `Pause ${v.label}`);
        } else {
          btn.textContent = 'PLAY';
          btn.setAttribute('aria-label', `Play ${v.label}`);
        }
      });
    };

    voiceFragmentPlayer.onProgressCallback = (current, total) => {
      const activeId = voiceFragmentPlayer.currentFragmentId;
      if (!activeId) return;
      const fill = document.getElementById(`fill-voice-${activeId}`);
      const timeDisplay = document.getElementById(`time-voice-${activeId}`);
      const safeDuration = total && !isNaN(total) ? total : 17;
      const pct = Math.min(100, (current / safeDuration) * 100);
      if (fill) fill.style.width = `${pct}%`;
      const track = document.getElementById(`track-voice-${activeId}`);
      if (track) track.setAttribute('aria-valuenow', Math.round(pct));
      if (timeDisplay) {
        const cM = Math.floor(current / 60).toString().padStart(2, '0');
        const cS = Math.floor(current % 60).toString().padStart(2, '0');
        const tM = Math.floor(safeDuration / 60).toString().padStart(2, '0');
        const tS = Math.floor(safeDuration % 60).toString().padStart(2, '0');
        timeDisplay.textContent = `${cM}:${cS} / ${tM}:${tS}`;
      }
    };
  }

  function renderPhotographs() {
    const container = document.getElementById('photo-frames-container');
    if (!container) return;

    container.innerHTML = PHOTO_PLATES.map((plate) => `
      <figure class="photo-plate fade-in-archive" id="${plate.id}">
        <div class="photo-plate-header">
          <span>${plate.accessionNo}</span>
          <span>${plate.date}</span>
        </div>
        <div class="photo-plate-frame" role="img" aria-label="Photograph: ${plate.title}">
          <span class="photo-status">PHOTOGRAPH</span>
          <span class="photo-status-sub">NOT YET ARCHIVED</span>
        </div>
        <figcaption class="photo-plate-caption">
          <span class="photo-plate-title">${plate.title}</span>
          <span class="photo-plate-sub">${plate.caption}</span>
        </figcaption>
      </figure>
    `).join('');
  }


  /* ─────────────────────────────────────────────
     07. AUDIO MACHINE UI
     ───────────────────────────────────────────── */

  function initAudioMachine() {
    const toggleBtn = document.getElementById('audio-toggle-btn');
    const volumeSlider = document.getElementById('audio-volume-slider');
    if (!toggleBtn) return;

    const updateUI = (active) => {
      toggleBtn.setAttribute('aria-pressed', active ? 'true' : 'false');
      const labelSpan = toggleBtn.querySelector('.toggle-state-text');
      if (labelSpan) labelSpan.textContent = active ? 'ON' : 'OFF';
    };

    toggleBtn.addEventListener('click', async () => {
      const isNowActive = await archiveAudioEngine.toggle();
      updateUI(isNowActive);
    });

    if (volumeSlider) {
      volumeSlider.value = archiveAudioEngine.volume;
      volumeSlider.addEventListener('input', (e) => {
        archiveAudioEngine.setVolume(parseFloat(e.target.value));
      });
    }
  }


  /* ─────────────────────────────────────────────
     08. DOWNLOAD SECTION
     ───────────────────────────────────────────── */

  function initDownloadSection() {
    const btn = document.getElementById('btn-download-apk');
    if (!btn) return;

    if (!ARCHIVE_DOWNLOAD_URL || ARCHIVE_DOWNLOAD_URL.trim() === '') {
      btn.textContent = 'APK — NOT YET ATTACHED';
      btn.setAttribute('aria-disabled', 'true');
      btn.classList.add('is-pending');
      btn.addEventListener('click', (e) => e.preventDefault());
    } else {
      btn.href = ARCHIVE_DOWNLOAD_URL;
      btn.textContent = '[ DOWNLOAD ANDROID BUILD ]';
      btn.removeAttribute('aria-disabled');
    }
  }


  /* ─────────────────────────────────────────────
     09. INTERSECTION OBSERVER
     ───────────────────────────────────────────── */

  function initIntersectionEffects() {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.fade-in-archive').forEach((el) => el.classList.add('is-visible'));
      return;
    }
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.fade-in-archive').forEach((el) => observer.observe(el));
  }


  /* ─────────────────────────────────────────────
     10. BOOT
     ───────────────────────────────────────────── */

  function boot() {
    initAudioMachine();
    renderTimeline();
    renderSoundtrack();
    renderVoiceFragments();
    renderPhotographs();
    initDownloadSection();
    initIntersectionEffects();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', boot);
  } else {
    boot();
  }

})();
