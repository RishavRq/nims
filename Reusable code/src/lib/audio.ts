/**
 * Background Audio Manager
 * Manages the persistent playing of selected soundtrack and coordinates
 * mutual exclusivity with the Time Capsule voice note and Video artifacts.
 */
export type Soundtrack = 'no-other-heart' | 'jeff-buckley';

export class AudioManager {
  private static instance: AudioManager;
  private bgm: HTMLAudioElement;
  public muted: boolean = false;
  private activeForegroundMediaCount: number = 0;
  private initialized: boolean = false;
  private currentTrack: Soundtrack | null = null;

  private constructor() {
    this.bgm = new window.Audio();
    this.bgm.volume = 0.68;
    this.bgm.preload = 'auto';

    this.bgm.addEventListener('error', () => {
      console.warn('Background music could not be loaded. Check if the audio file exists.');
    });

    // Custom loop handling for precise timestamps
    this.bgm.addEventListener('ended', () => {
      if (this.currentTrack === 'jeff-buckley') {
        this.bgm.currentTime = 43;
        this.bgm.play().catch(e => console.warn('BGM loop play blocked:', e));
      } else {
        this.bgm.currentTime = 0;
        this.bgm.play().catch(e => console.warn('BGM loop play blocked:', e));
      }
    });
  }

  public static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  public setTrack(track: Soundtrack) {
    this.currentTrack = track;
    if (track === 'jeff-buckley') {
      this.bgm.src = '/audio/lover-jeffbuckley.mp3';
      // When loading jeff-buckley, force start at 0:43 once metadata is available
      this.bgm.addEventListener('loadedmetadata', () => {
        if (this.currentTrack === 'jeff-buckley') {
          this.bgm.currentTime = 43;
        }
      }, { once: true });
    } else {
      this.bgm.src = '/audio/no-other-heart.mp3';
    }
  }

  public init() {
    if (this.initialized) return;
    this.initialized = true;

    if (!this.muted && this.activeForegroundMediaCount === 0) {
      this.bgm.play().catch(e => console.warn('BGM play blocked by browser:', e));
    }
  }

  public toggleMute(): boolean {
    this.muted = !this.muted;
    if (this.muted) {
      this.bgm.pause();
    } else {
      // Only resume if foreground media (audio/video) isn't taking priority
      if (this.activeForegroundMediaCount === 0 && this.initialized) {
        this.bgm.play().catch(e => console.warn('BGM play blocked:', e));
      }
    }
    return this.muted;
  }

  public onForegroundMediaPlay() {
    this.activeForegroundMediaCount++;
    this.bgm.pause();
  }

  public onForegroundMediaPauseOrEnd() {
    this.activeForegroundMediaCount = Math.max(0, this.activeForegroundMediaCount - 1);
    
    if (this.activeForegroundMediaCount === 0 && !this.muted && this.initialized) {
      this.bgm.volume = 0;
      this.bgm.play().catch(e => console.warn('BGM resume blocked:', e));
      
      // Gentle ~200ms volume ramp to avoid clicking
      let currentVol = 0;
      const targetVol = 0.68;
      const step = targetVol / 10;
      
      const ramp = setInterval(() => {
        currentVol += step;
        if (currentVol >= targetVol) {
          this.bgm.volume = targetVol;
          clearInterval(ramp);
        } else {
          this.bgm.volume = currentVol;
        }
      }, 20);
    }
  }

  // Backwards-compatible aliases for existing components
  public onVoiceNotePlay() {
    this.onForegroundMediaPlay();
  }

  public onVoiceNotePauseOrEnd() {
    this.onForegroundMediaPauseOrEnd();
  }
}

export const audioManager = AudioManager.getInstance();
