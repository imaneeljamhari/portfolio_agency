"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import Button from "../ui/Button";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // === IMAGES : s'écartent + flou + scale ===
  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-100vw"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "100vw"]);
  const blur = useTransform(scrollYProgress, [0, 0.4, 1], ["0px", "16px", "80px"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  // === HERO : monte depuis le bas ===
  const yHero = useTransform(scrollYProgress, [0, 0.35], ["100vh", "0vh"]);
  const opacityHero = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);

  // === HERO DISPARAÎT quand la section suivante arrive ===
  const heroFadeOut = useTransform(scrollYProgress, [0.6, 0.9], [1, 0]);
  const heroScaleOut = useTransform(scrollYProgress, [0.6, 0.9], [1, 0.94]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div id="home" ref={containerRef} className="relative h-[300vh] bg-[#F9F8F6]">
      {/* === IMAGES QUI DÉFILIENT JUSQU'AU BOUT === */}
      <div className="fixed inset-0 flex overflow-hidden pointer-events-none">
        <motion.div
          style={{ x: xLeft, filter: blur, scale }}
          className="absolute left-0 top-0 w-1/2 h-full"
        >
          <img
            src="/images/intro1.jpg"
            alt="Left"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </motion.div>

        <motion.div
          style={{ x: xRight, filter: blur, scale }}
          className="absolute right-0 top-0 w-1/2 h-full"
        >
          <img
            src="/images/intro2.jpg"
            alt="Right"
            className="w-full h-full object-cover"
            draggable={false}
          />
        </motion.div>
      </div>

      {/* === HERO QUI MONTE + SE FIXE + DISPARAÎT === */}
      <motion.div
        style={{
          y: yHero,
          opacity: opacityHero,
        }}
        className="fixed inset-0 flex items-center justify-center z-20 pointer-events-none"
      >
        {/* Le Hero qui disparaît progressivement */}
        <motion.div
          style={{
            opacity: heroFadeOut,
            scale: heroScaleOut,
          }}
          className="container-custom text-center px-4 pointer-events-auto"
        >
          {/* Blobs animés avec la nouvelle palette */}
          <div className="absolute inset-0 opacity-10 -z-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black rounded-full blur-[120px] animate-pulse delay-1000" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-black">
            We Elevate
            <span className="block text-black/80">
              Spaces & Stories
            </span>
          </h1>

          <p className="text-lg md:text-xl text-black/70 mb-12 max-w-2xl mx-auto">
            Where creativity meets strategy — bespoke video productions for remarkable places.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <Button size="lg" onClick={scrollToProjects} className="group">
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="group">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Showreel
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {[
              { value: "150+", label: "Projects" },
              { value: "50+", label: "Clients" },
              { value: "15+", label: "Awards" },
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-black mb-2">{stat.value}</div>
                <div className="text-sm text-black/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* === ESPACE POUR 3 ÉCRANS DE SCROLL === */}
      <div className="relative h-screen" />
      <div className="relative h-screen" />
      <div className="relative h-screen" />
    </div>
  );
}