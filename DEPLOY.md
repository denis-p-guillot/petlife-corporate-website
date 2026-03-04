# Deploy Pet Life to Cloudflare (pet-life.co)

## Prerequisites

- Node.js (for `npx`)
- [Wrangler](https://developers.cloudflare.com/workers/wrangler/install-and-update/) (install globally or use `npx`)

```bash
npm install -g wrangler
# or use: npx wrangler ...
```

Log in to Cloudflare (browser auth):

```bash
wrangler login
```

## First-time setup: create the Pages project

Create the project once (if it doesn’t exist yet):

```bash
wrangler pages project create pet-life --production-branch main
```

## Deploy

**From the repo root** (`petlife_website/`):

```bash
wrangler pages deploy ./Website --project-name=pet-life
```

**If you're already inside the `Website` folder**, deploy the current directory (don’t use `./Website` or it will look for `Website/Website`):

```bash
wrangler pages deploy . --project-name=pet-life
```

Your site will be available at:

- **Pages URL:** `https://pet-life.pages.dev`
- **Custom domain:** after you add it in the dashboard (see below): `https://pet-life.co`

## Custom domain (pet-life.co)

1. Open [Cloudflare Dashboard](https://dash.cloudflare.com) → **Workers & Pages** → **pet-life**.
2. Go to **Custom domains** → **Set up a custom domain**.
3. Enter `pet-life.co` (and optionally `www.pet-life.co`).
4. Follow the DNS steps (add the CNAME record Cloudflare shows if your DNS is elsewhere, or leave as is if DNS is on Cloudflare).

After DNS propagates, the site will be served at **https://pet-life.co**.

## Optional: deploy from Git (CI)

To deploy on every push, connect the repo in **Workers & Pages** → **pet-life** → **Settings** → **Builds & deployments** → **Connect to Git**. Set:

- **Build output directory:** `Website`
- **Root directory:** leave empty or `/`

Then either use the Cloudflare build, or add a GitHub Action that runs `wrangler pages deploy ./Website --project-name=pet-life`.
