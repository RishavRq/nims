import React from 'react';
import { motion } from 'framer-motion';

/**
 * AFTER THE LETTER & THE ENDING
 *
 * Slower, restrained final reflections.
 * Stepping back not because love ended, but because continuing to reach
 * when someone needs distance becomes a form of pressure.
 * Setting something precious down quietly.
 * Pure silence afterwards.
 */
export const Ending: React.FC = () => {
  const hasTriggeredRef = React.useRef(false);
  const timerRef = React.useRef<number | null>(null);

  const handleFinalLineEnter = () => {
    if (hasTriggeredRef.current) return;
    hasTriggeredRef.current = true;

    // 4s dissolve of the line + 2.5s of quiet stillness before gentle auto-scroll
    timerRef.current = window.setTimeout(() => {
      const epilogue = document.getElementById('bluej-epilogue');
      if (epilogue) {
        const rect = epilogue.getBoundingClientRect();
        if (rect.top > 120) {
          epilogue.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    }, 6500);
  };

  React.useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <section
      id="ending"
      className="relative w-full px-6"
      style={{ minHeight: '100dvh' }}
    >
      <div
        className="max-w-md mx-auto w-full flex flex-col items-center text-center"
        style={{ paddingTop: '28vh' }}
      >

        {/* First thought — slow dissolve */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3 }}
          className="text-fragment text-paper/45 leading-loose mb-16 md:mb-24"
        >
          I am not stepping back because I stopped caring.
        </motion.p>

        {/* Second thought — missing the ordinary */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3.2 }}
          className="text-fragment text-paper-dim/40 leading-loose mb-16 md:mb-24"
        >
          I would still have chosen the ordinary mornings.<br />
          I would still have slowed down for the pitstops.
        </motion.p>

        {/* Third thought — understanding distance without pressure */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 3.5 }}
          className="font-serif text-xl md:text-2xl font-light leading-relaxed text-paper/60 mb-20 md:mb-32"
        >
          I just know that loving someone cannot mean making them carry the weight of your presence.
        </motion.p>

        {/* Final devastating restrained line */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 4 }}
          onViewportEnter={handleFinalLineEnter}
          className="font-serif italic text-lg md:text-xl text-paper/45"
        >
          I didn&rsquo;t want to leave.
        </motion.p>

        {/* Substantial empty darkness — the page simply ends */}
        <div className="h-[60vh]" />

      </div>
    </section>
  );
};
