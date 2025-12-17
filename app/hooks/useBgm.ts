import { useRef, useState } from 'react';

export function useBgm() {
    const audioRef = useRef<HTMLAudioElement | null>(null);
      const [isPlaying, setIsPlaying] = useState(false);
    
      const music = () => {
        if (!audioRef.current) return;
    
        if (!isPlaying) {
          audioRef.current.play();
        } else {
          audioRef.current.pause();
        }
    
        setIsPlaying(!isPlaying);
      };
      return { audioRef, isPlaying, music };
}