# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Empório Vida Leve — landing page para loja de produtos naturais. Astro 6 + TailwindCSS v4, site estático.

## Commands

- `npm run dev` — start dev server (localhost:4321)
- `npm run build` — production build (output in `dist/`)
- `npm run preview` — preview production build locally

## Architecture

- **Astro 6** static site, ESM (`"type": "module"`), Node >= 22.12.0
- **TailwindCSS v4** via `@tailwindcss/vite` plugin (no tailwind.config.js — theme is in `src/styles/global.css` using `@theme`)
- TypeScript strict mode (`astro/tsconfigs/strict`)

### Key Patterns

- **Data layer**: `src/data/` contains typed TS files (products, categories, testimonials, social links) consumed by components
- **Component structure**: section-level components in `src/components/`, reusable UI primitives in `src/components/ui/`
- **WhatsApp CTAs**: all purchase CTAs link to WhatsApp with pre-filled messages via `whatsappUrl` from `src/data/social.ts`
- **Scroll animations**: `data-reveal` attribute on elements + IntersectionObserver in Layout.astro
- **No JS frameworks**: all interactivity via inline `<script>` tags (mobile menu, scroll reveal)
- **Colors**: Primary #3BAF3B, Secondary #F2C94C, Dark BG #0F172A
- **Fonts**: Inter (body) + Sora (display) via Google Fonts

### File Structure

```
src/
  styles/global.css          # Tailwind + @theme (colors, fonts) + base styles
  layouts/Layout.astro       # HTML shell, meta, fonts, scroll reveal script
  pages/index.astro          # Composes all section components
  data/                      # Typed content: products, categories, testimonials, social
  components/
    Header.astro             # Sticky glassmorphism nav + mobile menu
    Hero.astro               # Asymmetric hero with floating badges
    TrustProof.astro         # Staggered proof blocks
    FeaturedProducts.astro   # Mixed product grid (1 featured + others)
    Categories.astro         # Uneven category tile grid
    Lifestyle.astro          # Usage scenario cards
    Testimonials.astro       # Staggered testimonial cards
    CtaBanner.astro          # Final conversion CTA
    Footer.astro             # Contact, social links
    ui/                      # Reusable: WhatsAppButton, ProductCard, CategoryTile, Badge
```
