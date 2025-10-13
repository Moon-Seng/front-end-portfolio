import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Code2, Smartphone, Palette, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Title animation with smoother easing
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

      // Cards stagger animation with enhanced smoothness
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

      // Tech stack items with wave-like animation
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
            start: "top 85%",
            end: "top 60%",
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

  const skills = [
    {
      icon: Code2,
      title: "Web Development",
      description:
        "Building responsive and performant web applications with React and modern JavaScript.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Creating native-like mobile experiences with React Native for iOS and Android.",
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description:
        "Crafting beautiful interfaces with Tailwind CSS and attention to user experience.",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Zap,
      title: "Animations",
      description:
        "Bringing designs to life with smooth, engaging animations using GSAP.",
      color: "from-pink-500 to-cyan-500",
    },
  ];

  const techStack = [
    "React",
    "React Native",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "GSAP",
    "Next.js",
    "Redux",
    "Git",
    "Figma",
    "Expo",
    "HTML5",
    "CSS3",
    "REST APIs",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-zinc-950"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto">
            I'm a full-stack developer who found my passion in frontend
            development. I specialize in creating beautiful, interactive
            experiences that users love.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {skills.map((skill, index) => (
            <div
              key={index}
              className="skill-card group relative p-6 bg-zinc-900 rounded-2xl border border-zinc-800 hover:border-zinc-600 hover:bg-zinc-800 transition-all duration-300 overflow-hidden hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/10"
            >
              {/* Gradient Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-80 group-hover:opacity-100 transition-opacity duration-300`}
              ></div>

              <div className="relative z-10">
                <div
                  className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${skill.color} mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <skill.icon className="text-white" size={24} />
                </div>
                <h3 className="text-white mb-2 group-hover:text-cyan-300 transition-colors duration-300">
                  {skill.title}
                </h3>
                <p className="text-zinc-400 text-sm group-hover:text-zinc-300 transition-colors duration-300">
                  {skill.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack */}
        <div>
          <h3 className="text-center text-white mb-8">Tech Stack</h3>
          <div className="tech-grid flex flex-wrap justify-center gap-3">
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="tech-item px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-300 hover:border-cyan-400 hover:text-cyan-400 hover:bg-zinc-800 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 cursor-default"
              >
                {tech}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
