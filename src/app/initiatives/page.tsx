import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { initiatives } from "@/data/initiatives";
import { InitiativeFeature } from "@/components/home/InitiativeFeature";

export default function InitiativesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-32 pb-16 w-full">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 mb-8 sm:mb-16 text-center">
          <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-foreground/50 block mb-3 sm:mb-4">
            Flagship Platforms &bull; WDC MLNC
          </span>
          <h1 className="font-serif text-[clamp(2.6rem,7vw,8rem)] leading-none uppercase tracking-tight text-foreground mb-4 sm:mb-6">
            Initiatives
          </h1>
          <p className="font-sans text-base sm:text-xl text-foreground/70 max-w-2xl mx-auto leading-relaxed">
            The core properties and spaces we build to spark dialogue, artistic defiance, and campus advocacy.
          </p>
        </div>

        <div className="w-full flex flex-col gap-6 sm:gap-12 py-2 sm:py-8">
          {initiatives.map((initiative, index) => (
            <InitiativeFeature 
              key={initiative.slug} 
              initiative={initiative} 
              index={index} 
            />
          ))}
        </div>
      </main>
      <Footer />
    </>
  );
}

