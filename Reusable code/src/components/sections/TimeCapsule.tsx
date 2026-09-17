import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AudioPlayer } from '../ui/AudioPlayer';
import { useApp } from '../../lib/appState';
import { audioManager } from '../../lib/audio';

/**
 * TIME CAPSULE — 25.10.25 // 01:30 AM
 *
 * The emotional center. The voice recording from the night of the first date.
 * Extreme stillness and sacred atmosphere.
 */
export const TimeCapsule: React.FC = () => {
  const { state, dispatch } = useApp();
  const [showAfter, setShowAfter] = useState(false);

  const handlePlay = () => {
    audioManager.onVoiceNotePlay();
    dispatch({ type: 'PLAY_CAPSULE' });
  };

  const handlePause = () => {
    audioManager.onVoiceNotePauseOrEnd();
  };

  const handleEnded = () => {
    audioManager.onVoiceNotePauseOrEnd();
    // 3 seconds of silence after recording before revealing text
    setTimeout(() => setShowAfter(true), 3000);
  };

  return (
    <section
      id="time-capsule"
      className="relative w-full px-6 flex flex-col items-center justify-center py-28 md:py-44"
      style={{ minHeight: '100dvh' }}
    >
      <div className="max-w-md mx-auto w-full flex flex-col items-center text-center">

        {/* Date & Time Timestamp */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5 }}
          className="mb-8"
        >
          <p className="font-mono text-xs tracking-[0.25em] uppercase text-ink-faint/50 mb-2">
            TIME CAPSULE
          </p>
          <p className="font-mono text-2xl md:text-3xl font-light tracking-[0.25em] text-amber/75">
            25.10.25 // 01:30 AM
          </p>
        </motion.div>

        {/* Lead-in */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay: 0.8 }}
          className="text-fragment italic text-paper-dim/50 mb-14"
        >
          a message from someone who didn&rsquo;t know yet.
        </motion.p>

        {/* Audio Player */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 1.5 }}
          className="w-full mb-14"
        >
          <AudioPlayer
            src="/audio/timecapsule.m4a"
            label="LISTEN"
            onPlay={handlePlay}
            onPause={handlePause}
            onEnded={handleEnded}
          />
        </motion.div>

        {/* After playback text */}
        <AnimatePresence>
          {(showAfter || state.timeCapsulePlayed) && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 3.5 }}
              className="space-y-6 pt-4"
            >
              <p className="text-fragment text-paper-dim/35 italic">
                He didn&rsquo;t know.
              </p>
              <p className="font-serif text-lg md:text-xl font-light text-paper-dim/60">
                He only knew that he loved you.
              </p>
              <p className="font-mono text-[9px] tracking-[0.18em] uppercase text-ink-faint/30 mt-6">
                Ten months later, he found the recording again.
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
