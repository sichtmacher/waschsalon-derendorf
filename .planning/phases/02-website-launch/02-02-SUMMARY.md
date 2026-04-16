---
phase: 02-website-launch
plan: 02
subsystem: ui

tags: [astro, tailwind-v4, intersection-observer, details-accordion, components, german, wcag]

# Dependency graph
requires:
  - phase: 02-website-launch
    provides: "FAQ data source (src/data/faq.ts) from plan 02-01; Phase 1 tokens in src/styles/global.css; GoogleMap.astro reused from Phase 1"
provides:
  - "StickyNav.astro — zero-hydration sticky mini-nav via IntersectionObserver sentinel"
  - "PriceCard.astro — reusable pricing card with title/price/unit/features/iconSlot props"
  - "FaqAccordion.astro — native <details name='faq-group'> single-open accordion iterating faq.ts"
  - "sections/OpeningHoursSection.astro — id=oeffnungszeiten with client-side open/closed status pill"
  - "sections/PricingSection.astro — id=preise with 3 locked PriceCard instances"
  - "sections/FaqSection.astro — id=faq wrapping FaqAccordion"
  - "sections/LocationSection.astro — id=kontakt with NAP + tel/mailto + GoogleMap"
affects: [02-04 (wire-up into index.astro), 02-05 (accessibility/perf validation)]

# Tech tracking
tech-stack:
  added: []
  patterns:
    - "IntersectionObserver sentinel pattern for scroll-triggered UI without JS frameworks"
    - "Native HTML <details name='shared'> for single-open accordion without JS state"
    - "scroll-margin-top: 4.5rem on every anchorable section (WCAG 2.4.11)"
    - "Section background alternation via inline style (white vs var(--color-surface))"
    - "Inline SVG icons with stroke-width: 2 / stroke-linecap: round to match Phase 1 Lucide look"

key-files:
  created:
    - "src/components/StickyNav.astro"
    - "src/components/PriceCard.astro"
    - "src/components/FaqAccordion.astro"
    - "src/components/sections/OpeningHoursSection.astro"
    - "src/components/sections/PricingSection.astro"
    - "src/components/sections/FaqSection.astro"
    - "src/components/sections/LocationSection.astro"
  modified: []

key-decisions:
  - "Kept StickyNav zero-hydration: IntersectionObserver inside vanilla <script>, no React/Astro island overhead"
  - "Chose native <details name='faq-group'> for single-open behavior — no JS state machine needed, accessible by default"
  - "Inline style tokens (not Tailwind arbitrary values) wherever CSS custom properties are needed — consistent with Phase 1 pattern in GoogleMap.astro"
  - "Öffnungszeiten status pill falls back to 'Öffnungszeiten' if JS fails (progressive enhancement)"

patterns-established:
  - "Section component pattern: id + aria-labelledby + scroll-margin-top: 4.5rem + inline bg-color"
  - "Locked-copy components: every user-facing string copied verbatim from UI-SPEC Copywriting Contract"
  - "Feature-highlight pill pattern: boolean prop toggles amber border/bg for single emphasis per card"

requirements-completed: [WEB-01, WEB-05, WEB-10]

# Metrics
duration: 3min
completed: 2026-04-16
---

# Phase 02 Plan 02: Core Section Components Summary

**Seven Astro components deliver the below-the-fold homepage: zero-hydration sticky nav, 3-card pricing grid with locked prices, native details-accordion FAQ grouping, and NAP+map location section — all strings German-verbatim from UI-SPEC.**

## Performance

- **Duration:** 3m 4s
- **Started:** 2026-04-16T13:39:08Z
- **Completed:** 2026-04-16T13:42:12Z
- **Tasks:** 2 / 2
- **Files created:** 7
- **Files modified:** 0

## Accomplishments

- Three presentational primitives built (StickyNav, PriceCard, FaqAccordion) with strict UI-SPEC token reuse (`--color-brand`, `--color-brand-light`, `--color-surface`, `--color-text`, `--color-accent`, `--color-text-muted`, `--font-heading`, `--font-body`) — zero new tokens declared
- Four homepage section wrappers under `src/components/sections/` each with a stable anchor ID (`#oeffnungszeiten`, `#preise`, `#faq`, `#kontakt`) matching sticky-nav targets and `scroll-margin-top: 4.5rem` for WCAG 2.4.11 (Focus Not Obscured)
- FaqAccordion consumes `src/data/faq.ts` single source of truth (shared with Plan 02-03's FAQPage JSON-LD generator) — no copy duplication risk
- Every locked German string from UI-SPEC Copywriting Contract reproduced verbatim (Ö-umlauts preserved, En-dash in times, € narrow-space, Du-Form, zero Ausrufezeichen)
- Pricing card #2 (15 kg) carries the single amber "Für große Stücke" highlighted feature pill — the sole place `--color-accent` appears on this plan's output (UI-SPEC 10% allocation respected)
- Location section reuses Phase 1 GoogleMap.astro unchanged — consent-gated map placeholder inherited, no visual/behavioural change
- Zero React islands introduced below the hero; FAQ uses native `<details name="faq-group">` so the browser handles single-open behavior without JS
- `prefers-reduced-motion` honored in FaqAccordion (chevron transition disabled)
- `npm run build` exits 0; `npx astro check --minimumFailingSeverity error` reports 0 errors / 0 warnings (1 pre-existing hint in GoogleMap.astro is out of scope)

## Task Commits

Each task was committed atomically (with `--no-verify` per parallel-execution protocol):

1. **Task 1: Create StickyNav.astro + PriceCard.astro + FaqAccordion.astro** — `00b1dc2` (feat)
2. **Task 2: Create four section wrapper components (Öffnungszeiten, Preise, FAQ, Anfahrt)** — `c8f81ff` (feat)

**Plan metadata:** pending (docs commit for SUMMARY + STATE + ROADMAP is the final step below)

## Files Created

- `src/components/StickyNav.astro` — IntersectionObserver sentinel at `top:80vh`, toggles `opacity-0/100` + `pointer-events-none/auto` on the `<nav>`; 3 anchor links to `#preise`, `#faq`, `#kontakt`; frosted-glass background `rgba(255,255,255,0.85)` + `backdrop-filter: blur(12px)` + subtle border-bottom
- `src/components/PriceCard.astro` — Props-typed reusable card (`title`, `price`, `unit`, `features[]`, `iconSlot`); two inline SVG icons (washer, dryer) with hover lift; amber-highlight variant on `features[].highlighted: true`
- `src/components/FaqAccordion.astro` — Imports `faqs, categoryLabels, FaqCategory` from `src/data/faq.ts`; buckets by category in fixed order (bedienung → preise → service); renders 12 `<details name="faq-group">` so opening one closes siblings; custom chevron rotates 180° on `[open]`; focus outline teal 2px
- `src/components/sections/OpeningHoursSection.astro` — Surface-stripe `py-12 md:py-20` section; centered heading "Täglich für dich geöffnet"; one-line hours "Montag bis Sonntag · 06:00 – 22:00 Uhr"; client-side script sets pill text to "Heute geöffnet" or "Gerade geschlossen — morgen ab 06:00"
- `src/components/sections/PricingSection.astro` — White `py-12 md:py-20` section; heading "Preise" + subtitle "Fair und transparent. Zahlung per Karte oder bar."; `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6` with 3 PriceCard instances (7 kg ab 5,00 € / 15 kg ab 10,00 € with amber pill / Trockner 15 kg 1,80 € pro 10 Minuten)
- `src/components/sections/FaqSection.astro` — Surface-stripe `py-12 md:py-20` section; heading "Häufige Fragen" + subtitle "Alles, was du vor deinem ersten Besuch wissen willst."; hosts `<FaqAccordion />`
- `src/components/sections/LocationSection.astro` — White `py-12 md:py-20` section; heading "So findest du uns"; 2-col grid (content + map); NAP "Münsterstr. 88 · 40477 Düsseldorf"; `tel:+4921154202673` + `mailto:info@waschsalon-derendorf.de` with aria-labels; GoogleMap embedded with "Münsterstr. 88, 40477 Düsseldorf"

## Decisions Made

- **Zero-hydration StickyNav.** The sentinel + vanilla `<script>` pattern adds ~350 bytes of inline JS vs. an Astro island that would pull hydration runtime. Chosen because this component lives on every page view and must not block LCP.
- **Native `<details name="faq-group">` for single-open.** HTML's exclusive-group feature (native in all evergreen browsers) handles "close siblings when one opens" with zero JS. Alternative `<button aria-expanded>` + state machine would have added ~200 LOC of logic for identical visual behavior.
- **Inline `style="..."` for token-driven colors.** Astro + Tailwind v4 do not currently support `@theme`-token references via arbitrary-value classes (`bg-[var(--color-brand-light)]` compiles to a literal string, not a CSS var lookup). Inline style is the only way to keep token indirection intact — same decision as Phase 1 in GoogleMap.astro.
- **Status pill defaults to "Öffnungszeiten".** If the inline script fails or is blocked, the pill still reads a sensible German label — no "Loading..." or blank state.
- **Single-run status check, no interval.** Status computed once on DOM load. Users rarely sit on the site across the 06:00/22:00 threshold; adding `setInterval` would cause layout thrash for no value.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 — Blocking] Skipped per-task `astro check` invocation until @astrojs/check landed from parallel plan 02-01**

- **Found during:** Task 1 verification
- **Issue:** `npx astro check` prompted interactively to install `@astrojs/check` + `typescript` as devDependencies. Installing them from this executor would modify `package.json` and `package-lock.json`, which Plan 02-01 explicitly owns (its `files_modified` lists `package.json`). This would create a merge conflict with the parallel 02-01 executor.
- **Fix:** Reverted the speculative `npm install` on `package.json` + `package-lock.json` via `git checkout --`. Relied on the per-task `grep`-based acceptance criteria (all 14 criteria in Task 1 and all 24 in Task 2 passed explicitly). Ran `npx astro check --minimumFailingSeverity error` and `npm run build` once after Plan 02-01 landed its `package.json` update during parallel execution (both produced 0 errors).
- **Files modified:** none (revert was clean)
- **Verification:** `git status --short | grep -i package` returned empty after revert; post-02-01-landing `astro check` reports 0 errors / 0 warnings across 22 files; `npm run build` builds all 3 static routes cleanly.
- **Committed in:** n/a — deviation was pre-commit and fully reverted

---

**Total deviations:** 1 auto-fixed (Rule 3 blocking)
**Impact on plan:** No scope creep. Deviation was required to preserve parallel-plan file ownership (02-01 owns `package.json`). All task-level acceptance criteria verified via grep regardless; final phase-level verification (`astro check` + `npm run build`) ran cleanly once parallel dependencies landed.

## Issues Encountered

- None. All 7 components compiled cleanly on first write; all acceptance criteria (38 in total across both tasks) passed on first verification.

## User Setup Required

None — no external service configuration required. All artifacts are static component files.

## Next Phase Readiness

- **Plan 02-04 (index.astro rewrite) is unblocked.** It can now import:
  - `StickyNav`, `PricingSection`, `FaqSection`, `LocationSection`, `OpeningHoursSection` from `src/components/`
  - The existing `BaseLayout.astro` + `WarpBackground.tsx` hero
  - JSON-LD generator from `src/lib/schema.ts` (owned by Plan 02-03)
- **Protected files untouched per parallel-execution contract:** `src/pages/index.astro` (02-04 owns), `src/layouts/BaseLayout.astro` (02-03 owns), `src/lib/schema.ts` (02-03 owns). Zero merge conflicts expected with 02-01 / 02-03 / 02-04 executors.
- **No regressions to Phase 1 hero.** Phase-1 coming-soon page still builds and renders unchanged (confirmed by `npm run build` output: `/index.html (+30ms)`).

## Self-Check: PASSED

### Created files exist
- `src/components/StickyNav.astro` — FOUND
- `src/components/PriceCard.astro` — FOUND
- `src/components/FaqAccordion.astro` — FOUND
- `src/components/sections/OpeningHoursSection.astro` — FOUND
- `src/components/sections/PricingSection.astro` — FOUND
- `src/components/sections/FaqSection.astro` — FOUND
- `src/components/sections/LocationSection.astro` — FOUND

### Commits exist
- `00b1dc2` — FOUND (Task 1)
- `c8f81ff` — FOUND (Task 2)

### Phase-level verification
- `npm run build` — PASS (3 static routes, 1.40s)
- `npx astro check --minimumFailingSeverity error` — PASS (0 errors, 0 warnings across 22 files)
- `ls src/components/*.astro src/components/sections/*.astro | wc -l` — 8 (7 new + GoogleMap)
- `grep -l "scroll-margin-top" src/components/sections/*.astro | wc -l` — 4
- `grep -q 'name="faq-group"' src/components/FaqAccordion.astro` — PASS

### Protected files untouched
- `src/pages/index.astro` — untouched (02-04 territory)
- `src/layouts/BaseLayout.astro` — untouched (02-03 territory)
- `src/lib/schema.ts` — untouched (02-03 territory)

---
*Phase: 02-website-launch*
*Completed: 2026-04-16*
