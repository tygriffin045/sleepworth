# SleepWorth

Editorial Amazon Associates picks for better sleep.

**Associates tag:** `sleepworth20-20`  
**Link format:** `https://www.amazon.com/dp/{ASIN}?tag=sleepworth20-20`  
**Live:** https://sleepworth.vercel.app

## High-conversion routes

- `/best` — use-case hubs (side sleepers, hot sleepers, apartment blackout, budget starter kit)
- `/compare` — side-by-side tables (pillows, sound machines, toppers, darkness)
- `/affiliate-disclosure` — FTC / Associates disclosure (no About page; `/about` is intentionally absent and returns 404; no contact email)

## Scripts

```bash
npm install
npm run build
vercel --prod --yes --project sleepworth
```

## SEO

- `/robots.txt` via `src/app/robots.ts`
- `/sitemap.xml` via `src/app/sitemap.ts`

Source: private GitHub repo `tygriffin045/sleepworth`, Git-connected to the Vercel project `sleepworth` (pushes to `main` deploy to production).
