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

  const workItems = experience.filter((e) => e.type === "work");
  const educationItems = experience.filter((e) => e.type === "education");
  const currentItem = workItems.find((e) => e.period.includes("Present"));
  const currentKey = currentItem ? `${currentItem.company}-${currentItem.title}` : null;

  useGSAP(
    () => {
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

      gsap.fromTo(
        ".experience-item",
        { opacity: 0, y: 40 },
        {
          scrollTrigger: {
            trigger: ".experience-list",
            start: "top 85%",
            end: "top 40%",
            scrub: 1.5,
          },
          opacity: 1,
          y: 0,
          stagger: 0.2,
          ease: "power2.out",
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
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl font-bold  mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Experience & Education
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            Building and leading full stack solutions across product, platform,
            and delivery.
          </p>
        </div>

        <div className="experience-list space-y-10">
          <div className="space-y-6">
            {workItems.map((exp) => (
              <div
                key={`${exp.company}-${exp.title}`}
                className="experience-item rounded-2xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900 hover:border-zinc-700 transition-colors"
              >
                <div className="p-6 sm:p-7">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                    <div className="min-w-0">
                      <div className="flex items-start gap-3">
                        <span
                          className={`mt-0.5 inline-flex items-center justify-center w-9 h-9 rounded-xl border bg-zinc-950/40 ${
                            currentKey === `${exp.company}-${exp.title}`
                              ? "border-cyan-400/40 text-cyan-200"
                              : "border-zinc-800 text-zinc-300"
                          }`}
                        >
                          <Briefcase size={16} />
                        </span>
                        <div className="min-w-0">
                          <h3 className="text-white font-semibold leading-tight">
                            {exp.title}
                          </h3>
                          <p className="text-zinc-400 text-sm mt-1">
                            {exp.company}
                          </p>
                        </div>
                      </div>

                      {exp.highlight ? (
                        <p className="mt-4 text-cyan-200/90 text-sm">
                          {exp.highlight}
                        </p>
                      ) : null}
                    </div>

                    <div className="flex items-center gap-3 sm:flex-col sm:items-end sm:gap-2">
                      <span className="text-cyan-300 text-sm whitespace-nowrap">
                        {exp.period}
                      </span>
                      {currentKey === `${exp.company}-${exp.title}` ? (
                        <span className="inline-flex items-center gap-2 text-xs text-zinc-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                          Current
                        </span>
                      ) : null}
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-1 lg:grid-cols-3 gap-6">
                    <div className="lg:col-span-2">
                      <p className="text-zinc-400 text-sm leading-relaxed">
                        {exp.description}
                      </p>

                      <ul className="mt-4 space-y-2">
                        {exp.achievements.slice(0, 3).map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-3 text-zinc-300 text-sm"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex-shrink-0" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="lg:pl-6 lg:border-l lg:border-zinc-800/70">
                      <p className="text-xs tracking-wide uppercase text-zinc-500">
                        Stack
                      </p>
                      {exp.stack?.length ? (
                        <div className="mt-3 flex flex-wrap gap-2">
                          {exp.stack.slice(0, 8).map((tag) => (
                            <span
                              key={tag}
                              className="px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950/40 text-zinc-300 text-xs"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      ) : (
                        <p className="mt-3 text-zinc-500 text-sm">—</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {educationItems.length ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  Education
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
              </div>

              {educationItems.map((edu) => (
                <div
                  key={`${edu.company}-${edu.title}`}
                  className="experience-item rounded-2xl border border-zinc-800 bg-zinc-900/30 hover:bg-zinc-900/40 hover:border-zinc-700 transition-colors"
                >
                  <div className="p-6 sm:p-7">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="min-w-0">
                        <div className="flex items-start gap-3">
                          <span className="mt-0.5 inline-flex items-center justify-center w-9 h-9 rounded-xl border border-zinc-800 bg-zinc-950/40 text-purple-200">
                            <GraduationCap size={16} />
                          </span>
                          <div className="min-w-0">
                            <h4 className="text-white font-semibold leading-tight">
                              {edu.title}
                            </h4>
                            <p className="text-zinc-400 text-sm mt-1">
                              {edu.company}
                            </p>
                          </div>
                        </div>
                      </div>
                      <span className="text-purple-300 text-sm whitespace-nowrap">
                        {edu.period}
                      </span>
                    </div>

                    <p className="text-zinc-400 mt-5 text-sm leading-relaxed">
                      {edu.description}
                    </p>

                    {edu.achievements?.length ? (
                      <ul className="mt-4 space-y-2">
                        {edu.achievements.slice(0, 2).map((achievement) => (
                          <li
                            key={achievement}
                            className="flex items-start gap-3 text-zinc-300 text-sm"
                          >
                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0" />
                            <span className="leading-relaxed">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
