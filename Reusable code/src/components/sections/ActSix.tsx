import React from 'react';
import { motion } from 'framer-motion';

/**
 * ACT VI: THE RETURN, THE COLLAPSE & MATURE GROWTH (JUNE – AUG 2026)
 *
 * - June 2026: The Return around his birthday & walk the next day
 * - July 2026: The Collapse, broken promise, emotional maturity
 * - August 2026: The Quieter Love, standing beside rather than beneath
 */
export const ActSix: React.FC = () => {
  return (
    <section id="act-6" className="relative w-full px-6 md:px-12 py-28 md:py-44">
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
            ACT VI // SUMMER 2026
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.15em] text-paper">
            THE RETURN &amp; THE COLLAPSE
          </h2>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/35 mt-2">
            THE SHAPE OF A QUIETER LOVE
          </p>
        </motion.div>

        {/* June 2026: The Return */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="text-center max-w-lg mx-auto mb-8"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              JUNE 2026 // THE RETURN
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light text-paper leading-relaxed mb-4">
              We broke up, then you returned around my birthday.
            </p>
            <p className="font-body text-sm md:text-base text-paper-dim/65 leading-relaxed mb-3">
              The next day we went on a walk. Love felt alive again.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/40 italic leading-relaxed">
              I honestly thought we had survived and made it through.
            </p>
          </motion.div>
        </div>

        {/* July 2026: The Collapse */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-left max-w-lg mb-8"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              JULY 2026 // THE COLLAPSE
            </p>
            <p className="font-serif text-xl md:text-2xl font-light text-paper leading-relaxed mb-3">
              Everything began collapsing.
            </p>
            <p className="font-body text-sm text-paper-dim/60 leading-relaxed mb-3">
              I became defensive, insecure, and hurt. I broke a promise and raised my voice.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/45 italic leading-relaxed">
              I understand now that being hurt never justified hurting someone else.
            </p>
          </motion.div>
        </div>

        {/* August 2026: Mature Growth */}
        <div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5 }}
            className="text-center max-w-lg mx-auto"
          >
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-amber/65 mb-3">
              AUGUST 2026 // MATURE GROWTH
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light italic text-paper leading-relaxed mb-4">
              Learning the shape of a quieter love.
            </p>
            <p className="font-body text-sm md:text-base text-paper-dim/70 leading-relaxed mb-4">
              Love isn’t ownership. Love isn’t convincing someone, holding them so tightly they can’t breathe, or losing yourself to keep someone else.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/45 italic leading-relaxed">
              I still care, but the shape of it is quieter. Less desperate. More open. Wanting to stand beside you, not beneath you.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
