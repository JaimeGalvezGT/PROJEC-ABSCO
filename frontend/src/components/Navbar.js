import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setIsOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      data-testid="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-[#02040a]/90 backdrop-blur-xl border-b border-[#1e293b]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#hero" onClick={() => handleNavClick("#hero")} className="flex items-center gap-3 group" data-testid="navbar-logo">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#3b82f6] flex items-center justify-center font-bold text-white text-sm font-['Outfit']">
              A
            </div>
            <div className="hidden sm:block">
              <span className="text-white font-semibold text-lg font-['Outfit'] tracking-tight group-hover:text-[#7c3aed] transition-colors duration-300">ABSCO</span>
              <span className="block text-[#94a3b8] text-[10px] uppercase tracking-[0.2em]">Building Services</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => handleNavClick(link.href)}
                data-testid={`nav-link-${link.name.toLowerCase()}`}
                className="text-[#94a3b8] hover:text-white text-sm font-medium transition-colors duration-300 relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] group-hover:w-full transition-[width] duration-300" />
              </button>
            ))}
            <a
              href="tel:+12137185185"
              data-testid="nav-call-button"
              className="flex items-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-opacity duration-300"
            >
              <Phone size={14} />
              Call Now
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            data-testid="hamburger-menu-button"
            className="md:hidden text-white p-2 relative z-50"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            data-testid="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "100vh" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-[#02040a]/98 backdrop-blur-xl md:hidden flex flex-col items-center justify-center z-40"
          >
            {navLinks.map((link, i) => (
              <motion.button
                key={link.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + i * 0.05 }}
                onClick={() => handleNavClick(link.href)}
                data-testid={`mobile-nav-link-${link.name.toLowerCase()}`}
                className="text-white text-2xl font-semibold font-['Outfit'] py-4 hover:text-[#7c3aed] transition-colors duration-300"
              >
                {link.name}
              </motion.button>
            ))}
            <motion.a
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              href="tel:+12137185185"
              data-testid="mobile-call-button"
              className="mt-6 flex items-center gap-2 bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] text-white px-8 py-3 rounded-full text-lg font-semibold"
            >
              <Phone size={18} />
              (213) 718-5185
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
