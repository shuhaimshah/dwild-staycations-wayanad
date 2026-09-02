import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Trees } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const AFrameFeature: React.FC = () => {
  return (
    <section className="py-28 bg-dwild-jungle text-dwild-offwhite border-t border-dwild-sand/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Large Image Panel with Twilight Real A-Frame Photo */}
          <ScrollReveal direction="left" className="lg:col-span-7 relative group" data-cursor="EXPLORE">
            <div className="relative aspect-[4/5] sm:aspect-[16/10] w-full overflow-hidden border border-dwild-sand/20 shadow-2xl rounded-sm">
              <img
                src="/assets/stays/dwild-real-aframe-twilight.jpg"
                alt="DWILD Illuminated A-Frame Timber Sanctuary at Twilight"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dwild-black/70 via-transparent to-transparent opacity-60" />
            </div>

            <div className="absolute top-6 left-6 bg-dwild-dark/80 backdrop-blur-md px-3.5 py-1.5 text-[10px] tracking-[0.25em] text-dwild-sand uppercase font-semibold border border-dwild-sand/20">
              ARCHITECTURAL SANCTUARY
            </div>
          </ScrollReveal>

          {/* Right Editorial Copy */}
          <ScrollReveal direction="right" delay={0.15} className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="inline-flex items-center gap-2 text-dwild-sand text-xs tracking-[0.3em] font-semibold uppercase">
              <Trees className="w-4 h-4 text-dwild-sand" />
              TIMBER & CANOPY INTEGRATION
            </div>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-dwild-offwhite uppercase leading-tight">
              BUILT INTO <br />
              <span className="font-semibold text-dwild-sand italic">THE FOREST.</span>
            </h2>

            <p className="text-base sm:text-lg text-dwild-offwhite/85 font-light leading-relaxed">
              Wake up among trees, mist and the quiet rhythm of the wild. Designed with high floor-to-ceiling glass walls that frame ancient Wayanad rainforest trees and illuminated stone pathways.
            </p>

            <div className="pt-4">
              <Link
                to="/stays/dwild-aframe-sanctuary"
                className="group inline-flex items-center gap-3 text-xs tracking-[0.25em] font-semibold text-dwild-black bg-dwild-sand px-8 py-4 border border-dwild-sand hover:bg-dwild-offwhite hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
              >
                <span>EXPLORE THE STAY</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
};
