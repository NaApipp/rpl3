import Image from "next/image";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Navbar from "./components/navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Navbar/>
        <Hero />
      </main>
    </div>
  );
}
