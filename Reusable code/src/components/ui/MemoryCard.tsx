import React from 'react';
import { motion } from 'framer-motion';
import type { MemoryFragment } from '../../data/memories';

interface MemoryCardProps {
  memory: MemoryFragment;
  className?: string;
  rotate?: number;
  aspect?: '4/3' | '1/1' | '3/4' | '16/9' | 'auto';
  style?: React.CSSProperties;
}

/**
 * Physical photograph artifact.
 *
 * Paper border, subtle shadow, handwritten-style caption.
 * Feels like a real print placed on a surface.
 * Displays full photograph without clipping or cropping.
 */
export const MemoryCard: React.FC<MemoryCardProps> = ({
  memory,
  className = '',
  rotate = 0,
  aspect = 'auto',
  style,
}) => {
  const aspectClass =
    aspect === '1/1'
      ? 'aspect-square'
      : aspect === '3/4'
      ? 'aspect-[3/4]'
      : aspect === '16/9'
      ? 'aspect-[16/9]'
      : aspect === '4/3'
      ? 'aspect-[4/3]'
      : '';

  const hasRealPhoto = memory.mediaUrl && memory.mediaUrl !== 'placeholder' && memory.mediaType === 'photo';

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1.4, ease: 'easeOut' }}
      className={`bg-paper p-1.5 pb-4 md:pb-5 w-full ${className}`}
      style={{
        transform: `rotate(${rotate}deg)`,
        boxShadow: '0 2px 6px rgba(0,0,0,0.1), 0 8px 24px rgba(0,0,0,0.09)',
        ...style,
      }}
    >
      {/* Photo area — real image in full natural framing or placeholder box */}
      <div className="w-full relative overflow-hidden bg-stone-900/10">
        {hasRealPhoto ? (
          <img
            src={memory.mediaUrl}
            alt={memory.shortFragment}
            className="w-full h-auto block object-contain"
            loading="lazy"
          />
        ) : (
          <div className={`w-full ${aspectClass || 'aspect-[4/3]'} bg-gradient-to-br from-stone-300 via-stone-200 to-stone-400`} />
        )}
        {/* Subtle film grain on photo surface */}
        <div
          className="absolute inset-0 opacity-[0.04] pointer-events-none"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />
      </div>

      {/* Caption — feels like handwritten archival annotation */}
      <div className="pt-2.5 px-1">
        {(memory.dateStamp || memory.location) && (
          <p className="font-mono text-[8px] md:text-[9px] tracking-[0.18em] uppercase text-ink-soft/50 mb-0.5">
            {[memory.dateStamp, memory.location].filter(Boolean).join(' · ')}
          </p>
        )}
        <p className="font-body text-xs md:text-sm text-ink/75 leading-relaxed italic">
          {memory.shortFragment}
        </p>
        {memory.extendedNote && (
          <p className="font-body text-[11px] text-ink-soft/50 italic mt-1 leading-relaxed">
            {memory.extendedNote}
          </p>
        )}
      </div>
    </motion.div>
  );
};
