"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { archiveData } from "@/data/archive";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function ArchivePreview() {
  const previewItems = archiveData.slice(0, 3); // Get first 3 items

  return (
    <section id="archive" className="py-16 sm:py-24 md:py-32 overflow-hidden bg-foreground text-background rounded-[1.75rem] sm:rounded-[2.5rem] my-8 sm:my-12 mx-3 sm:mx-4 md:mx-6 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-10 sm:gap-16">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8">
          <div className="flex flex-col gap-3 sm:gap-4">
            <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase text-background/50">
              Institutional Media Archive
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,5rem)] leading-none uppercase tracking-tight">
              The Video Archive
            </h2>
            <p className="font-sans text-base sm:text-lg md:text-xl text-background/60 max-w-md leading-relaxed">
              10 curated video highlights, session recordings, and festival moments preserving WDC&apos;s active voice.
            </p>
          </div>
          
          <Link
            href="/archive"
            className="self-start md:self-end w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 bg-background text-foreground font-sans font-bold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 sm:py-4 rounded-full hover:bg-background/90 transition-all shadow-md active:scale-95"
          >
            <span>Watch All 10 Videos</span>
            <ArrowUpRight size={16} />
          </Link>
        </div>

        {/* 3-Card Preview Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col gap-4 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link href={`/archive#${item.id}`} className="block relative w-full aspect-[4/5] overflow-hidden bg-background/5 rounded-2xl border border-background/15 shadow-xl">
                {item.video ? (
                  <video
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : item.image && !item.image.includes("placeholder") ? (
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center p-6 text-center">
                    <span className="font-sans text-xs tracking-widest uppercase text-background/30">
                      [Archive Image Placeholder]
                    </span>
                  </div>
                )}

                {/* Hover & Touch Overlay */}
                <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5 sm:p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-sans font-bold text-xs sm:text-sm tracking-widest uppercase text-foreground bg-background px-4 py-2 rounded-full shadow-lg inline-flex items-center gap-1.5">
                      <span>View details</span>
                      <ArrowUpRight size={14} />
                    </span>
                  </div>
                </div>
              </Link>

              <div className="flex flex-col gap-1 px-1">
                <h4 className="font-serif text-xl sm:text-2xl uppercase tracking-tight group-hover:text-background/80 transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-sans font-bold tracking-widest uppercase text-background/50">
                  <span>{item.initiative}</span>
                  <span>•</span>
                  <span>{item.year}</span>
                  <span>•</span>
                  <span>{item.type}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

