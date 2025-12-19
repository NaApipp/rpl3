"use client";

import Image from "next/image";
import { useState } from "react";
import VideoSlider from "./videoSlider";

const images = [
  // Page 1
  "/asset/image/gallery/1/image1-gallery.png",
  "/asset/image/gallery/1/image2-gallery.png",
  "/asset/image/gallery/1/image3-gallery.png",
  "/asset/image/gallery/1/image4-gallery.png",
  "/asset/image/gallery/1/image5-gallery.png",
  "/asset/image/gallery/1/image6-gallery.png",
  "/asset/image/gallery/1/image7-gallery.png",
  "/asset/image/gallery/1/image8-gallery.png",
  "/asset/image/gallery/1/image9-gallery.png",
  // Page 2
  "/asset/image/gallery/2/image1-page2.png",
  "/asset/image/gallery/2/image2-page2.png",
  "/asset/image/gallery/2/image3-page2.png",
  "/asset/image/gallery/2/image4-page2.png",
  "/asset/image/gallery/2/image5-page2.png",
  "/asset/image/gallery/2/image6-page2.png",
];


const ITEMS_PER_PAGE = 9;

export default function Gallery() {
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(images.length / ITEMS_PER_PAGE);

  const paginatedImages = images.slice(
    (page - 1) * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE

  );

  return (
    <section className="w-full bg-white py-20" id="gallery">
      {/* HEADER */}
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="head-section font-extrabold tracking-wide">Gallery</h2>

        <div className="w-24 h-1 bg-[#638ECB] mx-auto mt-3 mb-6" />

        <p className="desc-section max-w-2xl mx-auto leading-relaxed">
          Saksikan momen-momen spesial dari kami melalui galeri kami. Foto-foto
          inspiratif akan memberikan gambaran yang jelas tentang kehidupan di
          kelas kami.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-7xl mx-auto px-4 mt-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {paginatedImages.map((src, i) => (
            <div
              key={i}
              className="relative aspect-[16/9] rounded-xl overflow-hidden bg-gray-100"
            >
              <Image
                src={src}
                alt={`Gallery ${i + 1}`}
                fill
                className="object-cover transition-transform duration-300 hover:scale-105"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-2 mt-14">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 text-sm font-poppins font-extrabold bg-[#638ECB] text-white cursor-pointer rounded 
                    disabled:bg-gray-300 disabled:text-white disabled:cursor-default"
          >
            Previous
          </button>

          {Array.from({ length: totalPages }).map((_, i) => {
            const index = i + 1;
            return (
              <button
                key={index}
                onClick={() => setPage(index)}
                className={`w-9 h-9 rounded text-sm font-poppins font-extrabold ${
                  page === index
                    ? "bg-[#638ECB] text-white"
                    : "bg-gray-200 text-gray-600 cursor-pointer"
                }`}
              >
                {index}
              </button>
            );
          })}

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
            disabled={page === totalPages}
            className="px-4 py-2 text-sm font-poppins font-extrabold bg-[#638ECB] text-white cursor-pointer rounded 
                      disabled:bg-gray-300 disabled:text-white disabled:cursor-default"
          >
            Next
          </button>
        </div>
      </div>      

      {/* VIDEO SLIDER */}
      <div className="max-w-7xl mx-auto px-4 mt-20">
        <h1 className="head-section mb-5">Best Moment in Video</h1>
        <VideoSlider />
      </div>
    </section>
  );
}
