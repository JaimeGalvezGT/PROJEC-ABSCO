import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Award, Users, Clock, MapPin } from "lucide-react";

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" data-testid="about-section" className="py-24 md:py-32 relative">
      {/* Subtle Glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[400px] bg-[#3b82f6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-[#1e293b]">
              <img
                src="https://images.unsplash.com/photo-1644114216160-3cbf1bc0d2d1?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHxpbmR1c3RyaWFsJTIwZmxvb3IlMjBjbGVhbmluZyUyMG1hY2hpbmUlMjBwb2xpc2hlZCUyMGNvbmNyZXRlfGVufDB8fHx8MTc3MzQzMDUyMnww&ixlib=rb-4.1.0&q=85"
                alt="ABSCO professional cleaning team at work"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02040a]/60 to-transparent" />
            </div>

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -bottom-6 -right-4 md:right-6 bg-[#0f111a] border border-[#1e293b] rounded-xl p-4 shadow-xl"
            >
              <div className="text-2xl font-bold font-['Outfit'] bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] bg-clip-text text-transparent">
                Los Angeles
              </div>
              <div className="text-[#94a3b8] text-xs flex items-center gap-1 mt-1">
                <MapPin size={12} />
                California, USA
              </div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <span className="text-[#7c3aed] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">About Us</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] text-white mb-6">
              Building Trust,<br />
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] bg-clip-text text-transparent">
                One Space at a Time
              </span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed mb-6">
              ABSCO All Building Services Company is a full-service cleaning and 
              maintenance company based in Los Angeles, California. Under the leadership 
              of <strong className="text-white">Edgar Blanco, President</strong>, we 
              deliver exceptional results for commercial and residential clients.
            </p>
            <p className="text-[#94a3b8] text-base leading-relaxed mb-10">
              Operating within the cleaning services and miscellaneous repair services 
              sector, we specialize in floor cleaning, polishing, and comprehensive 
              building maintenance. Our before-and-after results speak for themselves.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: Award, title: "Quality First", desc: "Premium results guaranteed" },
                { icon: Users, title: "Expert Team", desc: "Trained professionals" },
                { icon: Clock, title: "Always On Time", desc: "Punctual and reliable" },
                { icon: MapPin, title: "LA Based", desc: "Serving all of LA" },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.1, duration: 0.5 }}
                  className="flex gap-3"
                  data-testid={`about-feature-${i}`}
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-[#0f111a] border border-[#1e293b] flex items-center justify-center">
                    <item.icon size={18} className="text-[#7c3aed]" />
                  </div>
                  <div>
                    <div className="text-white text-sm font-semibold">{item.title}</div>
                    <div className="text-[#94a3b8] text-xs">{item.desc}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
