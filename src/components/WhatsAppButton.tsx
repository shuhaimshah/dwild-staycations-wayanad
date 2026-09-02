import React from 'react';
import { getWhatsAppUrl } from '../utils/ctaHelpers';

export const WhatsAppButton: React.FC = () => {
  const whatsappUrl = getWhatsAppUrl();

  if (!whatsappUrl) {
    return null; // Gracefully hidden when number is unconfigured per Section 39.3
  }

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 p-3.5 bg-[#25D366] text-white rounded-full shadow-2xl hover:scale-110 hover:bg-[#20bd5a] transition-all duration-300 flex items-center justify-center group"
      aria-label="Contact DWILD on WhatsApp"
    >
      {/* Official WhatsApp Brand SVG Icon */}
      <svg
        className="w-6 h-6 fill-current text-white"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001L2 22l5.127-1.341c1.472.802 3.14 1.224 4.881 1.224 5.507 0 9.989-4.478 9.99-9.984 0-2.668-1.04-5.176-2.928-7.062A9.923 9.923 0 0012.012 2zm0 18.14c-1.558 0-3.084-.418-4.417-1.211l-.316-.188-3.037.795.809-2.96-.206-.328a8.163 8.163 0 01-1.252-4.264c0-4.509 3.668-8.177 8.178-8.177 2.184 0 4.237.85 5.782 2.395a8.136 8.136 0 012.394 5.782c0 4.51-3.668 8.177-8.177 8.177zm4.492-6.131c-.247-.124-1.462-.722-1.689-.804-.227-.083-.392-.124-.557.124-.165.248-.64.804-.784.97-.144.165-.289.185-.536.062-.247-.124-1.045-.385-1.99-1.228-.736-.656-1.233-1.467-1.378-1.714-.144-.247-.015-.38.109-.503.111-.11.247-.289.371-.433.124-.144.165-.247.247-.412.083-.165.041-.31-.02-.433-.062-.124-.557-1.341-.763-1.836-.2-.482-.403-.416-.557-.424h-.475c-.165 0-.433.062-.66.31-.227.247-.866.846-.866 2.064 0 1.218.887 2.394 1.011 2.56.124.165 1.745 2.664 4.229 3.737.591.256 1.053.409 1.412.523.593.188 1.133.162 1.56.098.476-.071 1.462-.598 1.669-1.176.206-.578.206-1.073.144-1.176-.062-.103-.227-.165-.474-.289z" />
      </svg>
      
      <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 ease-in-out text-xs font-semibold tracking-wider uppercase ml-0 group-hover:ml-2">
        Chat With Us
      </span>
    </a>
  );
};
