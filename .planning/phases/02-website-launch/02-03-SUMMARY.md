---
phase: 02-website-launch
plan: 03
subsystem: legal-pages
tags: [legal, impressum, datenschutz, dsgvo, ddg, compliance]
requirements: [WEB-03, WEB-04]
dependency_graph:
  requires: [02-01]
  provides: [ddg-compliance, dsgvo-compliance, operator-identity-public]
  affects: [02-04]
tech_stack:
  added: []
  patterns: [du-form-tone, locked-operator-data-D21-D24, Pitfall-3-guardrail, Pitfall-7-selfhosted-fonts, Pitfall-8-videoueberwachung]
key_files:
  created: []
  modified:
    - src/pages/impressum.astro
    - src/pages/datenschutz.astro
decisions:
  - Operator address on Impressum is Heyestr. 152 (Laura Maskos ladungsfähige Anschrift), NOT Münsterstr. 88 (Betriebsstätte) — per Pitfall 3
  - Münsterstr. 88 appears ONLY in the Datenschutz Videoüberwachung clause (correct, it identifies the surveilled site)
  - GmbH-i.G. Haftungsklausel uses the literal wording "Bis zur Eintragung haftet Laura Maskos als natürliche Person"
  - Tone normalized to du-Form on both pages (Phase 1 was Sie-Form)
  - Google Fonts DSGVO clause phrased "keine Daten an Google" to match the self-hosted implementation in Phase 1
metrics:
  duration: 2min
  tasks: 2
  files: 2
  completed: 2026-04-16
---

# Phase 02 Plan 03: Legal Pages Content Summary

Populated the DDG §5 / DSGVO legal pages with locked operator data (D-21..D-24) and added the two Abmahn-critical sections (Google Fonts self-hosted clause, Videoüberwachung) that were missing from the Phase-1 Platzhalter-Gerüste.

## Objective Recap

Replace placeholder brackets (`[Vor- und Nachname des Betreibers]`, `[Telefonnummer folgt]`) in Impressum and Datenschutz with real operator data; add two new DSGVO-critical sections (Pitfall 7 + Pitfall 8) required for launch without Abmahnrisiko.

## Implementation Overview

### src/pages/impressum.astro — Full rewrite of content

- **Angaben gemäß DDG §5:** Laura Maskos / Heyestr. 152 / 40625 Düsseldorf (natural-person address, not the Betriebsstätte)
- **Kontakt:** Telefon +49 211 54202673 (clickable `tel:` link), E-Mail (unchanged)
- **Rechtsform (new section):** GmbH in Gründung + literal Haftungsklausel "Bis zur Eintragung haftet Laura Maskos als natürliche Person"
- **Handelsregister:** "Entfällt. Eintragung folgt nach dem Notartermin" (replaced bracket placeholder)
- **Umsatzsteuer-ID:** "Entfällt. USt-IdNr. gemäß §27a UStG folgt nach Eintragung" (replaced bracket placeholder)
- **EU-Streitschlichtung + Verbraucherschlichtung:** unchanged structurally; tone shifted to du-Form ("findest du")
- **Visual chrome unchanged:** max-w-2xl, Teal back-arrow, Baloo 2 headings, muted body color

### src/pages/datenschutz.astro — Full rewrite with section insertion + renumbering

Preserved Phase-1 wording for Hosting, Server-Log-Dateien, Google Maps, SSL, Deine Rechte, Beschwerderecht; only touched:

- **Section 1 Verantwortlicher:** replaced `[Vor- und Nachname des Betreibers]` + Münsterstr. 88 with Laura Maskos / Heyestr. 152 / 40625 Düsseldorf + added telephone (DSGVO Art. 13 requires it here to match Impressum)
- **NEW Section 5 Google Fonts (selbst gehostet):** Nunito + Baloo 2 served from local server, "keine Daten an Google" — Art. 6 Abs. 1 lit. f (Pitfall 7)
- **NEW Section 6 Videoüberwachung vor Ort:** identifies Münsterstr. 88 as surveilled site (correct usage here), Art. 6 Abs. 1 lit. f, 72h auto-overwrite, Hinweisschilder deutlich sichtbar, Auskunftsrecht Art. 15, Beschwerderecht Verweis auf Abschnitt 9 (Pitfall 8 / D-19)
- **Renumbered:** SSL 5→7, Ihre Rechte 6→8, Beschwerderecht 7→9
- **Tone normalized:** all Sie-Form → du-Form (Du hast uns gegenüber, dein Browser, deiner Einwilligung)
- **Section H2 still rendered as Baloo 2, Teal-accented inline links, unchanged layout**

## Files Modified

| File                         | Lines In / Out | Purpose                                             |
| ---------------------------- | -------------- | --------------------------------------------------- |
| src/pages/impressum.astro    | +21 / -13      | Populate operator data, add GmbH-i.G. Haftungsklausel |
| src/pages/datenschutz.astro  | +72 / -37      | Fix Verantwortlicher + insert Fonts & Video sections |

## Commits

| Task | Description                                            | Commit  |
| ---- | ------------------------------------------------------ | ------- |
| 1    | Populate Impressum with Laura Maskos operator data     | 63ca200 |
| 2    | Extend Datenschutz with Google Fonts + Videoüberwachung | 1b7c6e2 |

## Verification Results

### Task 1 acceptance (impressum.astro)

All grep checks pass:
- `Laura Maskos` found
- `Heyestr. 152` found
- `40625 Düsseldorf` found
- `+49 211 54202673` found
- `haftet Laura Maskos als natürliche Person` found
- `GmbH in Gründung` found
- `Angaben gemäß DDG §5` found
- `Münsterstr` occurrences: **0** (Pitfall 3 guardrail satisfied)
- `[Vor- und Nachname` placeholders: **0**
- `[Telefonnummer folgt]` placeholders: **0**

### Task 2 acceptance (datenschutz.astro)

All grep checks pass:
- `Laura Maskos`, `Heyestr. 152`, `40625 Düsseldorf`, `+49 211 54202673` found
- `Google Fonts`, `lokal auf unserem Server`, `keine Daten an Google` found
- `Videoüberwachung` found
- `Münsterstr. 88` present (expected — Betriebsstätte reference inside Videoüberwachung clause only)
- `Art. 6 Abs. 1 lit. f DSGVO` found
- `72 Stunden` found
- `Landesbeauftragte für Datenschutz` found
- `[Vor- und Nachname` placeholders: **0**
- `<section>` tag count: 18 (= 9 open + 9 close — sections 1–9 renumbered correctly)

### Syntax / type check

- `npx astro sync` exits 0 after each write (type generation succeeded, no Astro parse errors)
- Both pages preserve the Phase-1 visual chrome (max-w-2xl, Teal links/back-arrow, Baloo 2 headings, muted body)

## Deviations from Plan

### Tooling deviation — astro check unavailable

**1. [Rule 3 - Tooling] `npx astro check` required interactive install of `@astrojs/check`**
- **Found during:** Task 1 verification
- **Issue:** The plan's `<automated>` verify block calls `npx astro check --minimumFailingSeverity error`. `@astrojs/check` + `typescript` are not in `package.json` devDependencies, and the command prompted for interactive install (would block the agent).
- **Fix:** Substituted `npx astro sync` as a non-interactive type/parse validation. `astro sync` exits 0 on both rewrites, which confirms the `.astro` frontmatter, imports, and top-level JSX all parse and that `BaseLayout` is resolved. A full `npx astro check` run is deferred to Plan 02-04 verifier or a one-time `npm i -D @astrojs/check typescript` pre-step.
- **Files modified:** none (verification-tooling substitution only)
- **Note:** Other parallel agents (02-01/02-02) may want `@astrojs/check` too — not installed here to avoid `package.json` write-conflicts during parallel execution. Log for the parent orchestrator.

### Code-fix deviations

None — both file rewrites followed the plan verbatim.

## Known Stubs

None. Both files are final content; no mock data, placeholders, or "coming soon" strings remain.

## Key Decisions

See frontmatter `decisions:` list. Most load-bearing:

1. **Pitfall 3 guardrail enforced:** Impressum does not mention Münsterstr. 88 anywhere. Datenschutz mentions it exactly once, inside the Videoüberwachung clause, where it correctly identifies the surveilled site (not the operator address).
2. **GmbH-i.G. Haftungsklausel uses the verbatim recommended wording** (Plan Pitfall 3 research).
3. **Google Fonts clause phrased as "keine Daten an Google"** — directly matches the self-hosted font files that Plan 01-02 already shipped (Nunito + Baloo 2 under `/public/fonts/`).

## What This Unblocks

- Plan 02-04 (BaseLayout + head slot + JSON-LD + E2E suite): the `tests/e2e/legal-pages.spec.ts` checks from Plan 02-01 will now pass against both URLs.
- Overall launch readiness: WEB-03 (Impressum DDG §5 compliant) and WEB-04 (Datenschutz DSGVO Art. 13 compliant) are content-complete.

## Self-Check: PASSED

- src/pages/impressum.astro — FOUND (modified, 80 lines)
- src/pages/datenschutz.astro — FOUND (modified, 166 lines)
- Commit 63ca200 — FOUND in `git log`
- Commit 1b7c6e2 — FOUND in `git log`
- All grep acceptance criteria for Task 1 and Task 2 verified passing before commit.
