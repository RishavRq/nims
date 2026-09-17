import React from 'react';

interface FilmGrainProps {
  opacity?: number;
}

/** Lightweight CSS film grain overlay — fixed position, pointer-events none.
 *  Opacity is modulated by the ambient environment system per section. */
export const FilmGrain: React.FC<FilmGrainProps> = ({ opacity = 0.035 }) => {
  return <div className="film-grain" aria-hidden="true" style={{ opacity }} />;
};
