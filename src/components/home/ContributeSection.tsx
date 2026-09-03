"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HandwrittenAnnotation } from "../ui/HandwrittenAnnotation";
import { ArrowUpRight } from "lucide-react";

export function ContributeSection() {
  return (
    <section id="contribute" className="py-16 sm:py-24 md:py-32 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center flex flex-col items-center justify-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="relative z-10 w-full max-w-2xl"
        >
          <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-foreground/50 block mb-3 sm:mb-4">
            Open Submissions &bull; MLNC Journal
          </span>

          <h2 className="font-serif text-[clamp(2.5rem,7vw,8rem)] leading-[0.88] tracking-tighter uppercase text-foreground relative inline-block">
            Your <HandwrittenAnnotation type="underline" color="#E8D77B">voice</HandwrittenAnnotation> <br />
            belongs here.
          </h2>
          
          <p className="font-sans text-base sm:text-lg md:text-xl text-foreground/70 max-w-lg mx-auto mt-6 sm:mt-8 mb-8 sm:mb-10 leading-relaxed">
            Submit an anonymous story, write an article, or join the campus conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 w-full sm:w-auto">
            <Link
              href="/contribute"
              className="bg-foreground text-background font-sans font-bold text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 sm:py-4 rounded-full hover:bg-foreground/90 transition-all active:scale-95 shadow-sm inline-flex items-center justify-center gap-2"
            >
              <span>Contribute a story</span>
              <ArrowUpRight size={16} />
            </Link>
            <Link
              href="/voices"
              className="border border-foreground/25 font-sans font-bold text-xs sm:text-sm tracking-wider uppercase px-8 py-3.5 sm:py-4 rounded-full hover:bg-foreground hover:text-background transition-all active:scale-95 inline-flex items-center justify-center gap-2 text-foreground/80"
            >
              <span>Read others</span>
            </Link>
          </div>
        </motion.div>
        
        {/* Background decorative typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03] -z-10 overflow-hidden select-none">
          <span className="font-serif text-[28vw] leading-none uppercase whitespace-nowrap">
            SPEAK
          </span>
        </div>

      </div>
    </section>
  );
}

