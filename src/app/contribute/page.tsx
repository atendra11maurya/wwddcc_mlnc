import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function ContributePage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl text-center">
          <h1 className="font-serif text-[clamp(3rem,6vw,6rem)] leading-none uppercase tracking-tight text-foreground mb-8">
            Your Voice Belongs Here
          </h1>
          <p className="font-sans text-xl text-foreground/70 mb-12">
            Submit an anonymous story, write an article, or join the conversation. Submissions are reviewed before publication.
          </p>
          
          <div className="bg-foreground/5 p-8 rounded-2xl border border-foreground/10 text-left">
            <h3 className="font-sans font-bold text-xl uppercase tracking-widest mb-6 border-b border-foreground/10 pb-4">
              Submission Form
            </h3>
            
            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-sans text-sm tracking-widest uppercase text-foreground/70">Story *</label>
                <textarea 
                  className="w-full bg-background border border-foreground/20 rounded-xl p-4 min-h-[200px] font-sans focus:outline-none focus:ring-2 focus:ring-foreground"
                  placeholder="Share your experience..."
                  required
                ></textarea>
              </div>
              
              <div className="flex flex-col gap-2">
                <label className="font-sans text-sm tracking-widest uppercase text-foreground/70">Name (Optional)</label>
                <input 
                  type="text"
                  className="w-full bg-background border border-foreground/20 rounded-full px-6 py-3 font-sans focus:outline-none focus:ring-2 focus:ring-foreground"
                  placeholder="Leave blank for anonymous"
                />
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-foreground/10">
                <input type="checkbox" id="consent" required className="w-5 h-5 accent-foreground" />
                <label htmlFor="consent" className="font-sans text-sm text-foreground/70">
                  I consent to WDC reviewing and potentially publishing this submission. I understand that identifying details may be removed.
                </label>
              </div>

              <Button type="button" size="lg" className="w-full mt-4">
                Submit Placeholder
              </Button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
