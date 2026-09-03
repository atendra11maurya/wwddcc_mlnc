"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  className?: string;
  speed?: number; // seconds to complete one loop
  reverse?: boolean;
}

export function Marquee({ items, className, speed = 25, reverse = false }: MarqueeProps) {
  // Repeat items for continuous marquee
  const repeatedItems = [...items, ...items, ...items, ...items];

  return (
    <div className={cn("overflow-hidden flex whitespace-nowrap select-none", className)}>
      <motion.div
        className="flex gap-10 shrink-0"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        {repeatedItems.map((item, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-mono font-semibold text-xs md:text-sm tracking-[0.25em] uppercase">
              {item}
            </span>
            <span className="text-foreground/30 font-serif text-base">✦</span>
          </span>
        ))}
      </motion.div>
    </div>
  );
}
