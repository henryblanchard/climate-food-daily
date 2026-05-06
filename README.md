# Climate Food Daily

A daily round-up of agri-tech, food-tech, and climate-tech business news, written automatically each morning by an AI routine.

Built with Astro + Tailwind, deployed to Netlify, updated by a scheduled Claude Code routine.

## Local development

```bash
npm install
npm run dev
```

Visit `http://localhost:4321` (or whatever port Astro picks).

## How the daily issue gets written

Every morning at 06:30 UK time, a Claude Code routine clones this repo, runs web searches across the previous 24-48 hours of agri-tech and climate-food news, picks 5-7 stories, writes the day's markdown post into `src/content/posts/YYYY-MM-DD.md`, then commits and pushes. Netlify auto-deploys the new build.

To edit a post manually, just open the markdown file in `src/content/posts/` and push your change.
