/**
 * Portfolio Configuration File
 *
 * Edit this file to customize all content, colors, and settings for your portfolio.
 * This makes it easy to update your portfolio without diving into component code.
 */

import { Code2, Server, Smartphone, Wrench } from "lucide-react";

// ============================================
// PERSONAL INFORMATION
// ============================================

export const personalInfo = {
  name: "Moon Seng",
  title: "Full Stack Developer",
  tagline:
    "Shipping production-ready web, mobile, and API experiences end to end",
  bio: "Full stack engineer building performant interfaces and resilient backends with React/Next.js, Django, and PostgreSQL. I love pairing smooth UX with reliable infrastructure.",
  location: "Remote / Worldwide",
  email: "moonseng.dev@gmail.com",
  availability: {
    status: "available",
    message: "Open to full-time roles and select freelance",
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
  greeting: "Hi, I'm Moon",
  title: "Full Stack Developer",
  description:
    "I design, build, and ship products across the stack - React/Next.js frontends, Django REST APIs, Postgres databases, and cloud-native delivery with CI/CD.",
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
    title: "Frontend Engineering",
    technologies: [
      "React & Next.js",
      "TypeScript",
      "Design systems & accessibility",
      "GSAP / Framer Motion",
      "Performance optimization",
    ],
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Server,
    title: "Backend & APIs",
    technologies: [
      "Django REST Framework",
      "PostgreSQL",
      "Authentication & RBAC",
      "REST & GraphQL APIs",
      "Background workers (Celery)",
    ],
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Smartphone,
    title: "Mobile & Cross-platform",
    technologies: [
      "React Native / Expo",
      "Offline-first patterns",
      "App Store & Play Store delivery",
      "Design system parity",
      "Push notifications",
    ],
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Wrench,
    title: "DevOps & Delivery",
    technologies: [
      "Docker & CI/CD",
      "Cloud deploys (Vercel)",
      "Monitoring & analytics",
      "Testing (Jest/Playwright)",
      "Agile collaboration",
    ],
    color: "from-pink-500 to-cyan-500",
  },
];

// ============================================
// PROJECTS
// ============================================

export const projects = [
  {
    title: "Spylt",
    subtitle: "Immersive Launch Experience",
    description:
      "An award-style interactive launch site built end to end with a headless CMS pipeline, custom API hooks, and GSAP-driven motion design. Tuned for accessibility, performance, and observability.",
    features: [
      "Headless CMS integration for editable content",
      "Custom API layer for telemetry and form capture",
      "Advanced GSAP timelines and ScrollTrigger",
      "LCP-focused image and video delivery",
      "Interactive product configurator",
      "Automated deployments with preview builds",
    ],
    image: "/assets/project/spylt.mp4",
    tags: ["React", "TypeScript", "Tailwind CSS", "GSAP"],
    github: "https://github.com/Moon-Seng/Spylt",
    demo: "https://spylt-animation.netlify.app/",
    gradient: "from-cyan-500 to-blue-500",
    featured: true,
  },
  {
    title: "Velvet Pour",
    subtitle: "Animated Bar & Reservations",
    description:
      "A GSAP-powered hospitality experience with serverless reservation flows, menu management, and analytics-ready event tracking layered on top of a fully responsive UI.",
    features: [
      "SplitText and ScrollTrigger storytelling",
      "Serverless reservation handling with email confirmations",
      "Menu content managed via API",
      "Event tracking for conversions",
      "Responsive design with dark/light accents",
    ],
    image: "/assets/project/velvet-pour.png",
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
      "A comprehensive e-commerce platform covering multi-tenant storefronts, real-time inventory, secure payments, and operational dashboards. Built with modern React patterns and battle-tested backend services.",
    features: [
      "Advanced search & filtering with server-driven data",
      "Real-time cart and inventory sync",
      "Payment orchestration with webhooks",
      "Admin dashboard for merchandising and ops",
      "Mobile-first design and API-first architecture",
    ],
    image: "/assets/project/salespoint.png",
    tags: ["React", "React Native", "Django", "Firebase", "Celery"],
    github: null,
    demo: "https://app.salespoint.com.mm",
    gradient: "from-emerald-500 to-teal-500",
    featured: false,
  },
  {
    title: "PEP Myanmar",
    subtitle: "E-commerce Platform for Dairy Products",
    description:
      "A dairy vertical e-commerce platform with ordering, payments, notifications, and a robust admin experience for fulfillment and merchandising.",
    features: [
      "Advanced search & filtering",
      "Order management and fulfillment workflows",
      "Real-time cart updates and promotions",
      "Secure payment gateway integration",
      "Mobile-first design with reusable UI kit",
    ],
    image: "/assets/project/pep.png",
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
      "A cross-platform shopping app with category intelligence, loyalty, wallet, coupons, and a notification system - built once with React Native and delivered to iOS and Android.",
    features: [
      "Advanced three-level product category filtering",
      "Loyalty program and wallet balances",
      "Coupon management and redemptions",
      "Notification and messaging center",
      "Cross-platform delivery with shared UI kit",
    ],
    image: "/assets/project/fairytales.png",
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
    title: "Senior Full Stack Developer",
    company: "Axiom Myanmar",
    period: "2024 - Present",
    description:
      "Leading end-to-end development for web and mobile applications, pairing polished UI with resilient APIs and deployment pipelines.",
    achievements: [
      "Improved app performance with API caching and bundle budgets",
      "Led migration from React Native to Expo with shared design system",
      "Introduced CI/CD and observability for faster, safer releases",
    ],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "360 Digital",
    period: "2023 - 2024",
    description:
      "Delivered full-stack applications spanning React/Next.js frontends and Django services with modern DevOps practices.",
    achievements: [
      "Built full-stack web apps and cross-platform mobile experiences",
      "Specialized in React, React Native, Django, and Celery workers",
      "Implemented role-based access and payment integrations",
    ],
  },
  {
    type: "work",
    title: "Frontend Developer",
    company: "360 Digital",
    period: "2022 - 2023",
    description:
      "Developed frontend applications for multiple e-commerce products while collaborating closely with backend teams.",
    achievements: [
      "Built 15+ features with TypeScript, React, Tailwind, and MUI",
      "Partnered with backend teams on API contracts and performance",
      "Introduced TypeScript and linting to improve code quality",
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
      "Completed multiple certifications",
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
      "Working with this developer was a smooth and professional experience. The frontend was crafted with a clear understanding of design and user flow, and the API integrations were reliable from day one.",
  },
  {
    name: "Myat Thuyein Tun",
    role: "Project Manager",
    company: "360 Digital",
    content:
      "An extremely talented full stack developer who consistently delivers beyond expectations. Communication was excellent, milestones were met on time, and the code was clean, scalable, and well-tested.",
  },
  {
    name: "Ye Htet",
    role: "Senior UI/UX Designer",
    company: "360 Digital",
    content:
      "It's rare to find a developer who understands both design and implementation so well. The collaboration was seamless, and the final product matched the design vision with great performance and usability.",
  },
];

// ============================================
// CONTACT INFORMATION
// ============================================

export const contact = {
  title: "Let's Work Together",
  description:
    "Need a partner to ship a product end to end? I design APIs, build interfaces, and handle deployment so you can launch with confidence.",
  email: {
    address: "moonseng.dev@gmail.com",
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
      "Full stack developer building resilient backends and delightful frontends.",
  },
  copyright: "(c) 2025 All rights reserved.",
  madewith: "Made with care using React, Tailwind & GSAP",
};

// ============================================
// SEO & META
// ============================================

export const seo = {
  title: "Full Stack Developer Portfolio",
  description:
    "Portfolio showcasing full stack development across React, Next.js, Django, PostgreSQL, and cloud-native delivery.",
  keywords:
    "full stack developer, react, next.js, django, tailwind, gsap, postgres, web development, mobile development, api development",
  author: "Moon Seng",
};
