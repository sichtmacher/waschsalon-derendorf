# Phase 2: Website Launch - Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in CONTEXT.md — this log preserves the alternatives considered.

**Date:** 2026-04-16
**Phase:** 02-website-launch
**Areas discussed:** Hero & Above-the-Fold, Seitenarchitektur, Preis- & FAQ-Darstellung, Content-Fakten

---

## Hero & Above-the-Fold

### Shader-Hintergrund

| Option | Description | Selected |
|--------|-------------|----------|
| Shader behalten, Content erweitern (Recommended) | WarpBackground bleibt, Info-Pills ausgebaut | ✓ |
| Shader nur auf kleinem Hero-Strip | 40-60vh, darunter statisches Dashboard | |
| Shader entfernen | Komplett statisch, beste CWV | |
| Shader behalten, aber reduzierter | Opacity runter, Animation zahmer | |

**User's choice:** Shader behalten, Content erweitern
**Notes:** Visuelle Identität soll erhalten bleiben, Info-Dichte per Glassmorphism-Pills erhöht werden.

### Pre-Opening-Status

| Option | Description | Selected |
|--------|-------------|----------|
| Konkretes Datum kommunizieren | "Eröffnung September 2026" sobald fest | |
| Dezenter Pre-Opening-Hinweis (Recommended) | Kleine Zeile/Badge, keine Feier-Emojis, evergreen | ✓ |
| Als wäre er offen | Site zeigt alles als ob offen, Disclaimer im Footer | |

**User's choice:** Dezenter Pre-Opening-Hinweis
**Notes:** Site soll evergreen funktionieren, Badge nach Eröffnung leicht entfernbar.

### Above-the-Fold Info-Blöcke

| Option | Description | Selected |
|--------|-------------|----------|
| Öffnungszeiten | Pflicht laut Success Criteria | ✓ |
| Preise | Pflicht laut Success Criteria | ✓ |
| Adresse + Anfahrt | Bleibt als Pill | ✓ |
| Kontakt (Telefon + Email) | Als Pills, höherer Trust | |

**User's choice:** Öffnungszeiten, Preise, Adresse — Kontakt bleibt weiter unten
**Notes:** Above-Fold bleibt auf die 3 Success-Criteria-Pflichtinfos fokussiert.

### Primärer CTA

| Option | Description | Selected |
|--------|-------------|----------|
| "Route planen" Button (Recommended) | Öffnet Maps mit Adresse | ✓ |
| Anker-Link zu Preisen/FAQ | Scrollt zur Preis-Section | |
| Kein CTA — nur Info | Pills sind selbstgesprochig | |
| Zwei CTAs: Route + Anruf | Route + tel:-Link Paar | |

**User's choice:** "Route planen" Button
**Notes:** Natürlichster Conversion-Schritt für Local-Business.

---

## Seitenarchitektur

### Struktur

| Option | Description | Selected |
|--------|-------------|----------|
| Single-Page Long-Scroll mit Ankernavigation (Recommended) | Eine Seite mit allen Sections | ✓ |
| Multi-Page klassisch | /, /preise, /faq, /kontakt | |
| Hybrid: Home + FAQ separat | FAQ auf /faq, Rest auf / | |

**User's choice:** Single-Page Long-Scroll
**Notes:** Starkes SEO-Signal, weniger Klicks, passt zu SB-Waschsalon mit begrenzter Info-Tiefe.

### Top-Navigation

| Option | Description | Selected |
|--------|-------------|----------|
| Sticky Mini-Nav nach Hero (Recommended) | Erscheint bei Scroll, nicht im Hero | ✓ |
| Permanente Top-Nav | Ab Seitenanfang sichtbar | |
| Keine Nav — nur Scrollen | Minimal | |

**User's choice:** Sticky Mini-Nav nach Hero
**Notes:** Standard-Pattern, First-Impression bleibt clean.

### Section-Reihenfolge

| Option | Description | Selected |
|--------|-------------|----------|
| Hero → Preise → Ausstattung → Öffnungszeiten → FAQ → Anfahrt | Preise zuerst | |
| Hero → Öffnungszeiten → Preise → FAQ → Anfahrt (Recommended) | Öffnungszeiten first | ✓ |
| Hero → Kurz-Überblick (3 Pills) → Preise → FAQ → Anfahrt | Spiegel der Above-Fold-Info | |

**User's choice:** Hero → Öffnungszeiten → Preise → FAQ → Anfahrt
**Notes:** Klassische Lokal-Business-Reihenfolge.

### Ausstattung

| Option | Description | Selected |
|--------|-------------|----------|
| In Preis-Section integriert (Recommended) | Features per Preis-Card | ✓ |
| Eigene "Ausstattung" Section | Icons-Block zwischen Öffnungszeiten und Preisen | |
| Im FAQ mitverarbeiten | Nur über FAQ-Fragen | |

**User's choice:** In Preis-Section integriert
**Notes:** Spart Section, Preis-Card zeigt alle relevanten Ausstattungs-Features direkt.

---

## Preis- & FAQ-Darstellung

### Preis-Darstellung

| Option | Description | Selected |
|--------|-------------|----------|
| Pricing-Cards pro Maschine (Recommended) | Icon + Bezeichnung + Preis + Dauer + Features | ✓ |
| Klassische Preistabelle | Tabelle mit Spalten | |
| Kompakte Icon-Preis-Grid | Minimal, Details ausgeblendet | |
| Hybrid: Tabelle + Features-Liste | Kombi | |

**User's choice:** Pricing-Cards pro Maschine
**Notes:** Modern, Mobile-freundlich, integriert Ausstattung direkt.

### FAQ-Format

| Option | Description | Selected |
|--------|-------------|----------|
| Accordion mit FAQPage-Schema (Recommended) | Ausklappbar + JSON-LD | ✓ |
| Offene Liste (alles aufgeklappt) | Permanent sichtbar | |
| Kategorisierte Accordions | Gruppiert | |

**User's choice:** Accordion mit FAQPage-Schema
**Notes:** Beste Kombi aus Platzersparnis und Google Rich Results.

### FAQ-Set

| Option | Description | Selected |
|--------|-------------|----------|
| Ja, diese 12 übernehmen (Recommended) | Kuratierte Liste aus 3 Kategorien | ✓ |
| Alle 22 von waschsalon.ai übernehmen | Voll | |
| Noch kürzer (8 Kernfragen) | Minimal | |
| Andere Auswahl | Freitext | |

**User's choice:** 12 Fragen
**Notes:** Source waschsalon.ai/faq/ als Struktur-Vorlage, Antworten werden mit konkreten Fakten ausformuliert.

---

## Content-Fakten

Freitext-Sammlung, keine AskUserQuestion.

### Betriebs-Fakten

| Fakt | Wert | Notiz |
|------|------|-------|
| Öffnungszeiten | Mo–So, 06:00–22:00 Uhr | täglich |
| Waschmaschine 7 kg | ab 5,00 € | Programm-abhängig |
| Waschmaschine 15 kg | ab 10,00 € | Programm-abhängig |
| Trockner 15 kg | 1,80 € pro 10 Min | (nach Klärung Typo vs. gemeint war 10 Min) |
| Anzahl Maschinen | ~10 + 4 Trockner | bewusst nicht auf Website |
| Zahlung | Bar + Karte | beide Wege |
| Waschmittel | vor Ort verfügbar | Automat |
| WLAN | ja | |
| Videoüberwachung | ja | |
| Parken | Straßenparkplätze + Parkhaus in der Nähe | auch gute Bahnanbindung |

### Impressum-Fakten

| Fakt | Wert | Notiz |
|------|------|-------|
| Betreiber | Laura Maskos | natürliche Person |
| Adresse | Heyestr. 152, 40625 Düsseldorf | |
| Rechtsform | GmbH i.G. | Eintragung folgt |
| HRB | — | entfällt/folgt |
| USt-IdNr. | — | entfällt/folgt |
| Telefon | +49 211 54202673 | aus NAP |

## Claude's Discretion

- Glassmorphism-Styling der Above-Fold-Pills (Spacing, Blur, Opacity)
- Pricing-Card Desktop-Anordnung (Spaltenzahl)
- FAQ-Gruppen-Header sichtbar einsetzen (bei 12 Fragen sinnvoll)
- Icon-Auswahl für Pricing-Cards
- Accordion-Interaktion (single-open vs. multi-open)
- Sticky-Nav Scroll-Threshold und Visual-Treatment
- Shader-Mobile-Fallback bei CWV-Problemen

## Deferred Ideas

- Anzahl Maschinen auf Website (bewusst nicht kommuniziert)
- Bonuskarten/Rabattsystem (keine Policy entschieden)
- Service-Wasch (nicht im Konzept)
- Chemische Reinigung FAQ (irrelevant für SB)
- Reservierungs-FAQ (redundant, indirekt in "Wie funktioniert...")
- Impressum-Update nach HR-Eintrag (Follow-Up, nicht Phase 2)
