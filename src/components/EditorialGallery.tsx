import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { galleryData } from '../data/gallery';
import { Lightbox } from './Lightbox';
import { Eye, ArrowRight, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from './ScrollReveal';

export const EditorialGallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['ALL', 'STAYS', 'FOREST', 'MOMENTS', 'EXPERIENCES', 'DETAILS'];

  const filteredItems = activeCategory === 'ALL'
    ? galleryData
    : galleryData.filter(item => item.category.toUpperCase() === activeCategory.toUpperCase());

  const handlePrev = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  return (
    <section className="py-28 bg-dwild-dark text-dwild-offwhite border-t border-dwild-sand/10 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-dwild-sand/15 pb-8">
            <div>
              <div className="inline-flex items-center gap-2 text-xs tracking-[0.3em] text-dwild-sand uppercase font-semibold mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                VISUAL IMMERSION
              </div>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-dwild-offwhite uppercase">
                A GLIMPSE OF <span className="font-semibold text-dwild-sand italic">DWILD</span>
              </h2>
            </div>

            {/* Category Filter Tabs */}
            <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative text-[11px] tracking-[0.2em] uppercase font-semibold px-4 py-2 border transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-dwild-sand text-dwild-black border-dwild-sand shadow-lg'
                      : 'bg-dwild-jungle text-dwild-offwhite/70 border-dwild-sand/20 hover:border-dwild-sand hover:text-dwild-sand'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Editorial Masonry Grid with Framer Motion Layout Animation */}
        <motion.div
          layout
          className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                onClick={() => setLightboxIndex(idx)}
                data-cursor="VIEW"
                className="group relative cursor-pointer overflow-hidden border border-dwild-sand/15 bg-dwild-jungle transition-all duration-500 hover:border-dwild-sand hover:shadow-2xl break-inside-avoid rounded-sm"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                
                {/* Dark Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dwild-black/90 via-dwild-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                {/* Hover Eye / Expand Badge */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                  <div className="p-2.5 bg-dwild-dark/90 text-dwild-sand border border-dwild-sand/40 shadow-xl rounded-full">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>

                {/* Hover Content Bar */}
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-3 group-hover:translate-y-0 text-dwild-offwhite">
                  <span className="text-[9px] tracking-[0.25em] text-dwild-sand uppercase font-bold block mb-1">
                    {item.category}
                  </span>
                  <h4 className="text-sm font-semibold tracking-wide uppercase mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-dwild-offwhite/80 font-light truncate">
                    {item.caption}
                  </p>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View Full Gallery Link */}
        <ScrollReveal delay={0.2} className="mt-14 text-center">
          <Link
            to="/gallery"
            className="group inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-semibold text-dwild-sand border-b border-dwild-sand/60 pb-1 hover:text-dwild-offwhite hover:border-dwild-offwhite transition-colors"
          >
            <span>EXPLORE FULL GALLERY</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
          </Link>
        </ScrollReveal>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </section>
  );
};
