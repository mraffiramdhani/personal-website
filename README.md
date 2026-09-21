# personal-website

Personal site for [Mochhamad Raffi Ramdhani](https://mraffiramdhani.dev) — Astro content collections, deployed to Cloudflare Workers.

## Commands

| Command | Action |
| :------ | :----- |
| `yarn install` | Install dependencies |
| `yarn dev` | Dev server (includes the Keystatic admin) |
| `yarn cms` | Same as `yarn dev`, opens `/keystatic` |
| `yarn build` | Production build (static site; Keystatic omitted) |
| `yarn preview` | Preview the production build locally |
| `yarn preview:cf` | Build and preview with Wrangler |
| `yarn deploy` | Build and deploy with Wrangler |

Requires Node.js `>= 22.12.0`.

## Writing a blog post

Posts live as MDX in `src/content/blog/` and are edited in **Keystatic** (not a hosted headless CMS). The public listing at `/blog` hides drafts.

### Local (filesystem)

No env vars needed. This is the default.

1. Run `yarn cms` (or `yarn dev`) and open [http://127.0.0.1:4321/keystatic](http://127.0.0.1:4321/keystatic).
2. Open **Blog posts** → create or edit a post (title, summary, date, draft, body).
3. Save. Keystatic writes `src/content/blog/<slug>.mdx` (cover images go under `public/images/blog/`).
4. Uncheck **Draft** when the post should appear on `/blog`.
5. Commit and push. Cloudflare rebuilds the static site from the repo.

### GitHub mode (UI commits to the repo)

Use this when Save in Keystatic should commit MDX to GitHub instead of only writing to disk. Follow [Keystatic GitHub mode](https://keystatic.com/docs/github-mode).

1. Copy `.env.example` to `.env` and set:

   ```bash
   PUBLIC_KEYSTATIC_STORAGE=github
   PUBLIC_GITHUB_REPO_OWNER=mraffiramdhani
   PUBLIC_GITHUB_REPO_NAME=personal-website
   ```

2. Run `yarn cms` and open `/keystatic`. Use **Create GitHub App**, then install it on `mraffiramdhani/personal-website`.
3. Keystatic writes the remaining values into `.env` (do not commit that file):

   ```bash
   PUBLIC_KEYSTATIC_GITHUB_APP_SLUG=your-app-slug
   KEYSTATIC_GITHUB_CLIENT_ID=…
   KEYSTATIC_GITHUB_CLIENT_SECRET=…
   KEYSTATIC_SECRET=…   # at least 32 characters
   ```

   If you create the app manually instead: callback URL `http://127.0.0.1:4321/api/keystatic/github/oauth/callback`; permissions **Contents** read/write, **Metadata** read, **Pull requests** read.
4. Restart `yarn cms`, sign in with GitHub (repo **write** access required), then save a post. That commit triggers the Cloudflare rebuild.

To use another origin later (a Node-hosted admin), add `https://<host>/api/keystatic/github/oauth/callback` as a GitHub App callback URL.

## Production / Cloudflare

The live site is a **static** Cloudflare Workers build. Keystatic’s admin and `/api/keystatic/*` routes are **not** included in `yarn build`.

Reasons:

- Keystatic’s GitHub OAuth API is Node SSR. Cloudflare Workers + Astro 6 still fail when reading secrets (`Astro.locals.runtime.env` was removed; see [keystatic#1554](https://github.com/Thinkmill/keystatic/issues/1554)).
- Shipping the admin without GitHub OAuth would be an unauthenticated write surface. Middleware also 404s `/keystatic` and `/api/keystatic` in production unless GitHub mode is configured.

**How to publish from the UI:** use `yarn cms` locally (filesystem or GitHub mode). The public site never exposes the editor.

`KEYSTATIC_ENABLE_PRODUCTION=true` exists only if you later host the admin on a **Node** adapter (Vercel, Netlify, a VPS). Do not set it on Cloudflare Pages/Workers until Keystatic reads `cloudflare:workers` env correctly. If you do enable it on Node:

- Set the same `KEYSTATIC_*` / `PUBLIC_KEYSTATIC_*` vars in the host.
- Confirm GitHub App callback URLs include the production origin.
- Only repo collaborators can sign in; that is the auth layer.

## Content schema

Frontmatter in `src/content/blog/*.mdx` (also enforced in Keystatic):

| Field | Notes |
| :---- | :---- |
| `title` | Used as the slug source |
| `summary` | Listing + SEO description |
| `publishedAt` | `YYYY-MM-DD` |
| `updatedAt` | Optional |
| `draft` | `true` hides the post from `/blog`, post URLs, and RSS |
| `author` | Optional |
| `image` | Optional public path, e.g. `/images/blog/<slug>/image.jpg` |

## License

Private personal site.
