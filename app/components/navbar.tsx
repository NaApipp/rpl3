"use client";

import { useRef, useState } from "react";
import { Headphones, Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const music = () => {
    if (!audioRef.current) return;

    if (!isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }

    setIsPlaying(!isPlaying);
  };
  const menuItems = [
    { id: "home", name: "Home", href: "#home" },
    { id: "struktur", name: "Struktur Kelas", href: "#struktur-kelas" },
    { id: "prestasi", name: "Prestasi", href: "#prestasi" },
    { id: "gallery", name: "Gallery", href: "#gallery" },
  ];
  return (
    <>
      <nav className="bg-[#395886] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
            <img src="favicon.ico" alt="logo" className="w-16 h-16" />
            <span className="text-md md:text-lg lg:text-lg font-mono font-bold whitespace-nowrap">
              MASTERJAVA RPL 3'23
            </span>
            </div>

                {/*dekstoppp*/}
            <div className="hidden md:flex items-center space-x-1">
              {menuItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className="px-4 py-2 text-md font-semibold hover:bg-white/10  rounded transition duration-200"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={music}
                className={`ml-2 p-2 border-2 border-white rounded-lg transition duration-200 ${
                  isPlaying ? "bg-white text-[#2c4563]" : "hover:bg-white/10"
                }`}
              >
                {" "}
                <Headphones className="h-5 w-5" />
              </button>
              </div>
                {/* mobile menu */}
              <div className="md:hidden flex items-center space-x-2">
                 <button
                onClick={music}
                className={`p-2 border-2 border-white/90 rounded-lg transition duration-200 ${
                  isPlaying ? "bg-white text-[#395886]" : "hover:bg-white/10"
                }`}
              >
                <Headphones className="h-5 w-5" />
              </button>
              
             <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md hover:bg-white/10  transition duration-200"
              >
                {isOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
              </div>
            </div>
          </div>
        {/* dropdown */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/20">
            {menuItems.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="block px-4 py-3 text-base font-semibold hover:bg-white/10 rounded transition duration-200"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </nav>
      <audio ref={audioRef} src="/bgm/bgm-waitingv2.mp3" loop></audio>
    </>
  );
}
