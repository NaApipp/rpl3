import Image from "next/image";
import Hero from "./components/hero";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Hero />
      </main>
    </div>
  );
}
