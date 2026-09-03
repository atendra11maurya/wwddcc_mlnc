"use client";

import { motion } from "framer-motion";
import { FileText, MessageCircleQuestion, CheckCircle2, ArrowUpRight } from "lucide-react";
import { HandwrittenAnnotation } from "../ui/HandwrittenAnnotation";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfgZEhXll1Z562_YwTFEwmIJuzT-AnvlmxDqydnb_4XK0Aw5Q/viewform";
const INSTAGRAM_URL = "https://www.instagram.com/wdc.mlnc?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==";

export function JoinRecruitmentSection() {
  return (
    <section id="join" className="py-16 sm:py-24 md:py-28 relative overflow-hidden scroll-mt-20">
      
      {/* Background Subtle Accent Shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[700px] h-[350px] sm:h-[700px] bg-[#BFDCD2]/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 font-mono text-[9px] sm:text-xs tracking-[0.14em] sm:tracking-[0.2em] uppercase text-foreground/60 mb-3 sm:mb-4 bg-foreground/5 px-3.5 sm:px-4 py-1.5 rounded-full border border-foreground/10 text-center">
            <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#173A34] animate-pulse shrink-0" />
            <span>Recruitment Application Portal &bull; 2026-27</span>
          </div>
          
          <h2 className="font-serif text-[clamp(2.2rem,6vw,5.5rem)] leading-[0.94] uppercase tracking-tight text-foreground mb-4 sm:mb-6">
            Begin Your <HandwrittenAnnotation type="underline" color="#E8D77B">Application</HandwrittenAnnotation>
          </h2>
          
          <p className="font-sans text-base sm:text-lg md:text-xl text-foreground/75 max-w-2xl leading-relaxed">
            Open to all undergraduate students of Motilal Nehru College (Day &amp; Evening) across all academic streams and years.
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:gap-8">
          
          {/* Top Primary Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white/75 border-t-4 border-t-foreground border-x border-b border-foreground/15 rounded-2xl sm:rounded-3xl p-5 sm:p-8 md:p-12 shadow-md backdrop-blur-sm group"
          >
            {/* Corner Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 sm:pb-6 mb-4 sm:mb-6 border-b border-foreground/10">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-foreground/5 border border-foreground/15 flex items-center justify-center text-foreground">
                  <FileText size={16} />
                </div>
                <span className="font-mono text-[10px] sm:text-xs font-bold tracking-[0.16em] sm:tracking-[0.2em] uppercase text-foreground/70">
                  OFFICIAL APPLICATION PORTAL
                </span>
              </div>
              <span className="font-mono text-[10px] sm:text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase text-foreground/50">
                COHORT 2026-27 &bull; MLNC DU
              </span>
            </div>

            {/* Main Card Content */}
            <div className="flex flex-col gap-3 sm:gap-4 max-w-3xl">
              <h3 className="font-serif text-2xl sm:text-3xl md:text-4xl text-foreground uppercase tracking-tight leading-tight">
                Complete the Official 2026 Application Form
              </h3>
              <p className="font-sans text-sm sm:text-base md:text-lg text-foreground/75 leading-relaxed">
                Applications are processed via the official Google Form portal. Please have your college roll number, course details, wing preference, and a brief statement of intent ready before beginning.
              </p>
            </div>

            {/* CTA and Micro-Badge */}
            <div className="mt-6 sm:mt-8 pt-5 sm:pt-6 border-t border-foreground/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 sm:gap-6">
              <a 
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-foreground text-background px-7 py-3.5 sm:py-4 rounded-full font-sans font-bold text-xs sm:text-sm tracking-wider uppercase hover:bg-foreground/90 transition-all hover:scale-[1.01] shadow-sm inline-flex items-center justify-center gap-2 group/btn text-center active:scale-95"
              >
                <span>Open Google Application Form</span>
                <ArrowUpRight size={16} />
              </a>

              <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs text-foreground/60">
                <CheckCircle2 size={15} className="text-[#173A34] shrink-0" />
                <span>Takes ~3–5 mins &bull; Direct Google Form</span>
              </div>
            </div>

            {/* Handwritten overlay tag */}
            <span className="absolute -top-4 -right-2 hidden sm:block font-[family-name:var(--font-handwriting)] text-xl sm:text-2xl text-[#A64B2A] rotate-6 bg-[#F5F4EF] px-3 py-1 border border-foreground/15 rounded-lg shadow-sm pointer-events-none select-none">
              join the collective ↗
            </span>
          </motion.div>

          {/* Bottom Split Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            
            {/* Card 1: Candidate Helpdesk & Queries */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white/65 border border-foreground/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-5 sm:gap-6 shadow-sm backdrop-blur-sm"
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#BFDCD2]/40 border border-foreground/10 flex items-center justify-center text-foreground shrink-0">
                    <MessageCircleQuestion size={18} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase text-foreground/50">
                      CANDIDATE HELPDESK
                    </span>
                    <span className="font-mono text-[11px] sm:text-xs text-foreground/70">
                      Official Query Channel
                    </span>
                  </div>
                </div>

                <h4 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground uppercase tracking-tight mt-1">
                  Student Query &amp; Info Desk
                </h4>
                
                <p className="font-sans text-xs sm:text-sm text-foreground/70 leading-relaxed">
                  Have questions about the recruitment rounds, induction dates, or specific wing responsibilities? Reach out directly to our executive team.
                </p>
              </div>

              <a 
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#173A34] text-[#F5F4EF] hover:bg-[#173A34]/90 px-5 py-3.5 rounded-full font-sans font-bold text-xs tracking-wider uppercase transition-all inline-flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Ask via Official Instagram DM</span>
                <ArrowUpRight size={14} />
              </a>
            </motion.div>

            {/* Card 2: Official Instagram Channel */}
            <motion.div 
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="bg-white/65 border border-foreground/15 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between gap-5 sm:gap-6 shadow-sm backdrop-blur-sm"
            >
              <div className="flex flex-col gap-3 sm:gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#E5AAA1]/40 border border-foreground/10 flex items-center justify-center text-foreground shrink-0">
                    <svg className="w-4 h-4 sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[9px] sm:text-[10px] font-bold tracking-[0.18em] uppercase text-foreground/50">
                      OFFICIAL ANNOUNCEMENTS
                    </span>
                    <span className="font-mono text-[11px] sm:text-xs text-foreground/70">
                      @wdc.mlnc
                    </span>
                  </div>
                </div>

                <h4 className="font-serif text-xl sm:text-2xl md:text-3xl text-foreground uppercase tracking-tight mt-1">
                  Official Instagram Channel
                </h4>
                
                <p className="font-sans text-xs sm:text-sm text-foreground/70 leading-relaxed">
                  Follow our official Instagram handle for real-time shortlist updates, interview schedules, festival glimpses, and live announcements.
                </p>
              </div>

              <a 
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#E5AAA1] text-foreground hover:bg-[#E5AAA1]/90 border border-foreground/15 px-5 py-3.5 rounded-full font-sans font-bold text-xs tracking-wider uppercase transition-all inline-flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Follow on Instagram @wdc.mlnc</span>
                <ArrowUpRight size={14} />
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}

