import React from 'react';
import { motion } from 'framer-motion';
import { MEMORY_ARCHIVE } from '../../data/memories';
import { MemoryCard } from '../ui/MemoryCard';

/**
 * MEMORIES — A visual archive of photographs.
 *
 * Not a grid. Asymmetric, staggered, varied sizes.
 * Each photo feels like something physically placed and kept.
 * Photographs are placeholders until real images are added.
 */

interface PhotoConfig {
  id: string;
  maxWidth: string;
  align: 'left' | 'center' | 'right';
  rotate: number;
  indent: string;
}

const PHOTO_CONFIGS: PhotoConfig[] = [
  { id: 'photo-02', maxWidth: '22rem', align: 'center', rotate: -0.8, indent: '' },
  { id: 'photo-04', maxWidth: '14rem', align: 'right',  rotate: 1.5,  indent: 'mr-6 md:mr-16' },
  { id: 'photo-03', maxWidth: '16rem', align: 'left',   rotate: -1.2, indent: 'ml-6 md:ml-16' },
  { id: 'photo-06', maxWidth: '12rem', align: 'center', rotate: 0.5,  indent: '' },
  { id: 'photo-07', maxWidth: '18rem', align: 'right',  rotate: -0.3, indent: 'mr-8 md:mr-20' },
  { id: 'photo-08', maxWidth: '20rem', align: 'center', rotate: 0.8,  indent: '' },
];

export const Memories: React.FC = () => {
  return (
    <section id="memories" className="relative w-full px-6 py-24 md:py-40">
      <div className="max-w-2xl mx-auto w-full">
        {/* Section label */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 2 }}
          className="font-mono text-[10px] tracking-[0.2em] uppercase text-ink-faint/40 text-center mb-20 md:mb-32"
        >
          ARCHIVE
        </motion.p>

        {/* Staggered photo layout — not a grid */}
        <div className="space-y-16 md:space-y-28">
          {PHOTO_CONFIGS.map((config) => {
            const memory = MEMORY_ARCHIVE.find(m => m.id === config.id);
            if (!memory) return null;

            const alignClass =
              config.align === 'left'
                ? `${config.indent}`
                : config.align === 'right'
                  ? `flex justify-end ${config.indent}`
                  : 'flex justify-center';

            return (
              <div key={config.id} className={alignClass}>
                <MemoryCard
                  memory={memory}
                  rotate={config.rotate}
                  style={{ maxWidth: config.maxWidth }}
                />
              </div>
            );
          })}
        </div>

        {/* Archive note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.5, delay: 0.5 }}
          className="text-center mt-20 md:mt-32 font-mono text-[9px] tracking-[0.15em] uppercase text-ink-faint/25"
        >
          photographs are placeholders. the memories are not.
        </motion.p>
      </div>
    </section>
  );
};
