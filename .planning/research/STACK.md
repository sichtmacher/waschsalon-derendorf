# Stack Research

**Domain:** Local business website (Laundromat / SB-Waschsalon) with SEO and social media
**Researched:** 2026-03-15
**Confidence:** HIGH (core stack), MEDIUM (tooling versions), MEDIUM (ad platforms)

## Recommended Stack

### Core Technologies

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Astro | 6.x (latest stable) | Static site framework | Zero-JS-by-default = fastest possible Core Web Vitals. Operator (Henri Paas) already has Astro experience. Static output = perfect for read-only local business info site. Astro 6 is now the stable production recommendation as of early 2026. |
| Tailwind CSS | 4.x | Styling | v4 uses a Vite plugin (not the deprecated @astrojs/tailwind integration), zero config overhead, utility-first means fast prototyping without CSS file sprawl. Integrates directly with Astro 5.2+ via @tailwindcss/vite. |
| TypeScript | 5.x (bundled with Astro) | Type safety | Astro ships with TS support out of the box; provides IDE completeness and prevents content schema mistakes. |
| @astrojs/sitemap | latest | Sitemap generation | Official Astro integration, auto-generates sitemap on build, submit URL to Google Search Console — required for indexing. |
| JSON-LD (inline script) | n/a | LocalBusiness structured data | Google requires JSON-LD for local business rich results. Must include: name, address, geo, openingHoursSpecification, telephone, priceRange, @type: "LaundryService". Use astro-seo-schema package for TypeScript-typed schema generation. |

### Supporting Libraries

| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| astro-seo | ^2.x | Meta tags, Open Graph, Twitter Card | Use in the base layout component to manage all head meta consistently across pages |
| astro-seo-schema | latest | JSON-LD / schema.org structured data | Use for LocalBusiness + LaundryService schema injection; TypeScript-typed via schema-dts |
| @astrojs/image | bundled with Astro | Image optimization | Use for all local photos (salon interior, machines) — auto-generates responsive srcsets, WebP conversion; critical for LCP score |
| sharp | latest | Image processing backend | Required peer dependency for @astrojs/image / Astro's built-in image optimization |

### Deployment & Hosting

| Technology | Version | Purpose | Why Recommended |
|------------|---------|---------|-----------------|
| Netlify | Free tier | Static hosting + CDN | Only platform with explicit commercial use permission on free tier. Vercel prohibits commercial use on hobby plan. Netlify supports any SSG, has CI/CD from GitHub, and provides automatic HTTPS. |
| Netlify DNS / custom domain | n/a | Domain management | Keep domain + hosting co-located to minimize DNS TTL gotchas on launch |

### Analytics & Tracking

| Tool | Version | Purpose | When to Use |
|------|---------|---------|-------------|
| Google Search Console | n/a (Google service) | Index monitoring, keyword data | Set up immediately after deploy; submit sitemap; monitor coverage errors |
| Google Analytics 4 | n/a (Google service) | Traffic and conversion tracking | Use gtag.js snippet in Astro layout head; required for Google Ads conversion tracking |
| Google Ads conversion tracking | n/a | Measure ad ROI | Linked from GA4 or standalone gtag event; required before launching any paid campaign |

### Development Tools

| Tool | Purpose | Notes |
|------|---------|-------|
| Node 22+ | Runtime | Required by Astro 6 (dropped Node 18/20 support) |
| pnpm | Package management | Faster installs than npm, better monorepo support if project grows |
| Prettier + prettier-plugin-astro | Code formatting | Astro-specific formatter plugin needed; standard Prettier doesn't handle .astro files |
| ESLint + eslint-plugin-astro | Linting | Catches a11y and SEO issues in Astro components at write time |

## Installation

```bash
# Create Astro 6 project
npm create astro@latest waschsalon-web -- --template minimal

# Tailwind CSS v4 (via Vite plugin — NOT @astrojs/tailwind which is deprecated)
npx astro add tailwind

# Sitemap
npx astro add sitemap

# SEO + Schema libraries
npm install astro-seo astro-seo-schema schema-dts

# Image optimization (sharp is the required backend)
npm install sharp

# Dev dependencies
npm install -D prettier prettier-plugin-astro eslint eslint-plugin-astro
```

## Alternatives Considered

| Recommended | Alternative | When to Use Alternative |
|-------------|-------------|-------------------------|
| Astro 6 | WordPress | If client needs CMS editing access without developer involvement. For this project, Henri manages everything — Astro's static output wins on performance and simplicity. |
| Astro 6 | Next.js | If the site needed interactive features (booking, real-time machine status). No such requirements here — Next.js adds bundle overhead for zero benefit. |
| Astro 6 | Hugo | Hugo is faster at build time but requires Go templates and lacks the component model. Astro fits existing developer experience better. |
| Netlify | Cloudflare Pages | Cloudflare Pages also allows commercial use on free tier and has better edge performance globally. Viable alternative if Netlify free tier limits become a concern. |
| Netlify | Vercel | Do NOT use Vercel free tier for commercial projects — their ToS explicitly prohibits monetization. |
| Tailwind v4 | Plain CSS | Plain CSS is fine for tiny sites, but Tailwind's utility classes enable faster visual iteration when photos and brand colors arrive late (which they will — salon not built yet). |

## What NOT to Use

| Avoid | Why | Use Instead |
|-------|-----|-------------|
| @astrojs/tailwind | Deprecated for Tailwind v4; only kept for legacy v3 projects | @tailwindcss/vite Vite plugin directly |
| WordPress | Performance overhead, plugin maintenance, security update burden — not justified for a read-only brochure site | Astro static site |
| Vercel (free tier) | Commercial use prohibited on hobby plan — local business = commercial | Netlify free tier |
| React/Next.js | Zero interactive requirements; adds 40-100KB JS bundle for nothing | Astro with zero JS output |
| Social media feed embed (EmbedSocial, Elfsight, Juicer) | Third-party scripts degrade Core Web Vitals; Meta's oEmbed API changed April 2025 with deprecations in November 2025 | Link directly to social profiles; use static screenshots or manually curated content |
| Google Tag Manager | Adds script overhead for a single GA4 tag; overkill for a single-location business site | Direct gtag.js snippet in Astro layout |
| Self-hosted analytics (Plausible, Matomo) | GA4 is required anyway for Google Ads conversion linking | GA4 |

## Stack Patterns by Variant

**If content needs to change frequently (prices, hours):**
- Store data in a single `src/data/config.ts` file (typed object with prices, hours, address)
- All pages import from this file — single source of truth, no CMS needed
- Because hours/prices change ~2x/year; a headless CMS adds complexity without benefit

**If photos are not ready at launch:**
- Use CSS gradient placeholders or Unsplash stock images with explicit "replace when real photos arrive" comments
- Because launch before grand opening is the goal; real photos come after installation

**If social media feed embed is desired later:**
- Use static curated screenshots exported from Instagram as WebP images
- Embed the Instagram profile link prominently instead of a live feed
- Because live feed embeds require third-party scripts that destroy Lighthouse scores

## Social Media Platform Notes (Non-Code Stack)

These are managed platforms, not coded dependencies, but they influence the website stack:

| Platform | Setup Tool | Website Integration |
|----------|------------|---------------------|
| Google Business Profile | Google Business dashboard (manual) | Structured data on website must match GBP data exactly — any discrepancy causes Google to ignore markup |
| Instagram | Meta Business Suite | Link in bio to website; embed as static link + button on website |
| Facebook | Meta Business Suite | Facebook Business Page linked from website footer; no live feed embed |
| TikTok | TikTok for Business | Profile link in website footer |
| Google Ads | Google Ads console | Requires GA4 + conversion tracking on website before campaign launch |
| Meta Ads (IG + FB) | Meta Ads Manager | Requires Meta Pixel on website for audience targeting and conversion tracking |

**Meta Pixel note:** Add the Meta Pixel base code to the Astro layout head. It enables custom audiences (website visitors) for retargeting in Meta Ads Manager — important for the local radius campaigns planned around Derendorf.

## Version Compatibility

| Package | Compatible With | Notes |
|---------|-----------------|-------|
| astro@6.x | Node 22+ | Astro 6 dropped Node 18/20 support |
| @tailwindcss/vite | tailwindcss@4.x + astro@5.2+ | The old @astrojs/tailwind integration is deprecated; do not mix v3 and v4 |
| @astrojs/sitemap | astro@4.x+ | Official integration, stable across Astro 5 and 6 |
| astro-seo-schema | powered by schema-dts | schema-dts provides TypeScript types for all schema.org types including LocalBusiness |

## Sources

- [Astro 5.0 announcement](https://astro.build/blog/astro-5/) — Confirmed zero-JS default, Server Islands, Vite 6
- [Astro 6 Beta announcement](https://astro.build/blog/astro-6-beta/) — Node 22+ requirement, unified runtime
- [Astro + Tailwind v4 Setup 2025](https://tailkits.com/blog/astro-tailwind-setup/) — Vite plugin approach, @astrojs/tailwind deprecation — MEDIUM confidence (community source)
- [Astro Tailwind docs](https://docs.astro.build/en/guides/integrations-guide/tailwind/) — Official docs confirming v4 via @tailwindcss/vite — HIGH confidence
- [Google LocalBusiness Structured Data](https://developers.google.com/search/docs/appearance/structured-data/local-business) — Required/recommended properties — HIGH confidence
- [Netlify vs Vercel 2025](https://www.netlify.com/guides/netlify-vs-vercel/) — Commercial use prohibition on Vercel free tier — MEDIUM confidence (Netlify-authored comparison)
- [Vercel vs Netlify vs Cloudflare Pages 2025](https://www.ai-infra-link.com/vercel-vs-netlify-vs-cloudflare-pages-2025-comparison-for-developers/) — Free tier comparison — MEDIUM confidence
- [astro-seo-schema on npm](https://www.npmjs.com/package/astro-seo-schema) — Package existence confirmed — HIGH confidence
- [Meta oEmbed deprecation notice](https://developers.facebook.com/docs/instagram-platform/oembed/) — oEmbed Read deprecated November 2025 — HIGH confidence
- [Google Ads local campaigns guide](https://growthmindedmarketing.com/blog/google-ads-for-local-businesses/) — Start with Search, connect GBP, PMAX only after Search is profitable — MEDIUM confidence

---
*Stack research for: Waschsalon Derendorf — local business web presence*
*Researched: 2026-03-15*
