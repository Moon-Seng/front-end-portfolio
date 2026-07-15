import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { about } from "../portfolio-config";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const stackRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 60, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: 1.5,
          },
          opacity: 1,
          y: 0,
          scale: 1,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".stack-item",
        { opacity: 0, y: 16 },
        {
          scrollTrigger: {
            trigger: stackRef.current,
            start: "top 90%",
            end: "top 70%",
            scrub: 1,
          },
          opacity: 1,
          y: 0,
          stagger: 0.05,
          ease: "power2.out",
        },
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
        <div ref={titleRef} className="mb-10">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <div className="max-w-6xl mx-auto mt-8">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/30 backdrop-blur-sm p-8 sm:p-10 text-left">
              <div className="space-y-4 text-base sm:text-lg leading-relaxed text-zinc-400">
                <p className="text-zinc-200 text-lg sm:text-xl">
                  {about.introParagraphs[0]}
                </p>
                {about.introParagraphs.slice(1).map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div ref={stackRef} className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-semibold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Tech Stack
            </span>
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:divide-x md:divide-zinc-800/70 text-left">
            {about.stackGroups.map((group) => (
              <div
                key={group.title}
                className="md:px-8 first:md:pl-0 last:md:pr-0"
              >
                <h4 className="text-white font-semibold">{group.title}</h4>
                <ul className="mt-4 space-y-2">
                  {group.items.map((item) => (
                    <li key={item} className="stack-item text-zinc-300 text-sm">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        </div>
      </div>
    </section>
  );
}
