import React, { useState } from 'react';
import { galleryData } from '../data/gallery';
import { Lightbox } from './Lightbox';
import { Maximize2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

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
    <section className="py-28 bg-dwild-dark text-dwild-offwhite border-t border-dwild-sand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-dwild-sand/15 pb-8">
          <div>
            <span className="text-xs tracking-[0.3em] text-dwild-sand uppercase font-medium block mb-2">
              VISUAL IMMERSION
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-dwild-offwhite uppercase">
              A GLIMPSE OF <span className="font-semibold text-dwild-sand italic">DWILD</span>
            </h2>
          </div>

          {/* Section 14 Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] tracking-[0.2em] uppercase font-semibold px-4 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-dwild-sand text-dwild-black border-dwild-sand'
                    : 'bg-dwild-jungle text-dwild-offwhite/70 border-dwild-sand/20 hover:border-dwild-sand hover:text-dwild-sand'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Section 13 Editorial Masonry Grid with Visual Rhythm */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredItems.map((item, idx) => (
            <div
              key={item.id}
              onClick={() => setLightboxIndex(idx)}
              data-cursor="VIEW"
              className="group relative cursor-pointer overflow-hidden border border-dwild-sand/15 bg-dwild-jungle transition-all duration-500 hover:border-dwild-sand hover:shadow-glow break-inside-avoid"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dwild-black/90 via-dwild-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="p-2.5 bg-dwild-dark/80 text-dwild-sand border border-dwild-sand/30">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 text-dwild-offwhite">
                <span className="text-[9px] tracking-[0.25em] text-dwild-sand uppercase block mb-1">
                  {item.category}
                </span>
                <h4 className="text-sm font-semibold tracking-wide uppercase mb-1">
                  {item.title}
                </h4>
                <p className="text-[11px] text-dwild-offwhite/70 font-light truncate">
                  {item.caption}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <Link
            to="/gallery"
            className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-semibold text-dwild-sand border-b border-dwild-sand pb-1 hover:text-dwild-offwhite hover:border-dwild-offwhite transition-colors"
          >
            <span>EXPLORE FULL GALLERY</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

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
