import React from 'react';
import { Intro } from '../components/Intro';
import { WhyDwild } from '../components/WhyDwild';
import { InstagramSection } from '../components/InstagramSection';

export const AboutPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dwild-dark text-dwild-offwhite">
      {/* Banner */}
      <div className="py-20 bg-dwild-jungle border-b border-dwild-sand/15 text-center px-6">
        <span className="text-xs tracking-[0.35em] text-dwild-sand font-semibold uppercase block mb-3">
          PHILOSOPHY & VISION
        </span>
        <h1 className="text-4xl sm:text-6xl font-light uppercase text-dwild-offwhite mb-4">
          THE DWILD <span className="font-semibold text-dwild-sand italic">STORY</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-dwild-offwhite/80 font-light leading-relaxed">
          Creating meaningful, private nature escapes surrounded by the mist and stillness of Wayanad, Kerala.
        </p>
      </div>

      <Intro />
      <WhyDwild />
      <InstagramSection />
    </div>
  );
};
