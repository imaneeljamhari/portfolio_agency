"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import Button from "../ui/Button";

export default function Hero() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Le Hero fade-out proprement quand on scroll
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.6], [1, 0.95]);

  const scrollToProjects = () => {
    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="h-screen sticky top-0 flex items-center justify-center bg-[#F9F8F6] z-10"
    >
      <motion.div
        style={{ opacity, scale }}
        className="text-center px-4 max-w-4xl mx-auto"
      >
        <h1 className="text-6xl md:text-7xl font-bold text-black mb-6">
          We Elevate
          <span className="block text-black/70">Spaces & Stories</span>
        </h1>

        <p className="text-lg md:text-xl text-black/60 mb-10">
          Where creativity meets strategy — bespoke video productions for remarkable places.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" onClick={scrollToProjects} className="group">
            View Our Work
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button variant="outline" size="lg" className="group">
            <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
            Watch Showreel
          </Button>
        </div>

        <div className="grid grid-cols-3 gap-8 mt-16">
          {[
            { value: "150+", label: "Projects" },
            { value: "50+", label: "Clients" },
            { value: "15+", label: "Awards" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl font-bold text-black">{stat.value}</div>
              <div className="text-sm text-black/70">{stat.label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
