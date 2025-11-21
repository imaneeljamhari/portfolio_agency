"use client";

import { cn } from "@/lib/utils";

interface NavigationProps {
  mobile?: boolean;
  onItemClick?: () => void;
}

const navItems = [
  { label: "Intro", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navigation({ mobile, onItemClick }: NavigationProps) {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      onItemClick?.();
    }
  };

  return (
    <nav>
      <ul
        className={cn(
          "flex gap-8",
          mobile ? "flex-col space-y-4" : "flex-row items-center"
        )}
      >
        {navItems.map((item) => (
          <li key={item.href}>
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-sm font-medium text-black/70 hover:text-black transition-colors duration-300 relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}