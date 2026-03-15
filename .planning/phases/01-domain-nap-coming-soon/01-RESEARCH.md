# Phase 1: Domain, NAP & Coming Soon - Research

**Researched:** 2026-03-15
**Domain:** Astro 6 static site, Tailwind v4, Netlify deployment, DSGVO-compliance, DNS
**Confidence:** HIGH

## Summary

Phase 1 is a greenfield Astro 6 static site deployed on Netlify with a custom IONOS domain. The stack is well-documented and recently released (Astro 6: March 10, 2026). Key technical areas: Astro 6 project scaffolding with built-in Fonts API for DSGVO-compliant self-hosted Google Fonts, Tailwind v4 via Vite plugin, static Netlify deployment (no adapter needed), IONOS DNS configuration, and a click-to-load Google Maps embed.

Astro 6 requires Node 22+. The built-in Fonts API is a major win: it automatically downloads, caches, and self-hosts Google Fonts -- eliminating third-party requests. No `@astrojs/tailwind` integration needed; Tailwind v4 uses the `@tailwindcss/vite` plugin directly.

**Primary recommendation:** Use `npm create astro@latest`, add Tailwind v4 via Vite plugin, configure Astro 6 Fonts API for self-hosted font, create static pages, deploy to Netlify via Git with `netlify.toml`. Keep it simple -- no SSR, no adapter, no framework overhead.

<user_constraints>

## User Constraints (from CONTEXT.md)

### Locked Decisions
- Coming-Soon page: Name "Waschsalon Derendorf", Adresse "Muensterstr. 88, 40625 Duesseldorf", Eroeffnung "2026", Email info@waschsalon-derendorf.de (als Text)
- Kein Telefon auf der Seite
- Zweisprachig: Deutsch + kurzer englischer Satz
- Google Maps Click-to-load eingebettet (DSGVO-konform)
- Footer mit Impressum + Datenschutzerklaerung als eigene Unterseiten
- Farbpalette: Dunkelblau #1D4ED8, Hellblau #E0F2FE, Weiss #FFFFFF, Hellgrau #F3F4F6, Dunkelgrau #1F2937
- Self-hosted Google Font (konkrete Font: Claude's Discretion)
- Emoji-Favicon (Waesche-Korb) + Tab-Titel "Waschsalon Derendorf"
- Domain: waschsalon-derendorf.de (bereits bei IONOS registriert)
- Kein Schema Markup auf Coming-Soon (kommt Phase 2)
- Neuer Netlify-Account wird angelegt
- Basis-SEO: Title Tag, Meta Description, robots.txt, sitemap.xml

### Claude's Discretion
- Konkrete Google Font Wahl (passend zu Clean-Design und Farbpalette)
- NAP-Dokument Ablageort (vermutlich .planning/NAP.md)
- Exaktes Layout/Spacing der Coming-Soon-Seite
- Impressum/Datenschutz Inhalt (rechtlich korrekt fuer gewerbliche Seite)
- Google Maps Platzhalter-Text vor Click-to-load

### Deferred Ideas (OUT OF SCOPE)
None -- discussion stayed within phase scope

</user_constraints>

<phase_requirements>

## Phase Requirements

| ID | Description | Research Support |
|----|-------------|-----------------|
| WEB-08 | Coming-Soon-Seite vor Eroeffnung (SEO-Vorlauf starten) | Astro 6 static site with Tailwind v4, self-hosted fonts, SEO meta tags, sitemap, robots.txt, Netlify deployment, Google Search Console submission |

</phase_requirements>

## Standard Stack

### Core
| Library | Version | Purpose | Why Standard |
|---------|---------|---------|--------------|
| Astro | 6.x | Static site generator | Released 2026-03-10, built-in Fonts API, zero JS by default |
| Tailwind CSS | 4.x | Utility-first CSS | Native Vite plugin, no config file needed in v4 |
| Node.js | 22+ | Runtime | Required by Astro 6 (dropped Node 18/20) |

### Supporting
| Library | Version | Purpose | When to Use |
|---------|---------|---------|-------------|
| @tailwindcss/vite | 4.x | Tailwind Vite integration | Required for Tailwind v4 in Astro |

### Alternatives Considered
| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Astro Fonts API | fontsource NPM packages | Fonts API is built-in, zero config, auto-optimized |
| @astrojs/tailwind | @tailwindcss/vite | @astrojs/tailwind is deprecated; use Vite plugin directly |
| Netlify adapter | No adapter | Static site needs no adapter -- just `dist` folder |

**Installation:**
```bash
npm create astro@latest waschsalon-derendorf
cd waschsalon-derendorf
npm install tailwindcss @tailwindcss/vite
```

## Architecture Patterns

### Recommended Project Structure
```
waschsalon-derendorf/
├── public/
│   ├── robots.txt           # SEO
│   └── favicon.svg          # Emoji favicon as SVG
├── src/
│   ├── layouts/
│   │   └── BaseLayout.astro # Head, meta, Font component, footer
│   ├── pages/
│   │   ├── index.astro      # Coming-Soon landing page
│   │   ├── impressum.astro  # Legal: Impressum
│   │   └── datenschutz.astro # Legal: Datenschutzerklaerung
│   ├── components/
│   │   └── GoogleMap.astro  # Click-to-load Maps component
│   └── styles/
│       └── global.css       # @import "tailwindcss"
├── astro.config.mjs         # Fonts API + Tailwind Vite plugin
├── netlify.toml             # Build config
└── package.json
```

### Pattern 1: Astro 6 Config with Fonts API + Tailwind v4
**What:** Single config file for both font self-hosting and Tailwind
**When to use:** Every Astro 6 project with Tailwind and custom fonts

```typescript
// astro.config.mjs
// Source: https://docs.astro.build/en/guides/fonts/
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://waschsalon-derendorf.de",
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [{
    provider: fontProviders.google(),
    name: "Inter",  // or chosen font
    cssVariable: "--font-body",
  }],
});
```

### Pattern 2: Font Component in Layout
**What:** Astro 6 Font component handles preload + CSS variable injection
**When to use:** In the base layout head

```astro
---
// src/layouts/BaseLayout.astro
import { Font } from "astro:assets";
import "../styles/global.css";
---
<html lang="de">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <Font cssVariable="--font-body" preload />
    <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
    <title>{Astro.props.title || "Waschsalon Derendorf"}</title>
    <meta name="description" content={Astro.props.description} />
    <slot name="head" />
  </head>
  <body class="font-body bg-white text-gray-800">
    <slot />
  </body>
</html>
```

### Pattern 3: DSGVO Click-to-Load Google Maps
**What:** Show placeholder, load iframe only after user consent click
**When to use:** Any Google Maps embed on German websites

```astro
---
// src/components/GoogleMap.astro
const { address } = Astro.props;
const mapUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_KEY&q=${encodeURIComponent(address)}`;
---
<div id="map-container" class="relative w-full aspect-video bg-gray-100 rounded-lg overflow-hidden">
  <div id="map-placeholder" class="flex flex-col items-center justify-center h-full p-6 text-center">
    <p class="text-gray-600 mb-2">Karte wird von Google Maps geladen.</p>
    <p class="text-sm text-gray-500 mb-4">Beim Laden werden Daten an Google uebertragen.</p>
    <button
      id="load-map-btn"
      class="px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors"
    >
      Karte laden
    </button>
  </div>
</div>

<script define:vars={{ mapUrl }}>
  document.getElementById('load-map-btn')?.addEventListener('click', () => {
    const container = document.getElementById('map-container');
    const iframe = document.createElement('iframe');
    iframe.src = mapUrl;
    iframe.width = '100%';
    iframe.height = '100%';
    iframe.style.border = '0';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    iframe.referrerPolicy = 'no-referrer-when-downgrade';
    container.innerHTML = '';
    container.appendChild(iframe);
  });
</script>
```

**Note on Maps API Key:** For a simple Coming-Soon page, consider using a keyless embed URL format: `https://www.google.com/maps?q=ADDRESS&output=embed` which works without an API key. The Maps Embed API with a key has a generous free tier but requires a Google Cloud project.

### Pattern 4: Emoji Favicon as SVG
**What:** Use an emoji as favicon without image generation
**When to use:** When emoji-based favicon is desired

```html
<!-- In public/favicon.svg -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <text y=".9em" font-size="90">🧺</text>
</svg>
```

### Anti-Patterns to Avoid
- **Using @astrojs/tailwind:** Deprecated. Use `@tailwindcss/vite` plugin directly.
- **Installing Netlify adapter for static sites:** No adapter needed. Static output (`dist/`) is served directly.
- **Loading Google Fonts from CDN:** Violates DSGVO. Use Astro 6 Fonts API for automatic self-hosting.
- **Creating tailwind.config.js:** Tailwind v4 uses CSS-first configuration. No JS config file.
- **Using Astro.glob():** Removed in Astro 6. Use `import.meta.glob()` if needed.

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| Font self-hosting | Manual download + @font-face | Astro 6 Fonts API | Auto-downloads, caches, generates fallbacks, adds preload |
| Sitemap generation | Manual sitemap.xml | `@astrojs/sitemap` | Auto-generates from pages, handles lastmod |
| CSS utility framework | Custom CSS classes | Tailwind v4 | Consistent design system, responsive utilities |
| Impressum/Datenschutz text | Writing from scratch | e-recht24.de or impressum-generator.de | Legal accuracy, current regulations (DDG ss5) |

**Key insight:** Astro 6's built-in Fonts API eliminates the entire font self-hosting problem that previously required manual downloads, @font-face declarations, and preload configuration.

## Common Pitfalls

### Pitfall 1: Node Version Mismatch
**What goes wrong:** Build fails on Netlify because Node 22 is not the default
**Why it happens:** Astro 6 dropped Node 18/20 support; Netlify defaults to an older Node
**How to avoid:** Set `NODE_VERSION = "22"` in `netlify.toml` under `[build.environment]` or use `.node-version` file
**Warning signs:** Build error mentioning "Unsupported engine" or syntax errors

### Pitfall 2: Google Fonts CDN Requests
**What goes wrong:** LG Muenchen I ruling (2022) -- DSGVO violation, fines for loading Google Fonts from CDN
**Why it happens:** Google Fonts CDN sends user IP to Google servers in the US
**How to avoid:** Use Astro 6 Fonts API with `fontProviders.google()` -- it downloads and self-hosts automatically
**Warning signs:** Network tab showing requests to `fonts.googleapis.com` or `fonts.gstatic.com`

### Pitfall 3: Missing robots.txt / sitemap for SEO Vorlauf
**What goes wrong:** Google doesn't index the page efficiently
**Why it happens:** Forgetting SEO basics on a "simple" landing page
**How to avoid:** Add `@astrojs/sitemap`, create `robots.txt` with sitemap reference, submit to Search Console
**Warning signs:** Page not appearing in Google after weeks

### Pitfall 4: DNS Propagation Delays with IONOS
**What goes wrong:** Site not reachable after DNS changes, HTTPS stuck provisioning
**Why it happens:** DNS propagation can take up to 48 hours; IONOS sometimes slow
**How to avoid:** Configure DNS early, use Netlify DNS (nameserver delegation) for simplest setup, or add A record (75.2.60.5) + CNAME (www) at IONOS
**Warning signs:** "DNS_PROBE_FINISHED_NXDOMAIN" errors, Netlify HTTPS showing "Waiting for DNS propagation"

### Pitfall 5: Impressum Missing Required Fields
**What goes wrong:** Abmahnung (cease-and-desist) for incomplete Impressum
**Why it happens:** German law (DDG ss5, formerly TMG ss5) has specific requirements
**How to avoid:** Use an Impressum-Generator (e-recht24.de), include: full name, address, email, phone or other fast contact method, Handelsregister if applicable, USt-IdNr if applicable
**Warning signs:** Missing contact method beyond email, no Vor-/Nachname for natural persons

### Pitfall 6: Tailwind v4 CSS-First Config Confusion
**What goes wrong:** Creating `tailwind.config.js` which is ignored by Tailwind v4
**Why it happens:** Old tutorials reference v3 config approach
**How to avoid:** Tailwind v4 uses CSS-based configuration via `@theme` directive in CSS files. Custom colors go in `global.css`
**Warning signs:** Custom colors/fonts not applying despite being in a JS config file

## Code Examples

### Tailwind v4 Custom Theme in CSS
```css
/* src/styles/global.css */
/* Source: https://tailwindcss.com/docs/installation/framework-guides/astro */
@import "tailwindcss";

@theme {
  --color-brand: #1D4ED8;
  --color-brand-light: #E0F2FE;
  --color-surface: #F3F4F6;
  --color-text: #1F2937;
  --font-body: var(--font-body);
}
```

### Static robots.txt
```
# public/robots.txt
User-agent: *
Allow: /

Sitemap: https://waschsalon-derendorf.de/sitemap-index.xml
```

### netlify.toml
```toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "22"
```

### Google Search Console Meta Tag Verification
```astro
<!-- In BaseLayout.astro head -->
<meta name="google-site-verification" content="VERIFICATION_CODE_HERE" />
```

## State of the Art

| Old Approach | Current Approach | When Changed | Impact |
|--------------|------------------|--------------|--------|
| @astrojs/tailwind integration | @tailwindcss/vite plugin | Tailwind v4 (Jan 2025) | No integration package needed |
| tailwind.config.js | CSS @theme directive | Tailwind v4 | Config lives in CSS |
| Manual font self-hosting | Astro Fonts API | Astro 6 (Mar 2026) | Zero-config self-hosted fonts |
| fontsource packages | Astro Fonts API | Astro 6 (Mar 2026) | Built-in, no extra packages |
| Astro.glob() | import.meta.glob() | Astro 6 (Mar 2026) | Breaking change |
| Node 18/20 | Node 22+ required | Astro 6 (Mar 2026) | Set in netlify.toml |

**Deprecated/outdated:**
- `@astrojs/tailwind`: Deprecated, use `@tailwindcss/vite` directly
- `Astro.glob()`: Removed in Astro 6
- `tailwind.config.js`: Tailwind v4 uses CSS-first configuration
- TMG ss5 (Telemediengesetz): Replaced by DDG ss5 (Digitale-Dienste-Gesetz) for Impressum requirements

## Font Recommendation (Claude's Discretion)

For a clean, modern laundromat aesthetic with the specified color palette:

**Recommendation: Inter** -- designed for computer screens, excellent readability, clean sans-serif. Widely used for business/service websites. Available via Astro 6 Fonts API with `fontProviders.google()`.

Alternative: **DM Sans** -- slightly rounder, friendly feel while staying professional. Either works well with the blue/white/gray palette.

## NAP Document Recommendation (Claude's Discretion)

Store at `.planning/NAP.md` -- keeps it with project planning docs, easy to reference during future platform registrations (Google Business Profile Phase 3, Social Media Phase 4).

## Open Questions

1. **Google Maps API Key vs Keyless Embed**
   - What we know: Keyless embed (`google.com/maps?q=...&output=embed`) works for simple cases. Maps Embed API requires a key but offers more control.
   - What's unclear: Whether keyless embed will remain stable long-term
   - Recommendation: Start with keyless embed for Coming-Soon simplicity; upgrade to API key in Phase 2 if needed

2. **Google Search Console Account**
   - What we know: User said "Konto-Wahl spaeter" -- setup will be documented, not executed
   - What's unclear: Which Google account will be used
   - Recommendation: Document the setup steps as a manual task; actual account creation is a user action

3. **Impressum Content Details**
   - What we know: Requires full name, address, email, fast contact method (DDG ss5)
   - What's unclear: Business legal structure (Einzelunternehmen? GbR?), Handelsregister entry, USt-IdNr
   - Recommendation: Create placeholder Impressum with known data (Name, Adresse), mark missing fields as TODO. User fills in business-specific legal details.

## Validation Architecture

### Test Framework
| Property | Value |
|----------|-------|
| Framework | Manual validation (static site, no application logic) |
| Config file | none |
| Quick run command | `npm run build && npx astro preview` |
| Full suite command | `npm run build` (build success = pages render) |

### Phase Requirements -> Test Map
| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| WEB-08a | Coming-Soon page renders with NAP info | smoke | `npm run build` (exits 0 = pages built) | No -- Wave 0 |
| WEB-08b | Site accessible at custom domain | manual-only | DNS + Netlify deploy verification | N/A |
| WEB-08c | Google Search Console configured | manual-only | User verifies in GSC dashboard | N/A |
| WEB-08d | Auto-deploy on git push | manual-only | Push commit, verify Netlify rebuilds | N/A |
| WEB-08e | Self-hosted font (no Google CDN requests) | smoke | `npm run build && grep -r "fonts.googleapis.com" dist/ && echo "FAIL" \|\| echo "PASS"` | No -- Wave 0 |
| WEB-08f | robots.txt + sitemap exist | smoke | `npm run build && test -f dist/robots.txt && test -f dist/sitemap-index.xml` | No -- Wave 0 |

### Sampling Rate
- **Per task commit:** `npm run build`
- **Per wave merge:** `npm run build` + manual check of rendered pages
- **Phase gate:** Build succeeds, pages render correctly, no external font requests

### Wave 0 Gaps
- [ ] Project scaffolding (npm create astro@latest) -- no project exists yet
- [ ] `package.json` with build scripts -- created during scaffolding
- [ ] Basic smoke test script for font self-hosting check

## Sources

### Primary (HIGH confidence)
- [Astro 6 release blog](https://astro.build/blog/astro-6/) -- features, breaking changes, Node 22 requirement
- [Astro Fonts API docs](https://docs.astro.build/en/guides/fonts/) -- Font component, providers, configuration
- [Tailwind CSS Astro guide](https://tailwindcss.com/docs/installation/framework-guides/astro) -- v4 Vite plugin setup
- [Astro Netlify deploy docs](https://docs.astro.build/en/guides/deploy/netlify/) -- static deployment, netlify.toml
- [Netlify Astro 6 announcement](https://www.netlify.com/changelog/2026-03-10-astro-6/) -- day-one compatibility confirmed

### Secondary (MEDIUM confidence)
- [Netlify DNS docs](https://docs.netlify.com/manage/domains/configure-domains/bring-a-domain-to-netlify/) -- nameserver delegation
- [IONOS-Netlify forum threads](https://answers.netlify.com/t/setting-up-custom-domain-with-ionos/114412) -- A record 75.2.60.5 + CNAME
- [e-recht24.de](https://www.e-recht24.de/impressum-generator.html) -- Impressum generator, DDG ss5 requirements
- [impressum-generator.de](https://impressum-generator.de/) -- free Impressum generator

### Tertiary (LOW confidence)
- Google Maps keyless embed stability -- based on current behavior, no official guarantee

## Metadata

**Confidence breakdown:**
- Standard stack: HIGH -- Astro 6 + Tailwind v4 officially documented, Netlify confirmed compatibility
- Architecture: HIGH -- standard Astro project structure, well-documented patterns
- Pitfalls: HIGH -- DSGVO font ruling is established case law, Node version requirement is documented
- DNS/Deployment: MEDIUM -- IONOS-specific steps based on community forums, Netlify docs are solid
- Legal (Impressum/Datenschutz): MEDIUM -- requirements are clear but business-specific details unknown

**Research date:** 2026-03-15
**Valid until:** 2026-04-15 (stable stack, recently released)
