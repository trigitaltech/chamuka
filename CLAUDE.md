# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Official portfolio website for Chief Chamuka VI (Chisamba, Zambia). Currently in requirements/planning phase — the PRD is in `docs/Chief_Chamuka_VI_PRD.docx`. No source code has been written yet.

**Type:** Single-Page Application with 5 full-viewport scroll-snap sections (Home/Hero, About, Resources, Gallery/Events, Contact).

## Planned Tech Stack

- **Framework:** Next.js 14+ (App Router) with TypeScript
- **Styling:** Tailwind CSS with CSS custom properties for dual light/dark theming
- **Animation:** Framer Motion (scroll-triggered, parallax, stagger reveals)
- **CMS:** Sanity.io or Strapi (headless, for non-technical content updates)
- **Forms:** React Hook Form + Resend
- **Media:** Cloudinary or Imgix (responsive image optimization)
- **Hosting:** Vercel

## Design System

**Colors:**
- Primary: `#1B4332` (Forest Green) / dark mode: `#A7D5C0` (Mint)
- Accent: `#D4A843` (Gold) — used in both modes
- Background: `#F8FAF9` light / `#0B1F13` dark
- Surface: `#FFFFFF` light / `#142B1F` dark

**Typography:**
- Display/Headings: Playfair Display (700/600)
- Body: DM Sans or Outfit (400)

**Theme:** Persistent light/dark toggle with 500ms CSS transitions.

## Architecture (5 Sections)

1. **Hero** — Full-viewport cinematic parallax (0.5x scroll speed), two CTAs, quick-link cards
2. **About** — Two-column bio, horizontal interactive timeline, vision/mission cards, accordion
3. **Resources** — Filterable/searchable download grid (by-laws, land guides, reports, speeches)
4. **Gallery/Events** — Bento-box masonry grid (1×1, 2×1, 1×2, 2×2), video modals, magazine-style event cards
5. **Contact** — Split-screen (form + Google Maps embed), categorized inquiries, newsletter signup

**Persistent UI:** Fixed nav with dot indicators, theme toggle, social icon strip, back-to-top button.
**Scroll:** `scroll-snap-type: y mandatory`, 600–800ms transitions.

## Performance Targets

- Lighthouse ≥ 90, FCP < 1.5s, LCP < 2.5s, CLS < 0.1, JS bundle < 200KB gzipped

## Accessibility

WCAG 2.1 AA: contrast ≥ 4.5:1 body / ≥ 3:1 large text, full keyboard nav, ARIA labels, alt text, `prefers-reduced-motion` support.

## Expected Commands (once scaffolded)

```bash
npm run dev          # Next.js dev server
npm run build        # Production build
npm run lint         # ESLint
npm run format       # Prettier
```

## Planned Directory Structure

```
src/
  app/           # Next.js App Router (layout.tsx, page.tsx, globals.css)
  components/    # Section components (Navigation, Hero, About, Resources, Gallery, Contact, ThemeProvider)
  hooks/         # useScroll, useTheme
  lib/           # Constants, utilities
  styles/        # Animation CSS
  types/         # TypeScript type definitions
```
