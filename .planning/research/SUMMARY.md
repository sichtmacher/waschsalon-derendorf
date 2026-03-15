# Project Research Summary

**Project:** Waschsalon Derendorf — Digitale Webpräsenz & Social Media
**Domain:** Local business web presence (SB-Waschsalon, Düsseldorf-Derendorf)
**Researched:** 2026-03-15
**Confidence:** HIGH

## Executive Summary

Building a digital presence for a local self-service laundromat is a well-understood domain with a clear, dependency-ordered approach. The system is not primarily a software product — it is a coordinated multi-platform presence. The canonical flow is: owned website first (source of truth), then Google Business Profile (highest local ROI), then social profiles (Instagram, Facebook, TikTok), and paid ads only after all organic channels are established. The local competitive bar in Düsseldorf is extremely low — most competitors have no website or an outdated one, no active GBP, and no social media. A well-executed basic presence beats the competition without premium features.

The recommended technical stack is Astro 6 (static site generator) on Netlify, with Tailwind CSS v4, JSON-LD schema markup, and GA4 for analytics. Astro is the clear choice because it produces zero-JavaScript output by default, guaranteeing excellent Core Web Vitals — critical for local SEO. Henri Paas already has Astro experience (the Sichtmacher project), eliminating any learning curve. The entire website can be delivered as 2-3 static pages with no backend, no CMS, and no ongoing maintenance burden.

The primary risks are all operational rather than technical: NAP inconsistency across platforms destroying local search authority, missing DSGVO compliance triggering Abmahnungen (German cease-and-desist letters), and launching too late to accumulate the 3-6 month SEO runway that Google requires for a new domain. All three risks are entirely preventable if addressed from the start of the project. The secondary risk is content exhaustion on social media — which is avoided by designing a sustainable posting cadence (not an ambitious one) from the beginning.

## Key Findings

### Recommended Stack

Astro 6 is the unambiguous choice: Henri already knows it, it produces optimal Core Web Vitals out of the box, and a static build requires zero backend infrastructure for a read-only brochure site. Tailwind CSS v4 (via the Vite plugin, not the deprecated `@astrojs/tailwind`) enables rapid visual iteration. Netlify is the correct hosting choice because Vercel's free tier explicitly prohibits commercial use. The most critical integration is JSON-LD structured data (LocalBusiness + LaundryService schema) — this directly enables rich results in Google search and is required for competitive local pack performance. See `.planning/research/STACK.md` for full details.

**Core technologies:**
- **Astro 6**: Static site framework — zero JS by default, best Core Web Vitals, developer already experienced
- **Tailwind CSS v4**: Styling via Vite plugin — fast iteration, no CSS sprawl, works with Astro 6
- **JSON-LD (astro-seo-schema)**: Structured data — required for LocalBusiness rich results and GBP alignment
- **Netlify**: Static hosting — free tier allows commercial use (Vercel does not)
- **GA4 + Meta Pixel**: Analytics and ad tracking — required before any paid campaigns launch

**Critical version notes:**
- Node 22+ required (Astro 6 dropped Node 18/20)
- Use `@tailwindcss/vite` directly — `@astrojs/tailwind` is deprecated for v4
- Do NOT use Vercel free tier — commercial use prohibited

### Expected Features

The feature landscape splits cleanly into pre-opening (P1) and post-opening (P2) based on what exists before grand opening. The most important insight: photos are the critical blocker — gallery, GBP photos, and real social content all require the salon to be built. A placeholder strategy is mandatory for website launch. See `.planning/research/FEATURES.md` for full prioritization matrix.

**Must have (table stakes — before opening):**
- Address, opening hours, prices on website — the three questions every customer asks
- Mobile-first design — 60%+ of local searches are on smartphone
- Impressum + Datenschutzerklärung — legal obligation in Germany
- Schema markup (LocalBusiness, OpeningHours) — SEO foundation, must be built in from the start
- Google Business Profile fully claimed and verified
- Instagram profile with 6+ pre-opening teaser posts
- Facebook page with basic info

**Should have (competitive differentiators):**
- FAQ section — reduces friction for first-time SB customers (students, newcomers)
- Lokale landing page with Derendorf/Münsterstraße keywords — beats generic competitors
- Fotogalerie with real salon photos — after opening
- GBP Q&A proactively populated — controlled information before customers ask
- TikTok profile for younger audience reach (Derendorf has student population)

**Defer (v2+, after stable operations):**
- Stoßzeiten-Kommunikation — needs ~3 months of observation data
- Instagram/Facebook paid ads — after organic baseline established
- Local partnership content — after network built in the neighborhood

**Explicitly not building:**
- Real-time machine availability (IoT complexity, not expected in SB segment)
- Booking system (SB laundromats don't use reservations)
- Live chat (creates unmanageable 24/7 expectations)

### Architecture Approach

The architecture is a four-layer presence system: Discovery (Google Search, Maps, Social Search) feeds into Presence (Website, GBP, Social Profiles), which is supported by Trust (Schema Markup, Reviews, Social Proof), which gets extended by Amplification (Google Ads, Meta Ads). The critical structural constraint is the **critical path**: Website must be live before GBP is finalized; GBP must be complete before Google Ads launch; social profiles need content before any paid social runs. NAP consistency (Name/Address/Phone in identical format across all platforms) is infrastructure, not content — it must be established in a master document before any profile is created. See `.planning/research/ARCHITECTURE.md` for the full system diagram.

**Major components:**
1. **Website (Astro static)** — canonical source of truth; all other platforms reference back to it
2. **Google Business Profile** — highest-ROI single component for local search; drives Maps/Local Pack appearance
3. **Social Profiles (IG + FB + TikTok)** — brand presence, organic reach, social proof; must have content before paid ads
4. **Schema Markup (JSON-LD)** — structured data layer enabling rich results; must be built into website from day one
5. **Paid Ads (Google + Meta)** — amplification layer; launches last after all organic channels are complete
6. **NAP Master Record** — internal document, not a platform; the single most important operational artifact

### Critical Pitfalls

1. **NAP inconsistency across platforms** — Create a canonical NAP document (exact name, address format, phone number, URL) before registering on any platform. Use it as copy-paste source for every registration. Even "Str." vs. "Straße" splits ranking authority. Recovery takes 4-8 weeks.

2. **Missing Impressum / DSGVO compliance before launch** — In Germany, launching without Impressum and Datenschutzerklärung invites Abmahnungen (€500-2000 legal costs). Self-host Google Fonts (never load from fonts.googleapis.com). Use click-to-activate for Google Maps embed. Generate legal pages via eRecht24 before any public URL is shared.

3. **Launching too late — wasting SEO runway** — Google takes 3-6 months to trust a new domain. A minimal "Coming Soon" page must go live within the first weeks of the project, not 2 weeks before opening. GBP listing should be created as soon as the physical address is confirmed.

4. **GBP treated as one-time setup** — Google's 2026 algorithm weights ongoing activity (new photos, posts, review responses). Schedule recurring activity from day one: 2 new photos/month, 1 GBP post/2 weeks, respond to every review within 48 hours.

5. **Content exhaustion across too many platforms simultaneously** — "2 posts/week on 4 platforms" sounds reasonable but is not sustainable for a solo operator. Tier platforms: Instagram + GBP are tier 1 (always maintained), Facebook is cross-posted from Instagram (zero additional work), TikTok is tier 2 (activated only after rhythm is established).

## Implications for Roadmap

Based on research, suggested phase structure:

### Phase 1: Domain, NAP & Grundpräsenz
**Rationale:** The critical path requires a domain and NAP record before anything else. SEO runway starts the moment a Coming Soon page is indexed — delay here costs ranking time that cannot be recovered. Every other platform depends on the canonical NAP established here.
**Delivers:** Domain registered, canonical NAP document created, Coming Soon page live on Netlify, Google Search Console configured
**Addresses:** Address/hours visible to early searchers; SEO clock starts
**Avoids:** NAP inconsistency pitfall (document established before any profile created); SEO runway pitfall (domain live early)

### Phase 2: Website Launch (Astro Static Site)
**Rationale:** Website is the canonical source of truth that GBP and social profiles reference. Must be live before GBP is finalized to ensure the linked URL is stable. Schema markup must be built in from the start, not retrofitted.
**Delivers:** Full Astro 6 website with address, hours, prices, services, map embed, Impressum, Datenschutz, LocalBusiness JSON-LD, GA4 + Meta Pixel
**Uses:** Astro 6 + Tailwind v4 + astro-seo-schema + Netlify (full STACK.md stack)
**Implements:** Website component as single source of truth (ARCHITECTURE.md Pattern 1)
**Avoids:** DSGVO/Impressum pitfall (legal pages required before launch); Google Fonts CDN violation (self-hosted)

### Phase 3: Google Business Profile & Local SEO
**Rationale:** GBP is the highest-ROI component for local search visibility. Must be finalized after website is live (to link stable URL). Category selection and NAP must be exact — wrong category means wrong searches.
**Delivers:** GBP fully claimed, verified, correct category ("Waschsalon"), complete with photos, hours, description, website link, Q&A seeded
**Implements:** GBP as discovery + trust layer; Google Ads location extension pre-configured for Phase 5
**Avoids:** Wrong GBP category pitfall; GBP as one-time setup pitfall (establish recurring maintenance habit here)

### Phase 4: Social Media Profiles & Pre-Opening Content
**Rationale:** Social profiles need content (6-9 posts) before any paid social campaigns launch. Pre-opening behind-the-scenes content is genuinely available at this stage (construction, machine delivery). Setting up sustainable posting cadence now prevents content burnout later.
**Delivers:** Instagram Business Account + Facebook Page + TikTok profile (optional) with NAP in bios, 6+ posts, posting calendar, content repurposing workflow
**Addresses:** Instagram teaser content (FEATURES.md P1); TikTok for younger Derendorf audience (FEATURES.md P2)
**Avoids:** Content exhaustion pitfall (tier system: IG+GBP tier 1, FB cross-post, TikTok tier 2); empty profiles before ads pitfall

### Phase 5: Eröffnung & Paid Amplification
**Rationale:** Paid ads launch last — only after website + GBP + social profiles are all complete with real content. Ads amplify what already works organically. Google Ads conversion tracking must be verified before budget increases. Ads launch 2-4 weeks before opening date.
**Delivers:** Google Ads local search campaign (location-targeted, 5km radius), Meta Ads awareness campaign (IG + FB), conversion tracking active, review acquisition process started
**Implements:** Amplification layer (ARCHITECTURE.md); Organic-First, Paid-Amplify pattern
**Avoids:** Running ads before profiles are complete; Google Ads budget waste (conversion tracking required first)

### Phase 6: Post-Opening Content Cadence & Review Growth
**Rationale:** After opening, real photos become available (triggers fotogalerie and authentic social content). First customers enable review acquisition. FAQ can be populated from real questions. This phase operationalizes the ongoing maintenance habits.
**Delivers:** Real salon photos added to website + GBP + social; FAQ section live; active review acquisition (in-store QR code); GBP post rhythm established
**Addresses:** Fotogalerie (FEATURES.md P2); FAQ (FEATURES.md P2); Bewertungs-Strategie (FEATURES.md P2)

### Phase Ordering Rationale

- **Domain before GBP before Ads** — hard dependency chain; can't run Google Ads without a landing page; GBP location extensions require a verified listing
- **NAP document in Phase 1** — must exist before any platform registration to prevent the single most damaging and hardest-to-recover pitfall
- **Website before GBP finalization** — GBP "Website" field should link to the permanent URL; don't finalize until URL is stable
- **Social content before paid social** — empty profiles waste ad spend and destroy trust
- **Paid ads last** — amplification requires something worth amplifying; organic foundation first
- **Fotogalerie + FAQ in Phase 6** — these require real operational data (photos, actual customer questions) that don't exist pre-opening

### Research Flags

Phases likely needing deeper research during planning:
- **Phase 5 (Paid Ads):** Google Ads campaign structure for local laundromat (keyword match types, negative keywords, PMAX vs. Search decision) — MEDIUM confidence in STACK.md, recommend research-phase
- **Phase 3 (GBP Category):** Exact current German GBP category strings ("Waschsalon" vs. "Münzwäscherei") should be verified in the live GBP interface at setup time — category list changes

Phases with standard patterns (skip research-phase):
- **Phase 1 (Domain/NAP):** Well-documented process, no unknowns
- **Phase 2 (Astro Website):** STACK.md has complete installation commands and version compatibility matrix; Henri has existing Astro experience
- **Phase 4 (Social Setup):** Standard platform setup with well-documented best practices
- **Phase 6 (Post-Opening):** Operational cadence, no new technical complexity

## Confidence Assessment

| Area | Confidence | Notes |
|------|------------|-------|
| Stack | HIGH | Astro 6 + Tailwind v4 + Netlify confirmed from official docs; version compatibility matrix verified; one MEDIUM-confidence note on Tailwind v4 community source (but cross-confirmed with official Astro docs) |
| Features | MEDIUM-HIGH | Multiple industry sources (CleanCloud, TurnsApp, TryCents, WashWeekly); good coverage of laundromat-specific feature expectations; less data on German-market specifics |
| Architecture | HIGH | Core patterns well-established; NAP consistency mechanics confirmed from multiple local SEO sources; platform-specific integration details MEDIUM |
| Pitfalls | HIGH (legal), MEDIUM (social) | DSGVO/Impressum requirements verified from German legal sources (eRecht24, DigitalSprung); social content cadence is MEDIUM — based on industry guidance, not empirical data for this specific market |

**Overall confidence:** HIGH

### Gaps to Address

- **Actual opening date unknown:** Phase 5 timing (paid ads 2-4 weeks before opening) cannot be scheduled until opening date is confirmed. The Coming Soon page (Phase 1) should be updated with the date when known.
- **Physical address not confirmed:** NAP document cannot be finalized until the Münsterstraße address is locked in. Phase 1 is blocked on this.
- **Phone number not in research:** The canonical phone number for the NAP record must be decided (0211 format vs. +49 211 format) before Phase 1 completes.
- **WLAN availability unknown:** If WLAN is installed in the salon, this is a genuine differentiator for students (FEATURES.md flagged this as a USP). Add to website and GBP only after confirmed.
- **Google Ads budget not defined:** Phase 5 campaign structure depends on available budget. Research recommends starting with Google Search only (not PMAX) until Search is profitable — but exact bid strategy needs budget input.

## Sources

### Primary (HIGH confidence)
- [Astro official docs — Tailwind v4 integration](https://docs.astro.build/en/guides/integrations-guide/tailwind/) — confirmed @tailwindcss/vite approach
- [Astro 6 Beta announcement](https://astro.build/blog/astro-6-beta/) — Node 22+ requirement
- [Google LocalBusiness Structured Data](https://developers.google.com/search/docs/appearance/structured-data/local-business) — required schema properties
- [Meta oEmbed deprecation](https://developers.facebook.com/docs/instagram-platform/oembed/) — oEmbed deprecated November 2025
- [eRecht24 — Cookie-Banner Pflicht](https://www.e-recht24.de/tracking-cookies/8451-hinweispflicht-fuer-cookies.html) — DSGVO compliance requirements
- [astro-seo-schema on npm](https://www.npmjs.com/package/astro-seo-schema) — package confirmed

### Secondary (MEDIUM confidence)
- [CleanCloud — 10 Must-Haves for a Laundromat Website](https://cleancloudapp.com/blog/10-must-haves-for-a-laundromat-website) — feature requirements
- [TurnsApp — Laundromat Website Essential Features](https://www.turnsapp.com/blog/10-essential-features-for-a-successful-laundromat-website) — feature requirements
- [TryCents — Laundromat Marketing Guides](https://www.trycents.com/our-2-cents/) — social media strategy, GBP tactics
- [Pensacola SEO — Laundromat GMB Case Study](https://pensacolaseocompany.com/laundromat-gmb-seo-case-study) — GBP ranking mechanics
- [LaundroBoost Marketing — Laundromat SEO 2026](https://laundroboostmarketing.com/2026/01/11/laundromat-seo-actually-brings-in-customers/) — local SEO patterns
- [NAP Consistency — SEO-Day Wiki](https://www.seo-day.de/wiki/local-seo/citations/nap-konsistenz.php) — NAP mechanics in German market
- [Netlify vs Vercel comparison](https://www.netlify.com/guides/netlify-vs-vercel/) — commercial use restriction (Netlify-authored; MEDIUM)
- [Connectica — 18 Local SEO Mistakes 2026](https://www.connecticallc.com/local-seo-mistakes/) — pitfall catalog
- [DigitalSprung — Cookie-Banner Pflicht 2025](https://digitalsprung.de/blogs/artikel/cookie-banner-pflicht-2025-so-verwandelst-du-das-pop-up-in-ein-vertrauenssignal) — DSGVO banner requirements

---
*Research completed: 2026-03-15*
*Ready for roadmap: yes*
