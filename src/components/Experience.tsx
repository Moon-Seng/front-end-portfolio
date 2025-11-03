import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Briefcase, GraduationCap } from "lucide-react";
import { experience } from "@/portfolio-config";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "top 50%",
            scrub: 1,
          },
          opacity: 1,
          y: 0,
          ease: "power3.out",
        }
      );

      // Experience cards animation
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, y: 80, scale: 0.95 },
        {
          scrollTrigger: {
            trigger: ".timeline-item",
            start: "top 85%",
            end: "top 40%",
            scrub: 1.5,
          },
          opacity: 1,
          y: 0,
          scale: 1,
          stagger: 0.2,
          ease: "power2.out",
        }
      );

      // Accent bars animation
      gsap.fromTo(
        ".accent-bar",
        { scaleY: 0, transformOrigin: "top" },
        {
          scrollTrigger: {
            trigger: ".accent-bar",
            start: "top 85%",
            end: "top 50%",
            scrub: 2,
          },
          scaleY: 1,
          stagger: 0.1,
          ease: "power2.inOut",
        }
      );

      // Animate timeline line
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0, transformOrigin: "top" },
        {
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 80%",
            end: "bottom 20%",
            scrub: 2,
          },
          scaleY: 1,
          ease: "power2.inOut",
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-zinc-950"
    >
      <div className="max-w-5xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold  mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            My journey from full-stack development to specializing in frontend
            and animations.
          </p>
        </div>

        {/* Experience Grid */}
        <div className="space-y-8">
          {experience.map((exp, index) => (
            <div key={index} className="timeline-item relative group">
              {/* Gradient Accent Bar */}
              <div className="accent-bar absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 to-purple-500 rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>

              {/* Content Card */}
              <div className="ml-8 bg-zinc-900 rounded-2xl p-6 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-800/50 hover:scale-[1.02] transition-all duration-300 group/card relative overflow-hidden">
                {/* Icon Badge */}
                <div className="absolute bottom-4 right-4 p-2 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg border border-cyan-500/30">
                  {exp.type === "work" ? (
                    <Briefcase size={16} className="text-cyan-400" />
                  ) : (
                    <GraduationCap size={16} className="text-purple-400" />
                  )}
                </div>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                  <h3 className="text-white group-hover/card:text-cyan-300 transition-colors duration-300">
                    {exp.title}
                  </h3>
                  <span className="text-cyan-400 text-sm mt-1 md:mt-0 group-hover/card:text-cyan-300 transition-colors duration-300">
                    {exp.period}
                  </span>
                </div>

                <p className="text-zinc-400 mb-3">{exp.company}</p>
                <p className="text-zinc-400 mb-4 text-sm">{exp.description}</p>

                {/* Achievements */}
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li
                      key={achIndex}
                      className="flex items-center justify-start gap-2 text-zinc-400 text-sm  "
                    >
                      <span className="text-cyan-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
