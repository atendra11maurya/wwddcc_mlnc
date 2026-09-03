"use client";

import { motion } from "framer-motion";
import { supportData } from "@/data/support";
import { Button } from "../ui/Button";
import Link from "next/link";

export function SupportSection() {
  return (
    <section id="support" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="bg-powder-blue/20 rounded-[2.5rem] p-8 md:p-16 lg:p-24 flex flex-col lg:flex-row gap-16 items-start">

          <div className="w-full lg:w-1/2 flex flex-col gap-8">
            <motion.h2
              className="font-serif text-[clamp(2.5rem,5vw,5rem)] leading-none uppercase tracking-tight text-foreground"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              You don&apos;t have to <br /> figure it out alone.
            </motion.h2>

            <motion.p
              className="font-sans text-lg md:text-xl text-foreground/80 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              WDC provides a safe space for awareness and guidance. For formal complaints, the Internal Complaints Committee (ICC) is the official institutional authority.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Button asChild size="lg" className="bg-foreground text-background">
                <Link href="/support">View Support & ICC Info</Link>
              </Button>
            </motion.div>
          </div>

          <div className="w-full lg:w-1/2 bg-background/50 rounded-2xl p-8 md:p-12 border border-foreground/5 backdrop-blur-sm">
            <div className="flex flex-col gap-8">
              <div>
                <h3 className="font-sans font-bold text-sm tracking-widest uppercase text-foreground/50 mb-6">
                  Official Reporting Procedure (Preview)
                </h3>
                <div className="flex flex-col gap-4">
                  {supportData.iccInfo.procedure.map((step, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <span className="font-serif text-xl text-foreground/40 italic mt-0.5">0{i + 1}</span>
                      <span className="font-sans text-lg text-foreground/80">{step}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-8 border-t border-foreground/10">
                <p className="font-sans text-xs text-foreground/50 italic leading-relaxed">
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
