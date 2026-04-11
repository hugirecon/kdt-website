# KDT Website — Handoff Notes

## Deployment
- **Vercel** auto-deploys from `hugirecon/kdt-website` main branch on GitHub
- **Vercel account:** hugirecon GitHub OAuth
- **Dashboard:** https://vercel.com/hugi-recons-projects/kdt-website
- **Live URL:** https://kdt-website.vercel.app

## Known Issues & Lessons

### Vercel Build Failures (Apr 7-11, 2026)
13 consecutive builds failed because an HTML comment (`<!-- deploy trigger -->`) was appended to a JSX file (`src/app/team/page.tsx`). HTML comments are not valid in React/JSX module files. This went unnoticed because the local build was never run after that change — `npx next build` would have caught it immediately.

**Lesson:** ALWAYS run `npx next build` locally before pushing. Never append raw HTML to .tsx files.

### Vercel Environment Variables Needed for Production
These need to be set in Vercel dashboard → Settings → Environment Variables:
- `NEXT_PUBLIC_MEDUSA_BACKEND_URL` — Medusa backend URL (Cloudflare tunnel or server)
- `NEXT_PUBLIC_MEDUSA_PUBLISHABLE_KEY` — `pk_a9ab3ae330c7e5e4d070a638f510d295c6382c50f0683a70fd17d220963bd50c`
- `NEXT_PUBLIC_STRIPE_KEY` — `pk_live_51Oyy3eRq2Z1BUtxmIN2SppnjtcXTKBgSaNaGlG4IgxiqIreEZMO20AR23bsCcBXgq0d0wy7vih8io0akOaePxiUC00N8Z5cIkU`
- `NEXT_PUBLIC_DISCORD_CLIENT_ID` — `1486582277231087770`
- `DISCORD_CLIENT_SECRET` — `IWAke5opQkv_rcl-k1ohF4rgcYTv43vs`
- `NEXT_PUBLIC_DISCORD_REDIRECT_URI` — update to production URL when domain is set
- `RESEND_API_KEY` — `re_BeEwJeZZ_4JvjhnDKeSgAPcJaZwn99LXw`

### Medusa Backend
- Runs on Hugi's Mac Mini under pm2 (`pm2 start kdt-medusa`)
- Exposed via Cloudflare quick tunnel (`pm2 start kdt-tunnel`)
- Quick tunnel URL changes on restart — need named tunnel with Cloudflare account
- Database: PostgreSQL 17 on the same machine, database `kdt-store`
- Admin: http://localhost:9000/app (hugirecon@gmail.com)

### Cloudflare
- Account: hugirecon@gmail.com (Google OAuth)
- Account ID: 2a8ae10d6fc2806e6060ea921668919b
- DNS migration from GoDaddy pending — needed for stable tunnel URL and Resend domain verification

### Stripe
- Account: knightdivisiontactical@gmail.com
- Publishable key in frontend, secret key in Medusa .env
- Webhook secret not configured yet (needed for production payments)

### Resend (Email)
- Account: hugirecon GitHub OAuth
- Dashboard: https://resend.com
- Contact form → contact@knightdivisiontactical.com
- Hire/quote form → schulz@knightdivisiontactical.com
- Application form → logs only (routes to Selection Specialist API later)
- Sends from onboarding@resend.dev until domain is verified in Resend

### Discord OAuth
- App: KDT Website OAuth (created by McCalla)
- Client ID: 1486582277231087770
- Redirects configured for localhost and kdt-website.vercel.app

## Integration Points Pending
See `RECRUITMENT-INTEGRATION.md` for full details on:
- Selection Specialist bot API connection
- Candidate portal data wiring
- Pre-screen questions from API
- Application submission routing

## Content Notes
- Bogdan Modzolewski removed from all pages (Apr 2026)
- tactical-3.jpg replaced with Santiago's photo
- HQ listed as "New York, NY" on about page — should be Sheridan, WY per gov registration
- "400+ KDT Agents" stat on about page — verify accuracy
- "Founded and led by Matthew McCalla and Michael Schulz" — McCalla listed first, verify order preference
