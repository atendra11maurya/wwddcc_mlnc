import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";

export default function BebakhPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          {/* Hero */}
          <div className="max-w-4xl mb-16">
            <span className="text-xs font-sans font-bold tracking-widest uppercase text-foreground/50 mb-4 block">
              Annual Flagship Festival
            </span>
            <h1 className="font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.85] uppercase tracking-tighter text-foreground mb-8">
              Bebakh
            </h1>
            <p className="font-sans text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
              An uninhibited space for dialogue, dissent, performance, and celebrating radical identities. Bebakh is our annual cultural festival challenging systemic gender norms.
            </p>
          </div>

          {/* Featured Video Showcase */}
          <div className="my-12 relative w-full rounded-3xl overflow-hidden border border-foreground/15 shadow-2xl bg-black aspect-video max-w-5xl mx-auto">
            <video
              src="/videos/bebak.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Core Highlights Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16">
            <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-8 flex flex-col gap-4">
              <span className="font-serif text-3xl text-foreground/40 italic">01</span>
              <h3 className="font-serif text-2xl text-foreground">Panel Discussions</h3>
              <p className="font-sans text-foreground/70 text-sm leading-relaxed">
                Critical engagements with academicians, grassroots activists, and queer authors breaking down contemporary gender dynamics.
              </p>
            </div>

            <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-8 flex flex-col gap-4">
              <span className="font-serif text-3xl text-foreground/40 italic">02</span>
              <h3 className="font-serif text-2xl text-foreground">Slam Poetry & Art</h3>
              <p className="font-sans text-foreground/70 text-sm leading-relaxed">
                Open mics, zine-making workshops, and poster exhibits highlighting youth-led resistance and self-expression.
              </p>
            </div>

            <div className="bg-foreground/5 border border-foreground/10 rounded-2xl p-8 flex flex-col gap-4">
              <span className="font-serif text-3xl text-foreground/40 italic">03</span>
              <h3 className="font-serif text-2xl text-foreground">Queer Collective Circles</h3>
              <p className="font-sans text-foreground/70 text-sm leading-relaxed">
                Closed-door and open peer circles fostering solidarity, healing, and community resilience across Delhi University.
              </p>
            </div>
          </div>

          {/* Editions Archive */}
          <div className="mt-20 pt-16 border-t border-foreground/10">
            <h2 className="font-serif text-3xl md:text-4xl text-foreground mb-8">Previous Editions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {["Bebakh 2025: Geographies of Desire", "Bebakh 2024: Reclaiming Public Spaces", "Bebakh 2023: The Language of Dissent"].map((edition, idx) => (
                <div key={idx} className="border border-foreground/15 rounded-xl p-6 hover:bg-foreground/5 transition-colors">
                  <span className="text-xs font-mono text-foreground/50 block mb-2">{2025 - idx}</span>
                  <h4 className="font-serif text-xl text-foreground">{edition}</h4>
                  <p className="text-xs text-foreground/60 mt-3 font-sans">Keynote, 12+ university competitions & workshops</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
