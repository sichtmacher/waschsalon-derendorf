---
phase: 02-website-launch
plan: 01
subsystem: testing
tags: [playwright, axe-core, lighthouse-ci, typescript, jsonld, faq, e2e]

# Dependency graph
requires:
  - phase: 01-domain-nap-coming-soon
    provides: Astro 6 project scaffold, NAP data, GoogleMap.astro consent component, site URL
provides:
  - Wave 0 test infrastructure: Playwright + @axe-core/playwright + Lighthouse CI wired into npm scripts
  - playwright.config.ts (chromium-desktop + chromium-mobile projects, baseURL 4321, webServer)
  - lighthouserc.json (LCP <=2500ms, CLS <=0.1, perf/a11y/seo budgets on /, /impressum, /datenschutz)
  - 9 E2E spec files covering WEB-01..07 + WEB-10 (50 tests, currently RED by design)
  - src/data/faq.ts — single source of truth with 12 locked FAQ Q&A verbatim from UI-SPEC
  - src/lib/schema.ts — LocalBusinessInput interface + localBusinessJsonLd/faqPageJsonLd signatures (throwing stubs; impl lands in 02-04)
affects: [02-02 homepage, 02-03 legal pages, 02-04 JSON-LD + SEO wire-up, 02-05 performance/a11y audit]

# Tech tracking
tech-stack:
  added: [@playwright/test@^1.59.1, @axe-core/playwright@^4.11.1, @lhci/cli@^0.15.1, @astrojs/check@^0.9.8, typescript@^5.9.3]
  patterns:
    - "FAQ source-of-truth as typed TS module imported by both UI components and JSON-LD builders"
    - "Interface-first signature publication — downstream plans import from schema.ts before impl lands"
    - "Nyquist-compliant E2E: specs authored in Wave 0 as failing, turn green as Waves 1-3 implement features"
    - "Playwright webServer = build + preview (production parity, not dev-mode)"
    - "@smoke tag convention for fast-path tests (home, above-fold, accordion)"

key-files:
  created:
    - playwright.config.ts
    - lighthouserc.json
    - src/data/faq.ts
    - src/lib/schema.ts
    - tests/e2e/home.spec.ts
    - tests/e2e/above-fold.spec.ts
    - tests/e2e/legal-pages.spec.ts
    - tests/e2e/a11y.spec.ts
    - tests/e2e/dsgvo.spec.ts
    - tests/e2e/schema.spec.ts
    - tests/e2e/seo-meta.spec.ts
    - tests/e2e/accordion.spec.ts
    - tests/e2e/map-consent.spec.ts
  modified:
    - package.json
    - package-lock.json
    - .gitignore

key-decisions:
  - "Install chromium only (no webkit/firefox) to keep CI footprint minimal — plan explicitly forbids"
  - "Install @astrojs/check + typescript to satisfy the plan's npx astro check verify step (Rule 3 auto-fix)"
  - "Use Playwright name=faq-group attribute for single-open accordion (native HTML, no JS)"
  - "JSON-LD type locked to LaundryService (not generic LocalBusiness) — enables laundry-specific rich results"

patterns-established:
  - "Tests authored ahead of features (Nyquist sampling): specs RED at Wave 0, go GREEN as Waves 1-3 ship"
  - "Signature-first interface publication in src/lib/schema.ts — frozen contracts, stub bodies, real impl deferred to 02-04"
  - "Copy contract enforcement: 12 FAQ strings are LOCKED — UI-SPEC contract is the authoritative source"
  - "Consent-gate testing: assert iframes DO NOT load on initial render, only after user click"
  - "DSGVO request-spy pattern: page.on('request') to verify no ext font/google domains are hit before consent"

requirements-completed: [WEB-01, WEB-02, WEB-03, WEB-04, WEB-05, WEB-06, WEB-07, WEB-10]

# Metrics
duration: 5min
completed: 2026-04-16
---

# Phase 02 Plan 01: Test Infrastructure + Shared Interface Contracts Summary

**Playwright + axe + Lighthouse CI wired with 9 E2E specs (50 tests, RED by design), plus src/data/faq.ts (12 locked Q&A) and src/lib/schema.ts (LocalBusinessInput + JSON-LD signatures as frozen contracts for downstream plans).**

## Performance

- **Duration:** ~5 min
- **Started:** 2026-04-16T13:38:51Z
- **Completed:** 2026-04-16T13:43:14Z
- **Tasks:** 3
- **Files modified:** 16 (13 created, 3 modified)

## Accomplishments

- Playwright (chromium desktop + mobile), @axe-core/playwright, and @lhci/cli installed + scripted
- Lighthouse budget `lighthouserc.json` encodes WEB-05c perf thresholds (LCP <=2500ms, CLS <=0.1, perf >=0.9, a11y >=0.95, seo >=0.95)
- `src/data/faq.ts` shipped with all 12 FAQ Q&A strings verbatim from UI-SPEC Copywriting Contract (bedienung×5, preise×2, service×5)
- `src/lib/schema.ts` publishes `LocalBusinessInput` interface + `localBusinessJsonLd`/`faqPageJsonLd` function signatures — downstream plans (02-02 FaqAccordion, 02-04 SEO wire-up) can import today; real bodies land in plan 02-04
- 9 E2E spec files covering WEB-01 (above-fold), WEB-02 (Maps consent), WEB-03 (Impressum), WEB-04 (DSGVO), WEB-05 (a11y), WEB-06 (LocalBusiness JSON-LD), WEB-07 (SEO meta + sitemap), WEB-10 (FAQ accordion)
- 50 tests discovered by `npx playwright test --list` — all currently RED, which is correct per Nyquist validation strategy
- `npm run build` still succeeds (no regression)
- `npx astro check` returns 0 errors, 0 warnings (1 pre-existing hint on GoogleMap.astro, out of scope)

## Task Commits

Each task was committed atomically with `--no-verify` (parallel-executor convention):

1. **Task 1: Install dev deps + create Playwright/Lighthouse configs** — `00f63e5` (chore)
2. **Task 2: Create src/data/faq.ts + src/lib/schema.ts** — `63e1111` (feat)
3. **Task 3: Write 9 failing E2E spec files** — `43866e9` (test)

**Plan metadata:** to be added in final commit (docs).

## Files Created/Modified

### Created

- `playwright.config.ts` — chromium desktop + mobile projects, baseURL 4321, `webServer: npm run build && npm run preview`, timeouts 30s/120s
- `lighthouserc.json` — 3 URL audits (/, /impressum, /datenschutz), staticDistDir ./dist, LCP/CLS/TBT/INP budgets
- `src/data/faq.ts` — `FaqCategory` union, `FaqEntry` interface, `categoryLabels` record, `faqs` array of 12 entries
- `src/lib/schema.ts` — `LocalBusinessInput` interface, `localBusinessJsonLd()` + `faqPageJsonLd()` signatures (throwing stubs)
- `tests/e2e/home.spec.ts` — smoke: 200 status, lang="de", sticky-nav scroll behavior
- `tests/e2e/above-fold.spec.ts` — smoke: Adresse/Öffnungszeiten/Preise-Teaser in viewport, no mobile overflow, Route-planen CTA
- `tests/e2e/legal-pages.spec.ts` — Impressum (Laura Maskos, Heyestr. 152, GmbH in Gründung, +49 211 54202673, Pitfall-3 guard) + Datenschutz (Google Fonts self-hosted clause, Videoüberwachung, Art. 6 Abs. 1 lit. f DSGVO)
- `tests/e2e/a11y.spec.ts` — axe WCAG 2.2 AA on /, /impressum, /datenschutz
- `tests/e2e/dsgvo.spec.ts` — zero external font requests + zero Google Maps requests before consent
- `tests/e2e/schema.spec.ts` — LaundryService JSON-LD with address/phone/openingHoursSpecification × 7 days + FAQPage with 12 Question entities
- `tests/e2e/seo-meta.spec.ts` — canonical/description/og meta on 3 pages + sitemap-index contents
- `tests/e2e/accordion.spec.ts` — smoke: 12 `<details name="faq-group">` elements + single-open behavior + 3 category headings
- `tests/e2e/map-consent.spec.ts` — no iframe before click, iframe loads with Münsterstr in src after click

### Modified

- `package.json` — added devDependencies (@playwright/test, @axe-core/playwright, @lhci/cli, @astrojs/check, typescript) + 4 scripts (test:e2e, test:e2e:smoke, test:lhci, test:all)
- `package-lock.json` — dependency lockfile update
- `.gitignore` — added test-results, playwright-report, blob-report, playwright/.cache, .lighthouseci

## Decisions Made

- **Chromium-only browser install:** Plan explicitly forbids webkit/firefox to keep CI footprint small. `npx playwright install --with-deps chromium` only.
- **Install @astrojs/check + typescript:** The plan's Task-2 verify step calls `npx astro check`. That package wasn't present, so installing it satisfies the acceptance criterion without changing project semantics. (Auto-fix under Rule 3 — see Deviations.)
- **Copy-fidelity:** UTF-8 encoding, `€` symbol, en-dash `—`, German umlauts (ä/ö/ü/ß), `°C` all preserved verbatim in src/data/faq.ts per UI-SPEC Copywriting Contract.
- **Signature-freeze in schema.ts:** Bodies throw with message `implementation pending — see plan 02-04`. Downstream plans import the signatures now; 02-04 fills in real JSON-LD generation logic without needing interface changes.

## Deviations from Plan

### Auto-fixed Issues

**1. [Rule 3 — Blocking] Installed @astrojs/check + typescript as devDependencies**

- **Found during:** Task 2 (FAQ/schema file creation)
- **Issue:** The plan's `<verify>` step for Task 2 runs `npx astro check --minimumFailingSeverity error`. On first invocation Astro prompted `@astrojs/check not installed — run npm i @astrojs/check typescript`. This is a blocking dependency for the plan's own verification step.
- **Fix:** Ran `npm i -D @astrojs/check typescript`. Re-ran `npx astro check` — returned 0 errors, 0 warnings (1 pre-existing hint on `src/components/GoogleMap.astro` about `script define:vars` inline attribute; that file is out of scope for this plan, so logged as observation not fixed).
- **Files modified:** `package.json`, `package-lock.json`
- **Verification:** `npx astro check --minimumFailingSeverity error` exits 0.
- **Committed in:** `63e1111` (Task 2 commit, bundled with faq.ts + schema.ts)

---

**Total deviations:** 1 auto-fixed (1 blocking)
**Impact on plan:** Zero scope creep. Satisfies the plan's own verify command.

## Issues Encountered

- **Pre-existing hint in `src/components/GoogleMap.astro`:** Astro warned `<script define:vars={{ mapUrl }}>` will be treated as `is:inline`. This is from Phase 01-02 and affects neither the build nor runtime. Out of scope for Plan 02-01 — noted for reference but not fixed. If it becomes a concern, plan 02-04 (which touches GoogleMap for consent flow) can address it or it gets logged to `deferred-items.md`.

## User Setup Required

None — no external service configuration required for this plan.

## Next Phase Readiness

**Ready for parallel Wave 1 execution (02-02 homepage, 02-03 legal pages):**

- Both plans can now import `import { faqs, categoryLabels } from '../data/faq'`.
- Both plans can now import `import { localBusinessJsonLd, faqPageJsonLd, type LocalBusinessInput } from '../lib/schema'` — callers will throw at runtime until 02-04 implements, but signatures compile today.
- Wave 1/2/3 executors can run `npm run test:e2e` to see red/green feedback per WEB-* requirement as they land.
- `npm run build` still succeeds — Astro compiles cleanly with the new `src/data` and `src/lib` directories.
- `npx playwright test --list` discovers 50 tests across 2 projects.

**No blockers for downstream plans.** The RED test state is expected and correct per 02-VALIDATION.md Nyquist sampling strategy.

---
*Phase: 02-website-launch*
*Completed: 2026-04-16*

## Self-Check: PASSED

All 14 artifact files present on disk. All 3 task commits present in git log (00f63e5, 63e1111, 43866e9).
