import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function BebakhPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          {/* Hero */}
          <div className="max-w-4xl mb-8 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-foreground/50 mb-3 sm:mb-4 block">
              Annual Flagship Festival
            </span>
            <h1 className="font-serif text-[clamp(3rem,9vw,9rem)] leading-[0.88] uppercase tracking-tighter text-foreground mb-4 sm:mb-6">
              Bebakh
            </h1>
            <p className="font-sans text-base sm:text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
              An uninhibited space for dialogue, dissent, performance, and celebrating radical identities. Bebakh is our annual cultural festival challenging systemic gender norms.
            </p>
          </div>

          {/* Featured Video Showcase */}
          <div className="my-8 sm:my-12 relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-foreground/15 shadow-xl bg-black aspect-video max-w-5xl mx-auto">
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
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 my-10 sm:my-16">
            <div className="bg-foreground/5 border border-foreground/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col gap-3 sm:gap-4">
              <span className="font-serif text-2xl sm:text-3xl text-foreground/40 italic">01</span>
              <h3 className="font-serif text-xl sm:text-2xl text-foreground">Panel Discussions</h3>
              <p className="font-sans text-foreground/70 text-xs sm:text-sm leading-relaxed">
                Critical engagements with academicians, grassroots activists, and queer authors breaking down contemporary gender dynamics.
              </p>
            </div>

            <div className="bg-foreground/5 border border-foreground/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col gap-3 sm:gap-4">
              <span className="font-serif text-2xl sm:text-3xl text-foreground/40 italic">02</span>
              <h3 className="font-serif text-xl sm:text-2xl text-foreground">Slam Poetry & Art</h3>
              <p className="font-sans text-foreground/70 text-xs sm:text-sm leading-relaxed">
                Open mics, zine-making workshops, and poster exhibits highlighting youth-led resistance and self-expression.
              </p>
            </div>

            <div className="bg-foreground/5 border border-foreground/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col gap-3 sm:gap-4">
              <span className="font-serif text-2xl sm:text-3xl text-foreground/40 italic">03</span>
              <h3 className="font-serif text-xl sm:text-2xl text-foreground">Queer Collective Circles</h3>
              <p className="font-sans text-foreground/70 text-xs sm:text-sm leading-relaxed">
                Closed-door and open peer circles fostering solidarity, healing, and community resilience across Delhi University.
              </p>
            </div>
          </div>

          {/* Editions Archive */}
          <div className="mt-12 sm:mt-20 pt-10 sm:pt-16 border-t border-foreground/10">
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground mb-6 sm:mb-8">Previous Editions</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6">
              {["Bebakh 2026: Geographies of Desire", "Bebakh 2025: Reclaiming Public Spaces", "Bebakh 2024: The Language of Dissent"].map((edition, idx) => (
                <div key={idx} className="border border-foreground/15 rounded-xl sm:rounded-2xl p-5 sm:p-6 hover:bg-foreground/5 transition-colors">
                  <span className="text-[10px] sm:text-xs font-mono text-foreground/50 block mb-1.5">{2026 - idx}</span>
                  <h4 className="font-serif text-lg sm:text-xl text-foreground">{edition}</h4>
                  <p className="text-xs text-foreground/60 mt-2.5 font-sans leading-relaxed">Keynote, 12+ university competitions & workshops</p>
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

