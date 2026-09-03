"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface HandwrittenAnnotationProps {
  children?: React.ReactNode;
  className?: string;
  type?: "underline" | "circle" | "arrow" | "text-only" | "bracket" | "strike";
  color?: string;
  delay?: number;
}

export function HandwrittenAnnotation({
  children,
  className,
  type = "text-only",
  color = "currentColor",
  delay = 0,
}: HandwrittenAnnotationProps) {
  return (
    <span className={cn("relative inline-block font-[family-name:var(--font-handwriting)] text-[1.1em] tracking-normal leading-none", className)}>
      {children}
      {type === "underline" && (
        <motion.svg
          className="absolute -bottom-1 left-0 w-full h-2.5 pointer-events-none"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: delay, ease: "easeInOut" }}
        >
          <path
            d="M 2 7 Q 50 1 98 6"
            stroke={color}
            strokeWidth="2.5"
            fill="transparent"
            strokeLinecap="round"
          />
        </motion.svg>
      )}
      {type === "circle" && (
        <motion.svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[125%] h-[130%] pointer-events-none"
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: delay, ease: "easeInOut" }}
        >
          <path
            d="M 45 4 C 85 2, 98 18, 92 38 C 85 52, 15 48, 6 32 C -2 16, 22 6, 58 7"
            stroke={color}
            strokeWidth="2"
            fill="transparent"
            strokeLinecap="round"
          />
        </motion.svg>
      )}
      {type === "strike" && (
        <motion.svg
          className="absolute top-1/2 left-0 -translate-y-1/2 w-[105%] h-3 pointer-events-none"
          viewBox="0 0 100 10"
          preserveAspectRatio="none"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay, ease: "easeInOut" }}
        >
          <path
            d="M 0 5 Q 50 2 100 6"
            stroke={color}
            strokeWidth="2.5"
            fill="transparent"
            strokeLinecap="round"
          />
        </motion.svg>
      )}
    </span>
  );
}
