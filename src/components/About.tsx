import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Code2, Server, Wrench } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

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
        ".skill-card",
        {
          opacity: 0,
          y: 80,
          scale: 0.9,
          rotationY: 15,
        },
        {
          scrollTrigger: {
            trigger: cardsRef.current,
            start: "top 85%",
            end: "top 70%",
            scrub: true,
          },
          opacity: 1,
          y: 0,
          scale: 1,
          rotationY: 0,
          stagger: 1,
          ease: "power2.out",
        }
      );

      gsap.fromTo(
        ".tech-item",
        {
          opacity: 0,
          scale: 0.7,
          y: 30,
        },
        {
          scrollTrigger: {
            trigger: ".tech-grid",
            start: "top 95%",
            end: "top 80%",
            scrub: 1,
          },
          duration: 0.5,
          opacity: 1,
          scale: 1,
          y: 0,
          stagger: 0.1,
        }
      );
    },
    { scope: sectionRef }
  );

  const techStack = [
    { name: "React", icon: <i className="fab fa-react" title="React"></i> },
    { name: "Next.js", icon: <i className="fab fa-node-js" title="Next.js"></i> },
    { name: "TypeScript", icon: <i className="fab fa-js" title="TypeScript"></i> },
    { name: "Django", icon: <i className="fas fa-leaf" title="Django"></i> },
    { name: "PostgreSQL", icon: <i className="fas fa-database" title="PostgreSQL"></i> },
    { name: "Tailwind CSS", icon: <i className="fas fa-wind" title="Tailwind CSS"></i> },
    { name: "GSAP", icon: <i className="fas fa-wave-square" title="GSAP"></i> },
    { name: "Docker", icon: <i className="fab fa-docker" title="Docker"></i> },
    { name: "Vercel", icon: <i className="fas fa-cloud" title="Vercel"></i> },
    { name: "Celery", icon: <i className="fas fa-seedling" title="Celery"></i> },
    { name: "Redis", icon: <i className="fas fa-bolt" title="Redis"></i> },
    { name: "Playwright", icon: <i className="fas fa-vial" title="Playwright"></i> },
  ];

  const skills = [
    {
      icon: Code2,
      title: "Frontend Engineering",
      technologies: [
        "React / Next.js",
        "TypeScript",
        "Design systems & accessibility",
        "GSAP / Framer Motion",
        "Performance tuning",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Server,
      title: "Backend & Data",
      technologies: [
        "Django REST Framework",
        "PostgreSQL",
        "Authentication & RBAC",
        "API-first architectures",
        "Background workers (Celery)",
      ],
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Wrench,
      title: "DevOps & Delivery",
      technologies: [
        "Docker & CI/CD",
        "Cloud deploys (Vercel)",
        "Monitoring & analytics",
        "Testing with Jest/Playwright",
        "Agile collaboration",
      ],
      color: "from-pink-500 to-cyan-500",
    },
  ];

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
          <p className="text-zinc-400 max-w-4xl mx-auto text-lg leading-relaxed">
            I am a full stack developer who loves shipping products end to end.
            I started by obsessing over frontend polish and animations, then
            leaned into backend architecture, databases, and deployment so every
            feature could launch with confidence. Today I thrive on pairing
            delightful interfaces with reliable APIs, automated testing, and
            repeatable delivery pipelines.
          </p>
        </div>

        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 mt-16 max-w-6xl mx-auto"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card group p-8 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 
                 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-cyan-500/10"
            >
              <div className="flex flex-col items-center text-center">
                <div className="p-5 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-700 mb-5">
                  <skill.icon className="text-cyan-400" size={36} />
                </div>
                <h3 className="text-2xl font-semibold text-white mb-4">
                  {skill.title}
                </h3>
                <div className="space-y-2">
                  {skill.technologies.map((tech, techIndex) => (
                    <div
                      key={techIndex}
                      className="flex items-center justify-center text-zinc-300"
                    >
                      <span className="text-sm">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Technologies I Work With
            </span>
          </h3>
          <div className="tech-grid flex flex-wrap justify-center gap-8">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="tech-item group cursor-default hover:scale-125 transition-transform"
              >
                <div className="text-5xl text-zinc-300 group-hover:text-cyan-400 transition-colors duration-300">
                  {tech.icon}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
