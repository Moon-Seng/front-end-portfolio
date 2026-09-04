# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers and potential clients evaluating Moon Seng for full-time engineering roles or freelance and contract work.

## Product Purpose

This portfolio presents Moon Seng's full-stack development experience, capabilities, selected projects, work history, and contact options. It should help visitors assess fit and start a hiring or client conversation.

## Positioning

The portfolio presents a frontend-focused full-stack developer who connects polished React and Next.js interfaces with production-ready Django REST APIs, PostgreSQL data systems, authentication, and delivery infrastructure.

## Operating Context

Visitors scan a single-page portfolio from a web browser, review featured and supporting projects, inspect technical skills and experience, and either follow external project links or submit the contact form. The site supports remote work inquiries worldwide and identifies Moon Seng as based in Myanmar.

## Capabilities and Constraints

- Single-page navigation sections include home, about, projects, experience, testimonials, contact, and footer content.
- Portfolio content is maintained in `src/portfolio-config.ts`.
- The contact form validates name, email, and message fields and sends submissions through EmailJS, with toast feedback.
- The site uses React 18, TypeScript, Vite, Tailwind CSS, GSAP, and ScrollTrigger.
- Existing content, factual links, project assets, and contact destinations must remain accurate unless explicitly changed.
- The animation-rich GSAP experience is a confirmed product constraint for future work.
- The intended platform is web; mobile web is part of the responsive experience.
- No product-specific accessibility standard beyond the existing accessibility intent has been established.

## Brand Commitments

- Name: Moon Seng.
- Role: Full Stack Developer, with a frontend focus.
- Contact: `moonseng.dev@gmail.com`.
- Availability: Open to full-time roles and select freelance work.
- Voice: professional, approachable, technical but accessible, confident but humble.
- Existing identity and visual documentation live in `src/DESIGN.md` and should not be silently replaced during product initialization.

## Evidence on Hand

- Portfolio copy, projects, experience, testimonials, contact details, navigation, and SEO metadata: `src/portfolio-config.ts`.
- Project media: `public/assets/project/`.
- Favicon asset: `public/assets/fav/moon-vector-png-3.png`.
- Functional single-page implementation: `src/App.tsx` and `src/components/`.
- Existing visual system documentation: `src/DESIGN.md`.
- No additional user-provided case-study metrics or independently verified project outcomes are recorded; future work must not fabricate them.

## Product Principles

- Make technical capability easy to evaluate.
- Show end-to-end ownership across interface, API, data, and delivery layers.
- Preserve factual project and professional history.
- Turn interest into a clear, low-friction conversation.
- Keep the experience polished without sacrificing responsive and accessible use.
