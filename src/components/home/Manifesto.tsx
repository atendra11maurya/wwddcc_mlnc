"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function Manifesto() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 85%", "center center"]
  });

  // Fade in text incrementally as section enters view
  const opacity1 = useTransform(scrollYProgress, [0, 0.35], [0.35, 1]);
  const opacity2 = useTransform(scrollYProgress, [0.2, 0.65], [0.35, 1]);
  const opacity3 = useTransform(scrollYProgress, [0.45, 0.95], [0.35, 1]);

  return (
    <section id="manifesto" ref={containerRef} className="min-h-[85vh] flex items-center justify-center py-20 sm:py-28 md:py-36 bg-foreground text-background">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 text-center max-w-5xl flex flex-col gap-8 sm:gap-12">
        
        <h2 className="font-serif text-[clamp(2.75rem,8.2vw,7.5rem)] leading-[0.9] sm:leading-[0.88] tracking-tight uppercase flex flex-col items-center">
          <motion.span style={{ opacity: opacity1 }} className="block">WE MAKE SPACE FOR</motion.span>
          <motion.span style={{ opacity: opacity2 }} className="text-background/85 block">CONVERSATIONS THAT</motion.span>
          <motion.span style={{ opacity: opacity3 }} className="text-butter-yellow relative inline-block mt-1 sm:mt-1.5 pb-1 sm:pb-2">
            DESERVE TO EXIST.
            <span className="absolute bottom-0 left-0 right-0 h-[2.5px] sm:h-[3.5px] bg-butter-yellow rounded-full pointer-events-none" />
          </motion.span>
        </h2>

        <motion.p 
          className="font-sans text-base sm:text-lg md:text-2xl text-background/70 max-w-2xl mx-auto italic mt-2"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Some conversations are uncomfortable. That is exactly why they matter.
        </motion.p>
        
      </div>
    </section>
  );
}



