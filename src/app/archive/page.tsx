"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { archiveData, ArchiveItem } from "@/data/archive";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

export default function ArchivePage() {
  const [selectedFilter, setSelectedFilter] = useState<string>("All");
  const [activeItem, setActiveItem] = useState<ArchiveItem | null>(null);

  const filters = ["All", "Bebakh", "Rehnuma", "Podcast", "Campus"];

  const filteredItems = archiveData.filter((item) => {
    if (selectedFilter === "All") return true;
    return item.initiative === selectedFilter;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-background text-foreground">
        <div className="container mx-auto px-6 md:px-12">

          {/* Header */}
          <div className="max-w-4xl mb-12">
            <div className="flex items-center gap-3 text-xs font-mono tracking-widest uppercase text-foreground/50 mb-4">
              <span>WDC Video Archive</span>
              <span>•</span>
              <a
                href="https://www.instagram.com/wdc.mlnc/reels/?hl=en"
                target="_blank"
                rel="noreferrer"
                className="text-foreground hover:underline"
              >
                10 Official Reels & Highlights ↗
              </a>
            </div>
            <h1 className="font-serif text-[clamp(4rem,9vw,9rem)] leading-[0.88] uppercase tracking-tighter text-foreground mb-6">
              The Video Archive
            </h1>
            <p className="font-sans text-xl md:text-2xl text-foreground/70 max-w-2xl leading-relaxed">
              10 curated video chronicles preserving the energy, discussions, performances, and student moments of the Women&apos;s Development Cell.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-3 my-8 border-b border-foreground/10 pb-6">
            {filters.map((filter) => {
              const count = filter === "All"
                ? archiveData.length
                : archiveData.filter(i => i.initiative === filter).length;
              return (
                <button
                  key={filter}
                  onClick={() => setSelectedFilter(filter)}
                  className={cn(
                    "px-5 py-2 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-200",
                    selectedFilter === filter
                      ? "bg-foreground text-background shadow-md scale-105"
                      : "bg-foreground/5 hover:bg-foreground/10 text-foreground/70"
                  )}
                >
                  {filter} ({count})
                </button>
              );
            })}
          </div>

          {/* Video Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
          >
            <AnimatePresence>
              {filteredItems.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  key={item.id}
                  id={item.id}
                  className="flex flex-col gap-4 group cursor-pointer"
                  onClick={() => setActiveItem(item)}
                >
                  <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-black border border-foreground/15 shadow-xl">
                    {item.video.includes("youtube.com") ? (
                      <iframe
                        src={item.video}
                        className="w-full h-full object-cover pointer-events-none"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    ) : item.video ? (
                      <video
                        src={item.video}
                        poster={item.image}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    )}

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 right-4 flex justify-between items-center">
                      <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-white bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        {item.initiative} • {item.year}
                      </span>
                      <span className="font-mono text-[10px] font-bold tracking-widest uppercase text-white bg-red-600/80 backdrop-blur-md px-2.5 py-1 rounded-full">
                        ▶ Video
                      </span>
                    </div>

                    {/* Bottom hover bar */}
                    <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                      <span className="font-sans text-xs text-white/80 font-medium">
                        {item.date}
                      </span>
                      <span className="font-sans font-bold text-xs tracking-widest uppercase text-black bg-white px-4 py-2 rounded-full shadow-lg group-hover:scale-105 transition-transform">
                        Watch Reel ↗
                      </span>
                    </div>
                  </div>

                  {/* Caption */}
                  <div className="flex flex-col gap-1.5 px-1">
                    <h3 className="font-serif text-2xl uppercase tracking-tight text-foreground leading-snug group-hover:text-foreground/80 transition-colors">
                      {item.title}
                    </h3>
                    <p className="font-sans text-xs text-foreground/60 line-clamp-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>

        {/* Video Player Modal */}
        {activeItem && (
          <div
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
            onClick={() => setActiveItem(null)}
          >
            <div
              className="bg-background text-foreground border border-foreground/20 rounded-3xl max-w-3xl w-full max-h-[92vh] overflow-y-auto p-6 md:p-8 shadow-2xl flex flex-col gap-6 relative"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-foreground/10 hover:bg-foreground/20 flex items-center justify-center font-bold text-lg"
              >
                ✕
              </button>

              <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-black shadow-inner">
                {activeItem.video.includes("youtube.com") ? (
                  <iframe
                    src={activeItem.video}
                    className="w-full h-full object-cover"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={activeItem.video}
                    poster={activeItem.image}
                    controls
                    autoPlay
                    playsInline
                    className="w-full h-full object-contain"
                  />
                )}
              </div>

              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-foreground/50">
                  <span className="text-red-600 font-bold">● Reel Video</span>
                  <span>•</span>
                  <span>{activeItem.date}</span>
                  <span>•</span>
                  <span>Initiative: {activeItem.initiative}</span>
                </div>
                <h2 className="font-serif text-3xl md:text-4xl text-foreground">
                  {activeItem.title}
                </h2>
                <p className="font-sans text-base text-foreground/80 leading-relaxed mt-2">
                  {activeItem.description}
                </p>

                {activeItem.instagramUrl && (
                  <div className="pt-4 mt-2 border-t border-foreground/10 flex items-center justify-between">
                    <a
                      href={activeItem.instagramUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 font-sans font-bold text-xs tracking-widest uppercase bg-foreground text-background px-6 py-3 rounded-full hover:bg-foreground/90 transition-all"
                    >
                      Watch on Instagram Reels ↗
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
