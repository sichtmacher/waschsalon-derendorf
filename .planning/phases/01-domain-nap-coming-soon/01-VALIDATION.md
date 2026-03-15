---
phase: 1
slug: domain-nap-coming-soon
status: draft
nyquist_compliant: false
wave_0_complete: false
created: 2026-03-15
---

# Phase 1 — Validation Strategy

> Per-phase validation contract for feedback sampling during execution.

---

## Test Infrastructure

| Property | Value |
|----------|-------|
| **Framework** | Manual validation (static site, no application logic) |
| **Config file** | none — Wave 0 scaffolds project |
| **Quick run command** | `npm run build` |
| **Full suite command** | `npm run build && npx astro preview` |
| **Estimated runtime** | ~5 seconds |

---

## Sampling Rate

- **After every task commit:** Run `npm run build`
- **After every plan wave:** Run `npm run build` + manual check of rendered pages
- **Before `/gsd:verify-work`:** Full suite must be green
- **Max feedback latency:** 5 seconds

---

## Per-Task Verification Map

| Task ID | Plan | Wave | Requirement | Test Type | Automated Command | File Exists | Status |
|---------|------|------|-------------|-----------|-------------------|-------------|--------|
| 1-01-01 | 01 | 1 | WEB-08 | smoke | `npm run build` | ❌ W0 | ⬜ pending |
| 1-01-02 | 01 | 1 | WEB-08 | smoke | `npm run build && grep -r "fonts.googleapis.com" dist/ && echo "FAIL" \|\| echo "PASS"` | ❌ W0 | ⬜ pending |
| 1-01-03 | 01 | 1 | WEB-08 | smoke | `npm run build && test -f dist/robots.txt && test -f dist/sitemap-index.xml` | ❌ W0 | ⬜ pending |
| 1-01-04 | 01 | 1 | WEB-08 | manual-only | DNS + Netlify deploy verification | N/A | ⬜ pending |
| 1-01-05 | 01 | 1 | WEB-08 | manual-only | User verifies in GSC dashboard | N/A | ⬜ pending |
| 1-01-06 | 01 | 1 | WEB-08 | manual-only | Push commit, verify Netlify rebuilds | N/A | ⬜ pending |

*Status: ⬜ pending · ✅ green · ❌ red · ⚠️ flaky*

---

## Wave 0 Requirements

- [ ] Project scaffolding (`npm create astro@latest`) — no project exists yet
- [ ] `package.json` with build scripts — created during scaffolding
- [ ] Basic smoke test script for font self-hosting check

---

## Manual-Only Verifications

| Behavior | Requirement | Why Manual | Test Instructions |
|----------|-------------|------------|-------------------|
| Site accessible at custom domain | WEB-08 | Requires DNS propagation + Netlify config | 1. Open waschsalon-derendorf.de in browser 2. Verify Coming-Soon page loads |
| Google Search Console configured | WEB-08 | Requires user's Google account | 1. Log into GSC 2. Verify domain property exists 3. Submit sitemap |
| Auto-deploy on git push | WEB-08 | Requires Netlify account + git push | 1. Push a commit 2. Verify Netlify rebuilds automatically |

---

## Validation Sign-Off

- [ ] All tasks have `<automated>` verify or Wave 0 dependencies
- [ ] Sampling continuity: no 3 consecutive tasks without automated verify
- [ ] Wave 0 covers all MISSING references
- [ ] No watch-mode flags
- [ ] Feedback latency < 5s
- [ ] `nyquist_compliant: true` set in frontmatter

**Approval:** pending
