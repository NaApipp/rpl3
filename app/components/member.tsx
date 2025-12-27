"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { SetStateAction, useState } from "react";

export default function Member() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9; //3x3

  // DATA MEMBER
  const members = [
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "Please kasih saya sikrit talonn, saya mau element rod",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "Hidup adalah 10% apa yang terjadi padamu dan 90% bagaimana kamu bereaksi terhadapnya.",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
    },
    {
      name: "Lintang Adya Alanta",
      username: "@l1ntnxzaa",
      quotes: "HIDUP JOKOWIII",
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

        {/* Members Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentMembers.map((member, index) => (
            <MemberCard key={index} member={member} />
          ))}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-2">
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
                className={`px-4 py-2 rounded-lg text-sm font-poppins font-extrabold transition-colors ${
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
}

const MemberCard = ({ member }: { member: MemberType }) => {
  return (
    <div className="bg-white rounded-3xl border-4 border-blue-300 p-6 hover:shadow-lg transition-all duration-300 flex flex-col h-full items-center">
      {/* Header Card */}
      <div className="mb-4">
        <h3 className="font-bebas text-[24px] text-[#3F3D3D]">
          APA KATA MEREKA?
        </h3>
      </div>

      {/* Quote */}
      <div className="mb-6 flex-grow flex items-center">
        <p className="w-[194px] font-poppins text-[16px] text-[#3F3D3D] leading-relaxed  text-justify">
         &ldquo;{member.quotes}&rdquo;
        </p>
      </div>

      {/* Name dan Username */}
      <div className="text-center">
        <p className="font-bebas text-[16px] text-[#3F3D3D] uppercase">
          {member.name} | {member.username}
        </p>
      </div>
    </div>
  );
};
