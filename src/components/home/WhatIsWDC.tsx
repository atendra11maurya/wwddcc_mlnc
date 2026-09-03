"use client";

import { motion } from "framer-motion";
import { HandwrittenAnnotation } from "../ui/HandwrittenAnnotation";
import Image from "next/image";

export function WhatIsWDC() {
  return (
    <section id="about" className="py-32 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          {/* Left Column - Typography */}
          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="inline-block border border-foreground/30 px-4 py-1.5 rounded-full text-xs font-mono tracking-widest uppercase self-start text-foreground/70"
            >
              Who are we?
            </motion.div>
            
            <h2 className="font-serif text-[clamp(2.5rem,5vw,5rem)] leading-none uppercase tracking-tight text-foreground">
              WDC is a space to <HandwrittenAnnotation type="underline" color="#A64B2A">question.</HandwrittenAnnotation>
            </h2>

            <div className="font-sans text-lg md:text-xl text-foreground/80 leading-relaxed max-w-lg flex flex-col gap-6">
              <p>
                We are a student-led cultural, intellectual and social body at Motilal Nehru College. We exist to create conversations that challenge assumptions.
              </p>
              <p>
                This is not just a committee that conducts events. This is where students express themselves, unlearn societal conditioning, and find a space where they feel represented.
              </p>
            </div>
            
            <div className="font-mono text-xs tracking-[0.2em] uppercase text-foreground/50 mt-4 flex flex-col gap-2">
              <span>✦ Equality is not a poster.</span>
              <span>✦ Dialogue is not always comfortable.</span>
              <span>✦ Change rarely begins quietly.</span>
            </div>
          </div>

          {/* Right Column - Illustration Artwork */}
          <div className="w-full lg:w-1/2 relative flex items-center justify-center">
            
            {/* Big Prominent Primary Pastel Circle */}
            <div className="absolute -top-12 -left-8 md:-top-16 md:-left-12 w-64 h-64 md:w-80 md:h-80 rounded-full bg-[#E8D77B]/75 -z-10 pointer-events-none shadow-sm" />
            {/* Secondary Prominent Pastel Circle */}
            <div className="absolute -bottom-10 -right-8 md:-bottom-14 md:-right-12 w-48 h-48 md:w-60 md:h-60 rounded-full bg-[#E5AAA1]/75 -z-10 pointer-events-none" />
            
            <motion.div 
              className="relative w-full max-w-md aspect-[2/3] rounded-2xl overflow-hidden border border-foreground/15 shadow-2xl bg-foreground/5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Image
                src="/images/what_is_wdc.png"
                alt="WDC Student Circle Discussion & Unlearning Space"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />

              {/* Editorial Badge */}
              <div className="absolute top-4 left-4 z-10">
                <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-foreground bg-[#F5F4EF]/90 backdrop-blur-sm px-3 py-1 rounded-full border border-foreground/15 shadow-sm">
                  STUDENT FORUM • MLNC
                </span>
              </div>
            </motion.div>

            {/* Handwritten note */}
            <HandwrittenAnnotation type="text-only" className="absolute -bottom-4 right-4 md:right-8 text-[#A64B2A] -rotate-6 text-2xl md:text-3xl bg-[#F5F4EF] px-3 py-1 border border-foreground/15 rounded-lg shadow-sm select-none">
              safe spaces ↗
            </HandwrittenAnnotation>
          </div>

        </div>
      </div>
    </section>
  );
}
