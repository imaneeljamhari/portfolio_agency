"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Navigation from "@/components/layout/Navigation";
import { cn } from "@/lib/utils";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        "backdrop-blur-lg",
        isScrolled && "border-b border-black/10"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Gauche */}
          <a href="/" className="text-2xl font-bold tracking-tight text-black flex-shrink-0">
            AC<span className="text-black/60">MEDIA</span>
          </a>

          {/* Navigation Desktop - Centrée */}
          <div className="hidden md:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Navigation />
          </div>

          {/* Bouton Menu Mobile - Droite */}
          <div className="flex-shrink-0">
            <button
              className="md:hidden p-2 text-black"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-black/10">
            <Navigation mobile onItemClick={() => setIsMobileMenuOpen(false)} />
          </div>
        )}
      </div>
    </header>
  );
}