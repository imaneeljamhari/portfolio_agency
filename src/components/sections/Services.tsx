"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const services = [
  {
    id: 1,
    category: "Photography",
    items: [
      "Commercial Photography",
      "Portrait Photography",
      "Architectural Photography",
      "Event Photography"
    ]
  },
  {
    id: 2,
    category: "Videography",
    items: [
      "Brand Films",
      "Social Media Content",
      "Aerial Videography",
      "Cinematic Productions",
      "Time-Lapse & Slow Motion"
    ]
  },
  {
    id: 3,
    category: "Visual Direction",
    items: [
      "Art Direction",
      "Wardrobe & Fashion Styling",
      "Visual Strategy",
      "Set & Prop Styling",
      "Makeup & Hair Styling"
    ]
  },
  {
    id: 4,
    category: "Post-Production",
    items: [
      "Storytelling",
      "Photo Editing & Retouching",
      "Color Correction & Grading",
      "Video Editing",
      "3D & CGI Integration"
    ]
  }
];

export default function Services() {
  return (
    <section
      id="services"
      className="section-padding bg-gradient-to-b from-[#F9F8F6] to-[#EFECE3]"
    >
      <div className="container-custom">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-black/60 mb-4 block">
            What We Offer
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our
            <span className="block text-black/80">Services</span>
          </h2>
        </motion.div>

        {/* Services Grid - Grand espace central */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 lg:gap-32 xl:gap-20 2xl:gap-40 mb-16">
          {/* Chaque carte est poussée vers l'extérieur */}
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={
                // Sur desktop : première carte à gauche, deuxième à droite
                index % 2 === 0
                  ? "md:pr-8 lg:pr-16 xl:pr-24" // carte gauche → marge droite importante
                  : "md:pl-8 lg:pl-16 xl:pl-24" // carte droite → marge gauche importante
              }
            >
              <Card className="p-10 md:p-12 bg-[#EFECE3] border-black/10 hover:border-black/30 transition-all duration-300 h-full hover:shadow-xl">
                {/* Category Title */}
                <h3 className="text-2xl md:text-3xl font-bold mb-6 pb-6 border-b border-black/20">
                  {service.category}
                </h3>

                {/* Service Items */}
                <ul className="space-y-4">
                  {service.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }}
                      className="text-base md:text-lg text-black/60 hover:text-black transition-colors cursor-default flex items-start"
                    >
                      <span className="mr-3 mt-2 w-2 h-2 bg-black/40 rounded-full flex-shrink-0"></span>
                      <span>{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* À remplir plus tard si besoin */}
        </motion.div>
      </div>
    </section>
  );
}