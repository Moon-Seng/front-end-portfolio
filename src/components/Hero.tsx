import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { hero, socialLinks } from "../portfolio-config";

gsap.registerPlugin(useGSAP);

export function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Animation timeline
      const tl = gsap.timeline({ delay: 0.5 });

      tl.fromTo(
        [titleRef.current, subtitleRef.current, ctaRef.current],
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          stagger: 0.3,
        }
      );

      // Floating animation for scroll indicator
      gsap.to(".scroll-indicator", {
        y: 10,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.inOut",
      });
    },
    { scope: heroRef }
  );

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden px-4 sm:px-6 lg:px-8"
    >
      {/* Gradient Orbs - Mobile Optimized */}
      <div className="absolute top-20 left-4 w-32 h-32 sm:top-1/4 sm:left-1/4 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-cyan-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-4 w-32 h-32 sm:bottom-1/4 sm:right-1/4 sm:w-64 sm:h-64 lg:w-96 lg:h-96 bg-purple-500/10 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>

      <div className="relative z-10 max-w-4xl 2xl:max-w-6xl mx-auto text-center space-y-6 sm:space-y-8 lg:space-y-12 2xl:mt-16">
        <h1 ref={titleRef} className="font-bold leading-tight">
          <span className="block text-zinc-400 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl font-medium mb-3 sm:mb-4">
            {hero.greeting}
          </span>
          <span className="block bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-7xl 2xl:text-8xl font-black w-full">
            {hero.title}
          </span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
        >
          {hero.description}
        </p>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6"
        >
          <a
            href={hero.primaryCTA.href}
            className="group relative w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25 text-lg font-semibold"
          >
            <span className="relative z-10 text-white">{hero.primaryCTA.text}</span>
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </a>
          <a
            href={hero.secondaryCTA.href}
            className="w-full sm:w-auto px-8 py-4 border-2 border-zinc-700 rounded-xl text-zinc-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-cyan-400/5 transition-all duration-300 text-lg font-semibold"
          >
            {hero.secondaryCTA.text}
          </a>
        </div>

        {/* Social Links */}
        <div className="flex items-center justify-center gap-4 sm:gap-6">
          <a
            href={socialLinks.github}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 text-zinc-400 hover:text-cyan-400 hover:bg-cyan-400/10 rounded-xl transition-all duration-300 hover:scale-110"
          >
            <Github size={24} className="sm:w-7 sm:h-7" />
          </a>
          <a
            href={socialLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 sm:p-4 text-zinc-400 hover:text-blue-400 hover:bg-blue-400/10 rounded-xl transition-all duration-300 hover:scale-110"
          >
            <Linkedin size={24} className="sm:w-7 sm:h-7" />
          </a>
          <a
            href={socialLinks.email}
            className="p-3 sm:p-4 text-zinc-400 hover:text-purple-400 hover:bg-purple-400/10 rounded-xl transition-all duration-300 hover:scale-110"
          >
            <Mail size={24} className="sm:w-7 sm:h-7" />
          </a>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator flex flex-col items-center gap-3 text-zinc-500 pt-8 sm:pt-12">
          <span className="text-sm sm:text-base font-medium">
            Scroll to explore
          </span>
          <div className="p-2 border border-zinc-700 rounded-full hover:border-cyan-400 transition-colors duration-300">
            <ArrowDown size={18} className="sm:w-5 sm:h-5" />
          </div>
        </div>
      </div>
    </section>
  );
}
