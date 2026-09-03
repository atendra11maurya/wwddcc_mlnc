import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function RehnumaPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          {/* Hero */}
          <div className="max-w-4xl mb-16">
            <span className="text-xs font-sans font-bold tracking-widest uppercase text-foreground/50 mb-4 block">
              Perspective & Speaker Series
            </span>
            <h1 className="font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.85] uppercase tracking-tighter text-foreground mb-8">
              Rehnuma
            </h1>
            <p className="font-sans text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
              Illuminating overlooked perspectives. Rehnuma curates intimate speaker sessions, feminist film screenings, and roundtables with change-makers across South Asia.
            </p>
          </div>

          {/* Featured Video Showcase */}
          <div className="my-12 relative w-full rounded-3xl overflow-hidden border border-foreground/15 shadow-2xl bg-black aspect-video max-w-5xl mx-auto">
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-16">
            <div className="border border-foreground/15 rounded-2xl p-8 hover:bg-foreground/5 transition-colors">
              <h3 className="font-serif text-3xl text-foreground mb-4">Feminist Cinema & Screenings</h3>
              <p className="font-sans text-foreground/70 leading-relaxed">
                Bi-monthly documentary and indie cinema screenings followed by guided discussions exploring the female gaze, caste hierarchies, and labor rights.
              </p>
            </div>

            <div className="border border-foreground/15 rounded-2xl p-8 hover:bg-foreground/5 transition-colors">
              <h3 className="font-serif text-3xl text-foreground mb-4">Guest Scholar Dialogues</h3>
              <p className="font-sans text-foreground/70 leading-relaxed">
                Invited conversations with leading feminist legal scholars, sociologists, and community organizers tackling law, autonomy, and state mechanisms.
              </p>
            </div>
          </div>

          {/* Highlights */}
          <div className="bg-foreground text-background rounded-3xl p-8 md:p-12 mt-12 flex flex-col md:flex-row justify-between items-center gap-8">
            <div>
              <h3 className="font-serif text-3xl md:text-4xl mb-2">Host or Recommend a Session</h3>
              <p className="font-sans text-background/70 max-w-xl">
                Have a topic or guest you&apos;d like to see featured in the next Rehnuma series? We invite proposals from students across all departments.
              </p>
            </div>
            <a
              href="mailto:wdc@mlnc.du.ac.in"
              className="whitespace-nowrap px-8 py-4 bg-background text-foreground rounded-full font-sans font-semibold hover:bg-background/90 transition-all hover:scale-105"
            >
              Propose a Topic ↗
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
