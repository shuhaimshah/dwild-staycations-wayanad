import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { GalleryItem } from '../types';

interface LightboxProps {
  items: GalleryItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  items,
  currentIndex,
  onClose,
  onPrev,
  onNext,
}) => {
  const currentItem = items[currentIndex];

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!currentItem) return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col justify-between bg-dwild-black/95 backdrop-blur-2xl p-4 sm:p-8 animate-fadeIn">
      {/* Top Header Bar */}
      <div className="flex items-center justify-between z-20 pb-4 border-b border-dwild-sand/15">
        <div className="flex items-center gap-3">
          <Maximize2 className="w-4 h-4 text-dwild-sand" />
          <span className="text-xs tracking-[0.25em] text-dwild-sand font-semibold uppercase">
            DWILD GALLERY · {currentItem.category}
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="text-xs tracking-[0.2em] text-dwild-offwhite/60">
            {currentIndex + 1} / {items.length}
          </span>
          <button
            onClick={onClose}
            className="p-2 text-dwild-sand hover:text-dwild-offwhite border border-dwild-sand/30 transition-colors"
            aria-label="Close Lightbox"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Area with Controls */}
      <div className="relative flex-grow flex items-center justify-center my-4 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={onPrev}
          className="absolute left-2 sm:left-6 z-20 p-3 bg-dwild-dark/80 text-dwild-sand hover:text-dwild-offwhite border border-dwild-sand/30 hover:border-dwild-sand transition-all"
          aria-label="Previous Image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Current Image */}
        <div className="max-w-5xl max-h-[75vh] p-2 flex flex-col items-center">
          <img
            src={currentItem.image}
            alt={currentItem.title}
            className="max-w-full max-h-[70vh] object-contain shadow-2xl border border-dwild-sand/20"
          />
        </div>

        {/* Next Button */}
        <button
          onClick={onNext}
          className="absolute right-2 sm:right-6 z-20 p-3 bg-dwild-dark/80 text-dwild-sand hover:text-dwild-offwhite border border-dwild-sand/30 hover:border-dwild-sand transition-all"
          aria-label="Next Image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Bottom Caption Bar */}
      <div className="text-center pt-4 border-t border-dwild-sand/15 max-w-3xl mx-auto">
        <h4 className="text-base font-light tracking-wide text-dwild-offwhite uppercase mb-1">
          {currentItem.title}
        </h4>
        <p className="text-xs text-dwild-offwhite/70 italic font-light">
          {currentItem.caption}
        </p>
      </div>
    </div>
  );
};
