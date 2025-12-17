import Image from "next/image";
import Hero from "./components/backgroundSlide";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Count from "./components/count";
import Prestasi from "./components/prestasi";
import StrukturKelasPage from "./struktur-kelas/strukturKelas";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* <Navbar /> */}
      <main>
        <Hero />
        {/* <Count />
        <StrukturKelasPage/>
        <Prestasi /> */}
      </main>
        {/* <Footer /> */}
    </div>
  );
}
