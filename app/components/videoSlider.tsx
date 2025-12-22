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
    <div className="mx-auto w-[90%] max-w-5xl">
      
      {/* Video Container */}
      <div className="overflow-hidden rounded-lg bg-gray-400">
        <video
          key={current}
          src={videos[current]}
          controls
          className="w-full h-auto object-cover"
          preload="metadata"
        />
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex items-center justify-center gap-6">
        <button
          onClick={prevVideo}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-full
            bg-blue-400 shadow
            hover:bg-blue-900
            transition
          "
        >
          ❮
        </button>

        <span className="text-sm font-poppins font-normal text-gray-600">
          {current + 1} / {videos.length}
        </span>

        <button
          onClick={nextVideo}
          className="
            flex h-10 w-10 items-center justify-center
            rounded-full
            bg-blue-400 shadow
            hover:bg-blue-900
            transition
          "
        >
          ❯
        </button>
      </div>
    </div>
  );
}
