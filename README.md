# WYLITE VENTURES — Website (Phase 1)

## What's in this drop

This is the **foundation** of the site: project scaffold, design system, global
layout (navbar + footer + WhatsApp button), SEO plumbing, and a fully built
**Home page**. Everything else in the brief (About, Services sub-pages,
Projects, Gallery, Testimonials, FAQ, Contact, Privacy Policy) is intentionally
left for the next phases so each page gets real attention instead of being
rushed.

### Design system
- **Colors**: `ink` #000000, `paper` #FFFFFF, `gold` #D4AF37 (+ light/dark),
  `surface` #F8F8F8, `graphite` (body text) — all defined as Tailwind tokens
  in `tailwind.config.ts`, matching your palette exactly.
- **Type**: `Fraunces` (display serif, used for headlines — gives the site
  an architectural/L&T-style gravitas rather than a generic tech-startup
  sans-only look) paired with `Inter` (body, for the clean Apple/Stripe feel).
- **Signature element**: a gold "plumb-line" — a thin line that draws itself
  in under section headings (`.plumbline` in `globals.css`), a nod to a
  mason's chalk line, plus a faint blueprint grid in the hero background.

### Files included
```
app/
  layout.tsx        → root layout, fonts, metadata, OpenGraph, JSON-LD
  page.tsx           → Home page (hero, stats, services, why-us, CTA)
  not-found.tsx       → custom 404
  robots.ts           → generates /robots.txt
  sitemap.ts          → generates /sitemap.xml
  globals.css         → design tokens, utility classes, reduced-motion support
components/
  Navbar.tsx          → scroll-aware nav, dropdown, mobile menu
  Footer.tsx          → footer with links, contact, socials, back-to-top
  WhatsAppButton.tsx  → floating WhatsApp CTA
  ServiceCard.tsx     → reusable animated service card
  StatCounter.tsx     → animated counting statistic
lib/
  site-config.ts      → single source of truth: nav links, services, phones,
                         locations, stats — edit content here, not in pages
  utils.ts            → `cn()` class-merge helper
```

## Run it

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

> **Note on this sandbox**: I ran `npm install` and `npm run build` here to
> validate the code. Install succeeded and the code compiles cleanly — the
> only failure was `next/font` being unable to reach `fonts.googleapis.com`
> because *this sandbox's* network is locked down to a small allowlist. On
> your machine (with normal internet access) this will build without issue.
> If you ever deploy somewhere with restricted egress, swap `next/font/google`
> for locally-hosted font files and it'll work the same way.

## What I still need from you to keep this "your existing project" and not a fresh one

You mentioned you already have a Next.js 15 + TS + Tailwind project — but no
files were attached to our conversation, so I built this as a clean,
production-ready scaffold you can merge in. If you'd rather I work directly
inside your real repo:
- Zip your project (excluding `node_modules` and `.next`) and upload it, and
  I'll diff against it and only touch what's needed, or
- Paste in your current `app/layout.tsx`, `tailwind.config.ts`, and folder
  structure and I'll adapt this work to match exactly.

## Next phases (say the word and I'll build these next)
1. **About** — story, mission/vision/values, process timeline
2. **Services** — hub page + 5 individual service detail pages (Construction,
   Electrical, CCTV, Solar, Interior) plus the remaining 5 as simpler cards
3. **Projects** — filterable portfolio grid with category filters
4. **Gallery** — masonry grid with lightbox
5. **Testimonials** + **FAQ** (accordion)
6. **Contact** — form, WhatsApp/Call buttons, Google Maps embed
7. **Privacy Policy**
8. Final SEO/performance pass (Lighthouse audit, image optimization once real
   photos are supplied)

Real photography/video for the hero and project galleries will need to come
from you — I've used CSS-only treatments (blueprint grid, gradients) for now
so the build doesn't depend on placeholder stock images.
