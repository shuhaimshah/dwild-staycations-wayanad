import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'STAYS', path: '/stays' },
    { name: 'EXPERIENCES', path: '/experiences' },
    { name: 'GALLERY', path: '/gallery' },
    { name: 'WAYANAD', path: '/wayanad' },
    { name: 'ABOUT', path: '/about' },
  ];

  return (
    <>
      {/* 
        SECTION 2 REQUIREMENT:
        Navbar MUST NOT be fixed or sticky. It is position: absolute at top-0 
        so it overlays the initial hero area and naturally scrolls away with the page flow.
      */}
      <header className="absolute top-0 left-0 right-0 z-40 py-6 bg-gradient-to-b from-dwild-black/90 via-dwild-black/40 to-transparent">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Official Logo Branding */}
          <Link to="/" className="group flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-full border border-dwild-sand/40 overflow-hidden shadow-lg group-hover:border-dwild-sand transition-colors">
              <img
                src="/assets/brand/dwild-official-logo.jpg"
                alt="DWILD Official Logo Emblem"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold tracking-[0.25em] text-dwild-offwhite group-hover:text-dwild-sand transition-colors uppercase leading-none">
                DWILD
              </span>
              <span className="text-[9px] tracking-[0.3em] text-dwild-sand/80 uppercase mt-1">
                STAYCATIONS · WAYANAD
              </span>
            </div>
          </Link>

          {/* Minimal Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`relative text-xs tracking-[0.25em] font-medium transition-colors py-1 ${
                    isActive ? 'text-dwild-sand font-semibold' : 'text-dwild-offwhite/85 hover:text-dwild-sand'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-dwild-sand" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Primary Action */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/book"
              className="group inline-flex items-center gap-2 text-xs tracking-[0.25em] uppercase font-semibold text-dwild-black bg-dwild-sand px-6 py-3 border border-dwild-sand hover:bg-dwild-offwhite hover:border-dwild-offwhite transition-all duration-300 shadow-md"
            >
              <span>BOOK NOW</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-dwild-offwhite hover:text-dwild-sand p-2 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-7 h-7 text-dwild-sand" /> : <Menu className="w-7 h-7" />}
          </button>

        </div>
      </header>

      {/* Fullscreen Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 bg-dwild-black/95 backdrop-blur-2xl flex flex-col justify-between px-8 py-24 md:hidden animate-fadeIn">
          <div className="flex flex-col space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-dwild-sand">
                <img src="/assets/brand/dwild-official-logo.jpg" alt="DWILD Logo" className="w-full h-full object-cover" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-[0.25em] text-dwild-offwhite uppercase">DWILD</span>
                <span className="text-[10px] tracking-[0.3em] text-dwild-sand uppercase">STAYCATIONS</span>
              </div>
            </div>

            <div className="flex flex-col space-y-6 pt-4 border-t border-dwild-sand/15">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-2xl font-light tracking-[0.25em] text-dwild-offwhite hover:text-dwild-sand transition-colors uppercase"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="flex flex-col space-y-4 pt-8 border-t border-dwild-sand/15">
            <Link
              to="/book"
              className="flex items-center justify-center gap-3 text-xs tracking-[0.25em] uppercase font-bold text-dwild-black bg-dwild-sand py-4 shadow-xl"
            >
              <span>BOOK YOUR STAY</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <p className="text-center text-[10px] text-dwild-sand/60 tracking-[0.3em] uppercase">
              Vellarimala · Wayanad · Kerala
            </p>
          </div>
        </div>
      )}
    </>
  );
};
