import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { peopleData } from "@/data/people";
import Image from "next/image";

export default function PeoplePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24 bg-background text-foreground">
        <div className="container mx-auto px-6 md:px-12">

          <div className="max-w-4xl mb-16">
            <span className="text-xs font-mono tracking-widest uppercase text-foreground/50 block mb-4">
              Directory • Session 2026-27
            </span>
            <h1 className="font-serif text-[clamp(4rem,8vw,8rem)] leading-none uppercase tracking-tight text-foreground mb-6">
              The People Behind WDC
            </h1>
            <p className="font-sans text-xl md:text-2xl text-foreground/70 max-w-2xl leading-relaxed">
              Meet the student organizers, creative directors, and wing heads steering the Women&apos;s Development Cell at Motilal Nehru College.
            </p>
          </div>

          <div className="flex flex-col gap-24 mt-16">
            <section>
              <div className="flex items-center justify-between pb-4 border-b border-foreground/10 mb-12">
                <h2 className="font-sans text-sm font-bold tracking-widest uppercase text-foreground/70">
                  Executive Board 2026–27 ({peopleData.length} Members)
                </h2>
                <a
                  href="https://www.instagram.com/wdc.mlnc/?hl=en"
                  target="_blank"
                  rel="noreferrer"
                  className="font-sans text-xs uppercase tracking-wider text-foreground/50 hover:text-foreground transition-colors"
                >
                  Follow @wdc.mlnc ↗
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {peopleData.map((person) => (
                  <div key={person.id} className="flex flex-col gap-4 group">
                    <a
                      href={person.instagramUrl || "https://www.instagram.com/wdc.mlnc/?hl=en"}
                      target="_blank"
                      rel="noreferrer"
                      className="w-full aspect-[4/5] bg-foreground/5 border border-foreground/15 rounded-3xl overflow-hidden relative shadow-xl block"
                    >
                      {person.image && (
                        <img
                          src={person.image}
                          alt={`${person.name} - ${person.role}`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                        <span className="font-sans font-bold text-xs tracking-widest uppercase text-black bg-white px-4 py-2 rounded-full shadow-lg">
                          View Induction Post ↗
                        </span>
                      </div>
                    </a>

                    <div className="flex flex-col gap-1 px-1">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-foreground/50">
                          {person.role}
                        </span>
                        {person.handle && (
                          <span className="font-mono text-[11px] text-foreground/40">
                            {person.handle}
                          </span>
                        )}
                      </div>
                      <h3 className="font-serif text-3xl uppercase tracking-tight text-foreground">
                        {person.name}
                      </h3>
                      {person.bio && (
                        <p className="font-sans text-xs text-foreground/60 leading-relaxed mt-1">
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
