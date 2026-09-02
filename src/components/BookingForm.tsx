import React, { useState } from 'react';
import { BookingFormData } from '../types';
import { getWhatsAppUrl } from '../utils/ctaHelpers';
import { staysData } from '../data/stays';
import { Calendar, Users, CheckCircle, Send, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const BookingForm: React.FC = () => {
  const [formData, setFormData] = useState<BookingFormData>({
    name: '',
    phone: '',
    email: '',
    checkIn: '',
    checkOut: '',
    guests: '2',
    stayType: staysData[0]?.name || 'DWILD STAY — A-Frame Sanctuary',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const whatsappMessage = `Hi DWILD, I’m interested in staying at your property. Could you please share availability and booking details?
• Name: ${formData.name || 'Guest'}
• Dates: ${formData.checkIn || 'TBD'} to ${formData.checkOut || 'TBD'}
• Guests: ${formData.guests}
• Preferred Stay: ${formData.stayType}
• Notes: ${formData.message || 'None'}`;

  const whatsappUrl = getWhatsAppUrl(whatsappMessage);

  return (
    <section id="booking-section" className="py-28 bg-dwild-jungle text-dwild-offwhite border-t border-dwild-sand/10 relative overflow-hidden">
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-dwild-earth/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section 24 Heading */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-dwild-dark/80 border border-dwild-sand/20 text-[10px] tracking-[0.3em] text-dwild-sand uppercase font-semibold mb-4">
              <Sparkles className="w-3 h-3" />
              DIRECT STAY ENQUIRY
            </div>
            <h2 className="text-4xl sm:text-6xl font-light tracking-tight text-dwild-offwhite uppercase mb-4">
              YOUR ESCAPE <span className="font-semibold text-dwild-sand italic">STARTS HERE.</span>
            </h2>
            <p className="text-base sm:text-lg text-dwild-sand font-light italic">
              "Your Wayanad story starts here."
            </p>
          </div>
        </ScrollReveal>

        {submitted ? (
          <div className="bg-dwild-dark border border-dwild-sand p-10 text-center shadow-2xl space-y-6 animate-fadeIn rounded-sm">
            <CheckCircle className="w-14 h-14 text-dwild-sand mx-auto" />
            <h3 className="text-2xl font-light text-dwild-offwhite uppercase">
              ENQUIRY SUBMITTED
            </h3>
            <p className="text-sm text-dwild-offwhite/80 font-light max-w-md mx-auto leading-relaxed">
              Thank you, <span className="text-dwild-sand font-medium">{formData.name}</span>. Your stay request for <span className="text-dwild-sand">{formData.stayType}</span> has been received. Our team will contact you shortly with availability and host details.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-dwild-black bg-dwild-sand px-8 py-3.5 hover:bg-dwild-offwhite transition-colors"
            >
              SUBMIT ANOTHER ENQUIRY
            </button>
          </div>
        ) : (
          <ScrollReveal delay={0.15}>
            <form onSubmit={handleSubmit} className="bg-dwild-dark border border-dwild-sand/20 p-8 sm:p-12 shadow-2xl space-y-8 rounded-sm">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label className="block text-[11px] tracking-[0.2em] text-dwild-sand uppercase font-semibold mb-2">
                    FULL NAME *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="e.g. Rahul Nair"
                    className="w-full bg-dwild-jungle border border-dwild-sand/20 px-4 py-3 text-sm text-dwild-offwhite placeholder:text-dwild-offwhite/30 focus:border-dwild-sand focus:outline-none transition-colors"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-[11px] tracking-[0.2em] text-dwild-sand uppercase font-semibold mb-2">
                    PHONE NUMBER *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+91 XXXXX XXXXX"
                    className="w-full bg-dwild-jungle border border-dwild-sand/20 px-4 py-3 text-sm text-dwild-offwhite placeholder:text-dwild-offwhite/30 focus:border-dwild-sand focus:outline-none transition-colors"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-[11px] tracking-[0.2em] text-dwild-sand uppercase font-semibold mb-2">
                    EMAIL ADDRESS *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@domain.com"
                    className="w-full bg-dwild-jungle border border-dwild-sand/20 px-4 py-3 text-sm text-dwild-offwhite placeholder:text-dwild-offwhite/30 focus:border-dwild-sand focus:outline-none transition-colors"
                  />
                </div>

                {/* Guests Count */}
                <div>
                  <label className="block text-[11px] tracking-[0.2em] text-dwild-sand uppercase font-semibold mb-2 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-dwild-sand" />
                    NUMBER OF GUESTS
                  </label>
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleChange}
                    className="w-full bg-dwild-jungle border border-dwild-sand/20 px-4 py-3 text-sm text-dwild-offwhite focus:border-dwild-sand focus:outline-none transition-colors"
                  >
                    <option value="1">1 Guest (Solo Escape)</option>
                    <option value="2">2 Guests (Couple Staycation)</option>
                    <option value="3">3 Guests (Small Family)</option>
                    <option value="4">4 Guests (Group Sanctuary)</option>
                    <option value="5+">5+ Guests (Custom Group)</option>
                  </select>
                </div>

                {/* Check In Date */}
                <div>
                  <label className="block text-[11px] tracking-[0.2em] text-dwild-sand uppercase font-semibold mb-2 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-dwild-sand" />
                    CHECK-IN DATE
                  </label>
                  <input
                    type="date"
                    name="checkIn"
                    required
                    value={formData.checkIn}
                    onChange={handleChange}
                    className="w-full bg-dwild-jungle border border-dwild-sand/20 px-4 py-3 text-sm text-dwild-offwhite focus:border-dwild-sand focus:outline-none transition-colors"
                  />
                </div>

                {/* Check Out Date */}
                <div>
                  <label className="block text-[11px] tracking-[0.2em] text-dwild-sand uppercase font-semibold mb-2 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-dwild-sand" />
                    CHECK-OUT DATE
                  </label>
                  <input
                    type="date"
                    name="checkOut"
                    required
                    value={formData.checkOut}
                    onChange={handleChange}
                    className="w-full bg-dwild-jungle border border-dwild-sand/20 px-4 py-3 text-sm text-dwild-offwhite focus:border-dwild-sand focus:outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Accommodation Selection */}
              <div>
                <label className="block text-[11px] tracking-[0.2em] text-dwild-sand uppercase font-semibold mb-2">
                  PREFERRED ACCOMMODATION
                </label>
                <select
                  name="stayType"
                  value={formData.stayType}
                  onChange={handleChange}
                  className="w-full bg-dwild-jungle border border-dwild-sand/20 px-4 py-3 text-sm text-dwild-offwhite focus:border-dwild-sand focus:outline-none transition-colors"
                >
                  {staysData.map((s) => (
                    <option key={s.id} value={s.name}>
                      {s.name} — ({s.type})
                    </option>
                  ))}
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-[11px] tracking-[0.2em] text-dwild-sand uppercase font-semibold mb-2">
                  SPECIAL REQUESTS / OCCASION NOTES
                </label>
                <textarea
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Anniversary celebration, dietary preferences, arrival time..."
                  className="w-full bg-dwild-jungle border border-dwild-sand/20 px-4 py-3 text-sm text-dwild-offwhite placeholder:text-dwild-offwhite/30 focus:border-dwild-sand focus:outline-none transition-colors"
                />
              </div>

              {/* Section 24 Action Buttons */}
              <div className="pt-4 border-t border-dwild-sand/15 flex flex-col sm:flex-row items-center gap-4">
                <button
                  type="submit"
                  className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-dwild-black bg-dwild-sand py-4 border border-dwild-sand hover:bg-dwild-offwhite hover:border-dwild-offwhite hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
                >
                  <Send className="w-4 h-4" />
                  <span>REQUEST YOUR STAY →</span>
                </button>

                {whatsappUrl ? (
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-white bg-[#25D366] border border-[#25D366] py-4 hover:bg-[#20bd5a] hover:scale-[1.02] active:scale-[0.98] transition-all shadow-xl"
                  >
                    <svg className="w-4 h-4 fill-current text-white" viewBox="0 0 24 24">
                      <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984 0 1.762.459 3.48 1.332 5.001L2 22l5.127-1.341c1.472.802 3.14 1.224 4.881 1.224 5.507 0 9.989-4.478 9.99-9.984 0-2.668-1.04-5.176-2.928-7.062A9.923 9.923 0 0012.012 2zm0 18.14c-1.558 0-3.084-.418-4.417-1.211l-.316-.188-3.037.795.809-2.96-.206-.328a8.163 8.163 0 01-1.252-4.264c0-4.509 3.668-8.177 8.178-8.177 2.184 0 4.237.85 5.782 2.395a8.136 8.136 0 012.394 5.782c0 4.51-3.668 8.177-8.177 8.177zm4.492-6.131c-.247-.124-1.462-.722-1.689-.804-.227-.083-.392-.124-.557.124-.165.248-.64.804-.784.97-.144.165-.289.185-.536.062-.247-.124-1.045-.385-1.99-1.228-.736-.656-1.233-1.467-1.378-1.714-.144-.247-.015-.38.109-.503.111-.11.247-.289.371-.433.124-.144.165-.247.247-.412.083-.165.041-.31-.02-.433-.062-.124-.557-1.341-.763-1.836-.2-.482-.403-.416-.557-.424h-.475c-.165 0-.433.062-.66.31-.227.247-.866.846-.866 2.064 0 1.218.887 2.394 1.011 2.56.124.165 1.745 2.664 4.229 3.737.591.256 1.053.409 1.412.523.593.188 1.133.162 1.56.098.476-.071 1.462-.598 1.669-1.176.206-.578.206-1.073.144-1.176-.062-.103-.227-.165-.474-.289z" />
                    </svg>
                    <span>WHATSAPP US →</span>
                  </a>
                ) : (
                  <button
                    type="button"
                    disabled
                    title="WhatsApp number pending configuration in siteConfig.ts"
                    className="w-full sm:w-1/2 inline-flex items-center justify-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-dwild-sand/40 bg-dwild-jungle/50 border border-dwild-sand/15 py-4 cursor-not-allowed"
                  >
                    <span>WHATSAPP US (PENDING CONFIG) →</span>
                  </button>
                )}
              </div>

            </form>
          </ScrollReveal>
        )}

      </div>
    </section>
  );
};
