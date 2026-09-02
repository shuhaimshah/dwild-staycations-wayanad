import React from 'react';
import { Experiences } from '../components/Experiences';
import { BookingForm } from '../components/BookingForm';

export const ExperiencesPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dwild-dark text-dwild-offwhite">
      {/* Banner */}
      <div className="py-20 bg-dwild-jungle border-b border-dwild-sand/15 text-center px-6">
        <span className="text-xs tracking-[0.35em] text-dwild-sand font-semibold uppercase block mb-3">
          OUTDOOR IMMERSION & RECONNECTION
        </span>
        <h1 className="text-4xl sm:text-6xl font-light uppercase text-dwild-offwhite mb-4">
          WAYANAD <span className="font-semibold text-dwild-sand italic">EXPERIENCES</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-dwild-offwhite/80 font-light leading-relaxed">
          From sunrise canopy trails and natural stream dips to quiet evening bonfires under unpolluted mountain skies.
        </p>
      </div>

      <Experiences />
      <BookingForm />
    </div>
  );
};
