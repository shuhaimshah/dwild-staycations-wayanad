import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex flex-col justify-between bg-dwild-black/95 backdrop-blur-2xl p-4 sm:p-8"
        onClick={onClose}
      >
        {/* Top Header Bar */}
        <div
          className="flex items-center justify-between z-20 pb-4 border-b border-dwild-sand/15 max-w-7xl mx-auto w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-3">
            <Maximize2 className="w-4 h-4 text-dwild-sand" />
            <span className="text-xs tracking-[0.25em] text-dwild-sand font-semibold uppercase">
              DWILD GALLERY · {currentItem.category}
            </span>
          </div>

          <div className="flex items-center gap-6">
            <span className="text-xs tracking-[0.2em] text-dwild-offwhite/60 font-mono">
              {currentIndex + 1} / {items.length}
            </span>
            <button
              onClick={onClose}
              className="p-2.5 text-dwild-sand hover:text-dwild-offwhite bg-dwild-dark/80 border border-dwild-sand/30 hover:border-dwild-sand transition-all shadow-xl rounded-full"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Main Image Container */}
        <div
          className="relative flex-grow flex items-center justify-center my-4 overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Previous Button */}
          <button
            onClick={onPrev}
            className="absolute left-2 sm:left-6 z-20 p-3.5 bg-dwild-dark/80 text-dwild-sand hover:text-dwild-offwhite border border-dwild-sand/30 hover:border-dwild-sand transition-all shadow-2xl rounded-full hover:scale-110"
            aria-label="Previous Image"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Current Image with Framer Motion Key Animation */}
          <div className="max-w-5xl max-h-[75vh] p-2 flex flex-col items-center justify-center w-full">
            <motion.img
              key={currentItem.id}
              src={currentItem.image}
              alt={currentItem.title}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-full max-h-[70vh] object-contain shadow-2xl border border-dwild-sand/20 rounded-sm"
            />
          </div>

          {/* Next Button */}
          <button
            onClick={onNext}
            className="absolute right-2 sm:right-6 z-20 p-3.5 bg-dwild-dark/80 text-dwild-sand hover:text-dwild-offwhite border border-dwild-sand/30 hover:border-dwild-sand transition-all shadow-2xl rounded-full hover:scale-110"
            aria-label="Next Image"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Bottom Caption Bar */}
        <div
          className="text-center pt-4 border-t border-dwild-sand/15 max-w-3xl mx-auto w-full"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.h4
            key={`title-${currentItem.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-base font-light tracking-wide text-dwild-offwhite uppercase mb-1"
          >
            {currentItem.title}
          </motion.h4>
          <motion.p
            key={`caption-${currentItem.id}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-xs text-dwild-offwhite/70 italic font-light"
          >
            {currentItem.caption}
          </motion.p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
