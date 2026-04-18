# KDT Website — Architecture

This document describes the technical architecture of the KDT website. For deployment notes and credentials, see `WEBSITE-HANDOFF.md`.

## Stack Overview

```
┌─────────────────────────────────────────────────────────────────┐
│                    CLIENT (Browser)                             │
│  Next.js 16 App · React 19 · Tailwind CSS · Geist font          │
└──────────────────────┬──────────────────────────────────────────┘
                       │
                       ▼
┌─────────────────────────────────────────────────────────────────┐
│                    VERCEL (Edge Network)                        │
│  Next.js SSR/SSG · API routes · Automatic deploys from main     │
└──────┬──────────────────┬───────────────────┬──────────────────┘
       │                  │                   │
       ▼                  ▼                   ▼
┌──────────────┐  ┌────────────────┐  ┌─────────────────┐
│   MEDUSA     │  │   AUTHENTIK    │  │   RESEND        │
│  (Commerce)  │  │     (SSO)      │  │    (Email)      │
│              │  │                │  │                 │
│ Cloudflare   │  │  Cloudflare    │  │  Direct API     │
│   tunnel     │  │    tunnel      │  │                 │
└──────┬───────┘  └────────┬───────┘  └─────────────────┘
       │                   │
       ▼                   ▼
┌──────────────┐  ┌────────────────┐
│ PostgreSQL   │  │  PostgreSQL    │
│ (Medusa DB)  │  │ (Authentik DB) │
│              │  │  + Redis       │
│ Local, Mac   │  │  (Docker via   │
│              │  │   Colima)      │
└──────────────┘  └────────────────┘

┌─────────────────────────────────────────────────────────────────┐
│              EXTERNAL INTEGRATIONS                              │
│  Stripe (payments) · Discord OAuth · Selection Specialist Bot   │
└─────────────────────────────────────────────────────────────────┘
```

## Framework and Runtime

- **Framework:** Next.js 16 (App Router, Turbopack)
- **React:** React 19
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4 (inline config)
- **Font:** Geist + Geist Mono (next/font/google)
- **Node:** v22
- **Package manager:** npm
- **Deployment:** Vercel (Hobby plan, auto-deploy from GitHub main)

## Directory Structure

```
kdt-website/
├── authentik/                   # Authentik SSO (Docker Compose)
│   ├── docker-compose.yml
│   ├── .env                     # secrets (git-ignored)
│   └── start-tunnel.sh
├── public/                      # Static assets
│   ├── images/
│   ├── markdown/                # Markdown mirrors for AI crawlers
│   │   ├── index.md
│   │   ├── about.md
│   │   ├── services.md
│   │   ├── careers.md
│   │   ├── training.md
│   │   └── contact.md
│   ├── robots.txt               # AI crawlers whitelisted
│   └── logo.png
├── src/
│   ├── app/                     # Next.js App Router pages
│   │   ├── page.tsx             # /
│   │   ├── layout.tsx           # Root layout (metadata, SessionProvider)
│   │   ├── llms.txt/            # /llms.txt route (AI crawler TOC)
│   │   ├── sitemap.ts           # /sitemap.xml (dynamic)
│   │   ├── about/
│   │   ├── team/
│   │   │   └── [member]/
│   │   ├── services/
│   │   │   └── [service]/
│   │   ├── careers/
│   │   │   └── [role]/
│   │   ├── training/
│   │   │   └── [course]/
│   │   ├── store/
│   │   │   ├── [slug]/          # Product detail
│   │   │   ├── cart/
│   │   │   └── checkout/
│   │   ├── account/             # Customer accounts
│   │   │   ├── dashboard/
│   │   │   ├── profile/
│   │   │   ├── orders/
│   │   │   └── discord-callback/
│   │   ├── portal/              # Candidate portal
│   │   ├── hire/
│   │   ├── contact/
│   │   ├── blog/
│   │   │   └── [slug]/
│   │   ├── voc/
│   │   └── api/
│   │       ├── auth/[...nextauth]/  # NextAuth/Authentik
│   │       ├── apply/               # Career applications
│   │       ├── hire/                # Service quote form
│   │       ├── contact/             # General contact form
│   │       └── prescreen/           # Pre-screen form
│   ├── components/
│   │   ├── Nav.tsx              # Main navigation
│   │   ├── Providers.tsx        # Context providers (Auth, Cart, Session)
│   │   ├── StatusTag.tsx        # Animated status tags for store/orders
│   │   ├── TabsFAQ.tsx
│   │   ├── JsonLd.tsx           # JSON-LD schema injection
│   │   └── ...
│   └── lib/
│       ├── auth.ts              # NextAuth config (Authentik + Discord)
│       ├── auth-context.tsx     # Medusa auth context (legacy)
│       ├── cart-context.tsx     # Cart state
│       ├── medusa.ts            # Medusa API client
│       ├── store-data.ts        # Medusa product mapping
│       ├── discord-oauth.ts     # Discord OAuth helpers
│       └── util/
├── next.config.ts               # Rewrites for .md mirrors, image config
├── tailwind.config.ts
├── tsconfig.json
├── package.json
├── README.md
├── ARCHITECTURE.md              # This file
├── WEBSITE-HANDOFF.md           # Deployment, credentials, known issues
├── RECRUITMENT-INTEGRATION.md   # Selection Specialist Bot API contract
├── SEO-CHECKLIST.md             # SEO/AEO task list + backlink strategy
├── SEO-CONTENT-MAP.md           # 85+ article content plan
└── FEATURES-CHECKLIST.md        # Feature completion tracking
```

## Data Flow

### Public Browsing
```
User → Vercel Edge → Next.js page → Static render (most pages)
```

Most pages are statically rendered or use ISR. Product detail pages fetch from Medusa at request time.

### Store (Product Browsing)
```
User → Next.js /store → Medusa API (via Cloudflare tunnel)
                     → getProducts() → Product grid
```

If Medusa is unreachable, the store falls back to hardcoded products in `/src/app/store/page.tsx`.

### Store (Purchase Flow)
```
Add to cart → Cart context (localStorage + Medusa cart)
           → Checkout → Stripe (payment) → Medusa (order creation)
           → Resend (confirmation email)
```

### Authentication

**Two auth systems run in parallel:**

1. **Medusa Auth (legacy/store accounts)** — email/password login, customer profiles, order history. Managed via `auth-context.tsx`. Token stored in localStorage.

2. **Authentik SSO (new, via NextAuth v5)** — OpenID Connect via Authentik. Discord OAuth also routed through NextAuth. Sessions managed by NextAuth JWT. Config in `/src/lib/auth.ts`, handler at `/src/app/api/auth/[...nextauth]/route.ts`.

Both auth buttons appear on `/account`. Once Authentik is fully deployed behind a stable domain, Medusa auth can be deprecated.

### Form Submissions
```
Hire/Quote form  → POST /api/hire     → Resend → schulz@knightdivisiontactical.com
Contact form     → POST /api/contact  → Resend → contact@knightdivisiontactical.com
Pre-screen form  → POST /api/prescreen → Local log (future: Selection Specialist API)
Application form → POST /api/apply    → Local log (future: Selection Specialist API)
```

### Candidate Portal
Currently mocks candidate data. Designed to connect to the Selection Specialist Bot API (see `RECRUITMENT-INTEGRATION.md`).

## SEO and AEO Architecture

### Traditional SEO
- **Sitemap:** Dynamic `/sitemap.xml` (46 routes, priorities set)
- **Robots:** `/robots.txt` with AI crawlers explicitly allowed
- **JSON-LD:** Organization, Service, Person, Product, Course, JobPosting, ContactPage, FAQ schemas
- **Meta:** Title/description/OpenGraph/Twitter on every page
- **Canonical URLs:** Set per page
- **Alt text:** All images have descriptive alt text

### AEO (Answer Engine Optimization)
- Meta descriptions written as direct answers (not marketing copy)
- FAQ sections using schema.org/FAQPage
- Pages structured for LLM comprehension (clear H1/H2 hierarchy)

### LLM-Friendly Layer (llmstxt.org spec)
- **`/llms.txt`** — Markdown table of contents covering all key pages. Clean, parseable by LLMs.
- **Markdown mirrors** — `/index.md`, `/about.md`, `/services.md`, `/careers.md`, `/training.md`, `/contact.md` serve clean markdown versions of critical pages. No JavaScript to parse, no ads, no navigation clutter.
- **Routing** — Rewrites in `next.config.ts` map `/about.md` → `/markdown/about.md` (static file).
- **Headers** — `Content-Type: text/markdown; charset=utf-8`, cache 1hr.
- **robots.txt** — Explicitly allows GPTBot, ChatGPT-User, CCBot, anthropic-ai, Claude-Web, ClaudeBot, PerplexityBot, Google-Extended, Applebot-Extended, Bytespider, cohere-ai.

## Infrastructure

### Vercel
- Auto-deploys from GitHub main branch
- Edge network CDN
- API routes run as serverless functions
- Environment variables in dashboard

### Medusa (Commerce Backend)
- Runs on Hugi's Mac Mini under pm2 (`kdt-medusa` process)
- Exposed via Cloudflare quick tunnel (`kdt-tunnel` process)
- PostgreSQL 17 on same machine, database `kdt-store`
- Admin UI: http://localhost:9000/app
- **Known issue:** Quick tunnel URL changes on restart. Pending named tunnel after DNS migration.

### Authentik (SSO)
- Runs on Hugi's Mac Mini via Docker (Colima)
- 4 containers: PostgreSQL, Redis, Authentik Server, Authentik Worker
- HTTP port 9080, HTTPS port 9443
- Admin UI: http://localhost:9080/if/admin/
- **Status:** Deployed, OAuth2 provider and KDT Website application configured. Not yet connected to Vercel (needs stable public URL).

### Stripe
- Live mode account: knightdivisiontactical@gmail.com
- Publishable key in frontend (env var)
- Secret key in Medusa backend
- Webhook: not configured yet

### Resend (Email)
- Account: hugirecon GitHub OAuth
- Currently sends from `onboarding@resend.dev`
- Pending: domain verification for `knightdivisiontactical.com` once DNS is on Cloudflare

### Discord OAuth
- Application: KDT Website OAuth (ID `1486582277231087770`)
- Used for account linking + Discord social login
- Now routed through NextAuth (was custom OAuth before)

## External Integrations

| Service | Purpose | Status | Docs |
|---------|---------|--------|------|
| Medusa | E-commerce | ✅ Live | [medusajs.com](https://medusajs.com) |
| Authentik | SSO | ✅ Deployed, not public | `WEBSITE-HANDOFF.md` |
| Stripe | Payments | ✅ Live | Stripe dashboard |
| Resend | Transactional email | ✅ Live (undomained) | resend.com |
| Discord OAuth | Social login | ✅ Live | Discord dev portal |
| Selection Specialist Bot | Candidate pipeline | 🔲 Pending | `RECRUITMENT-INTEGRATION.md` |
| Cloudflare | DNS + tunnels | 🔲 Pending DNS migration | — |

## Security

### Public Surface
- HTTPS everywhere (Vercel auto-provisions)
- CORS restricted on API routes
- CSRF protection via NextAuth

### Secrets Management
- All secrets in `.env.local` (git-ignored)
- Vercel environment variables for production
- Authentik secrets in `authentik/.env` (git-ignored)

### Auth
- NextAuth JWT sessions for Authentik/Discord
- Medusa token-based auth for store accounts
- No passwords stored by KDT directly (Medusa + Authentik handle hashing)

## Selection Specialist Integration (Pending)

The website handles public-facing recruiting but never makes hiring decisions. All grading/pass-fail decisions are the Selection Specialist bot's responsibility.

- Website collects pre-screen + application data
- Submits to Selection Specialist API (when online)
- Receives status updates for candidate portal
- Displays stages, documents, decisions as-is

See `RECRUITMENT-INTEGRATION.md` for the full API contract.

## Future Work

1. **DNS migration to Cloudflare** — needed for stable Medusa + Authentik URLs, Resend domain verification, and production SSO
2. **Self-hosted on KDT physical server** — migrate everything off Hugi's Mac Mini
3. **Blockchain payment integration** — KDT-native crypto payment option for store
4. **Industry-specific solution pages** — `/solutions/{industry}` per SEO plan
5. **Satellite site** — separate property for Grok/Perplexity AI citations
6. **AI visibility monitoring** — automated citation tracking by website bot
7. **Real blog content** — 85-article plan from `SEO-CONTENT-MAP.md`
