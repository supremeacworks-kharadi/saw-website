# Deployment Guide — Supreme AC Works

This app is a **React + Vite Single Page Application (SPA)**. The web app lives in
`apps/web` and builds to `dist/apps/web`.

Because it is an SPA, the web server must serve `index.html` for client-side routes
(e.g. `/contact`, `/about`, `/shop`). If it doesn't, direct URLs / refreshes return
**404 Not Found**.

---

## 1. Build

```bash
# from the repo root
npm install
npm run build --prefix apps/web
```

Output is written to:

```
dist/apps/web/
├── index.html
├── .htaccess          # SPA routing rules for Apache/LiteSpeed (Hostinger)
├── assets/            # hashed JS/CSS bundles
└── branding/ ...      # static assets from apps/web/public
```

> The `.htaccess` comes from `apps/web/public/.htaccess` and is copied into the build
> automatically. **Do not delete it** — it is what makes `/contact` work on Hostinger.

---

## 2. Deploy to Hostinger (static hosting — Apache/LiteSpeed)

Hostinger serves the files statically; it does **not** run the Node `server.mjs`.

1. Upload the **contents of `dist/apps/web/`** into the site web root
   (usually `public_html/`) — not the folder itself, its contents.
   The web root must contain `index.html` and `.htaccess` at the top level.
2. **Include hidden files.** `.htaccess` starts with a dot and can be skipped by
   uploaders. In hPanel File Manager, enable **"Show hidden files"** and confirm
   `.htaccess` sits next to `index.html`.
3. **Purge cache** after each deploy:
   - hPanel -> your website -> **Cache Manager / LiteSpeed** -> **Purge All**.
   - If Cloudflare is in front of the domain, purge there too.

### Verify

Open these directly (not by clicking in-app):

- `https://www.supremeacworks.com/contact`
- `https://www.supremeacworks.com/shop`

Both should load the app (HTTP 200), not a 404.

---

## 3. Logo shows a white background after deploy?

The logo PNG is transparent (verified). A white box on the live site is almost always
host-side, not the file:

- **Stale cache:** an older white-background `logo-full.png` is cached. We serve the
  logo as `logo-full-v2.png` to bust the cache — purge the Hostinger/Cloudflare cache
  after deploying.
- **Image optimization:** Hostinger's "Image optimization" can flatten PNG
  transparency to white. If the white persists after a cache purge, **disable image
  optimization** for the site and redeploy.

---

## 4. Local preview options

```bash
# Dev server (hot reload) — for development/preview
npm run dev --prefix apps/web         # http://localhost:3000

# Production preview via the bundled Node static server (SPA fallback built in)
npm run build --prefix apps/web
npm run start --prefix apps/web       # serves dist/apps/web with /contact fallback
```

`apps/web/server.mjs` is a small Node static server with SPA fallback. It's useful for
local production testing or any host that runs Node. On Hostinger static hosting the
`.htaccess` is what handles routing instead.

---

## Troubleshooting `/contact` 404

1. Confirm `.htaccess` exists in the deployed web root (same folder as `index.html`).
2. Confirm `mod_rewrite` is enabled (default on Hostinger/LiteSpeed).
3. Purge cache and retry.
4. If deploying to a **subfolder**, update `RewriteBase` in `apps/web/public/.htaccess`
   and set Vite `base` accordingly, then rebuild.


