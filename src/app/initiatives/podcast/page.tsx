import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function PodcastPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-background text-foreground">
        <div className="container mx-auto px-6 md:px-12">
          
          {/* Hero */}
          <div className="max-w-4xl mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-foreground/50 mb-4 block">
              Audio Conversations &amp; Unlearning
            </span>
            <h1 className="font-serif text-[clamp(4rem,10vw,10rem)] leading-[0.85] uppercase tracking-tighter text-foreground mb-8">
              The Podcast
            </h1>
            <p className="font-sans text-xl md:text-2xl text-foreground/80 leading-relaxed max-w-3xl">
              Unfiltered audio discussions decoding gender, queer identity, campus culture, mental health, and navigating early adulthood.
            </p>
          </div>

          {/* Featured Episode Video Showcase - Clean Editorial Feature without heavy container */}
          <div className="my-14 relative w-full max-w-4xl mx-auto flex flex-col gap-2.5">
            {/* Asymmetric pastel shape partially behind one corner */}
            <div className="absolute -top-4 -right-4 w-32 h-32 rounded-full bg-[#C8DEEA]/45 -z-10 pointer-events-none" />
            
            <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-foreground/15 bg-black shadow-sm">
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
            <div className="flex items-center justify-between text-xs font-mono text-foreground/60 px-1 pt-1">
              <span className="tracking-[0.18em] uppercase font-bold text-foreground/80">
                REHNUMA / EP. 01 &bull; AISHWARYA AMRIT VIJAY RAJ
              </span>
              <a 
                href="https://www.youtube.com/watch?v=vMmHmeldgfo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="tracking-wider uppercase text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-1 font-semibold"
              >
                Watch on YouTube ↗
              </a>
            </div>
          </div>

          {/* Episode List */}
          <div className="flex flex-col gap-6 my-16">
            {[
              { ep: "EP 08", title: "Navigating Friendships Across Political Divides", duration: "38 min", desc: "How polarization affects campus intimacy and how to set emotional boundaries without retreating into silence." },
              { ep: "EP 07", title: "The Myth of the 'Chill Girl': Emotional Labor in College", duration: "42 min", desc: "Deconstructing cool-girl tropes, internalized misogyny, and performance in social circles." },
              { ep: "EP 06", title: "Queer & Finding Home: Delhi University Edition", duration: "51 min", desc: "Stories of moving away from hometowns, carving out queer kinships in South Campus, and finding safety." }
            ].map((ep, i) => (
              <div key={i} className="border border-foreground/15 rounded-xl p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-foreground/5 transition-colors group">
                <div className="flex flex-col gap-2 max-w-2xl">
                  <div className="flex items-center gap-3 text-xs font-mono text-foreground/50">
                    <span className="bg-foreground/10 px-2.5 py-1 rounded-md font-bold">{ep.ep}</span>
                    <span>{ep.duration}</span>
                  </div>
                  <h3 className="font-serif text-2xl md:text-3xl text-foreground group-hover:text-foreground/80 transition-colors mt-1">
                    {ep.title}
                  </h3>
                  <p className="font-sans text-foreground/70 text-sm leading-relaxed">
                    {ep.desc}
                  </p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <button className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-xs font-sans font-bold uppercase tracking-wider hover:bg-foreground/90 transition-all hover:scale-105">
                    <span>▶ Play Episode</span>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Listen platforms */}
          <div className="border-t border-foreground/10 pt-12 mt-16 flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-sans text-foreground/70">
            <span className="font-mono font-bold uppercase tracking-widest text-xs text-foreground/50">Available On</span>
            <div className="flex gap-8 font-semibold">
              <a href="#" className="hover:text-foreground transition-colors">Spotify ↗</a>
              <a href="#" className="hover:text-foreground transition-colors">Apple Podcasts ↗</a>
              <a href="#" className="hover:text-foreground transition-colors">YouTube Music ↗</a>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
