import Hero from "./components/hero";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Count from "./components/count";
import Prestasi from "./components/prestasi";
import StrukturKelasPage from "./struktur-kelas/strukturKelas";
import Gallery from "./components/gallery";
import Member from "./components/member";

import Head from "next/head";

export default function Home() {
  const siteUrl = "https://rpl3-23.vercel.app/"; // ganti sesuai domainmu

  // await new Promise((resolve) => {
  //   setTimeout(() => {
  //     resolve("intenational delay");
  //   }, 4000);
  // });

  return (
    <>
      <Head>
        <title>RPL 3 - SMKN 4 Kendal (Angkatan 23)</title>
        <meta
          name="description"
          content="Profil kelas RPL 3 Angkatan 23 SMKN 4 Kendal: struktur, member, prestasi, dan galeri."
        />
        <link rel="canonical" href={siteUrl} />
        <meta name="robots" content="index,follow" />

        <meta
          property="og:title"
          content="RPL 3 - SMKN 4 Kendal (Angkatan 23)"
        />
        <meta
          property="og:description"
          content="Struktur, member, prestasi, dan galeri kelas RPL 3 Angkatan 23."
        />
        <meta property="og:url" content={siteUrl} />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen">
        {/* Navbar */}
        <Navbar />
        <main>
          {/* Page Hero */}
          <Hero />

          {/* Page Count */}
          <Count />

          {/* Page Struktur Kelas */}
          <StrukturKelasPage />

          {/* Page Prestasi */}
          <Prestasi />

          {/* Page Member */}
          <Member />

          {/* Gallery */}
          <Gallery />
        </main>
        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}
