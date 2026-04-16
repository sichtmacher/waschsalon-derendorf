---
phase: 02-website-launch
verified: 2026-04-16T14:35:00Z
status: passed
score: 5/5
re_verification: false
gaps: []
human_verification:
  - test: "Verify above-the-fold pills are visible without scrolling on a real device"
    expected: "Address, hours, and price are all visible in the hero section viewport on mobile and desktop without any scrolling"
    why_human: "Cannot verify viewport clipping programmatically without a running browser; index.astro places all three pills in the hero section which is min-h-[100svh] so they should be above fold, but actual rendering depends on font size, zoom, and device."
  - test: "Verify Google Maps consent gate on live Netlify deployment"
    expected: "No Google Maps iframe loads on page load; the map-placeholder with Karte-laden button is shown; clicking the button loads the map"
    why_human: "E2E tests confirm this in local Playwright builds, but the live CDN headers and CSP-free environment on Netlify should be spot-checked post-deploy."
  - test: "Verify Core Web Vitals on live Netlify deployment (not local staticDistDir)"
    expected: "LCP under 3 seconds on mobile, CLS = 0"
    why_human: "LHCI ran against local static build with simulated throttling. Real-world CDN performance (edge caching, TTFB) may differ. PageSpeed Insights on the live URL is the authoritative check."
---

# Phase 02: Website Launch Verification Report

**Phase Goal:** Vollständige, rechtskonforme und SEO-optimierte Website ist live — jede Frage eines potenziellen Kunden wird beantwortet
**Verified:** 2026-04-16T14:35:00Z
**Status:** passed
**Re-verification:** No — initial verification

## Goal Achievement

### Observable Truths

| # | Truth | Status | Evidence |
|---|-------|--------|----------|
| 1 | Besucher sehen auf der Startseite sofort Adresse, Öffnungszeiten und Preisliste — ohne zu scrollen oder zu klicken | VERIFIED | `index.astro` hero section (`min-h-[100svh]`) contains three glass pills with "Münsterstr. 88, 40477 Düsseldorf", "Täglich 06:00 – 22:00 Uhr", "Waschen ab 5,00 €" all rendered inside the hero. `dist/index.html` confirms all three strings present in above-fold HTML. |
| 2 | Die Seite ist auf Mobilgeräten vollständig bedienbar und lädt unter 3 Sekunden (Core Web Vitals bestehen) | VERIFIED | LHCI results per 02-05-SUMMARY: desktop Perf 0.99-1.00 / LCP 442-446ms; mobile Perf 0.99-1.00 / LCP 1202-1954ms (well under 2500ms budget); CLS 0.000 on all routes. Playwright 50/50 on Pixel 5 mobile viewport. `py-2.5` → `py-3` retrofit completed (zero occurrences in src). WarpBackground has prefers-reduced-motion + narrow-viewport (<=640px) gradient fallback. |
| 3 | Google erkennt die Seite als lokales Unternehmen: LocalBusiness JSON-LD mit Adresse, Öffnungszeiten und Kategorie ist korrekt eingebettet | VERIFIED | `dist/index.html` contains `@type":"LaundryService"` (1 match), `@type":"FAQPage"` (1 match), `@type":"Question"` (12 matches). `openingHoursSpecification` and `addressLocality` both confirmed in dist output. `schema.ts` emits 7-day spec (06:00-22:00) with `safeJson` escaping. |
| 4 | Die Website enthält Impressum und Datenschutzerklärung; Google Maps lädt nur nach aktivem Klick (DSGVO-konform); keine externen Schriftarten werden beim Seitenaufruf geladen | VERIFIED | `impressum.astro` has DDG §5 content with Laura Maskos / Heyestr. 152 / GmbH-i.G. clause. `datenschutz.astro` has Google Fonts self-hosted clause + Videoüberwachung section (9 numbered sections). `GoogleMap.astro` renders `#map-placeholder` + `load-map-btn` by default; iframe only created via JS on click. No `googleapis` or `gstatic` references in `BaseLayout.astro` or built CSS. Fonts served from `dist/_astro/fonts/` (3 woff2 files confirmed). No `preconnect` or `dns-prefetch` to external font CDNs in built HTML. |
| 5 | Der FAQ-Bereich beantwortet mindestens 5 häufige Fragen von Erstnutzern (Münzen, Karten, Maschinengrössen, Dauer, Kosten) | VERIFIED | `src/data/faq.ts` contains 12 FAQ entries. Covers: Karten (entry 7: "Beides. Jede Maschine akzeptiert Kartenzahlung und Münzen"), Maschinengrösse (entry 4: "15-kg-Maschine nimmt Bettdecken..."), Dauer (entry 2: "30 bis 60 Minuten"), Kosten (entry 6: "Ab 5,00 €... ab 10,00 €"). Münzen explicitly covered in entry 7. `FaqAccordion.astro` renders all 12 via `faqs` import. |

**Score:** 5/5 truths verified

### Required Artifacts

| Artifact | Expected | Status | Details |
|----------|----------|--------|---------|
| `src/pages/index.astro` | Homepage with above-fold content + JSON-LD injection | VERIFIED | Hero section with 3 info pills, StickyNav, 4 section components, 2 JSON-LD script tags |
| `src/layouts/BaseLayout.astro` | Canonical + OG + twitter meta, self-hosted fonts via `<Font>` | VERIFIED | canonical, 6 OG tags, 4 twitter tags, `<Font>` API, skip-link, main#main-content |
| `src/lib/schema.ts` | LocalBusiness + FAQPage JSON-LD generators | VERIFIED | Real implementations with `safeJson`, LaundryService @type, 7-day opening hours, FAQ mainEntity array |
| `src/data/faq.ts` | 12 FAQ entries as source of truth | VERIFIED | 12 entries across 3 categories (bedienung×5, preise×2, service×5) |
| `src/components/GoogleMap.astro` | Consent gate — no iframe on load | VERIFIED | map-placeholder + load-map-btn shown by default; iframe created only after click |
| `src/pages/impressum.astro` | DDG §5 compliant Impressum | VERIFIED | Laura Maskos, Heyestr. 152, GmbH-i.G. clause, no Münsterstr. in Impressum |
| `src/pages/datenschutz.astro` | DSGVO Datenschutzerklärung with Google Fonts + Videoüberwachung | VERIFIED | 9 sections, Google Fonts self-hosted clause (Section 5), Videoüberwachung with Münsterstr. 88 (Section 6) |
| `public/_headers` | Netlify security + immutable cache headers | VERIFIED | X-Content-Type-Options, X-Frame-Options, Referrer-Policy, Permissions-Policy on `/*`; immutable cache on `/_astro/*`, `/_fonts/*`, `/fonts/*` |
| `src/components/WarpBackground.tsx` | prefers-reduced-motion + narrow-viewport fallback | VERIFIED | `prefers-reduced-motion` (2 occurrences) + `matchMedia` (4 occurrences) — gradient fallback on reduced-motion or <=640px |

### Key Link Verification

| From | To | Via | Status | Details |
|------|----|-----|--------|---------|
| `index.astro` | `schema.ts` | `import { localBusinessJsonLd, faqPageJsonLd }` | WIRED | Both functions called and output injected via `<script slot="head" set:html={...}>` |
| `index.astro` | `faq.ts` | `import { faqs }` | WIRED | `faqs` passed directly to `faqPageJsonLd()` |
| `FaqAccordion.astro` | `faq.ts` | `import { faqs, categoryLabels }` | WIRED | Renders all 12 entries grouped by category |
| `BaseLayout.astro` | fonts | `<Font cssVariable>` + `astro.config.mjs` fontProviders.google() | WIRED | Astro downloads fonts at build time to `dist/_astro/fonts/`; no runtime external requests |
| `GoogleMap.astro` | Google Maps API | Click-gated JS `iframe.src = mapUrl` | WIRED | Consent gate confirmed: placeholder shown by default, iframe only injected after `load-map-btn` click |
| `LocationSection.astro` | `GoogleMap.astro` | `<GoogleMap address="Münsterstr. 88, 40477 Düsseldorf" />` | WIRED | Component rendered in location section |
| `FaqSection.astro` | `FaqAccordion.astro` | `<FaqAccordion />` | WIRED | Accordion rendered inside FAQ section |

### Data-Flow Trace (Level 4)

| Artifact | Data Variable | Source | Produces Real Data | Status |
|----------|---------------|--------|--------------------|--------|
| `FaqAccordion.astro` | `faqs` | `src/data/faq.ts` static array | Yes — 12 hardcoded entries (correct for this use case) | FLOWING |
| `index.astro` — LocalBusiness JSON-LD | `business` string | `localBusinessJsonLd()` in `schema.ts` | Yes — real JSON-LD with full address, hours, type | FLOWING |
| `index.astro` — FAQPage JSON-LD | `faq` string | `faqPageJsonLd(faqs)` in `schema.ts` | Yes — 12 Question/Answer entries from faq.ts | FLOWING |
| `PricingSection.astro` | Price values | Hardcoded in component per UI-SPEC (5,00 € / 10,00 € / 1,80 €) | Yes — static content, not dynamic | FLOWING |

### Behavioral Spot-Checks

| Behavior | Command | Result | Status |
|----------|---------|--------|--------|
| Build succeeds with 3 routes | `npm run build` | "3 page(s) built in 977ms" — exit 0 | PASS |
| LaundryService JSON-LD in dist | `grep -c "@type.*LaundryService" dist/index.html` | 1 match | PASS |
| FAQPage JSON-LD in dist | `grep -c "@type.*FAQPage" dist/index.html` | 1 match | PASS |
| 12 FAQ Question entities | `grep '"@type":"Question"' dist/index.html \| wc -l` | 12 | PASS |
| No Google Maps iframe on page load | `grep "iframe" dist/index.html` (only JS code, no static iframe tag) | Confirmed: iframe created only via JS click handler | PASS |
| No external font CDN references | `grep "googleapis\|gstatic"` in dist/index.html | No matches | PASS |
| Security headers present | `grep "X-Content-Type-Options" public/_headers` | PASS | PASS |
| Zero py-2.5 touch-target violations | `grep -c "py-2.5" src/components/GoogleMap.astro` | 0 | PASS |
| Font files bundled locally | `find dist/_astro/fonts -name "*.woff2"` | 3 files found | PASS |

### Requirements Coverage

| Requirement | Source Plan(s) | Description | Status | Evidence |
|-------------|---------------|-------------|--------|----------|
| WEB-01 | 02-01, 02-02, 02-04 | Startseite mit Adresse, Öffnungszeiten und Preisliste | SATISFIED | Three above-fold pills in hero; OpeningHoursSection and PricingSection below fold |
| WEB-02 | 02-01, 02-04, 02-05 | Kontaktinfo & Anfahrt mit Google Maps (Click-to-load, DSGVO-konform) | SATISFIED | GoogleMap.astro consent gate; LocationSection with NAP + tel/mailto; datenschutz.astro Google Maps section |
| WEB-03 | 02-03 | Impressum (rechtlich korrekt für gewerbliche Seite) | SATISFIED | impressum.astro: Laura Maskos, Heyestr. 152, GmbH-i.G. clause, DDG §5, no placeholder brackets |
| WEB-04 | 02-03 | Datenschutzerklärung (DSGVO-konform) | SATISFIED | datenschutz.astro: 9 sections, Google Fonts self-hosted clause, Videoüberwachung, Art. 6 DSGVO references |
| WEB-05 | 02-01, 02-02, 02-04, 02-05 | Mobile-first responsives Design | SATISFIED | Tailwind responsive classes, Playwright Pixel 5 mobile 25/25 pass, LHCI mobile perf 0.99-1.00 |
| WEB-06 | 02-01, 02-04 | LocalBusiness JSON-LD Schema Markup | SATISFIED | LaundryService @type with address, telephone, openingHoursSpecification (7 days), in dist/index.html |
| WEB-07 | 02-01, 02-04, 02-05 | SEO-Grundlagen (Meta Tags, Sitemap, robots.txt, self-hosted Fonts) | SATISFIED | canonical + description + OG tags in BaseLayout; sitemap-index.xml generated; fonts self-hosted in dist/_astro/fonts/ |
| WEB-10 | 02-01, 02-02, 02-04 | FAQ-Bereich mit häufigen Fragen | SATISFIED | 12 FAQ entries in faq.ts; FaqAccordion with native details/summary; FAQPage JSON-LD with 12 Question entities |

**No orphaned requirements:** All 8 Phase 2 requirements (WEB-01 through WEB-07, WEB-10) are accounted for. WEB-08 was Phase 1 (completed). WEB-09 is Phase 6 (deferred).

### Anti-Patterns Found

| File | Line | Pattern | Severity | Impact |
|------|------|---------|----------|--------|
| `astro.config.mjs` | 14-23 | `fontProviders.google()` used as font provider | Info | Astro's Font API with google provider downloads fonts at build time to `dist/_astro/fonts/` — confirmed no runtime external requests in built output. This is self-hosting by Astro convention, not a DSGVO violation. Datenschutz correctly states fonts are served from local server. |
| `src/components/GoogleMap.astro` | 19 | German text "uebertragen" instead of "übertragen" | Info | Minor typo: "Beim Laden werden Daten an Google uebertragen." — 'ue' instead of 'ü'. Does not affect functionality but is inconsistent with the rest of the German copy. |
| `02-05-SUMMARY.md` | Task 3 | Checkpoint auto-approved via `_auto_chain_active: true` | Warning | The performance/a11y checkpoint was not human-verified — it was auto-approved by the workflow. LHCI results are logged in SUMMARY but no human reviewed them. Flagged for human verification below. |

No blockers found. No stub implementations, empty returns, or placeholder content in any production-path code.

### Human Verification Required

#### 1. Above-Fold Visibility on Real Device

**Test:** Open `https://waschsalon-derendorf.de` on a physical mobile device (or Chrome DevTools with a real mobile preset). Without scrolling, verify that Münsterstr. 88, Täglich 06:00 – 22:00 Uhr, and Waschen ab 5,00 € are all visible in the initial viewport.
**Expected:** All three info pills visible without scrolling on iPhone SE and a typical Android device
**Why human:** Viewport clipping cannot be reliably verified from static HTML. The hero is `min-h-[100svh]` but on small screens with browser chrome the pills could be pushed below the fold.

#### 2. Google Maps Consent Gate on Live Netlify Deployment

**Test:** Visit the live URL and navigate to the location section. Confirm no map iframe loads automatically. Click "Karte laden" and verify the Google Maps iframe appears with the correct address.
**Expected:** Placeholder shown on load; map loads only after click; correct location displayed
**Why human:** E2E tests run on a local build. The live Netlify CDN environment and any deployed header differences should be verified manually post-deploy.

#### 3. Core Web Vitals on Live URL

**Test:** Run PageSpeed Insights (`https://pagespeed.web.dev/`) against `https://waschsalon-derendorf.de` once the site is deployed.
**Expected:** LCP < 3s on mobile, CLS = 0, Performance score >= 90
**Why human:** LHCI measured on a local `staticDistDir` with simulated throttling. Real CDN TTFB and edge caching are not captured in local measurements.

#### 4. Self-Hosted Font Delivery Verification

**Test:** Open DevTools Network tab, filter by "Font". Reload `waschsalon-derendorf.de`. Confirm all font requests go to the site's own domain (no requests to `fonts.googleapis.com` or `fonts.gstatic.com`).
**Expected:** Nunito and Baloo 2 fonts load from `/_astro/fonts/` subdomain, zero external font requests
**Why human:** Static analysis confirms `fontProviders.google()` in astro.config.mjs builds fonts locally, but live-environment verification via DevTools is the authoritative DSGVO check referenced in datenschutz.astro.

### Gaps Summary

No gaps. All 5 success criteria verified against the actual codebase. The build succeeds cleanly with 3 routes, JSON-LD is present and correct in built output, the consent gate is properly implemented, legal pages contain required content, and 12 FAQ entries cover all required first-time-visitor questions.

**Notable findings for next phase:**

1. The `astro.config.mjs` uses `fontProviders.google()` — this is Astro's mechanism for downloading Google Fonts at build time (confirmed: 3 woff2 files in `dist/_astro/fonts/`). The Datenschutz page correctly describes this as self-hosting. No action needed, but live-site verification via Network DevTools is recommended.

2. `GoogleMap.astro` line 19 has a typo: "Daten an Google uebertragen" should be "übertragen". This is cosmetic and does not affect any requirement but should be corrected before launch.

3. The brand color shift from `#0891B2` to `#0E7490` in plan 02-04 means the UI-SPEC contrast table (line 99) is stale — it still references the old value. This is documented in both 02-04 and 02-05 SUMMARYs and is known technical debt.

---

_Verified: 2026-04-16T14:35:00Z_
_Verifier: Claude (gsd-verifier)_
