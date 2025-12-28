"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { SetStateAction, useState, useEffect } from "react";

export default function Member() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(10); // Mobile: 2x5
      } else {
        setItemsPerPage(9); // Desktop: 3x3
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  // DATA MEMBER
  const members = [
    {
      name: "RESTU ANANDA PUTRA",
      username: "@ndananda_ra",
      quotes:
        "Dunia adalah panggung pertunjukkan, kita sedang memainkan peran dan memakai topeng nya masing-masing 🎭",
      isEmpty: false,
    },
    {
      name: "RAYI PUTRA SALASA WIBOWO",
      username: "@rps.w",
      quotes:
        "Di tengah kekosongan kebaikan,jangan jadi jahat.Di saat rumah tak ada,jadilah rumah bagi yang lain.Setiap orang punya beban tak terlihat,jadilah tempat mereka berlabuh sementara kemudian berlayar kembali.",
      isEmpty: false,
    },
    {
      name: "RIFQI DAMARE WARDOYO",
      username: "@rifqidamare",
      quotes: ".",
      isEmpty: false,
    },
    {
      name: "MUHAMMAD TIO KURNIAWAN",
      username: "@Devas246_author",
      quotes:
        "Kata AI: hidup itu kadang dibawah kadang diatas, kalo pengen diatas terus sono noh hidup di plafon kek tikus. Eh ha'ah la, tikusnya tajir semua njir.",
      isEmpty: false,
    },
    {
      name: "REVI MARISKA",
      username: "@maeriscc",
      quotes: "Sadar diri",
      isEmpty: false,
    },
    {
      name: "M. AZKA IZZULHAQ",
      username: "@mai_vermillion",
      quotes: "adalah pokoknya",
      isEmpty: false,
    },
    {
      name: "TIFA ALFIATUZ ZURIYAH",
      username: "@alztg_",
      quotes: "kelas paling solid nihh🤭",
      isEmpty: false,
    },
    {
      name: "NABIL ARIF",
      username: "@n_apipppp",
      quotes: "AI bukan sebuah kunci dari semua bug yang ada.",
      isEmpty: false,
    },
    {
      name: "YOLANDA BINTANG",
      username: "@purplee.yoll",
      quotes:
        "mungkin kelas kita belum sekompak dan seakur kelas lain,tapi percayalah suatu saat kita akan merindukan semua momen ini",
      isEmpty: false,
    },
    {
      name: "ARVIA NOVITASARI",
      username: "@bubbleekayina",
      quotes: `don't say "kapan aku bisa bersama nya"
but say "jika semua ada waktu untuk bertemu aku akan menunggu, Semua benda di dunia ini akan berpasangan seperti se ekor lebah dan bunga di taman yang indah, semua yang ada di dirimu membuat ku ingin segera memiliki mu se utuh nya, namun masih belum waktunya aku untuk memiliki mu`,
      isEmpty: false,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
      isEmpty: true,
    },
  ];

  // TOTAL PAGE
  const totalPages = Math.ceil(members.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentMembers = members.slice(indexOfFirstItem, indexOfLastItem);

  // PINDAH HALAMAN
  const goToPage = (pagenumber: SetStateAction<number>) => {
    setCurrentPage(pagenumber);
    document.getElementById("member")?.scrollIntoView({ behavior: "smooth" });
  };

  const nextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  return (
    <div id="member" className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <p className="head-section">anggota kelas</p>
          <div className="line-section"></div>
          <p className="desc-section">
            Temukan daftar lengkap anggota kelas kami di sini. Dari siswa-siswa
            paling antusias hingga pemimpin kelas yang tangguh, kami memiliki
            ragam individu yang membuat kelas kami menjadi tempat yang dinamis
            dan bersemangat.
          </p>
        </div>

        {/* Members Grid - Responsive: 2 columns on mobile, 3 on desktop */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-6 mb-8">
          {currentMembers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <button
              onClick={prevPage}
              disabled={currentPage === 1}
              className={`p-2 rounded-lg transition-colors ${
                currentPage === 1
                  ? "bg-gray-300 text-white cursor-default transition"
                  : "bg-[#638ECB] hover:bg-[#395886] font-extrabold text-white cursor-pointer"
              }`}
            >
              <ChevronLeft size={20} />
            </button>

            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`px-3 md:px-4 py-2 rounded-lg text-sm font-poppins font-extrabold transition-colors ${
                  currentPage === index + 1
                    ? "bg-[#638ECB] text-white"
                    : "bg-gray-200 text-gray-600 hover:bg-gray-500 hover:text-gray-200 cursor-pointer"
                }`}
              >
                {index + 1}
              </button>
            ))}

            <button
              onClick={nextPage}
              disabled={currentPage === totalPages}
              className={`p-2 rounded-lg transition-colors ${
                currentPage === totalPages
                  ? "bg-gray-300 text-white cursor-default transition"
                  : "bg-[#638ECB] hover:bg-[#395886] font-extrabold text-white cursor-pointer"
              }`}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

interface MemberType {
  name: string;
  username: string;
  quotes: string;
  isEmpty?: boolean;
}

const MemberCard = ({ member }: { member: MemberType }) => {
  if (member.isEmpty) {
    return (
      <div className="bg-gray-50 rounded-3xl border-4 border-dashed border-gray-300 p-4 md:p-6 flex flex-col h-full items-center justify-center min-h-[250px] md:min-h-[300px]">
        {/* Icon atau Placeholder */}
        <div className="mb-3 md:mb-4">
          <svg
            className="w-12 h-12 md:w-16 md:h-16 text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
            />
          </svg>
        </div>

        {/* Text Info */}
        <div className="text-center">
          <p className="font-bebas text-[18px] md:text-[20px] text-gray-400 mb-2">
            DATA BELUM DIINPUT
          </p>
          <p className="font-poppins text-[12px] md:text-[14px] text-gray-400">
            Menunggu pengisian data
          </p>
        </div>
      </div>
    );
  }
  return (
    <div className="bg-white rounded-3xl border-4 border-blue-300 p-4 md:p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full items-center">
      <div className="mb-3 md:mb-4">
        <h3 className="font-bebas text-[20px] md:text-[24px] text-[#3F3D3D] text-center">
          APA KATA MEREKA?
        </h3>
      </div>

      {/* Quote */}
      <div className="mb-4 md:mb-6 flex-grow flex items-center justify-center">
        <p className="w-full max-w-[194px] font-poppins text-[14px] md:text-[16px] text-[#3F3D3D] leading-relaxed text-justify">
          &ldquo;{member.quotes}&rdquo;
        </p>
      </div>

      {/* Name dan Username */}
      <div className="text-center">
        <p className="font-bebas text-[12px] md:text-[16px] text-[#3F3D3D] uppercase break-words">
          {member.name} | {member.username}
        </p>
      </div>
    </div>
  );
};
