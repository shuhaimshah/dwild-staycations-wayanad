import React from 'react';
import { EditorialGallery } from '../components/EditorialGallery';

export const GalleryPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dwild-dark text-dwild-offwhite">
      {/* Banner */}
      <div className="py-20 bg-dwild-jungle border-b border-dwild-sand/15 text-center px-6">
        <span className="text-xs tracking-[0.35em] text-dwild-sand font-semibold uppercase block mb-3">
          VISUAL STORYTELLING
        </span>
        <h1 className="text-4xl sm:text-6xl font-light uppercase text-dwild-offwhite mb-4">
          EDITORIAL <span className="font-semibold text-dwild-sand italic">GALLERY</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-dwild-offwhite/80 font-light leading-relaxed">
          A visual journey through the mountain fog, architectural details, and natural stillness of DWILD Staycations.
        </p>
      </div>

      <EditorialGallery />
    </div>
  );
};
