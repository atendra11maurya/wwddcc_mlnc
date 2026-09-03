import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { initiatives } from "@/data/initiatives";
import { InitiativeFeature } from "@/components/home/InitiativeFeature";

export default function InitiativesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-12 w-full">
        <div className="container mx-auto px-6 md:px-12 mb-16 text-center">
          <h1 className="font-serif text-[clamp(4rem,8vw,8rem)] leading-none uppercase tracking-tight text-foreground mb-8">
            Initiatives
          </h1>
          <p className="font-sans text-xl text-foreground/70 max-w-2xl mx-auto">
            The core properties and spaces we build to spark dialogue.
          </p>
        </div>

        <div className="w-full flex flex-col gap-16 py-12">
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
