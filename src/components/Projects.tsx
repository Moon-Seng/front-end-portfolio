import { useRef } from "react";
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

        {/* Featured Project */}
        {projects
          .filter((p) => p.featured)
          .map((project, index) => (
            <div key={index} className="project-card mb-12 sm:mb-16 lg:mb-20">
              <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center bg-gradient-to-br from-zinc-900/50 to-zinc-800/30 rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 xl:p-12 border border-zinc-700/50 backdrop-blur-sm">
                <div className="order-2 lg:order-1 space-y-4 sm:space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full border border-cyan-500/30">
                    <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <span className="text-cyan-400 text-xs sm:text-sm font-medium">
                      Featured Project
                    </span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white">
                    {project.title}
                  </h3>
                  <p className="text-cyan-400 text-base sm:text-lg font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-zinc-300 text-sm sm:text-base lg:text-lg leading-relaxed">
                    {project.description}
                  </p>

                  <div>
                    <h4 className="text-white font-semibold mb-3 sm:mb-4 text-sm sm:text-base">
                      Key Features:
                    </h4>
                    <div className="grid grid-cols-1 gap-2 sm:gap-3">
                      {project.features?.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 sm:gap-3"
                        >
                          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex-shrink-0"></div>
                          <span className="text-zinc-300 text-sm sm:text-base">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-2 sm:px-3 lg:px-4 py-1 sm:py-1.5 lg:py-2 bg-zinc-800/80 text-zinc-300 rounded-md sm:rounded-lg text-xs sm:text-sm font-medium border border-zinc-700/50"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                    {project.github !== null && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-zinc-800 hover:bg-zinc-700 text-white rounded-lg transition-all duration-300 hover:scale-105 text-sm sm:text-base"
                      >
                        <Github size={18} className="sm:w-5 sm:h-5" />
                        <span>View Code</span>
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-cyan-500 to-purple-500 text-white rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25 text-sm sm:text-base"
                      >
                        <ExternalLink size={18} className="sm:w-5 sm:h-5" />
                        <span>Live Demo</span>
                      </a>
                    )}
                  </div>
                </div>

                <div className="order-1 lg:order-2 relative">
                  <div className="relative rounded-xl sm:rounded-2xl overflow-hidden group">
                    <LazyImage
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 sm:h-64 lg:h-80 xl:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-br  opacity-20 group-hover:opacity-30 transition-opacity duration-500`}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          ))}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <div
                key={index}
                className="project-card group relative bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 rounded-xl sm:rounded-2xl overflow-hidden border border-zinc-700/50 hover:border-zinc-600/50 transition-all duration-500 backdrop-blur-sm"
              >
                <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                  <LazyImage
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div
                    className={`absolute inset-0 bg-gradient-to-br  opacity-0 group-hover:opacity-20 transition-opacity duration-500`}
                  ></div>
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

                  <div>
                    <h4 className="text-white font-semibold mb-2 sm:mb-3 text-xs sm:text-sm">
                      Features:
                    </h4>
                    <div className="space-y-1.5 sm:space-y-2">
                      {project.features?.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <div className="w-1 sm:w-1.5 h-1 sm:h-1.5 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex-shrink-0"></div>
                          <span className="text-zinc-400 text-xs sm:text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.slice(0, 3).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
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
                    {project.github !== null && (
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
                    )}

                    {project.demo && (
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
                    )}
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
