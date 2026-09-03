"use client";

import { motion } from "framer-motion";
import { supportData } from "@/data/support";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function SupportSection() {
  return (
    <section id="support" className="py-16 sm:py-20 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="bg-powder-blue/25 rounded-[1.75rem] sm:rounded-[2.5rem] p-6 sm:p-10 md:p-14 lg:p-20 flex flex-col lg:flex-row gap-10 sm:gap-14 lg:gap-16 items-start">

          {/* Left Column */}
          <div className="w-full lg:w-1/2 flex flex-col gap-6 sm:gap-8">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-foreground/50 font-semibold">
              Institutional Redressal & Support
            </span>

            <motion.h2
              className="font-serif text-[clamp(2.2rem,5vw,5rem)] leading-[0.95] uppercase tracking-tight text-foreground"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              You don&apos;t have to <br /> figure it out alone.
            </motion.h2>

            <motion.p
              className="font-sans text-base sm:text-lg md:text-xl text-foreground/80 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              WDC provides a safe space for awareness and guidance. For formal complaints, the Internal Complaints Committee (ICC) is the official institutional authority.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-2"
            >
              <Link
                href="/support"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-foreground text-background font-sans font-bold text-xs sm:text-sm tracking-wider uppercase px-7 py-3.5 sm:py-4 rounded-full hover:bg-foreground/90 transition-all active:scale-95 shadow-sm"
              >
                <span>View Support & ICC Info</span>
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </div>

          {/* Right Column / Procedure Preview Box */}
          <div className="w-full lg:w-1/2 bg-background/60 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 border border-foreground/10 backdrop-blur-sm shadow-sm">
            <div className="flex flex-col gap-6 sm:gap-8">
              <div>
                <h3 className="font-sans font-bold text-xs sm:text-sm tracking-widest uppercase text-foreground/60 mb-5 sm:mb-6">
                  Official Reporting Procedure (Preview)
                </h3>
                <div className="flex flex-col gap-3.5 sm:gap-4">
                  {supportData.iccInfo.procedure.map((step, i) => (
                    <div key={i} className="flex gap-3 sm:gap-4 items-start">
                      <span className="font-serif text-lg sm:text-xl text-foreground/40 italic mt-0.5 shrink-0">0{i + 1}</span>
                      <span className="font-sans text-sm sm:text-base md:text-lg text-foreground/85 leading-relaxed">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-5 sm:pt-6 border-t border-foreground/10">
                <p className="font-sans text-xs text-foreground/60 italic leading-relaxed">
                  {supportData.iccInfo.disclaimer}
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

