import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trees, ShieldCheck, Sparkles } from 'lucide-react';

export const Intro: React.FC = () => {
  return (
    <section id="intro-section" className="relative py-28 md:py-36 bg-dwild-dark text-dwild-offwhite overflow-hidden">
      
      {/* Subtle Forest Backdrop Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-dwild-jungle/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Editorial Section Label */}
        <div className="flex items-center gap-3 mb-12">
          <span className="w-8 h-[1px] bg-dwild-sand" />
          <span className="text-xs tracking-[0.3em] text-dwild-sand uppercase font-medium">
            WELCOME TO DWILD STAYCATIONS
          </span>
        </div>

        {/* Asymmetric Overlapping Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Overlapping Real Property Image */}
          <div className="lg:col-span-6 relative group" data-cursor="VIEW">
            <div className="relative aspect-[4/5] w-full overflow-hidden border border-dwild-sand/20 shadow-2xl">
              <img
                src="/assets/stays/stay-aframe.jpg"
                alt="DWILD A-Frame Timber Sanctuary in Forest"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dwild-black/80 via-transparent to-transparent opacity-60" />
            </div>

            {/* Overlapping Floating Badge */}
            <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-dwild-jungle/90 backdrop-blur-md p-6 border border-dwild-sand/30 shadow-2xl max-w-xs hidden sm:block">
              <span className="text-[10px] tracking-[0.3em] text-dwild-sand uppercase block mb-1 font-semibold">
                REAL PROPERTY ATMOSPHERE
              </span>
              <p className="text-xs text-dwild-offwhite/80 font-light italic">
                Timber cabins integrated into ancient Wayanad rainforest trees.
              </p>
            </div>
          </div>

          {/* Right Column: Editorial Copy */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-dwild-offwhite uppercase leading-tight mb-8">
              A DIFFERENT <br />
              <span className="font-semibold text-dwild-sand italic">KIND OF ESCAPE.</span>
            </h2>

            <p className="text-base sm:text-lg text-dwild-offwhite/90 font-light leading-relaxed mb-8">
              Leave the noise behind and step into a quieter side of Wayanad. Nestled in the pristine mist of Vellarimala, every moment is crafted for privacy, luxury, and reconnection with nature.
            </p>

            <div className="space-y-3 text-dwild-sand font-bold tracking-[0.25em] text-lg sm:text-2xl border-l-2 border-dwild-sand pl-6 py-2 mb-10">
              <p>WILD.</p>
              <p>PRIVATE.</p>
              <p>UNFORGETTABLE.</p>
            </div>

            <div className="grid grid-cols-3 gap-4 py-6 border-y border-dwild-sand/15 mb-10">
              <div className="flex flex-col items-start">
                <Trees className="w-5 h-5 text-dwild-sand mb-2" />
                <span className="text-[10px] tracking-[0.2em] text-dwild-sand uppercase font-semibold">100% Wilderness</span>
                <span className="text-xs text-dwild-offwhite/60">Rainforest Setting</span>
              </div>
              <div className="flex flex-col items-start">
                <ShieldCheck className="w-5 h-5 text-dwild-sand mb-2" />
                <span className="text-[10px] tracking-[0.2em] text-dwild-sand uppercase font-semibold">Absolute Privacy</span>
                <span className="text-xs text-dwild-offwhite/60">Secluded Sanctuary</span>
              </div>
              <div className="flex flex-col items-start">
                <Sparkles className="w-5 h-5 text-dwild-sand mb-2" />
                <span className="text-[10px] tracking-[0.2em] text-dwild-sand uppercase font-semibold">Quiet Luxury</span>
                <span className="text-xs text-dwild-offwhite/60">Curated Stays</span>
              </div>
            </div>

            <div>
              <Link
                to="/about"
                className="group inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-semibold text-dwild-sand hover:text-dwild-offwhite transition-colors"
              >
                <span>READ THE DWILD STORY</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5 text-dwild-sand" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
