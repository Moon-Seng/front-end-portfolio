/**
 * Portfolio Configuration File
 * 
 * Edit this file to customize all content, colors, and settings for your portfolio.
 * This makes it easy to update your portfolio without diving into component code.
 */

// ============================================
// PERSONAL INFORMATION
// ============================================

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
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  email: "mailto:hello@example.com",
};

// ============================================
// HERO SECTION
// ============================================

export const hero = {
  greeting: "Hi, I'm",
  title: "Frontend Developer",
  description: "Crafting beautiful, interactive web and mobile experiences with React, React Native, and Tailwind CSS. Specialized in creating smooth animations with GSAP.",
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
    icon: "Code2",
    title: "Web Development",
    description: "Building responsive and performant web applications with React and modern JavaScript.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: "Smartphone",
    title: "Mobile Development",
    description: "Creating native-like mobile experiences with React Native for iOS and Android.",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: "Palette",
    title: "UI/UX Design",
    description: "Crafting beautiful interfaces with Tailwind CSS and attention to user experience.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: "Zap",
    title: "Animations",
    description: "Bringing designs to life with smooth, engaging animations using GSAP.",
    gradient: "from-pink-500 to-cyan-500",
  },
];

// ============================================
// TECH STACK
// ============================================

export const techStack = [
  "React",
  "React Native",
  "TypeScript",
  "JavaScript",
  "Tailwind CSS",
  "GSAP",
  "Next.js",
  "Vue.js",
  "Socket.io",
  "MongoDB",
  "Firebase",
  "Expo",
  "D3.js",
  "Chart.js",
  "WebSocket",
  "Stripe API",
  "CoinGecko API",
  "ML Kit",
  "Vuex",
  "Redux",
];

// ============================================
// PROJECTS
// ============================================

export const projects = [
  {
    title: "E-Commerce Platform",
    subtitle: "Full-Stack Shopping Experience",
    description: "A comprehensive e-commerce platform featuring advanced product filtering, real-time inventory management, secure payment integration, and personalized user experiences. Implemented with modern React patterns and optimized for performance.",
    features: [
      "Advanced Search & Filtering",
      "Real-time Cart Updates",
      "Secure Payment Gateway",
      "Admin Dashboard",
      "Mobile-First Design",
    ],
    image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGV8ZW58MXx8fHwxNzYwMTU0MjY5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "TypeScript", "Tailwind CSS", "GSAP", "Stripe API"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-cyan-500 to-blue-500",
    featured: true,
  },
  {
    title: "FitTrack Pro",
    subtitle: "Cross-Platform Fitness App",
    description: "A comprehensive fitness tracking application with AI-powered workout recommendations, social challenges, and detailed analytics. Built with React Native for seamless cross-platform performance.",
    features: [
      "AI Workout Plans",
      "Progress Analytics",
      "Social Challenges",
      "Offline Mode",
      "Wearable Integration",
    ],
    image: "https://images.unsplash.com/photo-1609921212029-bb5a28e60960?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXNpZ258ZW58MXx8fHwxNzYwMTcwMzM5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React Native", "TypeScript", "Expo", "Firebase", "ML Kit"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-purple-500 to-pink-500",
    featured: false,
  },
  {
    title: "Analytics Dashboard",
    subtitle: "Real-Time Data Visualization",
    description: "An interactive analytics dashboard providing real-time insights with beautiful data visualizations, customizable widgets, and advanced filtering capabilities. Optimized for performance with large datasets.",
    features: [
      "Real-time Updates",
      "Custom Widgets",
      "Data Export",
      "Advanced Filters",
      "Multi-tenant Support",
    ],
    image: "https://images.unsplash.com/photo-1630283017802-785b7aff9aac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3b3Jrc3BhY2UlMjBkZXNrfGVufDF8fHx8MTc2MDE2NTI2OXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["React", "D3.js", "GSAP", "WebSocket", "Chart.js"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-emerald-500 to-teal-500",
    featured: false,
  },
  {
    title: "TaskFlow Manager",
    subtitle: "Team Collaboration Platform",
    description: "A comprehensive project management tool with real-time collaboration, task tracking, and team communication features. Built for modern teams with intuitive design.",
    features: [
      "Real-time Collaboration",
      "Task Management",
      "Team Chat",
      "File Sharing",
      "Progress Tracking",
    ],
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3NjAxNzAzMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Next.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    github: "https://github.com",
    demo: "https://example.com",
    gradient: "from-orange-500 to-red-500",
    featured: false,
  },
  {
    title: "CryptoTracker Pro",
    subtitle: "Cryptocurrency Portfolio",
    description: "Advanced cryptocurrency tracking application with portfolio management, price alerts, and market analysis. Features real-time data and beautiful charts.",
    features: [
      "Portfolio Tracking",
      "Price Alerts",
      "Market Analysis",
      "News Feed",
      "Trading Signals",
    ],
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9jdXJyZW5jeXxlbnwxfHx8fDE3NjAxNzAzMzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Vue.js", "Vuex", "CoinGecko API", "Chart.js"],
    github: "https://github.com",
    demo: "https://example.com",
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
    company: "Tech Company",
    period: "2023 - Present",
    description: "Leading frontend development for web and mobile applications. Implementing GSAP animations and mentoring junior developers.",
    achievements: [
      "Improved app performance by 40%",
      "Led migration to React Native",
      "Implemented design system",
    ],
  },
  {
    type: "work",
    title: "Full Stack Developer",
    company: "Digital Agency",
    period: "2021 - 2023",
    description: "Developed full-stack applications while discovering passion for frontend development and animations.",
    achievements: [
      "Built 15+ client projects",
      "Specialized in React & React Native",
      "Introduced GSAP to the team",
    ],
  },
  {
    type: "education",
    title: "Computer Science Degree",
    company: "University",
    period: "2017 - 2021",
    description: "Focused on web technologies, mobile development, and user interface design.",
    achievements: [
      "Graduated with honors",
      "Thesis on web animations",
      "Built multiple projects",
    ],
  },
];

// ============================================
// CONTACT INFORMATION
// ============================================

export const contact = {
  title: "Let's Work Together",
  description: "Have a project in mind? I'd love to hear about it. Send me a message and let's create something amazing.",
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
    tagline: "Frontend developer crafting beautiful web and mobile experiences with passion for animations.",
  },
  copyright: "© 2025 All rights reserved.",
  madewith: "Made with ❤️ using React, Tailwind & GSAP",
};

// ============================================
// SEO & META
// ============================================

export const seo = {
  title: "Frontend Developer Portfolio",
  description: "Portfolio showcasing frontend development work with React, React Native, and GSAP animations",
  keywords: "frontend developer, react, react native, tailwind, gsap, web development, mobile development",
  author: "Frontend Developer",
};
