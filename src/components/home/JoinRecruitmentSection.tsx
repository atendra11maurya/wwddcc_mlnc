"use client";

import { motion } from "framer-motion";
import { FileText, MessageCircleQuestion, CheckCircle2 } from "lucide-react";
import { HandwrittenAnnotation } from "../ui/HandwrittenAnnotation";

const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSfgZEhXll1Z562_YwTFEwmIJuzT-AnvlmxDqydnb_4XK0Aw5Q/viewform";
const INSTAGRAM_URL = "https://www.instagram.com/wdc.mlnc?utm_source=ig_web_button_share_sheet&igsi=ZDNlZDc0MzIxNw==";

export function JoinRecruitmentSection() {
  return (
    <section id="join" className="py-28 relative overflow-hidden scroll-mt-20">
      
      {/* Background Subtle Accent Shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#BFDCD2]/25 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="container mx-auto px-6 md:px-12 max-w-5xl">
        
        {/* Section Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <div className="flex items-center gap-2 font-mono text-xs tracking-[0.25em] uppercase text-foreground/60 mb-4 bg-foreground/5 px-4 py-1.5 rounded-full border border-foreground/10">
            <span className="w-2 h-2 rounded-full bg-[#173A34] animate-pulse" />
            Recruitment Application Portal &bull; Session 2026-27
          </div>
          
          <h2 className="font-serif text-[clamp(2.8rem,6.5vw,5.5rem)] leading-[0.92] uppercase tracking-tight text-foreground mb-6">
            Begin Your <HandwrittenAnnotation type="underline" color="#E8D77B">Application</HandwrittenAnnotation>
          </h2>
          
          <p className="font-sans text-lg md:text-xl text-foreground/75 max-w-2xl leading-relaxed">
            Open to all undergraduate students of Motilal Nehru College (Day &amp; Evening) across all academic streams and years.
          </p>
        </div>

        <div className="flex flex-col gap-8">
          
          {/* Top Primary Card: Complete the Official 2026 Application Form */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative bg-white/70 border-t-4 border-t-foreground border-x border-b border-foreground/15 rounded-2xl p-8 md:p-12 shadow-md backdrop-blur-sm group"
          >
            {/* Corner Badge */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 mb-6 border-b border-foreground/10">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-foreground/5 border border-foreground/15 flex items-center justify-center text-foreground">
                  <FileText size={18} />
                </div>
                <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-foreground/70">
                  OFFICIAL RECRUITMENT PORTAL
                </span>
              </div>
              <span className="font-mono text-[11px] tracking-[0.2em] uppercase text-foreground/50">
                COHORT 2026-27 &bull; MOTILAL NEHRU COLLEGE
              </span>
            </div>

            {/* Main Card Content */}
            <div className="flex flex-col gap-4 max-w-3xl">
              <h3 className="font-serif text-3xl md:text-4xl text-foreground uppercase tracking-tight leading-tight">
                Complete the Official 2026 Application Form
              </h3>
              <p className="font-sans text-base md:text-lg text-foreground/75 leading-relaxed">
                Applications are processed via the official Google Form portal. Please have your college roll number, course details, wing preference, and a brief statement of intent ready before beginning.
              </p>
            </div>

            {/* CTA and Micro-Badge */}
            <div className="mt-8 pt-6 border-t border-foreground/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <a 
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-foreground text-background px-8 py-4 rounded-full font-sans font-bold text-sm tracking-wider uppercase hover:bg-foreground/90 transition-all hover:scale-[1.02] shadow-sm inline-flex items-center justify-center gap-2.5 group/btn"
              >
                <span>Open Google Application Form</span>
                <span className="text-base group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform">↗</span>
              </a>

              <div className="flex items-center gap-2 font-mono text-xs text-foreground/60">
                <CheckCircle2 size={16} className="text-[#173A34]" />
                <span>Takes ~3–5 mins &bull; Direct Google Form submission</span>
              </div>
            </div>

            {/* Handwritten overlay tag */}
            <span className="absolute -top-5 -right-4 hidden md:block font-[family-name:var(--font-handwriting)] text-2xl text-[#A64B2A] rotate-6 bg-[#F5F4EF] px-3 py-1 border border-foreground/15 rounded-lg shadow-sm pointer-events-none select-none">
              join the collective ↗
            </span>
          </motion.div>

          {/* Bottom Split Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Candidate Helpdesk & Queries */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white/60 border border-foreground/15 rounded-2xl p-8 flex flex-col justify-between gap-6 shadow-sm backdrop-blur-sm"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#BFDCD2]/40 border border-foreground/10 flex items-center justify-center text-foreground">
                    <MessageCircleQuestion size={20} />
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/50">
                      CANDIDATE HELPDESK
                    </span>
                    <span className="font-mono text-xs text-foreground/70">
                      Official Query Channel
                    </span>
                  </div>
                </div>

                <h4 className="font-serif text-2xl md:text-3xl text-foreground uppercase tracking-tight mt-2">
                  Student Query &amp; Info Desk
                </h4>
                
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                  Have questions about the recruitment rounds, induction dates, or specific wing responsibilities? Reach out directly to our executive team.
                </p>
              </div>

              <a 
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#173A34] text-[#F5F4EF] hover:bg-[#173A34]/90 px-6 py-3.5 rounded-full font-sans font-bold text-xs tracking-wider uppercase transition-all hover:scale-[1.01] inline-flex items-center justify-center gap-2"
              >
                <span>Ask via Official Instagram DM</span>
                <span>↗</span>
              </a>
            </motion.div>

            {/* Card 2: Official Instagram Channel */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white/60 border border-foreground/15 rounded-2xl p-8 flex flex-col justify-between gap-6 shadow-sm backdrop-blur-sm"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E5AAA1]/40 border border-foreground/10 flex items-center justify-center text-foreground">
                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-mono text-[10px] font-bold tracking-[0.2em] uppercase text-foreground/50">
                      OFFICIAL ANNOUNCEMENTS
                    </span>
                    <span className="font-mono text-xs text-foreground/70">
                      @wdc.mlnc
                    </span>
                  </div>
                </div>

                <h4 className="font-serif text-2xl md:text-3xl text-foreground uppercase tracking-tight mt-2">
                  Official Instagram Channel
                </h4>
                
                <p className="font-sans text-sm text-foreground/70 leading-relaxed">
                  Follow our official Instagram handle for real-time shortlist updates, interview schedules, festival glimpses, and live announcements.
                </p>
              </div>

              <a 
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#E5AAA1] text-foreground hover:bg-[#E5AAA1]/90 border border-foreground/15 px-6 py-3.5 rounded-full font-sans font-bold text-xs tracking-wider uppercase transition-all hover:scale-[1.01] inline-flex items-center justify-center gap-2"
              >
                <span>Follow on Instagram @wdc.mlnc</span>
                <span>↗</span>
              </a>
            </motion.div>

          </div>

        </div>

      </div>
    </section>
  );
}
