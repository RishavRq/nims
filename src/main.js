/**
 * THE ARCHIVE — Main Orchestrator
 * Connects narrative data, Web Audio engine, voice fragments, and download state.
 */

import {
  ARCHIVE_DOWNLOAD_URL,
  VOICE_FRAGMENTS
} from './data/archiveContent.js';

import { archiveAudioEngine, voiceFragmentPlayer } from './audio/archiveAudio.js';

document.addEventListener('DOMContentLoaded', () => {
  initAudioMachine();
  initVoiceFragments();
  initDownloadSection();
  initIntersectionEffects();
});

/**
 * Global Audio Machine Controller UI
 */
function initAudioMachine() {
  const toggleBtn = document.getElementById('audio-toggle-btn');
  
  if (!toggleBtn) return;

  const updateUI = (active) => {
    toggleBtn.setAttribute('aria-pressed', active ? 'true' : 'false');
    const labelSpan = toggleBtn.querySelector('.toggle-state-text');
    if (labelSpan) {
      labelSpan.textContent = active ? 'ON' : 'OFF';
    }
  };

  toggleBtn.addEventListener('click', async () => {
    const isNowActive = await archiveAudioEngine.toggle();
    updateUI(isNowActive);
  });
}

/**
 * Hook up hardcoded Voice Fragments to the player
 */
function initVoiceFragments() {
  // Attach event listeners for each voice artifact defined in data
  VOICE_FRAGMENTS.forEach((voice) => {
    const btn = document.getElementById(`btn-voice-${voice.id}`);
    const track = document.getElementById(`track-voice-${voice.id}`);

    if (btn) {
      btn.addEventListener('click', () => {
        voiceFragmentPlayer.play(voice);
      });
    }

    if (track) {
      track.addEventListener('click', (e) => {
        const rect = track.getBoundingClientRect();
        const clickRatio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
        if (voiceFragmentPlayer.currentFragmentId === voice.id && voiceFragmentPlayer.audioElement) {
          voiceFragmentPlayer.audioElement.currentTime = clickRatio * voice.durationSeconds;
        }
      });
    }
  });

  // Wire progress and state callbacks
  voiceFragmentPlayer.onStateChangeCallback = (activeId, isPlaying) => {
    VOICE_FRAGMENTS.forEach((v) => {
      const btn = document.getElementById(`btn-voice-${v.id}`);
      if (!btn) return;
      if (v.id === activeId && isPlaying) {
        btn.textContent = '[ PAUSE ]';
        btn.setAttribute('aria-label', `Pause recording ${v.label}`);
      } else {
        btn.textContent = '[ PLAY ]';
        btn.setAttribute('aria-label', `Play recording ${v.label}`);
      }
    });
  };

  voiceFragmentPlayer.onProgressCallback = (current, total) => {
    const activeId = voiceFragmentPlayer.currentFragmentId;
    if (!activeId) return;

    const fill = document.getElementById(`fill-voice-${activeId}`);
    const timeDisplay = document.getElementById(`time-voice-${activeId}`);
    const track = document.getElementById(`track-voice-${activeId}`);

    const safeDuration = total && !isNaN(total) ? total : 17;
    const progressPercent = Math.min(100, (current / safeDuration) * 100);

    if (fill) fill.style.width = `${progressPercent}%`;
    if (track) track.setAttribute('aria-valuenow', Math.round(progressPercent));

    if (timeDisplay) {
      const curM = Math.floor(current / 60).toString().padStart(2, '0');
      const curS = Math.floor(current % 60).toString().padStart(2, '0');
      const totM = Math.floor(safeDuration / 60).toString().padStart(2, '0');
      const totS = Math.floor(safeDuration % 60).toString().padStart(2, '0');
      timeDisplay.textContent = `${curM}:${curS} / ${totM}:${totS}`;
    }
  };
}

/**
 * Android APK Download Experience
 * Handles empty configuration gracefully with intentional archival placeholder state.
 */
function initDownloadSection() {
  const btn = document.getElementById('btn-download-apk');

  if (!btn) return;

  if (!ARCHIVE_DOWNLOAD_URL || ARCHIVE_DOWNLOAD_URL.trim() === '') {
    btn.innerHTML = 'APK<br>NOT YET ATTACHED';
    btn.setAttribute('aria-disabled', 'true');
    btn.classList.add('is-pending');
    btn.addEventListener('click', (e) => {
      e.preventDefault();
    });
  } else {
    btn.href = ARCHIVE_DOWNLOAD_URL;
    btn.innerHTML = 'DOWNLOAD ANDROID APK';
    btn.removeAttribute('aria-disabled');
    btn.classList.remove('is-pending');
  }
}

/**
 * Subtle Intersection Observer for Restrained Residual Movement
 */
function initIntersectionEffects() {
  // If prefers-reduced-motion, skip observer
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.fade-in-archive').forEach((el) => {
      el.classList.add('is-visible');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -40px 0px'
  });

  document.querySelectorAll('.fade-in-archive').forEach((el) => {
    observer.observe(el);
  });
}
