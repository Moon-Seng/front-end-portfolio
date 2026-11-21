# Moon Seng Portfolio - Field Manual Design System

## Direction

The portfolio is a field manual for shipped systems. It presents career progression as a route, treats projects as system records, and makes seniority and delivery ownership legible before decorative expression. The interface is an Experience surface with hireability first.

## Visual World

- Graphite ink: `#1c2428`
- Documentation paper: `#eee9de`
- Light paper: `#f7f4ec`
- Mineral blue: `#176b83`
- Signal orange: `#e15f32`
- Status yellow: `#e9b949`
- Muted ink: `#657176`
- Display face: Barlow Condensed, used for records, labels, and headings
- Body face: DM Sans, used for readable copy and form input

The surface uses ruled coordinate lines, stamped status marks, route indexes, utility labels, and documentation surfaces. Avoid gradients, glass, decorative neon, generic icon cards, and interface chrome that does not carry information.

## Information Architecture

- Introduction: identity, current role, proof statement, and direct actions
- Career route: selectable work and education records with achievements and stack
- System records: featured and archived projects with media and expandable records
- Capability index: technical areas and technologies
- Field notes: factual testimonials
- Open channel: contact form, location, availability, and email

## Interaction

- The career route is the primary navigation interaction. Pointer selection and keyboard tab navigation update the active record.
- Project records open in a protected overlay with media, features, and verified external links.
- GSAP orchestrates the opening sequence; CSS handles small hover and record transitions.
- Reduced-motion users receive the same content and states without movement.
- Forms expose inline validation, loading, success, and failure feedback through the existing toast system.

## Responsive Rules

- Desktop uses a two-column route/detail composition and editorial project grid.
- Mobile collapses the route into a sequential index, stacks system records, and keeps all actions touch-sized.
- The navigation becomes a disclosure menu below 800px.
- Long titles and body copy remain fluid and avoid fixed-height text containers.

## Content Rules

Use factual content from `src/portfolio-config.ts`. Preserve existing project media, copy, links, testimonials, and contact destinations. New case-study outcomes, process details, and role claims require verified source material and must not be invented.
