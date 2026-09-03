import Link from "next/link";
import { initiatives } from "@/data/initiatives";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-24 pb-8 rounded-t-[2.5rem] mt-32">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-24">
          <h2 className="font-serif text-[clamp(4rem,10vw,12rem)] leading-[0.8] tracking-tighter uppercase mb-4">
            Keep<br />Questioning.
          </h2>
          <p className="font-sans text-background/70 text-lg md:text-xl max-w-md">
            The conversation doesn&apos;t end here.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-24 border-t border-background/20 pt-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-background/20 bg-white shrink-0 p-0.5 shadow-md">
                <img
                  src="/images/logo.png"
                  alt="WDC MLNC Official Logo"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <h3 className="font-sans font-bold text-xs tracking-widest uppercase text-background/50">
                Organisation
              </h3>
            </div>
            <p className="font-serif text-2xl uppercase">
              Women&apos;s Development Cell
            </p>
            <p className="text-background/70 text-sm leading-relaxed">
              Motilal Nehru College<br />
              University of Delhi<br />
              Benito Juarez Marg, New Delhi 110021
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-bold text-sm tracking-widest uppercase text-background/50 mb-2">
              Explore
            </h3>
            <nav className="flex flex-col gap-3">
              <Link href="/#about" className="hover:text-background/70 transition-colors">About WDC</Link>
              <Link href="/#archive" className="hover:text-background/70 transition-colors">The Archive</Link>
              <Link href="/#voices" className="hover:text-background/70 transition-colors">Student Voices</Link>
              <Link href="/#people" className="hover:text-background/70 transition-colors">The People</Link>
              <Link href="/#support" className="hover:text-background/70 transition-colors">Support & ICC</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-bold text-sm tracking-widest uppercase text-background/50 mb-2">
              Initiatives
            </h3>
            <nav className="flex flex-col gap-3">
              {initiatives.map((init) => (
                <Link 
                  key={init.slug} 
                  href={`/initiatives/${init.slug}`} 
                  className="hover:text-background/70 transition-colors"
                >
                  {init.name}
                </Link>
              ))}
            </nav>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-sans font-bold text-sm tracking-widest uppercase text-background/50 mb-2">
              Connect &amp; Apply
            </h3>
            <nav className="flex flex-col gap-3">
              <a 
                href="https://www.instagram.com/wdc.mlnc?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-background/70 transition-colors"
              >
                Instagram (@wdc.mlnc) ↗
              </a>
              <Link href="/#join" className="hover:text-background/70 transition-colors">
                Apply for 2026-27 Cohort ↗
              </Link>
              <Link href="/#contribute" className="hover:text-background/70 transition-colors">
                Contribute Your Voice
              </Link>
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-background/20 text-xs text-background/50">
          <p>© {new Date().getFullYear()} Women&apos;s Development Cell, MLNC.</p>
          <div className="flex gap-6">
            <Link href="/accessibility" className="hover:text-background transition-colors">Accessibility</Link>
            <Link href="/privacy" className="hover:text-background transition-colors">Privacy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
