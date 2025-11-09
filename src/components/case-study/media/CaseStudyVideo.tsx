'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PlayIcon } from '@/components/Icons';
import { Badge } from '@/components/ui/Badge';

export default function CaseStudyVideo({
  src,
  captionContent,
  videoNumber,
  className,
}: {
  src: string;
  captionContent?: string;
  videoNumber?: string;
  className?: string;
}) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isUserPaused, setIsUserPaused] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (!video) return;

      // Only auto-play/pause if the user hasn't manually paused
      if (!isUserPaused) {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
          setIsPlaying(true);
        } else {
          video.pause();
          setIsPlaying(false);
        }
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5,
    });

    observer.observe(video);
    return () => observer.disconnect();
  }, [isUserPaused]);

  const handleClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
      setIsPlaying(false);
      setIsUserPaused(true);
    } else {
      video.play().catch(() => {});
      setIsPlaying(true);
      setIsUserPaused(false);
    }
  };

  return (
    <div
      className={`relative overflow-hidden ${className}`}
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      {/* Video */}
      <motion.video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        preload="auto"
        className="h-full w-full object-cover transition-[filter] duration-300"
        animate={{ filter: isPlaying ? 'brightness(1)' : 'brightness(0.6)' }}
      />

      {/* Play icon overlay */}
      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            key="play-overlay"
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
            className="pointer-events-none absolute inset-0 flex items-center justify-center"
          >
            <motion.div
              className="rounded-full bg-black/50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <PlayIcon className="size-8 text-white" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {captionContent && (
        <div className="mt-2 flex items-center justify-end space-x-2 text-xs text-slate-500 sm:mt-4 sm:text-sm">
          <span>{captionContent}</span>
          <Badge className="text-xs">video {videoNumber}</Badge>
        </div>
      )}
    </div>
  );
}
