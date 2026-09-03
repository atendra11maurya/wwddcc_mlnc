import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          
          <div className="flex flex-row items-center justify-between gap-4 sm:gap-8 mb-8 sm:mb-12 pb-6 sm:pb-8 border-b border-foreground/10">
            <div className="flex flex-col gap-1.5 sm:gap-2">
              <span className="font-mono text-[10px] sm:text-xs tracking-widest uppercase text-foreground/50">
                Institutional Overview • MLNC DU
              </span>
              <h1 className="font-serif text-[clamp(2.6rem,7vw,8rem)] leading-none uppercase tracking-tight text-foreground">
                About WDC
              </h1>
            </div>
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-2 border-foreground/20 shadow-md bg-white shrink-0 p-1">
              <img
                src="/images/logo.png"
                alt="WDC MLNC Official Logo"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-24">
            <div className="lg:col-span-5">
              <p className="font-sans text-xl sm:text-2xl md:text-3xl text-foreground/85 leading-relaxed font-medium">
                The Women&apos;s Development Cell of Motilal Nehru College is a student-led collective committed to broadening the discourse around gender neutrality, identity, and intersectional solidarity.
              </p>
            </div>
            
            <div className="lg:col-span-7 flex flex-col gap-6 sm:gap-8 font-sans text-base sm:text-lg text-foreground/75 leading-relaxed">
              <p>
                Founded on the belief that meaningful change begins with dialogue, WDC MLNC serves as a safe, inclusive, and radically open space for students to unpack the conditioning we inherit. We are not just an organizational body; we are a community of unlearning.
              </p>
              <p>
                Our flagship festival, <strong className="text-foreground">Bebakh</strong>, and discussion forums, <strong className="text-foreground">Rehnuma</strong>, actively engage with art, policy, academia, and ground-level activism to challenge patriarchal norms and institutional conditioning across Delhi University.
              </p>
              <p>
                We believe in an intersectional approach. Gender cannot be discussed in a vacuum. It intersects with caste, class, sexuality, and disability. Through our campaigns, workshops, podcast episodes, and cultural forums, we strive to amplify marginalized voices and democratize feminist discourse.
              </p>
              
              <div className="pt-6 sm:pt-8 border-t border-foreground/10 mt-2 sm:mt-4 grid grid-cols-3 gap-4 sm:gap-10">
                 <div className="flex flex-col gap-1">
                   <span className="font-serif text-3xl sm:text-4xl text-foreground">30+</span>
                   <span className="text-[10px] sm:text-xs uppercase tracking-widest text-foreground/50 font-bold font-mono">Active Members</span>
                 </div>
                 <div className="flex flex-col gap-1">
                   <span className="font-serif text-3xl sm:text-4xl text-foreground">4</span>
                   <span className="text-[10px] sm:text-xs uppercase tracking-widest text-foreground/50 font-bold font-mono">Wings</span>
                 </div>
                 <div className="flex flex-col gap-1">
                   <span className="font-serif text-3xl sm:text-4xl text-foreground">DU</span>
                   <span className="text-[10px] sm:text-xs uppercase tracking-widest text-foreground/50 font-bold font-mono">Solidarity</span>
                 </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

