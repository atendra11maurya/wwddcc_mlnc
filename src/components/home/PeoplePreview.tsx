"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { peopleData } from "@/data/people";
import { ArrowUpRight } from "lucide-react";

export function PeoplePreview() {
  return (
    <section id="people" className="py-16 sm:py-24 md:py-28 bg-foreground/5 overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-10 sm:gap-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 border-b border-foreground/10 pb-6 sm:pb-8">
          <div className="flex flex-col gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-foreground/50 font-semibold">
              Leadership & Coordination • Session 2026-27
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,5.5rem)] leading-none uppercase tracking-tight text-foreground">
              The Executive Board
            </h2>
            <p className="font-sans text-base sm:text-lg text-foreground/70 max-w-xl leading-relaxed">
              Meet the student leaders driving dialogues, campaigns, and cultural initiatives across Motilal Nehru College.
            </p>
          </div>
          
          <Link 
            href="/people"
            className="self-start md:self-end w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 border border-foreground/25 font-sans font-bold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 rounded-full hover:bg-foreground hover:text-background transition-all active:scale-95"
          >
            <span>Full Team Directory</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* Responsive People Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {peopleData.map((person, index) => (
            <motion.div
              key={person.id}
              className="flex flex-col gap-4 sm:gap-5 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.08 }}
            >
              <a
                href={person.instagramUrl || "https://www.instagram.com/wdc.mlnc/?hl=en"}
                target="_blank"
                rel="noreferrer"
                className="block relative w-full aspect-[4/5] overflow-hidden rounded-2xl sm:rounded-3xl border border-foreground/15 shadow-lg bg-foreground/10"
              >
                {person.image ? (
                  <img
                    src={person.image}
                    alt={`${person.name} - ${person.role}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : null}

                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300 flex justify-between items-center">
                    <span className="font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase text-black bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg inline-flex items-center gap-1">
                      <span>Post</span>
                      <ArrowUpRight size={12} />
                    </span>
                    {person.handle && (
                      <span className="font-mono text-[11px] sm:text-xs text-white/90 bg-black/60 backdrop-blur-md px-2.5 sm:px-3 py-1 rounded-full border border-white/20">
                        {person.handle}
                      </span>
                    )}
                  </div>
                </div>
              </a>

              <div className="flex flex-col gap-1 px-1">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[11px] sm:text-xs tracking-widest uppercase text-foreground/50 font-bold">
                    {person.role}
                  </span>
                  {person.handle && (
                    <span className="font-mono text-[10px] sm:text-[11px] text-foreground/40">
                      {person.handle}
                    </span>
                  )}
                </div>
                <h4 className="font-serif text-2xl sm:text-3xl uppercase tracking-tight text-foreground group-hover:text-foreground/80 transition-colors">
                  {person.name}
                </h4>
                {person.bio && (
                  <p className="font-sans text-xs text-foreground/60 leading-relaxed mt-0.5 sm:mt-1">
                    {person.bio}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

