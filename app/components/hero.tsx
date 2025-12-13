"use client";
import { useRef, useState } from "react";

export default function Hero() {
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

     const year = new Date().getFullYear();
    return (
        <section id="hero">
            <div className="flex flex-col justify-center items-center mt-9">
                <img src="image\construction.png" alt="Development Icon" className="w-[200px]"/>
                <h1 className="mt-[20px] font-extrabold text-3xl">Halaman Masih Dalam Tahap Pengembangan</h1>
                <h1 className="mt-[5px] font-extrabold text-3xl">🙏🏻🙏🏻🙏🏻</h1>
                <div className="bgm">
                    <button onClick={music} className="mt-6 border-solid border-2 p-2 rounded-2xl cursor-pointer">
                    {isPlaying ? "Pause BGM" : "Play BGM"}
                    </button>
                </div>
                <p className="mt-[200px]"><span>&copy; {year}</span> XIIRPL 3'23 Team</p>
            </div>
            <audio ref={audioRef} src="bgm\bgm-waitingv2.mp3" loop></audio>        
            </section>
    )
}