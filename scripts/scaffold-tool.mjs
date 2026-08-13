#!/usr/bin/env node
/**
 * Scaffolds a new calculator tool from a JSON spec, touching the same 5 places
 * a human/Claude would edit by hand — see CLAUDE.md for the pattern this follows.
 *
 * Usage:
 *   node scripts/scaffold-tool.mjs specs/markup-calculator.json
 *
 * What it DOES do (mechanical, safe to automate):
 *   - Adds the tools.js entry
 *   - Adds the calculator-content-map.js line
 *   - Creates src/data/calculators/<slug>.ts with full content structure,
 *     using your spec's copy where given, TODO placeholders where not
 *   - Creates src/scripts/<slug>-calculator.ts with input-reading/validation
 *     boilerplate wired to your field list, and a clearly marked TODO for
 *     the actual formula
 *   - Creates src/components/tools/<Slug>CalculatorWidget.astro with
 *     CalculatorField inputs + ResultCard outputs from your spec
 *   - Adds the import + ternary branch to [tool].astro
 *
 * What it DOES NOT do (needs a human or a focused Claude turn per tool):
 *   - Write the actual formula/calculation logic
 *   - Write FAQ answers, examples, tips (spec can supply these; otherwise TODO)
 *   - Verify the math is correct
 *
 * Spec shape (see specs/_example.json):
 * {
 *   "slug": "markup-calculator",
 *   "category": "business",
 *   "name": "Markup Calculator",
 *   "desc": "Find markup % and sale price",
 *   "fields": [
 *     { "id": "cost", "label": "Cost ($)", "type": "number", "placeholder": "e.g. 40" },
 *     { "id": "markupPercent", "label": "Markup (%)", "type": "number", "placeholder": "e.g. 25" }
 *   ],
 *   "results": [
 *     { "id": "salePriceResult", "title": "Sale Price", "accent": "success", "size": "lg" },
 *     { "id": "profitResult", "title": "Profit", "accent": "primary" }
 *   ]
 * }
 */

import fs from "node:fs";
import path from "node:path";

const ROOT = process.cwd();
const specPath = process.argv[2];
if (!specPath) {
  console.error("Usage: node scripts/scaffold-tool.mjs <path-to-spec.json>");
  process.exit(1);
}

const spec = JSON.parse(fs.readFileSync(specPath, "utf8"));
const { slug, category, name, desc, fields = [], results = [] } = spec;

if (!slug || !category || !name) {
  console.error("Spec needs at least: slug, category, name");
  process.exit(1);
}

// Guard: the category must already exist in tools.js's `categories` array.
// getStaticPaths() in [tool].astro looks up categories.find(c => c.slug === tool.category)
// and will throw at build time if it's missing — catch that here instead.
const toolsSrcForCheck = fs.readFileSync(path.join(ROOT, "src/data/tools.js"), "utf8");
const categorySlugMatches = [...toolsSrcForCheck.matchAll(/slug:\s*"([\w-]+)"/g)]
  .map(m => m[1]);
// categories array comes first in the file, before the tools array's own slugs —
// so intersect against the known category block specifically:
const categoriesBlockMatch = toolsSrcForCheck.match(/export const categories = \[([\s\S]*?)\];/);
const knownCategories = categoriesBlockMatch
  ? [...categoriesBlockMatch[1].matchAll(/slug:\s*"([\w-]+)"/g)].map(m => m[1])
  : [];
if (!knownCategories.includes(category)) {
  console.error(`Category "${category}" doesn't exist yet in src/data/tools.js's categories array.`);
  console.error(`Known categories: ${knownCategories.join(", ")}`);
  console.error(`Add it to the categories array first, or fix the spec's category field.`);
  process.exit(1);
}

function pascalCase(s) {
  return s.split("-").map(w => w[0].toUpperCase() + w.slice(1)).join("");
}
const PascalSlug = pascalCase(slug); // e.g. markup-calculator -> MarkupCalculator
const contentFileName = slug.replace(/-calculator$/, ""); // matches existing convention (emi-calculator -> emi.ts)

let filesWritten = [];
let filesEdited = [];

// ---------- 1. tools.js entry ----------
const toolsPath = path.join(ROOT, "src/data/tools.js");
let toolsSrc = fs.readFileSync(toolsPath, "utf8");
if (toolsSrc.includes(`slug: "${slug}"`)) {
  console.error(`tools.js already has an entry for "${slug}" — aborting to avoid duplicates.`);
  process.exit(1);
}
const toolsEntry = `  { slug: "${slug}", category: "${category}", name: "${name}", desc: "${desc || ""}" },\n`;
// Insert right after the categories array's closing, at the start of `export const tools = [`
toolsSrc = toolsSrc.replace(
  /(export const tools = \[\n)/,
  `$1${toolsEntry}`
);
fs.writeFileSync(toolsPath, toolsSrc);
filesEdited.push(toolsPath);

// ---------- 2. calculator-content-map.js line ----------
const mapPath = path.join(ROOT, "src/data/calculator-content-map.js");
let mapSrc = fs.readFileSync(mapPath, "utf8");
if (!mapSrc.includes(`"${slug}":`)) {
  mapSrc = mapSrc.replace(
    /(export const contentMap = \{\n)/,
    `$1  "${slug}": "${contentFileName}",\n`
  );
  fs.writeFileSync(mapPath, mapSrc);
  filesEdited.push(mapPath);
}

// ---------- 3. content file ----------
const contentPath = path.join(ROOT, `src/data/calculators/${contentFileName}.ts`);
const contentVarName = `${contentFileName.replace(/-([a-z])/g, (_, c) => c.toUpperCase())}CalculatorContent`;
const contentTpl = `export const ${contentVarName} = {
  meta: {
    seoTitle: "${name} - TODO free tool tagline",
    metaDescription: "TODO 140-160 char description for ${name}.",
    canonicalSlug: "/${slug}",
    ogTitle: "${name}",
    ogDescription: "TODO",
    twitterTitle: "Free ${name}",
    twitterDescription: "TODO",
  },
  hero: { text: "TODO 2-3 sentence hero description of what ${name} does and who it's for." },
  about: { text: \`TODO 3-4 paragraph about section: what it computes, who uses it, what it shows, limitations.\` },
  formula: {
    formula: "TODO formula string",
    variables: [
      // { symbol: "X", meaning: "TODO" },
    ],
    explanation: "TODO",
    interpretation: "TODO worked example sentence.",
  },
  steps: [
    // "Enter ...",
  ],
  examples: [
    // { inputs: "TODO", result: "TODO", explanation: "TODO" },
  ],
  practicalUses: [
    // "TODO",
  ],
  expertTips: [
    // "TODO",
  ],
  commonMistakes: [
    // { mistake: "TODO", fix: "TODO" },
  ],
  faq: [
    // { q: "TODO", a: "TODO" },
  ],
  relatedCalculators: [
    // "TODO Related Calculator",
  ],
  structuredData: ["FAQPage", "WebPage", "BreadcrumbList", "SoftwareApplication"],
  headingStructure: {
    h1: "${name}",
    h2: ["About", "Formula", "How to Use", "Examples", "Tips", "Common Mistakes", "FAQ", "Related Calculators"],
  },
};
`;
fs.writeFileSync(contentPath, contentTpl);
filesWritten.push(contentPath);

// ---------- 4. script file ----------
const scriptPath = path.join(ROOT, `src/scripts/${slug}.ts`);
const inputDecls = fields.map(f =>
  `const ${f.id}Input = document.getElementById("${f.id}") as HTMLInputElement;`
).join("\n");
const resultWrites = results.map(r =>
  `  // setResultText("${r.id}", /* TODO computed value */);`
).join("\n");

const scriptTpl = `import { setValue, copyToClipboard } from "../utils/calculator";

${inputDecls}

const calculateBtn = document.getElementById("calculateBtn");
const resetBtn = document.getElementById("resetBtn");
const copyBtn = document.getElementById("copyBtn");

const errorBox = document.getElementById("errorBox") as HTMLElement;
const emptyState = document.getElementById("emptyState") as HTMLElement;
const resultsContainer = document.getElementById("resultsContainer") as HTMLElement;

function showError(msg: string) {
  errorBox.textContent = msg;
  errorBox.hidden = false;
}
function clearError() {
  errorBox.hidden = true;
  errorBox.textContent = "";
}

function calculate() {
  clearError();
  // TODO: read + validate inputs, e.g.:
  ${fields.map(f => `  // const ${f.id} = parseFloat(${f.id}Input.value);`).join("\n")}
  // TODO: guard against NaN / negative / zero where invalid, call showError() and return.

  // TODO: actual formula here.

${resultWrites}

  emptyState.hidden = true;
  resultsContainer.hidden = false;
}

function reset() {
  ${fields.map(f => `  ${f.id}Input.value = "";`).join("\n")}
  clearError();
  emptyState.hidden = false;
  resultsContainer.hidden = true;
}

calculateBtn?.addEventListener("click", calculate);
resetBtn?.addEventListener("click", reset);
copyBtn?.addEventListener("click", () => {
  // TODO: build a text summary and copyToClipboard(summary)
});
`;
fs.writeFileSync(scriptPath, scriptTpl);
filesWritten.push(scriptPath);

// ---------- 5. widget component ----------
const widgetPath = path.join(ROOT, `src/components/tools/${PascalSlug}Widget.astro`);
const fieldsMarkup = fields.map(f =>
  `    <CalculatorField id="${f.id}" label="${f.label}" type="${f.type || "number"}" placeholder="${f.placeholder || ""}" />`
).join("\n");
const resultCardsMarkup = results.map(r =>
  `      <ResultCard id="${r.id}" title="${r.title}"${r.accent ? ` accent="${r.accent}"` : ""}${r.size ? ` size="${r.size}"` : ""} />`
).join("\n");

const widgetTpl = `---
import CalculatorField from "../calculator/CalculatorField.astro";
import ActionButtons from "../calculator/ActionButtons.astro";
import ResultCard from "../calculator/ResultCard.astro";
import ResultsGrid from "../calculator/ResultsGrid.astro";
import EmptyState from "../calculator/EmptyState.astro";
---

<div class="calculator-widget">
  <div class="calculator-inputs">
${fieldsMarkup}

    <div id="errorBox" class="error-box" role="alert" hidden></div>

    <ActionButtons calculateId="calculateBtn" resetId="resetBtn" copyId="copyBtn" showDownload={false} showShare={false} />
  </div>

  <div class="calculator-output">
    <EmptyState id="emptyState" title="Enter values to calculate" description="TODO result description." />

    <ResultsGrid id="resultsContainer" hidden>
${resultCardsMarkup}
    </ResultsGrid>
  </div>
</div>

<script src="../../scripts/${slug}.ts"></script>
`;
fs.writeFileSync(widgetPath, widgetTpl);
filesWritten.push(widgetPath);

// ---------- 6. wire into [tool].astro ----------
const toolAstroPath = path.join(ROOT, "src/pages/[category]/[tool].astro");
let toolAstroSrc = fs.readFileSync(toolAstroPath, "utf8");

const importLine = `import ${PascalSlug}Widget from "../../components/tools/${PascalSlug}Widget.astro";\r\n`;
if (!toolAstroSrc.includes(importLine.trim())) {
  // Insert after the last existing widget import (handles CRLF line endings)
  toolAstroSrc = toolAstroSrc.replace(
    /(import \w+Widget from "\.\.\/\.\.\/components\/tools\/\w+\.astro";\r?\n)(?!.*import \w+Widget)/s,
    `$1${importLine}`
  );
}

const branch = `    ) : tool.slug === "${slug}" ? (\r\n      <${PascalSlug}Widget />\r\n`;
if (!toolAstroSrc.includes(`tool.slug === "${slug}"`)) {
  // Insert right before the final fallback branch of the ternary chain
  // (chain ends "... ) : ( <div class="tool-widget-placeholder">...)}", not ") : null}")
  const anchor = /(\r?\n\s*\) : \(\r?\n\s*<div class="tool-widget-placeholder">)/;
  if (!anchor.test(toolAstroSrc)) {
    console.error("Could not find the ternary chain's fallback branch to insert before.");
    console.error("The file may have changed shape — check [tool].astro manually and update this script's anchor regex.");
    process.exit(1);
  }
  toolAstroSrc = toolAstroSrc.replace(anchor, `${branch}$1`);
}
fs.writeFileSync(toolAstroPath, toolAstroSrc);
filesEdited.push(toolAstroPath);

// ---------- summary ----------
console.log(`\nScaffolded "${name}" (${slug}):\n`);
console.log("Created:");
filesWritten.forEach(f => console.log("  " + path.relative(ROOT, f)));
console.log("\nEdited:");
filesEdited.forEach(f => console.log("  " + path.relative(ROOT, f)));
console.log(`\nStill needs (not automated — do this per tool):`);
console.log("  - The actual formula in " + path.relative(ROOT, scriptPath));
console.log("  - Real copy in " + path.relative(ROOT, contentPath) + " (about, formula, examples, faq, etc.)");
console.log("\nThen run: npm run build\n");
