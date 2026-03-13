import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export const Hero = () => {
  const scrollToServices = () => {
    const el = document.querySelector("#services");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" data-testid="hero-section" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1764255120215-9bb4665b44cc?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNDR8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjb21tZXJjaWFsJTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjBjbGVhbiUyMG5pZ2h0fGVufDB8fHx8MTc3MzQzMDUyMXww&ixlib=rb-4.1.0&q=85"
          alt="Clean professional space"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#02040a] via-[#02040a]/80 to-[#02040a]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02040a] via-transparent to-[#02040a]/60" />
      </div>

      {/* Decorative Glow Blobs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-[#7c3aed]/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/6 w-72 h-72 bg-[#3b82f6]/10 rounded-full blur-[100px] pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 lg:px-24 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-[#7c3aed]/15 border border-[#7c3aed]/30 rounded-full px-4 py-1.5 mb-8"
          >
            <Sparkles size={14} className="text-[#7c3aed]" />
            <span className="text-[#7c3aed] text-xs font-medium uppercase tracking-wider">Premium Cleaning Services</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.05] mb-8"
          >
            <span className="text-white">Elevating Spaces</span>
            <br />
            <span className="bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] bg-clip-text text-transparent">
              Beyond Clean
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-base md:text-lg text-[#94a3b8] max-w-xl mb-12 leading-relaxed"
          >
            ABSCO All Building Services Company delivers professional cleaning 
            and maintenance solutions across Los Angeles. Trusted by businesses 
            and homeowners since day one.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <button
              onClick={scrollToServices}
              data-testid="hero-cta-services"
              className="bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] text-white px-8 py-4 rounded-full font-semibold text-base hover:from-[#6d28d9] hover:to-[#5b21b6] transition-colors duration-300 shadow-lg shadow-[#7c3aed]/20"
            >
              Our Services
            </button>
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              data-testid="hero-cta-quote"
              className="border border-[#1e293b] text-white px-8 py-4 rounded-full font-semibold text-base hover:bg-[#0f111a] hover:border-[#7c3aed]/40 transition-colors duration-300"
            >
              Get a Free Quote
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex gap-12 mt-16 pt-8 border-t border-[#1e293b]"
          >
            {[
              { value: "500+", label: "Projects" },
              { value: "100%", label: "Satisfaction" },
              { value: "24/7", label: "Available" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold font-['Outfit'] bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-[#94a3b8] text-xs mt-1 uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-[#94a3b8] cursor-pointer"
          onClick={scrollToServices}
          data-testid="scroll-indicator"
        >
          <ArrowDown size={20} />
        </motion.div>
      </motion.div>
    </section>
  );
};
