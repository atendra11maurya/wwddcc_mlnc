"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { archiveData } from "@/data/archive";
import { Button } from "../ui/Button";

import Image from "next/image";

export function ArchivePreview() {
  const previewItems = archiveData.slice(0, 3); // Get first 3 items

  return (
    <section id="archive" className="py-32 overflow-hidden bg-foreground text-background rounded-[2.5rem] my-12 mx-4 md:mx-6 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col gap-16">

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-[clamp(3rem,6vw,5rem)] leading-none uppercase tracking-tight">
              The Video Archive
            </h2>
            <p className="font-sans text-xl text-background/60 max-w-md">
              10 curated video highlights, session recordings, and festival moments preserving WDC&apos;s active voice.
            </p>
          </div>
          <Button asChild variant="secondary" className="self-start md:self-end">
            <Link href="/archive">Watch All 10 Videos ↗</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {previewItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="flex flex-col gap-4 group"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
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

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-background/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                  <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <span className="font-sans font-bold text-sm tracking-widest uppercase text-foreground bg-background px-4 py-2 rounded-full shadow-lg">
                      View details ↗
                    </span>
                  </div>
                </div>
              </Link>

              <div className="flex flex-col gap-1">
                <h4 className="font-serif text-2xl uppercase tracking-tight group-hover:text-background/80 transition-colors">
                  {item.title}
                </h4>
                <div className="flex items-center gap-3 text-xs font-sans font-bold tracking-widest uppercase text-background/50">
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
