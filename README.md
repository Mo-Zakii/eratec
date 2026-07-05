# ERATEC

Official website for **ERATEC** — precision-driven HVAC and electromechanical solutions in Egypt. Authorized distributor of Hitachi VRF systems (Bosch Home Comfort group).

## Stack

- Vite + React + TypeScript
- Tailwind CSS + shadcn/ui
- Supabase (auth, CMS, forms)

## Development

```bash
npm install
cp .env.example .env   # add Supabase keys
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Environment

Copy `.env.example` to `.env` and set:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

These are **baked into the JS bundle at build time**. If they are missing on the server, API calls will hit your own domain (e.g. `yoursite.com/rest/v1/...`) and return 404.

## Production (Coolify)

1. **Build environment variables** (mark as available at build time):
   - `VITE_SUPABASE_URL=https://<project-ref>.supabase.co`
   - `VITE_SUPABASE_PUBLISHABLE_KEY=<your-key>`
   - `NIXPACKS_NODE_VERSION=22` (if using Nixpacks)

2. **SPA routing** — without this, direct URLs like `/auth` return nginx 404:
   - Static site: enable **Is it a static site?** and **SPA / single-page app**
   - Or deploy with the included `Dockerfile` (nginx + `try_files` → `index.html`)

3. **Redeploy** after adding env vars (a restart alone is not enough; the app must be rebuilt).

---

© ERATEC. All rights reserved.
