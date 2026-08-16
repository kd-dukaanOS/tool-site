// Run with: node scripts/audit-content.mjs
import { readFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const toolsSrc = readFileSync(join(root, 'src/data/tools.js'), 'utf8');
const mapSrc = readFileSync(join(root, 'src/data/calculator-content-map.js'), 'utf8');

// Isolate just the `tools` array so we don't pick up slugs from `categories`
const toolsArrayMatch = toolsSrc.match(/export const tools\s*=\s*\[([\s\S]*?)\n\];/);
const toolsArraySrc = toolsArrayMatch ? toolsArrayMatch[1] : toolsSrc;

const slugRe = /slug:\s*"([^"]+)"/g;
const allSlugs = [...toolsArraySrc.matchAll(slugRe)].map((m) => m[1]);

// Extract the slug -> content filename map (fixed: use capture groups, not full match)
const mapRe = /"([^"]+)":\s*"([^"]+)"/g;
const contentMap = Object.fromEntries(
  [...mapSrc.matchAll(mapRe)].map((m) => [m[1], m[2]])
);

const SECTIONS = ['about', 'formula', 'steps', 'examples', 'practicalUses', 'expertTips', 'commonMistakes', 'faq', 'relatedCalculators'];

const rows = [];

for (const slug of allSlugs) {
  const contentFile = contentMap[slug];
  if (!contentFile) {
    rows.push({ slug, status: 'NO CONTENT MAPPING', faqCount: 0, missing: 'everything' });
    continue;
  }

  const filePath = join(root, 'src/data/calculators', `${contentFile}.ts`);
  if (!existsSync(filePath)) {
    rows.push({ slug, status: `MAPPED BUT FILE MISSING (${contentFile}.ts)`, faqCount: 0, missing: 'everything' });
    continue;
  }

  const src = readFileSync(filePath, 'utf8');
  const faqCount = (src.match(/\bq:\s*"/g) || []).length;
  const missing = SECTIONS.filter((key) => !new RegExp(`\\b${key}\\s*:`).test(src));

  rows.push({
    slug,
    status: 'ok',
    faqCount,
    missing: missing.length ? missing.join(', ') : '-',
  });
}

rows.sort((a, b) => {
  if (a.status !== 'ok' && b.status === 'ok') return -1;
  if (a.status === 'ok' && b.status !== 'ok') return 1;
  return a.faqCount - b.faqCount;
});

console.log('slug'.padEnd(38), 'FAQs'.padEnd(6), 'status / missing sections');
console.log('-'.repeat(100));
for (const r of rows) {
  const statusText = r.status === 'ok' ? r.missing : r.status;
  console.log(r.slug.padEnd(38), String(r.faqCount).padEnd(6), statusText);
}

console.log(`\n${rows.length} tools checked.`);
console.log(`${rows.filter((r) => r.status !== 'ok').length} have no working content file.`);
console.log(`${rows.filter((r) => r.status === 'ok' && r.faqCount < 10).length} have fewer than 10 FAQs.`);