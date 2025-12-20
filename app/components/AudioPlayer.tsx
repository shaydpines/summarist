"use client";
import { useEffect, useRef, useState } from "react";
import { FaCirclePlay, FaCirclePause } from "react-icons/fa6";

type AudioPlayerProps = {
  audioLink: string;
};

export default function AudioPlayer({ audioLink }: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState<number | null>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateDuration = () => {
      if (!isNaN(audio.duration) && audio.duration !== Infinity) {
        setDuration(audio.duration);
      }
    };

    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("durationchange", updateDuration);

    // 👇 force metadata fetch on mount
    audio.load();

    return () => {
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("durationchange", updateDuration);
    };
  }, [audioLink]);

  const togglePlay = (e: React.MouseEvent) => {
    e.preventDefault(); // important inside Link
    e.stopPropagation();

    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="flex items-center gap-2">
      <audio
        ref={audioRef}
        src={audioLink}
        preload="metadata"
      />

      <button onClick={togglePlay}>
        {isPlaying ? (
          <FaCirclePause className="text-4xl" />
        ) : (
          <FaCirclePlay className="text-4xl" />
        )}
      </button>

      {duration !== null && (
        <span>
          {Math.floor(duration / 60)}:
          {String(Math.floor(duration % 60)).padStart(2, "0")}
        </span>
      )}
    </div>
  );
}
