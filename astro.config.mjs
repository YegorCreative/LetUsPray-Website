// @ts-check
import { defineConfig } from 'astro/config';

// Static output for GitHub Pages at the custom apex domain.
// Do not set `base` to the repository name; the public site is
// https://letusprayapp.com, not a /LetUsPray-Website/ path.
export default defineConfig({
  site: 'https://letusprayapp.com',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
