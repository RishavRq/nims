import React from 'react';
import { motion } from 'framer-motion';
import { MEMORY_ARCHIVE, MARGIN_NOTES } from '../../data/memories';
import { MemoryCard } from '../ui/MemoryCard';
import { MarginNote } from '../ui/MarginNote';

/**
 * CHAPTER IV — THINGS I LOVED
 *
 * Sensory and intimate observations:
 * - Her hair & stealing breaths of her scent
 * - Scent stored physically in memory
 * - Her eyes & unphotographed glances
 * - The way she observed the world
 */
export const ThingsILoved: React.FC = () => {
  const photoEyes = MEMORY_ARCHIVE.find(m => m.id === 'photo-eyes');

  return (
    <section id="things-i-loved" className="relative w-full px-6 md:px-12 py-28 md:py-44">
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
            CHAPTER IV
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.15em] text-paper">
            THINGS I LOVED
          </h2>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/35 mt-2">
            SENSORY & UNRECORDED
          </p>
        </motion.div>

        {/* Her Hair & Scent */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="text-center max-w-lg mx-auto mb-10"
          >
            <p className="font-serif text-2xl md:text-3xl font-light italic text-paper leading-relaxed mb-4">
              I remember your hair.
            </p>
            <p className="font-body text-sm md:text-base text-paper-dim/60 leading-relaxed mb-4">
              Not just the way it looked. The way it smelled. There were moments when I&rsquo;d lean close enough just to breathe it in because somehow you always smelled so good.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8 }}
            className="font-mono text-xs tracking-[0.18em] uppercase text-ink-faint/50 text-right max-w-md ml-auto mb-12"
          >
            Some part of me still knows your scent.
          </motion.p>

          <MarginNote
            label={MARGIN_NOTES['sensory-01'].label}
            text={MARGIN_NOTES['sensory-01'].text}
            align="right"
          />
        </div>

        {/* Her Eyes */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-left max-w-lg mb-10"
          >
            <p className="font-serif text-2xl md:text-3xl font-light text-paper leading-relaxed mb-3">
              And your eyes.
            </p>
            <p className="font-body text-sm md:text-base text-paper-dim/55 leading-relaxed mb-3">
              I don&rsquo;t think I ever told you enough how much I loved looking at them.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/40 italic leading-relaxed">
              There are things you don&rsquo;t photograph because you think you&rsquo;ll always have them in front of you.
            </p>
          </motion.div>

          {photoEyes && (
            <div className="flex justify-start md:ml-6 my-12">
              <MemoryCard
                memory={photoEyes}
                rotate={1.2}
                aspect="3/4"
                style={{ maxWidth: '15rem' }}
              />
            </div>
          )}

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="font-serif italic text-lg md:text-xl text-paper-dim/60 text-center max-w-md mx-auto mt-16"
          >
            The way you looked at the world when you thought no one was watching.
          </motion.p>
        </div>

      </div>
    </section>
  );
};
