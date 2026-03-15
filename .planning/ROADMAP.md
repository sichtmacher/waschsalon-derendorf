# Roadmap: Waschsalon Derendorf — Webpräsenz & Social Media

## Overview

Aufbau einer vollständigen digitalen Präsenz für einen SB-Waschsalon in Düsseldorf-Derendorf. Die Phasen folgen einer harten Abhängigkeitskette: zuerst das Fundament (Domain + NAP-Dokument), dann die eigene Website als kanonische Quelle, dann Google Business Profile als wichtigster Lokalbaustein, dann Social Media mit Pre-Opening-Content, dann bezahlte Werbung als Verstärker — und nach der Eröffnung die finale Ergänzung mit echten Fotos. Kein Schritt kann sinnvoll beginnen, bevor der vorherige vollständig ist.

## Phases

**Phase Numbering:**
- Integer phases (1, 2, 3): Planned milestone work
- Decimal phases (2.1, 2.2): Urgent insertions (marked with INSERTED)

Decimal phases appear between their surrounding integers in numeric order.

- [ ] **Phase 1: Domain, NAP & Coming Soon** - SEO-Uhr starten, kanonische NAP-Daten festlegen, erste indexierbare Seite online bringen
- [ ] **Phase 2: Website Launch** - Vollständige Astro-Website mit allen Infos, DSGVO-Compliance, Schema Markup
- [ ] **Phase 3: Google Business Profile** - GBP einrichten, verifizieren und vollständig optimieren
- [ ] **Phase 4: Social Media & Pre-Opening Content** - Alle Profile aufsetzen, 6+ Teaser-Posts, nachhaltigen Rhythmus etablieren
- [ ] **Phase 5: Paid Amplification** - Google Ads + Meta Ads zur Eröffnung schalten
- [ ] **Phase 6: Post-Opening Content** - Echte Fotos integrieren, FAQ aktivieren, Review-Wachstum starten

## Phase Details

### Phase 1: Domain, NAP & Coming Soon
**Goal**: Der SEO-Countdown läuft — Domain ist registriert, kanonisches NAP-Dokument existiert, und eine indexierbare Coming-Soon-Seite ist live
**Depends on**: Nothing (first phase)
**Requirements**: WEB-08
**Success Criteria** (what must be TRUE):
  1. Eine öffentlich erreichbare URL zeigt eine Coming-Soon-Seite mit Adresse und voraussichtlicher Eröffnung
  2. Google Search Console ist eingerichtet und die Domain ist zur Indexierung eingesendet
  3. Ein NAP-Dokument (Name, Adresse, Telefon in exaktem Format) existiert als interne Referenz für alle Plattform-Registrierungen
  4. Netlify-Deployment ist konfiguriert und neue Commits erscheinen automatisch live
**Plans**: 2 plans
Plans:
- [ ] 01-01-PLAN.md — Scaffold Astro 6 project, configure Tailwind v4 + Fonts API + Netlify + SEO basics + NAP document
- [ ] 01-02-PLAN.md — Build all pages (Coming-Soon, Impressum, Datenschutz) with GoogleMap component + visual verification

### Phase 2: Website Launch
**Goal**: Vollständige, rechtskonforme und SEO-optimierte Website ist live — jede Frage eines potenziellen Kunden wird beantwortet
**Depends on**: Phase 1
**Requirements**: WEB-01, WEB-02, WEB-03, WEB-04, WEB-05, WEB-06, WEB-07, WEB-10
**Success Criteria** (what must be TRUE):
  1. Besucher sehen auf der Startseite sofort Adresse, Öffnungszeiten und Preisliste — ohne zu scrollen oder zu klicken
  2. Die Seite ist auf Mobilgeräten vollständig bedienbar und lädt unter 3 Sekunden (Core Web Vitals bestehen)
  3. Google erkennt die Seite als lokales Unternehmen: LocalBusiness JSON-LD mit Adresse, Öffnungszeiten und Kategorie ist korrekt eingebettet
  4. Die Website enthält Impressum und Datenschutzerklärung; Google Maps lädt nur nach aktivem Klick (DSGVO-konform); keine externen Schriftarten werden beim Seitenaufruf geladen
  5. Der FAQ-Bereich beantwortet mindestens 5 häufige Fragen von Erstnutzern (Münzen, Karten, Maschinengrössen, Dauer, Kosten)
**Plans**: TBD

### Phase 3: Google Business Profile
**Goal**: Der Waschsalon erscheint in Google Maps und im lokalen Pack, wenn jemand in Düsseldorf nach einem Waschsalon sucht
**Depends on**: Phase 2
**Requirements**: GBP-01, GBP-02, GBP-03, GBP-04, GBP-05
**Success Criteria** (what must be TRUE):
  1. Das GBP ist mit der korrekten Kategorie ("Waschsalon") verifiziert und mit der Website verknüpft
  2. Öffnungszeiten, Adresse, Telefon und Services im GBP sind exakt identisch mit dem NAP-Dokument aus Phase 1
  3. Mindestens 5 Fotos sind hochgeladen und eine Kurzbeschreibung des Salons ist aktiv
  4. Mindestens 3 GBP Posts wurden veröffentlicht und ein Posting-Rhythmus (alle 2 Wochen) ist im Kalender eingetragen
  5. Ein Prozess für die Bewertungsakquise ist dokumentiert (z.B. QR-Code-Text, persönliche Ansprache) und bereit für die Eröffnung
**Plans**: TBD

### Phase 4: Social Media & Pre-Opening Content
**Goal**: Alle Social-Media-Profile sind aktiv, haben Inhalt und bauen bereits vor der Eröffnung eine lokale Fangemeinde auf
**Depends on**: Phase 3
**Requirements**: SOC-01, SOC-02, SOC-03, SOC-04, SOC-05
**Success Criteria** (what must be TRUE):
  1. Instagram Business-Account, Facebook-Seite und TikTok-Profil sind öffentlich mit Bio, Website-Link und Kontaktdaten (NAP-konform) eingerichtet
  2. Mindestens 6 Teaser-Posts sind auf Instagram veröffentlicht; Facebook zeigt dieselben Posts via Cross-Post
  3. Ein Content-Kalender für die ersten 3 Monate nach Eröffnung existiert mit konkreten Post-Ideen und Terminen
  4. Instagram- und Facebook-Profile sind als Business-Accounts verbunden (Meta Business Suite), sodass Meta Ads ohne Mehraufwand aktiviert werden können
**Plans**: TBD

### Phase 5: Paid Amplification
**Goal**: Bezahlte Werbung verstärkt die bereits funktionierende organische Präsenz zur Eröffnung
**Depends on**: Phase 4
**Requirements**: ADS-01, ADS-02
**Success Criteria** (what must be TRUE):
  1. Eine Google Ads Search-Kampagne läuft aktiv mit Geo-Targeting auf 5km um den Salon und Suchbegriffen wie "Waschsalon Düsseldorf"
  2. Eine Meta Ads Awareness-Kampagne läuft auf Instagram und Facebook mit Umkreis-Targeting um Derendorf
  3. Conversion-Tracking (GA4 + Meta Pixel) ist vor dem ersten Euro Werbeusgaben aktiv und verifiziert
  4. Google Ads ist mit dem GBP verknüpft (Location Extension aktiv)
**Plans**: TBD

### Phase 6: Post-Opening Content
**Goal**: Die Website spiegelt den echten, geöffneten Salon wider — mit Fotos, gelebtem FAQ und aktivem Review-Wachstum
**Depends on**: Phase 5
**Requirements**: WEB-09
**Success Criteria** (what must be TRUE):
  1. Die Fotogalerie auf der Website zeigt mindestens 8 echte Fotos des Salons (Maschinen, Innenraum, Detail-Shots)
  2. Das GBP enthält dieselben echten Fotos, und die erste Kunden-Bewertung wurde erfolgreich akquiriert
  3. Der FAQ-Bereich wurde anhand echter Kundenfragen aus den ersten Wochen ergänzt oder angepasst
**Plans**: TBD

## Progress

**Execution Order:**
Phases execute in numeric order: 1 → 2 → 3 → 4 → 5 → 6

| Phase | Plans Complete | Status | Completed |
|-------|----------------|--------|-----------|
| 1. Domain, NAP & Coming Soon | 1/2 | In progress | - |
| 2. Website Launch | 0/TBD | Not started | - |
| 3. Google Business Profile | 0/TBD | Not started | - |
| 4. Social Media & Pre-Opening Content | 0/TBD | Not started | - |
| 5. Paid Amplification | 0/TBD | Not started | - |
| 6. Post-Opening Content | 0/TBD | Not started | - |
