# Phase 2: Website Launch - Context

**Gathered:** 2026-04-16
**Status:** Ready for planning

<domain>
## Phase Boundary

Vollständige, rechtskonforme und SEO-optimierte Website ist live — jede Frage eines potenziellen Kunden wird beantwortet. Eine Single-Page mit Hero, Öffnungszeiten, Preisen (inkl. Ausstattung), FAQ und Anfahrt; dazu Impressum und Datenschutz als separate Unterseiten. LocalBusiness JSON-LD, Mobile-first, Core Web Vitals <3s, DSGVO-konform (Maps click-to-load, keine externen Fonts).

**Requirements in scope:** WEB-01, WEB-02, WEB-03, WEB-04, WEB-05, WEB-06, WEB-07, WEB-10
**Nicht in scope:** Fotogalerie (WEB-09, Phase 6), Mehrsprachigkeit (v2)

</domain>

<decisions>
## Implementation Decisions

### Seitenarchitektur
- **D-01:** Single-Page Long-Scroll als Startseite mit Ankernavigation — alle Kerninfos auf `/`
- **D-02:** Reihenfolge der Sections: Hero → Öffnungszeiten → Preise (inkl. Ausstattung) → FAQ → Anfahrt
- **D-03:** Impressum und Datenschutz bleiben eigene Seiten (`/impressum`, `/datenschutz`) — bereits in Phase 1 angelegt
- **D-04:** Sticky Mini-Nav erscheint nach Hero-Scroll mit Anker-Links (Preise, FAQ, Kontakt) — kein Nav im Hero selbst
- **D-05:** Ausstattungs-Infos (Maschinengrößen, Trockner, Waschmittel) werden in die Preis-Section integriert, keine eigene Ausstattungs-Section

### Hero & Above-the-Fold
- **D-06:** WarpBackground-Shader bleibt als Fullscreen-Hero — visuelle Identität erhalten, Content wird aber erweitert
- **D-07:** Above-the-Fold sichtbar: **Adresse, Öffnungszeiten, Preise-Teaser** (Success Criteria #1) — via erweiterte Glassmorphism-Pills/Info-Blocks
- **D-08:** Pre-Opening-Status dezent kommuniziert (kleines Badge/Zeile "Eröffnung 2026"), keine großen Feier-Emojis — Seite soll evergreen funktionieren, Badge später leicht entfernbar
- **D-09:** Primärer CTA im Hero: "Route planen" Button (öffnet Google/Apple Maps mit Adresse vorausgefüllt)
- **D-10:** Kontakt (Telefon + Email) bleibt weiter unten, nicht above-the-fold

### Preis- & FAQ-Darstellung
- **D-11:** Preise als Pricing-Cards pro Maschinengröße: Icon + Bezeichnung + Preis + Dauer + Feature-Pills. Mobile stacked, Desktop 2-3 nebeneinander
- **D-12:** FAQ als Accordion-Komponente mit FAQPage JSON-LD Schema für Google Rich Results
- **D-13:** 12 FAQ-Fragen in 3 thematischen Bereichen (kuratiert aus waschsalon.ai):
  - **Bedienung & Technik:** Wie funktioniert der Waschsalon? / Dauer Wasch- und Trockengang / Verfügbare Programme / Maschinen für große Stücke / Waschmittel mitbringen?
  - **Preise & Bezahlung:** Was kostet eine Wäsche/Trockengang? / Karte oder Münze?
  - **Service & Standort:** Öffnungszeiten / WLAN + Sitzmöglichkeiten / Parkmöglichkeiten / Verlassen während Waschgang / Videoüberwachung

### Content-Fakten (Betrieb)
- **D-14:** **Öffnungszeiten:** Montag bis Sonntag, 06:00–22:00 Uhr (täglich, keine Ausnahme)
- **D-15:** **Waschmaschinen:** 7 kg ab 5,00 € · 15 kg ab 10,00 € — konkrete Anzahl bewusst nicht fixiert (Tendenz 10 Maschinen, aber in Website nicht zu nennen)
- **D-16:** **Trockner:** 15 kg, **1,80 € pro 10 Minuten** — Anzahl ca. 4, nicht auf Website nennen
- **D-17:** **Zahlung:** Bar + Karte (beide Wege angeben)
- **D-18:** **Waschmittel:** vor Ort verfügbar (Automat angenommen, Details offen)
- **D-19:** **Ausstattung:** WLAN ja, Videoüberwachung ja
- **D-20:** **Parken/Anfahrt:** Straßenparkplätze + Parkhaus in der Nähe + gute Bahnanbindung (im FAQ und in Anfahrt-Section erwähnen)

### Content-Fakten (Impressum)
- **D-21:** **Betreiber im Impressum:** Laura Maskos als natürliche Person · Heyestr. 152, 40625 Düsseldorf
- **D-22:** **Rechtsform:** GmbH in Gründung (noch kein HR-Eintrag) → Hinweis "Eintragung in das Handelsregister folgt" aufnehmen, kein HRB, keine USt-IdNr. (beides "entfällt bzw. folgt")
- **D-23:** **Update-Pflicht:** Sobald GmbH im HR eingetragen ist, Impressum auf Gesellschaftsform ("[Firma] GmbH, vertreten durch Laura Maskos, HRB [...], USt-IdNr. [...]") umstellen — als Follow-Up-Task in zukünftiger Phase notieren
- **D-24:** **Telefon in Impressum und Site:** +49 211 54202673 (aus NAP-Dokument)

### Technische SEO & Compliance (aus Requirements + Success Criteria)
- **D-25:** LocalBusiness JSON-LD auf Startseite mit Name, Adresse, Telefon, Öffnungszeiten, Kategorie "Waschsalon" (schema.org/LaundryService)
- **D-26:** FAQPage JSON-LD eingebettet in FAQ-Section
- **D-27:** Maps weiterhin click-to-load via bestehende `GoogleMap.astro` Komponente — nichts extern ohne Consent
- **D-28:** Keine externen Fonts — Astro Fonts API bleibt (Nunito + Baloo 2 self-hosted, bereits aus Phase 1)
- **D-29:** Sitemap + robots.txt bereits aus Phase 1; sitemap muss nach Launch neue Routen enthalten (astro sitemap plugin regeneriert automatisch)
- **D-30:** Core Web Vitals <3s als Pflicht-Gate — Shader-Performance auf Mobile prüfen, ggf. mobil-reduziert rendern

### Claude's Discretion
- Konkretes Glassmorphism-Styling und Spacing der Above-Fold Info-Pills
- Genaue Anordnung der Pricing-Cards (Desktop-Spaltenzahl)
- FAQ-Kategorisierung sichtbar darstellen oder Gruppen-Header zwischen Accordions einsetzen (12 Fragen rechtfertigen Gruppen-Header)
- Icon-Auswahl für Pricing-Cards (Waschmaschine, Trockner, Zahlung, WLAN)
- Accordion-Interaktion (einzel-offen vs. multi-offen)
- Scroll-Verhalten der Sticky Mini-Nav (Threshold, Shadow, Background-Blur)
- Shader-Mobile-Fallback bei schlechten Core Web Vitals

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning oder implementing.**

### Projekt-Fundament
- `.planning/PROJECT.md` — Vision, Zielgruppe, Constraints
- `.planning/REQUIREMENTS.md` — Detaillierte Requirements WEB-01 bis WEB-10
- `.planning/ROADMAP.md` §"Phase 2: Website Launch" — Goal, Success Criteria, Abhängigkeiten
- `.planning/NAP.md` — Kanonische Geschäftsdaten (Name, Adresse, Telefon, Email) für alle Plattformen

### Phase 1 Artefakte (Übernahme & Wiederverwendung)
- `.planning/phases/01-domain-nap-coming-soon/01-CONTEXT.md` — Fonts, Farben, Design-Prinzipien, Tech-Stack
- `.planning/phases/01-domain-nap-coming-soon/01-02-SUMMARY.md` — Implementierungs-Zusammenfassung Coming-Soon-Seite

### Bestehender Code (nicht neu bauen, erweitern)
- `src/layouts/BaseLayout.astro` — Basis-Layout mit Font-Preload und Footer-Nav
- `src/components/GoogleMap.astro` — DSGVO-konformes click-to-load Maps
- `src/components/WarpBackground.tsx` — Shader-Hintergrund (wiederverwenden, eventuell Mobile-Fallback ergänzen)
- `src/pages/index.astro` — aktueller Hero, wird erweitert (nicht neu geschrieben)
- `src/pages/impressum.astro`, `src/pages/datenschutz.astro` — Platzhalter-Struktur vorhanden, mit D-21/D-22 Daten füllen
- `src/styles/global.css` — Farb-Tokens (Teal-Cyan), Animations — Tokens erweitern falls nötig

### Externe Referenzen
- https://waschsalon.ai/faq/ — Quelle für FAQ-Themen (Antworten werden mit den Fakten D-14 bis D-20 neu formuliert)
- Google Rich Results Test (https://search.google.com/test/rich-results) — Validierung der JSON-LD Snippets vor Go-Live
- schema.org/LaundryService — Schema-Typ für Waschsalon

</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- **BaseLayout.astro** — bereits mit Font-Preload und Footer-Links (Impressum/Datenschutz). Für Phase 2 ergänzen: slot für Sticky-Nav, LocalBusiness JSON-LD im `<head>`
- **GoogleMap.astro** — bereits DSGVO-konform, wird in der neuen Anfahrt-Section wiederverwendet
- **WarpBackground.tsx** — bleibt im Hero. Eventuell Performance-Variante für Mobile (niedrigere Sample-Rate) ergänzen
- **impressum.astro / datenschutz.astro** — Skeleton-Struktur vorhanden; Platzhalter [Vor- und Nachname], [Telefonnummer folgt], [Registergericht] ersetzen durch D-21 bis D-24

### Established Patterns
- Astro 6 Style: `---` Frontmatter + JSX-artiges Template, inline `style={...}` für dynamische CSS-Variablen
- Tailwind v4 via `@import "tailwindcss"` in global.css, Utility-Klassen direkt im Markup
- Farb-Tokens via CSS-Custom-Properties in `global.css` (`--color-brand`, `--color-text`, `--color-text-muted`)
- Fonts über `astro:assets` Font-API mit `cssVariable`

### Integration Points
- Neue Sections werden in `src/pages/index.astro` ergänzt (unter bestehendem Hero-Section)
- Sticky-Nav als neue Komponente `src/components/StickyNav.astro`
- Pricing-Cards als neue Komponente `src/components/PriceCard.astro` oder inline (je nach Wiederverwendung)
- FAQ als neue Komponente `src/components/FaqAccordion.astro` mit JSON-LD Generator (`src/lib/schema.ts`) für FAQPage Schema
- LocalBusiness JSON-LD entweder in `BaseLayout.astro` (für alle Seiten) oder im `<head>`-Slot nur der Startseite

</code_context>

<specifics>
## Specific Ideas

- **Shader als "Signature-Moment":** Identität wird aktiv erhalten, nicht nur aus Nostalgie. Der Shader macht den Waschsalon visuell abhebbar von der Konkurrenz (typische lokale Salon-Websites sind sehr statisch). Trade-off: Core Web Vitals sauber halten.
- **"Eröffnung 2026"-Badge dezent:** User will evergreen bauen — der Pre-Opening-Hinweis ist ein Zusatz, kein Hero-Mittelpunkt mehr (im Gegensatz zur Coming-Soon-Seite).
- **Preis-Kommunikation "ab X €":** bewusst gewählt statt Fixpreise, weil Programmwahl den Preis staffelt. "ab 5 €" ist ehrlich und öffnet für Premium-Programme (60°C, Kochwäsche, Öko).
- **Impressum-Logik:** User ist sich bewusst, dass die GmbH-i.G.-Phase juristisch heikel ist. Entscheidung ist, Laura Maskos als natürliche Person einzutragen (persönliche Haftung ohnehin gegeben) und später auf GmbH-Struktur umzustellen. Plan-Phase sollte diesen Hinweis im Impressum-Text direkt einbauen.
- **FAQ-Quelle waschsalon.ai:** User hat die FAQs als strukturelle Vorlage genommen, will aber konkrete Antworten (keine "i.d.R."-Floskeln). Plan-Phase muss jede Antwort mit D-14 bis D-20 konkret ausformulieren.

</specifics>

<deferred>
## Deferred Ideas

- **Anzahl der Maschinen auf Website anzeigen** — User möchte bewusst keine konkrete Anzahl kommunizieren (Flexibilität für Anlaufphase). Entscheidung kann sich post-opening ändern (ggf. Phase 6 oder später).
- **Online-Reservierung / Verfügbarkeitsanzeige** — bereits in PROJECT.md out-of-scope (v2).
- **Mehrsprachigkeit (EN/TR)** — bereits in REQUIREMENTS.md als v2 (WEB-11).
- **Bonuskarten / Rabattsystem** — in waschsalon.ai-FAQ erwähnt, aber für v1 nicht entschieden. Bewusst aus FAQ-Set weggelassen, da noch keine Policy.
- **Service-Wasch (Abgabe/Abholung)** — aus FAQ weggelassen, weil reine SB. Falls später doch angeboten, wäre neues Requirement.
- **Chemische Reinigung-FAQ** — weggelassen, da irrelevant für SB-Waschsalon-Zielgruppe.
- **Impressum-Update bei HR-Eintrag** — notiert als Follow-Up, nicht Phase 2 selbst. Gehört in eine spätere Admin-Phase oder als Hotfix nach Notartermin/HR-Eintrag.
- **Reservierungs-FAQ** — aus waschsalon.ai vorhanden, aber redundant weil generelle Antwort "nicht möglich" — in v1 nicht eigene Frage, steht indirekt in "Wie funktioniert der Waschsalon?".

### Reviewed Todos (not folded)
Keine — `todo match-phase` hat 0 Treffer geliefert.

</deferred>

---

*Phase: 02-website-launch*
*Context gathered: 2026-04-16*
