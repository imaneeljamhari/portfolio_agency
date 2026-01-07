"use client";

import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowRight, Play } from "lucide-react";

export default function Intro() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentPair, setCurrentPair] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Paires d'images
  const imagePairs = [
    { left: "/images/intro1.jpg", right: "/images/intro2.jpg" },
    { left: "/images/intro3.jpg", right: "/images/intro4.jpg" },
    { left: "/images/intro5.jpg", right: "/images/intro6.jpg" },
  ];

  // Changement automatique des images toutes les 2 secondes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPair((prev) => (prev + 1) % imagePairs.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [imagePairs.length]);

  const xLeft = useTransform(scrollYProgress, [0, 1], ["0%", "-100vw"]);
  const xRight = useTransform(scrollYProgress, [0, 1], ["0%", "100vw"]);
  const blur = useTransform(scrollYProgress, [0, 0.4, 1], ["0px", "16px", "80px"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.5]);

  const yHero = useTransform(scrollYProgress, [0, 0.35], ["100vh", "0vh"]);
  const opacityHero = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const heroFadeOut = useTransform(scrollYProgress, [0.6, 0.9], [1, 0]);
  const heroScaleOut = useTransform(scrollYProgress, [0.6, 0.9], [1, 0.94]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="intro" ref={containerRef} className="relative h-[300vh] bg-[#F9F8F6]">
      
      {/* === IMAGES QUI CHANGENT AUTOMATIQUEMENT === */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPair}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex"
          >
            {/* Image gauche */}
            <motion.div
              style={{ x: xLeft, filter: blur, scale }}
              className="absolute left-0 top-0 w-1/2 h-full"
            >
              <img
                src={imagePairs[currentPair].left}
                alt={`Left ${currentPair + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </motion.div>

            {/* Image droite */}
            <motion.div
              style={{ x: xRight, filter: blur, scale }}
              className="absolute right-0 top-0 w-1/2 h-full"
            >
              <img
                src={imagePairs[currentPair].right}
                alt={`Right ${currentPair + 1}`}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </motion.div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* === HERO TEXT === */}
      <motion.div
        style={{ y: yHero, opacity: opacityHero }}
        className="fixed inset-0 flex items-center justify-center z-20 pointer-events-none"
      >
        <motion.div
          style={{ opacity: heroFadeOut, scale: heroScaleOut }}
          className="container-custom text-center px-4 pointer-events-auto"
        >
          <div className="absolute inset-0 opacity-10 -z-10 pointer-events-none">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-black rounded-full blur-[120px] animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-black rounded-full blur-[120px] animate-pulse delay-1000" />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight text-black">
            We Elevate
            <span className="block text-black/80">Spaces & Stories</span>
          </h1>

          <p className="text-lg md:text-xl text-black/70 mb-12 max-w-2xl mx-auto">
            Where creativity meets strategy — bespoke video productions for remarkable places.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
            <button 
              onClick={scrollToProjects}
              className="group px-8 py-4 bg-black text-white rounded-full font-medium hover:bg-black/90 transition-all duration-300 flex items-center"
            >
              View Our Work
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button 
              className="group px-8 py-4 bg-transparent border-2 border-black text-black rounded-full font-medium hover:bg-black hover:text-white transition-all duration-300 flex items-center"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              Watch Showreel
            </button>
          </div>

          
        </motion.div>
      </motion.div>

      <div className="relative h-screen" />
      <div className="relative h-screen" />
      <div className="relative h-screen" />

    </section>
  );
}