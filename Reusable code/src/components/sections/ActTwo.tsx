import React from 'react';
import { motion } from 'framer-motion';
import { MEMORY_ARCHIVE, MARGIN_NOTES } from '../../data/memories';
import { MemoryCard } from '../ui/MemoryCard';
import { MarginNote } from '../ui/MarginNote';

/**
 * ACT II: THE FIRST WALK & THE BLANK PAGES (AUG 2024 – MAY 2025)
 *
 * - 11.08.24: Durpin, the first actual hangout, awkward physical distance
 * - August 2024 – January 2025: The Blank Pages
 * - April 28–30, 2025: Brother's wedding, platonic return, "next time"
 * - May 25, 2025: "Homegirl"
 */
export const ActTwo: React.FC = () => {
  const photoDurpin = MEMORY_ARCHIVE.find(m => m.id === 'photo-act2-durpin');

  return (
    <section id="act-2" className="relative w-full px-6 md:px-12 py-28 md:py-44">
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
            ACT II // 2024 – 2025
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.15em] text-paper">
            THE FIRST WALK & THE BLANK PAGES
          </h2>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/35 mt-2">
            DISTANCE, TIME & RETURN
          </p>
        </motion.div>

        {/* August 11, 2024: Durpin */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="text-center max-w-lg mx-auto mb-10"
          >
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-ink-faint/50 mb-3">
              11.08.24 // DURPIN
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light italic text-paper leading-relaxed mb-4">
              Our first actual hangout.
            </p>
            <p className="font-body text-sm md:text-base text-paper-dim/65 leading-relaxed mb-4">
              Awkward physical distance. We were already comfortable talking, but suddenly being physically beside each other was different.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/40 italic leading-relaxed">
              The almost-electric fear of accidentally touching hands. Both of us carrying our own emotional baggage.
            </p>
          </motion.div>

          {photoDurpin && (
            <div className="flex justify-center my-10 md:my-14">
              <MemoryCard
                memory={photoDurpin}
                rotate={1.1}
                aspect="4/3"
                style={{ maxWidth: '18rem' }}
              />
            </div>
          )}

          <MarginNote
            label={MARGIN_NOTES['note-durpin'].label}
            text={MARGIN_NOTES['note-durpin'].text}
            align="center"
          />
        </div>

        {/* The Blank Pages (Aug 2024 - Jan 2025) */}
        <div className="my-28 md:my-40 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5 }}
            className="py-16 border-y border-ink-soft/10 max-w-md mx-auto"
          >
            <p className="font-mono text-[9px] tracking-[0.3em] uppercase text-ink-faint/35 mb-4">
              AUGUST 2024 — JANUARY 2025
            </p>
            <p className="font-serif italic text-lg text-paper-dim/40 leading-relaxed">
              [ Blank pages in the archive ]
            </p>
            <p className="font-body text-xs text-paper-dim/25 mt-3">
              Nothing recorded. The absence itself was part of the story.
            </p>
          </motion.div>
        </div>

        {/* April 28–30, 2025: The Return */}
        <div className="mb-24 md:mb-36">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-left max-w-lg mb-8"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              28.04.25 – 30.04.25 // BROTHER&rsquo;S WEDDING
            </p>
            <p className="font-serif text-xl md:text-2xl font-light text-paper leading-relaxed mb-3">
              We started talking again.
            </p>
            <p className="font-body text-sm text-paper-dim/60 leading-relaxed mb-3">
              I was out of hostel for my brother’s wedding. The conversations between us felt surprisingly pure and platonic. No forced romantic tension. Just friendship.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/40 italic leading-relaxed">
              On April 30th, right before heading back: &ldquo;Have a lot to talk but let it be for the next time!&rdquo;
            </p>
          </motion.div>

          <MarginNote
            label={MARGIN_NOTES['note-nexttime'].label}
            text={MARGIN_NOTES['note-nexttime'].text}
            align="right"
          />

          {/* May 25: Homegirl */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-right max-w-md ml-auto mt-20"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/45 mb-2">
              25.05.25
            </p>
            <p className="font-serif italic text-2xl text-paper leading-relaxed mb-2">
              &ldquo;Homegirl.&rdquo;
            </p>
            <p className="font-body text-xs text-paper-dim/40 italic">
              A stupid little nickname. A piece of our private language.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
