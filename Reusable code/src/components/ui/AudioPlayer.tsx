import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Play, Pause } from 'lucide-react';

interface AudioPlayerProps {
  src: string;
  label?: string;
  onPlay?: () => void;
  onPause?: () => void;
  onEnded?: () => void;
}

/**
 * Minimal cassette-inspired audio player.
 * Styled with paper/ink palette — not flashy.
 */
export const AudioPlayer: React.FC<AudioPlayerProps> = ({ src, label, onPlay, onPause, onEnded }) => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const togglePlay = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      onPause?.();
      setIsPlaying(false);
    } else {
      audio.play().then(() => {
        setIsPlaying(true);
        onPlay?.();
      }).catch((err) => {
        console.warn('Voice note playback was prevented or file not found:', err);
        setIsPlaying(false);
      });
    }
  }, [isPlaying, onPlay, onPause]);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
      setProgress(audio.duration ? (audio.currentTime / audio.duration) * 100 : 0);
    };

    const handleLoaded = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      onEnded?.();
    };

    const handleError = () => {
      console.warn(`Audio file at ${src} could not be loaded (offline or file not found).`);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoaded);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoaded);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
    };
  }, [src, onEnded]);

  const formatTime = (t: number) => {
    if (!t || isNaN(t)) return '0:00';
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  const handleSeek = (e: React.MouseEvent<HTMLDivElement>) => {
    const audio = audioRef.current;
    if (!audio || !duration) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / rect.width));
    audio.currentTime = ratio * duration;
  };

  return (
    <div className="w-full max-w-sm mx-auto">
      <audio ref={audioRef} src={src} preload="metadata" />

      {label && (
        <p className="text-meta mb-3 text-center">{label}</p>
      )}

      <div className="flex items-center gap-4 p-4 rounded-sm border border-ink-soft/20 bg-night-deep/50">
        {/* Play/Pause */}
        <button
          onClick={togglePlay}
          className="w-10 h-10 rounded-full border border-paper-dim/30 flex items-center justify-center text-paper-dim hover:text-paper transition-colors flex-shrink-0"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>

        {/* Progress */}
        <div className="flex-1 flex flex-col gap-1.5">
          <div
            className="w-full h-1 bg-ink-soft/20 rounded-full cursor-pointer relative"
            onClick={handleSeek}
          >
            <div
              className="h-full bg-amber/60 rounded-full transition-all duration-100"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="flex justify-between">
            <span className="text-meta text-[9px]">{formatTime(currentTime)}</span>
            <span className="text-meta text-[9px]">{formatTime(duration)}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
