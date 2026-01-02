import Image from "next/image";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Count from "./components/count";
import Prestasi from "./components/prestasi";
import StrukturKelasPage from "./struktur-kelas/strukturKelas";
import Gallery from "./components/gallery";
import Member from "./components/member";

import Head from "next/head";

export default async function Home() {
  const siteUrl = "https://rpl3-23.vercel.app/"; // ganti sesuai domainmu

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve("intenational delay");
    }, 4000);
  });

  return (
    <>
      <Head>
        <title>RPL 3 Site - SMKN 4 Kendal (Angkatan 23)</title>
        <meta
          name="description"
          content="Landing page profil kelas: Member, Gallery, dan Struktur."
        />
        <link rel="canonical" href={`${siteUrl}/`} />
        <meta name="robots" content="index,follow" />

        {/* Open Graph (buat preview saat dishare) */}
        <meta property="og:title" content="Profil Kelas X - SMK ..." />
        <meta
          property="og:description"
          content="Member, Gallery, dan Struktur kelas."
        />
        <meta property="og:url" content={`${siteUrl}/`} />
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
