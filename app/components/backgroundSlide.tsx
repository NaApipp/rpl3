"use client";

import { useEffect, useState } from "react";

const images = [
  "asset/image/hero/bg-hero-1.png",
  "asset/image/hero/bg-hero-2.png",
  "asset/image/hero/bg-hero-3.png",
];

export default function BackgroundSlider() {
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    setMounted(true);

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // ⛔ Jangan render apa pun sebelum client siap
  if (!mounted) return null;

  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {images.map((img, index) => (
        <div
          key={img}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
            index === current ? "opacity-100" : "opacity-0"
          }`}
          style={{ backgroundImage: `url(${img})` }}
        />
      ))}
    </div>
  );
}
