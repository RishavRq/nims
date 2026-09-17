import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { audioManager } from '../../lib/audio';
import type { Soundtrack } from '../../lib/audio';

/**
 * COVER — The opening.
 *
 * Feels like the cover of an obscure literary book photographed at night.
 * Understated. Dark. Quiet. Creates curiosity, not excitement.
 * Long dissolves. Typeset letterspacing. No flashy entrance.
 */
export const Cover: React.FC<{ onBegin: () => void }> = ({ onBegin }) => {
  const [showSelection, setShowSelection] = useState(false);

  const handleBeginClick = () => {
    setShowSelection(true);
  };

  const handleSelectTrack = (track: Soundtrack) => {
    audioManager.setTrack(track);
    audioManager.init();
    onBegin();
  };

  return (
    <section
      id="cover"
      className="relative z-10 w-full flex flex-col items-center justify-center px-6 py-24 md:py-32"
      style={{ minHeight: '100dvh' }}
    >
      <div className="flex flex-col items-center text-center max-w-md mx-auto w-full">

        <AnimatePresence mode="wait">
          {!showSelection ? (
            <motion.div
              key="intro"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 1.5 } }}
              className="flex flex-col items-center w-full"
            >
              {/* Title — typeset like a literary book cover */}
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 3, delay: 1 }}
                className="font-serif text-4xl md:text-6xl font-light tracking-[0.25em] leading-tight text-paper"
              >
                THINGS I<br />REMEMBER
              </motion.h1>

              {/* Counter */}
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 2.5 }}
                className="text-meta mb-12 mt-6"
              >
                01 / ?
              </motion.p>

              {/* Epigraph */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2.5, delay: 4 }}
                className="mb-16"
              >
                <p className="text-fragment italic leading-loose text-paper-dim/60">
                  Some things disappear.<br />
                  Some things are remembered.<br />
                  Some things are hidden somewhere in between.
                </p>
              </motion.div>

              {/* Begin */}
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 2, delay: 6 }}
                onClick={handleBeginClick}
                className="group flex items-center gap-2 text-meta text-paper-dim/40 hover:text-paper transition-colors duration-500"
              >
                BEGIN
                <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">→</span>
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              key="selection"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2, delay: 0.5 }}
              className="flex flex-col items-center w-full"
            >
              <h2 className="text-fragment italic text-paper-dim/80 mb-2">
                choose a soundtrack.
              </h2>
              <p className="text-meta text-paper-dim/35 mb-16">
                there are two ways I remember it.
              </p>

              <div className="space-y-12 w-full max-w-sm">
                {/* Track 1 — Mac DeMarco */}
                <button
                  onClick={() => handleSelectTrack('no-other-heart')}
                  className="w-full group text-left flex flex-col items-center border border-transparent hover:border-paper-dim/10 p-6 rounded-sm transition-all duration-700"
                >
                  <p className="font-mono text-xs tracking-[0.2em] text-paper-dim group-hover:text-amber/80 transition-colors mb-2">
                    NO OTHER HEART
                  </p>
                  <p className="text-meta text-paper-dim/45 mb-4">
                    Mac DeMarco
                  </p>
                  <p className="text-fragment italic text-paper-dim/35 text-sm">
                    &ldquo;for the memories that still feel warm.&rdquo;
                  </p>
                </button>

                {/* Track 2 — Jeff Buckley */}
                <button
                  onClick={() => handleSelectTrack('jeff-buckley')}
                  className="w-full group text-left flex flex-col items-center border border-transparent hover:border-paper-dim/10 p-6 rounded-sm transition-all duration-700"
                >
                  <p className="font-mono text-xs tracking-[0.2em] text-paper-dim group-hover:text-amber/80 transition-colors mb-2">
                    LOVER, YOU SHOULD&rsquo;VE COME OVER
                  </p>
                  <p className="text-meta text-paper-dim/45 mb-4">
                    Jeff Buckley
                  </p>
                  <p className="text-fragment italic text-paper-dim/35 text-sm">
                    &ldquo;for the ones that hurt a little.&rdquo;
                  </p>
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Audio hint — appears very late, faint */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 7 }}
          className="mt-16 font-mono text-[9px] tracking-[0.2em] text-ink-faint/30 uppercase"
        >
          headphones recommended
        </motion.p>
      </div>
    </section>
  );
};
