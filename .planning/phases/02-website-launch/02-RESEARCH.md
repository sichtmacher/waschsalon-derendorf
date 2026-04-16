# Phase 2: Website Launch — Research

**Researched:** 2026-04-16
**Domain:** Statische Marketing-Website (Astro 6 + React 19 + Tailwind v4 + Netlify) mit LocalBusiness-SEO, DSGVO-Compliance und Core-Web-Vitals-Zielen
**Confidence:** HIGH

## Summary

Phase 2 ist eine **Content- und Komponentenerweiterung** eines bereits stehenden Astro-6-Projekts — nicht ein Greenfield-Setup. Das gesamte Fundament (Stack, Fonts, Farb-Tokens, `BaseLayout`, `GoogleMap`, `WarpBackground`, Netlify-Deploy, Sitemap, `robots.txt`) existiert bereits aus Phase 1 und wird wiederverwendet. Research-Fokus lag deshalb auf den drei neuen Domänen: **(1) SEO-Strukturdaten** (LocalBusiness + FAQPage JSON-LD), **(2) DSGVO-Vervollständigung** (Impressum mit GmbH-i.G.-Klausel, Datenschutz-Ergänzungen für Netlify-Hosting + Google Maps + Videoüberwachung), **(3) Performance & A11y** (Core-Web-Vitals-Gate trotz laufendem WebGL-Shader, WCAG-2.2 Focus-Obscuring bei Sticky-Nav, `prefers-reduced-motion`).

Die Stack-Entscheidungen sind durch UI-SPEC und Phase-1-Code vollständig vorverriegelt — es gibt **keine offenen Stack-Alternativen**. Neue Abhängigkeiten werden **nicht** hinzugefügt (Pricing-Cards, Sticky-Nav, FAQ-Accordion sind hand-gerollte Astro-Komponenten). Validation-Architecture kombiniert **Playwright** (critical-path E2E), **@axe-core/playwright** (A11y), **Lighthouse CI** (Core Web Vitals + Performance-Budget) und **Schema-Validierung** (Google Rich Results Test + schema.org Validator).

**Primary recommendation:** Keine Library-Evaluation nötig — weiter mit Astro 6 / Tailwind v4 / @paper-design/shaders-react / self-hosted Fonts. Fokus der Plan-Phase liegt auf **vier Dingen**: (a) JSON-LD-Helper (`src/lib/schema.ts`) mit LocalBusiness + FAQPage, (b) Impressum-/Datenschutz-Text mit korrekter GmbH-i.G.- und Videoüberwachungs-Klausel, (c) Core-Web-Vitals-Budget mit Mobile-Shader-Fallback-Strategie (Hero nur mit `client:load`, darunter nichts JS-schweres), (d) Validation-Infrastruktur (Playwright + Lighthouse CI + axe) als Wave 0.

---

<user_constraints>
## User Constraints (from CONTEXT.md)

### Locked Decisions

**Seitenarchitektur**
- **D-01:** Single-Page Long-Scroll als Startseite mit Ankernavigation — alle Kerninfos auf `/`
- **D-02:** Reihenfolge der Sections: Hero → Öffnungszeiten → Preise (inkl. Ausstattung) → FAQ → Anfahrt
- **D-03:** Impressum und Datenschutz bleiben eigene Seiten (`/impressum`, `/datenschutz`) — bereits in Phase 1 angelegt
- **D-04:** Sticky Mini-Nav erscheint nach Hero-Scroll mit Anker-Links (Preise, FAQ, Kontakt) — kein Nav im Hero selbst
- **D-05:** Ausstattungs-Infos (Maschinengrößen, Trockner, Waschmittel) in Preis-Section integriert, keine eigene Ausstattungs-Section

**Hero & Above-the-Fold**
- **D-06:** WarpBackground-Shader bleibt als Fullscreen-Hero
- **D-07:** Above-the-Fold sichtbar: Adresse, Öffnungszeiten, Preise-Teaser via Glassmorphism-Pills
- **D-08:** Pre-Opening-Status dezent kommuniziert ("Eröffnung 2026" Badge, keine Emojis)
- **D-09:** Primärer CTA im Hero: "Route planen" Button (Google/Apple Maps)
- **D-10:** Kontakt (Tel + Mail) weiter unten, nicht above-the-fold

**Preis- & FAQ-Darstellung**
- **D-11:** Preise als Pricing-Cards pro Maschinengröße. Mobile stacked, Desktop 2-3 nebeneinander
- **D-12:** FAQ als Accordion mit FAQPage JSON-LD Schema
- **D-13:** 12 FAQ-Fragen in 3 Bereichen (Bedienung & Technik / Preise & Bezahlung / Service & Standort)

**Content-Fakten (Betrieb)**
- **D-14:** Öffnungszeiten: Mo-So 06:00–22:00 Uhr
- **D-15:** Waschmaschinen: 7 kg ab 5,00 € · 15 kg ab 10,00 € (Anzahl nicht nennen)
- **D-16:** Trockner: 15 kg, 1,80 € pro 10 Minuten (Anzahl nicht nennen)
- **D-17:** Zahlung: Bar + Karte
- **D-18:** Waschmittel: vor Ort verfügbar
- **D-19:** Ausstattung: WLAN ja, Videoüberwachung ja
- **D-20:** Parken: Straßenparkplätze + Parkhaus + Bahnanbindung

**Content-Fakten (Impressum)**
- **D-21:** Betreiber: Laura Maskos als natürliche Person, Heyestr. 152, 40625 Düsseldorf
- **D-22:** Rechtsform: GmbH in Gründung — "Eintragung in das Handelsregister folgt", kein HRB, keine USt-IdNr.
- **D-23:** Update-Pflicht nach HR-Eintrag (als Follow-Up notiert — NICHT Phase 2)
- **D-24:** Telefon in Impressum + Site: +49 211 54202673

**Technische SEO & Compliance**
- **D-25:** LocalBusiness JSON-LD auf Startseite (schema.org/LaundryService)
- **D-26:** FAQPage JSON-LD in FAQ-Section
- **D-27:** Maps click-to-load via bestehende `GoogleMap.astro`
- **D-28:** Keine externen Fonts — Astro Fonts API (Nunito + Baloo 2 self-hosted)
- **D-29:** Sitemap + robots.txt bereits vorhanden, Astro-Sitemap-Plugin regeneriert automatisch
- **D-30:** Core Web Vitals <3s als Pflicht-Gate — ggf. Shader mobil reduziert rendern

### Claude's Discretion
- Konkretes Glassmorphism-Styling und Spacing der Above-Fold Info-Pills
- Genaue Anordnung der Pricing-Cards (Desktop-Spaltenzahl)
- FAQ-Kategorisierung sichtbar darstellen oder Gruppen-Header zwischen Accordions einsetzen
- Icon-Auswahl für Pricing-Cards
- Accordion-Interaktion (einzel-offen vs. multi-offen)
- Scroll-Verhalten der Sticky Mini-Nav (Threshold, Shadow, Background-Blur)
- Shader-Mobile-Fallback bei schlechten Core Web Vitals

### Deferred Ideas (OUT OF SCOPE)
- Anzahl der Maschinen auf Website anzeigen (bewusst nicht kommuniziert)
- Online-Reservierung / Verfügbarkeitsanzeige (v2)
- Mehrsprachigkeit EN/TR (WEB-11, v2)
- Bonuskarten / Rabattsystem (noch keine Policy)
- Service-Wasch (Abgabe/Abholung) — reine SB
- Chemische Reinigung-FAQ
- Impressum-Update bei HR-Eintrag (Follow-Up, nicht Phase 2)
- Reservierungs-FAQ
- Fotogalerie (WEB-09, Phase 6)
</user_constraints>

<phase_requirements>
## Phase Requirements

| ID | Description | Research Support |
|----|-------------|------------------|
| WEB-01 | Startseite mit Adresse, Öffnungszeiten und Preisliste | Above-Fold-Pattern via Hero-Pills (D-07) + Pricing-Cards (D-11); ermöglicht durch existierende Glassmorphism-Pills aus Phase 1 + neue `PriceCard.astro` |
| WEB-02 | Kontaktinfo & Anfahrt mit Google Maps (Click-to-load, DSGVO) | `GoogleMap.astro` aus Phase 1 ist bereits DSGVO-konform (bestätigt via Code-Review src/components/GoogleMap.astro) — wird 1:1 in Anfahrt-Section eingesetzt |
| WEB-03 | Impressum (rechtlich korrekt für gewerbliche Seite) | §5 DDG-Anforderungen verifiziert; GmbH-i.G.-Klausel: "Laura Maskos haftet als natürliche Person, Eintragung HR folgt" (D-21/D-22) |
| WEB-04 | Datenschutzerklärung (DSGVO-konform) | Bestehender Text aus Phase 1 (Netlify + Server-Logs + Google Maps + SSL + Rechte + Aufsichtsbehörde) — ergänzen um Abschnitt zu Google Fonts (self-hosted, keine Daten an Google) und Abschnitt zur Videoüberwachung vor Ort (D-19, Art. 6 Abs. 1 lit. f DSGVO) |
| WEB-05 | Mobile-first responsives Design | UI-SPEC definiert Breakpoints (mobile <640 → sm → md → lg → xl); Pricing-Cards 1/2/3 Spalten; Above-Fold-Content verifiziert für iPhone SE 375×667 + Laptop 1280×800 |
| WEB-06 | LocalBusiness JSON-LD Schema Markup | Schema-Typ `LaundryService` (Subtyp von LocalBusiness); `openingHoursSpecification` als Single-Objekt mit 7-Day-Array; Validierung via Google Rich Results Test + schema.org Validator |
| WEB-07 | SEO-Grundlagen (Meta Tags, Sitemap, robots.txt, self-hosted Fonts) | Sitemap + robots.txt aus Phase 1 übernommen; Meta-Description + canonical via Astro `Astro.url` / `Astro.site`; Open-Graph-Tags neu ergänzen in `BaseLayout.astro` |
| WEB-10 | FAQ-Bereich mit häufigen Fragen | 12 Fragen vorgegeben in UI-SPEC (Copywriting Contract Zeile 128–139); FAQPage JSON-LD für Rich-Result-Versuch (eingeschränkt 2026, siehe Pitfall 3); Accordion-Pattern entweder native `<details>` oder `aria-expanded` button |
</phase_requirements>

---

## Standard Stack

### Core (alle bereits installiert — verifiziert via `package.json`)

| Library | Version (installed) | Verified Latest | Purpose | Why Standard |
|---------|---------------------|-----------------|---------|--------------|
| astro | ^6.0.4 | 6.1.7 (2026-04) | SSG-Framework, Build, Fonts-API, Content-Routing | Zero-JS-by-default, ideal für Marketing-Sites mit hohen Core-Web-Vitals-Ansprüchen |
| react | ^19.2.4 | — | React-Island für `WarpBackground.tsx` | Pflicht für @paper-design/shaders-react |
| @astrojs/react | ^5.0.0 | — | React-Integration | Bereits installiert |
| @astrojs/sitemap | ^3.7.1 | 3.7.2 (aktuell) | Auto-Sitemap | Offizielles Astro-Plugin, regeneriert bei Build |
| tailwindcss | ^4.2.1 | — | Utility-First CSS via `@theme` Tokens | Bereits in `global.css` konfiguriert |
| @tailwindcss/vite | ^4.2.1 | — | Vite-Plugin für Tailwind v4 | Standard für Tailwind v4 |
| @paper-design/shaders-react | ^0.0.71 | — | WebGL-Shader (WarpBackground) | Bereits im Einsatz — **NICHT** austauschen |

**Installation:** — keine neuen Dependencies für Phase 2.

### Supporting (nur Dev-Dependencies für Validation-Infrastruktur)

| Library | Version (verified 2026-04-16) | Purpose | When to Use |
|---------|-------------------------------|---------|-------------|
| @playwright/test | 1.59.1 (published 2026-04-16) | Critical-path E2E (Above-Fold, Map-Consent, Accordion) | Wave 0 install; Phase-Gate-Suite |
| @axe-core/playwright | 4.11.1 (published 2026-04-14) | WCAG 2.2 A11y-Scans in E2E-Tests | Bei jedem kritischen Journey-Test |
| @lhci/cli | 0.15.1 (Lighthouse 13.1.0) | Core-Web-Vitals-Gate mit Performance-Budget | CI-Schritt nach Netlify-Preview-Build |

**Install-Block für Plan-Phase:**

```bash
npm i -D @playwright/test @axe-core/playwright @lhci/cli
npx playwright install --with-deps chromium
```

### Alternatives Considered

| Instead of | Could Use | Tradeoff |
|------------|-----------|----------|
| Hand-gerolltes JSON-LD in `src/lib/schema.ts` | `astro-seo-schema` npm-Paket | Extra-Dep für ≤50 Zeilen Code — Hand-Roll ist einfacher, vollständig kontrollierbar |
| `<details>`/`<summary>` native Accordion | Radix Accordion via shadcn | Radix würde React-Bundle erhöhen auf einer statischen Seite — native Element passt zum Ziel "zero-JS below fold" |
| Playwright | Cypress / Vitest-Browser-Mode | Playwright ist in Astro-Docs als offizielle Test-Option dokumentiert, bessere Multi-Browser-Coverage, kleinere CI-Footprint |
| `@axe-core/playwright` | `pa11y-ci` (sitemap-basiert) | Pa11y-CI ist einfacher für reine Static-Audits, aber axe+Playwright erlaubt State-abhängige Tests (z.B. nach Accordion-Öffnung) — Phase 2 hat beides, wählen wir axe+Playwright |
| Lighthouse CI | Unlighthouse (Site-Crawl) | LHCI ist das offizielle Google-Tool, direkt mit Performance-Budget und GitHub-Action-Integration — Unlighthouse nur bei >50 Seiten sinnvoll |

**Version verification** — getestet mit `npm view` am 2026-04-16:
- `astro@6.1.7` (aktuell), `@astrojs/sitemap@3.7.2`, `@playwright/test@1.59.1` (vor 2 Tagen veröffentlicht), `@axe-core/playwright@4.11.1` (vor 2 Tagen veröffentlicht), `@lhci/cli@0.15.1` (uses Lighthouse 13.1.0), `@astrojs/netlify@7.0.7`.

---

## Architecture Patterns

### Recommended Project Structure (Ist-Zustand + Neu für Phase 2)

```
src/
├── layouts/
│   └── BaseLayout.astro          # ERWEITERN: <slot name="head"> für JSON-LD
├── components/
│   ├── GoogleMap.astro           # REUSE (Phase 1)
│   ├── WarpBackground.tsx        # REUSE (Phase 1), optional Mobile-Variante
│   ├── StickyNav.astro           # NEU: Sticky Mini-Nav (IntersectionObserver)
│   ├── PriceCard.astro           # NEU: Pricing-Card-Komponente
│   ├── FaqAccordion.astro        # NEU: FAQ mit <details>/<summary>
│   └── sections/                 # NEU: Empfehlung für klare Trennung
│       ├── HeroSection.astro     # Wrapper um bestehenden Hero-Block
│       ├── OpeningHoursSection.astro
│       ├── PricingSection.astro
│       ├── FaqSection.astro
│       └── LocationSection.astro
├── lib/
│   └── schema.ts                 # NEU: JSON-LD-Generator (LocalBusiness + FAQPage)
├── data/
│   └── faq.ts                    # NEU: FAQ-Datenquelle (12 Q&A aus UI-SPEC)
│                                 #      → einzige Source-of-Truth für Accordion UND JSON-LD
├── pages/
│   ├── index.astro               # REFAKTORIEREN: Sections einhängen, JSON-LD einspeisen
│   ├── impressum.astro           # PLATZHALTER FÜLLEN mit D-21 bis D-24
│   └── datenschutz.astro         # ERGÄNZEN: Abschnitte für Google Fonts (self-hosted) + Videoüberwachung
├── styles/
│   └── global.css                # REUSE, ggf. `scroll-padding-top` auf :root ergänzen
└── [neu:] tests/e2e/
    ├── above-fold.spec.ts        # Success Criterion #1
    ├── map-consent.spec.ts       # DSGVO click-to-load
    ├── accordion.spec.ts         # A11y + Funktionalität
    ├── legal-pages.spec.ts       # Impressum + Datenschutz existieren
    └── a11y.spec.ts              # axe-core Scan
public/
├── _headers                      # NEU: Cache-Control + CSP-Header
├── robots.txt                    # REUSE (Phase 1)
└── favicon.svg                   # REUSE
lighthouserc.json                 # NEU: Performance-Budget
playwright.config.ts              # NEU
netlify.toml                      # REUSE, ggf. Node-Version prüfen
```

### Pattern 1: Einzige FAQ-Source-of-Truth (`src/data/faq.ts`)

**What:** FAQ-Fragen und -Antworten liegen als TypeScript-Array in `src/data/faq.ts`. Sowohl `FaqAccordion.astro` (Rendering) als auch `schema.ts` (JSON-LD) importieren daraus. Keine Duplikation, kein Drift.

**When to use:** Immer, wenn derselbe Content sowohl UI-sichtbar als auch strukturiert (JSON-LD / RSS / Sitemap) ausgegeben wird.

**Example:**

```typescript
// src/data/faq.ts
export interface FaqEntry {
  category: 'bedienung' | 'preise' | 'service';
  question: string;
  answer: string;
}

export const faqs: FaqEntry[] = [
  {
    category: 'bedienung',
    question: 'Wie funktioniert der Waschsalon?',
    answer: 'Du wählst eine freie Maschine, zahlst mit Karte oder Münze direkt an der Maschine, befüllst sie und startest das Programm. Während der Waschgang läuft, kannst du warten, nach Hause gehen oder in der Nähe etwas erledigen.',
  },
  // ... 11 weitere aus UI-SPEC Copywriting Contract
];

export const categoryLabels = {
  bedienung: 'Bedienung & Technik',
  preise: 'Preise & Bezahlung',
  service: 'Service & Standort',
} as const;
```

### Pattern 2: JSON-LD-Generator (`src/lib/schema.ts`)

**What:** Pure Functions, die schema.org-JSON-LD-Strings generieren. Keine Dependencies.

**When to use:** LocalBusiness (einmalig im `<head>` von `/`), FAQPage (einmalig auf FAQ-Seite — hier `/` da Single-Page).

**Example:**

```typescript
// src/lib/schema.ts
import type { FaqEntry } from '../data/faq';

interface LocalBusinessInput {
  name: string;
  streetAddress: string;
  postalCode: string;
  addressLocality: string;
  addressCountry: string;
  telephone: string;
  url: string;
  email?: string;
  priceRange?: string;
  image?: string;
  geo?: { latitude: number; longitude: number };
}

export function localBusinessJsonLd(b: LocalBusinessInput): string {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'LaundryService',
    name: b.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: b.streetAddress,
      postalCode: b.postalCode,
      addressLocality: b.addressLocality,
      addressCountry: b.addressCountry,
    },
    telephone: b.telephone,
    url: b.url,
    ...(b.email && { email: b.email }),
    ...(b.priceRange && { priceRange: b.priceRange }),
    ...(b.image && { image: b.image }),
    ...(b.geo && {
      geo: { '@type': 'GeoCoordinates', latitude: b.geo.latitude, longitude: b.geo.longitude },
    }),
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
      opens: '06:00',
      closes: '22:00',
    },
  };
  return JSON.stringify(data);
}

export function faqPageJsonLd(entries: FaqEntry[]): string {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: entries.map(e => ({
      '@type': 'Question',
      name: e.question,
      acceptedAnswer: { '@type': 'Answer', text: e.answer },
    })),
  });
}
```

**Verified against:** Google's LocalBusiness structured data docs (2026-04). `LaundryService` ist ein valider Subtyp von LocalBusiness per schema.org.

### Pattern 3: JSON-LD-Einspeisung via `<slot name="head">`

**What:** `BaseLayout.astro` bietet einen `<slot name="head">` für Seiten-spezifische Head-Elemente. `index.astro` nutzt diesen für beide JSON-LD-Blöcke, `impressum.astro` / `datenschutz.astro` bleiben leer (kein JSON-LD nötig).

**Example:**

```astro
---
// src/layouts/BaseLayout.astro (Phase 1 Code — erweitere nur den <slot /> um 'name="head"')
// Bereits vorhanden bei Zeile 22: <slot name="head" />
---

<!-- src/pages/index.astro -->
---
import BaseLayout from '../layouts/BaseLayout.astro';
import { localBusinessJsonLd, faqPageJsonLd } from '../lib/schema.ts';
import { faqs } from '../data/faq';

const business = localBusinessJsonLd({
  name: 'Waschsalon Derendorf',
  streetAddress: 'Münsterstr. 88',
  postalCode: '40477',
  addressLocality: 'Düsseldorf',
  addressCountry: 'DE',
  telephone: '+49 211 54202673',
  url: 'https://waschsalon-derendorf.de',
  email: 'info@waschsalon-derendorf.de',
  priceRange: '€',
});
const faq = faqPageJsonLd(faqs);
---

<BaseLayout description="Waschsalon Derendorf — dein neuer SB-Waschsalon in Düsseldorf. Täglich 06:00–22:00 Uhr.">
  <script slot="head" type="application/ld+json" set:html={business}></script>
  <script slot="head" type="application/ld+json" set:html={faq}></script>
  <!-- Sections ... -->
</BaseLayout>
```

**Note:** `set:html={...}` ist sicher für JSON-LD, solange der JSON-Output `JSON.stringify`-serialisiert ist und keine `</script>`-Payload enthält (durch Input-Sanitization der Quelle — hier sind alle Werte redaktionell).

### Pattern 4: Sticky-Nav via IntersectionObserver Sentinel

**What:** Sentinel-Element (1px hoch) wird nach dem Hero platziert. IntersectionObserver togglt CSS-Klasse `is-pinned` auf `<nav>`, sobald der Sentinel aus dem Viewport scrollt.

**When to use:** Für Sticky-Effekte, die auf Scroll-Position reagieren sollen — performanter als `scroll`-Events.

**Example:**

```astro
---
// src/components/StickyNav.astro
---
<div data-sticky-sentinel aria-hidden="true" style="height:1px;"></div>
<nav class="sticky-nav" id="sticky-nav" aria-label="Seiten-Navigation">
  <ul>
    <li><a href="#preise">Preise</a></li>
    <li><a href="#faq">FAQ</a></li>
    <li><a href="#kontakt">Kontakt</a></li>
  </ul>
</nav>

<script>
  const sentinel = document.querySelector('[data-sticky-sentinel]');
  const nav = document.getElementById('sticky-nav');
  if (sentinel && nav) {
    const io = new IntersectionObserver(([entry]) => {
      nav.classList.toggle('is-pinned', !entry.isIntersecting);
    }, { rootMargin: '0px' });
    io.observe(sentinel);
  }
</script>
```

**Scroll-Margin für Anker-Links (WCAG 2.2 SC 2.4.11 — Focus Not Obscured):**

```css
/* In global.css ergänzen */
html { scroll-padding-top: 4.5rem; /* Höhe der sticky-nav + Puffer */ }
section[id] { scroll-margin-top: 4.5rem; }
```

### Pattern 5: Native Accordion mit `<details>` / `<summary>`

**What:** Semantisch korrekte, ohne-JS-funktionierende Accordion-Basis. Optionales Progressive Enhancement für Single-Open-Verhalten.

**When to use:** Immer, außer State muss kontrolliert werden (z.B. kontextabhängige Animation). Für Marketing-FAQ passt native zu 100%.

**Example:**

```astro
---
// src/components/FaqAccordion.astro
import { faqs, categoryLabels } from '../data/faq';

const grouped = faqs.reduce((acc, f) => {
  (acc[f.category] ??= []).push(f);
  return acc;
}, {} as Record<string, typeof faqs>);
---

{Object.entries(grouped).map(([cat, items]) => (
  <div class="faq-group">
    <h3>{categoryLabels[cat]}</h3>
    {items.map(f => (
      <details name="faq-group" class="faq-item">
        <summary>
          <span>{f.question}</span>
          <svg class="chevron" aria-hidden="true" /><!-- chevron icon --></svg>
        </summary>
        <div class="faq-answer"><p>{f.answer}</p></div>
      </details>
    ))}
  </div>
))}
```

**Wichtig:** Das Attribut `name="faq-group"` auf `<details>` erzwingt Single-Open-Verhalten (alle `<details>` mit gleichem Name-Attribut schließen sich gegenseitig aus). Das ist seit 2024 in allen modernen Browsern unterstützt (Chrome 120+, Safari 17.2+, Firefox 132+). Für ältere Browser fällt das Verhalten auf "alle offen erlaubt" zurück — akzeptabler Fallback.

### Anti-Patterns to Avoid

- **React-Island für Accordion:** Native `<details>` reicht, React-Island würde JS-Bundle vergrößern und Accessibility-Out-of-the-Box verlieren.
- **CSS `@import` für externe Fonts:** Alle Fonts laufen über `astro:assets` Font-API (Nunito + Baloo 2 self-hosted aus Phase 1). Nicht in `global.css` mit `@import url('https://fonts.googleapis.com/...')` ergänzen — das würde DSGVO brechen (D-28).
- **JSON-LD direkt in Seitentemplate schreiben:** Sprung zwischen `<script>`-Blob und Astro-TypeScript-Scope führt zu Tippfehlern. Generator-Funktion in `src/lib/schema.ts` kapselt Typen.
- **`client:load` auf alles:** Nur der Hero-Shader braucht `client:load`. Alles andere (Sticky-Nav, Accordion) läuft als inline-Script oder `is:inline` und braucht **keine** Astro-Client-Direktive.
- **Öffnungszeiten als Freitext in LocalBusiness:** `openingHoursSpecification` ist ein strukturiertes Objekt mit `dayOfWeek` / `opens` / `closes` — kein String à la "Mo-So 06-22 Uhr". Google parst den String nicht.
- **Inline-CSS-Variablen via `style={...}` als Haupt-Styling-Strategie:** Phase 1 nutzt inline-styles für Farb-Tokens (z.B. `style={\`color: var(--color-brand);\`}`). Für Phase 2 OK für bestehende Seiten, aber neue Komponenten sollten Tailwind-Klassen (`text-[color:var(--color-brand)]` oder direkt Utility `text-cyan-600`) bevorzugen.

---

## Don't Hand-Roll

| Problem | Don't Build | Use Instead | Why |
|---------|-------------|-------------|-----|
| LocalBusiness JSON-LD-Validierung | Custom Schema-Validator | Google Rich Results Test (manuell per URL) + schema.org Validator | Offizielle Tools sind autoritativ, Community-Validatoren veralten |
| Sitemap-Regenerierung | Manuelles `sitemap.xml` | `@astrojs/sitemap` (bereits installiert) | Plugin regeneriert bei jedem Build, fügt Phase-2-Routen automatisch hinzu |
| Google-Maps-Embed | Eigener Map-Server / Leaflet | **Bestehende `GoogleMap.astro`** (click-to-load Pattern) | Ist DSGVO-geprüft und funktioniert bereits |
| Font-Loading | `<link rel="preconnect">` zu fonts.googleapis.com | **Astro Fonts API** (bereits in `astro.config.mjs`) | Self-hosting verhindert DSGVO-Problematik, Preload + Subset automatisch |
| Accordion-State-Management | Custom JS mit aria-expanded | Native `<details name="...">` | Single-Open-Verhalten ist seit 2024 nativ |
| Performance-Budgeting | Custom Build-Plugin | `@lhci/cli` mit `lighthouserc.json` | Offizielles Google-Tool, GitHub-Action-ready |
| A11y-Scanning | Manuelles Prüfen | `@axe-core/playwright` | Industriestandard, deckt ~40% WCAG automatisiert |
| Smooth-Scroll zu Ankern | Custom JS mit `scrollTo` | CSS `scroll-behavior: smooth` + `scroll-padding-top` | Native, respektiert `prefers-reduced-motion` automatisch |
| Impressum-/Datenschutz-Text | Neu schreiben ohne rechtliche Prüfung | **eRecht24 Generator** (für finalen Text) — aber die Struktur aus Phase 1 + Videoüberwachung + Google-Fonts-lokal ergänzen | Rechtliche Formulierungen ändern sich (DDG statt TMG seit Mai 2024); Generator hält up-to-date |

**Key insight:** Phase 2 ist primär Content-Aufbau. Ein Großteil der "üblichen Frickeleien" (Maps-Consent, Font-Loading, Sitemap) ist bereits in Phase 1 durch Astros Ökosystem gelöst. Die echten Kunststücke liegen in **JSON-LD-Korrektheit**, **rechtssicherem Text** und **Performance-Gate-Einhaltung** — nicht im Tooling.

---

## Common Pitfalls

### Pitfall 1: FAQPage-JSON-LD erscheint nicht als Rich Result
**What goes wrong:** Entwickler fügt FAQPage-JSON-LD ein und erwartet Rich-Result-Anzeige in Google SERPs.
**Why it happens:** Google hat seit 2023 FAQ-Rich-Results **stark eingeschränkt** — sie werden nur noch für "well-known, authoritative websites that are government-focused or health-focused" angezeigt. Für lokale Geschäfts-Websites erscheinen sie **in der Regel nicht** mehr als visuelle Rich Results.
**How to avoid:** Trotzdem einbauen — das Markup hilft weiterhin für AI-Antworten (Perplexity, Gemini, ChatGPT-Browse) und für LocalBusiness-Signale. Erwartungshaltung im Verification-Dokument: "JSON-LD valid per Rich Results Test" ≠ "Rich Result im SERP". Success Criterion #5 aus ROADMAP verlangt nur ≥5 Fragen — nicht Rich-Result-Sichtbarkeit.
**Warning signs:** Kunde fragt "wo sind die FAQ-Klappboxen im Google-Suchergebnis?" — Antwort: "Struktur ist korrekt, aber Google zeigt sie derzeit für lokale Geschäfte nicht mehr an."

### Pitfall 2: `openingHoursSpecification` als String statt Objekt
**What goes wrong:** `"openingHours": "Mo-Su 06:00-22:00"` statt strukturiertes Objekt.
**Why it happens:** Ältere Examples im Web zeigen noch `openingHours` als String (Legacy-Property).
**How to avoid:** Immer `openingHoursSpecification` mit `dayOfWeek`-Array, `opens`, `closes` verwenden (24h-Format, `HH:MM`). Siehe `schema.ts` Pattern oben.
**Warning signs:** Google Rich Results Test meldet "openingHours format invalid" oder zeigt nur partielle Hours.

### Pitfall 3: GmbH i.G. fehlerhaft im Impressum
**What goes wrong:** Entwickler schreibt "GmbH in Gründung" ohne Klarstellung zur Haftung; oder versucht HRB-Eintrag zu fingieren.
**Why it happens:** Vorgesellschaft (GmbH i.G.) ist juristisch ein Eigenkonstrukt — sie ist teilrechtsfähig, aber ohne HR-Eintrag haftet die Geschäftsführung persönlich.
**How to avoid:** Umsetzung laut D-21/D-22:
  - Betreiber: **Laura Maskos** als natürliche Person (Straßenadresse privat: Heyestr. 152, 40625 Düsseldorf)
  - Rechtsform-Hinweis: "Rechtsform: GmbH in Gründung. Die Eintragung in das Handelsregister erfolgt nach dem Notartermin. Bis zur Eintragung haftet Laura Maskos als natürliche Person."
  - HRB, USt-IdNr.: "entfällt bzw. folgt"
  - Geschäftsadresse (Münsterstr. 88, 40477 Düsseldorf) erscheint **nicht im Impressum** — das ist die Betriebsstätte, nicht die ladungsfähige Anschrift der Betreiberin (wichtig!)
**Warning signs:** Das Impressum enthält sowohl Münsterstr. 88 als Betreiber-Adresse **als auch** Heyestr. 152 — das ist widersprüchlich. Nur Heyestr. 152 ist im Impressum-Block.

### Pitfall 4: Google Maps Embed ohne Consent-Prüfung
**What goes wrong:** `<iframe src="https://www.google.com/maps/embed?...">` direkt eingebaut.
**Why it happens:** Standard-Google-Maps-Workflow ohne DSGVO-Awareness.
**How to avoid:** **Bestehende `GoogleMap.astro`** verwenden — sie rendert zuerst einen Platzhalter, lädt `iframe` erst nach Button-Klick. Kein DOM-Zugriff auf Google-Server vor Consent. Pattern bereits in Phase 1 validiert.
**Warning signs:** Netzwerk-Tab zeigt Requests an `maps.googleapis.com` / `gstatic.com` beim ersten Seitenaufruf.

### Pitfall 5: WCAG 2.2 SC 2.4.11 (Focus Not Obscured) bei Sticky-Nav
**What goes wrong:** User tabbt durch Accordion-Trigger, Fokus landet hinter der Sticky-Nav und ist unsichtbar.
**Why it happens:** Seit WCAG 2.2 (AA) müssen fokussierte Elemente nie vollständig durch Sticky-Elemente verdeckt werden.
**How to avoid:** `scroll-padding-top` auf `html` + `scroll-margin-top` auf section-IDs + ausreichender Puffer (Sticky-Nav-Höhe plus ~20px).
**Warning signs:** axe-core meldet `focus-order-semantics` Warnung; manuelles Tab-Test zeigt Elemente in der Nav-Toten-Zone.

### Pitfall 6: WarpBackground blockiert Core-Web-Vitals auf Mobile
**What goes wrong:** WebGL-Shader verschluckt 400-800ms CPU beim Startup; LCP rutscht über 2.5s auf Low-End-Mobile.
**Why it happens:** `@paper-design/shaders-react` ist GPU-beschleunigt, aber der initiale React-Hydration + WebGL-Init-Cost zählt für LCP.
**How to avoid (abgestuft):**
  1. **Baseline:** Hero-Text ist HTML/CSS — LCP-Element ist H1, nicht der Shader-Canvas. Shader rendert mit `position: absolute; z-index: -1` hinter dem Content.
  2. **Optimierung 1:** `client:only="react"` oder `client:visible` statt `client:load` — aber nur wenn Hero nicht above-the-fold (hier ist er es, also bleibt `client:load`).
  3. **Optimierung 2:** Mobile-Variante: CSS-only radial-gradient als Fallback bei `(max-width: 640px)` oder `(prefers-reduced-motion: reduce)` via `<picture>`-Pattern im Hero.
  4. **Optimierung 3:** Shader-Props reduzieren: `swirlIterations={10}` → `5` auf Mobile (re-render statt zwei Komponenten). Passiert in `WarpBackground.tsx` mit `window.matchMedia`.
**Warning signs:** Lighthouse Mobile-Score <80 auf Performance, LCP >2.5s im Audit.

### Pitfall 7: Datenschutzerklärung erwähnt Google Fonts nicht
**What goes wrong:** Bestehende Datenschutz-Seite enthält Maps-Abschnitt, aber keinen Google-Fonts-Abschnitt — Abmahnrisiko durch typische Abmahn-Anwälte.
**Why it happens:** Self-hosted Google Fonts (via Astro Fonts API) sind **keine** Datenübertragung an Google — aber das muss **explizit** erwähnt werden, damit Besucher es wissen.
**How to avoid:** Abschnitt in `datenschutz.astro` ergänzen: "Diese Website verwendet Schriftarten von Google Fonts, die lokal auf unserem Server gehostet werden. Beim Aufruf der Seite werden **keine Daten** an Google übertragen."
**Warning signs:** Keine — das ist ein präventiver Check. Seit dem LG-München-Urteil 2022 (extern geladene Google Fonts = 100€-Schadensersatz pro Aufruf) ist das ein Reflex-Abmahn-Hotspot.

### Pitfall 8: Videoüberwachung-Hinweis fehlt
**What goes wrong:** D-19 erwähnt Videoüberwachung vor Ort. Datenschutzerklärung hat keinen Abschnitt dazu.
**Why it happens:** Videoüberwachung ist keine Website-Funktion — leicht zu vergessen.
**How to avoid:** Kurzen Abschnitt in `datenschutz.astro` ergänzen: Rechtsgrundlage (Art. 6 Abs. 1 lit. f DSGVO — berechtigtes Interesse, Diebstahlschutz), Speicherdauer (z.B. 72h automatische Überschreibung), Auskunftsrecht, Aufsichtsbehörde. Empfehlung: Text aus eRecht24-Generator mit Anpassung auf SB-Waschsalon-Kontext ziehen; Piktogramm-Hinweisschild ist Pflicht am Eingang des Salons (physisch), aber Website muss ebenfalls verweisen.
**Warning signs:** FAQ-Antwort Q12 verweist auf Datenschutzerklärung, aber dort ist kein Abschnitt dazu — toter Link.

### Pitfall 9: `<script type="application/ld+json">` mit falschem Escaping
**What goes wrong:** JSON-LD-Payload enthält ein `</script>`-Substring (z.B. aus User-Content) → HTML-Parser bricht aus.
**Why it happens:** `set:html` injiziert rohen HTML-Text.
**How to avoid:** Für Phase 2 alle Strings redaktionell → kein Risiko. Als Safety-Belt: `.replace(/</g, '\\u003c')` auf den JSON-String, bevor er als `set:html` rendert. In `schema.ts` Helper einbauen.
**Warning signs:** HTML-Validator meldet Struktur-Fehler nach JSON-LD-Block.

### Pitfall 10: Astro Island Hydration verzögert Sticky-Nav
**What goes wrong:** Sticky-Nav als React-Komponente mit `client:load` bedeutet: bis JS lädt, ist kein Sticky-Effekt da → Layout-Shift (CLS).
**Why it happens:** Fehlannahme, dass Sticky-Verhalten React braucht.
**How to avoid:** `StickyNav.astro` als **reine Astro-Komponente** mit `<script>`-Block. IntersectionObserver ist vanilla JS — kein React, keine Island. Server-rendered HTML → CSS `position: sticky` greift sofort.
**Warning signs:** Lighthouse CLS >0.1, Layout-Shift am Übergang Hero → Main-Content.

---

## Code Examples

Verified Patterns aus offiziellen Quellen.

### LocalBusiness + openingHoursSpecification (vollständiges Beispiel)

```html
<!-- Source: https://developers.google.com/search/docs/appearance/structured-data/local-business -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "LaundryService",
  "name": "Waschsalon Derendorf",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Münsterstr. 88",
    "addressLocality": "Düsseldorf",
    "postalCode": "40477",
    "addressCountry": "DE"
  },
  "telephone": "+49 211 54202673",
  "email": "info@waschsalon-derendorf.de",
  "url": "https://waschsalon-derendorf.de",
  "priceRange": "€",
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    "opens": "06:00",
    "closes": "22:00"
  }
}
</script>
```

### FAQPage JSON-LD (minimal)

```html
<!-- Source: https://developers.google.com/search/docs/appearance/structured-data/faqpage -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Wie funktioniert der Waschsalon?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Du wählst eine freie Maschine, zahlst mit Karte oder Münze direkt an der Maschine..."
      }
    }
  ]
}
</script>
```

### Astro canonical + Open-Graph in BaseLayout

```astro
---
// Source: https://docs.astro.build/en/guides/environment-variables/
// Source: https://docs.astro.build/en/reference/configuration-reference/#site
interface Props {
  title?: string;
  description?: string;
  ogImage?: string;
}
const { title = 'Waschsalon Derendorf', description, ogImage = '/og-default.jpg' } = Astro.props;
const canonicalURL = new URL(Astro.url.pathname, Astro.site).toString();
const ogImageURL = new URL(ogImage, Astro.site).toString();
---

<head>
  <title>{title}</title>
  {description && <meta name="description" content={description} />}
  <link rel="canonical" href={canonicalURL} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:url" content={canonicalURL} />
  <meta property="og:image" content={ogImageURL} />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="de_DE" />
  <meta name="twitter:card" content="summary_large_image" />
  <slot name="head" />
</head>
```

### Playwright Config für Astro Static (minimal)

```typescript
// playwright.config.ts
// Source: https://docs.astro.build/en/guides/testing/ + https://playwright.dev/docs/test-configuration
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30_000,
  retries: process.env.CI ? 2 : 0,
  reporter: process.env.CI ? [['github'], ['html']] : 'list',
  use: {
    baseURL: 'http://localhost:4321',
    trace: 'retain-on-failure',
  },
  projects: [
    { name: 'chromium-desktop', use: { ...devices['Desktop Chrome'] } },
    { name: 'chromium-mobile', use: { ...devices['iPhone 13'] } },
  ],
  webServer: {
    command: 'npm run build && npm run preview',
    url: 'http://localhost:4321',
    reuseExistingServer: !process.env.CI,
    timeout: 120_000,
  },
});
```

### Axe-Core Playwright A11y Scan

```typescript
// tests/e2e/a11y.spec.ts
// Source: https://www.npmjs.com/package/@axe-core/playwright
import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility scans', () => {
  test('Startseite: no WCAG 2.2 AA violations', async ({ page }) => {
    await page.goto('/');
    const results = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa'])
      .analyze();
    expect(results.violations).toEqual([]);
  });

  test('Impressum: no violations', async ({ page }) => {
    await page.goto('/impressum');
    const results = await new AxeBuilder({ page }).withTags(['wcag2aa']).analyze();
    expect(results.violations).toEqual([]);
  });

  test('Datenschutz: no violations', async ({ page }) => {
    await page.goto('/datenschutz');
    const results = await new AxeBuilder({ page }).withTags(['wcag2aa']).analyze();
    expect(results.violations).toEqual([]);
  });
});
```

### Lighthouse CI Config mit Performance-Budget

```json
// lighthouserc.json
// Source: https://github.com/GoogleChrome/lighthouse-ci/blob/main/docs/configuration.md
{
  "ci": {
    "collect": {
      "staticDistDir": "./dist",
      "url": [
        "http://localhost/index.html",
        "http://localhost/impressum/index.html",
        "http://localhost/datenschutz/index.html"
      ],
      "numberOfRuns": 3,
      "settings": {
        "preset": "desktop"
      }
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", { "minScore": 0.9 }],
        "categories:accessibility": ["error", { "minScore": 0.95 }],
        "categories:best-practices": ["warn", { "minScore": 0.9 }],
        "categories:seo": ["error", { "minScore": 0.95 }],
        "largest-contentful-paint": ["error", { "maxNumericValue": 2500 }],
        "cumulative-layout-shift": ["error", { "maxNumericValue": 0.1 }],
        "total-blocking-time": ["warn", { "maxNumericValue": 200 }],
        "interaction-to-next-paint": ["warn", { "maxNumericValue": 200 }]
      }
    },
    "upload": { "target": "temporary-public-storage" }
  }
}
```

**Zweiter Run mit Mobile-Preset** (separater Config oder `--preset=mobile` Flag):
- LCP-Ziel: 2500ms (3000ms im Phase-Gate laut ROADMAP Success Criterion #2, aber wir setzen strenger auf 2500ms = Googles "good")
- CLS: 0.1, INP: 200ms

### Netlify `_headers` für Cache + Security

```
# public/_headers
# Source: https://docs.netlify.com/manage/routing/headers/
#         + https://content-security-policy.com/examples/netlify/

/*
  X-Content-Type-Options: nosniff
  X-Frame-Options: SAMEORIGIN
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: geolocation=(), microphone=(), camera=()

# Fingerprinted assets — lang-cachen
/_astro/*
  Cache-Control: public, max-age=31536000, immutable

/fonts/*
  Cache-Control: public, max-age=31536000, immutable
```

**CSP** absichtlich NICHT in dieser Baseline: Maps-iframe + inline-JSON-LD erfordern differenzierte `frame-src` / `script-src`-Regeln. In Plan-Phase optional als Hardening-Task mit `Content-Security-Policy-Report-Only` zum Testen.

### Sticky-Nav Sentinel (vanilla JS, kein React)

```astro
---
// src/components/StickyNav.astro
// Source: https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
---
<div data-sentinel aria-hidden="true" style="height:1px;"></div>
<nav
  id="sticky-nav"
  class="sticky top-0 z-40 opacity-0 pointer-events-none transition-opacity duration-200 bg-white/85 backdrop-blur-md border-b border-black/5"
  aria-label="Seiten-Navigation"
>
  <ul class="flex gap-6 px-4 py-3 max-w-6xl mx-auto">
    <li><a href="#preise" class="text-sm font-semibold">Preise</a></li>
    <li><a href="#faq" class="text-sm font-semibold">FAQ</a></li>
    <li><a href="#kontakt" class="text-sm font-semibold">Kontakt</a></li>
  </ul>
</nav>

<script>
  const sentinel = document.querySelector('[data-sentinel]');
  const nav = document.getElementById('sticky-nav');
  if (sentinel && nav) {
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          nav.classList.add('opacity-0', 'pointer-events-none');
          nav.classList.remove('opacity-100', 'pointer-events-auto');
        } else {
          nav.classList.remove('opacity-0', 'pointer-events-none');
          nav.classList.add('opacity-100', 'pointer-events-auto');
        }
      },
      { rootMargin: '0px' },
    );
    io.observe(sentinel);
  }
</script>
```

### Reduced-Motion Variante für Shader

```tsx
// src/components/WarpBackground.tsx — ggf. Mobile/Reduced-Motion Erweiterung
import { Warp } from '@paper-design/shaders-react';
import { useEffect, useState } from 'react';

export default function WarpBackground() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);

  if (reduced) {
    return (
      <div
        aria-hidden="true"
        style={{
          width: '100%',
          height: '100%',
          background:
            'radial-gradient(ellipse at 30% 40%, hsl(170, 100%, 80%) 0%, hsl(180, 90%, 30%) 40%, hsl(200, 100%, 20%) 100%)',
        }}
      />
    );
  }

  return (
    <Warp
      style={{ height: '100%', width: '100%' }}
      proportion={0.45}
      softness={1}
      distortion={0.25}
      swirl={0.8}
      swirlIterations={10}
      shape="checks"
      shapeScale={0.1}
      scale={1}
      rotation={0}
      speed={1}
      colors={[
        'hsl(200, 100%, 20%)',
        'hsl(160, 100%, 75%)',
        'hsl(180, 90%, 30%)',
        'hsl(170, 100%, 80%)',
      ]}
    />
  );
}
```

---

## State of the Art

| Old Approach | Current Approach (2026) | When Changed | Impact |
|--------------|--------------------------|--------------|--------|
| `openingHours` als String "Mo-Su 06:00-22:00" | `openingHoursSpecification` Objekt | Seit ~2019 Google-Empfehlung | String-Form wird weiterhin geparst, aber Objekt-Form ist eindeutig und für `specialOpeningHoursSpecification` (Feiertage) zwingend |
| TMG §5 (Telemediengesetz) | DDG §5 (Digitale-Dienste-Gesetz) | 2024-05-14 | Inhaltliche Pflichten gleich, Gesetzesnennung geändert — Impressum-Überschrift "Angaben gemäß DDG §5" (Phase 1 ist bereits korrekt) |
| FAQ Rich Results für alle Sites | Rich Results nur für Gov/Health | 2023 | Markup trotzdem einbauen (AI-Sichtbarkeit, LocalBusiness-Signal) |
| FID (First Input Delay) | INP (Interaction to Next Paint) | 2024-03 | Lighthouse 12+ misst INP; Budget ≤200ms |
| `<details>` ohne Single-Open | `<details name="grp">` für native Single-Open | Chrome 120 (2024), FF 132 (2024) | Kein JS nötig für Accordion-Exclusive-Mode |
| WCAG 2.1 AA | WCAG 2.2 AA | 2023-10 | **SC 2.4.11 Focus Not Obscured** — Sticky-Nav braucht `scroll-padding-top` |
| Google Fonts per CDN | Self-hosted via Astro Fonts API / next-font | 2022 (DE: LG München Abmahnwelle) | DSGVO-Gate, Phase 1 hat das bereits korrekt (`astro.config.mjs` fontProviders.google() lädt bei Build, nicht zur Laufzeit) |
| `@astrojs/image` | `astro:assets` (built-in) | Astro 3.0 (2023) | Für Phase 2 nicht relevant, keine dynamischen Bilder |

**Deprecated/outdated:**
- `import { Image } from '@astrojs/image/components'` (alt) → nicht nutzen, ist entfernt
- TMG-Referenzen im Impressum → DDG
- `openingHours` String-Property → `openingHoursSpecification`
- `client:load` für reine CSS-Effekte → Inline `<script>` oder Astro-Komponente ohne Hydration

---

## Open Questions

1. **Geo-Koordinaten in LocalBusiness JSON-LD:**
   - **What we know:** Lat/Long sind optional, verbessern aber Google Maps-Matching. Münsterstr. 88, 40477 Düsseldorf ≈ 51.2432, 6.7871 (grob).
   - **What's unclear:** Präzise Geo-Koordinaten der exakten Hausnummer (Vorderhaus vs. Hinterhof).
   - **Recommendation:** Mit Google Maps-Suche der genauen Adresse die Coordinaten abrufen, als Konstante in `index.astro` eintragen. Falls unsicher, Property weglassen — `address` + `name` reichen als Minimum.

2. **OG-Image für Social Sharing:**
   - **What we know:** Open Graph erfordert ein Bild (`og:image`), empfohlen 1200×630px.
   - **What's unclear:** Welches Bild? Screenshot der Hero-Section? Eigenes Branding-Asset? Phase 1 hat kein `og-default.jpg`.
   - **Recommendation:** Plan-Phase erzeugt entweder (a) SVG → PNG-Konvertierung mit Waschsalon-Logo + Slogan, oder (b) Screenshot-Tool generiert 1200×630 PNG aus Hero-Markup. **Für Phase 2 Task:** Placeholder-OG-Image mit Logo + Adresse + Öffnungszeiten erstellen und in `public/og-default.jpg` ablegen.

3. **CSP-Strictness:**
   - **What we know:** Netlify unterstützt CSP via `_headers`; `script-src 'self'` würde inline-JSON-LD und Map-Script brechen.
   - **What's unclear:** Soll Phase 2 bereits eine restriktive CSP einführen, oder erst in späterer Hardening-Phase?
   - **Recommendation:** Für Phase 2 **nur** Baseline-Security-Headers (X-Frame-Options, Referrer-Policy, Permissions-Policy) — kein CSP. CSP als Follow-Up-Task in ROADMAP vermerken; Report-Only zuerst über 2 Wochen beobachten, dann enforcen.

4. **Shader-Mobile-Fallback: entscheiden nach Messung:**
   - **What we know:** Ob der Shader Core Web Vitals auf Mobile stört, ist messbar, nicht vorhersagbar.
   - **What's unclear:** Ist Mobile-LCP <2.5s mit aktuellem Shader oder nicht?
   - **Recommendation:** Plan-Phase legt **beide** Varianten vor: (a) Shader behalten, (b) Fallback-Gradient bei `prefers-reduced-motion` **und** `(max-width: 640px)`. Entscheidung fällt nach erstem Lighthouse-Run der Verification-Phase.

5. **OG-Locale für Impressum/Datenschutz:**
   - **What we know:** `og:locale = "de_DE"` setzt die primäre Sprache.
   - **What's unclear:** Brauchen Impressum/Datenschutz eigene OG-Tags, oder reicht die Vererbung aus BaseLayout?
   - **Recommendation:** BaseLayout-Defaults reichen. Impressum/Datenschutz brauchen nur eigene `<title>` und `<meta name="description">`.

---

## Environment Availability

| Dependency | Required By | Available | Version | Fallback |
|------------|------------|-----------|---------|----------|
| Node.js | Astro 6 Build | ✓ | ≥22.12.0 (engine) · Netlify Build nutzt 22 | — |
| npm | Paketmanagement | ✓ | Projekt-Stack | — |
| Google Rich Results Test (Web) | JSON-LD-Validierung (manuell) | ✓ | Online-Service | schema.org Validator als Backup |
| Netlify Build Runner | Deploy | ✓ | Branch-Deploy aus Phase 1 konfiguriert | — |
| Chromium (Playwright) | E2E-Tests | ✗ (Dev) | `npx playwright install chromium` vor erstem Run | — |
| Google Maps Embed API | `GoogleMap.astro` | ✓ | Öffentlicher Embed (kein API-Key nötig für Basis-Embed) | — |

**Missing dependencies with no fallback:** keine — alle Tools sind entweder installiert oder per `npx` auf Abruf.

**Missing dependencies with fallback:**
- Lighthouse CI benötigt CI-Runner → lokaler `npx lhci autorun` funktioniert identisch.
- Chromium für Playwright → wird per `npx playwright install --with-deps chromium` als Wave-0-Setup geholt.

---

## Validation Architecture

### Test Framework

| Property | Value |
|----------|-------|
| Framework | Playwright 1.59.1 + @axe-core/playwright 4.11.1 + @lhci/cli 0.15.1 (Lighthouse 13.1.0) |
| Config file | `playwright.config.ts` (neu, Wave 0) · `lighthouserc.json` (neu, Wave 0) |
| Quick run command | `npx playwright test --project=chromium-desktop --grep @smoke` |
| Full suite command | `npm run build && npx playwright test && npx lhci autorun` |

### Phase Requirements → Test Map

| Req ID | Behavior | Test Type | Automated Command | File Exists? |
|--------|----------|-----------|-------------------|-------------|
| WEB-01 | Startseite zeigt Adresse, Öffnungszeiten, Preise above-the-fold auf 1280×800 + 375×667 | E2E (viewport) | `npx playwright test above-fold.spec.ts` | ❌ Wave 0 |
| WEB-02a | `GoogleMap.astro` rendert Placeholder ohne Netzwerk-Requests an google.com vor Klick | E2E (network) | `npx playwright test map-consent.spec.ts -g "consent gate"` | ❌ Wave 0 |
| WEB-02b | Nach Klick auf "Karte laden" erscheint iframe mit Google-Maps-URL | E2E | `npx playwright test map-consent.spec.ts -g "loads iframe on click"` | ❌ Wave 0 |
| WEB-03 | `/impressum` gibt 200, enthält Laura Maskos + Heyestr. 152 + "GmbH in Gründung" + +49 211 54202673 | E2E (content) | `npx playwright test legal-pages.spec.ts -g "impressum"` | ❌ Wave 0 |
| WEB-04 | `/datenschutz` gibt 200, enthält Abschnitte Netlify + Maps + Google Fonts (self-hosted) + Videoüberwachung | E2E (content) | `npx playwright test legal-pages.spec.ts -g "datenschutz"` | ❌ Wave 0 |
| WEB-05a | Mobile (iPhone 13 Viewport): keine horizontale Overflow-Bar, Hero-Pills stacken | E2E (viewport) | `npx playwright test --project=chromium-mobile above-fold.spec.ts` | ❌ Wave 0 |
| WEB-05b | Axe-Core findet keine WCAG 2.2 AA-Violations auf Start + /impressum + /datenschutz | A11y | `npx playwright test a11y.spec.ts` | ❌ Wave 0 |
| WEB-06a | LocalBusiness JSON-LD vorhanden und parst als valides JSON mit `@type: LaundryService`, `address`, `openingHoursSpecification` | E2E (DOM) | `npx playwright test schema.spec.ts -g "LocalBusiness"` | ❌ Wave 0 |
| WEB-06b | Google Rich Results Test für die live-URL zeigt "Detected LocalBusiness" | Manual | https://search.google.com/test/rich-results?url=https://waschsalon-derendorf.de | manual (Phase-Gate) |
| WEB-07a | `<link rel="canonical">` auf jeder Seite, `<meta name="description">`, OG-Tags vollständig | E2E (DOM) | `npx playwright test seo-meta.spec.ts` | ❌ Wave 0 |
| WEB-07b | `sitemap-index.xml` enthält alle Routen (/, /impressum, /datenschutz) | E2E (HTTP) | `npx playwright test seo-meta.spec.ts -g "sitemap"` | ❌ Wave 0 |
| WEB-07c | Keine externen Font-Requests im Netzwerk-Tab | E2E (network) | `npx playwright test seo-meta.spec.ts -g "no external fonts"` | ❌ Wave 0 |
| WEB-10a | FAQ-Section enthält mind. 5 `<details>` oder `<button aria-expanded>` Trigger (Phase 2: 12) | E2E (DOM) | `npx playwright test accordion.spec.ts -g "renders 12"` | ❌ Wave 0 |
| WEB-10b | FAQPage JSON-LD enthält mainEntity-Array mit `Question`/`Answer`-Paaren | E2E (DOM) | `npx playwright test schema.spec.ts -g "FAQPage"` | ❌ Wave 0 |
| WEB-10c | Click auf Frage-Trigger öffnet passendes Answer-Panel (Single-Open-Verhalten) | E2E | `npx playwright test accordion.spec.ts -g "single-open"` | ❌ Wave 0 |
| SC #2 | Lighthouse Mobile Performance ≥90, LCP ≤2500ms, CLS ≤0.1, INP ≤200ms | Lighthouse CI | `npx lhci autorun` | ❌ Wave 0 |
| SC #2 | Lighthouse Desktop Performance ≥95 | Lighthouse CI | `npx lhci autorun --preset=desktop` | ❌ Wave 0 |

### Sampling Rate

- **Per task commit:** `npx playwright test --grep @smoke --project=chromium-desktop` — läuft nur Quick-Checks (<30s)
- **Per wave merge:** `npm run build && npx playwright test` — volle E2E- + A11y-Suite ohne LHCI (~60s)
- **Phase gate:** `npm run build && npx playwright test && npx lhci autorun` + manueller Rich-Results-Test der Live-URL (erst nach Netlify-Deploy)

### Wave 0 Gaps

- [ ] `playwright.config.ts` — Root-Config mit webServer (`npm run preview`), chromium-desktop + chromium-mobile Projekte
- [ ] `lighthouserc.json` — Performance-Budget mit LCP ≤2500, CLS ≤0.1, Score ≥90
- [ ] `tests/e2e/above-fold.spec.ts` — deckt WEB-01, WEB-05a
- [ ] `tests/e2e/map-consent.spec.ts` — deckt WEB-02a/b
- [ ] `tests/e2e/legal-pages.spec.ts` — deckt WEB-03, WEB-04
- [ ] `tests/e2e/a11y.spec.ts` — deckt WEB-05b
- [ ] `tests/e2e/schema.spec.ts` — deckt WEB-06a, WEB-10b
- [ ] `tests/e2e/seo-meta.spec.ts` — deckt WEB-07a/b/c
- [ ] `tests/e2e/accordion.spec.ts` — deckt WEB-10a/c
- [ ] Framework install: `npm i -D @playwright/test @axe-core/playwright @lhci/cli && npx playwright install --with-deps chromium`
- [ ] Optional: GitHub Actions Workflow `.github/workflows/lighthouse.yml` mit `treosh/lighthouse-ci-action@v12` und `nwtgck/actions-netlify`-Wait

---

## Sources

### Primary (HIGH confidence)

- **Google LocalBusiness Docs** — https://developers.google.com/search/docs/appearance/structured-data/local-business (required + recommended properties, openingHoursSpecification structure)
- **Google FAQPage Docs** — https://developers.google.com/search/docs/appearance/structured-data/faqpage (rich-result eligibility restrictions, JSON-LD structure)
- **schema.org/LocalBusiness** — https://schema.org/LocalBusiness (LaundryService als Subtyp)
- **schema.org/OpeningHoursSpecification** — https://schema.org/OpeningHoursSpecification
- **Astro Images & Assets** — https://docs.astro.build/en/guides/images/ (`<Image />` und `<Picture />` Komponenten, CLS-Optimierung)
- **Astro Testing** — https://docs.astro.build/en/guides/testing/ (Playwright-Setup mit webServer)
- **Astro Environment Variables** — https://docs.astro.build/en/guides/environment-variables/ (`Astro.site`, `Astro.url` für canonical)
- **Astro Islands** — https://docs.astro.build/en/concepts/islands/ (client:load vs. client:visible)
- **npm Registry (2026-04-16)** — Version-Verification: astro@6.1.7, @playwright/test@1.59.1, @axe-core/playwright@4.11.1, @lhci/cli@0.15.1, @astrojs/sitemap@3.7.2
- **Netlify Custom Headers Docs** — https://docs.netlify.com/manage/routing/headers/
- **Netlify Caching** — https://docs.netlify.com/build/caching/caching-overview/

### Secondary (MEDIUM confidence — WebSearch, cross-referenced)

- **WCAG 2.2 SC 2.4.11 (Focus Not Obscured)** — https://cerovac.com/a11y/2023/07/wcag-2-2-brings-more-bad-news-for-sticky-elements-and-more-good-news-for-users/
- **scroll-margin-top pattern** — https://www.tpgi.com/prevent-focused-elements-from-being-obscured-by-sticky-headers/
- **DDG §5 (Telemediengesetz → DDG Migration)** — https://www.gesetze-im-internet.de/ddg/__5.html + https://www.dabonline.de/recht/website-impressum-korrekt-tmg-ddg/
- **Lighthouse CI Action** — https://github.com/marketplace/actions/lighthouse-ci-action (treosh) + https://github.com/GoogleChrome/lighthouse-ci
- **axe-core Playwright** — https://www.npmjs.com/package/@axe-core/playwright
- **Pa11y vs. axe comparison** — https://www.ramotion.com/blog/practical-accessibility-testing-with-pa11y-and-axe-core/
- **IntersectionObserver Scroll-Spy** — https://www.cssscript.com/sticky-navigation-scrollspy/ + https://dev.to/fazzaamiarso/add-toc-with-scroll-spy-in-astro-3d25
- **Netlify CSP Integration** — https://www.netlify.com/blog/general-availability-content-security-policy-csp-nonce-integration/ + https://docs.netlify.com/manage/security/content-security-policy/
- **Accessible Accordion Patterns** — https://accessible-astro.incluud.dev/components/accordion/ + https://www.hassellinclusion.com/blog/accessible-accordions-part-2-using-details-summary/
- **Paper Shaders** — https://shaders.paper.design/ + https://www.npmjs.com/package/@paper-design/shaders-react
- **Google Fonts DSGVO (self-hosted)** — https://www.e-recht24.de/dsg/12669-google-web-fonts.html + https://www.adsimple.de/datenschutzerklaerung/google-fonts-lokal-datenschutzerklaerung/

### Tertiary (LOW confidence — single unverified source or blog)

- **TTDSG → TDDDG rename 2024-05-13** — https://usercentrics.com/knowledge-hub/germanys-ttdpa-telecommunications-telemedia-data-protection-act/ (plausibel, aber Detail-Formulierungen für Gesetzestext-Zitate sollten aus https://www.gesetze-im-internet.de übernommen werden)
- **FAQ Rich Results 2023 Einschränkung auf Gov/Health** — https://greenserp.com/high-impact-schema-seo-guide/ + Google-Doku bestätigt → **HIGH nach Cross-Check**
- **`<details name="...">` Browser-Support** — https://developer.mozilla.org/en-US/docs/Web/HTML/Element/details (verified via MDN)

---

## Metadata

**Confidence breakdown:**
- Standard stack: **HIGH** — alle Versionen via `npm view` am 2026-04-16 verifiziert; Phase-1-Code als Ground-Truth
- Architecture patterns: **HIGH** — JSON-LD + Astro-Patterns direkt aus offiziellen Docs (Google + Astro)
- Pitfalls: **HIGH** — DSGVO/DDG-Themen cross-referenced mit Gesetzestexten; WCAG 2.2 via offiziellen Quellen
- Validation architecture: **HIGH** — Playwright + LHCI + axe sind Industriestandard, Setup-Patterns aus offiziellen Docs

**Research date:** 2026-04-16
**Valid until:** 2026-05-16 (30 Tage für Stack-Versionen; Google-Richtlinien ändern sich selten außerhalb von Hinweistafel-Updates)
