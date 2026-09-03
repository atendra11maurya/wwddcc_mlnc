import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function AstitvaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          {/* Hero */}
          <div className="max-w-4xl mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-foreground/50 mb-3 sm:mb-4 block">
              Annual Publication & Journal
            </span>
            <h1 className="font-serif text-[clamp(3rem,9vw,9rem)] leading-[0.88] uppercase tracking-tighter text-foreground mb-4 sm:mb-6">
              Astitva
            </h1>
            <p className="font-sans text-base sm:text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
              The annual flagship publication of WDC MLNC compiling academic essays, original poetry, translated memoirs, artwork, and investigative field reports.
            </p>
          </div>

          {/* Editions Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 my-10 sm:my-16">
            {[
              { year: "2025–26", theme: "Bodies in Translation", desc: "Examining disability, queer expressions, and regional feminist dialects." },
              { year: "2024–25", theme: "Thresholds & Borders", desc: "Essays on domesticity, migration, and female labor across urban spaces." },
              { year: "2023–24", theme: "Voices Unbound", desc: "A compendium of student poems, illustrations, and grassroots reflections." }
            ].map((mag, i) => (
              <div key={i} className="border border-foreground/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:bg-foreground/5 transition-colors group">
                <div>
                  <div className="w-full aspect-[3/4] bg-foreground/10 border border-foreground/10 rounded-xl mb-5 flex items-center justify-center text-xs font-mono uppercase tracking-widest text-foreground/50 group-hover:scale-[1.02] transition-transform">
                    [Magazine Cover {mag.year}]
                  </div>
                  <span className="text-[10px] sm:text-xs font-bold font-mono tracking-widest uppercase text-foreground/50">{mag.year}</span>
                  <h3 className="font-serif text-xl sm:text-2xl text-foreground mt-1 mb-2 leading-snug">{mag.theme}</h3>
                  <p className="font-sans text-xs sm:text-sm text-foreground/70 leading-relaxed">{mag.desc}</p>
                </div>
                <div className="mt-5 pt-4 border-t border-foreground/10 flex items-center justify-between text-xs font-bold text-foreground/80 uppercase">
                  <span>Archived Edition</span>
                  <ArrowUpRight size={14} />
                </div>
              </div>
            ))}
          </div>

          {/* Call for papers CTA */}
          <div className="bg-foreground/5 border border-foreground/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mt-8 sm:mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-2">Call for Submissions — Astitva &apos;26</h3>
              <p className="font-sans text-sm sm:text-base text-foreground/70 max-w-xl leading-relaxed">
                We accept essays, academic critiques, poetry, fiction, photography, and original illustrations from college students nationwide.
              </p>
            </div>
            <Link
              href="/contribute"
              className="w-full md:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 bg-foreground text-background rounded-full font-sans font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-foreground/90 transition-all active:scale-95 shadow-sm"
            >
              <span>Submit for Review</span>
              <ArrowUpRight size={14} />
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

