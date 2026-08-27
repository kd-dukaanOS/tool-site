const fs = require('fs');
const path = require('path');
const dir = 'src/data/calculators';
const raw = fs.readFileSync('src/data/calculator-content-map.js', 'utf8');
const pairs = [...raw.matchAll(/["']([\w-]+)["']\s*:\s*["']([\w-]+)["']/g)];
const missing = [];
for (const [, slug, file] of pairs) {
  if (!fs.existsSync(path.join(dir, file + '.ts'))) missing.push(slug + ' -> ' + file + '.ts');
}
console.log('Checked', pairs.length, 'entries,', missing.length, 'missing:');
missing.forEach(m => console.log(' ', m));
