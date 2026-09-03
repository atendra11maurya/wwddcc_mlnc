"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { HandwrittenAnnotation } from "../ui/HandwrittenAnnotation";
import { Button } from "../ui/Button";
import Link from "next/link";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";

export function Hero() {
  const [isMuted, setIsMuted] = React.useState(false);
  const [isPlaying, setIsPlaying] = React.useState(true);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  // Attempt to play with sound by default when component mounts
  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = false;
    const playPromise = video.play();

    if (playPromise !== undefined) {
      playPromise
        .then(() => {
          setIsMuted(false);
          setIsPlaying(true);
        })
        .catch(() => {
          // Autoplay with sound blocked by browser policy: start muted and allow 1-click sound
          video.muted = true;
          setIsMuted(true);
          video.play().catch(() => { });
        });
    }
  }, []);

  const toggleMute = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (videoRef.current) {
      const nextMuted = !isMuted;
      videoRef.current.muted = nextMuted;
      setIsMuted(nextMuted);
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  };

  return (
    <section id="home" className="relative w-full min-h-[94vh] flex flex-col justify-between overflow-hidden pt-28 md:pt-32 pb-6 scroll-mt-20">

      {/* Top Editorial Issue Marker */}
      <div className="w-full px-6 md:px-12 lg:px-[1.5in] flex items-center justify-between text-[11px] font-mono tracking-[0.2em] uppercase text-foreground/50 pb-4 border-b border-foreground/10">
        <div className="flex items-center gap-2.5">
          <div className="w-4 h-4 rounded-full overflow-hidden shrink-0 border border-foreground/30 bg-white">
            <img src="/images/logo.png" alt="WDC Emblem" className="w-full h-full object-cover" />
          </div>
          <span>MOTILAL NEHRU COLLEGE • UNIVERSITY OF DELHI</span>
        </div>
        <span className="hidden sm:inline">EST. WOMEN&apos;S DEVELOPMENT CELL</span>
        <span>ISSUE 2026</span>
      </div>

      {/* Main Magazine Spread Grid */}
      <div className="w-full px-6 md:px-12 lg:px-[1.5in] flex-1 flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-between py-8 z-10 relative">
        
        {/* Left / Editorial Typography & Headline */}
        <div className="w-full lg:w-[50%] xl:w-[50%] flex flex-col items-start gap-7 relative">
          
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <h1 className="font-serif text-[clamp(3.4rem,7vw,7.65rem)] leading-[0.88] tracking-tight uppercase text-foreground">
              Broaden <br />
              <span className="text-foreground/80">the definition</span> <br />
              of your{" "}
              <span className="relative inline-block">
                <span className="relative z-10 italic font-serif">gender.</span>
                {/* Conceptual editorial line & strikethrough */}
                <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-foreground/30" />
                <span className="absolute -bottom-2.5 left-2 right-2 h-[1px] bg-foreground/15" />
                
                {/* Handwritten question pointing to GENDER */}
                <span className="absolute -top-6 md:-top-8 -right-6 md:-right-14 text-[#A64B2A] text-xl md:text-2xl rotate-[-4deg] whitespace-nowrap font-[family-name:var(--font-handwriting)] select-none pointer-events-none">
                  who defined it? ↗
                </span>
              </span>
            </h1>
          </motion.div>

          <motion.p 
            className="font-sans text-base md:text-lg text-foreground/75 max-w-xl leading-relaxed relative"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            A student-led space at Motilal Nehru College for conversations around gender, identity, expression and everything we are taught not to question.
            
            <span className="inline-block ml-3 text-[#A64B2A] text-lg font-[family-name:var(--font-handwriting)] rotate-2 select-none">
              — question this
            </span>
          </motion.p>

          {/* Action CTAs */}
          <motion.div 
            className="flex flex-wrap items-center gap-4 pt-1"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button asChild size="lg" className="rounded-full px-8 bg-foreground text-background hover:bg-foreground/90 font-sans tracking-wide">
              <Link href="/archive">Enter the archive ↗</Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="rounded-full px-8 border-foreground/25 hover:bg-foreground/5 font-sans tracking-wide">
              <Link href="/#contribute">Contribute your voice ↗</Link>
            </Button>
          </motion.div>
        </div>

        {/* Right / Bebakh '26 Flagship Festival Reel Video */}
        <div className="w-full lg:w-[48%] xl:w-[48%] flex-shrink-0 relative flex flex-col items-center lg:items-end">
          
          <motion.div 
            className="relative w-full max-w-[460px] sm:max-w-[500px] lg:max-w-[550px] xl:max-w-[580px]"
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Background Graphic Element 1: Top-Left Butter-Yellow Circle */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -top-12 sm:-top-20 -left-10 sm:-left-20 w-52 h-52 sm:w-68 sm:h-68 lg:w-80 lg:h-80 rounded-full bg-[#E8D77B] pointer-events-none -z-10 opacity-95"
            />

            {/* Background Graphic Element 2: Bottom-Right Soft Coral Circle */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-10 sm:-bottom-16 -right-8 sm:-right-14 w-48 h-48 sm:w-60 sm:h-60 lg:w-72 lg:h-72 rounded-full bg-[#E5AAA1] pointer-events-none -z-10 opacity-95"
            />

            {/* Editorial Frame with the specified Flagship Reel */}
            <div 
              onClick={togglePlay}
              className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden bg-black border border-foreground/20 shadow-2xl group cursor-pointer z-10"
            >
              <video
                ref={videoRef}
                src="/videos/bebak.mp4"
                poster="/images/archive/videos/video_thumb_8_reel-8.jpg"
                autoPlay
                loop
                playsInline
                className="w-full h-full object-cover"
              />

              {/* Editorial Corner Badge: Matching Student Forum reference */}
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <span className="font-mono text-[10px] font-bold tracking-[0.22em] text-[#173A34] bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full uppercase border border-foreground/10 shadow-sm">
                  STUDENT FORUM • MLNC
                </span>
              </div>

              {/* Prominent Sound Toggle Button (Sound On / Mute Option) */}
              <button
                onClick={toggleMute}
                aria-label={isMuted ? "Turn Sound On" : "Turn Sound Off"}
                className="absolute top-4 right-4 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/80 backdrop-blur-md border border-white/30 text-white hover:bg-black transition-all hover:scale-105 text-xs font-mono tracking-wider font-semibold shadow-lg"
              >
                {isMuted ? (
                  <>
                    <VolumeX size={13} className="text-white/80" />
                    <span className="text-[10px] uppercase">Unmute</span>
                  </>
                ) : (
                  <>
                    <Volume2 size={13} className="text-[#E8D77B] animate-pulse" />
                    <span className="text-[10px] uppercase text-[#E8D77B]">Sound On</span>
                  </>
                )}
              </button>

              {/* Play / Pause Indicator on Hover */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20 pointer-events-none">
                <div className="w-12 h-12 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white">
                  {isPlaying ? <Pause size={18} /> : <Play size={18} className="ml-0.5" />}
                </div>
              </div>
            </div>

            {/* Overlapping Handwritten Sticker on Bottom-Right: exact match to screenshot */}
            <motion.div 
              initial={{ opacity: 0, y: 12, rotate: 6 }}
              animate={{ opacity: 1, y: 0, rotate: 6 }}
              transition={{ duration: 0.6, delay: 0.55 }}
              className="absolute -bottom-5 right-6 sm:right-12 z-20 pointer-events-none select-none"
            >
              <span className="font-[family-name:var(--font-handwriting)] text-2xl sm:text-3xl text-[#A64B2A] block bg-white px-4 py-1.5 border border-foreground/15 rounded-xl shadow-lg">
                safe spaces ↗
              </span>
            </motion.div>

            {/* Overlapping Handwritten Annotation on Bottom-Left */}
            <motion.div 
              initial={{ opacity: 0, y: 12, rotate: -6 }}
              animate={{ opacity: 1, y: 0, rotate: -6 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="absolute -bottom-4 -left-4 sm:-left-6 z-20 pointer-events-none select-none"
            >
              <span className="font-[family-name:var(--font-handwriting)] text-2xl sm:text-3xl text-[#A64B2A] block bg-[#F5F4EF] px-3 py-1 border border-foreground/15 rounded-lg shadow-sm">
                unlearn.
              </span>
            </motion.div>

            {/* Subtle Editorial Caption & Tag */}
            <div className="mt-8 flex items-start justify-between gap-3 w-full">
              <p className="font-mono text-[11px] tracking-wider text-foreground/60 uppercase leading-snug">
                Bebakh &apos;26 Flagship Festival Highlights • Dialogues, art &amp; solidarity
              </p>
              <span className="font-mono text-[10px] tracking-widest text-foreground/40 shrink-0">
                01/BEBAKH
              </span>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Subtle Bottom Editorial Strip */}
      <div className="w-full px-6 md:px-12 lg:px-[1.5in] pt-6 border-t border-foreground/10 flex items-center justify-between">
        <div className="w-full text-center">
          <p className="font-mono text-xs md:text-sm tracking-[0.35em] md:tracking-[0.5em] text-foreground/60 uppercase font-semibold">
            LISTEN &mdash; QUESTION &mdash; UNLEARN &mdash; SPEAK
          </p>
        </div>
      </div>

    </section>
  );
}
