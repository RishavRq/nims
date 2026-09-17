import React from 'react';
import { motion } from 'framer-motion';

/**
 * CHAPTER VIII — THINGS I DIDN'T KNOW I'D MISS & BIRTHDAY
 *
 * 1. "THINGS I DIDN'T KNOW I'D MISS" — tiny, unrecorded ordinary fragments
 * 2. 07.09.26 — Warmth returning like morning light into an old room
 * "Happy birthday, Anushka."
 * "I just wanted you to have this."
 */
export const Birthday: React.FC = () => {
  return (
    <section
      id="birthday"
      className="relative w-full px-6 flex flex-col items-center justify-center py-28 md:py-44"
      style={{ minHeight: '100dvh' }}
    >
      <div className="max-w-lg mx-auto w-full flex flex-col items-center text-center">

        {/* ==========================================
            SUBSECTION: THINGS I DIDN'T KNOW I'D MISS
           ========================================== */}
        <div className="w-full mb-32 md:mb-48">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="font-mono text-[9px] tracking-[0.25em] uppercase text-ink-faint/40 mb-12"
          >
            THINGS I DIDN&rsquo;T KNOW I&rsquo;D MISS
          </motion.p>

          <div className="space-y-12 md:space-y-16 text-paper-dim/60">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8 }}
              className="font-serif italic text-lg md:text-xl"
            >
              The little pauses before you answered.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8 }}
              className="font-body text-sm md:text-base text-paper-dim/45"
            >
              The way you walked slightly slower when you were thinking.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.8 }}
              className="font-serif italic text-lg md:text-xl"
            >
              Knowing what was bothering you before you had to find the words.
            </motion.p>
          </div>
        </div>

        {/* ==========================================
            SUBSECTION: 07.09.26 (THE BIRTHDAY)
           ========================================== */}
        <div className="w-full">
          {/* Date — warm dissolve */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 3 }}
            className="font-mono text-2xl md:text-3xl font-light tracking-[0.25em] text-dawn/75 mb-12"
          >
            07.09.26
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 0.8 }}
            className="font-serif text-2xl md:text-3xl font-light leading-relaxed italic text-paper/90 mb-12"
          >
            Happy birthday, Anuskha.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 1.5 }}
            className="text-fragment text-paper-dim/45 mb-6"
          >
            I don&rsquo;t know what this year will bring you.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 2.2 }}
            className="text-fragment text-paper-dim/45 mb-14"
          >
            I don&rsquo;t know where we&rsquo;ll be.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2, delay: 2.8 }}
            className="text-fragment text-paper-dim/50 mb-10"
          >
            And I&rsquo;m not asking you to decide any of that today.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5, delay: 3.6 }}
            className="font-serif text-xl md:text-2xl font-light leading-relaxed text-paper/75"
          >
            I just wanted you to have this.
          </motion.p>
        </div>

      </div>
    </section>
  );
};
