import React from 'react';
import { motion } from 'framer-motion';
import { MEMORY_ARCHIVE, MARGIN_NOTES } from '../../data/memories';
import { MemoryCard } from '../ui/MemoryCard';
import { MarginNote } from '../ui/MarginNote';

/**
 * ACT I: THE QUIET BEGINNINGS (2023 – JULY 2024)
 *
 * - 2023: Computer practical, exam conversations, "Hi", "Hello"
 * - April/May 2024: Gojo reels on Instagram, thinking she was cool
 * - June 2024: Conversations about life and love, the "fun fact" moment
 * - July 2024: Quiz team, changing tuition timings to walk home with her
 */
export const ActOne: React.FC = () => {
  const photoWalk = MEMORY_ARCHIVE.find(m => m.id === 'photo-act1-walk');

  return (
    <section id="act-1" className="relative w-full px-6 md:px-12 py-28 md:py-44">
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
            ACT I // 2023 – 2024
          </p>
          <h2 className="font-serif text-2xl md:text-3xl font-light tracking-[0.15em] text-paper">
            THE QUIET BEGINNINGS
          </h2>
          <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/35 mt-2">
            BEFORE ANYTHING WAS OBVIOUS
          </p>
        </motion.div>

        {/* 2023: Computer Practical */}
        <div className="mb-24 md:mb-36">
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-left max-w-lg mb-8"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              2023 // COMPUTER LAB
            </p>
            <p className="font-serif text-xl md:text-2xl font-light text-paper leading-relaxed mb-3">
              You asked what was coming for the computer practical.
            </p>
            <p className="font-body text-sm text-paper-dim/50 leading-relaxed">
              We talked. Then exam conversations. Then greetings in the hallway. Hi. Hello. Nothing obviously important. But looking back, that was where everything started.
            </p>
          </motion.div>

          <MarginNote
            label={MARGIN_NOTES['note-2023'].label}
            text={MARGIN_NOTES['note-2023'].text}
            align="left"
          />
        </div>

        {/* April / May 2024: Gojo Reels */}
        <div className="mb-24 md:mb-36">
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-right max-w-md ml-auto mb-8"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              APRIL – MAY 2024 // INSTAGRAM
            </p>
            <p className="font-serif text-xl md:text-2xl font-light text-paper leading-relaxed mb-3">
              You started sending Gojo reels.
            </p>
            <p className="font-body text-sm text-paper-dim/45 leading-relaxed italic">
              At that point, you were simply someone I thought was cool. I just liked talking to you. Nothing needed to be romantic yet.
            </p>
          </motion.div>

          <MarginNote
            label={MARGIN_NOTES['note-gojo'].label}
            text={MARGIN_NOTES['note-gojo'].text}
            align="right"
          />
        </div>

        {/* June 2024: Deeper Conversations */}
        <div className="mb-24 md:mb-36">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 2.2 }}
            className="text-center max-w-lg mx-auto mb-10"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/45 mb-2">
              JUNE 2024
            </p>
            <p className="font-serif text-2xl md:text-3xl font-light italic text-paper leading-relaxed mb-4">
              Conversations began drifting into the quiet hours.
            </p>
            <p className="font-body text-sm md:text-base text-paper-dim/60 leading-relaxed mb-3">
              We talked about life, relationships, experiences with love. The little “fun fact” moments.
            </p>
            <p className="font-body text-xs md:text-sm text-paper-dim/40 italic leading-relaxed">
              I slowly started realizing I liked you, even if I didn’t fully understand what I was feeling yet.
            </p>
          </motion.div>
        </div>

        {/* July 2024: Quiz Team & Tuition Walks */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 2 }}
            className="text-left max-w-lg mb-8"
          >
            <p className="font-mono text-[9px] tracking-[0.2em] uppercase text-ink-faint/50 mb-2">
              JULY 2024 // QUIZ TEAM & TUITIONS
            </p>
            <p className="font-serif text-xl md:text-2xl font-light text-paper leading-relaxed mb-3">
              Walking home together after tuitions.
            </p>
            <p className="font-body text-sm text-paper-dim/55 leading-relaxed">
              After you changed your tuition timings, I changed mine too so I could keep walking home with you. I wasn’t thinking about love. I simply wanted a little more time with you.
            </p>
          </motion.div>

          {photoWalk && (
            <div className="flex justify-start md:ml-4 my-10">
              <MemoryCard
                memory={photoWalk}
                rotate={-0.8}
                aspect="4/3"
                style={{ maxWidth: '17rem' }}
              />
            </div>
          )}

          <MarginNote
            label={MARGIN_NOTES['note-tuition'].label}
            text={MARGIN_NOTES['note-tuition'].text}
            align="left"
          />
        </div>

      </div>
    </section>
  );
};
