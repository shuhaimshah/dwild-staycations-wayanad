import React, { useState } from 'react';
import { staysData } from '../data/stays';
import { StayItem } from '../types';
import { StayDetailModal } from './StayDetailModal';
import { Users, Eye, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'framer-motion';

export const Accommodation: React.FC = () => {
  const [selectedStay, setSelectedStay] = useState<StayItem | null>(null);

  return (
    <section className="py-28 bg-dwild-dark text-dwild-offwhite border-t border-dwild-sand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section 8 Heading */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-dwild-sand/15 pb-8">
            <div>
              <span className="text-xs tracking-[0.3em] text-dwild-sand uppercase font-medium block mb-2">
                REAL PROPERTY SANCTUARIES
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-dwild-offwhite uppercase">
                STAY CLOSER <span className="font-semibold text-dwild-sand italic">TO NATURE.</span>
              </h2>
            </div>
            <Link
              to="/stays"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-dwild-sand hover:text-dwild-offwhite transition-colors mt-4 md:mt-0"
            >
              <span>VIEW ALL ACCOMMODATIONS</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Section 9 Large Editorial Image Panels */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {staysData.map((stay, idx) => (
            <ScrollReveal key={stay.id} delay={idx * 0.15}>
              <motion.div
                data-cursor="EXPLORE"
                onClick={() => setSelectedStay(stay)}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="group cursor-pointer bg-dwild-jungle border border-dwild-sand/15 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-dwild-sand hover:shadow-2xl rounded-sm h-full"
              >
                {/* Image Panel */}
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  <img
                    src={stay.heroImage}
                    alt={stay.name}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dwild-jungle via-dwild-jungle/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute top-4 left-4 bg-dwild-dark/90 backdrop-blur-md px-3 py-1 text-[9px] tracking-[0.25em] text-dwild-sand uppercase border border-dwild-sand/20 font-semibold">
                    DWILD STAY
                  </div>
                </div>

                {/* Content Panel */}
                <div className="p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <h3 className="text-xl font-light tracking-wide text-dwild-offwhite group-hover:text-dwild-sand transition-colors uppercase mb-3">
                      {stay.name}
                    </h3>
                    <p className="text-xs text-dwild-offwhite/75 font-light leading-relaxed mb-6">
                      {stay.shortDesc}
                    </p>

                    {/* Specs */}
                    <div className="grid grid-cols-3 gap-2 py-4 border-y border-dwild-sand/10 text-[11px] text-dwild-sand font-medium mb-6">
                      <div className="flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5" />
                        <span>{stay.maxGuests} Guests</span>
                      </div>
                      <div className="flex items-center gap-1.5 col-span-2">
                        <Eye className="w-3.5 h-3.5" />
                        <span className="truncate">{stay.view}</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center justify-between pt-2 border-t border-dwild-sand/10">
                    <span className="text-[10px] tracking-[0.2em] text-dwild-sand/60 uppercase font-mono">
                      {stay.priceNote}
                    </span>
                    
                    <div className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-dwild-sand group-hover:text-dwild-offwhite transition-colors">
                      <span>EXPLORE STAY</span>
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Modal Popup */}
      <StayDetailModal stay={selectedStay} onClose={() => setSelectedStay(null)} />
    </section>
  );
};
