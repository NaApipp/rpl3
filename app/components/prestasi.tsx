import { Section } from "lucide-react";

export default function Prestasi() {
  return (
    <section id="prestasi" className="p-10">
      {/* Container Head */}
      <div className="flex items-center flex-col" id="prestasi">
        <p className="head-section">Prestasi</p>
        <div className="line-section"></div>
        <p className="desc-section">
          Kami bangga dengan prestasi teman-teman! Di sini, Anda akan menemukan
          informasi tentang prestasi akademik, olahraga, seni, dan lainnya yang
          telah diraih oleh teman teman XII RPL 3’23
        </p>
      </div>
      {/* Contaiiner Conteent */}
      <div className="grid grid-cols-2 gap-3 mt-10 ">
        {/* Card */}
        <div className="w-full max-w-2xl bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex gap-6 items-start">
            {/* Image */}
            <div className="relative w-[220px] h-[260px] shrink-0 rounded-xl overflow-hidden">
              <img
                src="asset/image/prestasi/juara-compas.png" // simpan di folder public
                alt="Juara Pramuka"
                className="object-cover"
                loading="lazy"
              />
            </div>
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-900 leading-snug mb-4">
                Juara 2 Geguritan Putra <br />
                (PRAMUKA COMPAS IX)
              </h2>

              <p className="text-gray-600 text-base">
                Rayi Putra Salasa Wibowo
              </p>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="w-full max-w-2xl bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex gap-6 items-start">
            {/* Image */}
            <div className="relative w-[220px] h-[260px] shrink-0 rounded-xl overflow-hidden">
              <img
                src="asset/image/prestasi/juara-futsal-putra.png" // simpan di folder public
                alt="Juara Pramuka"
                className="object-cover"
                loading="lazy"
              />
            </div>
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-900 leading-snug mb-4">
                Juara 3 Futsal Putra <br />
                P5 SMKN 4 Kendal
              </h2>

              <p className="text-gray-600 text-base">
                Yang Bersangkutan
              </p>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="w-full max-w-2xl bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex gap-6 items-start">
            {/* Image */}
            <div className="relative w-[220px] h-[260px] shrink-0 rounded-xl overflow-hidden">
              <img
                src="asset/image/prestasi/video-poster 1.png" // simpan di folder public
                alt="Juara Pramuka"
                className="object-cover"
                loading="lazy"
              />
            </div>
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-900 leading-snug mb-4">
                Juara 2 Poster Competition <br />
                Juara 1 Content Video Competition
              </h2>

              <p className="text-gray-600 text-base">
                Nabil Arif Triyanto & Raihan Aji Pamungkas
              </p>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="w-full max-w-2xl bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex gap-6 items-start">
            {/* Image */}
            <div className="relative w-[220px] h-[260px] shrink-0 rounded-xl overflow-hidden">
              <img
                src="asset/image/prestasi/fashion-show.png" // simpan di folder public
                alt="Juara Pramuka"
                className="object-cover"
                loading="lazy"
              />
            </div>
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-900 leading-snug mb-4">
                Juara 3 Fashion Show <br />
                Peringatan Hari Kartini
              </h2>

              <p className="text-gray-600 text-base">
                Raihan Aji & Arvia Novita
              </p>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="w-full max-w-2xl bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex gap-6 items-start">
            {/* Image */}
            <div className="relative w-[220px] h-[260px] shrink-0 rounded-xl overflow-hidden">
              <img
                src="asset/image/prestasi/itc-1.png" // simpan di folder public
                alt="Juara Pramuka"
                className="object-cover"
                loading="lazy"
              />
            </div>
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-900 leading-snug mb-4">
                Grand Final’s ITC 2025 <br />
                IT Competition
              </h2>

              <p className="text-gray-600 text-base">
                Nabil Arif Triyanto & Rayi Putra Salasa Wibowo
              </p>
            </div>
          </div>
        </div>
        {/* Card */}
        <div className="w-full max-w-2xl bg-white rounded-2xl border border-gray-200 shadow-sm p-6">
          <div className="flex gap-6 items-start">
            {/* Image */}
            <div className="relative w-[220px] h-[260px] shrink-0 rounded-xl overflow-hidden">
              <img
                src="asset/image/prestasi/tari-smok 1.png" // simpan di folder public
                alt="Juara Pramuka"
                className="object-cover"
                loading="lazy"
              />
            </div>
            {/* Text Content */}
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-gray-900 leading-snug mb-4">
                Juara 2 Pentas Carnival <br />
                Semarak Agustus 2025
              </h2>

              <p className="text-gray-600 text-base">
                Yang Bersangkutan
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
