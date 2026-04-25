# Ryndu Hot & Grill — Landing Page MVP Plan & Dev Checklist

> **Project brief:** Build a 3-page landing site for Ryndu Hot & Grill, a family-style western grill restaurant in Wangsa Maju (Seksyen 2). Open since around 2015. Specializes in lamb chop, premium steaks, lasagna, pasta, burgers, plus local Malaysian dishes. **Brand promise: "Fine-dining food presentation at RM9-RM40 prices."** Tech stack: Astro + Tailwind CSS + Framer Motion + Vercel. Mobile-first, fast on 4G.
>
> **Language policy: ALL CONTENT IN ENGLISH BY DEFAULT.** Western dish names (lamb chop, sirloin, lasagna, etc.) and local Malaysian dish names (beef kuetiau, etc.) stay in original spellings. Brand name "Ryndu" stays. No body copy translations.
>
> **Pitch positioning:** Mid-tier family-style western grill — premium presentation, accessible pricing. Think TGI Fridays / Chili's vibe but local-priced.

---

## 1. Brand Audit

**Identity:** Ryndu Hot & Grill · Wangsa Maju Seksyen 2 · Family-style western + local · Since 2015 (approximate)

**Their own tagline:** *"Steak, Sandwiches, Pasta, Burger, Local Food, Lasagna, Desert. Great Taste For A Small Price. Come and taste us!"*

**The hook (design center of gravity):**
- **"Fine-dining presentation at RM9-RM40"** — quality-vs-price is THE differentiator
- Family-friendly western restaurant, "feeling macam Chili's"
- Mix of western mains + local Malaysian comfort food
- Halal Muslim-friendly
- Existing customer perks: happy hour 10% discount, free brownies on birthdays

**Signature menu items (verified):**
- **Lamb Chop** — the most-mentioned signature dish, drives foot traffic
- **Premium Meltique Sirloin** — premium upsell
- **Lasagna** — fan favorite
- **Seafood Olio** (Aglio Olio with seafood)
- **Beef Kuetiau** — local fusion bestseller
- **Burgers** (multiple variations)
- **Pasta** (multiple variations)
- **Local food** (sandwiches, etc.)

**Audience:**
- Wangsa Maju + Setapak families
- Couples on date nights
- Birthday/anniversary celebrators (the brand actively does birthday brownies)
- Friend groups, after-work dinners
- Western food lovers who don't want chain prices
- Halal-seeking Muslim diners who want western experience

**Vibe:** Family-style restaurant, Chili's-adjacent atmosphere, comfortable, dine-in focused, not aesthetic-cafe minimal

**Hours (verified):**
- Mon – Fri: 11am – 12am (close)
- Sat – Sun: 4pm – 12am (close)
- Late-night dining audience confirmed

**Press / social proof:**
- **729 Google reviews at 4.2⭐**
- **943 Facebook reviews, 76% recommend**
- 3,028 Instagram followers (@rynduhotgrill)
- Active Facebook page
- Available on EasyEat ordering platform
- Featured by multiple Malaysian food bloggers (Zaza Abdul Latif, Mohd Faiz, Lemon8 reviewers)
- "Viral on Facebook" mentioned in 2016 review (early viral moment with lamb)

**Customer praise:** Food presentation, affordable pricing, lamb chop specifically, family atmosphere
**Customer concerns:** Some reviews mention service delays during peak times, some inconsistency

**Existing digital presence:**
- No own website
- EasyEat ordering page (third-party)
- Active FB + IG
- Listed on Tripadvisor, Zomato, Sluurpy

**Emotional positioning:** *"Steakhouse-quality presentation. Wangsa Maju prices. Open till midnight."*

---

## 2. Design Direction

This brand is fundamentally **family-style steakhouse + value-luxury** — completely different from minimalist-aesthetic cafes. Think: confident bistro, dark wood, warm lighting, plate-as-canvas presentation.

### Color Palette

Drawing from grilled meat, charred edges, warm interior lighting, and steakhouse classicism.

| Role | Color | Hex |
|------|-------|-----|
| Background (primary, dark) | Deep Charcoal | `#1A1614` |
| Background (warm dark) | Wood Brown | `#2D2118` |
| Surface / cards | Ivory Cream | `#F4EBD9` |
| Text on dark | Cream | `#EBE2CD` |
| Text on light | Deep Charcoal | `#1A1614` |
| **Accent (THE color)** | **Grill Orange** | `#D9682B` |
| Secondary accent | Char Red | `#8B2C1A` |
| Highlight | Brass Gold | `#C9A24E` |
| Soft contrast | Mushroom Beige | `#A99980` |

**Why these:**
- **Grill orange** — flames, sear marks, the kitchen's living glow
- **Char red** — burgers, steaks, sambal accent for local dishes
- **Brass gold** — old steakhouse signage, vintage glassware
- **Wood brown background** — classic steakhouse interior, dark wood paneling
- **Ivory cream surfaces** — fine-dining plate, restaurant napkin

### Typography

- **Display / Headings:** `Playfair Display` (serif with gravity) OR `Cormorant Garamond` — classic steakhouse menu energy
- **Alternative for boldness:** `Bebas Neue` for SIGNAGE-style display moments
- **Body:** `Inter` — clean, readable
- **Numerals (prices):** `Playfair Display` for menu dish prices — adds a fine-dining feel
- **Accent / handwritten:** `Caveat` for "since 2015" or chalkboard daily-special notes

### Mood

Warm-Steakhouse · Family-Style · Confident-Value · Plate-as-Canvas · Halal-Western · Late-Night

Visual references: classic American steakhouse menus, 1980s bistro ambiance, plated food photography, warm lighting + dark wood interiors. NOT: hipster minimalism, premium fine-dining austerity, fast-food chains.

---

## 3. Tech Stack

Same reusable foundation.

| Layer | Tool |
|-------|------|
| Framework | Astro 5 + TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion (React islands) |
| Deployment | Vercel |
| Forms | Formspree |
| Analytics | Vercel Analytics |
| Icons | Lucide React |

---

## 4. Page Architecture

### Page 1 — Home (`/`)

The home is built around **the value-luxury contrast — premium presentation, accessible pricing**.

1. **Sticky navbar** — deep charcoal bg with backdrop blur, "RYNDU" wordmark in Playfair, links right (Home · Menu · Visit · Reservations), grill-orange WhatsApp button
2. **Hero — full-viewport, dark, dramatic plate**
   - Background: large hero photo of plated lamb chop with grill marks (or premium sirloin presentation)
   - Eyebrow: "WANGSA MAJU · WESTERN GRILL · OPEN TILL MIDNIGHT"
   - Headline: **"Steakhouse plates. Wangsa Maju prices."**
   - Subhead: "Lamb chop, sirloin, lasagna, pasta — fine-dining presentation from RM9 to RM40. Family-style restaurant since 2015. Halal."
   - CTAs: "See the Menu" (grill-orange filled) + "Reserve a Table" (outline)
   - Caveat handwritten "since 2015 · 940+ recommendations" rotated -2°
3. **The Value Promise section** (the brand's central pitch)
   - Eyebrow: "WHY WE'RE STILL HERE"
   - Heading: "Restaurant plates. Café prices."
   - 2-col layout: left has 3 stat blocks (Lamb Chop from RM18 / 940+ FB recommendations / Open till midnight), right has hero photo of plated dish
4. **Signature Plates section** (4-card grid)
   - **Lamb Chop** (the hero) · **Premium Meltique Sirloin** · **Lasagna** · **Seafood Olio**
   - Each card: large plated photo (4:5 ratio for editorial feel), name in Playfair, 1-line description, price
   - **Lamb Chop** card gets a brass-gold "House Favorite" badge
   - Hover: lift + grill-orange shadow + slight zoom
5. **Local Side section** (Malay/Asian dishes)
   - Heading: "Or skip western entirely."
   - 3-card row: Beef Kuetiau · Local Sets · Sandwiches
   - Same card style as signature plates
6. **The Perks section** (small but important)
   - Heading: "Bring you. Bring everyone."
   - 3-column visual:
     - 🎂 **Birthday brownies** — free on the day
     - 🎉 **Happy hour** — 10% off
     - 🍴 **Family-style** — built for groups
7. **Reviews block** — 3 selected reviews + "4.2 / 5 from 720+ Google reviewers · 76% recommend on Facebook"
8. **Late-Night banner** (full-width grill-orange)
   - "Open till midnight. Every night."
   - Subtext: "For dinners that go long, post-cinema cravings, and whatever you're celebrating."
9. **Find Us teaser** — map preview + hours + Get Directions
10. **Footer** — wordmark, address, hours, socials, EasyEat ordering link, "Family-style western grill in Wangsa Maju. Since 2015."

### Page 2 — Menu (`/menu`)

- **Menu Hero** — dark, headline "The Menu" + subhead "Fine-dining plates, family-style prices, all halal."
- **Categories (sticky tabs, grill-orange underline on active):**
  - Steaks · Lamb · Pasta · Burgers · Sandwiches · Local Food · Sides · Desserts · Drinks
- **Filter chips:** Halal ✓ · Vegetarian · Spicy 🌶️ · House Favorite · Under RM20
- **Menu cards:**
  - Ivory cream cards with subtle grain texture
  - Photo (4:3), name in Playfair, description, price right-aligned in Playfair
  - **House Favorites** (Lamb Chop, Sirloin, Lasagna) get a brass-gold badge
  - Hover: lift + grill-orange tinted shadow
  - Stagger fade-up on scroll
- **Reservations callout** — 2-col block highlighting the Reserve a Table CTA (Ryndu does take reservations — important!)
- **Order CTA block** at bottom — "Hungry?" + WhatsApp + EasyEat buttons

### Page 3 — Visit & Reservations (`/visit`)

The Reservations focus matters for this brand — they actively take reservations (multiple sources mentioned booking ahead).

- **Visit Hero** — "Find us. Book a table." + subhead about the location and reservations
- **The Space** — full-bleed interior carousel (steakhouse warmth)
  - Caption: "Family-style. Date-night-friendly. Loud enough for groups, quiet enough for two."
- **Reservations Form** — prominent, well-designed
  - Fields: Name, phone, party size, date, time, occasion (dropdown: Birthday/Anniversary/Family/Friends/Other), special notes
  - Formspree submit
  - Note: "We'll WhatsApp confirm within 30 minutes during operating hours."
- **The Perks block** (full-width)
  - Birthday brownies · Happy hour · Reservations welcome
- **Visit Section** — embedded Google Maps + details
  - Address: No 42, Jalan Metro Wangsa, Seksyen 2, Wangsa Maju, 53300 KL
  - Hours, phone (03-4821 1286 OR 03-4141 5455 — verify which is current), parking note
- **Contact form** (separate from reservations) — Name, phone/email, message
- **Social block** — IG, FB, EasyEat
- SEO meta for visit page

---

## 5. Animation Plan

This brand = **warm, weighty, considered** — not kinetic. Plates settle, smoke rises, lighting glows.

| Element | Animation | Detail |
|---------|-----------|--------|
| Hero text | Slide-up + slow settle, gravity feel | 700ms ease-out |
| Hero plate photo | Scale 1.04 → 1.0 settle on load | 1000ms |
| Value Promise stats | Number count-up animation | playful precision |
| Signature plate cards | Fade-up + soft rotation reset | 500ms |
| Card hover | Lift 6px + grill-orange shadow + subtle photo zoom | 350ms |
| Local Side cards | Same pattern as signature | consistency |
| Perks icons | Subtle rotation on hover (10°) | tactile |
| Late-Night banner | Marquee text "OPEN TILL MIDNIGHT · OPEN TILL MIDNIGHT" | 60s loop |
| Reviews fade in | Star icons populate sequentially | rewarding |
| Section transitions | Astro view transitions | built-in |
| Navbar scroll | Backdrop blur + bottom border slide-in | 250ms |
| WhatsApp / Reserve floats | NO bounce — confident static | bistro restraint |

**Rules:**
- Animations have weight (700–900ms), unlike Sushi Monster's bounce
- Marquee `aria-hidden="true"`
- Respect `prefers-reduced-motion`
- No floating particles
- Photography is the star — animations support, don't compete

---

## 6. Copywriting

### Voice

- Confident, warm, family-host energy
- Plain spoken, not flowery
- Embraces the value-luxury angle without bragging
- Welcoming for groups, families, date nights
- Doesn't try to be hip — leans into bistro tradition

### Sample Copy

**Hero**
> WANGSA MAJU · WESTERN GRILL · OPEN TILL MIDNIGHT
> # Steakhouse plates. Wangsa Maju prices.
> Lamb chop, sirloin, lasagna, pasta — fine-dining presentation from RM9 to RM40. Family-style restaurant since 2015. Halal.
>
> [See the Menu] [Reserve a Table]

**Value Promise**
> # Restaurant plates. Café prices.
> The presentation is hotel-grade. The bill won't be. We're a family restaurant, not a special-occasion splurge — so we cook like one.

**Signature Plates intro**
> What we're known for.
> Four plates that bring people back. Most of them order a fifth thing too.

**Lamb Chop description**
> The reason most people came the first time. Tender, marinated, plated with care. Pairs with everything.

**Local Side section**
> Or skip western entirely.
> Beef Kuetiau, sandwiches, sets — Malaysian food cooked with the same care as the steaks.

**The Perks section**
> Bring you. Bring everyone.
>
> 🎂 Free brownies on your birthday
> 🎉 10% off during happy hour
> 🍴 Family-style portions, made for sharing

**Late-Night banner**
> Open till midnight, every night.
> For dinners that go long, post-cinema cravings, and whatever you're celebrating.

**Reservations note**
> Reserve ahead.
> Friday and Saturday fill up fast. WhatsApp us — we usually confirm in under 30 minutes.

**Footer tagline**
> Family-style western grill in Wangsa Maju. Since 2015.

**WhatsApp CTA**
> WhatsApp us — for reservations, large group bookings, or to ask about today's specials.

### SEO Meta

- **Home title:** `Ryndu Hot & Grill | Steakhouse Plates, Wangsa Maju Prices | Halal Western`
- **Home meta description:** `Lamb chop, sirloin, lasagna, pasta — fine-dining presentation from RM9-RM40. Family-style halal western restaurant in Wangsa Maju, KL. Open till midnight. Reservations welcome.`
- **Schema:** Restaurant, servesCuisine: ["Western", "Steakhouse", "Halal", "Malaysian"], priceRange: "$$"
- **OG image:** Hero shot of plated lamb chop with grill marks + wordmark overlay

---

## 7. UI/UX Principles For This Brand

1. **The plate is the brand** — every photo is a plated dish, beautifully shot, with grill marks visible
2. **Value-luxury is the message** — pricing is shown openly because it's a strength
3. **Reservations matter** — surface "Reserve a Table" CTA prominently in nav and home hero (most cafes don't take reservations, but Ryndu does)
4. **Halal-confident** — Muslim audience assumes halal, just confirm with badge
5. **Family + groups + date nights** are all real audiences — don't pick one, design for all
6. **Late-night identity** is a real differentiator — surface multiple times
7. **Local food side** is part of the brand — don't position as "just western"
8. **Birthday brownies + happy hour** are unique perks — celebrate them
9. **Mobile-first reservations form** — most bookings happen via phone
10. **WhatsApp is primary contact channel** — surface heavily

---

## 8. Content Needed From Owner

1. **High-res hero photo of lamb chop** — the most iconic dish, plated with grill marks
2. **Photos of all signature plates** — Premium Meltique Sirloin, Lasagna, Seafood Olio, burgers
3. **Local food photos** — Beef Kuetiau and other local items
4. **Interior photos** — show family-style atmosphere, the warm lighting, dining areas
5. **Owner / chef photo** if comfortable (humanizes the family-style positioning)
6. **Confirmed full menu with current prices** — verify against EasyEat or recent menu
7. **Confirmed phone** — two numbers exist (03-4821 1286 vs 03-4141 5455). Verify current main line.
8. **WhatsApp business number**
9. **Confirmed hours** — research shows 11am-12am Mon-Fri, 4pm-12am Sat-Sun
10. **Logo files** if available (vector preferred)
11. **Founding story** — when did Ryndu open exactly, who started it
12. **Reservations workflow** — how do they currently take reservations? WhatsApp? Walk-in?
13. **Happy hour timing** — what hours specifically?
14. **Birthday brownie process** — how does the customer claim it?

---

## Phase-by-Phase Development Checklist

> Paste into Claude Code phase by phase. One at a time.

### Phase 0 — Project Setup

- [ ] Initialize Astro project with TypeScript strict mode
- [ ] Add Tailwind: `npx astro add tailwind`
- [ ] Add React: `npx astro add react`
- [ ] Install: `framer-motion`, `lucide-react`
- [ ] Install fonts via fontsource: `@fontsource/playfair-display`, `@fontsource/inter`, `@fontsource/caveat`
- [ ] Folder structure:
  ```
  src/
    components/
    sections/
    layouts/BaseLayout.astro
    pages/index.astro, menu.astro, visit.astro
    styles/global.css
    assets/images/{plates,interior,perks,logo}
    data/menu.json, reviews.json, site.json
  public/
  ```
- [ ] Init Git, `.gitignore`, first commit
- [ ] Create `.env.example`: `PUBLIC_WHATSAPP_NUMBER`, `PUBLIC_FORMSPREE_ID`, `PUBLIC_EASYEAT_URL`

### Phase 1 — Design System

- [ ] Extend Tailwind theme with palette (deep-charcoal, wood-brown, ivory-cream, cream, grill-orange, char-red, brass-gold, mushroom-beige)
- [ ] Configure font families: `font-display` (Playfair Display), `font-body` (Inter), `font-accent` (Caveat)
- [ ] Custom Tailwind animations: `fade-up`, `slide-up-settle`, `marquee`, `count-up`
- [ ] Subtle grain/wood-texture background utilities (SVG noise filters)
- [ ] Create `BaseLayout.astro` — dark theme default for hero/footer, light for body sections, fonts loaded with `font-display: swap`
- [ ] Create reusable components:
  - [ ] `Button.astro` — variants: primary (grill-orange filled), outline (grill-orange border), ghost
  - [ ] `Container.astro` — max-w-7xl, responsive padding
  - [ ] `SectionHeading.astro` — eyebrow + Playfair headline + subhead
  - [ ] `PlateCard.astro` — dish card with photo, name, description, price, optional House Favorite badge
  - [ ] `Eyebrow.astro` — uppercase letter-spaced
- [ ] Create `Navbar.astro` — deep-charcoal bg with backdrop blur, "RYNDU" wordmark in Playfair (large, confident), mobile hamburger drawer
- [ ] Create `Footer.astro` — wood-brown bg, cream text, 3-col, tagline "Family-style western grill in Wangsa Maju. Since 2015."
- [ ] Create `WhatsAppFloat.astro` — fixed bottom-right, grill-orange circle, no bounce
- [ ] Test responsiveness at 375px / 768px / 1440px

### Phase 2 — Data Files

- [ ] Create `src/data/site.json` — name "Ryndu Hot & Grill", tagline, address (No 42, Jalan Metro Wangsa, Seksyen 2, Wangsa Maju, 53300 KL), phone (verify), WhatsApp, hours object, social URLs (@rynduhotgrill IG, FB), EasyEat URL, Google Maps embed URL
- [ ] Create `src/data/menu.json` with categories: `Steaks`, `Lamb`, `Pasta`, `Burgers`, `Sandwiches`, `Local Food`, `Sides`, `Desserts`, `Drinks`. Each item: name, description, price, image, tags, optional `houseFavorite: true`
- [ ] Mark Lamb Chop, Premium Meltique Sirloin, Lasagna, Seafood Olio as `houseFavorite: true`
- [ ] Create `src/data/reviews.json` — 3 selected reviews highlighting plate presentation + value, with quote, name, rating

### Phase 3 — Home Page (`/`)

- [ ] **Hero section** (`src/sections/Hero.astro`):
  - Full viewport, deep charcoal bg
  - Background: large hero photo of plated lamb chop with subtle dark overlay
  - Eyebrow: "WANGSA MAJU · WESTERN GRILL · OPEN TILL MIDNIGHT" — grill-orange, tracking-widest
  - Headline: "Steakhouse plates. Wangsa Maju prices." — Playfair, 64px+ desktop / 40px mobile, cream
  - Subhead: 18-20px, max-w 540px, cream
  - CTAs: "See the Menu" (grill-orange filled) + "Reserve a Table" (outline)
  - Caveat handwritten "since 2015 · 940+ recommendations" rotated -2°
  - Framer Motion: stagger entrance, slide-up
- [ ] **Value Promise** (`src/sections/ValuePromise.astro`):
  - Eyebrow: "WHY WE'RE STILL HERE"
  - Heading: "Restaurant plates. Café prices."
  - 2-col: 3 stat blocks (Lamb Chop from RM18, 940+ FB recommendations, Open till midnight) + hero plate photo
  - Numbers count-up on viewport entry
- [ ] **Signature Plates** (`src/sections/SignaturePlates.astro`):
  - Heading: "What we're known for."
  - Subhead: "Four plates that bring people back."
  - 4-card grid: Lamb Chop / Premium Sirloin / Lasagna / Seafood Olio
  - Lamb Chop gets brass-gold "House Favorite" badge
  - Hover: lift + grill-orange shadow + zoom
- [ ] **Local Side** (`src/sections/LocalSide.astro`):
  - Heading: "Or skip western entirely."
  - 3-card row: Beef Kuetiau / Local Sets / Sandwiches
  - Same card style for consistency
- [ ] **The Perks** (`src/sections/Perks.astro`):
  - Heading: "Bring you. Bring everyone."
  - 3-col: Birthday brownies / Happy hour / Family-style
  - Each with icon (lucide cake, party-popper, utensils)
- [ ] **Reviews** (`src/sections/Reviews.astro`):
  - Heading: "4.2 / 5 from 720+ Google reviewers · 76% recommend on Facebook"
  - 3 review cards on ivory-cream bg
- [ ] **Late-Night Banner** (`src/sections/LateNightBanner.astro`):
  - Full-width grill-orange bg
  - Marquee: "OPEN TILL MIDNIGHT · OPEN TILL MIDNIGHT ·"
  - Below: copy about late-night dining
- [ ] **Find Us teaser** (`src/sections/FindUsTeaser.astro`):
  - Map preview + hours + Get Directions
- [ ] Wire `pages/index.astro`, add SEO meta + OG tags

### Phase 4 — Menu Page (`/menu`)

- [ ] **Menu Hero** — dark hero, headline "The Menu", subhead "Fine-dining plates, family-style prices, all halal."
- [ ] **Category Tabs** (`src/components/MenuTabs.tsx`) — React island, sticky, grill-orange underline animated with `layoutId`
- [ ] **Filter chips** — Halal ✓, Vegetarian, Spicy 🌶️, House Favorite, Under RM20 (multi-select)
- [ ] **Menu grid** (`src/components/MenuGrid.tsx`):
  - 1 / 2 / 3 col responsive
  - Ivory-cream cards with subtle grain texture
  - Photo (4:3), name in Playfair, description, price right-aligned in Playfair
  - House Favorites get brass-gold badge
  - Hover: lift, grill-orange shadow, slight zoom
  - Fade-up stagger on scroll
- [ ] **Reservations Callout** (mid-page) — 2-col block with photo + Reserve a Table CTA
- [ ] **Order CTA block** at bottom — "Hungry?" + WhatsApp + EasyEat buttons
- [ ] SEO meta for menu page

### Phase 5 — Visit & Reservations Page (`/visit`)

- [ ] **Visit Hero** — "Find us. Book a table." + subhead
- [ ] **The Space** — full-bleed interior carousel
  - Caption: "Family-style. Date-night-friendly. Loud enough for groups, quiet enough for two."
- [ ] **Reservations Form** (`src/components/ReservationForm.tsx`) — prominent, well-designed
  - Fields: name, phone, party size (1-12+), date picker, time picker, occasion dropdown, special notes
  - Formspree submit
  - Success state: "We'll WhatsApp you within 30 minutes."
- [ ] **The Perks block** — full-width: Birthday brownies / Happy hour / Reservations welcome
- [ ] **Visit Section** — embedded Google Maps + address, hours, phone, parking
- [ ] **Contact form** (separate from reservations) — Name, phone/email, message (smaller form for general inquiries)
- [ ] **Social block** — IG, FB, EasyEat
- [ ] SEO meta for visit page

### Phase 6 — Animations Polish

- [ ] All scroll reveals: `whileInView` + `viewport={{ once: true, margin: "-50px" }}`
- [ ] Hero gentle stagger
- [ ] Number count-up using Framer Motion `useMotionValue` + `animate`
- [ ] Signature plate card hover (lift + shadow + zoom)
- [ ] Marquee in late-night banner (60s loop)
- [ ] Navbar scroll backdrop blur + hairline
- [ ] Menu tab `layoutId` for underline
- [ ] CTA hover transitions
- [ ] `useReducedMotion()` to disable variants
- [ ] Slow 3G test

### Phase 7 — Images & Assets

- [ ] Organize: `plates/`, `interior/`, `perks/`, `logo/`
- [ ] Astro `<Image>` for all photos, WebP, lazy load (except hero)
- [ ] Hero `<Picture>` with art-directed crops
- [ ] Descriptive alt text everywhere
- [ ] OG image (1200x630): plated lamb chop hero shot + wordmark overlay
- [ ] Favicon set
- [ ] Subtle wood/grain texture backgrounds for warm sections
- [ ] **If photos blurry from internet sources:** run through Upscayl 2x first

### Phase 8 — SEO & Schema

- [ ] Per-page meta titles + descriptions (Section 6)
- [ ] OG tags
- [ ] Twitter card tags
- [ ] Canonical URLs
- [ ] JSON-LD `Restaurant` schema:
  - Name, address, phone
  - openingHoursSpecification (verify late-night close)
  - priceRange "$$"
  - servesCuisine ["Western", "Steakhouse", "Halal", "Malaysian"]
  - aggregateRating (4.2, 720+)
  - acceptsReservations: true
- [ ] `robots.txt` allow all
- [ ] Sitemap via `@astrojs/sitemap`

### Phase 9 — Performance & Accessibility

- [ ] Lighthouse 95+ all categories
- [ ] All images lazy except hero
- [ ] Font-display: swap
- [ ] Marquee `aria-hidden="true"`
- [ ] Color contrast WCAG AA — grill-orange on deep-charcoal must be tested
- [ ] Keyboard nav works on reservations form (date picker accessibility)
- [ ] Icon-only buttons get `aria-label`
- [ ] Visible focus states (grill-orange outline)
- [ ] VoiceOver / NVDA test, especially on reservations form

### Phase 10 — Deployment

- [ ] Push to GitHub
- [ ] Connect Vercel, configure build
- [ ] Set env vars
- [ ] Test on real iPhone Safari + Android Chrome
- [ ] Custom domain wiring
- [ ] Vercel Analytics on
- [ ] UptimeRobot monitor

### Phase 11 — QA Before Handoff

- [ ] All browsers
- [ ] Reservations form delivers (test the email reaches owner)
- [ ] Contact form delivers
- [ ] Google Maps embed loads
- [ ] EasyEat link works
- [ ] WhatsApp opens with pre-filled message
- [ ] All prices verified
- [ ] Proofread — no typos
- [ ] 404 page exists
- [ ] 3G throttle test

### Phase 12 — Handoff

- [ ] Client README — change requests, retainer scope, domain renewal, **how reservations form delivers (where do emails go)**
- [ ] Send: live URL, page summary, screenshots, invoice
- [ ] Tag v1.0.0 in Git
- [ ] Add to portfolio as case study

---

## Notes for Claude Code

- Read previous phase output before next phase
- Commit after each phase: `feat(phase-3): home page sections`
- Default mood: warm-steakhouse, family-style, confident-value, plated photography
- This is NOT a hipster cafe — avoid minimalism, soft pastels, restraint
- Photography is the brand — every dish photo should look magazine-quality, with grill marks visible
- 3 static pages, no CMS, no auth
- Placeholder images: classic American steakhouse photography, plated lamb chop / sirloin shots from Unsplash
- **Language rule (strict):** All readable content in English. Western dish names (lamb chop, sirloin, lasagna) and local Malaysian dish names (beef kuetiau) stay as-is. No body copy translations.
- **Reservations rule:** Reservations are core to this brand. Surface "Reserve a Table" CTA in nav, hero, menu page. Most other restaurants in this portfolio don't take reservations — Ryndu does, lean in.
- **Value-luxury rule:** Show prices openly. RM9-RM40 range is the brand's central value proposition.

---

## Pricing Suggestion

This is a mid-tier brand with reservations — slightly higher than basic café sites.

| Item | Price (RM) |
|------|-----------|
| 3-page site with reservations form | 3,200 |
| Domain (.com, 1 year) | 60 |
| Hosting (Vercel free) | 0 |
| Google Workspace email (1 user, 1 year) | 120 |
| **One-time total** | **~3,400** |
| Monthly maintenance retainer | 180/month |

Portfolio discount: RM2,500.

**Strong upsell paths:**
- Online reservations system with confirmation logic: +RM1,500
- Birthday email automation: +RM800
- Happy hour timer/promo widget: +RM400
- Photography session for plated dishes: +RM500
- Loyalty program: +RM1,200
- Monthly content support: +RM400/month

---

## Pitch Angle For Ryndu

The strongest angle is **value-luxury + reservations leverage**:

> "Ryndu's been quietly serving steakhouse plates at café prices for nearly a decade — 940+ Facebook recommendations don't lie. But when someone Googles 'lamb chop Wangsa Maju,' they land on EasyEat or Tripadvisor, not on a website that shows the lamb chop the way you actually plate it. The food deserves a website that takes the presentation seriously. I'd love to build it."

Works because:
- Honors the longevity (since 2015)
- Specific (lamb chop, 940+ recommendations)
- Frames the website as upgrading their existing presentation strength
- Hints at SEO leverage (ranking for specific dish + neighborhood)

**Bonus angle:**
> "I'd also build a reservations form that goes straight to your WhatsApp — most of your competitors don't take bookings, so it's a real differentiator to surface."

Shows business understanding beyond design.
