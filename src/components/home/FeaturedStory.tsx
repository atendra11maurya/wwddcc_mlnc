"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function FeaturedStory() {
  return (
    <section className="py-14 sm:py-20 md:py-24 border-y border-foreground/10 bg-soft-coral/5">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-8 sm:gap-12">
        
        {/* Header Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-foreground/10 pb-3 sm:pb-4">
          <h3 className="font-sans font-bold text-xs sm:text-sm tracking-widest uppercase flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block animate-pulse"></span>
            Featured Now
          </h3>
          <span className="font-sans text-[10px] sm:text-xs font-mono uppercase tracking-widest text-foreground/60">
            Recruitment Notice • Session 2026-27
          </span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 sm:gap-12 items-center">
          
          {/* Recruitment Image Card */}
          <motion.div 
            className="w-full lg:w-7/12"
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7 }}
          >
            <Link href="/#join" className="group block relative w-full aspect-[16/10] sm:aspect-video md:aspect-[16/9] bg-foreground/5 rounded-2xl overflow-hidden border border-foreground/10 shadow-xl">
               <Image 
                 src="/images/recruitment.png"
                 alt="WDC Delhi University Recruitment"
                 fill
                 className="object-cover transition-transform duration-700 group-hover:scale-105"
                 sizes="(max-width: 1024px) 100vw, 60vw"
                 priority
               />
               <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
               
               {/* Top Badge */}
               <div className="absolute top-3 left-3 sm:top-4 sm:left-4">
                 <span className="bg-emerald-500 text-black font-sans font-black text-[10px] sm:text-xs tracking-wider uppercase px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full shadow-md flex items-center gap-1.5">
                   <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-black inline-block animate-ping"></span>
                   Applications Open
                 </span>
               </div>

               {/* Bottom Overlay Info - Responsive Stack on Mobile */}
               <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex flex-col sm:flex-row gap-2 sm:justify-between sm:items-end">
                 <span className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-white/90 backdrop-blur-md bg-black/50 px-2.5 sm:px-3 py-1 rounded-md border border-white/10 self-start">
                   Motilal Nehru College &bull; DU
                 </span>
                 <span className="font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase text-white bg-white/20 backdrop-blur-md px-3 sm:px-4 py-1.5 sm:py-2 rounded-full border border-white/30 group-hover:bg-white group-hover:text-black transition-all self-end sm:self-auto">
                   Join WDC ↗
                 </span>
               </div>
            </Link>
          </motion.div>

          {/* Details & Roles */}
          <div className="w-full lg:w-5/12 flex flex-col items-start gap-4 sm:gap-6">
            <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase">
              <span className="bg-foreground text-background px-3 py-1 rounded-full">Recruitment</span>
              <span className="text-foreground/60">Annual Intake</span>
            </div>
            
            <h4 className="font-serif text-[clamp(1.85rem,4.5vw,3rem)] md:text-5xl leading-[1.05] uppercase tracking-tight text-foreground">
              We Are Recruiting: <br />
              <span className="italic font-normal">Become the Voice of Change</span>
            </h4>
            
            <p className="font-sans text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed">
              WDC is opening applications for the core working team. We are inviting writers, designers, event curators, researchers, podcasters, and organizers to lead campus advocacy and curate our flagship initiatives.
            </p>

            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1">
              {["Editorial & Writing", "Design & Media", "Event Operations", "Podcasting & PR", "Research & Outreach"].map((role, idx) => (
                <span key={idx} className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wider bg-foreground/5 border border-foreground/10 text-foreground/80 px-2.5 py-1 rounded-md">
                  {role}
                </span>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 w-full sm:w-auto pt-2">
              <Link 
                href="/#join"
                className="font-sans font-bold text-xs sm:text-sm tracking-widest uppercase bg-foreground text-background px-6 py-3.5 rounded-full hover:bg-foreground/90 transition-all flex items-center justify-center gap-2 text-center shadow-sm"
              >
                <span>Join now</span>
                <ArrowUpRight size={14} />
              </Link>
              
              <a 
                href="mailto:wdc@mlnc.du.ac.in?subject=WDC%20Recruitment%20Query"
                className="font-sans font-bold text-xs sm:text-sm tracking-widest uppercase border border-foreground/20 px-6 py-3.5 rounded-full hover:border-foreground transition-all flex items-center justify-center gap-2 text-center text-foreground/80 hover:text-foreground"
              >
                Contact Team
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

