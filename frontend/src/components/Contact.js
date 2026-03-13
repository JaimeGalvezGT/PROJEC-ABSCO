import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Send, Loader2, CheckCircle, MapPin, Phone, Mail, User } from "lucide-react";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import axios from "axios";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [formState, setFormState] = useState("idle"); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service_type: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormState("loading");

    try {
      await axios.post(`${API}/contact`, formData);
      setFormState("success");
      setFormData({ name: "", email: "", phone: "", service_type: "", message: "" });
    } catch (err) {
      console.error(err);
      setFormState("error");
    }

    setTimeout(() => setFormState("idle"), 5000);
  };

  const handleChange = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <section id="contact" data-testid="contact-section" className="py-24 md:py-32 relative">
      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-[#3b82f6]/5 rounded-full blur-[120px] pointer-events-none" />

      <div ref={ref} className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-[#7c3aed] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Get In Touch</span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] text-white mb-6">
              Let's Talk About<br />
              <span className="bg-gradient-to-r from-[#7c3aed] to-[#3b82f6] bg-clip-text text-transparent">
                Your Project
              </span>
            </h2>
            <p className="text-[#94a3b8] text-base leading-relaxed mb-12">
              Ready to transform your space? Get in touch and we'll provide a free 
              estimate tailored to your needs.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="flex gap-4 items-start"
                data-testid="contact-address"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0f111a] border border-[#1e293b] flex items-center justify-center">
                  <MapPin size={20} className="text-[#7c3aed]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">Address</div>
                  <div className="text-[#94a3b8] text-sm leading-relaxed">
                    1162 E. 42nd Street<br />
                    Los Angeles, CA 90011-3109
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex gap-4 items-start"
                data-testid="contact-phone"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0f111a] border border-[#1e293b] flex items-center justify-center">
                  <Phone size={20} className="text-[#3b82f6]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">Phone</div>
                  <a href="tel:+12137185185" className="text-[#94a3b8] text-sm hover:text-[#7c3aed] transition-colors duration-300">
                    (213) 718-5185
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex gap-4 items-start"
                data-testid="contact-email"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0f111a] border border-[#1e293b] flex items-center justify-center">
                  <Mail size={20} className="text-[#7c3aed]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">Email</div>
                  <a href="mailto:abscocleaning@yahoo.com" className="text-[#94a3b8] text-sm hover:text-[#7c3aed] transition-colors duration-300">
                    abscocleaning@yahoo.com
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex gap-4 items-start"
                data-testid="contact-person"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-[#0f111a] border border-[#1e293b] flex items-center justify-center">
                  <User size={20} className="text-[#3b82f6]" />
                </div>
                <div>
                  <div className="text-white font-semibold text-sm mb-1">Contact Person</div>
                  <div className="text-[#94a3b8] text-sm">Edgar Blanco — President</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form
              onSubmit={handleSubmit}
              data-testid="contact-form"
              className="bg-[#0f111a] border border-[#1e293b] rounded-2xl p-8 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-[#94a3b8] text-xs uppercase tracking-wider">Full Name</Label>
                  <Input
                    id="name"
                    data-testid="contact-input-name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    required
                    className="bg-[#02040a] border-[#1e293b] text-white placeholder:text-[#4a5568] focus:border-[#7c3aed] focus:ring-[#7c3aed]/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-[#94a3b8] text-xs uppercase tracking-wider">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    data-testid="contact-input-email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    required
                    className="bg-[#02040a] border-[#1e293b] text-white placeholder:text-[#4a5568] focus:border-[#7c3aed] focus:ring-[#7c3aed]/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-[#94a3b8] text-xs uppercase tracking-wider">Phone</Label>
                  <Input
                    id="phone"
                    data-testid="contact-input-phone"
                    placeholder="(213) 000-0000"
                    value={formData.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    className="bg-[#02040a] border-[#1e293b] text-white placeholder:text-[#4a5568] focus:border-[#7c3aed] focus:ring-[#7c3aed]/20"
                  />
                </div>
                <div className="space-y-2">
                  <Label className="text-[#94a3b8] text-xs uppercase tracking-wider">Service Type</Label>
                  <Select
                    onValueChange={(val) => handleChange("service_type", val)}
                    value={formData.service_type}
                  >
                    <SelectTrigger data-testid="contact-select-service" className="bg-[#02040a] border-[#1e293b] text-white focus:ring-[#7c3aed]/20">
                      <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent className="bg-[#0f111a] border-[#1e293b]">
                      <SelectItem value="floor-cleaning" className="text-white hover:bg-[#1a1d2d]">Floor Cleaning & Polishing</SelectItem>
                      <SelectItem value="commercial" className="text-white hover:bg-[#1a1d2d]">Commercial Cleaning</SelectItem>
                      <SelectItem value="deep-cleaning" className="text-white hover:bg-[#1a1d2d]">Deep Cleaning</SelectItem>
                      <SelectItem value="maintenance" className="text-white hover:bg-[#1a1d2d]">Building Maintenance</SelectItem>
                      <SelectItem value="carpet" className="text-white hover:bg-[#1a1d2d]">Carpet & Upholstery</SelectItem>
                      <SelectItem value="post-construction" className="text-white hover:bg-[#1a1d2d]">Post-Construction</SelectItem>
                      <SelectItem value="other" className="text-white hover:bg-[#1a1d2d]">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message" className="text-[#94a3b8] text-xs uppercase tracking-wider">Message</Label>
                <Textarea
                  id="message"
                  data-testid="contact-input-message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  required
                  rows={5}
                  className="bg-[#02040a] border-[#1e293b] text-white placeholder:text-[#4a5568] focus:border-[#7c3aed] focus:ring-[#7c3aed]/20 resize-none"
                />
              </div>

              <button
                type="submit"
                data-testid="contact-submit-button"
                disabled={formState === "loading"}
                className="w-full bg-gradient-to-r from-[#7c3aed] to-[#6d28d9] text-white py-4 rounded-full font-semibold text-base hover:from-[#6d28d9] hover:to-[#5b21b6] transition-colors duration-300 shadow-lg shadow-[#7c3aed]/20 flex items-center justify-center gap-2 disabled:opacity-60"
              >
                {formState === "loading" && <Loader2 size={18} className="animate-spin" />}
                {formState === "success" && <CheckCircle size={18} />}
                {formState === "idle" && <Send size={18} />}
                {formState === "loading" ? "Sending..." : formState === "success" ? "Message Sent!" : formState === "error" ? "Try Again" : "Send Message"}
              </button>

              {formState === "success" && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-green-400 text-sm text-center"
                  data-testid="contact-success-message"
                >
                  Thank you! We'll get back to you shortly.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
