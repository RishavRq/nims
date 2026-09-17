import React from 'react';
import { motion } from 'framer-motion';
import { MEMORY_ARCHIVE, MARGIN_NOTES } from '../../data/memories';
import { MemoryCard } from '../ui/MemoryCard';
import { MarginNote } from '../ui/MarginNote';

/**
 * CHAPTER V — SAFETY
 *
 * Emotional authenticity and presence:
 * - Not having to perform or be interesting
 * - Being ridiculous together without judgment
 * - Future plans & studying together
 * - 14.08.25: Her telling him he deserved all the love and care in the world
 * - Being loved ordinarily
 */
export const Safety: React.FC = () => {
  const photoStudying = MEMORY_ARCHIVE.find(m => m.id === 'photo-studying');
  const photo1408 = MEMORY_ARCHIVE.find(m => m.id === 'photo-1408');

  return (
    <section id="safety" className="relative w-full px-6 md:px-12 py-28 md:py-44">
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
            CHAPTER V
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.15em] text-paper">
            SAFETY
          </h2>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/35 mt-2">
            WITHOUT PERFORMANCE
          </p>
        </motion.div>

        {/* Not Performing */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="text-left max-w-lg mb-8"
          >
            <p className="font-serif text-2xl md:text-3xl font-light text-paper leading-relaxed mb-4">
              I wasn&rsquo;t just happy because I had a girlfriend.
            </p>
            <p className="font-body text-sm md:text-base text-paper-dim/65 leading-relaxed">
              I was happy because I had found someone around whom I didn&rsquo;t feel like I had to perform.
            </p>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="font-serif italic text-lg md:text-xl text-paper-dim/60 text-center max-w-md mx-auto my-12"
          >
            I wasn&rsquo;t trying to be interesting. I didn&rsquo;t have to find the right thing to say. I could just exist.
          </motion.p>

          <MarginNote
            label={MARGIN_NOTES['safety-01'].label}
            text={MARGIN_NOTES['safety-01'].text}
            align="left"
          />
        </div>

        {/* Future Plans & Studying */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-right max-w-md ml-auto mb-10"
          >
            <p className="font-serif text-xl md:text-2xl font-light text-paper leading-relaxed mb-3">
              We used to talk about the future as though it were somewhere we were already going.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/40 italic leading-relaxed">
              Class 12 plans. Valentine&rsquo;s Day hopes. Studying together.
            </p>
          </motion.div>

          {photoStudying && (
            <div className="flex justify-end my-10 md:mr-6">
              <MemoryCard
                memory={photoStudying}
                rotate={-1.1}
                aspect="4/3"
                style={{ maxWidth: '17rem' }}
              />
            </div>
          )}
        </div>

        {/* 14.08.25 Anchor */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="text-center max-w-lg mx-auto mb-10"
          >
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-amber/60 mb-3">
              14.08.25
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light italic text-paper leading-relaxed mb-4">
              I remember 14 August 2025.
            </p>
            <p className="font-body text-sm md:text-base text-paper-dim/70 leading-relaxed mb-4">
              You told me I deserved all the love and care in the world. I don&rsquo;t remember the exact conversation that brought us there. I just remember that you said it, and how much it meant to me.
            </p>
          </motion.div>

          {photo1408 && (
            <div className="flex justify-center my-12">
              <MemoryCard
                memory={photo1408}
                rotate={0.7}
                aspect="4/3"
                style={{ maxWidth: '18rem' }}
              />
            </div>
          )}

          <MarginNote
            label={MARGIN_NOTES['safety-02'].label}
            text={MARGIN_NOTES['safety-02'].text}
            align="center"
          />

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.5 }}
            className="text-left max-w-md mt-16"
          >
            <p className="font-serif text-xl md:text-2xl font-light text-paper-dim/80 leading-relaxed mb-2">
              There were days when being loved by you felt beautifully ordinary.
            </p>
            <p className="font-body text-sm text-paper-dim/40 italic">
              I stopped being afraid of losing it.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
