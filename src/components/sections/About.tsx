"use client";

import { motion } from "framer-motion";
import { Palette, Code, Zap, Users } from "lucide-react";
import Card from "../ui/Card";

const services = [
  {
    icon: Palette,
    title: "Visual Production",
    description: "From luxury villas to iconic restaurants, we craft visuals that captivate and inspire.",
  },
  {
    icon: Code,
    title: "Real Estate",
    description: "We turn properties and destinations into experiences that connect with your audience.",
  },
  {
    icon: Zap,
    title: "Brand Identity",
    description: "We design impactful stories that resonate across social media and beyond.",
  },
  {
    icon: Users,
    title: "Digital Consulting",
    description: "From social media to advertising, we help you stand out in a competitive digital landscape.",
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-[#F9F8F6] to-[#EFECE3]">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm uppercase tracking-wider text-black/60 mb-4 block">
            About Us
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            We Create Visual
            <span className="block text-black/80">
              Masterpieces
            </span>
          </h2>
          <p className="text-lg text-black/70 max-w-3xl mx-auto">
           Our creative team brings your brand to life through cinematic visuals, refined storytelling, and digital strategy.
We believe in the art of image and motion to elevate spaces, inspire audiences, and leave a lasting impression.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full group cursor-pointer bg-[#F9F8F6] border-black/10">
                <div className="w-14 h-14 rounded-lg bg-black flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-black/70 text-sm leading-relaxed">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20"
        >
          <Card className="p-12 bg-[#F9F8F6] border-black/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "12+", label: "Years Experience" },
                { value: "98%", label: "Client Satisfaction" },
                { value: "200+", label: "Projects Completed" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-black mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-black/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}