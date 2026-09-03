"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  // Fade in text incrementally
  const opacity1 = useTransform(scrollYProgress, [0, 0.2], [0.2, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.4], [0.2, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.6], [0.2, 1]);

  return (
    <section id="manifesto" ref={containerRef} className="min-h-screen flex items-center justify-center py-24 bg-foreground text-background">
      <div className="container mx-auto px-6 md:px-12 text-center max-w-5xl flex flex-col gap-12">
        
        <h2 className="font-serif text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-tight uppercase flex flex-col items-center">
          <motion.span style={{ opacity: opacity1 }}>WE MAKE SPACE FOR</motion.span>
          <motion.span style={{ opacity: opacity2 }} className="text-background/80">CONVERSATIONS THAT</motion.span>
          <motion.span style={{ opacity: opacity3 }} className="text-butter-yellow relative inline-block">
            DESERVE TO EXIST.
            <svg className="absolute -bottom-4 left-0 w-full h-6 text-butter-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
              <path d="M 0 5 Q 50 10 100 0" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </motion.span>
        </h2>

        <motion.p 
          className="font-sans text-xl md:text-2xl text-background/60 max-w-2xl mx-auto italic"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.4 }}
        >
          Some conversations are uncomfortable. That is exactly why they matter.
        </motion.p>
        
      </div>
    </section>
  );
}
