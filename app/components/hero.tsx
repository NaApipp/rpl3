import BackgroundSlider from "./backgroundSlide";

import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center text-white">
            {/* Background Slide Function */}
            <BackgroundSlider />

            <div className="z-10 text-center flex gap-30 flex-col justify-center items-center">
                <h1 className="text-white font-poppins font-extrabold text-[70px] underline underline-offset-8">XII RPL 3'23</h1>
                <p className="text-white font-poppins font-semibold text-[20px]">Kelas Rekayasa Perangkat Lunak <br /> yang inovatif dan kreatif, dan suka ajak ribut</p>
                {/* Button direct section struktur kelas */}
                <Link href="#struktur-Kelas" className="p-2 border border-4 w-[50%] font-poppins font-semibold text-[20px] rounded-[20px]">Lihat Lainnya</Link>
            </div>
        </section> 
    )
}