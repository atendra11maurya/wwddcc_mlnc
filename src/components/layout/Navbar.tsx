"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { name: "Home", href: "/#home", id: "home" },
  { name: "About", href: "/#about", id: "about" },
  { name: "Initiatives", href: "/#initiatives", id: "initiatives" },
  { name: "Archive", href: "/#archive", id: "archive" },
  { name: "Voices", href: "/#voices", id: "voices" },
  { name: "People", href: "/#people", id: "people" },
  { name: "Join", href: "/#join", id: "join" },
  { name: "Support", href: "/#support", id: "support" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState("home");
  const pathname = usePathname();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Section scrollspy for single page
      const sectionIds = ["home", "about", "initiatives", "archive", "voices", "people", "support", "join", "contribute"];
      const scrollPos = window.scrollY + 200;

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
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-500",
          isScrolled ? "bg-background/90 backdrop-blur-md border-b border-foreground/5 py-4" : "bg-transparent py-6"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-full px-6 md:px-12 lg:px-[1.5in] flex items-center justify-between">
          <Link href="/#home" className="flex items-center gap-3.5 group z-50">
            <div className="relative w-10 h-10 md:w-11 md:h-11 rounded-full overflow-hidden border border-foreground/20 shadow-sm shrink-0 bg-white group-hover:scale-105 transition-transform">
              <img
                src="/images/logo.png"
                alt="WDC MLNC Official Emblem"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-2xl md:text-[1.75rem] tracking-tight text-foreground uppercase leading-none font-semibold group-hover:opacity-80 transition-opacity">
                WDC MLNC
              </span>
              <span className="font-mono text-[9px] tracking-[0.22em] text-foreground/50 uppercase mt-0.5">
                Women&apos;s Development Cell
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
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
              className="ml-3 flex items-center gap-1 text-xs font-mono font-bold tracking-wider uppercase bg-foreground text-background px-5 py-2.5 rounded-full hover:bg-foreground/90 transition-all hover:scale-105 shadow-sm"
            >
              Apply Now <span className="text-xs">↗</span>
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden p-2 -mr-2 z-50 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-background flex flex-col pt-24 px-6 md:px-12"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "font-serif text-4xl uppercase tracking-tighter",
                      activeSection === link.id ? "text-foreground" : "text-foreground/50"
                    )}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="mt-8 pt-8 border-t border-foreground/10"
              >
                <Link
                  href="/#contribute"
                  onClick={() => setMobileMenuOpen(false)}
                  className="inline-flex items-center gap-2 font-sans font-semibold text-lg bg-foreground text-background px-8 py-4 rounded-full"
                >
                  Contribute ↗
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
