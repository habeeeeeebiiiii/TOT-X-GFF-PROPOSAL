import { useEffect } from "react";
import Lenis from "lenis";
import "@/App.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/sections/Problem";
import Idea from "@/components/sections/Idea";
import Marquee from "@/components/sections/Marquee";
import About from "@/components/sections/About";
import WhyToT from "@/components/sections/WhyToT";
import Roles from "@/components/sections/Roles";
import Receives from "@/components/sections/Receives";
import FinalAsk from "@/components/sections/FinalAsk";
import Footer from "@/components/Footer";

function App() {
  useEffect(() => {
    const lenis = new Lenis({ duration: 1.5, smoothWheel: true });
    window.__lenis = lenis;
    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="bg-[#0d0d0d] text-[#f7f4ee] font-body">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Idea />
        <Marquee />
        <About />
        <WhyToT />
        <Roles />
        <Receives />
        <FinalAsk />
      </main>
      <Footer />
    </div>
  );
}

export default App;
