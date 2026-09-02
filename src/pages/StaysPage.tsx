import React from 'react';
import { Accommodation } from '../components/Accommodation';
import { BookingForm } from '../components/BookingForm';

export const StaysPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dwild-dark text-dwild-offwhite">
      {/* Banner */}
      <div className="py-20 bg-dwild-jungle border-b border-dwild-sand/15 text-center px-6">
        <span className="text-xs tracking-[0.35em] text-dwild-sand font-semibold uppercase block mb-3">
          DWILD ACCOMMODATIONS
        </span>
        <h1 className="text-4xl sm:text-6xl font-light uppercase text-dwild-offwhite mb-4">
          STAYS & <span className="font-semibold text-dwild-sand italic">SANCTUARIES</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-dwild-offwhite/80 font-light leading-relaxed">
          Designed for quiet seeking, panoramic immersion, and unhurried rest amidst the Vellarimala mountain mist.
        </p>
      </div>

      <Accommodation />
      <BookingForm />
    </div>
  );
};
