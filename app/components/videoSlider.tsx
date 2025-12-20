"use client";
import { useState } from "react";

const videos = [
  "asset/video/video3.mp4",
  "asset/video/video1-compress.mp4",
  "asset/video/video2-compress.mp4",
  "asset/video/video4-compress.mp4",
];

export default function VideoSlider() {
  const [current, setCurrent] = useState(0);

  const prevVideo = () => {
    setCurrent((prev) => (prev === 0 ? videos.length - 1 : prev - 1));
  };

  const nextVideo = () => {
    setCurrent((prev) => (prev === videos.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative mx-auto w-[90%] max-w-5xl flex items-center justify-center">

  {/* Left Button */}
  <button
    onClick={prevVideo}
    className="
      absolute
      left-0 sm:left-0
      sm:-translate-x-6 lg:-translate-x-12
      z-10
      flex h-9 w-9 sm:h-10 sm:w-10
      items-center justify-center
      rounded-full
      bg-blue-400 shadow
      hover:bg-blue-900
    "
  >
    ❮
  </button>

  {/* Video Container */}
  <div className="w-full overflow-hidden rounded-lg bg-gray-400">
    <video
      key={current}
      src={videos[current]}
      controls
      className="w-full h-auto object-cover"
      preload="metadata"
    />
  </div>

  {/* Right Button */}
  <button
    onClick={nextVideo}
    className="
      absolute
      right-0 sm:right-0
      sm:translate-x-6 lg:translate-x-12
      z-10
      flex h-9 w-9 sm:h-10 sm:w-10
      items-center justify-center
      rounded-full
      bg-blue-400 shadow
      hover:bg-blue-900
    "
  >
    ❯
  </button>

</div>

  );
}
