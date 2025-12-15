import { useRef, useState } from "react";

export function useBgm() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const music = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }

    setIsPlaying(prev => !prev);
  };

  return {
    audioRef,
    isPlaying,
    music,
  };
}
