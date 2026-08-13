## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)

---

## ToolSite project notes

### Stack & constraints
Astro + TypeScript + Tailwind v4. Zero backend, zero paid APIs, zero database.
Everything runs client-side in the browser and deploys to Cloudflare Pages free tier.
Do not introduce a server, a paid service, or a new state-management pattern.

### The existing tool pattern (follow exactly — do not invent a new one)
Every tool touches 5 places. When adding a tool, touch all 5, nothing more:
1. `src/data/tools.js` — one entry: `{ slug, category, name, desc }`
2. `src/data/calculator-content-map.js` — one line: `"<slug>": "<content-file-name>"`
3. `src/data/calculators/<file>.ts` — content export: meta, hero, about, formula, steps,
   examples, practicalUses, expertTips, commonMistakes, faq, relatedCalculators,
   structuredData, headingStructure. Match the shape of an existing file in that folder.
4. `src/scripts/<slug>-calculator.ts` — reads `CalculatorField` inputs by id, computes,
   writes results into `ResultCard` elements. Match an existing script's structure.
5. `src/components/tools/<Slug>CalculatorWidget.astro` — markup only: `CalculatorField`
   inputs, `ActionButtons`, `EmptyState`, `ResultsGrid` of `ResultCard`s, then
   `<script src="../../scripts/<slug>-calculator.ts"></script>`.
   Then add one import line and one ternary branch for it in
   `src/pages/[category]/[tool].astro`.

Known wart: step 5's ternary chain in `[tool].astro` grows by one branch per tool
(90+ branches today). It works. Don't refactor it into something dynamic unless
explicitly asked — that's a real but low-priority cleanup, not a bug.

### Hard rules
- Never fabricate stats, ratings, testimonials, or "trusted by X users" claims.
  Only display privacy/pricing claims that are literally true of the code.
- Never hardcode a live tax/interest/currency rate as if it updates itself. Regional
  financial data goes in versioned config with an explicit "last reviewed" date.
- Don't touch working tools while adding new ones. Don't rename exported functions.
- Run `npm run build` after every batch of changes, not just at the end.

### Where things already work (verified — don't re-audit these)
- Hero search: client-side, inline dropdown, no dead routes.
- Bookmarks: `/tools` page + `/bookmarks` page, localStorage-backed, working.
- Sitemap: wired via `@astrojs/sitemap`.

### Session discipline
- Work from `ROADMAP.md`, one phase at a time. Don't jump ahead.
- Name the exact files/tools in scope for this session before starting.
- After finishing a batch, check items off `ROADMAP.md` directly.

