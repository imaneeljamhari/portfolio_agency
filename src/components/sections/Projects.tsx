"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight } from "lucide-react";
import Card from "../ui/Card";
import Button from "../ui/Button";

const projects = [
  {
    id: 1,
    title: "LIQUID FUSION",
    subtitle: "Food & Beverage",
    image:
      "https://images.unsplash.com/photo-1541544741938-0af808871cc0?q=80&w=2069&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "HYPER DRIVE",
    subtitle: "Product",
    image:
      "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Bass & Motion",
    subtitle: "Event",
    image:
      "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?q=80&w=2070&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "URBAN MUSE",
    subtitle: "Portrait",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="section-padding bg-gradient-to-b from-[#EFECE3] to-[#F9F8F6]"
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
            Our Work
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Featured
            <span className="block text-black/80">Projects</span>
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer overflow-hidden bg-[#EFECE3] border-black/10">
                {/* Image */}
                <div className="relative h-[380px] md:h-[420px] lg:h-[460px] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="block w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <ExternalLink className="text-white w-6 h-6" />
                  </div>
                </div>

                {/* Title + Subtitle */}
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold tracking-wide mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-black/60 uppercase tracking-wider">
                    {project.subtitle}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* View More */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="group border-black text-black hover:bg-black hover:text-white"
          >
            View All Projects
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
