import { categories, categoryIcons, tools } from './src/data/tools.js';
import fs from 'fs';

const categoryOrder = categories.map(c => c.slug);
const sorted = [...tools].sort((a, b) => {
  const ca = categoryOrder.indexOf(a.category);
  const cb = categoryOrder.indexOf(b.category);
  if (ca !== cb) return ca - cb;
  return a.name.localeCompare(b.name);
});

const header = `// src/data/tools.js
export const categoryIcons = ${JSON.stringify(categoryIcons, null, 2)};

export const categories = ${JSON.stringify(categories, null, 2)};

export const tools = ${JSON.stringify(sorted, null, 2)};
`;

fs.writeFileSync('src/data/tools.sorted.js', header);
console.log('Wrote src/data/tools.sorted.js — review it, then rename over tools.js if it looks right.');
