import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { staysData } from '../data/stays';
import { BookingForm } from '../components/BookingForm';
import { Users, BedDouble, Eye, ArrowLeft, Check, Calendar } from 'lucide-react';
import { getWhatsAppUrl } from '../utils/ctaHelpers';

export const StayDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const stay = staysData.find(s => s.slug === slug) || staysData[0];

  const whatsappUrl = getWhatsAppUrl(`Hi DWILD, I would like to inquire about booking the "${stay.name}".`);

  return (
    <div className="pt-24 min-h-screen bg-dwild-dark text-dwild-offwhite">
      {/* Top Breadcrumb */}
      <div className="max-w-7xl mx-auto px-6 pt-6">
        <Link
          to="/stays"
          className="inline-flex items-center gap-2 text-xs tracking-[0.2em] text-dwild-sand uppercase font-semibold hover:text-dwild-offwhite transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>BACK TO ALL STAYS</span>
        </Link>
      </div>

      {/* Hero Gallery Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Images */}
          <div className="lg:col-span-7 space-y-4">
            <div className="aspect-[4/3] w-full overflow-hidden border border-dwild-sand/20 shadow-2xl">
              <img src={stay.heroImage} alt={stay.name} className="w-full h-full object-cover" />
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {stay.gallery.slice(1).map((img, idx) => (
                <div key={idx} className="aspect-[4/3] w-full overflow-hidden border border-dwild-sand/15">
                  <img src={img} alt={`${stay.name} gallery ${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Info */}
          <div className="lg:col-span-5 bg-dwild-jungle p-8 sm:p-10 border border-dwild-sand/20 flex flex-col justify-between">
            <div>
              <span className="text-xs tracking-[0.3em] text-dwild-sand uppercase font-semibold block mb-2">
                {stay.type}
              </span>
              <h1 className="text-3xl sm:text-4xl font-light uppercase text-dwild-offwhite mb-4">
                {stay.name}
              </h1>
              <p className="text-xs text-dwild-sand italic mb-6">{stay.shortDesc}</p>

              {/* Specs */}
              <div className="grid grid-cols-3 gap-3 py-4 border-y border-dwild-sand/15 text-xs text-dwild-offwhite/80 mb-6">
                <div>
                  <Users className="w-4 h-4 text-dwild-sand mb-1" />
                  <span>Max {stay.maxGuests} Guests</span>
                </div>
                <div>
                  <BedDouble className="w-4 h-4 text-dwild-sand mb-1" />
                  <span>{stay.bedConfig}</span>
                </div>
                <div>
                  <Eye className="w-4 h-4 text-dwild-sand mb-1" />
                  <span>{stay.view}</span>
                </div>
              </div>

              <p className="text-xs text-dwild-offwhite/80 font-light leading-relaxed mb-8">
                {stay.description}
              </p>

              {/* Amenities */}
              <div className="mb-8">
                <h3 className="text-xs tracking-[0.2em] text-dwild-sand uppercase font-semibold mb-4">
                  INCLUDED AMENITIES
                </h3>
                <div className="space-y-2 text-xs text-dwild-offwhite/80">
                  {stay.amenities.map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <Check className="w-4 h-4 text-dwild-sand flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-6 border-t border-dwild-sand/15">
              <Link
                to="/book"
                className="w-full inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-dwild-black bg-dwild-sand py-4 hover:bg-dwild-offwhite transition-colors shadow-lg"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK THIS STAY</span>
              </Link>

              {whatsappUrl && (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-dwild-sand bg-dwild-dark border border-dwild-sand/30 py-4 hover:bg-dwild-earth hover:text-dwild-offwhite transition-colors"
                >
                  <span>INQUIRE VIA WHATSAPP</span>
                </a>
              )}
            </div>
          </div>

        </div>
      </div>

      <BookingForm />
    </div>
  );
};
