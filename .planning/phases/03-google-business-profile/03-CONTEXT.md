---
phase: 03-google-business-profile
gathered: 2026-04-16
status: ready-for-planning
---

# Phase 3: Google Business Profile — Context

<domain>
## Phase Boundary

Operative Nicht-Code-Phase: Google Business Profile (GBP) für "Waschsalon Derendorf" erstellen, verifizieren und pre-opening vollständig optimieren. Ergebnis ist ein live-GBP-Eintrag im Maps/Local-Pack plus zwei dokumentierte SOPs (GBP-Posts-Kalender, Review-Akquise). Content muss 1:1 zur Website (Phase 2) und zum NAP-Dokument (Phase 1) spiegeln — jede Abweichung schadet der Local-SEO-Konsistenz.

**Requirements in scope:** GBP-01, GBP-02, GBP-03, GBP-04, GBP-05
**Nicht in scope:** Social-Media-Profile (Phase 4), Paid Ads (Phase 5), WEB-09 Fotogalerie auf Website (Phase 6), 360°-Interior-Tour (deferred)

</domain>

<decisions>
## Implementation Decisions

### Owner, Zugriff & Credentials (GBP-01)
- **D-01:** **Primary Owner = neues dediziertes Google-Geschäfts-Konto** (z.B. `waschsalon.derendorf@gmail.com` o.ä.). Entkoppelt vom Privatkonto, sauber für spätere GmbH-Übernahme. Ownership gehört Laura Maskos (Betreiberin) zugeordnet.
- **D-02:** Keine zusätzlichen Manager oder Co-Owner im Setup — nur Primary Owner. Erweiterbar später, aber minimale Angriffsfläche für Start.
- **D-03:** Credentials (Konto-Email, Recovery-Email, 2FA-Backup-Codes) werden in **1Password** (Sichtmacher-Password-Manager) gespeichert. Niemals ins Repo.

### Verifizierungs-Strategie (GBP-01) — Timeline-Blocker
- **D-04:** **Bevorzugte Methode: Video-Verifizierung** (Google-Standard 2025/2026). Zeigt Außenfassade mit Hausnummer + Innenbereich + Zugangsnachweis.
- **D-05:** **Blocker:** Betreiber hat derzeit KEINEN Zutritt zum Geschäftsraum Münsterstr. 88. Video-Verifizierung ist bis zur Schlüsselübergabe nicht möglich.
- **D-06:** **Fallback-Plan** (in dieser Reihenfolge ausprobieren):
  1. **Instant-Verify via Google Search Console** — Konto, das den GBP anlegt, falls Inhaber der bereits verifizierten Domain `waschsalon-derendorf.de` in Search Console. Schnellster Pfad. Erst testen.
  2. **Postkarten-Verifizierung** — nur sobald Schlüsselübergabe erfolgt und ein Briefkasten am Geschäft verfügbar ist. 5-14 Tage Lead-Time.
  3. **Video-Verifizierung** bei Schlüsselübergabe.
- **D-07:** GBP-Erstellung + Content-Vorbereitung (Beschreibung, Services, Fotos, Posts-Entwürfe) **beginnen sofort** — Verifizierung ist ein separater Gate-Schritt, blockiert aber nicht die Setup-Arbeit.

### Foto-Strategie pre-opening (GBP-03)
- **D-08:** **Mindest-Foto-Set = 5 Fotos** exakt zur Deckung von Success Criterion #3:
  1. Markenlogo / Brand-Asset
  2. Außenfassade Münsterstr. 88 (mit Schild, sobald montiert)
  3. Straßenansicht / Umgebung
  4. Eingangsbereich
  5. Umgebung (Bahnanbindung / Parkhaus / Nachbarschaft per D-20)
- **D-09:** **Keine Renderings / 3D-Mockups / Stock-Fotos** im Pre-Opening-Set. Nur real aufgenommene Fotos + Markenlogo.
- **D-10:** **Keine Baufortschritt-Fotos** im GBP pre-opening — erst mit Soft-Opening-Shoot überschreiben. (Baufortschritt ist okay für Social-Media-Content in Phase 4, aber nicht GBP.)
- **D-11:** **Soft-Opening Photo-Shoot** (kurz vor offiziellem Start): sauberer, leerer Salon, Handy-HighRes oder Profi. Ersetzt das Platzhalter-Minimum-Set im GBP und dient zusätzlich für WEB-09 (Website-Fotogalerie, Phase 6).
- **D-12:** **Kein 360°/Street-View-Tour in v1** — verschoben auf Post-Opening (Phase 6 oder später).

### GBP-Content: Kurzbeschreibung (GBP-03)
- **D-13:** **Stil = Mix "Keywords vorn, Warmton hinten"**. Erste 2 Sätze liefern Kern-Keywords (Standort, Kategorie, Kernleistungen, Öffnungszeiten). Letzte 1-2 Sätze erzeugen Brand-Ton. Max 750 Zeichen. Die ersten ~250 Zeichen sind GBP-relevantester Bereich für Ranking.
- **D-14:** Kern-Keywords (für erste Hälfte): "SB-Waschsalon", "Düsseldorf-Derendorf", "Selbstbedienung", "Kartenzahlung + Bar", "06:00–22:00 Uhr", "täglich". Out-of-bounds: Anzahl der Maschinen (D-15 aus Phase 2) — nicht nennen.

### GBP-Services-Katalog (GBP-03) — mit konkreten Preisen
- **D-15:** **Preise werden 1:1 wie auf der Website im Service-Katalog angegeben** — keine Abweichung zwischen GBP und Website. Google belohnt konkrete Preisangaben im Local-Ranking und Click-Through.
- **D-16:** **Zu listende Services** (je eigener Eintrag mit Kurzbeschreibung + Preis):
  1. **Waschen 7 kg** — "ab 5,00 €"
  2. **Waschen 15 kg** — "ab 10,00 €" (Bettdecken, Großwäsche)
  3. **Trocknen 15 kg** — "1,80 € pro 10 Minuten"
- **D-17:** **Waschmittel-Verkauf NICHT als eigener Service-Eintrag** — als Attribut / Tag der Wasch-Services genügen, würde sonst Service-Katalog zerfasern.

### GBP-Attribute (Filter-Ranking)
- **D-18:** **Aktivieren:** Kostenloses WLAN (D-19), Kartenzahlung akzeptiert (D-17).
- **D-19:** **Barrierefreier Zugang:** Als Attribut markieren, **aber nur nach Vor-Ort-Prüfung** bei Schlüsselübergabe. Wenn Schwellen oder Stufen vorhanden → deaktiviert lassen. Executor muss vor Aktivierung verifizieren, nicht raten.
- **D-20:** **Restliche Attribute = Claude's Discretion**, Planner/Executor entscheidet aus GBP-Admin-Liste (Familienfreundlich, LGBTQ-friendly, etc.). Nur wo wahrheitsgemäß zutreffend.

### Claude's Discretion
- **GBP-Posts pre-opening (GBP-04):** Planner wählt 3+ Post-Themen aus Standard-Repertoire — Countdown, "Was dich erwartet" (Features), "Bald geht's los" (Eröffnungstermin). 2-Wochen-Rhythmus als Content-Kalender, Format (Google Kalender / Notion / `.planning/phases/03-*/post-calendar.md`) entscheidet Planner.
- **Review-Akquise-SOP (GBP-05):** Standard-Pfad: QR-Code am Automaten / Eingangsbereich → direkter Link zu Google Review Write-Intent (`https://www.google.com/local/writereview?placeid=...`). Keine Incentives (Google-Guideline-konform — "Kostenloser Trockner für Bewertung" ist gegen TOS).
- Konkrete Formulierung der 750-Zeichen-Beschreibung — Planner/Executor entwirft, User reviewt.
- GBP-Kategorie: Primary "Waschsalon" fest. Secondary-Kategorien optional (z.B. "Wäscherei") — Claude's Discretion.
- Logo-Upload-Format (Cover-Foto 1080x608 px + quadratisches Logo 720x720 px) — Planner spezifiziert.
- Google-Q&A-Vorbefüllung: Planner kann 3-5 häufige Fragen im Owner-Account vor-beantworten (aus Website-FAQ D-13 in 02-CONTEXT.md).

</decisions>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

### Projekt-Fundament
- `.planning/PROJECT.md` — Vision, Zielgruppe, Constraints
- `.planning/REQUIREMENTS.md` — Requirements GBP-01 bis GBP-05 im Detail
- `.planning/ROADMAP.md` §"Phase 3: Google Business Profile" — Goal, Success Criteria, Abhängigkeiten
- `.planning/NAP.md` — **Kanonische Geschäftsdaten (Name, Adresse, Telefon, Email, Website)**. GBP-Inhalte MÜSSEN exakt diese Schreibweise verwenden.

### Phase 1/2 Artefakte (Content-Quelle für GBP)
- `.planning/phases/01-domain-nap-coming-soon/01-CONTEXT.md` — Brand-Farben, Font, Design-Prinzipien (für Logo-Upload und visuelle Konsistenz)
- `.planning/phases/02-website-launch/02-CONTEXT.md` — **Betriebs-Fakten D-14 bis D-22** (Öffnungszeiten, Preise, Ausstattung, Betreiber). GBP spiegelt diese 1:1.
- `.planning/phases/02-website-launch/02-VERIFICATION.md` — Bestätigte Live-Fakten (JSON-LD, Fotos, DSGVO-Elemente)

### Externe Referenzen
- **Google Business Profile Help Center:** https://support.google.com/business/ — Setup, Verifizierung, Policies
- **GBP-Guideline zu Incentives:** https://support.google.com/business/answer/3474122 — Verbot von Belohnungen für Reviews (relevant für D-20 Review-SOP)
- **GBP Review Link Generator:** `https://www.google.com/local/writereview?placeid={PLACE_ID}` — Template für QR-Codes (PLACE_ID nach Verifizierung verfügbar)
- **Google Search Console** (`search.google.com/search-console`) — für Instant-Verify-Versuch, bereits in Phase 1 für `waschsalon-derendorf.de` eingerichtet
- **schema.org/LaundryService** — GBP-Primary-Kategorie "Waschsalon" entspricht dieser schema.org-Klasse (Konsistenz mit Website-JSON-LD aus Phase 2)
- **GBP-Bildrichtlinien:** https://support.google.com/business/answer/6103862 — Cover 1080x608, Profile 720x720, kein Stock, kein bearbeitet

</canonical_refs>

<code_context>
## Existing Code Insights

**Phase 3 ist eine Nicht-Code-Phase.** Deliverables sind GBP-Konfiguration und Markdown-SOPs, kein TypeScript/Astro-Code. Kleinere Artefakte können im Repo landen:

### Möglicherweise zu erstellende Artefakte
- `.planning/phases/03-google-business-profile/gbp-description.md` — finale 750-Zeichen-Kurzbeschreibung (Single Source of Truth, identisch zum GBP-Eintrag)
- `.planning/phases/03-google-business-profile/gbp-services.md` — Service-Katalog mit Preisen
- `.planning/phases/03-google-business-profile/post-calendar.md` — 2-Wochen-Posts-Kalender mit Draft-Texten
- `.planning/phases/03-google-business-profile/review-sop.md` — QR-Code-Flow + Ansprache-Templates
- `public/qr-review.svg` oder ähnlich — QR-Code, der auf Review-Link zeigt (falls Review-QR-Code physisch im Salon hängt, muss irgendwo existieren)

### Integration Points
- Website-SEO (Phase 2) ist Grundlage: LocalBusiness JSON-LD auf `/` verweist auf schema-konsistente Öffnungszeiten/Adresse — GBP zeigt denselben Standort ⇒ Google erkennt dies als denselben Entity.
- NAP-Dokument (`.planning/NAP.md`) ist die einzige Referenz für Name/Adresse/Telefon. Jeder GBP-Content muss exakt davon abgeleitet werden.

</code_context>

<specifics>
## Specific Ideas

- **Timeline-Realität:** Die Phase ist nicht linear abschließbar bis zur Schlüsselübergabe. GBP-Konfiguration (Beschreibung, Services, Attribute, Draft-Posts, Review-SOP) lässt sich im Repo vorbereiten; Verifizierung + finale Foto-Uploads + Post-Publishing hängen an physischem Zugang. Planner sollte zwei Wellen/Phasen unterscheiden: "GBP-Eintrag + Content prepared (before handover)" vs. "Verification + Go-Live (after handover)".
- **SEO-Konsistenz als Nordstern:** GBP-Ranking hängt entscheidend davon ab, dass NAP + Öffnungszeiten + Services zwischen Website-JSON-LD, NAP-Dokument, GBP-Listing und (in Phase 4) Social-Media-Bios identisch sind. Jede Inkonsistenz (z.B. "Münsterstrasse" statt "Münsterstr.") kostet Rankings. Executor muss bei jedem Eintrag aus NAP.md lesen, nicht aus Gedächtnis.
- **Verifizierungs-Hierarchie probieren, nicht annehmen:** Instant-Verify via Search Console ist selten, aber wenn Konto-Match existiert, spart es Wochen. Immer zuerst testen, bevor Postkarte/Video bestellt wird.
- **Reviews ohne Anreize:** Die Versuchung "erste Review = kostenloser Trockner" ist groß in der Branche. Google sanktioniert das aktiv (Review-Filter, Listing-Suspension). Review-SOP setzt ausschließlich auf freundliche Ansprache via QR-Code und Dankbarkeit. Keine Incentives dokumentieren, keine mündlich aussprechen.
- **Barrierefreiheit nicht raten:** User hat "Barrierefreier Zugang" als Attribut markiert, aber dies ist real-geprüft. Wenn Eingang eine Stufe hat, Attribut deaktiviert lassen — falsche Angaben bringen Sanktionen und enttäuschte Kunden.

</specifics>

<deferred>
## Deferred Ideas

- **GBP-Posts & Review-Strategie als diskussions-würdiger Gray-Area** — User hat diese Area beim Multi-Select nicht ausgewählt. Deshalb Claude's Discretion. Falls User später doch Präferenzen hat (z.B. Posts-Ton, QR-Code-Gestaltung, Textbausteine für Review-Ansprache), kann Re-Discussion oder Plan-Review erfolgen.
- **360°-Interior / Google Trusted Photographer** — zu aufwendig pre-opening, passt in Phase 6 (Post-Opening-Content) oder später.
- **GBP-Messaging (Chat-Funktion)** — GBP bietet Nachrichten-Funktion zu Business. Nicht in v1 aktivieren — erhöht Antwort-Druck, nicht passend für SB-Konzept ohne ständige Betreuung.
- **GBP-Produkte-Feature** — keine Produkte, SB-Waschsalon. Nicht aktivieren.
- **Mehrsprachige GBP-Beschreibung** — v2 (WEB-11 ist bereits deferred).
- **Ownership-Transfer** — keiner geplant, aber SOP notieren: Wenn Laura irgendwann ein eigenes Konto will oder GmbH-i.G. → GmbH wird, Primary-Owner-Transfer durchführen (7-Tage-Cooldown beachten).
- **Service-Wasch / Abgabe-Service** — out-of-scope aus Phase 2 (02-CONTEXT.md deferred). Kein GBP-Service-Eintrag dafür.

### Reviewed Todos (not folded)
Keine — `todo match-phase` hat 0 Treffer geliefert.

</deferred>

---

*Phase: 03-google-business-profile*
*Context gathered: 2026-04-16*
