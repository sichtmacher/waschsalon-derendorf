---
phase: 01-domain-nap-coming-soon
plan: 02
subsystem: ui
tags: [astro, react, shader, glassmorphism, coming-soon, tailwind, google-maps]

# Dependency graph
requires:
  - phase: 01-domain-nap-coming-soon/01-01
    provides: Astro 6 scaffold, Tailwind v4, global styles, NAP data
provides:
  - Coming-Soon landing page with fullscreen shader hero
  - Impressum page (DDG ss5)
  - Datenschutzerklaerung page
  - DSGVO-compliant click-to-load Google Maps component
  - React integration for shader components
affects: [02-website-launch]

# Tech tracking
tech-stack:
  added: ["@astrojs/react", "react", "react-dom", "@paper-design/shaders-react"]
  patterns: ["React component hydration via client:load in Astro", "Glassmorphism with backdrop-filter blur", "Click-to-load iframe for DSGVO compliance"]

key-files:
  created:
    - src/components/WarpBackground.tsx
    - src/components/GoogleMap.astro
    - src/layouts/BaseLayout.astro
    - src/pages/impressum.astro
    - src/pages/datenschutz.astro
  modified:
    - src/pages/index.astro
    - astro.config.mjs
    - package.json
    - tsconfig.json

key-decisions:
  - "Switched from Inter to Nunito (body) + Baloo 2 (headings) for warmer, less corporate feel"
  - "Added fullscreen warp shader background instead of static design for visual distinction"
  - "Consolidated all content above-the-fold in a single hero section for immediate impact"
  - "Used glassmorphism (backdrop-filter blur + semi-transparent backgrounds) for info cards"
  - "Teal/cyan color scheme replacing original blue for friendlier, more distinctive branding"

patterns-established:
  - "React hydration: use client:load for interactive shader components in Astro"
  - "DSGVO Maps: click-to-load pattern with placeholder text explaining data transmission"
  - "Glassmorphism cards: rgba(255,255,255,0.12) + backdrop-filter: blur(8px) for content over shader"

requirements-completed: [WEB-08]

# Metrics
duration: ~45min (across 3 iterations with 2 checkpoint rounds)
completed: 2026-03-15
---

# Phase 1 Plan 02: Coming-Soon Pages Summary

**Fullscreen shader hero with warp background, glassmorphism info cards, Nunito/Baloo 2 fonts, and DSGVO-compliant Google Maps -- all content above the fold**

## Performance

- **Duration:** ~45min (across 3 design iterations with 2 checkpoint rounds)
- **Started:** 2026-03-15T17:50:00Z
- **Completed:** 2026-03-15T18:36:00Z
- **Tasks:** 2 (1 auto + 1 human-verify checkpoint)
- **Files modified:** 12 (across 3 commits)

## Accomplishments
- Built complete Coming-Soon site with fullscreen animated shader hero that makes the page visually distinctive
- All NAP data (name, address, email) visible above-the-fold with glassmorphism cards
- DSGVO-compliant Google Maps with click-to-load pattern (no data transmission until user consent)
- Legal pages (Impressum, Datenschutz) with proper DDG ss5 and DSGVO content
- Bilingual: German primary content + English one-liner for international visitors

## Task Commits

Each task was committed atomically:

1. **Task 1: Create BaseLayout, GoogleMap component, and all pages** - `278edc2` (feat)
2. **Task 1 iteration: Redesign with warmer fonts** - `1cf83f1` (feat)
3. **Task 1 iteration: Fullscreen shader hero with compact layout** - `72a4a87` (feat)
4. **Task 2: Visual verification** - Approved by user after 2 checkpoint rounds

## Files Created/Modified
- `src/components/WarpBackground.tsx` - React shader component using @paper-design/shaders-react Warp
- `src/components/GoogleMap.astro` - Click-to-load DSGVO-compliant Maps embed
- `src/layouts/BaseLayout.astro` - HTML skeleton with fonts, meta, footer with legal links
- `src/pages/index.astro` - Fullscreen shader hero with all NAP data above-the-fold
- `src/pages/impressum.astro` - Legal Impressum page (DDG ss5)
- `src/pages/datenschutz.astro` - Datenschutzerklaerung page
- `astro.config.mjs` - Added React integration, Nunito + Baloo 2 fonts
- `package.json` - Added React, @astrojs/react, @paper-design/shaders-react dependencies
- `tsconfig.json` - Added React JSX configuration

## Decisions Made
- **Font change:** Switched from Inter (plan default) to Nunito + Baloo 2 after user feedback that Inter looked too generic/corporate
- **Shader background:** Added animated warp shader after user wanted more visual personality -- the site now has a distinctive teal/cyan animated background that sets it apart from template sites
- **Compact layout:** User requested all info above-the-fold -- consolidated everything into a single fullscreen hero section instead of separate sections with scrolling
- **Color scheme:** Changed from blue (#1D4ED8) to teal/cyan palette for a friendlier, more distinctive feel

## Deviations from Plan

### Design iterations driven by checkpoint feedback

**1. [Checkpoint feedback] Font and visual personality overhaul**
- **Found during:** Task 2 checkpoint (first round)
- **Issue:** User said Inter font looked too generic and site lacked personality
- **Fix:** Switched to Nunito/Baloo 2, added washer icon, teal color scheme
- **Committed in:** 1cf83f1

**2. [Checkpoint feedback] Compact above-the-fold layout with shader**
- **Found during:** Task 2 checkpoint (second round)
- **Issue:** User wanted all info visible without scrolling, wanted animated background
- **Fix:** Added WarpBackground React shader component, consolidated all content into single fullscreen hero with glassmorphism cards
- **Committed in:** 72a4a87

**3. [Rule 3 - Blocking] Added React integration for shader component**
- **Found during:** Shader implementation
- **Issue:** @paper-design/shaders-react requires React; Astro project had no React integration
- **Fix:** Added @astrojs/react, react, react-dom; configured tsconfig for JSX
- **Files modified:** astro.config.mjs, package.json, tsconfig.json
- **Committed in:** 72a4a87

---

**Total deviations:** 2 design iterations (checkpoint-driven) + 1 auto-fixed (Rule 3 blocking)
**Impact on plan:** Design iterations improved quality significantly based on user feedback. React integration was necessary for shader component. No scope creep -- all changes serve the same plan objective.

## Issues Encountered
None beyond the design iteration feedback handled through checkpoints.

## User Setup Required
None - no external service configuration required.

## Next Phase Readiness
- Coming-Soon site is ready for Netlify deployment (Phase 1 complete after deployment config in 01-01)
- BaseLayout, GoogleMap component, and font setup carry forward to Phase 2 (Website Launch)
- Phase 2 will replace Coming-Soon content with full website (prices, hours, FAQ, Schema markup)
- Shader background pattern established -- can be reused or evolved in Phase 2

## Self-Check: PASSED

All 6 key files verified present. All 3 commits (278edc2, 1cf83f1, 72a4a87) verified in git log.

---
*Phase: 01-domain-nap-coming-soon*
*Completed: 2026-03-15*
