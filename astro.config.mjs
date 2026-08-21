// @ts-check
import { defineConfig } from 'astro/config';

// Static output for Cloudflare Pages. DNS and production deploy
// are intentionally not configured in this scaffold phase.
export default defineConfig({
  site: 'https://letusprayapp.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
