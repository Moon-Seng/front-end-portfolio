// import { useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { useGSAP } from "@gsap/react";
// // import { skills } from "@/portfolio-config";
// import { Code2, Server, Smartphone, Wrench } from "lucide-react";

// gsap.registerPlugin(ScrollTrigger, useGSAP);

// export function About() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const titleRef = useRef<HTMLDivElement>(null);
//   const cardsRef = useRef<HTMLDivElement>(null);

//   useGSAP(
//     () => {
//       // Title animation with smoother easing
//       gsap.fromTo(
//         titleRef.current,
//         { opacity: 0, y: 60, scale: 0.95 },
//         {
//           scrollTrigger: {
//             trigger: titleRef.current,
//             start: "top 85%",
//             end: "top 40%",
//             scrub: 1.5,
//           },
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           ease: "power2.out",
//         }
//       );

//       // Cards stagger animation with enhanced smoothness
//       gsap.fromTo(
//         ".skill-card",
//         {
//           opacity: 0,
//           y: 80,
//           scale: 0.9,
//           rotationY: 15,
//         },
//         {
//           scrollTrigger: {
//             trigger: cardsRef.current,
//             start: "top 85%",
//             end: "top 70%",
//             scrub: true,
//           },
//           opacity: 1,
//           y: 0,
//           scale: 1,
//           rotationY: 0,
//           stagger: 1,
//           ease: "power2.out",
//         }
//       );

//       // Tech stack items with wave-like animation
//       gsap.fromTo(
//         ".tech-item",
//         {
//           opacity: 0,
//           scale: 0.7,
//           y: 30,
//         },
//         {
//           scrollTrigger: {
//             trigger: ".tech-grid",
//             start: "top 95%",
//             end: "top 80%",
//             scrub: 1,
//             markers: true,
//           },
//           duration: 0.5,
//           opacity: 1,
//           scale: 1,
//           y: 0,
//           stagger: 0.1,
//         }
//       );
//     },
//     { scope: sectionRef }
//   );

//   const techStack = [
//     { name: "React", icon: <i className="fab fa-react" title="React"></i> },
//     {
//       name: "JavaScript",
//       icon: <i className="fab fa-js" title="JavaScript"></i>,
//     },
//     { name: "Python", icon: <i className="fab fa-python" title="Python"></i> },
//     { name: "HTML5", icon: <i className="fab fa-html5" title="HTML5"></i> },
//     { name: "CSS3", icon: <i className="fab fa-css3-alt" title="CSS3"></i> },
//     { name: "Git", icon: <i className="fab fa-git-alt" title="Git"></i> },
//     { name: "GitHub", icon: <i className="fab fa-github" title="GitHub"></i> },
//     { name: "Docker", icon: <i className="fab fa-docker" title="Docker"></i> },
//   ];

//   const skills = [
//     {
//       icon: Code2,
//       title: "Frontend",
//       technologies: [
//         "React.js",
//         "JavaScript/TypeScript",
//         "GSAP",
//         "Tailwind CSS",
//         "Responsive Design",
//       ],
//       color: "from-cyan-500 to-blue-500",
//     },
//     {
//       icon: Server,
//       title: "Backend",
//       technologies: [
//         "Django",
//         "PostgreSQL",
//         "Firebase",
//         "REST APIs",
//         "Authentication",
//       ],
//       color: "from-blue-500 to-purple-500",
//     },
//     {
//       icon: Smartphone,
//       title: "Mobile",
//       technologies: [
//         "React Native",
//         "Android/iOS",
//         "Expo",
//         "UI/UX Design",
//         "Cross-platform",
//       ],
//       color: "from-purple-500 to-pink-500",
//     },
//     {
//       icon: Wrench,
//       title: "Tools & More",
//       technologies: [
//         "Git/GitHub",
//         "Docker",
//         "CI/CD",
//         "Agile/Scrum",
//         "Technical Writing",
//       ],
//       color: "from-pink-500 to-cyan-500",
//     },
//   ];

//   return (
//     <section
//       id="about"
//       ref={sectionRef}
//       className="relative py-24 lg:py-32 bg-zinc-950"
//     >
//       <div className="max-w-7xl mx-auto px-6 lg:px-12">
//         {/* Section Title */}
//         <div ref={titleRef} className="text-center mb-16">
//           <h2 className="text-4xl font-bold mb-4">
//             <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
//               My Skills
//             </span>
//           </h2>
//         </div>

//         {/* Skills Grid */}
//         <div
//           ref={cardsRef}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
//         >
//           {skills.map((skill, index) => (
//             <div
//               key={index}
//               className="skill-card group p-6 bg-zinc-900/50 backdrop-blur-sm rounded-2xl border border-zinc-800 hover:border-zinc-600 transition-all duration-300 hover:scale-105"
//             >
//               <div className="text-center mb-6">
//                 <div className="inline-flex p-4 rounded-2xl bg-gradient-to-br from-zinc-800 to-zinc-700 mb-4">
//                   <skill.icon className="text-cyan-400" size={32} />
//                 </div>
//                 <h3 className="text-xl font-semibold text-white mb-2">
//                   {skill.title}
//                 </h3>
//               </div>

//               <div className="space-y-3">
//                 {skill.technologies.map((tech, techIndex) => (
//                   <div
//                     key={techIndex}
//                     className="flex items-center text-zinc-300"
//                   >
//                     <div className="w-2 h-2 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full mr-3"></div>
//                     <span className="text-sm">{tech}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           ))}
//         </div>

//         {/* Tech Stack */}
//         <div>
//           <h3 className="text-center text-white text-2xl font-semibold mb-8">
//             <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
//               Technologies I Work With
//             </span>
//           </h3>
//           <div className="tech-grid flex flex-wrap justify-center gap-8">
//             {techStack.map((tech, index) => (
//               <div
//                 key={index}
//                 className="tech-item group cursor-default hover:scale-125"
//               >
//                 <div className="text-5xl group-hover:scale-110 transition-transform duration-300">
//                   {tech.icon}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Code2, Wrench } from "lucide-react";

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
    // Frontend Core
    { name: "React", icon: <i className="fab fa-react" title="React"></i> },
    {
      name: "Next.js",
      icon: <i className="fab fa-node-js" title="Next.js"></i>,
    },
    {
      name: "JavaScript",
      icon: <i className="fab fa-js" title="JavaScript"></i>,
    },
    {
      name: "MUI",
      icon: <i className="fas fa-layer-group" title="Material UI"></i>,
    },
    { name: "HTML5", icon: <i className="fab fa-html5" title="HTML5"></i> },
    { name: "CSS3", icon: <i className="fab fa-css3" title="CSS3"></i> },

    // Tools & Workflow
    { name: "Git", icon: <i className="fab fa-git-alt" title="Git"></i> },
    { name: "GitHub", icon: <i className="fab fa-github" title="GitHub"></i> },
    { name: "Docker", icon: <i className="fab fa-docker" title="Docker"></i> },
    {
      name: "Playwright",
      icon: <i className="fas fa-vial" title="Playwright"></i>,
    },
  ];

  const skills = [
    {
      icon: Code2,
      title: "Frontend Development",
      technologies: [
        "React.js / Next.js",
        "JavaScript & TypeScript",
        "GSAP Animations",
        "Tailwind CSS / MUI",
        "Responsive UI Design",
      ],
      color: "from-cyan-500 to-blue-500",
    },
    {
      icon: Wrench,
      title: "Tools & Workflow",
      technologies: [
        "Git / GitHub",
        "Docker",
        "Playwright / Jest",
        "Agile & Scrum",
        "Clean Code Practices",
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
        {/* Section Title */}
        <div ref={titleRef} className="mb-10">
          <h2 className="text-4xl font-bold mb-4">
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>
          <p className="text-zinc-400 max-w-4xl mx-auto text-lg leading-relaxed">
            Hi, I’m a frontend developer who began my coding journey during the
            COVID lockdowns. What started as a simple interest in websites
            quickly turned into a deep passion for creating interactive and
            visually appealing digital experiences. I love crafting smooth
            animations with GSAP and bringing life to interfaces through
            thoughtful motion and design. Outside of development, I’m a big fan
            of Counter-Strike 2, and I enjoy exploring new technologies,
            learning design principles, and constantly improving my craft to
            deliver better user experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 mt-16 max-w-4xl mx-auto"
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

        {/* Tech Stack */}
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
