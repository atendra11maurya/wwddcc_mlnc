import Link from "next/link";
import { initiatives } from "@/data/initiatives";

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-14 sm:pt-20 md:pt-24 pb-8 rounded-t-[1.75rem] sm:rounded-t-[2.5rem] mt-16 sm:mt-24 md:mt-32">
      <div className="container mx-auto px-4 sm:px-6 md:px-12">
        <div className="mb-12 sm:mb-20 md:mb-24">
          <h2 className="font-serif text-[clamp(3.2rem,10vw,12rem)] leading-[0.86] sm:leading-[0.8] tracking-tighter uppercase mb-3 sm:mb-4">
            Keep<br />Questioning.
          </h2>
          <p className="font-sans text-background/70 text-base sm:text-lg md:text-xl max-w-md">
            The conversation doesn&apos;t end here.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12 lg:gap-8 mb-12 sm:mb-20 md:mb-24 border-t border-background/20 pt-10 sm:pt-16">
          <div className="flex flex-col gap-3 sm:gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-full overflow-hidden border border-background/20 bg-white shrink-0 p-0.5 shadow-md">
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
            <p className="font-serif text-xl sm:text-2xl uppercase">
              Women&apos;s Development Cell
            </p>
            <p className="text-background/70 text-xs sm:text-sm leading-relaxed">
              Motilal Nehru College<br />
              University of Delhi<br />
              Benito Juarez Marg, New Delhi 110021
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="font-sans font-bold text-xs sm:text-sm tracking-widest uppercase text-background/50 mb-1 sm:mb-2">
              Explore
            </h3>
            <nav className="flex flex-col gap-2.5 sm:gap-3 text-sm">
              <Link href="/about" className="hover:text-background/70 transition-colors">About WDC</Link>
              <Link href="/archive" className="hover:text-background/70 transition-colors">The Archive</Link>
              <Link href="/voices" className="hover:text-background/70 transition-colors">Student Voices</Link>
              <Link href="/people" className="hover:text-background/70 transition-colors">The People</Link>
              <Link href="/support" className="hover:text-background/70 transition-colors">Support & ICC</Link>
            </nav>
          </div>

          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="font-sans font-bold text-xs sm:text-sm tracking-widest uppercase text-background/50 mb-1 sm:mb-2">
              Initiatives
            </h3>
            <nav className="flex flex-col gap-2.5 sm:gap-3 text-sm">
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

          <div className="flex flex-col gap-3 sm:gap-4">
            <h3 className="font-sans font-bold text-xs sm:text-sm tracking-widest uppercase text-background/50 mb-1 sm:mb-2">
              Connect &amp; Apply
            </h3>
            <nav className="flex flex-col gap-2.5 sm:gap-3 text-sm">
              <a 
                href="https://www.instagram.com/wdc.mlnc?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-background/70 transition-colors"
              >
                Instagram (@wdc.mlnc) ↗
              </a>
              <Link href="/#join" className="hover:text-background/70 transition-colors">
                Join now ↗
              </Link>
              <Link href="/contribute" className="hover:text-background/70 transition-colors">
                Contribute Your Voice
              </Link>
            </nav>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-6 sm:pt-8 border-t border-background/20 text-xs text-background/50 text-center sm:text-left">
          <p>© {new Date().getFullYear()} Women&apos;s Development Cell, MLNC.</p>
          <div className="flex gap-6">
            <Link href="/support" className="hover:text-background transition-colors">Support &amp; POSH</Link>
            <a href="mailto:wdc@mlnc.du.ac.in" className="hover:text-background transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

