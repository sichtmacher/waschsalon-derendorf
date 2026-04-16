# Phase 3: Google Business Profile — Discussion Log

> **Audit trail only.** Do not use as input to planning, research, or execution agents.
> Decisions are captured in `03-CONTEXT.md` — this log preserves the alternatives considered.

**Date:** 2026-04-16
**Phase:** 03-google-business-profile
**Areas discussed:** Owner & Verifizierung, Foto-Strategie pre-opening, GBP-Content (Beschreibung, Services, Attribute)
**Areas deferred to Claude's Discretion:** Posts & Reviews (GBP-04 + GBP-05)

---

## Gray-Area-Auswahl (Multi-Select)

| Option | Ausgewählt |
|--------|------------|
| Owner & Verifizierung | ✓ |
| Foto-Strategie pre-opening | ✓ |
| GBP-Content (Beschreibung, Services, Attribute) | ✓ |
| Posts & Reviews (GBP-04 + GBP-05) | — (Claude's Discretion) |

---

## Area 1 — Owner & Verifizierung

### Frage 1: Primary Owner des GBP

| Option | Description | Selected |
|--------|-------------|----------|
| Laura Maskos (Betreiberin) | Laura ist Betreiberin/Impressum, sauber für GmbH-Transition | |
| Neues dediziertes Geschäfts-Konto | Neuer Google-Account, entkoppelt vom Privatkonto | ✓ |
| Henri Paas (Privat) — später transferieren | Schnellster Start aber 7-Tage-Cooldown beim Transfer | |

**User's choice:** Neues dediziertes Geschäfts-Konto
**Notes:** Gibt sauberen Start ohne Privat-Konto-Verknüpfung. Laura kann später Co-Owner werden, aber das ist Post-Phase-3.

### Frage 2: Verifizierungsmethode

| Option | Description | Selected |
|--------|-------------|----------|
| Video-Verifizierung (Recommended) | Live-Video zeigt Fassade + Innenbereich, 1-7 Tage | ✓ (mit Blocker) |
| Postkarte | Klassisch, 5-14 Tage, braucht Briefkasten | |
| Instant via Search Console | Schnell, setzt Konto-Match zu verifizierter Domain voraus | |
| Claude recherchiert aktuellen Stand | Google ändert Methoden regelmäßig | |

**User's choice:** Video-Verifizierung
**User's note:** "video ist okay ich komme aber noch nicht in das geschäft herein"
**Notes:** Timeline-Blocker erkannt. Video-Verifizierung bis zur Schlüsselübergabe unmöglich. Fallback-Hierarchie in D-06 festgelegt: Instant-Verify via SC testen → Postkarte nach Schlüsselübergabe → Video nach Schlüsselübergabe.

### Frage 3: Zusätzliche Manager?

| Option | Description | Selected |
|--------|-------------|----------|
| Henri Paas als Manager (SEO/Content) | Betreiber/Agentur-Standard-Aufteilung | |
| Second Owner zur Absicherung | Falls Primary ausfällt | |
| Keine weiteren — nur Primary Owner | Minimal-Setup | ✓ |

**User's choice:** Keine weiteren — nur Primary Owner
**Notes:** Minimal start, erweiterbar. Entscheidung re-visit wenn Business wächst oder Redundanz-Bedarf entsteht.

### Frage 4: Credentials-Ablage

| Option | Description | Selected |
|--------|-------------|----------|
| 1Password | Bestehender Password-Manager | ✓ |
| Separate Datei außerhalb des Repos | z.B. Desktop-File | |
| Claude's Discretion | Nur Policy dokumentieren | |

**User's choice:** 1Password
**Notes:** Standard Sichtmacher-Workflow. Eintrag muss Recovery-Email + 2FA-Backup-Codes + Owner-Konto enthalten.

---

## Area 2 — Foto-Strategie pre-opening

### Frage 1: Erlaubte Foto-Quellen (multiSelect)

| Option | Description | Selected |
|--------|-------------|----------|
| Außenfassade / Straßenansicht / Umgebung | Münsterstr. 88 von außen, Schild, Nachbarschaft | — |
| Logo + Markendesign als "Photo" | Brand-Asset als Cover/Profil | ✓ |
| Renderings / 3D-Mockups | Eigene Renderings, Risiko als irreführend gemeldet | |
| Erst bei/nach Übergabe: Baufortschritt | Weg zur Eröffnung dokumentieren | |

**User's choice:** Logo + Markendesign als "Photo" (nur eine Option ausgewählt)
**Notes:** User-Intent interpretiert als "Quellen, die JETZT ohne Zutritt verfügbar sind": Logo. Mindest-Set der nächsten Frage impliziert, dass Fassaden-/Straßen-Fotos selbst mit Handy gemacht werden, wenn User nach draußen zur Adresse geht (kein Zutritt nötig). Renderings und Baufortschritt sind raus.

### Frage 2: Pro-Shoot — wann?

| Option | Description | Selected |
|--------|-------------|----------|
| Soft-Opening-Shoot (Recommended) | Kurz vor Start, sauberer leerer Salon | ✓ |
| Direkt nach Eröffnung mit Kunden | Action-Shots, Personen-Rechte klären | |
| Claude's Discretion | Planner entscheidet | |

**User's choice:** Soft-Opening-Shoot
**Notes:** Perfekter Moment: sauber + kontrollierbar + 1 Session deckt GBP-Fotos + Website-WEB-09 ab.

### Frage 3: Mindest-Foto-Set

| Option | Description | Selected |
|--------|-------------|----------|
| 5 konkrete Fotos (Logo, Fassade, Straße, Eingang, Umgebung) | Minimum, 100% pre-opening-machbar | ✓ |
| 7-10 Fotos inkl. 2-3 Baufortschritt | Bauphase als Story | |
| Gestaffelt: 5 bei Verifizierung, 15+ bis Eröffnung | Phase-weiser Ausbau | |

**User's choice:** 5 konkrete Fotos (Logo, Fassade, Straße, Eingang, Umgebung)
**Notes:** Deckt Success Criterion #3 (≥5 Fotos) ohne Interior-Zugang. Soft-Opening-Shoot ersetzt später alle 5.

### Frage 4: 360°-Tour

| Option | Description | Selected |
|--------|-------------|----------|
| Nein, aus v1 raus | Zu aufwendig pre-opening | |
| Claude's Discretion | Planner entscheidet basierend auf Ressourcen | ✓ |

**User's choice:** Claude's Discretion
**Notes:** Deferred to Phase 6 oder später. Nicht erfolgskritisch für Phase 3.

---

## Area 3 — GBP-Content (Beschreibung, Services, Attribute)

### Frage 1: Ton der Kurzbeschreibung

| Option | Description | Selected |
|--------|-------------|----------|
| Keyword-fokussiert (Local SEO) | Maximaler Ranking-Beitrag, sachlich | |
| Freundlich-einladend | Zielgruppen-Ansprache, weniger SEO | |
| Mix: Keywords vorn, Warmton hinten (Recommended) | Beste Balance, erste 250 Zeichen Keywords | ✓ |

**User's choice:** Mix
**Notes:** Optimum für GBP: vorderer Bereich Ranking-optimiert, hinten Brand-Differenzierung.

### Frage 2: Preise im Services-Katalog

| Option | Description | Selected |
|--------|-------------|----------|
| Ja, konkret wie auf der Website (Recommended) | Google belohnt konkrete Preise im Local Pack | ✓ |
| Nur "ab"-Startpreis zeigen | Minimal, Click-Bait-freundlich | |
| Keine Preise, nur Service-Namen | Maximal flexibel für Preisanpassungen | |

**User's choice:** Ja, konkret wie auf der Website
**Notes:** Zero Diskrepanz zwischen GBP und Website — wichtig für Google-Entity-Matching.

### Frage 3: Service-Einträge (multiSelect)

| Option | Description | Selected |
|--------|-------------|----------|
| Waschen 7 kg (Standard) | Hauptleistung | ✓ |
| Waschen 15 kg (Großmaschine) | D-15 explizit fett, Bettdecken | ✓ |
| Trocknen (15 kg, 1,80 €/10min) | Separate Preislogik | ✓ |
| Waschmittel-Verkauf am Automaten | Clutter oder Aufwertung? | |

**User's choice:** Waschen 7 kg, Waschen 15 kg, Trocknen 15 kg
**Notes:** Drei Service-Einträge halten den Katalog sauber. Waschmittel-Verkauf bleibt als Feature im Flow, aber nicht als eigener Service gelistet.

### Frage 4: GBP-Attribute (multiSelect)

| Option | Description | Selected |
|--------|-------------|----------|
| Kostenloses WLAN (Recommended) | D-19: WLAN ja, Ranking-Filter | ✓ |
| Kartenzahlung akzeptiert (Recommended) | D-17: Karte + Bar, Filter | ✓ |
| Barrierefreier Zugang | Nur wenn real gegeben | ✓ (mit Vorbehalt) |
| Claude's Discretion für Rest | Planner wählt übrige Attribute | ✓ |

**User's choice:** WLAN, Kartenzahlung, Barrierefrei (mit Vor-Ort-Prüfung), Rest Claude's Discretion
**Notes:** "Barrierefrei" ist bei Schlüsselübergabe vor Aktivierung zu verifizieren. Falsche Angabe bringt Sanktionen.

---

## Deferred Ideas (innerhalb Phase 3)

- Posts & Reviews als eigene Discussion-Area — User hat bewusst nicht ausgewählt, Claude's Discretion gesetzt. Kann post-Planning reviewt werden.
- 360°/Street-View-Interior — Phase 6 oder später.
- GBP-Messaging — nicht in v1.
- Mehrsprachigkeit (v2).
- GBP-Produkte-Feature — n/a für SB-Waschsalon.

---

*Log generated from /gsd:discuss-phase 3 session on 2026-04-16.*
