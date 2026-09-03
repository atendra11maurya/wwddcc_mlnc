import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const stories = [
  {
    category: "Personal Essay",
    title: "On Unlearning Silence and Reclaiming the Classroom",
    author: "Third-Year English Hons.",
    snippet: "Growing up, articulate was a compliment reserved for boys. In university corridors, discovering the Women's Development Cell was the first time my doubts were treated as valid inquiries rather than interruptions.",
    date: "Feb 2026",
    readTime: "4 min read"
  },
  {
    category: "Anonymous Submission",
    title: "Navigating Curfews, Hostels, and the Illusion of Safety",
    author: "Anonymous",
    snippet: "Safety shouldn't mean surveillance. Why does protecting women so often look identical to caging them? An exploration of hostel rules and autonomy.",
    date: "Jan 2026",
    readTime: "3 min read"
  },
  {
    category: "Critique",
    title: "The Gendered Politics of Canteen Conversations",
    author: "Second-Year Political Science",
    snippet: "From who gets to occupy the central benches to who speaks first during union discussions—how everyday campus spaces reflect patriarchal structures.",
    date: "Nov 2025",
    readTime: "5 min read"
  },
  {
    category: "Poetry",
    title: "Mirrors We Never Asked For",
    author: "First-Year BA Programme",
    snippet: "Lines etched in beauty standards, inherited maternal warnings, and the slow dawn of self-acceptance in a room full of empathetic strangers.",
    date: "Oct 2025",
    readTime: "2 min read"
  }
];

export default function VoicesPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen pt-24 sm:pt-32 pb-20 sm:pb-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-12">
          
          <div className="max-w-3xl mb-10 sm:mb-16">
            <span className="text-[10px] sm:text-xs font-mono tracking-widest uppercase text-foreground/50 block mb-3 sm:mb-4">
              Campus Dialogue &bull; MLNC Journal
            </span>
            <h1 className="font-serif text-[clamp(2.6rem,7vw,8rem)] leading-none uppercase tracking-tight text-foreground mb-4 sm:mb-6">
              Student Voices
            </h1>
            <p className="font-sans text-base sm:text-xl md:text-2xl text-foreground/70 leading-relaxed">
              Essays, reflections, poetry, and unfiltered campus perspectives. A living archive of student discourse and radical honesty.
            </p>
            <div className="mt-6 sm:mt-8">
              <Link 
                href="/contribute"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-sans font-bold text-xs sm:text-sm tracking-wider uppercase bg-foreground text-background px-6 py-3.5 sm:py-4 rounded-full hover:bg-foreground/90 transition-all active:scale-95"
              >
                <span>Submit Your Piece</span>
                <ArrowUpRight size={14} />
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            {stories.map((story, i) => (
              <article 
                key={i} 
                className="bg-foreground/5 border border-foreground/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between hover:border-foreground/30 transition-all duration-300 group hover:-translate-y-0.5"
              >
                <div className="flex flex-col gap-3 sm:gap-4">
                  <div className="flex justify-between items-center text-[10px] sm:text-xs font-sans font-bold tracking-widest uppercase text-foreground/50">
                    <span className="bg-foreground/10 px-2.5 sm:px-3 py-1 rounded-full">{story.category}</span>
                    <span>{story.readTime}</span>
                  </div>
                  <h2 className="font-serif text-2xl sm:text-3xl text-foreground group-hover:text-foreground/80 transition-colors leading-snug">
                    {story.title}
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-foreground/70 leading-relaxed">
                    {story.snippet}
                  </p>
                </div>

                <div className="pt-5 sm:pt-6 border-t border-foreground/10 mt-6 sm:mt-8 flex justify-between items-center text-xs font-sans text-foreground/50">
                  <span className="font-semibold text-foreground/80">{story.author}</span>
                  <span>{story.date}</span>
                </div>
              </article>
            ))}
          </div>

        </div>
      </main>
      <Footer />
    </>
  );
}

