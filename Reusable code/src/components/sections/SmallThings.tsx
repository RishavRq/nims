import React from 'react';
import { motion } from 'framer-motion';
import { MEMORY_ARCHIVE, MARGIN_NOTES } from '../../data/memories';
import { MemoryCard } from '../ui/MemoryCard';
import { MarginNote } from '../ui/MarginNote';

/**
 * CHAPTER III — SMALL THINGS
 *
 * The tiny, mundane realities that make memory authentic:
 * - Her being hungry, headaches, fatigue
 * - Knowing her small inconveniences
 * - Zero-purpose conversations
 * - The beauty of completely ordinary days
 */
export const SmallThings: React.FC = () => {
  const photoOrdinary = MEMORY_ARCHIVE.find(m => m.id === 'photo-ordinary');

  return (
    <section id="small-things" className="relative w-full px-6 md:px-12 py-28 md:py-44">
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
            CHAPTER III
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.15em] text-paper">
            SMALL THINGS
          </h2>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/35 mt-2">
            UNIMPORTANT, APPARENTLY
          </p>
        </motion.div>

        {/* Hunger & Inconveniences */}
        <div className="mb-24 md:mb-36">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-left max-w-md mb-8"
          >
            <p className="font-serif text-2xl md:text-3xl font-light text-paper leading-relaxed mb-3">
              You were hungry again.
            </p>
            <p className="font-body text-sm text-paper-dim/45 italic">
              Or you had a headache. Or a stomachache. Or you were just tired.
            </p>
          </motion.div>

          <MarginNote
            label={MARGIN_NOTES['small-01'].label}
            text={MARGIN_NOTES['small-01'].text}
            align="left"
          />

          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-right max-w-md ml-auto mt-16 mb-16"
          >
            <p className="font-serif text-xl md:text-2xl font-light italic text-paper-dim/80 leading-relaxed mb-3">
              I miss knowing your small inconveniences.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/40 leading-relaxed">
              I miss knowing when you were hungry before you said it. I miss the little pauses. I miss being the person who knew those things.
            </p>
          </motion.div>

          {/* Micro-memory rhythm */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="text-center my-16"
          >
            <p className="font-mono text-xs md:text-sm tracking-[0.2em] uppercase text-paper-dim/60">
              You complained. I listened.
            </p>
            <p className="font-serif italic text-sm text-paper-dim/35 mt-2">
              Somehow that was enough.
            </p>
          </motion.div>
        </div>

        {/* Conversations & Ordinary Day */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="text-left max-w-lg mb-12"
          >
            <p className="font-serif text-xl md:text-2xl font-light text-paper leading-relaxed mb-3">
              Conversations that began from absolutely nothing.
            </p>
            <p className="font-body text-sm text-paper-dim/45 italic leading-relaxed">
              And when there was nothing to talk about, that was enough too.
            </p>
          </motion.div>

          <MarginNote
            label={MARGIN_NOTES['small-02'].label}
            text={MARGIN_NOTES['small-02'].text}
            align="right"
          />

          {photoOrdinary && (
            <div className="flex justify-center my-16 md:my-24">
              <MemoryCard
                memory={photoOrdinary}
                rotate={-0.6}
                aspect="4/3"
                style={{ maxWidth: '18rem' }}
              />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
