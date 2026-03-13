import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronLeft, ChevronRight, Play, X, ZoomIn } from "lucide-react";

// Gallery items - placeholder images to be replaced with real ones
// User should name their files: gallery-01-before.jpg, gallery-01-after.jpg, etc.
const galleryPairs = [
  {
    id: 1,
    before: "https://images.unsplash.com/photo-1537870148480-ed9ff56a8148?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    after: "https://images.unsplash.com/photo-1579760546682-3e2159a26c18?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    title: "Commercial Floor Restoration",
  },
  {
    id: 2,
    before: "https://images.unsplash.com/photo-1707154958327-7d02420a5786?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    after: "https://images.unsplash.com/photo-1545078194-2ec3c4e53ed1?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    title: "Retail Space Deep Clean",
  },
  {
    id: 3,
    before: "https://images.unsplash.com/photo-1537870148480-ed9ff56a8148?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    after: "https://images.unsplash.com/photo-1579760546682-3e2159a26c18?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    title: "Office Building Floor Polish",
  },
  {
    id: 4,
    before: "https://images.unsplash.com/photo-1707154958327-7d02420a5786?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    after: "https://images.unsplash.com/photo-1545078194-2ec3c4e53ed1?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    title: "Warehouse Floor Cleaning",
  },
  {
    id: 5,
    before: "https://images.unsplash.com/photo-1537870148480-ed9ff56a8148?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    after: "https://images.unsplash.com/photo-1579760546682-3e2159a26c18?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    title: "Lobby Floor Restoration",
  },
  {
    id: 6,
    before: "https://images.unsplash.com/photo-1707154958327-7d02420a5786?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    after: "https://images.unsplash.com/photo-1545078194-2ec3c4e53ed1?crop=entropy&cs=srgb&fm=jpg&w=800&q=80",
    title: "Kitchen Floor Deep Clean",
  },
];

// Video placeholders
const videos = [
  { id: 1, title: "Floor Stripping Process", thumbnail: "https://images.unsplash.com/photo-1644114216160-3cbf1bc0d2d1?crop=entropy&cs=srgb&fm=jpg&w=600&q=80" },
  { id: 2, title: "Polishing Technique", thumbnail: "https://images.unsplash.com/photo-1764255120215-9bb4665b44cc?crop=entropy&cs=srgb&fm=jpg&w=600&q=80" },
  { id: 3, title: "Complete Transformation", thumbnail: "https://images.unsplash.com/photo-1545078194-2ec3c4e53ed1?crop=entropy&cs=srgb&fm=jpg&w=600&q=80" },
];

const BeforeAfterSlider = ({ pair, index }) => {
  const [sliderPos, setSliderPos] = useState(50);
  const sliderRef = useRef(null);

  const handleMove = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPos(percent);
  };

  const handleMouseMove = (e) => handleMove(e.clientX);
  const handleTouchMove = (e) => handleMove(e.touches[0].clientX);

  return (
    <div
      ref={sliderRef}
      data-testid={`before-after-slider-${index}`}
      className="relative aspect-[4/3] rounded-xl overflow-hidden cursor-col-resize group border border-[#1e293b] hover:border-[#7c3aed]/40 transition-colors duration-300"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* After Image (full) */}
      <img src={pair.after} alt={`${pair.title} - After`} className="absolute inset-0 w-full h-full object-cover" />

      {/* Before Image (clipped) */}
      <div className="absolute inset-0 overflow-hidden" style={{ width: `${sliderPos}%` }}>
        <img
          src={pair.before}
          alt={`${pair.title} - Before`}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ minWidth: sliderRef.current ? `${sliderRef.current.offsetWidth}px` : "100%" }}
        />
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-0.5 bg-white shadow-lg z-10"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-xl">
          <div className="flex gap-0.5">
            <ChevronLeft size={14} className="text-[#02040a]" />
            <ChevronRight size={14} className="text-[#02040a]" />
          </div>
        </div>
      </div>

      {/* Labels */}
      <div className="absolute top-3 left-3 bg-[#02040a]/70 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10">
        Before
      </div>
      <div className="absolute top-3 right-3 bg-[#7c3aed]/80 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full z-10">
        After
      </div>

      {/* Title overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#02040a] to-transparent p-4 z-10">
        <p className="text-white text-sm font-semibold font-['Outfit']">{pair.title}</p>
      </div>
    </div>
  );
};

export const Gallery = () => {
  const titleRef = useRef(null);
  const titleInView = useInView(titleRef, { once: true, margin: "-60px" });
  const [lightbox, setLightbox] = useState(null);
  const [activeTab, setActiveTab] = useState("photos");

  return (
    <section id="gallery" data-testid="gallery-section" className="py-24 md:py-32 relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-[#7c3aed]/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-10">
        {/* Header */}
        <motion.div
          ref={titleRef}
          initial={{ opacity: 0, y: 30 }}
          animate={titleInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <span className="text-[#7c3aed] text-xs font-semibold uppercase tracking-[0.2em] mb-4 block">Our Work</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-['Outfit'] text-white mb-4">
            Before & After Results
          </h2>
          <p className="text-base md:text-lg text-[#94a3b8] max-w-xl mb-8">
            Drag the slider to see the transformation. Real results from real projects across Los Angeles.
          </p>

          {/* Tabs */}
          <div className="flex gap-3">
            <button
              data-testid="gallery-tab-photos"
              onClick={() => setActiveTab("photos")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === "photos"
                  ? "bg-[#7c3aed] text-white"
                  : "bg-[#0f111a] text-[#94a3b8] border border-[#1e293b] hover:text-white"
              }`}
            >
              Photos
            </button>
            <button
              data-testid="gallery-tab-videos"
              onClick={() => setActiveTab("videos")}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 ${
                activeTab === "videos"
                  ? "bg-[#7c3aed] text-white"
                  : "bg-[#0f111a] text-[#94a3b8] border border-[#1e293b] hover:text-white"
              }`}
            >
              Videos
            </button>
          </div>
        </motion.div>

        {/* Photos Grid */}
        {activeTab === "photos" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {galleryPairs.map((pair, index) => (
              <motion.div
                key={pair.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <BeforeAfterSlider pair={pair} index={index} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Videos Grid */}
        {activeTab === "videos" && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                data-testid={`video-card-${index}`}
                className="relative aspect-video rounded-xl overflow-hidden border border-[#1e293b] group cursor-pointer hover:border-[#7c3aed]/40 transition-colors duration-300"
              >
                <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-[#02040a]/50 group-hover:bg-[#02040a]/30 transition-colors duration-300 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-[#7c3aed]/90 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Play size={24} className="text-white ml-1" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-[#02040a] to-transparent">
                  <p className="text-white text-sm font-semibold font-['Outfit']">{video.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* Image naming guide (hidden, for developer reference) */}
        {/* 
          IMAGE NAMING CONVENTION:
          gallery-01-before.jpg, gallery-01-after.jpg
          gallery-02-before.jpg, gallery-02-after.jpg
          ... up to gallery-12-before.jpg, gallery-12-after.jpg
          gallery-13-extra.jpg (standalone image)
          video-01.mp4, video-02.mp4, video-03.mp4
        */}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-[#02040a]/95 z-50 flex items-center justify-center p-6"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 text-white" data-testid="lightbox-close">
            <X size={24} />
          </button>
          <img src={lightbox} alt="Gallery" className="max-w-full max-h-[80vh] rounded-lg" />
        </motion.div>
      )}
    </section>
  );
};
