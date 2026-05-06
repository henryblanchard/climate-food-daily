import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://climate-food-daily.netlify.app',
  integrations: [tailwind()],
});
