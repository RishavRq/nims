import React from 'react';
import { motion } from 'framer-motion';
import { MEMORY_ARCHIVE } from '../../data/memories';

/**
 * FRAGMENTS — Scattered pages of a notebook.
 *
 * Editorial asymmetry. Different scales. Intentional placement.
 * Each fragment has its own visual weight and breathing room.
 * Not a list. Not a feed. A private notebook, opened.
 */

interface FragmentLayout {
  memoryId: string;
  align: 'left' | 'center' | 'right';
  scale: 'large' | 'normal';
  showNote: boolean;
  spaceAfterRem: number;
  animDuration: number;
  animType: 'dissolve' | 'drift';
}

const CURATED_LAYOUT: FragmentLayout[] = [
  // Mundane, huge, iconic
  { memoryId: 'frag-05', align: 'center', scale: 'large', showNote: true, spaceAfterRem: 9,  animDuration: 2,   animType: 'dissolve' },
  // Safety and authenticity
  { memoryId: 'frag-03', align: 'left',   scale: 'normal', showNote: true, spaceAfterRem: 7,  animDuration: 1.8, animType: 'drift' },
  // Sensory — her hair
  { memoryId: 'frag-07', align: 'right',  scale: 'large', showNote: false, spaceAfterRem: 10, animDuration: 2.5, animType: 'dissolve' },
  // Emotional anchor — 14.08.25
  { memoryId: 'frag-13', align: 'center', scale: 'normal', showNote: true, spaceAfterRem: 12, animDuration: 2,   animType: 'dissolve' },
  // Mangaldham — accidental fate
  { memoryId: 'frag-08', align: 'left',   scale: 'normal', showNote: true, spaceAfterRem: 8,  animDuration: 1.5, animType: 'drift' },
  // Conversations from nothing
  { memoryId: 'frag-04', align: 'right',  scale: 'normal', showNote: true, spaceAfterRem: 6,  animDuration: 1.8, animType: 'dissolve' },
  // Her eyes — brief, large
  { memoryId: 'frag-09', align: 'center', scale: 'large', showNote: false, spaceAfterRem: 7,  animDuration: 2,   animType: 'dissolve' },
  // Being loved ordinarily
  { memoryId: 'frag-12', align: 'center', scale: 'normal', showNote: true, spaceAfterRem: 0,  animDuration: 2.5, animType: 'dissolve' },
];

export const Fragments: React.FC = () => {
  return (
    <section id="fragments" className="relative w-full px-6 md:px-12 py-24 md:py-40">
      <div className="max-w-2xl mx-auto w-full">
        {CURATED_LAYOUT.map((layout) => {
          const memory = MEMORY_ARCHIVE.find(m => m.id === layout.memoryId);
          if (!memory) return null;

          const alignClass =
            layout.align === 'left' ? 'text-left max-w-md'
            : layout.align === 'right' ? 'text-right max-w-md ml-auto'
            : 'text-center max-w-lg mx-auto';

          const animInitial =
            layout.animType === 'drift'
              ? { opacity: 0, x: layout.align === 'right' ? 12 : -12 }
              : { opacity: 0 };

          return (
            <motion.div
              key={memory.id}
              initial={animInitial}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: layout.animDuration, ease: 'easeOut' }}
              className={alignClass}
              style={{ marginBottom: `${layout.spaceAfterRem}rem` }}
            >
              {/* Archival date/location stamp */}
              {(memory.dateStamp || memory.location) && (
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint/50 mb-3">
                  {[memory.dateStamp, memory.location].filter(Boolean).join(' // ')}
                </p>
              )}

              <p className={
                layout.scale === 'large'
                  ? 'font-serif text-2xl md:text-3xl font-light leading-relaxed italic text-paper'
                  : 'font-body text-lg md:text-xl leading-relaxed text-paper-dim'
              }>
                {memory.shortFragment}
              </p>

              {layout.showNote && memory.extendedNote && (
                <p className="font-body text-sm leading-relaxed text-paper-dim/35 mt-4 italic">
                  {memory.extendedNote}
                </p>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};
