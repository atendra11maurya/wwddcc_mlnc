import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function AstitvaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          {/* Hero */}
          <div className="max-w-4xl mb-16">
            <span className="text-xs font-sans font-bold tracking-widest uppercase text-foreground/50 mb-4 block">
              Annual Publication & Journal
            </span>
            <h1 className="font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.85] uppercase tracking-tighter text-foreground mb-8">
              Astitva
            </h1>
            <p className="font-sans text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
              The annual flagship publication of WDC MLNC compiling academic essays, original poetry, translated memoirs, artwork, and investigative field reports.
            </p>
          </div>

          {/* Editions Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            {[
              { year: "2024–25", theme: "Bodies in Translation", desc: "Examining disability, queer expressions, and regional feminist dialects." },
              { year: "2023–24", theme: "Thresholds & Borders", desc: "Essays on domesticity, migration, and female labor across urban spaces." },
              { year: "2022–23", theme: "Voices Unbound", desc: "A compendium of student poems, illustrations, and grassroots reflections." }
            ].map((mag, i) => (
              <div key={i} className="border border-foreground/15 rounded-2xl p-8 flex flex-col justify-between hover:bg-foreground/5 transition-colors group">
                <div>
                  <div className="w-full aspect-[3/4] bg-foreground/10 border border-foreground/10 rounded-xl mb-6 flex items-center justify-center text-xs font-mono uppercase tracking-widest text-foreground/50 group-hover:scale-[1.02] transition-transform">
                    [Magazine Cover {mag.year}]
                  </div>
                  <span className="text-xs font-bold font-sans tracking-widest uppercase text-foreground/50">{mag.year}</span>
                  <h3 className="font-serif text-2xl text-foreground mt-1 mb-2">{mag.theme}</h3>
                  <p className="font-sans text-sm text-foreground/70 leading-relaxed">{mag.desc}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-foreground/10 flex items-center justify-between text-xs font-semibold text-foreground/80 uppercase">
                  <span>Read PDF Edition</span>
                  <span>↓</span>
                </div>
              </div>
            ))}
          </div>

          {/* Call for papers CTA */}
          <div className="bg-foreground/5 border border-foreground/10 rounded-3xl p-8 md:p-12 mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="font-serif text-3xl text-foreground mb-2">Call for Submissions — Astitva &apos;26</h3>
              <p className="font-sans text-foreground/70 max-w-xl">
                We accept essays, academic critiques, poetry, fiction, photography, and original illustrations from college students nationwide.
              </p>
            </div>
            <Link
              href="/contribute"
              className="whitespace-nowrap px-8 py-4 bg-foreground text-background rounded-full font-sans font-semibold hover:bg-foreground/90 transition-all hover:scale-105"
            >
              Submit for Review ↗
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
