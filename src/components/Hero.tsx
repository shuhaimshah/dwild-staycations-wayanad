import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronDown } from 'lucide-react';

export const Hero: React.FC = () => {
  const scrollToNext = () => {
    const introSection = document.getElementById('intro-section');
    if (introSection) {
      introSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative w-full h-screen min-h-[700px] flex items-center pt-28 sm:pt-36 md:pt-32 pb-16 overflow-hidden bg-dwild-black">
      {/* Real High-Resolution Property Photograph Hero Background */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero/hero-main.jpg"
          alt="DWILD Staycations Wayanad Property and Forest"
          loading="eager"
          // @ts-ignore - fetchPriority is supported in modern browsers & Vite
          fetchPriority="high"
          decoding="async"
          className="w-full h-full object-cover object-[center_35%] sm:object-[center_30%] scale-100 transition-transform duration-1000 ease-out"
        />
        {/* Subtle Dark Forest Overlay - Retains Natural Greens, Mist, and Warm Wood */}
        <div className="absolute inset-0 bg-gradient-to-t from-dwild-black via-dwild-black/35 to-dwild-black/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-dwild-black/70 via-transparent to-transparent hidden sm:block" />
      </div>

      {/* Editorial Upper-Middle Viewport Composition (~32-38% from top) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center -mt-6 sm:-mt-10 md:-mt-14">
        
        {/* Left Column Text & CTAs */}
        <div className="lg:col-span-8 flex flex-col items-start text-left">
          
          {/* Section 2 Editorial Small Label */}
          <span className="text-xs sm:text-sm tracking-[0.35em] text-dwild-sand font-medium uppercase block mb-3 leading-none">
            WAYANAD · KERALA
          </span>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-dwild-offwhite uppercase leading-[1.02] mb-5">
            ESCAPE INTO <br />
            <span className="font-semibold text-dwild-sand italic">THE WILD.</span>
          </h1>

          {/* Supporting Description */}
          <p className="max-w-xl text-base sm:text-lg text-dwild-offwhite/90 font-light tracking-wide leading-relaxed mb-8">
            A private retreat surrounded by the quiet beauty of Wayanad.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
            <Link
              to="/book"
              className="group inline-flex items-center justify-center gap-3 text-xs tracking-[0.25em] font-semibold text-dwild-black bg-dwild-sand px-8 py-4 border border-dwild-sand hover:bg-dwild-offwhite hover:border-dwild-offwhite transition-all duration-300 shadow-2xl"
            >
              <span>BOOK YOUR STAY</span>
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1.5" />
            </Link>

            <button
              onClick={scrollToNext}
              className="group inline-flex items-center justify-center gap-2 text-xs tracking-[0.25em] font-medium text-dwild-sand bg-dwild-dark/50 backdrop-blur-md px-8 py-4 border border-dwild-sand/30 hover:border-dwild-sand hover:bg-dwild-sand/10 transition-all duration-300"
            >
              <span>EXPLORE DWILD ↓</span>
            </button>
          </div>
        </div>

        {/* Right Column: Minimal Editorial Scroll Prompt */}
        <div className="lg:col-span-4 hidden lg:flex flex-col items-end justify-center text-right">
          <button
            onClick={scrollToNext}
            className="flex items-center gap-3 text-dwild-offwhite/60 hover:text-dwild-sand transition-colors cursor-pointer group"
          >
            <span className="text-[10px] tracking-[0.3em] uppercase group-hover:tracking-[0.35em] transition-all">
              SCROLL DOWN
            </span>
            <ChevronDown className="w-4 h-4 animate-bounce text-dwild-sand" />
          </button>
        </div>

      </div>
    </section>
  );
};
