import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';

export const FloatingBookingBar: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 left-6 z-40 animate-fadeIn">
      <Link
        to="/book"
        className="group inline-flex items-center gap-3 bg-dwild-sand text-dwild-black px-6 py-3.5 shadow-2xl border border-dwild-sand hover:bg-dwild-offwhite transition-all duration-300"
      >
        <Calendar className="w-4 h-4 text-dwild-black" />
        <span className="text-xs tracking-[0.2em] uppercase font-bold">
          BOOK YOUR STAY
        </span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </Link>
    </div>
  );
};
