"use client";

import { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle2, Send } from "lucide-react";

export default function ContributePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 md:px-12 max-w-2xl text-center">
          
          <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-foreground/50 block mb-3 sm:mb-4">
            Open Submissions &bull; Student Journal
          </span>
          <h1 className="font-serif text-[clamp(2.4rem,7vw,6rem)] leading-none uppercase tracking-tight text-foreground mb-4 sm:mb-6">
            Your Voice Belongs Here
          </h1>
          <p className="font-sans text-base sm:text-lg md:text-xl text-foreground/70 mb-8 sm:mb-12 leading-relaxed">
            Submit an anonymous story, write an article, or share reflections. Submissions are reviewed with care and confidentiality.
          </p>
          
          <div className="bg-foreground/5 p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl border border-foreground/10 text-left shadow-sm">
            <h3 className="font-sans font-bold text-base sm:text-lg uppercase tracking-widest mb-6 border-b border-foreground/10 pb-4 flex items-center justify-between">
              <span>Submission Form</span>
              <span className="text-[10px] font-mono text-foreground/50 uppercase">Confidential</span>
            </h3>
            
            {submitted ? (
              <div className="py-12 flex flex-col items-center text-center gap-4">
                <CheckCircle2 size={48} className="text-[#173A34]" />
                <h4 className="font-serif text-2xl uppercase">Thank You for Sharing</h4>
                <p className="font-sans text-sm text-foreground/70 max-w-sm">
                  Your piece has been received by the editorial board. We treat all submissions with utmost respect.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-xs font-mono uppercase tracking-wider underline text-foreground/60 hover:text-foreground"
                >
                  Submit another reflection
                </button>
              </div>
            ) : (
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="flex flex-col gap-5 sm:gap-6"
              >
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs sm:text-sm font-bold tracking-wider uppercase text-foreground/70">
                    Your Story / Essay / Reflection *
                  </label>
                  <textarea 
                    className="w-full bg-background border border-foreground/20 rounded-xl p-4 min-h-[160px] sm:min-h-[200px] font-sans text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-foreground"
                    placeholder="Share your experience, critique, poem, or reflection..."
                    required
                  ></textarea>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="font-sans text-xs sm:text-sm font-bold tracking-wider uppercase text-foreground/70">
                    Author Attribution (Optional)
                  </label>
                  <input 
                    type="text"
                    className="w-full bg-background border border-foreground/20 rounded-full px-5 py-3 font-sans text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-foreground"
                    placeholder="Leave blank to publish anonymously"
                  />
                </div>

                <div className="flex items-start gap-3 pt-4 border-t border-foreground/10">
                  <input type="checkbox" id="consent" required className="w-4 h-4 sm:w-5 sm:h-5 mt-0.5 accent-foreground shrink-0 cursor-pointer" />
                  <label htmlFor="consent" className="font-sans text-xs sm:text-sm text-foreground/70 leading-relaxed cursor-pointer">
                    I consent to WDC reviewing and potentially publishing this piece. Identifying details can be removed upon request.
                  </label>
                </div>

                <button 
                  type="submit" 
                  className="w-full bg-foreground text-background font-sans font-bold text-xs sm:text-sm tracking-wider uppercase py-4 rounded-full hover:bg-foreground/90 transition-all active:scale-95 inline-flex items-center justify-center gap-2 mt-2 shadow-sm cursor-pointer"
                >
                  <span>Submit Story for Review</span>
                  <Send size={14} />
                </button>
              </form>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

