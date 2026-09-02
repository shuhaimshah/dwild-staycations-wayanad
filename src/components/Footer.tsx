import React from 'react';
import { Link } from 'react-router-dom';
import { siteConfig } from '../data/siteConfig';
import { getInstagramUrl, getWhatsAppUrl } from '../utils/ctaHelpers';
import { Instagram } from 'lucide-react';

export const Footer: React.FC = () => {
  const instagramUrl = getInstagramUrl();
  const whatsappUrl = getWhatsAppUrl();

  return (
    <footer className="relative bg-dwild-black text-dwild-offwhite border-t border-dwild-sand/15 pt-24 pb-12 overflow-hidden">
      
      {/* Dark Forest Background Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/hero/hero-main.jpg"
          alt="Dark Forest Background"
          className="w-full h-full object-cover filter brightness-50 opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dwild-black via-dwild-black/90 to-dwild-black/80" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-dwild-sand/15 items-start">
          
          {/* Brand Column with Official Logo Emblem */}
          <div className="md:col-span-5 space-y-6">
            <Link to="/" className="inline-flex items-center gap-3.5 group">
              <div className="w-12 h-12 rounded-full border border-dwild-sand overflow-hidden shadow-xl group-hover:scale-105 transition-transform">
                <img
                  src="/assets/brand/dwild-official-logo.jpg"
                  alt="DWILD Official Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold tracking-[0.25em] text-dwild-offwhite uppercase">
                  DWILD
                </span>
                <span className="text-[10px] tracking-[0.3em] text-dwild-sand uppercase">
                  STAYCATIONS · WAYANAD
                </span>
              </div>
            </Link>

            <p className="text-sm font-light tracking-wide text-dwild-sand italic">
              "ESCAPE INTO THE WILD."
            </p>

            <p className="text-xs text-dwild-offwhite/70 font-light max-w-sm leading-relaxed">
              {siteConfig.brand.subTagline}
            </p>

            <div className="flex items-center space-x-4 pt-2">
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-dwild-jungle border border-dwild-sand/20 text-dwild-sand hover:text-dwild-offwhite hover:border-dwild-sand transition-all shadow-md"
                aria-label="Instagram Profile"
              >
                <Instagram className="w-4 h-4" />
              </a>

              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#25D366] text-white hover:bg-[#20bd5a] transition-all shadow-md rounded-sm flex items-center justify-center"
                  aria-label="WhatsApp Contact"
                >
                  <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                    <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001L2 22l5.127-1.341c1.472.802 3.14 1.224 4.881 1.224 5.507 0 9.989-4.478 9.99-9.984 0-2.668-1.04-5.176-2.928-7.062A9.923 9.923 0 0012.012 2zm0 18.14c-1.558 0-3.084-.418-4.417-1.211l-.316-.188-3.037.795.809-2.96-.206-.328a8.163 8.163 0 01-1.252-4.264c0-4.509 3.668-8.177 8.178-8.177 2.184 0 4.237.85 5.782 2.395a8.136 8.136 0 012.394 5.782c0 4.51-3.668 8.177-8.177 8.177zm4.492-6.131c-.247-.124-1.462-.722-1.689-.804-.227-.083-.392-.124-.557.124-.165.248-.64.804-.784.97-.144.165-.289.185-.536.062-.247-.124-1.045-.385-1.99-1.228-.736-.656-1.233-1.467-1.378-1.714-.144-.247-.015-.38.109-.503.111-.11.247-.289.371-.433.124-.144.165-.247.247-.412.083-.165.041-.31-.02-.433-.062-.124-.557-1.341-.763-1.836-.2-.482-.403-.416-.557-.424h-.475c-.165 0-.433.062-.66.31-.227.247-.866.846-.866 2.064 0 1.218.887 2.394 1.011 2.56.124.165 1.745 2.664 4.229 3.737.591.256 1.053.409 1.412.523.593.188 1.133.162 1.56.098.476-.071 1.462-.598 1.669-1.176.206-.578.206-1.073.144-1.176-.062-.103-.227-.165-.474-.289z" />
                  </svg>
                </a>
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-4">
            <span className="text-[11px] tracking-[0.3em] text-dwild-sand uppercase font-semibold block">
              NAVIGATION
            </span>
            <ul className="space-y-3 text-xs tracking-wider text-dwild-offwhite/85 font-light">
              <li>
                <Link to="/stays" className="hover:text-dwild-sand transition-colors uppercase">
                  STAYS
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="hover:text-dwild-sand transition-colors uppercase">
                  EXPERIENCES
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-dwild-sand transition-colors uppercase">
                  GALLERY
                </Link>
              </li>
              <li>
                <Link to="/wayanad" className="hover:text-dwild-sand transition-colors uppercase">
                  WAYANAD
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-dwild-sand transition-colors uppercase">
                  ABOUT DWILD
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-dwild-sand transition-colors uppercase">
                  CONTACT
                </Link>
              </li>
            </ul>
          </div>

          {/* Location & Direct CTA */}
          <div className="md:col-span-4 space-y-4">
            <span className="text-[11px] tracking-[0.3em] text-dwild-sand uppercase font-semibold block">
              LOCATION & PROPERTY
            </span>
            <p className="text-xs text-dwild-offwhite/75 font-light leading-relaxed">
              {siteConfig.location.address}
            </p>

            <div className="pt-4">
              <Link
                to="/book"
                className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-dwild-black bg-dwild-sand px-6 py-3.5 hover:bg-dwild-offwhite transition-colors shadow-xl"
              >
                <span>BOOK YOUR STAY →</span>
              </Link>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-dwild-offwhite/50 space-y-4 sm:space-y-0">
          <p>© 2026 {siteConfig.brand.name}. All Rights Reserved.</p>
          <p className="text-dwild-sand/70 tracking-widest uppercase">
            {siteConfig.brand.region} · Kerala, India
          </p>
        </div>

      </div>
    </footer>
  );
};
