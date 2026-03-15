---
phase: 01-domain-nap-coming-soon
plan: 01
subsystem: infra
tags: [astro, tailwindcss, netlify, seo, fonts-api, nap]

# Dependency graph
requires: []
provides:
  - "Buildable Astro 6 project with Tailwind v4 CSS-first theming"
  - "Self-hosted Inter font via Astro 6 Fonts API (no Google CDN)"
  - "Netlify deployment config with Node 22"
  - "SEO basics: robots.txt with sitemap reference, sitemap-index.xml"
  - "Canonical NAP document with business name, address, phone format"
affects: [01-02, 02-website-launch, 03-google-business-profile]

# Tech tracking
tech-stack:
  added: [astro@6, tailwindcss@4, "@tailwindcss/vite@4", "@astrojs/sitemap"]
  patterns: [css-first-tailwind-config, astro-fonts-api-self-hosting, vite-plugin-tailwind]

key-files:
  created:
    - astro.config.mjs
    - src/styles/global.css
    - netlify.toml
    - public/robots.txt
    - public/favicon.svg
    - .planning/NAP.md
    - package.json
  modified: []

key-decisions:
  - "Inter font chosen for clean, modern readability matching blue/white/gray palette"
  - "Placeholder index.astro kept to enable sitemap generation (removed by Plan 02)"
  - "NAP stored at .planning/NAP.md as internal reference for all platform registrations"

patterns-established:
  - "Tailwind v4 CSS-first: theme colors defined via @theme in global.css, no tailwind.config.js"
  - "Font self-hosting: Astro 6 Fonts API with fontProviders.google(), zero external CDN requests"
  - "Static deployment: netlify.toml with Node 22, no Netlify adapter needed"

requirements-completed: [WEB-08]

# Metrics
duration: 3min
completed: 2026-03-15
---

# Phase 1 Plan 01: Project Scaffold & NAP Summary

**Astro 6 project with Tailwind v4 CSS-first theming, self-hosted Inter font via Fonts API, Netlify config, SEO basics, and canonical NAP reference document**

## Performance

- **Duration:** 3 min
- **Started:** 2026-03-15T17:44:26Z
- **Completed:** 2026-03-15T17:47:35Z
- **Tasks:** 2
- **Files modified:** 12

## Accomplishments
- Astro 6 project scaffolded with strict TypeScript, builds successfully
- Tailwind v4 integrated via Vite plugin with brand colors (blue #1D4ED8, light blue #E0F2FE, surface gray #F3F4F6, text gray #1F2937)
- Inter font self-hosted via Astro 6 Fonts API -- zero Google CDN requests in build output
- Netlify deployment config with Node 22 environment
- SEO infrastructure: robots.txt with sitemap reference, sitemap-index.xml auto-generated
- Canonical NAP document created with all business data fields

## Task Commits

Each task was committed atomically:

1. **Task 1: Scaffold Astro 6 project and configure stack** - `7724682` (feat)
2. **Task 2: Create NAP reference document** - `846625f` (docs)

## Files Created/Modified
- `package.json` - Project dependencies (astro 6, tailwindcss 4, @tailwindcss/vite, @astrojs/sitemap)
- `astro.config.mjs` - Astro config with Fonts API + Tailwind Vite plugin + sitemap + site URL
- `netlify.toml` - Build config with Node 22 environment
- `src/styles/global.css` - Tailwind v4 import + custom theme colors via @theme directive
- `public/robots.txt` - Crawl permissions + sitemap reference
- `public/favicon.svg` - Basket emoji favicon
- `src/pages/index.astro` - Minimal placeholder for sitemap generation (replaced by Plan 02)
- `.planning/NAP.md` - Canonical business name, address, phone format, website URL, email

## Decisions Made
- Inter font selected: clean sans-serif with excellent screen readability, matches the modern blue/white palette
- Kept a minimal placeholder index.astro so @astrojs/sitemap generates sitemap-index.xml (Plan 02 replaces it with real content)
- NAP document placed at .planning/NAP.md as internal reference -- not published to website

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 - Blocking] Added placeholder index.astro for sitemap generation**
- **Found during:** Task 1 (build verification)
- **Issue:** Plan said to remove default index.astro, but @astrojs/sitemap requires at least one page to generate sitemap-index.xml
- **Fix:** Created minimal placeholder index.astro with basic HTML structure
- **Files modified:** src/pages/index.astro
- **Verification:** npm run build succeeds, dist/sitemap-index.xml exists
- **Committed in:** 7724682 (Task 1 commit)

**2. [Rule 1 - Bug] Reinstalled node_modules after copy corruption**
- **Found during:** Task 1 (build verification)
- **Issue:** Copying node_modules from temp scaffold directory corrupted symlinks in .bin/
- **Fix:** Removed node_modules and ran npm install in project root
- **Verification:** npm run build succeeds
- **Committed in:** 7724682 (Task 1 commit)

---

**Total deviations:** 2 auto-fixed (1 blocking, 1 bug)
**Impact on plan:** Both fixes necessary for build success. No scope creep.

## Issues Encountered
- Astro scaffolding refused to run in non-empty directory (due to .git and .planning). Worked around by scaffolding in /tmp and copying files.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Project foundation complete, ready for Plan 02 to build Coming-Soon page, Impressum, and Datenschutz pages
- BaseLayout.astro pattern from RESEARCH.md ready to implement with Font component
- NAP data available for use on Coming-Soon page

## Self-Check: PASSED

All 9 files verified present. Both task commits (7724682, 846625f) verified in git log.

---
*Phase: 01-domain-nap-coming-soon*
*Completed: 2026-03-15*
