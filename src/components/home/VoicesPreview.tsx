"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const previewVoices = [
  {
    category: "Personal Essay",
    title: "On Unlearning Silence and Reclaiming the Classroom",
    author: "Third-Year English Hons.",
    excerpt: "Growing up, articulate was a compliment reserved for boys. In university corridors, discovering WDC was the first time my doubts were treated as valid inquiries.",
    date: "Feb 2026",
    slug: "unlearning-silence"
  },
  {
    category: "Anonymous Submission",
    title: "Navigating Curfews, Hostels, and the Illusion of Safety",
    author: "Anonymous",
    excerpt: "Safety shouldn't mean surveillance. Why does protecting women so often look identical to caging them? An honest exploration of campus autonomy.",
    date: "Jan 2026",
    slug: "hostels-and-safety"
  }
];

export function VoicesPreview() {
  return (
    <section id="voices" className="py-16 sm:py-20 md:py-24 scroll-mt-20">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-8 sm:gap-12">
        
        {/* Header Strip */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 border-b border-foreground/10 pb-6 sm:pb-8">
          <div className="flex flex-col gap-2 sm:gap-3">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-foreground/50 font-semibold">
              Radical Reflections • MLNC Journal
            </span>
            <h2 className="font-serif text-[clamp(2.2rem,5vw,5rem)] leading-none uppercase tracking-tight text-foreground">
              Student Voices
            </h2>
            <p className="font-sans text-base sm:text-lg md:text-xl text-foreground/60 max-w-md leading-relaxed">
              A platform for student expression, essays, and anonymous reflections.
            </p>
          </div>
          
          <Link 
            href="/voices"
            className="self-start md:self-end w-full sm:w-auto text-center inline-flex items-center justify-center gap-2 border border-foreground/25 font-sans font-bold text-xs sm:text-sm tracking-wider uppercase px-6 py-3.5 rounded-full hover:bg-foreground hover:text-background transition-all active:scale-95"
          >
            <span>Read All Voices</span>
            <ArrowUpRight size={14} />
          </Link>
        </div>

        {/* 2-Column Story Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 lg:gap-16">
          {previewVoices.map((article, index) => (
            <motion.div 
              key={article.slug}
              className="flex flex-col justify-between gap-5 sm:gap-6 group bg-foreground/[0.02] sm:bg-transparent p-5 sm:p-0 rounded-2xl border sm:border-0 border-foreground/10"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-foreground/10 pb-3">
                  <span className="font-sans text-[10px] sm:text-xs tracking-widest uppercase text-foreground/50 font-bold">
                    {article.category}
                  </span>
                  <span className="font-sans text-[10px] sm:text-xs font-mono tracking-widest uppercase text-foreground/40">
                    {article.date}
                  </span>
                </div>
                
                <div className="flex flex-col gap-2.5">
                  <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl leading-tight tracking-tight text-foreground group-hover:text-foreground/75 transition-colors">
                    <Link href="/voices">
                      {article.title}
                    </Link>
                  </h3>
                  <p className="font-sans text-sm sm:text-base text-foreground/70 italic leading-relaxed">
                    &ldquo;{article.excerpt}&rdquo;
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 sm:pt-4 border-t border-foreground/10">
                <span className="font-sans text-xs sm:text-sm font-bold tracking-wider uppercase text-foreground/60">
                  By {article.author}
                </span>
                <Link 
                  href="/voices"
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors active:scale-95 shrink-0"
                  aria-label={`Read ${article.title}`}
                >
                  <ArrowUpRight size={16} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

