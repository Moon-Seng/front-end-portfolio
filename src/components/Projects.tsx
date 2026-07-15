import { useMemo, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ExternalLink, Github } from "lucide-react";
import { LazyImage } from "./LazyImage";
import { projects } from "../portfolio-config";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [showAll, setShowAll] = useState(false);
  const initialOtherCount = 8;

  const { featuredProjects, otherProjects } = useMemo(() => {
    const featured = projects.filter((p) => p.featured).slice(0, 2);
    const featuredTitles = new Set(featured.map((p) => p.title));
    const other = projects.filter((p) => !featuredTitles.has(p.title));
    return { featuredProjects: featured, otherProjects: other };
  }, []);

  const visibleOtherProjects = showAll
    ? otherProjects
    : otherProjects.slice(0, initialOtherCount);

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

      // Project cards animation
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 100 },
        {
          scrollTrigger: {
            trigger: ".projects-grid",
            start: "top 80%",
            end: "top 30%",
            scrub: 1,
          },
          opacity: 1,
          y: 0,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-12 sm:mb-16 lg:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 px-2">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-zinc-400 text-base sm:text-lg md:text-xl max-w-xs sm:max-w-2xl lg:max-w-3xl mx-auto leading-relaxed px-4">
            Explore my latest work showcasing innovative solutions, modern
            design patterns, and cutting-edge technologies in web and mobile
            development.
          </p>
        </div>

        <div className="projects-grid space-y-12 sm:space-y-16">
          {/* Featured (max 2) */}
          {featuredProjects.length ? (
            <div className="space-y-6 sm:space-y-8">
              {featuredProjects.map((project) => (
                <div
                  key={project.title}
                  className="project-card group relative max-w-6xl mx-auto rounded-2xl overflow-hidden border border-cyan-500/20 bg-zinc-950/40 backdrop-blur-sm transition-all duration-500 hover:border-cyan-400/40"
                >
                  {/* glow */}
                  <div
                    className={`pointer-events-none absolute -inset-1 bg-gradient-to-br ${project.gradient} opacity-15 blur-2xl group-hover:opacity-25 transition-opacity duration-500`}
                  />

                  <div className="relative grid lg:grid-cols-2">
                    <div className="relative h-64 sm:h-80 lg:h-full lg:min-h-[22rem] overflow-hidden">
                      <LazyImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                      />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                    />
                  </div>

                    <div className="relative p-6 sm:p-8 lg:p-10 space-y-4 lg:space-y-5">
                      <div>
                        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                          {project.title}
                        </h3>
                        <p className="text-cyan-300 font-medium mt-1">
                          {project.subtitle}
                        </p>
                      </div>

                      <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                        {project.description}
                      </p>

                      {project.features?.length ? (
                        <ul className="space-y-2">
                          {project.features.slice(0, 4).map((feature) => (
                            <li key={feature} className="flex items-start gap-2">
                              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex-shrink-0" />
                              <span className="text-zinc-400 text-sm">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      ) : null}

                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 5).map((tag) => (
                          <span
                            key={tag}
                            className="px-3 py-1 bg-zinc-950/60 text-zinc-200 rounded-full text-xs font-medium border border-zinc-800"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        {project.demo ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-purple-500 text-white font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
                          >
                            <ExternalLink size={18} />
                            Live Demo
                          </a>
                        ) : (
                          <span className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 text-zinc-500 font-semibold">
                            <ExternalLink size={18} />
                            Live Demo —
                          </span>
                        )}

                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 bg-zinc-950/40 text-zinc-200 hover:text-white hover:border-zinc-700 transition-colors font-semibold"
                          >
                            <Github size={18} />
                            View Code
                          </a>
                        ) : (
                          <span className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl border border-zinc-800 text-zinc-500 font-semibold">
                            <Github size={18} />
                            View Code —
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {/* More projects (6–8) */}
          {otherProjects.length ? (
            <div className="space-y-8">
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-xl sm:text-2xl font-semibold text-white">
                  More Projects
                </h3>
                <div className="h-px flex-1 bg-gradient-to-r from-zinc-800 to-transparent" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                {visibleOtherProjects.map((project) => (
                  <div
                    key={project.title}
                    className="project-card group relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-500 backdrop-blur-sm"
                  >
                    <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                      <LazyImage
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                      />
                    </div>

                    <div className="p-4 sm:p-6 lg:p-8 space-y-3 sm:space-y-4">
                      <h3 className="text-xl sm:text-2xl font-bold text-white">
                        {project.title}
                      </h3>
                      <p className="text-cyan-400 font-medium text-sm sm:text-base">
                        {project.subtitle}
                      </p>
                      <p className="text-zinc-300 leading-relaxed text-sm sm:text-base">
                        {project.description}
                      </p>

                      {project.features?.length ? (
                        <div>
                          <h4 className="text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">
                            Features:
                          </h4>
                          <div className="space-y-1.5 sm:space-y-2">
                            {project.features?.slice(0, 2).map((feature) => (
                              <div key={feature} className="flex items-center gap-2">
                                <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex-shrink-0" />
                                <span className="text-zinc-400 text-xs sm:text-sm">
                                  {feature}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ) : null}

                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 sm:px-3 py-1 bg-zinc-800/60 text-zinc-300 rounded text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 sm:px-3 py-1 bg-zinc-700/60 text-zinc-400 rounded text-xs">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-4 pt-2">
                        {project.github ? (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 sm:gap-2 text-zinc-400 hover:text-cyan-400 transition-colors duration-300"
                          >
                            <Github size={16} className="sm:w-4 sm:h-4" />
                            <span className="text-xs sm:text-sm font-medium">
                              Code
                            </span>
                          </a>
                        ) : (
                          <span className="flex items-center gap-1.5 sm:gap-2 text-zinc-600">
                            <Github size={16} className="sm:w-4 sm:h-4" />
                            <span className="text-xs sm:text-sm font-medium">
                              Code —
                            </span>
                          </span>
                        )}

                        {project.demo ? (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-1.5 sm:gap-2 text-zinc-400 hover:text-purple-400 transition-colors duration-300"
                          >
                            <ExternalLink size={16} className="sm:w-4 sm:h-4" />
                            <span className="text-xs sm:text-sm font-medium">
                              Demo
                            </span>
                          </a>
                        ) : (
                          <span className="flex items-center gap-1.5 sm:gap-2 text-zinc-600">
                            <ExternalLink size={16} className="sm:w-4 sm:h-4" />
                            <span className="text-xs sm:text-sm font-medium">
                              Demo —
                            </span>
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {otherProjects.length > initialOtherCount ? (
                <div className="pt-6 flex items-center justify-center">
                  <button
                    type="button"
                    onClick={() => setShowAll((v) => !v)}
                    className="px-6 py-3 rounded-xl border border-zinc-800 bg-zinc-950/40 text-zinc-300 hover:text-white hover:border-zinc-700 transition-colors"
                  >
                    {showAll ? "Show less" : "View more"}
                  </button>
                </div>
              ) : null}
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
