# 🚀 Front-End Developer Portfolio

A modern, animated portfolio website built with React, TypeScript, and GSAP. Features a dark theme with vibrant gradients and smooth animations to showcase frontend development skills.

## 📋 Project Overview

This portfolio demonstrates expertise in modern web development with a focus on:

- **React & TypeScript** for robust component architecture
- **GSAP animations** for engaging user interactions
- **Tailwind CSS** for responsive, utility-first styling
- **Vite** for fast development and optimized builds

## 🎨 Design System

### Mood Board & Concept

- **Style**: Modern, minimalist, professional yet creative
- **Theme**: Dark mode with vibrant cyan-to-purple gradients
- **Focus**: Animation-rich, interactive experience
- **Philosophy**: Showcase technical skills through visual storytelling

### Color Palette

```css
/* Primary Colors */
--background: #09090b     /* Deep dark base */
--surface: #18181b        /* Card backgrounds */
--border: #27272a         /* Subtle dividers */

/* Gradient Accents */
--cyan: #22d3ee          /* Primary accent */
--blue: #60a5fa          /* Gradient middle */
--purple: #a855f7        /* Gradient end */
--pink: #ec4899          /* Highlight color */

/* Text Colors */
--text-primary: #fafafa   /* Main text */
--text-secondary: #a1a1aa /* Muted text */
```

## 🗺️ Site Map

```
Portfolio Website
├── Hero Section - Animated introduction with CTA buttons
├── About Section - Skills grid and tech stack showcase
├── Projects Section - Featured work with live demos
├── Experience Section - Professional timeline
├── Contact Section - Interactive contact form
└── Footer - Social links and site info
```

## 📐 Wireframe Structure

### Desktop Layout (1440px+)

- **Navigation**: Fixed header with progress indicator
- **Hero**: Full-screen landing with gradient background
- **About**: 4-column skills grid with animated cards
- **Projects**: 3-column project showcase with hover effects
- **Experience**: Vertical timeline with animated reveals
- **Contact**: Two-column layout (form + contact info)

### Mobile Layout (< 768px)

- Single-column responsive design
- Hamburger navigation menu
- Stacked content sections
- Touch-optimized interactions

## 🛠️ Tech Stack

### Core Technologies

- **React 18** - Component-based UI library
- **TypeScript** - Type-safe JavaScript
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework

### Animation & Interactions

- **GSAP** - Professional-grade animations
- **@gsap/react** - React integration for GSAP
- **ScrollTrigger** - Scroll-based animations

### UI Components

- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icon library
- **Class Variance Authority** - Component variant management

### Development Tools

- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixes
- **ESLint & Prettier** - Code formatting and linting

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or Yarn package manager

### Installation

#### With npm:

```bash
npm install
npm run dev
```

#### With Yarn:

```bash
yarn install
yarn dev
```

The development server will start at `http://localhost:5173`

### Build for Production

```bash
npm run build
# or
yarn build
```

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/           # Reusable UI components
│   ├── About.tsx     # Skills and tech stack section
│   ├── Contact.tsx   # Contact form and info
│   ├── Experience.tsx # Professional timeline
│   ├── Footer.tsx    # Site footer
│   ├── Hero.tsx      # Landing section
│   ├── Navigation.tsx # Header navigation
│   └── Projects.tsx  # Portfolio showcase
├── styles/
│   └── globals.css   # Global styles and Tailwind
├── guidelines/       # Development guidelines
├── App.tsx          # Main application component
├── main.tsx         # Application entry point
└── portfolio-config.ts # Customizable content
```

## ⚙️ Customization

All content is configurable through `src/portfolio-config.ts`:

- **Personal Information** - Name, title, bio, contact details
- **Skills & Tech Stack** - Add/remove technologies and skills
- **Projects** - Showcase your work with images and links
- **Experience** - Professional history and education
- **Social Links** - GitHub, LinkedIn, email, etc.
- **Theme Colors** - Customize gradient colors and styling

## ✨ Key Features

### Animations

- **Page Load**: Staggered text reveals and element animations
- **Scroll Triggers**: Sections animate in as user scrolls
- **Hover Effects**: Interactive cards and buttons with smooth transitions
- **Timeline**: Animated experience timeline with growing connector line

### Responsive Design

- Mobile-first approach with Tailwind breakpoints
- Optimized layouts for all screen sizes
- Touch-friendly interactions on mobile devices

### Performance

- **Vite** for fast development and optimized builds
- **Lazy Loading** with GSAP ScrollTrigger
- **Component Architecture** for code splitting
- **Optimized Images** with fallback handling

## 🎯 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](../../issues).

## 📞 Contact

For questions or collaboration opportunities, reach out through the contact form on the portfolio or connect via social media.

---

**Built with ❤️ using React, TypeScript, and GSAP**
