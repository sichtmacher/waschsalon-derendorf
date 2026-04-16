---
phase: 2
slug: website-launch
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-04-16
---

# Phase 2 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Playwright 1.59.x (E2E + axe) + @lhci/cli 0.15.x (Lighthouse CI) |
| **Config file** | `playwright.config.ts` + `lighthouserc.json` (Wave 0 installs both) |
| **Quick run command** | `npx playwright test --project=chromium` |
| **Full suite command** | `npm run test:e2e && npm run test:lhci` |
| **Estimated runtime** | ~60 seconds (quick) / ~180 seconds (full incl. Lighthouse) |

---

## Sampling Rate

- **After every task commit:** Run `npx playwright test --project=chromium --grep {plan-id}` (task-scoped)
- **After every plan wave:** Run `npm run test:e2e` (full Playwright suite)
- **Before `/gsd:verify-work`:** Full suite green + Lighthouse CI ≥ 90/90/95/95 (Perf/A11y/BP/SEO)
- **Max feedback latency:** 60 seconds per task

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| TBD | TBD | TBD | TBD | TBD | TBD | TBD | ⬜ pending |

*Filled by planner in step 8. Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] `playwright.config.ts` — base config, chromium + webkit projects, `baseURL` = preview URL
- [ ] `tests/e2e/home.spec.ts` — critical-path stubs (hero visible, sticky-nav appears after hero, sections anchor)
- [ ] `tests/e2e/a11y.spec.ts` — `@axe-core/playwright` integration, zero critical violations
- [ ] `tests/e2e/seo.spec.ts` — JSON-LD presence (`LocalBusiness` + `FAQPage`), validates via `schema-dts` or direct JSON parse
- [ ] `tests/e2e/dsgvo.spec.ts` — Maps consent gate, no-external-fonts on initial load, no-tracker requests
- [ ] `lighthouserc.json` — perf/a11y/bp/seo thresholds, budgets for LCP < 2.5s / CLS < 0.1 / TBT < 200ms
- [ ] `package.json` — scripts `test:e2e`, `test:a11y`, `test:lhci`
- [ ] Dev dependencies: `@playwright/test@^1.59`, `@axe-core/playwright@^4.11`, `@lhci/cli@^0.15`

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Rich-Result preview in Google Search Console | WEB-03 (LocalBusiness JSON-LD) | Requires deployed URL + Google indexing | After Netlify deploy, paste URL into https://search.google.com/test/rich-results → expect "LocalBusiness" + "FAQPage" detected without errors |
| Impressum legal content review | WEB-07 | Requires legal judgement on GmbH-i.G. Haftungsklausel | Laura Maskos proofreads; compare vs. eRecht24 Muster for GmbH i.G. |
| Datenschutzerklärung completeness | WEB-07 | Requires legal judgement (Art. 13 DSGVO checklist) | Laura Maskos proofreads; Google Fonts self-hosted clause present, Videoüberwachung clause present (D-19) |
| Visual regression across breakpoints (375px/768px/1280px) | WEB-02 | Requires human aesthetic judgement | Manual screenshot review on Netlify preview; compare to UI-SPEC Hero/Pricing/FAQ/Anfahrt mockups |
| German copy review (du-Form, Ton, keine Tippfehler) | D-08/D-13/D-23 | Native-speaker judgement | Laura Maskos proofreads all ~30 copy strings from UI-SPEC Copywriting Contract |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references (Playwright, axe, LHCI install)
- [ ] No watch-mode flags (`--watch`, `--ui`) in automated commands
- [ ] Feedback latency < 60s per task
- [ ] `nyquist_compliant: true` set in frontmatter (after planner fills task map)

**Approval:** pending
