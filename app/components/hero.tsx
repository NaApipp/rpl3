"use client";
import Link from "next/link";
import BackgroundSlider from "./backgroundSlide";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <section
      id="home"
        className="relative min-h-screen flex items-center justify-center text-white"
    >
      {/* Background Slide Function */}
      <BackgroundSlider />
      
      <div className="z-10 text-center flex gap-30 flex-col justify-center items-center">
        {/* Typing Animation HeadText */}
        <h1 className="typingText">
          <TypeAnimation
            sequence={["XII RPL 3", 2000, "Angkatan 23", 2000]}
            speed={50}
            deletionSpeed={50}
            repeat={Infinity}
          />
        </h1>
        <p className="text-white font-poppins font-semibold md:text-[20px]">
          Kelas Rekayasa Perangkat Lunak <br /> yang inovatif, dan
          Kreatif dalam Ide, Tangguh dalam Eksekusi
        </p>
        {/* Button direct section struktur kelas */}
        <Link
          href="#struktur-kelas"
          className="p-2 border border-4 md:w-[500px] w-[250px] font-poppins font-semibold text-[20px] rounded-[20px] hover:bg-white/70 hover:text-black transition" 
        >
          Lihat Lainnya
        </Link>
      </div>
    </section>
  );
}
