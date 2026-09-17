import React from 'react';

interface DateStampProps {
  date?: string;
  time?: string;
  location?: string;
  className?: string;
}

/** Monospace archival timestamp — e.g. "25.10.25 // 01:30 AM // DURPIN" */
export const DateStamp: React.FC<DateStampProps> = ({ date, time, location, className = '' }) => {
  const parts = [date, time, location].filter(Boolean);
  if (parts.length === 0) return null;

  return (
    <span className={`text-meta ${className}`}>
      {parts.join(' // ')}
    </span>
  );
};
