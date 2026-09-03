import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/home/Hero";
import { Manifesto } from "@/components/home/Manifesto";
import { WhatIsWDC } from "@/components/home/WhatIsWDC";
import { InitiativeFeature } from "@/components/home/InitiativeFeature";
import { FeaturedStory } from "@/components/home/FeaturedStory";
import { ArchivePreview } from "@/components/home/ArchivePreview";
import { Impact } from "@/components/home/Impact";
import { VoicesPreview } from "@/components/home/VoicesPreview";
import { PeoplePreview } from "@/components/home/PeoplePreview";
import { SupportSection } from "@/components/home/SupportSection";
import { JoinRecruitmentSection } from "@/components/home/JoinRecruitmentSection";
import { ContributeSection } from "@/components/home/ContributeSection";
import { initiatives } from "@/data/initiatives";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex min-h-screen flex-col items-stretch justify-start w-full overflow-x-hidden">
        <Hero />
        <Manifesto />
        <WhatIsWDC />
        
        <div id="initiatives" className="w-full flex flex-col gap-16 py-12 scroll-mt-20">
          {initiatives.map((initiative, index) => (
            <InitiativeFeature 
              key={initiative.slug} 
              initiative={initiative} 
              index={index} 
            />
          ))}
        </div>
        
        <FeaturedStory />
        <ArchivePreview />
        <Impact />
        <VoicesPreview />
        <PeoplePreview />
        <SupportSection />
        <JoinRecruitmentSection />
        <ContributeSection />
        
      </main>
      <Footer />
    </>
  );
}

