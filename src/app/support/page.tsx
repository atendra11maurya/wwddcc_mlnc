import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PhoneCall, ShieldAlert, Mail } from "lucide-react";

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24 bg-background text-foreground">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          
          <div className="max-w-3xl mb-8 sm:mb-12">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-foreground/50 block mb-3 sm:mb-4">
              Institutional Redressal & Support
            </span>
            <h1 className="font-serif text-[clamp(2.6rem,7vw,8rem)] leading-none uppercase tracking-tight text-foreground mb-4 sm:mb-6">
              Support & ICC
            </h1>
            <p className="font-sans text-base sm:text-xl text-foreground/70 leading-relaxed">
              Official institutional authority, reporting procedures, and immediate support channels for students at Motilal Nehru College.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 mt-6 sm:mt-10">
            {/* Left Column / Information */}
            <div className="flex flex-col gap-6 font-sans text-base sm:text-lg text-foreground/75 leading-relaxed">
              <p>
                The Internal Complaints Committee (ICC) is the official statutory body constituted under the POSH Act, 2013, to address grievances related to sexual harassment within the college premises.
              </p>
              <p>
                If you or someone you know has experienced any form of sexual harassment, discrimination, or abuse, the ICC is here to ensure a fair, confidential, and supportive redressal mechanism.
              </p>
              
              <div className="p-5 sm:p-6 border border-foreground/15 bg-foreground/5 rounded-2xl mt-2 sm:mt-4 shadow-sm">
                <h3 className="font-sans font-bold uppercase tracking-wider text-xs sm:text-sm text-foreground mb-4 flex items-center gap-2">
                  <ShieldAlert size={16} />
                  <span>How to file an official complaint</span>
                </h3>
                <ol className="list-decimal list-inside flex flex-col gap-2.5 text-xs sm:text-sm text-foreground/85">
                  <li>Draft a written complaint outlining the incident clearly with dates.</li>
                  <li>Submit it confidentially via email to the official ICC address.</li>
                  <li>You may also submit a sealed letter physically to any ICC faculty member.</li>
                </ol>
              </div>
            </div>

            {/* Right Column / Emergency Contacts */}
            <div className="flex flex-col gap-6 sm:gap-8">
              <div className="bg-foreground text-background p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-lg">
                <div className="flex items-center gap-2 mb-2">
                  <PhoneCall size={18} />
                  <h3 className="font-serif text-2xl sm:text-3xl uppercase tracking-tight">Emergency Contacts</h3>
                </div>
                <p className="font-sans text-xs sm:text-sm text-background/70 mb-6">Immediate 24/7 helplines (tap number to call directly on phone).</p>

                <div className="flex flex-col gap-3.5">
                  <a 
                    href="tel:1091" 
                    className="flex justify-between items-center border-b border-background/20 pb-3.5 hover:text-white/80 transition-colors"
                  >
                    <span className="font-sans font-bold text-sm sm:text-base">Women&apos;s Helpline (Delhi)</span>
                    <span className="font-mono text-base sm:text-lg underline font-semibold">1091 ↗</span>
                  </a>
                  
                  <a 
                    href="tel:112" 
                    className="flex justify-between items-center border-b border-background/20 pb-3.5 hover:text-white/80 transition-colors"
                  >
                    <span className="font-sans font-bold text-sm sm:text-base">National Emergency / Police</span>
                    <span className="font-mono text-base sm:text-lg underline font-semibold">112 / 100 ↗</span>
                  </a>

                  <div className="flex justify-between items-center pt-1">
                    <span className="font-sans font-bold text-sm sm:text-base">Campus Student Counsellor</span>
                    <span className="font-mono text-xs sm:text-sm text-background/70">MLNC Campus</span>
                  </div>
                </div>
              </div>

              <div className="border border-foreground/20 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-foreground/[0.02]">
                <div className="flex items-center gap-2 mb-3">
                  <Mail size={16} />
                  <h3 className="font-serif text-xl sm:text-2xl uppercase tracking-tight text-foreground">Reach the ICC Directly</h3>
                </div>
                <a 
                  href="mailto:icc@mlnc.du.ac.in" 
                  className="font-sans font-bold text-base sm:text-lg text-foreground hover:text-foreground/70 transition-colors underline underline-offset-4 decoration-foreground/30 break-all"
                >
                  icc@mlnc.du.ac.in ↗
                </a>
              </div>
            </div>
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

