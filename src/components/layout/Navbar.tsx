"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/#home", id: "home", num: "01" },
  { name: "About", href: "/#about", id: "about", num: "02" },
  { name: "Initiatives", href: "/#initiatives", id: "initiatives", num: "03" },
  { name: "Archive", href: "/#archive", id: "archive", num: "04" },
  { name: "Voices", href: "/#voices", id: "voices", num: "05" },
  { name: "People", href: "/#people", id: "people", num: "06" },
  { name: "Join", href: "/#join", id: "join", num: "07" },
  { name: "Support", href: "/#support", id: "support", num: "08" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const pathname = usePathname();

  // Scrollspy & blur trigger
  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);

      // Section scrollspy
      const sectionIds = ["home", "about", "initiatives", "archive", "voices", "people", "support", "join", "contribute"];
      const scrollPos = window.scrollY + 220;

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  React.useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  const prevPathRef = React.useRef(pathname);
  React.useEffect(() => {
    if (prevPathRef.current !== pathname) {
      prevPathRef.current = pathname;
      setMobileMenuOpen(false);
    }
  }, [pathname]);

  return (
    <>
      <motion.header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled 
            ? "bg-[#F5F4EF]/95 backdrop-blur-md border-b border-foreground/10 py-3 md:py-3.5 shadow-sm" 
            : "bg-transparent py-4 sm:py-5 md:py-6"
        )}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full px-4 sm:px-6 md:px-10 lg:px-[1.5in] flex items-center justify-between">
          
          {/* Logo & Brand Identity */}
          <Link 
            href="/#home" 
            className="flex items-center gap-2.5 sm:gap-3.5 group z-50 select-none min-w-0"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 md:w-11 md:h-11 rounded-full overflow-hidden border border-foreground/20 shadow-sm shrink-0 bg-white group-hover:scale-105 transition-transform">
              <img
                src="/images/logo.png"
                alt="WDC MLNC Official Emblem"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-serif text-xl sm:text-2xl md:text-[1.75rem] tracking-tight text-foreground uppercase leading-none font-semibold group-hover:opacity-80 transition-opacity truncate">
                WDC MLNC
              </span>
              <span className="font-mono text-[8px] sm:text-[9px] tracking-[0.18em] sm:tracking-[0.22em] text-foreground/50 uppercase mt-0.5 truncate">
                Women&apos;s Development Cell
              </span>
            </div>
          </Link>

          {/* Desktop Navigation (>= 1024px) */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-foreground",
                  activeSection === link.id ? "text-foreground font-semibold border-b-2 border-foreground pb-0.5" : "text-foreground/60"
                )}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/#join"
              className="ml-3 flex items-center gap-1.5 text-xs font-mono font-bold tracking-wider uppercase bg-foreground text-background px-5 py-2.5 rounded-full hover:bg-foreground/90 transition-all hover:scale-105 shadow-sm"
            >
              <span>Join now</span>
              <ArrowUpRight size={14} />
            </Link>
          </nav>

          {/* Mobile & Tablet Hamburger Toggle */}
          <button
            className="lg:hidden w-10 h-10 -mr-1.5 rounded-full flex items-center justify-center text-foreground hover:bg-foreground/5 active:scale-95 transition-all z-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile & Tablet Drawer Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#F5F4EF] flex flex-col justify-between pt-20 pb-8 px-5 sm:px-8 md:px-12 overflow-y-auto no-scrollbar"
          >
            {/* Top Tagline */}
            <div className="pt-2 pb-4 border-b border-foreground/10 flex items-center justify-between text-[11px] font-mono tracking-widest text-foreground/50 uppercase">
              <span>MOTILAL NEHRU COLLEGE</span>
              <span>EST. WDC &bull; 2026</span>
            </div>

            {/* Links List - Responsive Grid on Tablet, Single Column on Phone */}
            <nav className="my-auto py-6 grid grid-cols-1 md:grid-cols-2 gap-y-4 sm:gap-y-5 md:gap-x-12">
              {navLinks.map((link, i) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.035, duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "group flex items-center justify-between py-2 border-b border-foreground/5 transition-all",
                        isActive ? "text-foreground font-bold" : "text-foreground/60 hover:text-foreground"
                      )}
                    >
                      <div className="flex items-baseline gap-3 sm:gap-4">
                        <span className="font-mono text-xs text-foreground/40 font-normal">
                          {link.num}
                        </span>
                        <span className="font-serif text-2xl sm:text-3xl md:text-4xl uppercase tracking-tight group-hover:translate-x-1 transition-transform">
                          {link.name}
                        </span>
                      </div>
                      <span className={cn(
                        "text-xs font-mono transition-transform",
                        isActive ? "opacity-100 text-foreground" : "opacity-0 group-hover:opacity-100 text-foreground/50"
                      )}>
                        ↗
                      </span>
                    </Link>
                  </motion.div>
                );
              })}
            </nav>

            {/* Bottom Actions & Social Strip */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.28, duration: 0.35 }}
              className="pt-6 border-t border-foreground/10 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4"
            >
              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/#join"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 font-sans font-bold text-xs uppercase tracking-wider bg-foreground text-background px-6 py-3.5 rounded-full hover:bg-foreground/90 transition-all text-center"
                >
                  <span>Join now</span>
                  <ArrowUpRight size={14} />
                </Link>

                <Link
                  href="/#contribute"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center justify-center gap-2 font-sans font-semibold text-xs uppercase tracking-wider border border-foreground/25 text-foreground px-5 py-3.5 rounded-full hover:bg-foreground/5 transition-all text-center"
                >
                  Contribute Story ↗
                </Link>
              </div>

              <div className="flex items-center justify-between sm:justify-end gap-6 text-xs font-mono text-foreground/60 pt-2 sm:pt-0">
                <a
                  href="https://www.instagram.com/wdc.mlnc?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-foreground transition-colors uppercase font-bold"
                >
                  @wdc.mlnc ↗
                </a>
                <a
                  href="mailto:wdc@mlnc.du.ac.in"
                  className="hover:text-foreground transition-colors uppercase"
                >
                  wdc@mlnc.du.ac.in
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

