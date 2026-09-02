import React from 'react';

export const CinematicBreak: React.FC = () => {
  return (
    <section className="relative w-full h-[60vh] min-h-[450px] flex items-center justify-center overflow-hidden bg-dwild-black">
      {/* Real Jeep Trail Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/experiences/dwild-real-jeep-trail.jpg"
          alt="DWILD Off-Road Trail Experience"
          className="w-full h-full object-cover object-center scale-105 filter brightness-70"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dwild-dark via-dwild-black/60 to-dwild-dark" />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <span className="text-xs sm:text-sm tracking-[0.35em] text-dwild-sand font-medium uppercase block mb-4">
          DWILD STAYCATIONS · WAYANAD
        </span>
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-wider text-dwild-offwhite uppercase mb-4 leading-none">
          LEAVE THE NOISE <span className="font-semibold italic text-dwild-sand">BEHIND.</span>
        </h2>
        <p className="text-lg sm:text-2xl font-light tracking-[0.25em] text-dwild-sand/90 uppercase italic">
          FIND YOUR WILD.
        </p>
      </div>
    </section>
  );
};
