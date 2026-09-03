import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ArrowUpRight } from "lucide-react";

export default function PodcastPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          
          {/* Hero */}
          <div className="max-w-4xl mb-8 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-mono font-bold tracking-widest uppercase text-foreground/50 mb-3 sm:mb-4 block">
              Audio Conversations &amp; Unlearning
            </span>
            <h1 className="font-serif text-[clamp(3rem,9vw,9rem)] leading-[0.88] uppercase tracking-tighter text-foreground mb-4 sm:mb-6">
              The Podcast
            </h1>
            <p className="font-sans text-base sm:text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
              Unfiltered audio discussions decoding gender, queer identity, campus culture, mental health, and navigating early adulthood.
            </p>
          </div>

          {/* Featured Episode Video Showcase */}
          <div className="my-8 sm:my-14 relative w-full max-w-4xl mx-auto flex flex-col gap-2.5">
            {/* Asymmetric pastel shape partially behind one corner */}
            <div className="absolute -top-4 -right-4 w-28 sm:w-32 h-28 sm:h-32 rounded-full bg-[#C8DEEA]/45 -z-10 pointer-events-none" />
            
            <div className="relative w-full aspect-video rounded-xl sm:rounded-2xl overflow-hidden border border-foreground/15 bg-black shadow-md">
              <iframe
                className="w-full h-full border-0"
                src="https://www.youtube.com/embed/vMmHmeldgfo"
                title="Rehnuma : Episode 01 - Aishwarya Amrit Vijay Raj"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              />
            </div>

            {/* Small Editorial Metadata Near Video */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 text-[11px] sm:text-xs font-mono text-foreground/60 px-1 pt-1">
              <span className="tracking-[0.14em] sm:tracking-[0.18em] uppercase font-bold text-foreground/80">
                REHNUMA / EP. 01 &bull; AISHWARYA AMRIT VIJAY RAJ
              </span>
              <a 
                href="https://www.youtube.com/watch?v=vMmHmeldgfo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-1 font-semibold self-start sm:self-auto"
              >
                <span>Watch on YouTube</span>
                <ArrowUpRight size={12} />
              </a>
            </div>
          </div>

          {/* Episode List */}
          <div className="flex flex-col gap-4 sm:gap-6 my-10 sm:my-16">
            {[
              { ep: "EP 08", title: "Navigating Friendships Across Political Divides", duration: "38 min", desc: "How polarization affects campus intimacy and how to set emotional boundaries without retreating into silence." },
              { ep: "EP 07", title: "The Myth of the 'Chill Girl': Emotional Labor in College", duration: "42 min", desc: "Deconstructing cool-girl tropes, internalized misogyny, and performance in social circles." },
              { ep: "EP 06", title: "Queer & Finding Home: Delhi University Edition", duration: "51 min", desc: "Stories of moving away from hometowns, carving out queer kinships in South Campus, and finding safety." }
            ].map((ep, i) => (
              <div key={i} className="border border-foreground/15 rounded-2xl p-5 sm:p-8 flex flex-col md:flex-row md:items-center justify-between gap-5 sm:gap-6 hover:bg-foreground/5 transition-colors group">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <div className="flex items-center gap-2.5 text-[10px] sm:text-xs font-mono text-foreground/50">
                    <span className="bg-foreground/10 px-2.5 py-1 rounded-md font-bold">{ep.ep}</span>
                    <span>{ep.duration}</span>
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground group-hover:text-foreground/80 transition-colors mt-1 leading-snug">
                    {ep.title}
                  </h3>
                  <p className="font-sans text-foreground/70 text-xs sm:text-sm leading-relaxed">
                    {ep.desc}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0 w-full md:w-auto">
                  <a 
                    href="https://www.youtube.com/watch?v=vMmHmeldgfo"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full md:w-auto inline-flex items-center justify-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider hover:bg-foreground/90 transition-all active:scale-95 text-center"
                  >
                    <span>▶ Play Episode</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Listen platforms */}
          <div className="border-t border-foreground/10 pt-8 sm:pt-12 mt-10 sm:mt-16 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 text-xs sm:text-sm font-sans text-foreground/70">
            <span className="font-mono font-bold uppercase tracking-widest text-[10px] sm:text-xs text-foreground/50">Available On</span>
            <div className="flex flex-wrap gap-5 sm:gap-8 font-semibold">
              <a href="https://spotify.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Spotify ↗</a>
              <a href="https://podcasts.apple.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">Apple Podcasts ↗</a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="hover:text-foreground transition-colors">YouTube Music ↗</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

