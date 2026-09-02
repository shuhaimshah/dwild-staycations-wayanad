import React from 'react';
import { wayanadAttractions } from '../data/wayanad';
import { MapPin, Navigation, Info } from 'lucide-react';
import { siteConfig } from '../data/siteConfig';

export const WayanadDestination: React.FC = () => {
  return (
    <section className="py-28 bg-dwild-jungle text-dwild-offwhite border-t border-dwild-sand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16 border-b border-dwild-sand/15 pb-12">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-dwild-dark/70 border border-dwild-sand/20 text-[10px] tracking-[0.3em] text-dwild-sand uppercase font-semibold mb-4">
              <MapPin className="w-3 h-3" />
              DESTINATION IMMERSION
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-light tracking-tight text-dwild-offwhite uppercase leading-tight">
              WAYANAD, <br />
              <span className="font-semibold text-dwild-sand italic">IN ITS WILDEST FORM.</span>
            </h2>
          </div>

          <div className="lg:col-span-5 text-dwild-offwhite/80 font-light text-sm leading-relaxed space-y-4">
            <p>
              Situated along the pristine mountain corridors of Vellarimala in Meppadi, DWILD offers front-row access to the dramatic misty peaks, tea slopes, and natural waterfall systems of Kerala's high wilderness.
            </p>
            <div className="flex items-center gap-2 text-xs text-dwild-sand font-medium">
              <Navigation className="w-4 h-4 text-dwild-sand" />
              <span>{siteConfig.location.address}</span>
            </div>
          </div>
        </div>

        {/* Attractions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {wayanadAttractions.map((att) => (
            <div
              key={att.id}
              className="group bg-dwild-dark/80 border border-dwild-sand/15 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-dwild-sand"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <img
                  src={att.image}
                  alt={att.name}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dwild-dark via-transparent to-transparent opacity-80" />
                <span className="absolute top-3 left-3 bg-dwild-dark/90 backdrop-blur-md px-2.5 py-1 text-[9px] tracking-widest text-dwild-sand uppercase border border-dwild-sand/20">
                  {att.category}
                </span>
              </div>

              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="text-base font-semibold tracking-wide text-dwild-offwhite group-hover:text-dwild-sand transition-colors uppercase mb-2">
                    {att.name}
                  </h3>
                  <p className="text-xs text-dwild-offwhite/70 font-light leading-relaxed mb-4">
                    {att.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-dwild-sand/10 space-y-1 text-[10px] text-dwild-sand">
                  <div className="flex items-center gap-1.5 opacity-90">
                    <Info className="w-3 h-3 text-dwild-sand flex-shrink-0" />
                    <span className="italic">{att.distanceNote}</span>
                  </div>
                  <p className="text-dwild-offwhite/50 text-[9px]">{att.travelTimeNote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
