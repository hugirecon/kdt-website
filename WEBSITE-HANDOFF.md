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

## Website Bot — AI Visibility Monitoring (Future)
Reference: https://x.com/deeptechtr/status/2044284236455141756

The website bot should have automated AI citation monitoring:
1. Regularly query AI systems (ChatGPT, Perplexity, Grok, Claude, Google AIO) with KDT-relevant searches
2. Check if KDT appears in the AI-generated answers
3. Track citation frequency over time — are we gaining or losing visibility?
4. Audit technical GEO signals (robots.txt, llms.txt, structured data, schema markup)
5. Report results weekly/monthly

Example queries to monitor:
- "best private military company"
- "top PMC companies hiring"
- "private security contractor"
- "defense contractor for government"
- "Knight Division Tactical"
- "PMC training programs"
- "highest paying PMC"

Open-source tool reference: GEO Optimizer (search GitHub)

## Authentik SSO (Public Authentication)

**Purpose:** Single sign-on for all public-facing KDT systems — website, store, VOC, candidate portal.
**NOT for:** Internal Super App (separate auth entirely).

### Setup
- Location: `/Users/kdtsuperapp/kdt-website/authentik/`
- Docker Compose with 4 containers: PostgreSQL, Redis, Authentik Server, Authentik Worker
- HTTP port: 9080 (avoids conflict with Medusa on 9000)
- HTTPS port: 9443
- Admin setup: http://localhost:9080/if/flow/initial-setup/
- Credentials stored in `authentik/.env`

### Running
```bash
cd /Users/kdtsuperapp/kdt-website/authentik
docker compose up -d     # start
docker compose down      # stop
docker compose logs -f   # view logs
```

### Requires
- Docker (Colima on macOS): `colima start` before running
- Colima installed via Homebrew: `brew install colima docker docker-compose`

### Integration Plan
1. Create an OAuth2/OIDC provider in Authentik for the KDT website
2. Configure the website to use Authentik for login instead of Medusa auth
3. Migrate existing Medusa customer accounts to Authentik
4. Add same OAuth2 provider for VOC, candidate portal when ready
5. Discord can be added as a federated login source in Authentik

### Moving to Another Machine
1. Copy the `authentik/` directory (docker-compose.yml, .env, media/, custom-templates/)
2. Install Docker on the new machine
3. Run `docker compose up -d`
4. Update DNS/proxy to point to new machine
5. Data persists in Docker volumes — export with `docker compose down && docker volume export`
