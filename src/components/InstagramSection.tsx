import React from 'react';
import { Instagram, ExternalLink } from 'lucide-react';
import { getInstagramUrl } from '../utils/ctaHelpers';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'framer-motion';

export const InstagramSection: React.FC = () => {
  const instagramUrl = getInstagramUrl();

  const instaPosts = [
    {
      id: 1,
      image: "/assets/stays/dwild-real-aframe-twilight.jpg",
      likes: "2.8k",
      caption: "Twilight lamps illuminating the stone path to our A-Frame cabin. #dwildstays #wayanad",
    },
    {
      id: 2,
      image: "/assets/experiences/dwild-real-jeep-trail.jpg",
      likes: "3.4k",
      caption: "4x4 trails through morning sunbeams in Wayanad forest. #offroad #keralatourism",
    },
    {
      id: 3,
      image: "/assets/experiences/dwild-real-campfire.jpg",
      likes: "4.1k",
      caption: "Bonfire nights under quiet dark mountain skies. #dwild #slowliving",
    },
    {
      id: 4,
      image: "/assets/stays/dwild-real-mud-cottage.jpg",
      likes: "2.1k",
      caption: "Heritage mandala art on earth-insulated mud cottage walls. #ecoarchitecture #wayanadstay",
    },
  ];

  return (
    <section className="py-24 bg-dwild-dark text-dwild-offwhite border-t border-dwild-sand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <ScrollReveal>
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-12 border-b border-dwild-sand/15 pb-8">
            <div>
              <div className="flex items-center gap-2 text-dwild-sand text-xs tracking-[0.3em] font-semibold uppercase mb-2">
                <Instagram className="w-4 h-4" />
                INSTAGRAM JOURNAL
              </div>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-dwild-offwhite uppercase">
                FOLLOW <span className="font-semibold text-dwild-sand italic">THE WILD</span>
              </h2>
              <p className="text-sm text-dwild-sand font-mono mt-1">@dwildstays.in</p>
            </div>

            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-dwild-black bg-dwild-sand px-6 py-3.5 hover:bg-dwild-offwhite hover:scale-[1.02] active:scale-[0.98] transition-all shadow-lg"
            >
              <span>FOLLOW @DWILDSTAYS.IN</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </ScrollReveal>

        {/* Real Property Photo Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {instaPosts.map((post, idx) => (
            <ScrollReveal key={post.id} delay={idx * 0.1}>
              <motion.a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -4 }}
                className="group relative aspect-square overflow-hidden bg-dwild-jungle border border-dwild-sand/15 block rounded-sm shadow-lg"
              >
                <img
                  src={post.image}
                  alt={`Instagram post ${post.id}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-dwild-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-dwild-offwhite">
                  <div className="flex items-center justify-between text-dwild-sand">
                    <Instagram className="w-5 h-5" />
                    <span className="text-xs font-mono">♥ {post.likes}</span>
                  </div>
                  <p className="text-xs font-light text-dwild-offwhite/85 line-clamp-3 leading-relaxed">
                    {post.caption}
                  </p>
                  <span className="text-[10px] tracking-[0.2em] text-dwild-sand uppercase font-semibold">
                    VIEW ON INSTAGRAM →
                  </span>
                </div>
              </motion.a>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
