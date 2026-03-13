import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Droplets, Building2, Hammer, SprayCan, Wind, ShieldCheck } from "lucide-react";

const services = [
  {
    icon: Droplets,
    title: "Floor Cleaning & Polishing",
    description: "Professional floor stripping, waxing, and polishing for all surface types. Restore your floors to their original shine.",
    accent: "from-[#7c3aed] to-[#6d28d9]",
    span: "md:col-span-2",
  },
  {
    icon: Building2,
    title: "Commercial Cleaning",
    description: "Complete janitorial services for offices, retail spaces, and commercial buildings throughout Los Angeles.",
    accent: "from-[#3b82f6] to-[#2563eb]",
    span: "md:col-span-1",
  },
  {
    icon: SprayCan,
    title: "Deep Cleaning",
    description: "Thorough sanitization and deep cleaning services for spaces that need extra attention and care.",
    accent: "from-[#7c3aed] to-[#3b82f6]",
    span: "md:col-span-1",
  },
  {
    icon: Hammer,
    title: "Building Maintenance",
    description: "General repairs and maintenance to keep your property in top condition. From minor fixes to complete overhauls.",
    accent: "from-[#6d28d9] to-[#7c3aed]",
    span: "md:col-span-2",
  },
  {
    icon: Wind,
    title: "Carpet & Upholstery",
    description: "Advanced carpet cleaning with industrial-grade equipment. Remove stains and odors effectively.",
    accent: "from-[#3b82f6] to-[#7c3aed]",
    span: "md:col-span-1",
  },
  {
    icon: ShieldCheck,
    title: "Post-Construction",
    description: "Specialized cleanup after renovations and construction projects. We handle the mess so you don't have to.",
    accent: "from-[#7c3aed] to-[#3b82f6]",
    span: "md:col-span-1",
  },
];

const ServiceCard = ({ service, index }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      data-testid={`service-card-${index}`}
      className={`${service.span} group relative bg-[#0f111a] border border-[#1e293b] rounded-2xl p-8 overflow-hidden hover:border-[#7c3aed]/40 transition-colors duration-500`}
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#7c3aed]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.accent} mb-6`}>
          <Icon size={22} className="text-white" />
        </div>
        <h3 className="text-xl font-semibold font-['Outfit'] text-white mb-3 group-hover:text-[#7c3aed] transition-colors duration-300">
          {service.title}
        </h3>
        <p className="text-[#94a3b8] text-sm leading-relaxed">{service.description}</p>
      </div>
    </motion.div>
  );
};

export const Services = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });

  return (
    <section id="services" data-testid="services-section" className="py-24 md:py-32 relative">
      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#7c3aed]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <span className="text-[#7c3aed] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">What We Do</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] text-white mb-4">
            Professional Services
          </h2>
          <p className="text-base md:text-lg text-[#94a3b8] max-w-xl">
            Comprehensive cleaning and building maintenance solutions tailored 
            to your specific needs across Los Angeles.
          </p>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <ServiceCard key={service.title} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};
