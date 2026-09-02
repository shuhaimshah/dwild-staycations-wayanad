import React from 'react';
import { ScrollReveal } from './ScrollReveal';
import { motion } from 'framer-motion';

export const WhyDwild: React.FC = () => {
  const features = [
    {
      num: "01",
      title: "STAY IN NATURE",
      description: "Wake up surrounded by the misty canopy and rolling green mountain landscapes of Wayanad."
    },
    {
      num: "02",
      title: "PRIVACY",
      description: "A peaceful, secluded escape away from commercial hotel crowds and noisy tourist hubs."
    },
    {
      num: "03",
      title: "CURATED EXPERIENCES",
      description: "Discover the outdoors through natural stream dips, stargazing campfires, and rainforest walks."
    },
    {
      num: "04",
      title: "SLOW LIVING",
      description: "Disconnect from daily screens and reconnect with unhurried nature, crisp air, and quiet moments."
    },
    {
      num: "05",
      title: "WILD BEAUTY",
      description: "Experience the raw, misty, atmospheric, and dramatic side of Kerala’s Western Ghats."
    }
  ];

  return (
    <section className="py-24 bg-dwild-jungle text-dwild-offwhite border-t border-dwild-sand/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-dwild-sand/15 pb-8">
            <div>
              <span className="text-xs tracking-[0.3em] text-dwild-sand uppercase font-medium block mb-2">
                DISTINCTIVE ESSENCE
              </span>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-dwild-offwhite uppercase">
                WHY <span className="font-semibold text-dwild-sand italic">DWILD?</span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-dwild-offwhite/70 font-light mt-4 md:mt-0">
              Every feature is designed to offer an authentic, unhurried immersion into the wild soul of Wayanad.
            </p>
          </div>
        </ScrollReveal>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {features.map((item, idx) => (
            <ScrollReveal key={item.num} delay={idx * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-dwild-dark/60 border border-dwild-sand/15 p-8 transition-all duration-500 hover:border-dwild-sand hover:shadow-xl flex flex-col justify-between h-full rounded-sm"
              >
                <div>
                  <span className="text-2xl font-light text-dwild-sand/40 group-hover:text-dwild-sand transition-colors block mb-6 font-mono">
                    {item.num}
                  </span>
                  <h3 className="text-sm font-semibold tracking-[0.2em] text-dwild-offwhite group-hover:text-dwild-sand transition-colors uppercase mb-4">
                    {item.title}
                  </h3>
                  <p className="text-xs text-dwild-offwhite/70 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-dwild-sand/10">
                  <span className="text-[10px] tracking-[0.25em] text-dwild-sand uppercase opacity-0 group-hover:opacity-100 transition-opacity font-semibold">
                    DWILD ESSENCE →
                  </span>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
