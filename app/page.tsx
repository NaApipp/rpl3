import Image from "next/image";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Count from "./components/count";
import Prestasi from "./components/prestasi";
import StrukturKelasPage from "./struktur-kelas/strukturKelas";
import Gallery from "./components/gallery";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Navbar */}
      {/* <Navbar /> */}
      <main>
        {/* Page Hero */}
        {/* <Hero /> */}

        {/* Page Count */}
        {/* <Count /> */}

        {/* Page Struktur Kelas */}
        {/* <StrukturKelasPage/> */}

        {/* Page Prestasi */}
        {/* <Prestasi /> */}

        {/* Gallery */}
        {/* <Gallery /> */}
      </main>
      {/* Footer */}
        <Footer />
    </div>
  );
}
