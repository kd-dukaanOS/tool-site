import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: "https://tool-site.kunalkubazu.workers.dev",

  integrations: [sitemap()]
});