import React from 'react';
import { LocationMap } from '../components/LocationMap';
import { BookingForm } from '../components/BookingForm';

export const ContactPage: React.FC = () => {
  return (
    <div className="pt-24 min-h-screen bg-dwild-dark text-dwild-offwhite">
      {/* Banner */}
      <div className="py-20 bg-dwild-jungle border-b border-dwild-sand/15 text-center px-6">
        <span className="text-xs tracking-[0.35em] text-dwild-sand font-semibold uppercase block mb-3">
          DIRECT CONCIERGE & ACCESS
        </span>
        <h1 className="text-4xl sm:text-6xl font-light uppercase text-dwild-offwhite mb-4">
          CONTACT <span className="font-semibold text-dwild-sand italic">DWILD</span>
        </h1>
        <p className="max-w-2xl mx-auto text-sm text-dwild-offwhite/80 font-light leading-relaxed">
          Reach out for stay availability, property location guides, and custom staycation enquiries.
        </p>
      </div>

      <LocationMap />
      <BookingForm />
    </div>
  );
};
