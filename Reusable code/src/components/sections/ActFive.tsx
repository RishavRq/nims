import React from 'react';
import { motion } from 'framer-motion';
import { MEMORY_ARCHIVE, MARGIN_NOTES } from '../../data/memories';
import { MemoryCard } from '../ui/MemoryCard';
import { MarginNote } from '../ui/MarginNote';

/**
 * ACT V: THE ORDINARY MONTHS & BEST FRIEND (NOV 2025 – MAY 2026)
 *
 * - Nov–Dec 2025: Gym, Christmas break, everyday life becoming shared
 * - Jan 2026: Insecurity, arguments, defensive walls
 * - Feb 2026: Shivaratri Puja, bhang, tipsy walk home
 * - Mar–May 2026: 8.5-hour calls, staying up for maths project, becoming best friends
 */
export const ActFive: React.FC = () => {
  const photoWinter = MEMORY_ARCHIVE.find(m => m.id === 'photo-act5-winter');
  const photoSpring = MEMORY_ARCHIVE.find(m => m.id === 'photo-act5-spring');

  return (
    <section id="act-5" className="relative w-full px-6 md:px-12 py-28 md:py-44">
      <div className="max-w-2xl mx-auto w-full">

        {/* Act Header */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 2 }}
          className="text-center mb-24 md:mb-36"
        >
          <p className="font-mono text-[9px] md:text-[10px] tracking-[0.25em] uppercase text-ink-faint/40 mb-3">
            ACT V // LATE 2025 – EARLY 2026
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.15em] text-paper">
            THE ORDINARY MONTHS
          </h2>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/35 mt-2">
            DAILY LIFE &amp; BEST FRIENDS
          </p>
        </motion.div>

        {/* Nov-Dec: Everyday Life */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-left max-w-lg mb-8"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              NOV – DEC 2025 // WINTER
            </p>
            <p className="font-serif text-xl md:text-2xl font-light text-paper leading-relaxed mb-3">
              Gym, Christmas break, and ordinary happiness.
            </p>
            <p className="font-body text-sm text-paper-dim/60 leading-relaxed">
              Love growing smoothly. Normal disagreements, shared tables, becoming woven into each other’s routine. The relationship becoming part of everyday life.
            </p>
          </motion.div>

          {photoWinter && (
            <div className="flex justify-start md:ml-4 my-10">
              <MemoryCard
                memory={photoWinter}
                rotate={-0.9}
                aspect="4/3"
                style={{ maxWidth: '17rem' }}
              />
            </div>
          )}
        </div>

        {/* January 2026: Defensive Walls */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-right max-w-md ml-auto mb-8"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/45 mb-2">
              JANUARY 2026
            </p>
            <p className="font-serif text-xl md:text-2xl font-light text-paper-dim/85 leading-relaxed mb-3">
              Arguments grew heavier.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/40 leading-relaxed italic">
              Fear of losing each other crept in. I became more insecure, defensive, and began putting walls around myself.
            </p>
          </motion.div>
        </div>

        {/* February 2026: Shivaratri Bhang */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-center max-w-md mx-auto mb-8"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              FEBRUARY 2026 // SHIVARATRI
            </p>
            <p className="font-serif italic text-2xl md:text-3xl text-paper leading-relaxed mb-3">
              Bhang and walking home tipsy.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/45 leading-relaxed">
              Both of us tipsy, laughing in the cold. I barely remember getting home. A completely human, ridiculous memory.
            </p>
          </motion.div>
        </div>

        {/* March–May 2026: Best Friend */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="text-center max-w-lg mx-auto mb-10"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-amber/65 mb-2">
              MARCH – MAY 2026
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light italic text-paper leading-relaxed mb-4">
              More than a girlfriend.
            </p>
            <p className="font-body text-sm md:text-base text-paper-dim/65 leading-relaxed mb-4">
              8½-hour calls, stupid teas, random reels, and everyday comfort.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/45 leading-relaxed">
              You started becoming more of my everything than ever before. That was why everything that followed hurt as much as it did.
            </p>
          </motion.div>

          {photoSpring && (
            <div className="flex justify-center my-10 md:my-14">
              <MemoryCard
                memory={photoSpring}
                rotate={0.7}
                aspect="4/3"
                style={{ maxWidth: '18rem' }}
              />
            </div>
          )}

          <MarginNote
            label={MARGIN_NOTES['note-calls'].label}
            text={MARGIN_NOTES['note-calls'].text}
            align="center"
          />
        </div>

      </div>
    </section>
  );
};
