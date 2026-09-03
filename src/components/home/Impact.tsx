"use client";

import { motion } from "framer-motion";
import { Marquee } from "../ui/Marquee";

export function Impact() {
  const marqueeItemsRow1 = [
    "Gender Neutrality", "Uninhibited Expression", "Identity", "Equality", 
    "Institutional Memory", "Inclusivity", "Awareness", "Social Conditioning"
  ];

  const marqueeItemsRow2 = [
    "Consent & Rights", "Mental Wellbeing", "Safe Spaces", "Critical Dialogue", 
    "Student Solidarity", "Queer Voices", "Empowerment", "DU Campus"
  ];

  return (
    <section className="w-full max-w-full py-16 sm:py-20 md:py-24 overflow-hidden">
      
      <div className="container mx-auto px-4 sm:px-6 md:px-12 mb-10 sm:mb-16">
        <span className="text-[10px] sm:text-xs font-mono tracking-[0.2em] uppercase text-foreground/50 block text-center mb-3 sm:mb-4">
          Core Pillars &amp; Advocacy
        </span>
        <h2 className="font-serif text-[clamp(2.2rem,6vw,6.5rem)] leading-[0.92] uppercase tracking-tighter text-foreground mb-4 sm:mb-6 text-center">
          We didn&apos;t just talk.
        </h2>
        <p className="font-sans text-base sm:text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto text-center leading-relaxed">
          Our credibility is built on action. We create spaces for dialogue, drive awareness campaigns, and collaborate with voices that matter.
        </p>
      </div>

      {/* Clean, perfectly aligned dual editorial ticker strips */}
      <div className="w-full max-w-full overflow-hidden my-6 sm:my-8 flex flex-col gap-2.5 sm:gap-3">
        <div className="border-y border-foreground/15 bg-foreground/[0.04] py-3 sm:py-3.5">
          <Marquee items={marqueeItemsRow1} speed={30} className="text-foreground" />
        </div>
        <div className="border-b border-foreground/15 bg-foreground/[0.02] py-3 sm:py-3.5">
          <Marquee items={marqueeItemsRow2} speed={32} reverse={true} className="text-foreground/70" />
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 md:px-12 mt-12 sm:mt-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {[
            { 
              tag: "01 / SELF-DETERMINATION", 
              title: "AUTONOMY", 
              copy: "Reclaiming absolute ownership over our choices, bodies, and future trajectories." 
            },
            { 
              tag: "02 / COLLECTIVE FORCE", 
              title: "SOLIDARITY", 
              copy: "Building intersectional alliances that amplify marginalized voices across campus." 
            },
            { 
              tag: "03 / BREAKING BARRIERS", 
              title: "RESISTANCE", 
              copy: "Questioning social conditioning and dismantling inherited gender orthodoxies." 
            },
            { 
              tag: "04 / UNAPOLOGETIC SPACE", 
              title: "LEADERSHIP", 
              copy: "Claiming decision-making power, shaping culture, and leading without compromise." 
            }
          ].map((item, i) => (
            <motion.div 
              key={i}
              className="flex flex-col gap-2 border-t border-foreground/20 pt-5 sm:pt-6 group"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
            >
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.18em] uppercase text-foreground/50 font-semibold">
                {item.tag}
              </span>
              <h4 className="font-serif text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight text-foreground group-hover:text-foreground/80 transition-colors">
                {item.title}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-foreground/70 leading-relaxed">
                {item.copy}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
      
    </section>
  );
}

