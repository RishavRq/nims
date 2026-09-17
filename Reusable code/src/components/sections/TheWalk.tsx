import React from 'react';
import { motion } from 'framer-motion';
import { MEMORY_ARCHIVE, MARGIN_NOTES } from '../../data/memories';
import { MemoryCard } from '../ui/MemoryCard';
import { MarginNote } from '../ui/MarginNote';

/**
 * CHAPTER I — THE WALK
 *
 * Movement through remembered places.
 * Subdivided into small movements:
 * - THE FIRST MILES
 * - THE LITTLE DETOURS
 * - THE PITSTOPS
 * - THE THINGS WE DIDN'T CALL MEMORIES
 */
export const TheWalk: React.FC = () => {
  const photoWalk = MEMORY_ARCHIVE.find(m => m.id === 'photo-walk-01');

  return (
    <section id="the-walk" className="relative w-full px-6 md:px-12 py-28 md:py-44">
      <div className="max-w-2xl mx-auto w-full">

        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 2 }}
          className="text-center mb-24 md:mb-36"
        >
          <p className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-ink-faint/40 mb-3">
            CHAPTER I
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.15em] text-paper">
            THE WALK
          </h2>
        </motion.div>

        {/* ==========================================
            MOVEMENT 1: THE FIRST MILES
           ========================================== */}
        <div className="mb-28 md:mb-40">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/40 mb-6"
          >
            I. THE FIRST MILES
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5 }}
            className="font-serif text-2xl md:text-4xl font-light leading-relaxed text-paper mb-16 text-center"
          >
            Somehow, we were always walking somewhere.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-right max-w-md ml-auto mb-16"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/45 mb-2">
              EARLY MORNING
            </p>
            <p className="font-body text-lg md:text-xl italic text-paper-dim/75 leading-relaxed">
              Before the world woke up.
            </p>
            <p className="font-body text-xs text-paper-dim/40 italic mt-2">
              The air was cold and damp. The roads were mostly empty.
            </p>
          </motion.div>

          <MarginNote
            label={MARGIN_NOTES['walk-01'].label}
            text={MARGIN_NOTES['walk-01'].text}
            align="left"
          />

          {/* Photograph artifact */}
          {photoWalk && (
            <div className="flex justify-center md:justify-end my-16 md:my-24 md:mr-8">
              <MemoryCard
                memory={photoWalk}
                rotate={-1.2}
                aspect="4/3"
                style={{ maxWidth: '18rem' }}
              />
            </div>
          )}
        </div>

        {/* ==========================================
            MOVEMENT 2: THE LITTLE DETOURS
           ========================================== */}
        <div className="mb-28 md:mb-40">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/40 mb-6 text-right"
          >
            II. THE LITTLE DETOURS
          </motion.p>

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-left max-w-md mb-12"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              DURPIN // ROAD
            </p>
            <p className="font-body text-lg md:text-xl text-paper-dim leading-relaxed mb-3">
              And then there was the dog that almost bit you.
            </p>
            <p className="font-body text-sm text-paper-dim/40 italic leading-relaxed">
              I remember the panic. I remember us continuing anyway. Funny how the things that felt so ordinary at the time become the things you miss the most.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="font-serif italic text-xl md:text-2xl text-paper-dim/50 text-right max-w-sm ml-auto mb-16"
          >
            You complained before we even started climbing.
          </motion.p>
        </div>

        {/* ==========================================
            MOVEMENT 3: THE PITSTOPS
           ========================================== */}
        <div className="mb-28 md:mb-40">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/40 mb-6 text-center"
          >
            III. THE PITSTOPS
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5 }}
            className="font-serif italic text-2xl md:text-3xl font-light leading-relaxed text-paper text-center max-w-lg mx-auto mb-6"
          >
            Those little pitstops.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="font-body text-sm text-paper-dim/45 italic text-center max-w-md mx-auto mb-12"
          >
            You were always stopping. Catching your breath. Looking around.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="font-mono text-xs md:text-sm tracking-[0.15em] uppercase text-paper-dim/60 text-center mb-16"
          >
            I never minded.
          </motion.p>

          <MarginNote
            label={MARGIN_NOTES['walk-02'].label}
            text={MARGIN_NOTES['walk-02'].text}
            align="right"
          />
        </div>

        {/* ==========================================
            MOVEMENT 4: THE THINGS WE DIDN'T CALL MEMORIES
           ========================================== */}
        <div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/40 mb-6"
          >
            IV. THE THINGS WE DIDN&rsquo;T CALL MEMORIES
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="text-left max-w-lg mb-8"
          >
            <p className="font-serif text-xl md:text-2xl font-light text-paper-dim/90 leading-relaxed mb-3">
              We didn&rsquo;t know we were building anything.
            </p>
            <p className="font-body text-sm text-paper-dim/40 italic leading-relaxed">
              We just thought we were walking up a road.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
