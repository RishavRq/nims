import React from 'react';
import { motion } from 'framer-motion';
import { MEMORY_ARCHIVE, MARGIN_NOTES } from '../../data/memories';
import { MemoryCard } from '../ui/MemoryCard';
import { VideoPlayer } from '../ui/VideoPlayer';
import { MarginNote } from '../ui/MarginNote';

/**
 * ACT III: THE PIVOT & THE ANCHOR (AUG – SEPT 2025)
 *
 * - 14.08.25: Her telling him he deserved all the love and care in this world
 * - September 2025: Losing an old self
 * - 21.09.25: Mangaldham, the wish, the guard & the video recording
 * - 26.09.25: Industrial Park concert & photobooth
 */
export const ActThree: React.FC = () => {
  const photo1408 = MEMORY_ARCHIVE.find(m => m.id === 'photo-act3-1408');
  const photoPhotobooth = MEMORY_ARCHIVE.find(m => m.id === 'photo-act3-photobooth');

  return (
    <section id="act-3" className="relative w-full px-6 md:px-12 py-28 md:py-44">
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
            ACT III // AUGUST – SEPTEMBER 2025
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.15em] text-paper">
            THE PIVOT & THE ANCHOR
          </h2>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/35 mt-2">
            WHEN LIFE BEGAN TO SHIFT
          </p>
        </motion.div>

        {/* 14.08.25: The Anchor */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="text-center max-w-lg mx-auto mb-10"
          >
            <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-amber/65 mb-3">
              14.08.25
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light italic text-paper leading-relaxed mb-4">
              &ldquo;You deserve all the love and care in this world.&rdquo;
            </p>
            <p className="font-body text-sm md:text-base text-paper-dim/70 leading-relaxed mb-4">
              After the breakup with Nima, I was emotionally shattered. I spoke with you through it. You were simply there for me at a moment when I was falling apart.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/45 italic leading-relaxed">
              That sentence came from you, not me. It carried me through the dark.
            </p>
          </motion.div>

          {photo1408 && (
            <div className="flex justify-center my-10 md:my-14">
              <MemoryCard
                memory={photo1408}
                rotate={-0.6}
                aspect="4/3"
                style={{ maxWidth: '18rem' }}
              />
            </div>
          )}

          <MarginNote
            label={MARGIN_NOTES['note-1408'].label}
            text={MARGIN_NOTES['note-1408'].text}
            align="center"
          />
        </div>

        {/* September Transition */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2 }}
          className="text-left max-w-md mb-24 md:mb-36"
        >
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/45 mb-2">
            SEPTEMBER 2025
          </p>
          <p className="font-serif text-xl md:text-2xl font-light text-paper-dim/85 leading-relaxed mb-2">
            September was brutal.
          </p>
          <p className="font-body text-xs md:text-sm text-paper-dim/40 italic leading-relaxed">
            The old relationship was ending emotionally. I was changing. I was losing a version of myself.
          </p>
        </motion.div>

        {/* 21.09.25: Mangaldham */}
        <div className="mb-28 md:mb-40">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="text-center max-w-lg mx-auto mb-10"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-amber/60 mb-3">
              21.09.25 // MANGALDHAM
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light italic text-paper leading-relaxed mb-4">
              We originally planned to thrift. It was closed.
            </p>
            <p className="font-body text-sm md:text-base text-paper-dim/60 leading-relaxed mb-4">
              So we went to Mangaldham instead. We joked about getting jobs at Vishal Mega Mart while it was being built.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/45 leading-relaxed">
              And inside, I made a silent wish: to finally have someone who would genuinely love me for who I was. Moments later, the guard mistook us for a couple and almost threw us out.
            </p>
            <p className="font-body text-xs text-paper-dim/40 italic mt-3">
              Looking back, it felt almost like life had made a prediction before I understood what was happening.
            </p>
          </motion.div>

          {/* Mangaldham Video Recording (Muted, does not interrupt soundtrack) */}
          <div className="my-10">
            <VideoPlayer
              src="/video/mangaldham.mp4"
              dateStamp="21.09.25"
              location="MANGALDHAM"
              caption="Mangaldham."
              extendedNote="A quiet recording from that afternoon."
              duckAudio={false}
              isMuted={true}
              rotate={0.4}
            />
          </div>

          <MarginNote
            label={MARGIN_NOTES['note-mangaldham'].label}
            text={MARGIN_NOTES['note-mangaldham'].text}
            align="center"
          />
        </div>

        {/* 26.09.25: Industrial Park & Photobooth */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-right max-w-md ml-auto mb-8"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              26.09.25 // INDUSTRIAL PARK
            </p>
            <p className="font-serif text-xl md:text-2xl font-light text-paper leading-relaxed mb-3">
              Concert boredom &amp; Photobooth.
            </p>
            <p className="font-body text-sm text-paper-dim/50 leading-relaxed mb-3">
              We got bored at the concert and took photobooth pictures. We looked completely ridiculous and laughed uncontrollably.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/40 italic">
              That was the night I first brought up morning walks.
            </p>
          </motion.div>

          {photoPhotobooth && (
            <div className="flex justify-end my-10 md:mr-6">
              <MemoryCard
                memory={photoPhotobooth}
                rotate={1.4}
                aspect="3/4"
                style={{ maxWidth: '15rem' }}
              />
            </div>
          )}
        </div>

      </div>
    </section>
  );
};
