# PRD — Triumphs of Talent × Grand Food Fest Awards Proposal Site

## Original Problem Statement
A premium one-page proposal website convincing Triumphs of Talent (ToT) to present a new award show — The Food, Culinary & Influencer Awards — hosted inside Grand Food Fest (9–11 Oct 2026, Gachibowli Stadium, Hyderabad). Core idea: awards so far last one night; this one leaves a permanent plaque on winning restaurants' walls and a year-long digital badge in winning influencers' bios. Grand Food Fest runs all operations; ToT brings name/credibility and may bring its own sponsors. Single goal: get a meeting. Pricing (₹12,00,000 Presenting Partner) appears exactly once, in the final section.

## Hard Rules (from user)
- No photography anywhere. All visuals are hand-drawn single-stroke line-art inline SVGs (gold/ivory on black/charcoal), certificate-engraving style.
- Recurring award-frame device: empty in hero → partially filled in "What ToT receives" → complete with "Triumphs of Talent Presents" inscription in final section.
- Colours: #0d0d0d black, #1c1a17 charcoal, #f7f4ee ivory, #c9a24b gold, #b90505 red (tiny accent).
- Serif headlines (Cormorant Garamond), sans body (Outfit).
- Section 8 (partner brand wall) REMOVED per user — no partner brands mentioned anywhere.
- ToT & GFF logos (user-provided, in /app/frontend/public/assets/) woven through header, hero, closing, footer.
- Full real sentences in every section; mobile carries the same complete text.
- "Thousands of visitors" — never a specific figure. Named restaurants (Pista House, Shah Ghouse, Paradise, Cream Stone) explicitly flagged as illustrative examples, not confirmed participants.
- No mention of colleges or drone shows.

## User Personas
- Primary: Triumphs of Talent leadership evaluating the partnership proposal.
- Secondary: Habeeb Ali / Grand Food Fest team sharing the link in outreach.

## Architecture
- Frontend-only static React site (no backend endpoints needed; CTA is mailto:habeeb@grandfoodfest.com).
- /app/frontend/src/App.js — Lenis smooth scrolling + section composition.
- components/Header.jsx, Footer.jsx, Hero.jsx (masked line-by-line kinetic reveal + parallax frame via framer-motion).
- components/sections/: Problem, Idea, Marquee (70s slow editorial ribbon), About, WhyToT, Roles, Receives, FinalAsk.
- components/illustrations.jsx — hand-coded SVG set (AwardFrame stages 0/1/2, SpotlightPodium, Storefront, PhoneBadge, Handshake, PlaqueMark), strokeWidth 1.4.
- components/motion.jsx — FadeUp / MaskedLine / ChapterHeading, easing [0.76, 0, 0.24, 1].
- index.css — design tokens, grain overlay, marquee keyframes, gold button transitions.

## Implemented (2 Aug 2026)
- All 7 numbered chapters + hero + final ask, exactly per copy deck.
- Kinetic hero with masked line reveal, slow parallax on the empty award frame.
- Progressive award-frame completion across the page (3 stages).
- Slow editorial marquee between The Idea and About GFF.
- Pricing card ₹12,00,000 shown once in final section; Request a meeting → mailto with prefilled subject.
- Contact block: Habeeb Ali, Founder & CEO, Hanfim Foods LLP · +91 93539 94283 · habeeb@grandfoodfest.com.
- data-testid attributes on all interactive/key elements.
- Verified: desktop + mobile screenshots of all sections, pricing, mailto href, headline render.

## Backlog
- P1: Plaque/badge design preview gallery (line-art) once designs exist.
- P1: Downloadable one-page PDF of the proposal.
- P2: Award category list page (culinary categories + influencer categories).
- P2: Meeting scheduler integration (Calendly/Cal.com) alongside mailto.

## Test Credentials
No auth on this site. See /app/memory/test_credentials.md.
