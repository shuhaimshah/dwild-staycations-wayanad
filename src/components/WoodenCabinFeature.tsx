import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const WoodenCabinFeature: React.FC = () => {
  return (
    <section className="relative py-28 md:py-36 bg-dwild-dark text-dwild-offwhite border-t border-dwild-sand/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <span className="text-xs tracking-[0.35em] text-dwild-sand font-medium uppercase">
              HERITAGE ECO CRAFT
            </span>

            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-dwild-offwhite uppercase leading-tight">
              SIMPLE. WARM. <br />
              <span className="font-semibold text-dwild-sand italic">WILD.</span>
            </h2>

            <p className="text-base sm:text-lg text-dwild-offwhite/85 font-light leading-relaxed">
              Experience traditional mud-plastered walls adorned with handcrafted white mandala art under ancient forest foliage. Organic earth insulation keeps interiors naturally cool and serene.
            </p>

            <div className="pt-2">
              <Link
                to="/stays/dwild-mud-cottage"
                className="group inline-flex items-center gap-3 text-xs tracking-[0.25em] font-semibold text-dwild-sand hover:text-dwild-offwhite transition-colors"
              >
                <span>DISCOVER MUD COTTAGE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
              </Link>
            </div>
          </div>

          {/* Right Image Column with New High-Quality Mud Cottage Photo */}
          <div className="lg:col-span-7 relative group" data-cursor="VIEW">
            <div className="relative aspect-[4/5] sm:aspect-[4/5] lg:aspect-[14/11] w-full overflow-hidden border border-dwild-sand/20 shadow-2xl">
              <img
                src="/assets/stays/dwild-real-mud-cottage.jpg"
                alt="DWILD Traditional Kerala Mud Cottage with Mandala Mural"
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover object-[center_40%] transition-transform duration-700 ease-out group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-dwild-black/50 via-transparent to-transparent opacity-50" />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
