"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { articlesData } from "@/data/articles";
import { Button } from "../ui/Button";

export function VoicesPreview() {
  return (
    <section id="voices" className="py-24 scroll-mt-20">
      <div className="container mx-auto px-6 md:px-12 flex flex-col gap-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b border-foreground/10 pb-8">
          <div className="flex flex-col gap-4">
            <h2 className="font-serif text-[clamp(3rem,6vw,5rem)] leading-none uppercase tracking-tight text-foreground">
              Student Voices
            </h2>
            <p className="font-sans text-xl text-foreground/60 max-w-md">
              A platform for student expression, essays, and anonymous reflections.
            </p>
          </div>
          <Button asChild variant="outline" className="self-start md:self-end border-foreground/20">
            <Link href="/voices">Read All Voices</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
          {articlesData.map((article, index) => (
            <motion.div 
              key={article.slug}
              className="flex flex-col gap-6 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="flex items-center justify-between border-b border-foreground/10 pb-4">
                <span className="font-sans text-xs tracking-widest uppercase text-foreground/50">
                  {article.category}
                </span>
                <span className="font-sans text-xs tracking-widest uppercase text-foreground/40">
                  {article.date}
                </span>
              </div>
              
              <div className="flex flex-col gap-3">
                <h3 className="font-serif text-3xl md:text-4xl leading-tight tracking-tight text-foreground group-hover:text-foreground/70 transition-colors">
                  <Link href={`/voices/${article.slug}`}>
                    {article.title}
                  </Link>
                </h3>
                <p className="font-sans text-lg text-foreground/70 italic">
                  {article.excerpt}
                </p>
              </div>

              <div className="flex items-center justify-between pt-4">
                <span className="font-sans text-sm font-bold tracking-widest uppercase text-foreground/60">
                  By {article.anonymous ? "Anonymous" : article.author}
                </span>
                <Link 
                  href={`/voices/${article.slug}`}
                  className="w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center group-hover:bg-foreground group-hover:text-background transition-colors"
                >
                  ↗
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
