import React from 'react';
import { motion } from 'framer-motion';
import { MEMORY_ARCHIVE, MARGIN_NOTES } from '../../data/memories';
import { MemoryCard } from '../ui/MemoryCard';
import { MarginNote } from '../ui/MarginNote';

/**
 * CHAPTER VI — 25.10.25 (THE FIRST DATE & THE TALISMAN)
 *
 * Dedicated mini-chapter leading up to the Time Capsule:
 * - October 25th first date
 * - The first hair tie and its enormous significance
 * - The racing heart, nervousness, innocent certainty
 */
export const FirstDate: React.FC = () => {
  const photoHairtie = MEMORY_ARCHIVE.find(m => m.id === 'photo-hairtie');

  return (
    <section id="first-date" className="relative w-full px-6 md:px-12 py-28 md:py-44">
      <div className="max-w-2xl mx-auto w-full">

        {/* Chapter Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 2 }}
          className="text-center mb-24 md:mb-36"
        >
          <p className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-amber/70 mb-3">
            CHAPTER VI // 25.10.25
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.15em] text-paper">
            THE FIRST DATE
          </h2>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/35 mt-2">
            BEFORE WE KNEW ANYTHING
          </p>
        </motion.div>

        {/* That Day */}
        <div className="mb-24 md:mb-36">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="text-center max-w-lg mx-auto mb-12"
          >
            <p className="font-serif text-2xl md:text-3xl font-light italic text-paper leading-relaxed mb-3">
              That day.
            </p>
            <p className="font-body text-sm md:text-base text-paper-dim/60 leading-relaxed">
              Our first date. The excitement. The nervous knot in my stomach. Wondering if you were as overwhelmed as I was.
            </p>
          </motion.div>

          {/* The Hair Tie */}
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-left max-w-md my-16"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              OCTOBER // THE HAIR TIE
            </p>
            <p className="font-serif text-xl md:text-2xl font-light text-paper leading-relaxed mb-3">
              Receiving my first hair tie from you.
            </p>
            <p className="font-body text-sm text-paper-dim/45 italic leading-relaxed">
              A tiny object that somehow became enormous. I wore it like an anchor.
            </p>
          </motion.div>

          {photoHairtie && (
            <div className="flex justify-center md:justify-end my-12 md:mr-8">
              <MemoryCard
                memory={photoHairtie}
                rotate={-1.5}
                aspect="1/1"
                style={{ maxWidth: '15rem' }}
              />
            </div>
          )}

          <MarginNote
            label={MARGIN_NOTES['firstdate-01'].label}
            text={MARGIN_NOTES['firstdate-01'].text}
            align="right"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5 }}
            className="text-center max-w-md mx-auto mt-20"
          >
            <p className="font-serif text-xl md:text-2xl font-light text-paper-dim/80 leading-relaxed mb-3">
              Recording that birthday message late that night.
            </p>
            <p className="font-body text-sm text-paper-dim/45 italic leading-relaxed">
              My heart was racing. I was nervous, overwhelmed, and happy. I was so innocently sure that we were locked in for life.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
