import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

export default function RehnumaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          {/* Hero */}
          <div className="max-w-4xl mb-8 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-foreground/50 mb-3 sm:mb-4 block">
              Perspective & Speaker Series
            </span>
            <h1 className="font-serif text-[clamp(3rem,9vw,9rem)] leading-[0.88] uppercase tracking-tighter text-foreground mb-4 sm:mb-6">
              Rehnuma
            </h1>
            <p className="font-sans text-base sm:text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
              Illuminating overlooked perspectives. Rehnuma curates intimate speaker sessions, feminist film screenings, and roundtables with change-makers across South Asia.
            </p>
          </div>

          {/* Featured Video Showcase */}
          <div className="my-8 sm:my-12 relative w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-foreground/15 shadow-xl bg-black aspect-video max-w-5xl mx-auto">
            <video
              src="/videos/rehnuma.mp4"
              controls
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-full object-cover"
            />
          </div>

          {/* Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 my-10 sm:my-16">
            <div className="border border-foreground/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-foreground/5 transition-colors">
              <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-3 leading-snug">Feminist Cinema & Screenings</h3>
              <p className="font-sans text-xs sm:text-sm text-foreground/70 leading-relaxed">
                Bi-monthly documentary and indie cinema screenings followed by guided discussions exploring the female gaze, caste hierarchies, and labor rights.
              </p>
            </div>

            <div className="border border-foreground/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 hover:bg-foreground/5 transition-colors">
              <h3 className="font-serif text-2xl sm:text-3xl text-foreground mb-3 leading-snug">Guest Scholar Dialogues</h3>
              <p className="font-sans text-xs sm:text-sm text-foreground/70 leading-relaxed">
                Invited conversations with leading feminist legal scholars, sociologists, and community organizers tackling law, autonomy, and state mechanisms.
              </p>
            </div>
          </div>

          {/* Highlights CTA */}
          <div className="bg-foreground text-background rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 mt-8 sm:mt-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 sm:gap-8 shadow-lg">
            <div>
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl mb-2 uppercase">Host or Recommend a Session</h3>
              <p className="font-sans text-sm sm:text-base text-background/75 max-w-xl leading-relaxed">
                Have a topic or guest you&apos;d like to see featured in the next Rehnuma series? We invite proposals from students across all departments.
              </p>
            </div>
            <a
              href="mailto:wdc@mlnc.du.ac.in"
              className="w-full md:w-auto text-center inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 bg-background text-foreground rounded-full font-sans font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-background/90 transition-all active:scale-95 shadow-md"
            >
              <span>Propose a Topic</span>
              <ArrowUpRight size={14} />
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

