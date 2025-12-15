import Image from "next/image";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Navbar from "./components/navbar";
import Count from "./components/count";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Count />
        <Footer />
      </main>
    </div>
  );
}
