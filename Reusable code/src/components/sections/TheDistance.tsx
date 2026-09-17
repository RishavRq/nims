import React from 'react';
import { motion } from 'framer-motion';

/**
 * THE DISTANCE — Acknowledgment that things changed.
 *
 * Almost empty. Space itself is the message.
 * No blame. No guilt. No manipulation.
 * Pure opacity transitions. Almost no movement.
 *
 * The reader should feel:
 * "He remembers. He still cares. But he understands."
 */
export const TheDistance: React.FC = () => {
  return (
    <section
      id="the-distance"
      className="relative w-full px-6 flex flex-col items-center justify-center"
      style={{ minHeight: '100dvh' }}
    >
      <div className="max-w-md mx-auto w-full flex flex-col items-center text-center">

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5 }}
          className="text-fragment text-paper-dim/40 leading-loose mb-16 md:mb-24"
        >
          Somewhere along the way, the easy parts became difficult.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5 }}
          className="text-fragment text-paper-dim/40 leading-loose mb-16 md:mb-24"
        >
          Words that once came without thinking began needing permission.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="text-fragment text-paper-dim/35 leading-loose mb-12 md:mb-20"
        >
          I don&rsquo;t know exactly when that happened.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="text-fragment text-paper-dim/30 leading-loose mb-24 md:mb-40"
        >
          I only know that it did.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
          className="font-serif text-xl md:text-2xl font-light leading-relaxed italic text-paper-dim/55"
        >
          And still, none of those mornings became less real.
        </motion.p>

      </div>
    </section>
  );
};
