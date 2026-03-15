# Feature Research

**Domain:** Local business web presence — SB-Waschsalon (self-service laundromat)
**Researched:** 2026-03-15
**Confidence:** MEDIUM-HIGH (WebSearch verified across multiple industry sources)

---

## Feature Landscape

### Table Stakes (Users Expect These)

Features users assume exist. Missing these = the business feels unprofessional or untrustworthy.

#### Website

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Adresse + Anfahrt (Google Maps embed) | Erstkunden müssen wissen, wo der Laden ist | LOW | Maps embed mit iframe, Schema.org LocalBusiness markup |
| Öffnungszeiten (klar sichtbar) | Häufigste Suchanfrage für lokale Businesses | LOW | Auch in Seitentitel / Meta für SEO; strukturierte Daten |
| Preisliste | Kunden entscheiden vorab, ob erschwinglich | LOW | Statische Tabelle reicht; Waschgang + Trockner separat |
| Mobile-First Design | >60% aller lokalen Suchen kommen vom Smartphone | MEDIUM | Kein nachträgliches "responsive machen" — von Anfang an mobile-first bauen |
| HTTPS / SSL | Browser zeigt "Nicht sicher" ohne SSL — kills trust sofort | LOW | Standard bei modernem Hosting, kein manueller Aufwand |
| Kontaktmöglichkeit (Telefon / WhatsApp) | Kunden stellen einfache Fragen, erwarten schnellen Kanal | LOW | Klickbare tel:-Links, WhatsApp-Deeplink |
| Fotogalerie (Innenraum, Maschinen) | Kunden wollen sehen, was sie erwartet — Sauberkeit, Ausstattung | MEDIUM | Erst nach Eröffnung: Platzhalter-Strategie bis dahin nötig |
| Leistungsübersicht (was wird angeboten) | SB-Waschen, Trockner, evtl. Waschmittelautomat — braucht Klarheit | LOW | Kompakte Liste, keine Textwände |
| Schnelle Ladezeit (Core Web Vitals bestehen) | Jede Sekunde über 3s kostet ~7% Conversions; Google-Rankingfaktor | MEDIUM | Statisches Astro-Build ist ideal; keine ungeoptimierten Bilder |
| Impressum + Datenschutzerklärung | Rechtliche Pflicht in Deutschland | LOW | Generator nutzen (z.B. eRecht24), DSGVO-konform |

#### Google Business Profile

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Profil vollständig ausgefüllt | Unvollständige Profile verlieren gegen Wettbewerber im Local Pack | LOW | NAP-Konsistenz (Name, Adresse, Telefon) mit Website identisch halten |
| Kategorie korrekt gesetzt | "Waschsalon" als Hauptkategorie nötig für korrekte Map-Platzierung | LOW | Primär: "Waschsalon", Sekundär: "Wäscheservice" möglich |
| Fotos hochgeladen | Businesses mit >100 Fotos bekommen 520% mehr Anrufe laut Google-Daten | MEDIUM | Innen, Maschinen, Außenansicht, ggf. Team |
| Öffnungszeiten gepflegt (inkl. Feiertage) | Falsche Zeiten = Frust, schlechte Bewertungen | LOW | Regelmäßig prüfen, vor Feiertagen anpassen |
| Bewertungen vorhanden (mind. 10-20) | 4.5★+ mit aktiver Response ist lokaler Vertrauensstandard | MEDIUM | Muss aktiv um Bewertungen gebeten werden nach Eröffnung |

#### Social Media (Instagram / Facebook)

| Feature | Why Expected | Complexity | Notes |
|---------|--------------|------------|-------|
| Profil vollständig (Bio, Link, Adresse, Kategorie) | Halbfertige Profile wirken verlassen | LOW | Link auf Website, Standort eingetragen |
| Grundlegender Content zum Launch | Leeres Profil wirkt unseriös — mind. 6-9 Posts vor Eröffnung | MEDIUM | Teaser-Content möglich: Bauphasen, Maschinenaufbau |
| Reaktion auf Kommentare / DMs | Kunden erwarten Reaktion innerhalb 24h | LOW | Disziplin/Prozess, kein Tech-Aufwand |
| Regelmäßige Posting-Frequenz | Inaktive Accounts verlieren Reach und Vertrauen | MEDIUM | Min. 2-3x/Woche; Redaktionsplan nötig |
| Standort-Tag in Posts | Lokal-Auffindbarkeit auf Instagram/Facebook | LOW | Bei jedem Post Düsseldorf / Derendorf taggen |

---

### Differentiators (Competitive Advantage)

Features, die über das Minimum hinausgehen und den Salon abheben. Lokal sind die Hürden niedrig — die meisten Wettbewerber haben kaum digitale Präsenz.

#### Website

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| FAQ-Sektion ("Wie funktioniert ein SB-Waschsalon?") | Viele Erstkunden (Studenten, Zuzügler) wissen nicht, wie SB-Waschen funktioniert — FAQ nimmt Hemmungen | LOW | Auch SEO-Wert für Long-Tail-Suchen; FAQ-Schema Markup |
| Lokale Landing Page mit Stadtteil-Keywords | "Waschsalon Derendorf", "Waschsalon Münsterstraße" — spezifischer als generisch | LOW | Eine fokussierte Seite mit lokalem Bezug schlägt generische Konkurrenz |
| Vor-Ort-Atmosphäre kommunizieren ("Community") | Waschsalon als Ort — nicht nur Dienstleistung. Entspanntes Warten, WLAN, Atmosphäre | LOW | Kurzer "Über uns"-Text, Foto-Atmosphäre |
| Eröffnungs-Countdown / Teaser-Seite | Frühe Sichtbarkeit vor Eröffnung, Spannung aufbauen, frühe SEO-Indexierung | LOW | Statische Seite mit Eröffnungsdatum + Newsletter-Opt-In optional |
| Schema Markup (LocalBusiness + OpeningHours + Review) | Rich Results in Google — Öffnungszeiten, Bewertungen direkt sichtbar im SERP | LOW | JSON-LD im HTML-Head; signifikanter SEO-Vorteil gegenüber bare-bones Wettbewerbern |
| WLAN-Info prominent platziert | Wichtig für Studenten / längere Aufenthalte — echter USP wenn vorhanden | LOW | Wenn WLAN angeboten wird: auf Website + GBP kommunizieren |

#### Google Business Profile

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Regelmäßige GBP-Posts (2x/Woche) | Google belohnt Aktivität mit besserem Ranking; Aktionen / News sichtbar | LOW | Kann mit Social-Content doppelt genutzt werden |
| Q&A-Bereich aktiv befüllen | Eigene häufige Fragen eintragen vor Kunden — kontrollierte Darstellung | LOW | "Gibt es Parkplätze?", "Welche Zahlungsmethoden?" |
| Messaging aktivieren | Kunden können direkt aus Google heraus schreiben | LOW | Einfaches Aktivieren in GBP-Dashboard |
| Geotagged Fotos | Stärkt lokales Signal; laut Quellen klarer Ranking-Faktor | LOW | Metadaten beim Upload behalten / Fotos lokal aufnehmen |

#### Social Media

| Feature | Value Proposition | Complexity | Notes |
|---------|-------------------|------------|-------|
| Behind-the-scenes Content (Aufbau, Team) | Baut Vorfreude und persönliche Bindung auf — differenziert von gesichtslosen Ketten | LOW | Handy-Videos, authentisch, kein Produktionswert nötig |
| "Vorher/Nachher" Wäsche-Content | Visuell stark auf Instagram/TikTok; zeigt greifbaren Nutzen | LOW | Stark auf TikTok (Satisfying-Nische); einfach umsetzbar |
| TikTok-Präsenz vor Eröffnung | Junge Zielgruppe (Studenten) primär auf TikTok; virales Potenzial bei Nischen-Content | MEDIUM | Andere Plattform-Logik als Instagram — erfordert eigenen Ansatz |
| Lokale Kooperationen / Shoutouts | Cross-Promotion mit Cafés, Studentenwohnheimen in Derendorf | LOW | Organische Reichweite im Kiez; kein Budget nötig |
| Trending Sounds / Challenges nutzen (TikTok) | Algorithmus belohnt Trend-Teilnahme mit Reichweite | LOW | Muss kurzfristig auf aktuelle Trends reagieren — Redaktionsflexibilität nötig |
| Lokale Hashtag-Strategie | #düsseldorf #derendorf #waschsalon steigern lokale Auffindbarkeit | LOW | Hashtag-Set einmal definieren, konsistent nutzen |

---

### Anti-Features (Deliberately NOT Build)

Features, die verlockend wirken, aber Schaden anrichten oder Aufwand erzeugen der den Nutzen nicht rechtfertigt.

| Feature | Why Requested | Why Problematic | Alternative |
|---------|---------------|-----------------|-------------|
| Maschinenverfügbarkeit in Echtzeit | Kunden fragen manchmal, ob Maschinen frei sind | Erfordert IoT-Hardware + Backend + Live-Updates = enormer Aufwand; SB-Standard erwartet das nicht | Öffnungszeiten klar kommunizieren; ggf. Stoßzeiten-Hinweis auf Website ("Montag früh meist ruhig") |
| Online-Reservierung / Buchungssystem | Andere Branchen (Friseur, Arzt) haben das — wirkt professionell | SB-Waschsalons funktionieren ohne Reservierung; System erzeugt Wartungs- und Support-Aufwand | Stoßzeiten kommunizieren reicht; kein Buchungs-Overhead |
| Live-Chat / Chatbot auf Website | Scheint modern und serviceorientiert | Erzeugt 24/7-Erwartung; kleines Business kann nicht schnell genug antworten → negativer Eindruck | WhatsApp-Deeplink ist besser: asynchron, kein Erwartungsdruck |
| Mehrseitiger Webshop / Waschmittel-Verkauf online | Zusätzlicher Umsatzkanal | Komplexität (Zahlungsabwicklung, Versand, Steuern) steht in keinem Verhältnis zum potenziellen Umsatz | Waschmittel am Automaten vor Ort verkaufen |
| Kundenkonto / Login-Bereich | "Stempel-Karte" digital machen | Enorme Komplexität (Auth, Datenschutz, DB), kein Standard im SB-Segment | Wenn Kundenbindung: einfache physische Stempelkarte oder Flyer-Aktion |
| Bewertungsportal auf eigener Website | Eigene Reviews zeigen | Eigengehostete Bewertungen wirken unglaubwürdig; Pflege aufwendig | Google Reviews + Facebook Reviews einbetten (Widget) |
| TikTok Ads vor Eröffnung | Reichweite aufbauen | Paid Social vor Eröffnung ist Geldverschwendung ohne konvertierbares Angebot | Organischen Content aufbauen; Ads erst zur Eröffnung oder danach schalten |
| Story Highlights mit aufwendiger Gestaltung | Professionell wirken | Zeitaufwendig, schnell veraltet; niemand wartet auf perfekte Cover-Designs | Einfache, klare Highlights: Preise, Anfahrt, FAQ |

---

## Feature Dependencies

```
[Website live + indexiert]
    └──required for──> [Google Business Profile verlinken]
                           └──required for──> [Google Maps Ranking / Local Pack]

[Fotos vom Salon vorhanden]
    └──required for──> [Fotogalerie auf Website]
    └──required for──> [GBP Fotos hochladen]
    └──required for──> [Social Media Content mit echten Bildern]

[Eröffnung erfolgt]
    └──triggers──> [Bewertungen aktiv einholen]
    └──triggers──> [Google Ads + Social Ads starten]

[Social Media Profile erstellt]
    └──enhances──> [Website (Links, Cross-Referenz)]
    └──enhances──> [GBP (Erwähnung der Kanäle)]

[Schema Markup implementiert]
    └──enhances──> [Local SEO / Google Rankings]
    └──enhances──> [Rich Results (Öffnungszeiten, Bewertungen im SERP)]

[Öffnungszeiten definiert (intern)]
    └──required for──> [Website Öffnungszeiten]
    └──required for──> [GBP Öffnungszeiten]
    └──required for──> [Schema Markup OpeningHours]
```

### Dependency Notes

- **Fotos required for Galerie / GBP / Social:** Das ist der kritische Blocker für vollständigen Launch — Platzhalter-Strategie für Website-Phase nötig (Bauphasen-Fotos, Moodbilder, Stock). Echte Salon-Fotos kommen erst nach Einrichtung.
- **Website required for GBP-Verlinkung:** GBP sollte erst finalisiert werden wenn Website-URL feststeht, damit NAP-Konsistenz von Anfang an stimmt.
- **Eröffnung triggers Ads:** Paid Ads vor Eröffnung (ohne konvertierbares Ziel) verschwenden Budget. Organischer Aufbau first, dann Ads zur Eröffnung boosten.
- **Schema Markup enhances SEO:** Kein Hard-Dependency, aber deutlicher Ranking-Vorteil — sollte in Website-Build integriert werden, nicht nachträglich.

---

## MVP Definition

### Launch With (v1) — vor Eröffnung

Minimum, damit die digitale Präsenz steht und die Eröffnung unterstützt wird.

- [ ] Website mit Adresse, Öffnungszeiten, Preisen, Anfahrt — Kerninfo sofort verfügbar
- [ ] Mobile-First, schnell ladend (Astro static build), HTTPS
- [ ] Impressum + Datenschutzerklärung — rechtliche Pflicht
- [ ] Schema Markup (LocalBusiness, OpeningHours) — von Anfang an, kein Nacharbeit
- [ ] Google Business Profile vollständig ausgefüllt und verifiziert
- [ ] Instagram-Profil mit Bio, Link, mind. 6 Teaser-Posts (Aufbau, Vorfreude)
- [ ] Facebook-Seite mit Basis-Info
- [ ] Lokale SEO-Keywords (Derendorf, Düsseldorf, Münsterstraße) in Meta-Tags und Headings

### Add After Validation (v1.x) — nach Eröffnung

Features, die nach Eröffnung ergeben sich aus dem laufenden Betrieb.

- [ ] Fotogalerie mit echten Salon-Bildern — sobald Fotos vorhanden
- [ ] FAQ-Sektion — sobald häufige Kundenfragen bekannt sind
- [ ] GBP Q&A befüllen — aus ersten Wochen Betrieb lernen
- [ ] Bewertungs-Strategie aktiv starten — erste Kunden um Google-Review bitten
- [ ] TikTok-Profil aufsetzen und testen — nach Eröffnung mit echtem Content einfacher
- [ ] Google Ads Kampagne starten — nach Eröffnung, mit Ziel (Ladenbesuch)
- [ ] GBP-Posts regelmäßig (2x/Woche) — Rhythm einfahren nach Eröffnung

### Future Consideration (v2+) — nach stabilem Betrieb

- [ ] Stoßzeiten-Hinweis auf Website — braucht Beobachtungszeitraum (Betrieb ~3 Monate)
- [ ] Instagram/Facebook Ads gezielt — nach organischem Grundrauschen
- [ ] Lokale Kooperationen Content — nach Netzwerkaufbau in Derendorf
- [ ] WLAN als USP kommunizieren — wenn WLAN tatsächlich installiert und stabil

---

## Feature Prioritization Matrix

| Feature | User Value | Implementation Cost | Priority |
|---------|------------|---------------------|----------|
| Adresse, Öffnungszeiten, Preise auf Website | HIGH | LOW | P1 |
| Google Business Profile vollständig | HIGH | LOW | P1 |
| Mobile-First + schnelle Ladezeit | HIGH | MEDIUM | P1 |
| Impressum + Datenschutz | HIGH (rechtlich) | LOW | P1 |
| Schema Markup LocalBusiness | HIGH | LOW | P1 |
| Instagram Teaser-Content (6+ Posts) | HIGH | MEDIUM | P1 |
| Facebook-Seite Basis | MEDIUM | LOW | P1 |
| Fotogalerie (echte Bilder) | HIGH | LOW | P2 |
| FAQ-Sektion | MEDIUM | LOW | P2 |
| GBP-Posts regelmäßig | MEDIUM | LOW | P2 |
| Bewertungs-Strategie | HIGH | LOW | P2 |
| TikTok-Profil + Content | MEDIUM | MEDIUM | P2 |
| Google Ads Kampagne | HIGH | MEDIUM | P2 |
| Behind-the-scenes Content | MEDIUM | LOW | P2 |
| Instagram/Facebook Ads | MEDIUM | MEDIUM | P3 |
| Lokale Kooperationen Content | MEDIUM | LOW | P3 |
| GBP Q&A befüllen | LOW | LOW | P3 |
| Stoßzeiten-Kommunikation | MEDIUM | LOW | P3 |

**Priority key:**
- P1: Muss vor Eröffnung stehen
- P2: Sollte in den ersten Wochen nach Eröffnung kommen
- P3: Sobald Betrieb stabil und Zeit vorhanden

---

## Competitor Feature Analysis

Lokale Waschsalon-Konkurrenz in Deutschland hat typischerweise extrem schwache digitale Präsenz — niedrige Messlatte.

| Feature | Typische lokale Konkurrenz | Ketten (Bloomest/Eco-Express) | Unsere Planung |
|---------|---------------------------|-------------------------------|----------------|
| Website | Oft nicht vorhanden oder veraltet | Vorhanden, aber generisch / Franchise-Template | Eigene, lokale Website mit Derendorf-Fokus |
| GBP | Oft unvollständig, keine Fotos | Vorhanden, wenig aktiv | Vollständig, aktiv, regelmäßige Posts |
| Social Media | Kaum vorhanden | Instagram ggf., selten aktiv | Aktive Profile auf IG, FB, TikTok |
| Mobile-First | Häufig nicht | Standard-Template | Von Grund auf mobile-first |
| Lokale SEO | Zufällig, kein Schema | Markenname SEO | Gezielte Stadtteil-Keywords + Schema |
| Bewertungen | Wenig, kaum Antworten | Mäßig | Aktiv einsammeln + beantworten |

---

## Sources

- [10 Must-Haves for a Laundromat Website — CleanCloud](https://cleancloudapp.com/blog/10-must-haves-for-a-laundromat-website)
- [10 Essential Features for a Laundromat Website — TurnsApp](https://www.turnsapp.com/blog/10-essential-features-for-a-successful-laundromat-website)
- [Laundromat Website & Marketing — TryCents](https://www.trycents.com/our-2-cents/laundromat-website-marketing)
- [Google Business Profile for Laundromats — TurnsApp](https://www.turnsapp.com/blog/laundry-and-dry-cleaning-businesses-use-google-business-profile)
- [GBP Tactics for Local Laundromat SEO — TryCents](https://www.trycents.com/our-2-cents/google-business-profile-optimization)
- [Laundromat Social Media Best Practices — TryCents](https://www.trycents.com/our-2-cents/optimizing-laundromat-social-media)
- [Steal These Laundromat Social Media Ideas — WashWeekly](https://www.washweekly.com/steal-these-content-ideas/)
- [How to Grow Your Laundromat in 2026 — Card Concepts Inc.](https://www.laundrycard.com/how-to-grow-your-laundromat-in-2026-the-ultimate-marketing-checklist/)
- [Small Business Website Must-Haves 2026 — Good Fellas Digital](https://www.goodfellastech.com/blog/small-business-website-must-haves-2026-conversion-checklist)
- [Essential Website Features for Local Business 2026 — Defcor](https://defcor.us/essential-website-features-every-us-local-business-needs-in-2026/)
- [Schema Markup for Local Businesses — HigherVisibility](https://www.highervisibility.com/seo/learn/schema-markup-for-local-businesses/)
- [Bloomest (Miele) — Waschsalon Beispiel Deutschland](https://www.bloomestlaundry.de/)

---
*Feature research for: Waschsalon Derendorf — lokale Webpräsenz & Social Media*
*Researched: 2026-03-15*
