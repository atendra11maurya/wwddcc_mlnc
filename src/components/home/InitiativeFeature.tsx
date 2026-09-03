"use client";

import { motion } from "framer-motion";
import { Initiative } from "@/data/initiatives";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface InitiativeFeatureProps {
  initiative: Initiative;
  index: number;
}

export function InitiativeFeature({ initiative, index }: InitiativeFeatureProps) {
  const isEven = index % 2 === 0;
  const isYouTube = initiative.video?.includes("youtube.com");

  return (
    <section className="py-8 sm:py-14 md:py-20 lg:py-24 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-8 sm:gap-12">
        <div className={cn(
          "flex flex-col lg:flex-row gap-8 sm:gap-12 lg:gap-16 items-center",
          !isEven && "lg:flex-row-reverse"
        )}>
          
          {/* Media Side with Big, Prominent Editorial Pastel Graphics */}
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: isEven ? -24 : 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            {isYouTube ? (
              /* YouTube Video Embed */
              <div className="relative w-full max-w-lg mx-auto flex flex-col gap-2.5">
                {/* Big prominent primary pastel circle behind top-right */}
                <div className="absolute -top-6 -right-6 sm:-top-12 sm:-right-12 w-44 h-44 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-full bg-[#C8DEEA]/75 -z-10 pointer-events-none shadow-sm" />
                {/* Secondary prominent pastel circle behind bottom-left */}
                <div className="absolute -bottom-6 -left-6 sm:-bottom-8 sm:-left-8 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-[#D8CBE5]/65 -z-10 pointer-events-none" />
                
                {/* Clean 16:9 Video */}
                <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-foreground/15 bg-black shadow-md">
                  <iframe
                    src={initiative.video}
                    title={initiative.name}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                  />
                </div>

                {/* Small Editorial Metadata Near Video */}
                <div className="flex items-center justify-between text-[11px] sm:text-xs font-mono text-foreground/60 px-1 pt-0.5">
                  <span className="tracking-[0.15em] sm:tracking-[0.18em] uppercase font-bold text-foreground/80">
                    REHNUMA / EP. 01
                  </span>
                  <a 
                    href="https://www.youtube.com/watch?v=vMmHmeldgfo" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-1 font-semibold"
                  >
                    Watch episode ↗
                  </a>
                </div>
              </div>
            ) : (
              /* Local Video Reel */
              <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md mx-auto flex flex-col gap-2.5">
                {/* Big prominent primary pastel circle */}
                <div className={cn(
                  "absolute w-44 h-44 sm:w-56 sm:h-56 md:w-72 md:h-72 rounded-full -z-10 pointer-events-none shadow-sm transition-transform duration-700",
                  isEven 
                    ? "-top-6 -left-6 sm:-top-12 sm:-left-12 bg-[#BFDCD2]/80" 
                    : "-top-6 -right-6 sm:-top-12 sm:-right-12 bg-[#E5AAA1]/80"
                )} />

                {/* Secondary prominent pastel accent circle */}
                <div className={cn(
                  "absolute w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full -z-10 pointer-events-none",
                  isEven 
                    ? "-bottom-5 -right-5 sm:-bottom-8 sm:-right-8 bg-[#E8D77B]/70" 
                    : "-bottom-5 -left-5 sm:-bottom-8 sm:-left-8 bg-[#BFDCD2]/70"
                )} />

                <div className="relative w-full aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden border border-foreground/15 bg-black shadow-md">
                  {initiative.video ? (
                    <video
                      src={initiative.video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-foreground/5 flex items-center justify-center">
                      <span className="font-mono text-xs uppercase tracking-widest text-foreground/40">
                        [{initiative.name}]
                      </span>
                    </div>
                  )}

                  {/* Corner Badge */}
                  <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-mono tracking-widest text-white uppercase border border-white/15">
                    {initiative.name} &bull; Reel
                  </div>
                </div>

                {/* Subtle Editorial Tag Below Reel */}
                <div className="flex items-center justify-between text-[10px] sm:text-[11px] font-mono text-foreground/60 px-1">
                  <span className="tracking-widest uppercase font-semibold">
                    WDC MLNC &bull; 2026
                  </span>
                  <span className="tracking-wider uppercase text-foreground/40">
                    0{index + 1}/{initiative.slug.toUpperCase()}
                  </span>
                </div>
              </div>
            )}
          </motion.div>

          {/* Content Side */}
          <motion.div 
            className="w-full lg:w-1/2 flex flex-col items-start gap-4 sm:gap-6 mt-2 lg:mt-0"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <div className="flex items-center gap-3 sm:gap-4">
              <span className="font-serif text-2xl sm:text-3xl md:text-5xl text-foreground/25 italic">0{index + 1}</span>
              <h2 className="font-serif text-[clamp(2.2rem,5.5vw,5.5rem)] leading-none tracking-tighter uppercase text-foreground">
                {initiative.name}
              </h2>
            </div>
            
            <p className="font-sans text-base sm:text-lg md:text-2xl text-foreground/75 max-w-md leading-relaxed">
              {initiative.description}
            </p>

            <Link 
              href={`/initiatives/${initiative.slug}`}
              className="mt-2 sm:mt-4 font-sans font-bold text-xs sm:text-sm tracking-widest uppercase flex items-center gap-2 group pb-1 border-b border-foreground/30 hover:border-foreground transition-colors"
            >
              <span>Explore {initiative.name}</span>
              <motion.span 
                className="inline-block"
                initial={{ x: 0 }}
                whileHover={{ x: 4, y: -4 }}
              >
                ↗
              </motion.span>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

