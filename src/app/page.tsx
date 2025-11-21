import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Intro from "@/components/sections/Intro";


export default function Home() {
  return (
    <main className="min-h-screen bg-[#F9F8F6] text-black">
      <Intro />
      <Header />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}