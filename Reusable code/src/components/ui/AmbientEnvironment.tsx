import React from 'react';

/**
 * AMBIENT ENVIRONMENT — The background as cinematography.
 *
 * Transitions between section-specific atmospheres as the reader scrolls.
 * Uses CSS background-color transitions for reliable cross-browser interpolation.
 * Layers: base color → warm overlay → vignette.
 */

interface SectionAtmosphere {
  /** Base background color */
  base: string;
  /** Vignette darkness 0–1 */
  vignette: number;
  /** Film grain opacity */
  grain: number;
  /** Warm amber overlay opacity 0–1 */
  warmth: number;
}

const ATMOSPHERES: Record<string, SectionAtmosphere> = {
  // Deep twilight blue-black. Book cover at night.
  cover:          { base: '#0c1018', vignette: 0.75, grain: 0.04,  warmth: 0    },
  // Cool dawn blue-green. 2023–July 2024.
  'act-1':        { base: '#101820', vignette: 0.50, grain: 0.035, warmth: 0.04 },
  // Deep indigo slate. Durpin, Blank pages, April return.
  'act-2':        { base: '#121620', vignette: 0.48, grain: 0.032, warmth: 0.06 },
  // Dark charcoal slate. 14.08.25 anchor, Mangaldham, Photobooth.
  'act-3':        { base: '#16151c', vignette: 0.42, grain: 0.03,  warmth: 0.12 },
  // Warm amber charcoal. October turning point, Brownies, Video, First Kiss.
  'act-4':        { base: '#181514', vignette: 0.40, grain: 0.032, warmth: 0.18 },
  // Near-black. 01:30 AM Time Capsule stillness.
  'time-capsule': { base: '#090b0f', vignette: 0.80, grain: 0.045, warmth: 0    },
  // Deep winter slate. Ordinary months & Best friend.
  'act-5':        { base: '#14171a', vignette: 0.44, grain: 0.03,  warmth: 0.10 },
  // Muted dusky charcoal. Summer return & collapse.
  'act-6':        { base: '#161315', vignette: 0.50, grain: 0.032, warmth: 0.08 },
  // Cold neutral. Desaturated. Warmth leaving.
  'the-distance': { base: '#101215', vignette: 0.55, grain: 0.025, warmth: 0    },
  // Warm dawn. Aged cream. Morning light returning.
  birthday:       { base: '#191610', vignette: 0.30, grain: 0.03,  warmth: 0.22 },
  // Quiet neutral dark. Personal letter surface.
  'the-letter':   { base: '#0d0f14', vignette: 0.65, grain: 0.035, warmth: 0    },
  // Deep twilight again. Quiet closure.
  ending:           { base: '#0a0d14', vignette: 0.70, grain: 0.04,  warmth: 0    },
  // Midnight nostalgia. Class 10 school computer memory glow.
  'bluej-epilogue': { base: '#090b10', vignette: 0.72, grain: 0.038, warmth: 0    },
};

const DEFAULT_ATM: SectionAtmosphere = {
  base: '#1a1f2e', vignette: 0.5, grain: 0.035, warmth: 0,
};

interface Props {
  activeSection: string;
}

export const AmbientEnvironment: React.FC<Props> = ({ activeSection }) => {
  const atm = ATMOSPHERES[activeSection] || DEFAULT_ATM;

  return (
    <div className="fixed inset-0 z-0" aria-hidden="true">
      {/* Base color — transitions smoothly between sections */}
      <div
        className="absolute inset-0"
        style={{
          backgroundColor: atm.base,
          transition: 'background-color 3s ease-in-out',
        }}
      />

      {/* Warm atmospheric overlay — amber light seeping in during warmer sections */}
      <div
        className="absolute inset-0"
        style={{
          opacity: atm.warmth,
          background: 'radial-gradient(ellipse at 50% 30%, rgba(201, 169, 110, 0.15) 0%, transparent 70%)',
          transition: 'opacity 3s ease-in-out',
        }}
      />

      {/* Vignette — darkens edges, draws focus to center */}
      <div
        className="absolute inset-0"
        style={{
          opacity: atm.vignette,
          background: 'radial-gradient(ellipse at center, transparent 25%, rgba(0,0,0,0.6) 100%)',
          transition: 'opacity 3s ease-in-out',
        }}
      />
    </div>
  );
};

/** Get the grain opacity configured for a given section */
export function getGrainOpacity(section: string): number {
  return (ATMOSPHERES[section] || DEFAULT_ATM).grain;
}
