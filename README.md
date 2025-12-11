# Moon Seng — Full Stack Portfolio

Modern, animated portfolio built with React, TypeScript, Tailwind CSS, and GSAP to showcase end-to-end product work across frontend, backend, and DevOps.

## Overview

- **Frontend**: React/Next.js patterns, TypeScript, Tailwind UI, GSAP motion.
- **Backend**: Django REST, PostgreSQL, Celery workers, auth/RBAC, API-first delivery.
- **DevOps**: Dockerized workflows, Vercel deploys, CI/CD, monitoring/analytics hooks.
- **Mobile**: React Native/Expo with design-system parity.

## Features

- Smooth GSAP animations with scroll-driven storytelling.
- Editable content via `src/portfolio-config.ts` (hero, skills, projects, experience, contact, SEO).
- Responsive layouts with gradient styling and accessible components.
- Contact form wired for EmailJS with validation and toasts.

## Tech Stack

- **Core**: React 18, TypeScript, Vite, Tailwind CSS.
- **Motion**: GSAP, @gsap/react, ScrollTrigger.
- **UI**: Radix primitives, Lucide icons, class-variance-authority.
- **Tooling**: PostCSS, Autoprefixer, Yarn/NPM scripts.

## Getting Started

```bash
yarn install   # or npm install
yarn dev       # or npm run dev
```

App runs at `http://localhost:5173`.

Build for production:

```bash
yarn build     # or npm run build
```

## Content Editing

Update all portfolio data in `src/portfolio-config.ts`:

- `personalInfo`, `hero`, `skills`, `projects`, `experience`, `testimonials`, `contact`, `seo`, `theme`.

## Project Structure

```
src/
  components/        # Sections and UI elements
  contexts/          # Toast, analytics, etc.
  styles/            # Global styles
  portfolio-config.ts# Content source of truth
  App.tsx            # Root layout
  main.tsx           # Entry point
```

## Contact

Reach me at `moonseng.dev@gmail.com` or via the contact form on the site.

---

Built with care using React, TypeScript, Tailwind, and GSAP.
