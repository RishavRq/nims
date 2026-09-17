import React from 'react';
import { motion } from 'framer-motion';
import { THE_LETTER } from '../../data/memories';

/**
 * THE LETTER — Paper-textured personal letter.
 *
 * Feels like real paper placed on a dark desk.
 * Enhanced physical presence — fiber texture, deep shadow, slight rotation.
 * Single gentle rise into view.
 *
 * The letter content lives in src/data/memories.ts (THE_LETTER constant).
 */
export const TheLetter: React.FC = () => {
  const paragraphs = THE_LETTER.split('\n\n').filter(p => p.trim());

  return (
    <section id="the-letter" className="relative w-full px-4 py-20 md:py-32">
      <div className="max-w-lg mx-auto w-full flex flex-col items-center">

        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="font-mono text-[9px] tracking-[0.2em] uppercase text-white/30 text-center mb-8"
        >
          A LETTER
        </motion.p>

        {/* Neutral dark letter surface — easy on the eyes in the dark */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
          className="w-full rounded-[2px] bg-[#141518] border border-white/[0.08] shadow-[0_16px_48px_rgba(0,0,0,0.6)] px-8 py-10 md:px-12 md:py-14 lg:px-16 lg:py-16"
          style={{ transform: 'rotate(-0.3deg)' }}
        >
          {/* Handwritten-style date */}
          <p className="font-body text-xs italic text-white/40 mb-8">
            August 2026
          </p>

          {paragraphs.map((para, i) => (
            <p
              key={i}
              className="font-body text-[15px] md:text-[17px] leading-[2.1] text-white/85 mb-6 last:mb-0"
              style={{ textIndent: i > 0 ? '1.5em' : undefined }}
            >
              {para}
            </p>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
