import React from 'react';
import { motion } from 'framer-motion';

interface MarginNoteProps {
  label: string;
  text: string;
  className?: string;
  align?: 'left' | 'center' | 'right';
}

/**
 * MARGIN NOTE — Small, archival marginalia.
 *
 * Appears between and alongside memory clusters.
 * Feels like handwritten marginalia or a note penciled into the edge of a notebook.
 */
export const MarginNote: React.FC<MarginNoteProps> = ({
  label,
  text,
  className = '',
  align = 'left',
}) => {
  const alignClass =
    align === 'right'
      ? 'text-right ml-auto border-r border-ink-soft/20 pr-4'
      : align === 'center'
      ? 'text-center mx-auto border-t border-ink-soft/15 pt-3'
      : 'text-left border-l border-ink-soft/20 pl-4';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 1.8, ease: 'easeOut' }}
      className={`max-w-xs my-10 md:my-16 ${alignClass} ${className}`}
    >
      <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-ink-faint/45 mb-1.5">
        {label}
      </p>
      <p className="font-serif italic text-sm md:text-[15px] leading-relaxed text-paper-dim/60">
        &ldquo;{text}&rdquo;
      </p>
    </motion.div>
  );
};
