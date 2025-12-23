"use client";

import { useState } from "react";
import { strukturData } from "../lib/strukturData";
import PersonCard from "./personCard";
import "aos/dist/aos.css"; // You can also use <link> for styles

const StrukturKelas: React.FC = () => {
  const [selectedYear, setSelectedYear] = useState(0);
  const currentData = strukturData[selectedYear];

  return (
    <div id="struktur-kelas" className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="head-section">
            STRUKTUR KELAS
          </p>
          <div className="line-section"></div>
          <p className="desc-section">
            Dapatkan wawasan tentang struktur kelas kami yang solid dan
            terorganisir dengan baik di sini. Kami menyajikan informasi tentang
            pembagian peran dan kerangka kerja yang mendukung lingkungan belajar
            yang efektif dan inklusif.
          </p>
        </div>

        <div className="text-center mb-12">
          <h2 className="font-poppins font-extrabold text-[30px] text-black mb-4">
            Tahun Ajaran
          </h2>
          <div className="flex justify-center gap-4 flex-wrap">
            {strukturData.map((data, index) => (
              <button
                key={data.year}
                onClick={() => setSelectedYear(index)}
                className={`px-6 py-2 rounded-[10px] font-poppins text-[20px] font-semibold border-3 border-[#395886] transition-colors ${
                  selectedYear === index
                    ? "bg-[#395886] text-white"
                    : "bg-[#8AAEED] text-white hover:bg-[#638ECB] cursor-pointer"
                }`}
              >
                {data.year}
              </button>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="flex justify-center">
            <div className="w-full max-w-xs">
              <PersonCard person={currentData.waliKelas} />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-40 lg:gap-60 max-w-4xl mx-auto">
            <PersonCard person={currentData.ketuaKelas} />
            <PersonCard person={currentData.wakilKetuaKelas} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-40 lg:gap-60 max-w-4xl mx-auto">
            <PersonCard person={currentData.sekretaris1} />
            <PersonCard person={currentData.sekretaris2} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-40 lg:gap-60 max-w-4xl mx-auto">
            <PersonCard person={currentData.bendahara1} />
            <PersonCard person={currentData.bendahara2} />
          </div>
        </div>
      </div>
      <script>AOS.init();</script>
    </div>
  );
};
export default StrukturKelas;
