"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"], // Commence quand la section touche le haut de l'écran
  });

  // Animations des textes
  const xWho = useTransform(scrollYProgress, [0, 1], ["0%", "-60%"]);
  const xWe = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const xAre = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);

  const whoColor = useTransform(scrollYProgress, [0, 0.7], ["#000000", "#5B9BD5"]);
  const weColor = useTransform(scrollYProgress, [0, 0.7], ["#000000", "#D4A574"]);
  const areColor = useTransform(scrollYProgress, [0, 0.7], ["#000000", "#FFFFFF"]);

  const yText = useTransform(scrollYProgress, [0, 0.4, 1], [100, 0, -100]);

  // Opacité des textes : visible seulement pendant le scroll de la section
  const textsOpacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);

  // Parallax des images
  const scaleImages = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative bg-[#EFECE3] h-[300vh]" // 3 écrans de hauteur pour le scroll
    >
      {/* Images en fond sticky */}
      <div className="sticky top-0 h-screen overflow-hidden">
        
        {/* Images avec transitions */}
        <motion.div style={{ scale: scaleImages }} className="relative h-full">
          
          {/* Image 1 */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0, 0.25], [1, 0]) }}
            className="absolute inset-0 flex items-center justify-start p-8"
          >
            <div className="w-1/2 h-5/6">
              <img src="/images/about1.png" alt="About 1" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
            </div>
          </motion.div>

          {/* Image 2 */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0.2, 0.45, 0.7], [0, 1, 0]) }}
            className="absolute inset-0 flex items-center justify-end p-8"
          >
            <div className="w-1/2 h-5/6">
              <img src="/images/about2.png" alt="About 2" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
            </div>
          </motion.div>

          {/* Image 3 */}
          <motion.div
            style={{ opacity: useTransform(scrollYProgress, [0.65, 0.85], [0, 1]) }}
            className="absolute inset-0 flex items-center justify-start p-8"
          >
            <div className="w-1/2 h-5/6">
              <img src="/images/about3.png" alt="About 3" className="w-full h-full object-cover rounded-2xl shadow-2xl" />
            </div>
          </motion.div>
        </motion.div>

        {/* Textes : placés dans le sticky, donc ne débordent jamais hors de la section */}
        <motion.div
          style={{ opacity: textsOpacity }}
          className="absolute inset-0 pointer-events-none z-50"
        >
          <div className="h-screen flex items-center justify-between px-20">
            
            {/* WHO WE ARE */}
            <div>
              <h2 className="text-6xl md:text-8xl lg:text-9xl font-bold leading-none">
                <motion.span style={{ x: xWho, color: whoColor }} className="block">
                  WHO
                </motion.span>
                <motion.span style={{ x: xWe, color: weColor }} className="block">
                  WE
                </motion.span>
                <motion.span style={{ x: xAre, color: areColor }} className="block">
                  ARE
                </motion.span>
              </h2>
            </div>

            {/* Petit texte About Us */}
            <motion.div style={{ y: yText }} className="max-w-md pointer-events-auto">
              <div className="bg-black/70 p-8 backdrop-blur-xl rounded-2xl border border-white/10">
                <span className="text-xs uppercase tracking-wider text-white/80 mb-3 block">
                  About Us
                </span>
                <p className="text-white text-sm leading-relaxed">
                  Our creative team brings your brand to life through cinematic visuals, refined storytelling,
                  and digital strategy.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}