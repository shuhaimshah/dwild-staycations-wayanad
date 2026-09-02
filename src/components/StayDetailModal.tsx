import React, { useState } from 'react';
import { X, Users, BedDouble, Eye, Check, MessageSquare, Calendar } from 'lucide-react';
import { StayItem } from '../types';
import { getWhatsAppUrl } from '../utils/ctaHelpers';
import { Link } from 'react-router-dom';

interface StayDetailModalProps {
  stay: StayItem | null;
  onClose: () => void;
}

export const StayDetailModal: React.FC<StayDetailModalProps> = ({ stay, onClose }) => {
  const [activeImage, setActiveImage] = useState<string>(stay?.heroImage || '');

  if (!stay) return null;

  const currentHero = activeImage || stay.heroImage;
  const whatsappUrl = getWhatsAppUrl(`Hi DWILD, I am inquiring about booking the "${stay.name}". Could you please share availability and rates?`);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-dwild-black/90 backdrop-blur-xl animate-fadeIn">
      <div className="relative w-full max-w-5xl max-h-[90vh] bg-dwild-dark border border-dwild-sand/20 overflow-y-auto shadow-2xl flex flex-col lg:flex-row">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-dwild-black/80 text-dwild-sand hover:text-dwild-offwhite border border-dwild-sand/30 transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Left Column: Image Viewer */}
        <div className="lg:w-1/2 p-6 flex flex-col justify-between bg-dwild-black/50 border-r border-dwild-sand/10">
          <div>
            <div className="relative aspect-[4/3] w-full overflow-hidden mb-4 border border-dwild-sand/15">
              <img
                src={currentHero}
                alt={stay.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div className="absolute top-3 left-3 bg-dwild-dark/80 backdrop-blur-md px-3 py-1 text-[10px] tracking-widest text-dwild-sand uppercase border border-dwild-sand/20">
                {stay.type}
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="flex items-center gap-3 overflow-x-auto pb-2">
              {stay.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImage(imgUrl)}
                  className={`relative w-20 h-14 flex-shrink-0 border transition-all ${
                    currentHero === imgUrl ? 'border-dwild-sand scale-105' : 'border-dwild-sand/20 opacity-60 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`Gallery ${idx}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 pt-4 border-t border-dwild-sand/10">
            <span className="text-[10px] tracking-[0.2em] text-dwild-sand/60 uppercase block mb-1">
              DATA NOTICE
            </span>
            <p className="text-[11px] text-dwild-offwhite/50 italic">
              * Editable placeholder data. Accommodation specifications subject to property host confirmation.
            </p>
          </div>
        </div>

        {/* Right Column: Details & Enquiry */}
        <div className="lg:w-1/2 p-6 sm:p-8 flex flex-col justify-between">
          <div>
            <div className="mb-6">
              <span className="text-xs tracking-[0.3em] text-dwild-sand font-medium uppercase block mb-2">
                ACCOMMODATION DETAILS
              </span>
              <h3 className="text-2xl sm:text-3xl font-light text-dwild-offwhite uppercase mb-2">
                {stay.name}
              </h3>
              <p className="text-xs text-dwild-sand italic">{stay.shortDesc}</p>
            </div>

            {/* Key Specs Bar */}
            <div className="grid grid-cols-3 gap-3 py-4 border-y border-dwild-sand/15 mb-6 text-xs text-dwild-offwhite/80">
              <div className="flex items-center gap-2">
                <Users className="w-4 h-4 text-dwild-sand" />
                <span>Max {stay.maxGuests} Guests</span>
              </div>
              <div className="flex items-center gap-2">
                <BedDouble className="w-4 h-4 text-dwild-sand" />
                <span>{stay.bedConfig}</span>
              </div>
              <div className="flex items-center gap-2">
                <Eye className="w-4 h-4 text-dwild-sand" />
                <span>{stay.view}</span>
              </div>
            </div>

            {/* Full Description */}
            <p className="text-xs text-dwild-offwhite/75 font-light leading-relaxed mb-6">
              {stay.description}
            </p>

            {/* Amenities List */}
            <div className="mb-6">
              <h4 className="text-[11px] tracking-[0.25em] text-dwild-sand uppercase font-semibold mb-3">
                KEY AMENITIES & FEATURES
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-dwild-offwhite/80">
                {stay.amenities.map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-dwild-sand flex-shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Booking CTAs inside Modal */}
          <div className="pt-6 border-t border-dwild-sand/15 flex flex-col sm:flex-row gap-3">
            <Link
              to="/book"
              onClick={onClose}
              className="flex-1 inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-dwild-black bg-dwild-sand py-3.5 hover:bg-dwild-offwhite transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>REQUEST AVAILABILITY</span>
            </Link>

            {whatsappUrl && (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-dwild-sand bg-dwild-jungle border border-dwild-sand/40 px-6 py-3.5 hover:bg-dwild-earth hover:text-dwild-offwhite transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>WHATSAPP</span>
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
