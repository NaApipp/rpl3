import Image from "next/image";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Count from "./components/count";

export default function Home() {
  return (
    <div className="min-h-screen">
      <main>
        <Count />
      </main>
      <Footer />
    </div>
  );
}
