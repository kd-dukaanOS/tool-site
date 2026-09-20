import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://toomanytoolz.com",
  redirects: {
    '/es/business/business-days-calculator': '/es/date-time/business-days-calculator/',
    '/es/business/business-valuation-calculator': '/es/finance/business-valuation-calculator/',
  },
  integrations: [sitemap()]
});