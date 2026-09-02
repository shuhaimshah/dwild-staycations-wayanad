import React from 'react';
import { siteConfig } from '../data/siteConfig';
import { ExternalCtaButton } from './ExternalCtaButton';
import { getGoogleMapsUrl, getPhoneUrl, getEmailUrl, getWhatsAppUrl } from '../utils/ctaHelpers';
import { MapPin, Phone, Mail, MessageSquare, Plane, Train, Car } from 'lucide-react';

export const LocationMap: React.FC = () => {
  const mapsUrl = getGoogleMapsUrl();
  const phoneUrl = getPhoneUrl();
  const emailUrl = getEmailUrl();
  const whatsappUrl = getWhatsAppUrl();

  return (
    <section className="py-28 bg-dwild-dark text-dwild-offwhite border-t border-dwild-sand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="mb-16 border-b border-dwild-sand/15 pb-8">
          <span className="text-xs tracking-[0.3em] text-dwild-sand uppercase font-medium block mb-2">
            LOCATION & ACCESS
          </span>
          <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-dwild-offwhite uppercase">
            FIND YOUR WAY <span className="font-semibold text-dwild-sand italic">TO DWILD</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Contact & Transport details */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8 bg-dwild-jungle p-8 sm:p-10 border border-dwild-sand/15">
            <div>
              <span className="text-xs tracking-[0.25em] text-dwild-sand uppercase font-semibold block mb-4">
                PROPERTY ADDRESS
              </span>
              <div className="flex items-start gap-3 text-dwild-offwhite mb-6">
                <MapPin className="w-5 h-5 text-dwild-sand flex-shrink-0 mt-0.5" />
                <p className="text-sm font-light leading-relaxed">
                  {siteConfig.location.address}
                </p>
              </div>

              {/* Contact Channels */}
              <div className="space-y-4 pt-6 border-t border-dwild-sand/15">
                {/* Phone */}
                <div className="flex items-center justify-between text-xs py-2 border-b border-dwild-sand/10">
                  <span className="flex items-center gap-2 text-dwild-offwhite/70">
                    <Phone className="w-4 h-4 text-dwild-sand" />
                    Phone Contact:
                  </span>
                  {phoneUrl ? (
                    <a href={phoneUrl} className="text-dwild-sand hover:underline font-medium tracking-wider">
                      {siteConfig.contact.phone}
                    </a>
                  ) : (
                    <span className="text-dwild-sand/40 italic">(Configured upon request)</span>
                  )}
                </div>

                {/* WhatsApp */}
                <div className="flex items-center justify-between text-xs py-2 border-b border-dwild-sand/10">
                  <span className="flex items-center gap-2 text-dwild-offwhite/70">
                    <MessageSquare className="w-4 h-4 text-dwild-sand" />
                    WhatsApp Chat:
                  </span>
                  {whatsappUrl ? (
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="text-dwild-sand hover:underline font-medium tracking-wider">
                      +91 82813 84993
                    </a>
                  ) : (
                    <span className="text-dwild-sand/40 italic">(Configured upon request)</span>
                  )}
                </div>

                {/* Email */}
                <div className="flex items-center justify-between text-xs py-2 border-b border-dwild-sand/10">
                  <span className="flex items-center gap-2 text-dwild-offwhite/70">
                    <Mail className="w-4 h-4 text-dwild-sand" />
                    Email Enquiry:
                  </span>
                  {emailUrl ? (
                    <a href={emailUrl} className="text-dwild-sand hover:underline font-medium">
                      Send Email
                    </a>
                  ) : (
                    <span className="text-dwild-sand/40 italic">(Available via Enquiry Form)</span>
                  )}
                </div>
              </div>

              {/* Transportation Overview */}
              <div className="mt-8 pt-6 border-t border-dwild-sand/15">
                <span className="text-[10px] tracking-[0.25em] text-dwild-sand uppercase font-semibold block mb-4">
                  NEAREST TRANSIT POINTS
                </span>
                <div className="space-y-3 text-xs text-dwild-offwhite/80">
                  <div className="flex items-center gap-3">
                    <Plane className="w-4 h-4 text-dwild-sand" />
                    <span>Calicut International Airport (CCJ) — Approx. 85 km</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Train className="w-4 h-4 text-dwild-sand" />
                    <span>Kozhikode Railway Station (CLT) — Approx. 78 km</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Car className="w-4 h-4 text-dwild-sand" />
                    <span>Meppadi Town Hub — 📍 Central Wayanad Junction</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6 border-t border-dwild-sand/15">
              <ExternalCtaButton
                url={mapsUrl}
                label="GET DIRECTIONS"
                variant="primary"
                className="w-full"
              />
            </div>
          </div>

          {/* Right Column: Custom Dark Styled Embed / Map Display */}
          <div className="lg:col-span-7 relative min-h-[400px] bg-dwild-black border border-dwild-sand/15 overflow-hidden flex flex-col items-center justify-center p-8 group">
            {/* Custom Styled Map Canvas Overlay */}
            <div className="absolute inset-0 z-0">
              <iframe
                title="DWILD Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125197.804825946!2d76.0468!3d11.5173!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba60f0a5996f8b9%3A0xa59f71c4c8d5a8b7!2sMeppadi%2C%20Kerala!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 filter grayscale invert contrast-125 opacity-60 group-hover:opacity-80 transition-opacity duration-700"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="absolute inset-0 bg-dwild-black/30 pointer-events-none" />
            </div>

            {/* Floating Location Card */}
            <div className="relative z-10 bg-dwild-dark/90 backdrop-blur-md p-6 border border-dwild-sand/30 shadow-2xl max-w-sm text-center">
              <MapPin className="w-8 h-8 text-dwild-sand mx-auto mb-3 animate-bounce" />
              <h3 className="text-sm font-semibold tracking-[0.2em] text-dwild-offwhite uppercase mb-1">
                {siteConfig.brand.name}
              </h3>
              <p className="text-xs text-dwild-sand italic mb-4">
                Meppadi, Wayanad, Kerala
              </p>
              <ExternalCtaButton
                url={mapsUrl}
                label="OPEN IN MAPS"
                variant="outline"
                className="w-full text-[10px] py-2.5"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
