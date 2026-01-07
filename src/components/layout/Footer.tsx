import { Instagram, Twitter, Linkedin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navItems = [
    { label: "Intro", href: "#intro" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: Instagram, href: "", label: "Instagram" },
    { icon: Twitter, href: "", label: "Twitter" },
    { icon: Linkedin, href: "", label: "LinkedIn" },
  ];

  return (
    <footer className="bg-[#EFECE3] border-t border-black/10 relative z-50">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              AC<span className="text-black/60">Media</span>
            </h3>
            <p className="text-black/70 text-sm">
              Capturing elegance through cinematic visuals and impactful storytelling.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navItems.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-black/70 hover:text-black transition-colors text-sm"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-black/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-black/70 text-sm">
            © {currentYear} ACMEDIA. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-black/70 hover:text-black text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-black/70 hover:text-black text-sm transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
