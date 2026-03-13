import { MapPin, Phone, Mail, ArrowUp } from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer data-testid="footer" className="border-t border-[#1e293b] pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#7c3aed] to-[#3b82f6] flex items-center justify-center font-bold text-white text-sm font-['Outfit']">
                A
              </div>
              <div>
                <span className="text-white font-semibold text-lg font-['Outfit'] tracking-tight">ABSCO</span>
                <span className="block text-[#94a3b8] text-[10px] uppercase tracking-[0.2em]">All Building Services Co.</span>
              </div>
            </div>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs">
              Professional cleaning and building maintenance services serving 
              the greater Los Angeles area with excellence and dedication.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-semibold font-['Outfit'] text-sm uppercase tracking-wider mb-5">Quick Links</h4>
            <nav className="space-y-3">
              {["Home", "Services", "About", "Gallery", "Contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  data-testid={`footer-link-${link.toLowerCase()}`}
                  className="block text-[#94a3b8] text-sm hover:text-[#7c3aed] transition-colors duration-300"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = link === "Home" ? document.querySelector("#hero") : document.querySelector(`#${link.toLowerCase()}`);
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-semibold font-['Outfit'] text-sm uppercase tracking-wider mb-5">Contact</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-[#7c3aed] mt-0.5 flex-shrink-0" />
                <span className="text-[#94a3b8] text-sm">1162 E. 42nd Street, Los Angeles, CA 90011-3109</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={16} className="text-[#7c3aed] flex-shrink-0" />
                <a href="tel:+12137185185" className="text-[#94a3b8] text-sm hover:text-white transition-colors duration-300">(213) 718-5185</a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={16} className="text-[#7c3aed] flex-shrink-0" />
                <a href="mailto:abscocleaning@yahoo.com" className="text-[#94a3b8] text-sm hover:text-white transition-colors duration-300">abscocleaning@yahoo.com</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1e293b] pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#64748b] text-xs">
            &copy; {new Date().getFullYear()} ABSCO All Building Services Company. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            data-testid="scroll-to-top-button"
            className="w-10 h-10 rounded-full bg-[#0f111a] border border-[#1e293b] flex items-center justify-center hover:border-[#7c3aed]/40 transition-colors duration-300"
          >
            <ArrowUp size={16} className="text-[#94a3b8]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
