"use client";
import { useEffect, useState } from "react";

export default function FadeIn({
  children,
  durationClass = "duration-500",
}: {
  children: React.ReactNode;
  durationClass?: string;
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // biar transisi kebaca oleh browser
    const id = requestAnimationFrame(() => setShow(true));
    return () => cancelAnimationFrame(id);
  }, []);

  return (
    <div className={`transition-opacity ${durationClass} ${show ? "opacity-100" : "opacity-0"}`}>
      {children}
    </div>
  );
}
