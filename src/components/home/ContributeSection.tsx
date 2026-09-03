"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "../ui/Button";
import { HandwrittenAnnotation } from "../ui/HandwrittenAnnotation";

export function ContributeSection() {
  return (
    <section id="contribute" className="py-32 relative overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 text-center flex flex-col items-center justify-center">
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10"
        >
          <h2 className="font-serif text-[clamp(4rem,9vw,9rem)] leading-[0.8] tracking-tighter uppercase text-foreground relative inline-block">
            Your <HandwrittenAnnotation type="underline" color="var(--color-butter-yellow)">voice</HandwrittenAnnotation> <br />
            belongs here.
          </h2>
          
          <p className="font-sans text-xl text-foreground/70 max-w-lg mx-auto mt-12 mb-12">
            Submit an anonymous story, write an article, or join the conversation.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/contribute">Contribute a story</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="border-foreground/20">
              <Link href="/voices">Read others</Link>
            </Button>
          </div>
        </motion.div>
        
        {/* Background decorative typography */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-5 -z-10 overflow-hidden">
          <span className="font-serif text-[30vw] leading-none uppercase whitespace-nowrap">
            SPEAK
          </span>
        </div>

      </div>
    </section>
  );
}
