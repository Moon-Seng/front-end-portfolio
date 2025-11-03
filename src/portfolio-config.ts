/**
 * Portfolio Configuration File
 *
 * Edit this file to customize all content, colors, and settings for your portfolio.
 * This makes it easy to update your portfolio without diving into component code.
 */

// ============================================
// PERSONAL INFORMATION
// ============================================

import { Code2, Server, Smartphone, Wrench } from "lucide-react";

export const personalInfo = {
  name: "Frontend Developer",
  title: "Frontend Developer",
  tagline: "Crafting beautiful, interactive web and mobile experiences",
  bio: "I'm a passionate frontend developer specializing in creating beautiful, interactive experiences that users love. With expertise in React, React Native, and modern web technologies.",
  location: "Remote / Worldwide",
  email: "hello@example.com",
  availability: {
    status: "available",
    message: "Available for work",
  },
};

// ============================================
// SOCIAL LINKS
// ============================================

export const socialLinks = {
  github: "https://github.com/Moon-Seng",
  linkedin: "https://www.linkedin.com/in/moon-seng/",
  email: "mailto:moonseng.dev@gmail.com",
};

// ============================================
// HERO SECTION
// ============================================

export const hero = {
  greeting: "Hi, I'm",
  title: "Frontend Developer",
  description:
    "Crafting beautiful, interactive web and mobile experiences with React, React Native, and Tailwind CSS. Specialized in creating smooth animations with GSAP.",
  primaryCTA: {
    text: "View My Work",
    href: "#projects",
  },
  secondaryCTA: {
    text: "Get In Touch",
    href: "#contact",
  },
};

// ============================================
// SKILLS / ABOUT SECTION
// ============================================

export const skills = [
  {
    icon: Code2,
    title: "Frontend",
    technologies: [
      "React.js",
      "JavaScript/TypeScript",
      "GSAP",
      "Tailwind CSS",
      "Responsive Design",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Server,
    title: "Backend",
    technologies: [
      "Django",
      "PostgreSQL",
      "Firebase",
      "REST APIs",
      "Authentication",
    ],
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Smartphone,
    title: "Mobile",
    technologies: [
      "React Native",
      "Android/iOS",
      "Expo",
      "UI/UX Design",
      "Cross-platform",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Wrench,
    title: "Tools & More",
    technologies: [
      "Git/GitHub",
      "Docker",
      "CI/CD",
      "Agile/Scrum",
      "Technical Writing",
    ],
    color: "from-pink-500 to-cyan-500",
  },
];

// ============================================
// TECH STACK
// ============================================

// ============================================
// PROJECTS
// ============================================

export const projects = [
  {
    title: "Spylt",
    subtitle: "Advanced Modern Aniamtion Website",
    description:
      "An award-winning interactive website built with modern web technologies, featuring stunning GSAP animations, smooth scrolling effects, and responsive design. This project demonstrates advanced animation techniques and UI interactions suitable for Awwwards recognition.",
    features: [
      "Advanced GSAP animations and timelines",
      "Video backgrounds and interactive elements",
      "Fully responsive design",
      "ScrollTrigger animations",
      "Custom clip-path effects",
      "Interactive flavor slider",
    ],
    image: "../assets/project/spylt.mp4",
    tags: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
    github: "https://github.com/Moon-Seng/Spylt",
    demo: "https://spylt-animation.netlify.app/",
    gradient: "from-cyan-500 to-blue-500",
    featured: true,
  },
  {
    title: "Velvet Pour",
    subtitle: "An Animated Bar Website",
    description:
      "Build a stunning GSAP-powered cocktail website using React and Tailwind CSS—a modern, scroll-driven experience packed with advanced animations.",
    features: [
      "SplitText Animations",
      "ScrollTrigger Effects",
      "Parallax Scrolling",
      "Image Masking Effects",
      "Responsive Design",
    ],
    image: "../assets/project/velvet-pour.png",
    tags: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
    github: "https://github.com/Moon-Seng/gsap-cocktails",
    demo: "https://gsap-cocktails-moon.netlify.app/",
    gradient: "from-purple-500 to-pink-500",
    featured: false,
  },
  {
    title: "Salespoint",
    subtitle: "Full-Stack Shopping Experience",
    description:
      "A comprehensive e-commerce platform featuring advanced product filtering, real-time inventory management, secure payment integration, and personalized user experiences. Implemented with modern React patterns and optimized for performance.",
    features: [
      "Advanced Search & Filtering",
      "Real-time Cart Updates",
      "Secure Payment Gateway",
      "Admin Dashboard",
      "Mobile-First Design",
    ],
    image: "../assets/project/salespoint.png",
    tags: ["React", "React Native", "Django", "Firebase", "Celery"],
    github: null,
    demo: "https://app.salespoint.com",
    gradient: "from-emerald-500 to-teal-500",
    featured: false,
  },
  {
    title: "PEP Myanmar",
    subtitle: "E-commerce Platform for Diary Product",
    description:
      "A comprehensive  e-commerce platform featuring advanced product filtering, ordering system , payment system , notification system and personalized user experience.",
    features: [
      "Real-time Collaboration",
      "Advanced Search & Filtering",
      "Real-time Cart Updates",
      "Secure Payment Gateway",
      "Mobile-First Design",
    ],
    image: "../assets/project/pep.png",
    tags: ["React", "Tailwind CSS", "MUI", "Axios"],
    github: null,
    demo: "https://www.pepmyanmardairy.com/",
    gradient: "from-orange-500 to-red-500",
    featured: false,
  },
  {
    title: "Project FairyTales",
    subtitle: "Cross-Platform E-commerce Application",
    description:
      "A comprehensive  e-commerce platform featuring advanced product category filtering, loyalty, wallet, coupon, notification system and personalized user experience.",
    features: [
      "Advance Three Product Category Filtering",
      "Loyalty System",
      "Wallet System",
      "Coupon Management",
      "Cross Platfrom Application",
    ],
    image: "../assets/project/fairytales.png",
    tags: ["Expo", "Tailwind CSS", "React Native Paper", "EAS"],
    github: null,
    demo: null,
    gradient: "from-yellow-500 to-orange-500",
    featured: false,
  },
];

// ============================================
// EXPERIENCE & EDUCATION
// ============================================

export const experience = [
  {
    type: "work",
    title: "Senior Frontend Developer",
    company: "Axiom Myanmar",
    period: "2024 - Present",
    description:
      "Leading frontend development for web and mobile applications. Implementing GSAP animations and mentoring junior developers.",
    achievements: [
      "Improved app performance by writing Unit Testing",
      "Led migration from React Native to Expo",
      "Implemented design system",
    ],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "360 Digital",
    period: "2023 - 2024",
    description:
      "Developed full-stack applications while discovering passion for frontend development and animations.",
    achievements: [
      "Built Full Stack Web Applications and Cross Platform Mobile Application",
      "Specialized in React, React Native, Django",
      "Using Celery to DJango Backend",
    ],
  },
  {
    type: "work",
    title: "Front-end Developer",
    company: "360 Digital",
    period: "2022 - 2023",
    description:
      "Developed font-end applications for various E-commerce Projects",
    achievements: [
      "Built 15+ project features",
      "Specialized in React , Tailwind and MUI ",
      "Introduced Typescript to the team",
    ],
  },
  {
    type: "education",
    title: "Professional Diploma in Computing and Information Technology",
    company: "RMIT",
    period: "2022 - 2023",
    description:
      "Focused on communication technologies, business information technology, and computing.",
    achievements: [
      "Graduated with honors",
      "Thesis on web development",
      "completed multiple exam",
    ],
  },
];

// ============================================
// Testimonial
// ============================================

export const testimonials = [
  {
    name: "Aung Ye Naung",
    role: "Product Manager",
    company: "Axiom",
    content:
      "Working with this developer was a smooth and professional experience. Every part of the frontend was carefully crafted with a clear understanding of design and user flow. The attention to detail and responsiveness really elevated the entire project.",
  },
  {
    name: "Myat Thuyein Tun",
    role: "Project Manager",
    company: "360 Digital",
    content:
      "An extremely talented frontend developer who consistently delivers beyond expectations. The communication was excellent, and every milestone was met on time with clean, scalable code and beautiful UI results.",
  },
  {
    name: "Ye Htet",
    role: "Senior UI/UX Designer",
    company: "360 Digital",
    content:
      "It’s rare to find a developer who understands both design and implementation so well. The collaboration process was seamless, and the final product perfectly matched the design vision with great performance and usability.",
  },
];

// ============================================
// CONTACT INFORMATION
// ============================================

export const contact = {
  title: "Let's Work Together",
  description:
    "Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.",
  email: {
    address: "hello@example.com",
    label: "Email",
  },
  location: {
    text: "Remote / Worldwide",
    label: "Location",
  },
};

// ============================================
// THEME COLORS
// ============================================

export const theme = {
  gradientFrom: "cyan-400",
  gradientVia: "blue-400",
  gradientTo: "purple-500",
  accent: "cyan-400",
  background: {
    primary: "zinc-950",
    secondary: "zinc-900",
    tertiary: "zinc-800",
  },
  text: {
    primary: "white",
    secondary: "zinc-400",
    accent: "cyan-400",
  },
};

// ============================================
// NAVIGATION
// ============================================

export const navigation = {
  logo: "dev.",
  items: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ],
};

// ============================================
// FOOTER
// ============================================

export const footer = {
  brand: {
    logo: "dev.",
    tagline:
      "Frontend developer crafting beautiful web and mobile experiences with passion for animations.",
  },
  copyright: "© 2025 All rights reserved.",
  madewith: "Made with ❤️ using React, Tailwind & GSAP",
};

// ============================================
// SEO & META
// ============================================

export const seo = {
  title: "Frontend Developer Portfolio",
  description:
    "Portfolio showcasing frontend development work with React, React Native, and GSAP animations",
  keywords:
    "frontend developer, react, react native, tailwind, gsap, web development, mobile development",
  author: "Frontend Developer",
};
