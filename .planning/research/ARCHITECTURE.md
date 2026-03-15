# Architecture Research

**Domain:** Local business web presence — laundromat (SB-Waschsalon)
**Researched:** 2026-03-15
**Confidence:** HIGH (core structure well-established; platform-specific details MEDIUM)

## Standard Architecture

### System Overview

```
┌─────────────────────────────────────────────────────────────────────────┐
│                         DISCOVERY LAYER                                  │
│  (How customers find the business)                                       │
├────────────────────┬─────────────────────┬───────────────────────────────┤
│   Google Search    │   Google Maps        │   Social Search               │
│   (organic SEO)    │   (local pack)       │   (IG, TikTok, FB hashtags)   │
└────────┬───────────┴──────────┬──────────┴────────────────┬──────────────┘
         │                      │                           │
         ▼                      ▼                           ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         PRESENCE LAYER                                   │
│  (Where customers land and form impressions)                             │
├──────────────────────┬────────────────────┬──────────────────────────────┤
│   Website            │  Google Business   │  Social Media Profiles       │
│   (owned, canonical) │  Profile (GBP)     │  IG / FB / TikTok            │
│                      │  (Google-owned)    │  (platform-owned)            │
└──────────┬───────────┴──────────┬─────────┴──────────────┬───────────────┘
           │                      │                         │
           │    ◄── NAP sync ──►  │  ◄── NAP sync ──►      │
           │                      │                         │
           ▼                      ▼                         ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         TRUST LAYER                                      │
│  (What convinces customers the business is legitimate)                   │
├──────────────────────┬────────────────────┬──────────────────────────────┤
│   Schema Markup      │  Google Reviews    │  Social Proof                │
│   (LocalBusiness)    │  (star rating)     │  (follower count, posts)     │
└──────────────────────┴────────────────────┴──────────────────────────────┘
                                │
                                ▼
┌─────────────────────────────────────────────────────────────────────────┐
│                         AMPLIFICATION LAYER                              │
│  (Paid channels to extend reach — especially around launch)              │
├──────────────────────┬────────────────────┬──────────────────────────────┤
│  Google Ads          │  Meta Ads          │  TikTok Spark Ads            │
│  (search intent)     │  (IG + FB,         │  (boost organic posts,       │
│                      │   radius targeting) │   Gen Z/Millennial reach)   │
└──────────────────────┴────────────────────┴──────────────────────────────┘
```

### Component Responsibilities

| Component | Responsibility | Typical Implementation |
|-----------|----------------|------------------------|
| Website | Canonical source of truth for all business info; SEO foundation | Astro (static) or WordPress |
| Google Business Profile (GBP) | Local search visibility; reviews; Maps presence | Google-managed listing |
| Instagram Profile | Visual brand presence; local community engagement | Instagram Business Account |
| Facebook Page | Older demographics; local groups; Events feature | Facebook Business Page |
| TikTok Profile | Viral reach; younger demographics; organic discovery | TikTok Business Account |
| Schema Markup | Structured data that tells search engines what the business is | JSON-LD in website `<head>` |
| Google Ads | Capture high-intent local search queries | Google Ads campaign (location-targeted) |
| Meta Ads | Radius-based awareness ads (IG + FB) | Meta Ads Manager |
| NAP Record | Single source of Name/Address/Phone — must stay consistent everywhere | Maintained manually or via tool |

## Recommended Project Structure

This is not a software project structure — it is a content and platform structure. The "build order" is the sequence of setup steps.

```
waschsalon-derendorf/
├── website/                  # Owned, canonical digital home
│   ├── pages/
│   │   ├── index             # Homepage: hero, prices, hours, location
│   │   ├── preise            # Dedicated pricing page (supports SEO)
│   │   ├── standort          # Address, map embed, Anfahrt
│   │   └── kontakt           # Contact (optional in v1)
│   ├── components/
│   │   ├── OpeningHours      # Machine-readable hours (Schema)
│   │   ├── MapEmbed          # Google Maps iframe
│   │   └── ReviewWidget      # Embeds or links Google Reviews
│   └── head/
│       └── schema.json       # LocalBusiness JSON-LD
│
├── google-business/          # GBP setup checklist
│   ├── profile-info          # NAP, hours, categories, photos
│   ├── posts                 # Regular GBP posts (1-2x/week)
│   └── review-responses      # Respond to all reviews
│
├── social-profiles/          # Platform setup
│   ├── instagram/            # Bio, highlights, posting cadence
│   ├── facebook/             # Page, About, hours
│   └── tiktok/               # Profile, first content batch
│
└── ads/                      # Paid amplification (Phase 3+)
    ├── google-ads/           # Local search campaigns
    └── meta-ads/             # Radius-based awareness
```

### Structure Rationale

- **website/**: Only component fully owned by the business. All other channels can be restricted by platforms, but the website remains permanent.
- **google-business/**: Highest-ROI individual component for a local business. Gets customers who are actively searching "Waschsalon Düsseldorf".
- **social-profiles/**: Build before launch so there is activity in the feed when ads run. Empty profiles undermine paid campaigns.
- **ads/**: Launches last — after website and profiles are complete, so traffic lands somewhere convincing.

## Architectural Patterns

### Pattern 1: Website as Single Source of Truth

**What:** All business information (hours, prices, address, services) lives first on the website. All other platforms reference or link back to it.
**When to use:** Always — this is the foundation of a maintainable local presence.
**Trade-offs:** Requires discipline to update website first, then update GBP/social profiles. Inconsistency is more damaging than slow updates.

**Example information flow:**
```
Business changes hours
    → Update website first
    → Update Google Business Profile
    → Update Facebook Page "About"
    → Update Instagram bio link if needed
    → Post announcement on all social channels
```

### Pattern 2: NAP Consistency as Infrastructure

**What:** Name, Address, Phone (NAP) treated as infrastructure — identical string format across all platforms. Even minor differences (e.g., "Str." vs "Straße") create inconsistency signals for Google.
**When to use:** From day one. Retroactive fixes are possible but costly.
**Trade-offs:** Requires a "master NAP record" document. Once set, it is the canonical format used everywhere.

**Example canonical NAP:**
```
Name:    Waschsalon Derendorf
Adresse: Münsterstr. 88, 40625 Düsseldorf
Tel:     [number — decide format: 0211... or +49 211...]
```

### Pattern 3: Organic-First, Paid-Amplify

**What:** Create organic content (posts, GBP updates, videos). Identify best-performing content. Boost it with paid ads rather than creating separate ad-only content.
**When to use:** Especially relevant on TikTok (Spark Ads) and Meta (Boost). Reduces content production cost.
**Trade-offs:** Requires organic content to exist first. Can't amplify zero-content accounts.

**Example flow:**
```
Post organic Reel on Instagram (behind-the-scenes salon prep)
    → Watch 7-day performance (views, saves, reach)
    → If strong organically → boost with Meta Ads (radius 3km, Derendorf)
    → If weak organically → don't pay to amplify, try different content angle
```

## Data Flow

### Customer Discovery Flow

```
Customer searches "Waschsalon Düsseldorf"
    ↓
Google Local Pack (GBP) → Customer sees name, rating, hours, distance
    OR
Google Organic (Website) → Customer sees website in results
    OR
TikTok/Instagram search → Customer sees posts/profile
    ↓
Customer clicks → Lands on GBP detail view, Website, or Social Profile
    ↓
Reads: hours, prices, address, photos, reviews
    ↓
Decision: visit the laundromat (no online conversion needed)
```

### NAP Consistency Data Flow

```
Master NAP Record (internal document)
    ↓ (copied exactly to)
Website (footer, contact page, schema markup)
    ↓ (mirrors)
Google Business Profile
    ↓ (mirrors)
Facebook Page About
    ↓ (mirrors)
Instagram Bio
    ↓ (mirrors)
TikTok Bio
    ↓ (mirrors)
Yelp, local directories (secondary citations)
```

### Content Distribution Flow

```
Content idea (photo, video, tip)
    ↓
Create once
    ↓
    ├── Instagram (Reel or Post) → potentially boost with Meta Ads
    ├── TikTok (Video) → potentially boost with Spark Ads
    ├── Facebook (Post or Reel)
    └── GBP Post (if location-relevant)
```

### Review Flow

```
Customer visits laundromat
    ↓
[Prompt via in-store sign or QR code] → Leave Google Review
    ↓
Review appears on GBP
    ↓
Owner responds (within 48h) → signals engagement to Google
    ↓
Star rating raises GBP rank in local pack
    ↓
Higher rank → more visibility → more customers
```

## Scaling Considerations

| Scale | Architecture Adjustments |
|-------|--------------------------|
| Pre-launch (0 reviews) | Focus entirely on GBP setup + website launch + profile creation |
| Launch phase (0-50 reviews) | Activate paid ads for awareness; prioritize review acquisition |
| Established (50+ reviews) | Organic SEO starts paying off; reduce paid dependency; test content types |
| Mature (100+ reviews, #1 local pack) | Content depth (more pages, local content); potentially expand to YouTube Shorts |

### Scaling Priorities

1. **First bottleneck:** GBP visibility. Without reviews, local pack ranking is low. Reviews are the fastest lever.
2. **Second bottleneck:** Website SEO. Takes 3-6 months to rank organically. Start before launch.

## Anti-Patterns

### Anti-Pattern 1: Siloed Platforms with Inconsistent Info

**What people do:** Update hours on the website but forget to update GBP, or use different phone number formats on different platforms.
**Why it's wrong:** Google cross-references all mentions. Inconsistencies lower trust score and reduce local pack ranking. Up to 28% reduction in local search visibility from NAP inconsistencies (cited in industry research).
**Do this instead:** Maintain a master NAP document. Update all platforms simultaneously when any core info changes.

### Anti-Pattern 2: Running Ads Before Profiles Are Complete

**What people do:** Launch Google Ads or Meta Ads before the website is finished or social profiles have any content.
**Why it's wrong:** Paid traffic lands on a placeholder website or empty Instagram profile. Money wasted, trust destroyed.
**Do this instead:** Website live + GBP claimed + social profiles with at least 6-9 posts → then activate ads.

### Anti-Pattern 3: Creating Platform-Specific Content Silos

**What people do:** Treat each platform as entirely separate, creating bespoke content for each with no connective tissue.
**Why it's wrong:** Unsustainable for a small operation. Content burnout, inconsistent brand presence.
**Do this instead:** Create one piece of content, adapt format per platform (aspect ratio, caption length, hashtags). Core message stays the same.

### Anti-Pattern 4: Ignoring Reviews Until There Are Many

**What people do:** Wait until they have 20+ reviews before responding to any.
**Why it's wrong:** Unresponded reviews (especially negative) visibly hurt trust. GBP algorithm rewards engagement including review responses.
**Do this instead:** Respond to every review within 48 hours from the first one.

### Anti-Pattern 5: Building a Complex Website for a Simple Business

**What people do:** Multi-page CMS, blog, newsletter signup, full contact form — for a walk-in laundromat.
**Why it's wrong:** Unnecessary maintenance overhead. Customers need: hours, prices, address. That's it for a SB-Waschsalon.
**Do this instead:** Static site (Astro) with 2-3 pages maximum. Fast, zero maintenance, great Core Web Vitals.

## Integration Points

### External Services

| Service | Integration Pattern | Notes |
|---------|---------------------|-------|
| Google Business Profile | Manual data entry; link from website footer | GBP links to website; website should link back |
| Google Maps | Embed iframe on website's Standort page | Uses Maps embed API (free for static embeds) |
| Schema Markup (JSON-LD) | In website `<head>`, type: LocalBusiness | Include: name, address, phone, hours, geo coordinates |
| Instagram | Bio link → website; website can embed feed (optional) | Don't embed feed — adds load time, low value |
| Meta Ads Manager | Connect to Facebook Page + Instagram account | Both managed from single Meta Business Suite |
| TikTok Ads (Spark Ads) | Connect TikTok Business account to Ads Manager | Only needed if boosting organic content |
| Google Ads | Separate Google Ads account; links to website landing page | Use location extensions linked to GBP |

### Internal Boundaries

| Boundary | Communication | Notes |
|----------|---------------|-------|
| Website ↔ GBP | Manual sync (no API for most business info) | GBP does support programmatic updates via API but overkill here |
| GBP ↔ Google Ads | Google Ads location extension links to GBP | Must be same Google account or linked |
| Organic posts ↔ Paid ads (Meta) | Meta Business Suite: boost from post directly | Or use Ads Manager for more targeting control |
| Organic posts ↔ Paid ads (TikTok) | TikTok Spark Ads: authorize organic post as ad | Higher trust signal than dark ads |

## Build Order (Phase Dependency Map)

The following build order is derived from hard dependencies — what must exist before the next step can work:

```
Phase 1: Foundation
    Website (static, live, with schema markup)
        └── Required by: GBP (links to it), Google Ads (landing page)

Phase 2: Google Presence
    Google Business Profile (claimed, verified, complete)
        └── Required by: Google Ads location extensions, reviews, Maps ranking
        └── Depends on: Website (to link)

Phase 3: Social Profiles
    Instagram + Facebook + TikTok (set up, populated with initial content)
        └── Required by: Paid social ads (can't advertise from empty profile)
        └── Depends on: Nothing — but NAP must match website

Phase 4: Content Cadence
    Regular posts (GBP posts, Instagram, TikTok, Facebook)
        └── Required by: Organic reach, social proof, Spark Ads eligibility
        └── Depends on: Profiles exist (Phase 3)

Phase 5: Paid Amplification
    Google Ads + Meta Ads + TikTok Spark Ads
        └── Depends on: Website live + GBP complete + social profiles with content
        └── Launch timing: 2-4 weeks before store opening
```

**Critical path:** Website → GBP → Social Profiles → Content → Ads

Any phase can be started in parallel with later phases, but ads must be the last to launch.

## Sources

- [Local SEO in 2026: Essential Strategies — Kexworks](https://www.kexworks.com/digital-marketing/local-seo-2026-strategies-business-owners/)
- [Google Business Profile Guide 2026 — Moore Tech Solutions](https://mooretechsolutions.com/google-business-profile-guide-2026/)
- [How to Grow Your Laundromat in 2026 — Laundry Card / Card Concepts](https://www.laundrycard.com/how-to-grow-your-laundromat-in-2026-the-ultimate-marketing-checklist/)
- [Laundromat GMB SEO Case Study — Pensacola SEO Company](https://pensacolaseocompany.com/laundromat-gmb-seo-case-study)
- [Laundromat SEO Guide — LaundroBoost Marketing](https://laundroboostmarketing.com/2026/01/11/laundromat-seo-actually-brings-in-customers/)
- [Local SEO Checklist for Laundromats — Suds Digital](https://suds-digital.com/a-local-seo-checklist-for-your-laundromat-business/)
- [NAP Consistency and Local SEO — CallRail](https://www.callrail.com/blog/nap-consistency)
- [TikTok Spark Ads for Organic Content — JumpFly](https://www.jumpfly.com/blog/tiktok-spark-ads-how-to-leverage-your-organic-content-for-paid-ads/)
- [Build Your Complete Online Presence 2026 — Codebrand](https://www.codebrand.us/blog/complete-online-presence-guide-2026/)
- [Google Business Profile + Local Business Funnel — Westwooddigital](https://westwooddigitalmarketing.com/google-business-profile-optimization-in-2026/)

---
*Architecture research for: local business web presence (laundromat)*
*Researched: 2026-03-15*
