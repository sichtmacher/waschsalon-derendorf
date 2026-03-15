# Phase 1: Domain, NAP & Coming Soon - Context

**Gathered:** 2026-03-15
**Status:** Ready for planning

<domain>
## Phase Boundary

SEO-Countdown starten: Domain ist registriert, kanonisches NAP-Dokument existiert als interne Referenz, und eine indexierbare Coming-Soon-Seite ist live auf Netlify. Google Search Console ist eingerichtet und die Domain zur Indexierung eingesendet.

</domain>

<decisions>
## Implementation Decisions

### Coming-Soon-Seite — Inhalt
- Minimal-Ansatz: Name, Adresse, Eröffnungszeitraum, kurzer Beschreibungssatz
- Überschrift: "Waschsalon Derendorf"
- Beschreibung: kurzer Satz wie "Dein neuer SB-Waschsalon in Derendorf"
- Adresse als Text: Münsterstr. 88, 40625 Düsseldorf
- Eröffnungszeitraum: "2026" (bewusst vage, kein konkretes Quartal)
- Email-Adresse anzeigen (info@waschsalon-derendorf.de) — Setup noch offen, erstmal als Text
- Kein Telefon auf der Seite (Nummer steht noch nicht fest)
- Zweisprachig: Deutsch + kurzer englischer Satz (z.B. "Self-service laundromat — Opening 2026")
- Google Maps Click-to-load eingebettet (DSGVO-konform, erst nach Klick laden)
- Footer mit Impressum + Datenschutzerklärung als eigene Unterseiten

### Coming-Soon-Seite — Visueller Stil
- Clean/Neutral: weißer Hintergrund, serifenlose Schrift, kein Logo
- Farbpalette:
  - Dunkelblau #1D4ED8 (Akzent, Buttons, Links)
  - Hellblau #E0F2FE (Hintergrund-Akzent)
  - Weiß #FFFFFF (Haupthintergrund)
  - Hellgrau #F3F4F6 (Sections)
  - Dunkelgrau #1F2937 (Text)
- Self-hosted Google Font (konkrete Font: Claude's Discretion)
- Emoji-Favicon (🧺) + Tab-Titel "Waschsalon Derendorf"

### Domain
- Domain: waschsalon-derendorf.de (bereits bei IONOS registriert)
- DNS: IONOS-Panel → Netlify konfigurieren
- Keine zusätzlichen Domain-Varianten geplant
- Email-Setup noch offen (IONOS-Mail wahrscheinlich, aber nicht in Phase 1 Scope)

### NAP-Dokument
- Geschäftsname: **Waschsalon Derendorf** (exakt so auf allen Plattformen)
- Adresse: **Münsterstr. 88, 40625 Düsseldorf** (bestätigt)
- Telefon: Format **+49 211 XXXXXXX** (Nummer wird nachgetragen)
- Website: **https://waschsalon-derendorf.de**
- Dokument-Ablageort: Claude's Discretion

### SEO-Vorlauf
- Basis-SEO: Title Tag, Meta Description, robots.txt, sitemap.xml
- Self-hosted Font (keine Google Fonts CDN-Requests)
- Kein Schema Markup auf der Coming-Soon-Seite (kommt in Phase 2)
- Google Search Console: Setup wird dokumentiert, Konto-Wahl später
- Neuer Netlify-Account wird angelegt

### Claude's Discretion
- Konkrete Google Font Wahl (passend zu Clean-Design und Farbpalette)
- NAP-Dokument Ablageort (vermutlich .planning/NAP.md)
- Exaktes Layout/Spacing der Coming-Soon-Seite
- Impressum/Datenschutz Inhalt (rechtlich korrekt für gewerbliche Seite)
- Google Maps Platzhalter-Text vor Click-to-load

</decisions>

<specifics>
## Specific Ideas

- Farbpalette steht fest: Dunkelblau #1D4ED8 / Hellblau #E0F2FE / Weiß / Hellgrau #F3F4F6 / Dunkelgrau #1F2937
- Zweisprachig (DE + kurzer EN-Satz) obwohl Mehrsprachigkeit erst v2 ist — hier nur ein Einzeiler
- Maps Click-to-load schon auf Coming-Soon trotz Minimal-Ansatz — User findet Orientierung wichtig
- Impressum + Datenschutz von Tag 1 — rechtliche Sauberkeit hat Priorität

</specifics>

<code_context>
## Existing Code Insights

### Reusable Assets
- Keine — Greenfield-Projekt, kein bestehender Code

### Established Patterns
- Stack entschieden: Astro 6 + Tailwind v4 + Netlify (aus STATE.md)
- Kein Vercel (commercial use restrictions)

### Integration Points
- IONOS DNS → Netlify Custom Domain
- Netlify Git-Deployment (neue Commits → automatisch live)

</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope

</deferred>

---

*Phase: 01-domain-nap-coming-soon*
*Context gathered: 2026-03-15*
