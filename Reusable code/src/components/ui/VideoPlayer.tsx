import React, { useRef, useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion } from 'framer-motion';
import { audioManager } from '../../lib/audio';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  dateStamp?: string;
  location?: string;
  caption?: string;
  extendedNote?: string;
  duckAudio?: boolean;
  isMuted?: boolean;
  rotate?: number;
  aspect?: string;
}

/**
 * Physical analog video artifact.
 *
 * Appears as a found recording frame.
 * Does NOT autoplay.
 * Pauses background music during playback unless duckAudio is false / isMuted is true.
 */
export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  src,
  poster,
  dateStamp = '19.10.25',
  location = 'THE WALK',
  caption = '19 October 2025.',
  extendedNote,
  duckAudio = true,
  isMuted = false,
  rotate = -0.5,
  aspect = 'aspect-[4/3]',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const shouldDuck = duckAudio && !isMuted;

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play().catch(err => {
        console.warn('Video playback prevented or file missing:', err);
      });
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => {
      setIsPlaying(true);
      setHasStarted(true);
      if (shouldDuck) {
        audioManager.onForegroundMediaPlay();
      }
    };

    const handlePause = () => {
      setIsPlaying(false);
      if (shouldDuck) {
        audioManager.onForegroundMediaPauseOrEnd();
      }
    };

    const handleEnded = () => {
      setIsPlaying(false);
      if (shouldDuck) {
        audioManager.onForegroundMediaPauseOrEnd();
      }
    };

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      setDuration(video.duration || 0);
    };

    const handleError = () => {
      console.warn(`Video file at ${src} could not be loaded.`);
    };

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('error', handleError);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('error', handleError);
      if (isPlaying && shouldDuck) {
        audioManager.onForegroundMediaPauseOrEnd();
      }
    };
  }, [src, isPlaying, shouldDuck]);

  const formatTime = (t: number) => {
    if (!t || isNaN(t)) return '0:00';
    const m = Math.floor(t / 60);
    const s = Math.floor(t % 60);
    return `${m}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1.6, ease: 'easeOut' }}
      className="bg-paper p-2 pb-5 md:p-3 md:pb-6 w-full max-w-md mx-auto rounded-[1px]"
      style={{
        transform: `rotate(${rotate}deg)`,
        boxShadow: '0 2px 8px rgba(0,0,0,0.12), 0 10px 28px rgba(0,0,0,0.1)',
      }}
    >
      {/* Video Container */}
      <div className={`relative w-full ${aspect} bg-night-deep overflow-hidden rounded-[1px]`}>
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        />

        {/* Subtle film grain on video surface */}
        <div
          className="absolute inset-0 opacity-[0.05] pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 128 128' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          }}
        />

        {/* Date/Location stamp overlay (top left) */}
        <div className="absolute top-2.5 left-2.5 z-10 pointer-events-none bg-black/40 backdrop-blur-sm px-2 py-0.5 rounded-[1px] border border-white/5">
          <p className="font-mono text-[8px] tracking-[0.2em] text-paper-dim/80 uppercase">
            REC // {dateStamp} // {location}
          </p>
        </div>

        {/* Play/Pause Overlay Button */}
        <button
          onClick={togglePlay}
          className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-300 ${
            isPlaying ? 'bg-black/0 hover:bg-black/20 opacity-0 hover:opacity-100' : 'bg-black/30'
          }`}
          aria-label={isPlaying ? 'Pause recording' : 'Play recording'}
        >
          <div className="w-12 h-12 rounded-full border border-paper-dim/40 bg-black/40 backdrop-blur-sm flex items-center justify-center text-paper-dim hover:text-paper hover:scale-105 transition-all">
            {isPlaying ? (
              <Pause className="w-5 h-5" />
            ) : (
              <Play className="w-5 h-5 ml-0.5" />
            )}
          </div>
        </button>

        {/* Progress bar at bottom of video */}
        {hasStarted && (
          <div className="absolute bottom-0 left-0 right-0 z-10 h-1 bg-black/40">
            <div
              className="h-full bg-amber/70 transition-all duration-100"
              style={{
                width: `${duration ? (currentTime / duration) * 100 : 0}%`,
              }}
            />
          </div>
        )}
      </div>

      {/* Caption & Timestamp Details */}
      <div className="pt-3 px-1">
        <div className="flex justify-between items-center mb-1">
          <p className="font-mono text-[8px] md:text-[9px] tracking-[0.18em] uppercase text-ink-soft/50">
            {dateStamp} · {location}
          </p>
          {duration > 0 && (
            <p className="font-mono text-[8px] text-ink-soft/40">
              {formatTime(currentTime)} / {formatTime(duration)}
            </p>
          )}
        </div>
        <p className="font-body text-xs md:text-sm text-ink/80 leading-relaxed italic">
          {caption}
        </p>
        {extendedNote && (
          <p className="font-body text-[11px] md:text-xs text-ink-soft/50 italic mt-1 leading-relaxed">
            {extendedNote}
          </p>
        )}
      </div>
    </motion.div>
  );
};
