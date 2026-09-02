import React from 'react';
import { WayanadDestination } from '../components/WayanadDestination';
import { LocationMap } from '../components/LocationMap';
import { BookingForm } from '../components/BookingForm';

export const WayanadPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dwild-dark text-dwild-offwhite">
      {/* Banner */}
      <div className="py-20 bg-dwild-jungle border-b border-dwild-sand/15 text-center px-6">
        <span className="text-xs tracking-[0.35em] text-dwild-sand font-semibold uppercase block mb-3">
          DESTINATION GUIDE
        </span>
        <h1 className="text-4xl sm:text-6xl font-light uppercase text-dwild-offwhite mb-4">
          DISCOVER <span className="font-semibold text-dwild-sand italic">WAYANAD</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-dwild-offwhite/80 font-light leading-relaxed">
          Vellarimala mountain corridors, ancient rainforest trails, waterfalls, and tea estate landscapes.
        </p>
      </div>

      <WayanadDestination />
      <LocationMap />
      <BookingForm />
    </div>
  );
};
