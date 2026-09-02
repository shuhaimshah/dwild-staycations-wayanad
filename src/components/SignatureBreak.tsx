import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const SignatureBreak: React.FC = () => {
  return (
    <section className="relative w-full py-36 sm:py-48 flex items-center justify-center overflow-hidden bg-dwild-black">
      {/* Real Campfire Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/experiences/dwild-real-campfire.jpg"
          alt="Private Night Campfire at DWILD Staycations"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 filter brightness-75"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-dwild-black/90 via-dwild-black/70 to-dwild-black/90" />
        <div className="absolute inset-0 bg-dwild-dark/40 backdrop-blur-[1px]" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <span className="text-xs tracking-[0.35em] text-dwild-sand font-medium uppercase block mb-4">
          NIGHT SKY & FIREPIT EXPERIENCE
        </span>
        
        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-light tracking-tight text-dwild-offwhite uppercase mb-6 leading-tight">
          WAKE UP <br />
          <span className="font-semibold text-dwild-sand italic">TO THE WILD.</span>
        </h2>

        <p className="max-w-xl mx-auto text-base sm:text-lg text-dwild-offwhite/85 font-light leading-relaxed mb-10">
          Slow mornings. Mist-covered hills. Crisp mountain air. Quiet evening bonfires that stay with you.
        </p>

        <Link
          to="/stays"
          className="group inline-flex items-center gap-3 text-xs tracking-[0.25em] font-semibold text-dwild-black bg-dwild-sand px-8 py-4 border border-dwild-sand hover:bg-dwild-offwhite hover:border-dwild-offwhite transition-all duration-300 shadow-2xl"
        >
          <span>DISCOVER THE STAY</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
        </Link>
      </div>
    </section>
  );
};
