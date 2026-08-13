# ToolSite roadmap

Work top to bottom. Finish and build-check a phase before starting the next.
Check items off directly in this file as they're done.

## Phase 1 — Tool scaffolding generator
- [ ] Write `scripts/scaffold-tool.mjs` (see below) so new tools are generated from a
      JSON spec instead of hand-written 5-file-at-a-time.
- [ ] Test it on one throwaway tool, verify build passes, then delete the test tool.

## Phase 2 — Business & Career tools
Batch by formula shape, not alphabetically — same-shape tools in one session.

**Batch A — simple ratio/percentage tools:**
- [ ] Profit Margin Calculator
- [ ] Markup Calculator
- [ ] Gross Margin Calculator
- [ ] Net Profit Calculator
- [ ] ROAS Calculator

**Batch B — rate/pay conversion tools:**
- [ ] Hourly to Salary
- [ ] Salary to Hourly
- [ ] Overtime Calculator
- [ ] Raise Calculator
- [ ] Bonus Calculator
- [ ] Freelancer Hourly Rate Calculator

**Batch C — acquisition/value tools:**
- [ ] Customer Acquisition Cost Calculator
- [ ] Customer Lifetime Value Calculator
- [ ] Business Valuation Estimator

## Phase 3 — Regional financial data (US / Canada / UK)
Data first, pages second. Do not let any page consume a rate that hasn't been reviewed.
- [ ] `src/data/regions/us/` — rates marked `NEEDS_VERIFICATION` + effective date field
- [ ] `src/data/regions/ca/` — same
- [ ] `src/data/regions/uk/` — same
- [ ] Human review of all rates before Phase 4 starts

## Phase 4 — Country tool pages
Only after Phase 3 data is reviewed.
- [ ] US Salary / Take-Home Pay
- [ ] UK Salary / Take-Home Pay / National Insurance
- [ ] Canada Salary / CPP / EI

## Phase 5 — Country landing pages
- [ ] /us, /canada, /uk — thin content pages linking into Phase 4 tools

## Phase 6 — Polish (scope narrowly, one page-set per session)
- [ ] Accessibility pass on the 10 highest-traffic tool pages
- [ ] Performance audit (bundle size, largest client scripts)
- [ ] Optional: refactor the `[tool].astro` ternary chain into a dynamic component map
      (only if it's causing real problems — not required for correctness)

## Explicitly not doing yet
- PWA / offline mode
- Paid ads, affiliate links, premium tier
- State-level tax pages (only add if they'd have genuinely different data/logic,
  not just a renamed page)
## Phase 7 — Global search
- [ ] Local searchable tool index (name/desc/category/keywords/aliases)
- [ ] Cmd/Ctrl+K + "/" shortcut, keyboard nav, highlighted matches
- [ ] Recent searches, empty state, no-results suggestions

## Phase 8 — Favorites & Recently Used
- [ ] localStorage-backed FavoriteButton component
- [ ] "My Tools" / Favorites section on homepage
- [ ] Recently Used list (small capped size, no PII)

## Phase 9 — Homepage & navigation polish
- [ ] Rebuild homepage IA per spec section 47 (hero → search → trust → categories → featured → CTA)
- [ ] Header/mobile nav simplification (spec section 48)
- [ ] Footer with Tools/Categories/Resources/Legal links (spec section 49)

## Phase 10 — Design system & content pages
- [ ] Centralized design tokens (bg/surface/border/text/primary/etc.)
- [ ] Dark mode semantic tokens pass (not just inversion)
- [ ] /about, /privacy, /terms, /contact, /request-a-tool pages
- [ ] Remove any fake social proof / unverified stats

## Phase 11 — PWA & ad-slot prep (optional, low priority)
- [ ] Lightweight service worker only if it doesn't hurt SEO/perf
- [ ] Reserve future ad slot positions without showing ads