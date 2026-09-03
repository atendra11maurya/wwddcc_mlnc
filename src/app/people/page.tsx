import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { peopleData } from "@/data/people";
import { ArrowUpRight } from "lucide-react";

export default function PeoplePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">

          <div className="max-w-4xl mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-foreground/50 block mb-3 sm:mb-4">
              Directory • Session 2026-27
            </span>
            <h1 className="font-serif text-[clamp(2.6rem,7vw,8rem)] leading-none uppercase tracking-tight text-foreground mb-4 sm:mb-6">
              The People Behind WDC
            </h1>
            <p className="font-sans text-base sm:text-xl md:text-2xl text-foreground/70 max-w-2xl leading-relaxed">
              Meet the student organizers, creative directors, and wing heads steering the Women&apos;s Development Cell at Motilal Nehru College.
            </p>
          </div>

          <div className="flex flex-col gap-12 sm:gap-20 mt-8 sm:mt-12">
            <section>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 sm:pb-4 border-b border-foreground/10 mb-8 sm:mb-12">
                <h2 className="font-sans text-xs sm:text-sm font-bold tracking-widest uppercase text-foreground/70">
                  Executive Board 2026–27 ({peopleData.length} Members)
                </h2>
                <a
                  href="https://www.instagram.com/wdc.mlnc/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans text-xs uppercase tracking-wider text-foreground/50 hover:text-foreground transition-colors inline-flex items-center gap-1 font-semibold"
                >
                  <span>Follow @wdc.mlnc</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                {peopleData.map((person) => (
                  <div key={person.id} className="flex flex-col gap-3 sm:gap-4 group">
                    <a
                      href={person.instagramUrl || "https://www.instagram.com/wdc.mlnc/?hl=en"}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full aspect-[4/5] bg-foreground/5 border border-foreground/15 rounded-2xl sm:rounded-3xl overflow-hidden relative shadow-lg block"
                    >
                      {person.image && (
                        <img
                          src={person.image}
                          alt={`${person.name} - ${person.role}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5 sm:p-6">
                        <span className="font-sans font-bold text-[10px] sm:text-xs tracking-widest uppercase text-black bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-full shadow-lg inline-flex items-center gap-1">
                          <span>View Induction Post</span>
                          <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </a>

                    <div className="flex flex-col gap-1 px-1">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-[11px] sm:text-xs font-bold uppercase tracking-wider text-foreground/50">
                          {person.role}
                        </span>
                        {person.handle && (
                          <span className="font-mono text-[10px] sm:text-[11px] text-foreground/40">
                            {person.handle}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-2xl sm:text-3xl uppercase tracking-tight text-foreground">
                        {person.name}
                      </h3>
                      {person.bio && (
                        <p className="font-sans text-xs text-foreground/60 leading-relaxed mt-0.5 sm:mt-1">
                          {person.bio}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

