import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function SupportPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="font-serif text-[clamp(4rem,8vw,8rem)] leading-none uppercase tracking-tight text-foreground mb-8">
            Support & ICC
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mt-12">
            <div className="flex flex-col gap-6 font-sans text-lg text-foreground/70 leading-relaxed">
              <p>
                The Internal Complaints Committee (ICC) is the official body constituted under the POSH Act, 2013, to address grievances related to sexual harassment within the college premises.
              </p>
              <p>
                If you or someone you know has experienced any form of sexual harassment, discrimination, or abuse, the ICC is here to ensure a fair, confidential, and supportive redressal mechanism.
              </p>
              <div className="p-6 border border-foreground/10 bg-foreground/5 rounded-xl mt-4">
                <h3 className="font-sans font-bold uppercase tracking-widest text-sm text-foreground mb-4">How to file a complaint</h3>
                <ol className="list-decimal list-inside flex flex-col gap-3 text-base">
                  <li>Draft a written complaint outlining the incident.</li>
                  <li>Submit it via email to the official ICC email address.</li>
                  <li>You may also hand it over physically to any ICC member.</li>
                </ol>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div className="bg-foreground text-background p-8 rounded-2xl">
                <h3 className="font-serif text-3xl mb-2">Emergency Contacts</h3>
                <p className="font-sans text-background/70 mb-6">Immediate helplines accessible 24/7.</p>

                <div className="flex flex-col gap-4">
                  <div className="flex justify-between items-center border-b border-background/20 pb-4">
                    <span className="font-sans font-bold">Women&apos;s Helpline</span>
                    <span className="font-mono text-lg">1091</span>
                  </div>
                  <div className="flex justify-between items-center border-b border-background/20 pb-4">
                    <span className="font-sans font-bold">Police</span>
                    <span className="font-mono text-lg">100</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-sans font-bold">Student Counsellor</span>
                    <span className="font-mono text-lg">Available on campus</span>
                  </div>
                </div>
              </div>

              <div className="border border-foreground/20 p-8 rounded-2xl">
                <h3 className="font-serif text-2xl mb-4 text-foreground">Reach the ICC</h3>
                <a href="mailto:icc@mlnc.du.ac.in" className="font-sans font-bold text-xl hover:text-foreground/70 transition-colors underline underline-offset-4 decoration-foreground/30">icc@mlnc.du.ac.in ↗</a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
