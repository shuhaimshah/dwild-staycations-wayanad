import React, { useState } from 'react';
import { experiencesData } from '../data/experiences';
import { Compass, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const Experiences: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');

  const categories = ['ALL', 'Nature', 'Adventure', 'Relaxation', 'Dining', 'Culture'];

  const filteredExperiences = activeCategory === 'ALL'
    ? experiencesData
    : experiencesData.filter((exp) => exp.category.toUpperCase() === activeCategory.toUpperCase());

  return (
    <section className="py-28 bg-dwild-dark text-dwild-offwhite border-t border-dwild-sand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-dwild-sand/15 pb-8">
          <div>
            <span className="text-xs tracking-[0.3em] text-dwild-sand uppercase font-medium block mb-2">
              OUTDOOR & SLOW LIVING
            </span>
            <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-dwild-offwhite uppercase">
              EXPERIENCE <span className="font-semibold text-dwild-sand italic">WAYANAD</span>
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-2 mt-6 md:mt-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] tracking-[0.2em] uppercase font-semibold px-4 py-2 border transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-dwild-sand text-dwild-black border-dwild-sand'
                    : 'bg-dwild-jungle text-dwild-offwhite/70 border-dwild-sand/20 hover:border-dwild-sand hover:text-dwild-sand'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredExperiences.map((exp) => (
            <div
              key={exp.id}
              className="group relative bg-dwild-jungle border border-dwild-sand/15 overflow-hidden h-[420px] flex flex-col justify-end p-8 transition-all duration-700 hover:border-dwild-sand hover:shadow-glow"
            >
              {/* Card Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 opacity-70 group-hover:opacity-85"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dwild-black via-dwild-black/50 to-transparent" />
              </div>

              {/* Top Tag */}
              <div className="absolute top-6 left-6 z-10">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-dwild-dark/80 backdrop-blur-md border border-dwild-sand/25 text-[9px] tracking-[0.25em] text-dwild-sand uppercase font-semibold">
                  <Compass className="w-3 h-3 text-dwild-sand" />
                  {exp.tag}
                </span>
              </div>

              {/* Bottom Content */}
              <div className="relative z-10 transform transition-transform duration-500 group-hover:-translate-y-2">
                <span className="text-[10px] tracking-[0.25em] text-dwild-sand uppercase font-medium block mb-2">
                  {exp.category} EXPERIENCE
                </span>
                <h3 className="text-xl sm:text-2xl font-light text-dwild-offwhite uppercase mb-3 group-hover:text-dwild-sand transition-colors">
                  {exp.title}
                </h3>
                <p className="text-xs text-dwild-offwhite/80 font-light leading-relaxed mb-4 line-clamp-3 opacity-90 group-hover:opacity-100 transition-opacity">
                  {exp.shortDesc}
                </p>

                <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase font-semibold text-dwild-sand pt-2 border-t border-dwild-sand/20">
                  <span>DISCOVER EXPERIENCE</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/experiences"
            className="inline-flex items-center gap-3 text-xs tracking-[0.25em] uppercase font-semibold text-dwild-sand border-b border-dwild-sand pb-1 hover:text-dwild-offwhite hover:border-dwild-offwhite transition-colors"
          >
            <span>VIEW ALL WAYANAD EXPERIENCES</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};
