# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Accentient.com is a Hugo-based static website with a Cloudflare Worker backend. The site showcases training courses, blog posts, and services related to Azure DevOps, Scrum, GitHub, and AI practices. The architecture consists of:

- **Frontend**: Hugo static site generator using the `hugo-fresh` theme (Bulma-based CSS framework)
- **Backend**: Cloudflare Worker handling contact form submissions with reCAPTCHA verification and email delivery via Resend API
- **Content**: Markdown-based content files organized by section (courses, blog posts, pages)
- **Theme**: Custom layouts and shortcodes extending hugo-fresh base theme

## Directory Structure

- `config.toml` — Hugo site configuration (navigation, hero, footer params)
- `content/` — Markdown content files (pages, courses, blog posts)
- `layouts/` — Custom Hugo templates and shortcodes extending the theme
- `static/` — Static assets (images, downloads, PDFs)
- `themes/hugo-fresh/` — Base Hugo Fresh theme
- `cloudflare-worker/` — TypeScript Worker handling contact form submissions
  - `src/index.ts` — Worker entry point (form handling, reCAPTCHA, email)
  - `test/index.spec.ts` — Vitest tests using Cloudflare's test utilities
  - `wrangler.toml` — Wrangler configuration (compatibility date, entrypoint)
  - `package.json` — npm dependencies (wrangler, vitest, TypeScript)

## Common Commands

### Hugo Site Development

```sh
# Build the static site (outputs to /public)
hugo

# Start development server with live reload (runs on localhost:1313)
hugo server

# Build for production (minified)
hugo --minify

# Create new content page
hugo new content/pagename.md
```

### Cloudflare Worker Development

```sh
# From cloudflare-worker/ directory
cd cloudflare-worker

# Start local development server
npm run dev

# Run tests
npm run test

# Deploy to Cloudflare
npm run deploy

# Generate TypeScript types from wrangler configuration
npm run cf-typegen
```

## Architecture Notes

### Contact Form Handler
The Cloudflare Worker (`cloudflare-worker/src/index.ts`) is a POST-only endpoint that:
1. Accepts JSON with form data and a reCAPTCHA token
2. Verifies the token against Google's reCAPTCHA v3 API — checks `success`, `score >= 0.5`, `action == "submit"`, and that the reported `hostname` is one of ours. The verify request is built with `URLSearchParams` and passes the caller IP (`CF-Connecting-IP`) as `remoteip`.
3. Sends the verified form data to info@accentient.com via Resend API
4. Returns CORS headers

**Environment variables** (required in Cloudflare):
- `RECAPTCHA_SECRET` — Google reCAPTCHA secret key
- `RESEND_API_KEY` — Resend email API key

**CORS**: Locked to an allow-list — `https://accentient.com` and `https://www.accentient.com` (`ALLOWED_ORIGINS` in `index.ts`). The reCAPTCHA site key's Domains list (admin console) must include `accentient.com`, since the Worker now rejects mismatched hostnames.

### Hugo Content Organization
- Top-level MD files (e.g., `content/training.md`, `content/about.md`) become section pages
- Blog posts live in `content/blog/` with folder-per-post structure (enables co-location of images)
- Course pages (AQATP, CICD, MARS, etc.) are defined as top-level MD files
- Custom shortcodes in `layouts/shortcodes/` for page structure (title1-6, subtitle1-6)
- Custom sections in `layouts/partials/section1.html` through `section5.html`

### Template Layouts & Page Structure

**Single pages** (content pages like Courseware, Training, AI, etc.) use `layouts/_default/single.html` which renders:
1. `partials/single/single.html` — includes navbar partials for proper spacing/styling
2. `partials/single/content.html` — renders title and content in a `section.is-medium` with `pb-0` class

**List pages** (like Blog) have custom templates (`layouts/blog/list.html`):
- Must include `{{ partial "navbar.html" . }}` and `{{ partial "navbar-clone.html" . }}` before the main content section for consistent styling
- Use `<main class="section is-medium pb-0">` to match single page spacing
- Missing navbar partials will cause layout shift when navigating between pages

When modifying list page templates, ensure they include the navbar partials and `pb-0` class for alignment with single pages.

### Theme Customization
- Base theme: `hugo-fresh` (Bulma CSS framework)
- Custom layouts in `layouts/` override theme defaults
- Navbar links configured via `config.toml` `[params.navbar]` array

### CSS Pipeline
CSS is processed through Hugo Pipes, not served as raw static files:
- Sources live in `assets/css/` (`bulma.css`, `style.css`, `custom.css`) — NOT `static/css/`
- `layouts/partials/css.html` concatenates them via `resources.Concat | minify | fingerprint` into a single cache-busted `bundle.min.<hash>.css` with an SRI `integrity` hash
- The partial is included once from `layouts/_default/baseof.html`. Do NOT also add inline `<link>` stylesheets in `baseof.html` — that previously double-loaded every stylesheet (bulma.css twice per page).
- Add custom styles to `assets/css/custom.css`
- Note: `hugo --minify` does NOT minify files left in `static/`, which is why CSS goes through the asset pipeline instead

### JavaScript
- Scripts loaded via `layouts/partials/javascript.html` (jQuery, feather-icons, `fresh.js`)
- No Modernizr — touch detection uses native `('ontouchstart' in window) || navigator.maxTouchPoints > 0` (see `static/js/fresh.js`). Do not reintroduce polyfill libraries; target modern browsers only.

### Icons
Two icon systems are intentionally used: Font Awesome 6 (CDN, in `baseof.html`) for footer brand icons (e.g. `fa-x-twitter`), and Feather Icons (in `javascript.html`) for sidebar icons via `feather.replace()` in `fresh.js`.

## Blog System

`content/blog/` holds ~1,090 posts (imported from the old WordPress/dasBlog archive). This is the most customized part of the site.

### Taxonomies
`config.toml` declares three taxonomies. Declaring `[taxonomies]` REPLACES Hugo's defaults, so all three must be listed (a missing `tag` line silently disables tag pages):
```toml
[taxonomies]
  tag = "tags"
  category = "categories"
  author = "authors"
```
- **tags** drive the tag filter dropdown and `/blog/tags/<tag>/` pages.
- **authors** drive the author filter dropdown and `/blog/authors/<name>/` pages. Posts must use the plural list key `authors: ["Name"]` (NOT a singular `author:` string) for this taxonomy to populate; `single.html` and the card link each author to their `/blog/authors/` page.

The taxonomies are nested under `/blog/` (not Hugo's default root) via `[permalinks.term]` and `[permalinks.taxonomy]` in `config.toml`. Dropdown/cloud links use `.Page.RelPermalink` (auto-follows the permalink); the hand-built tag/author links in `single.html` and `blog-card.html` hardcode the `/blog/tags/` and `/blog/authors/` prefixes, so update those if the permalink ever changes.

### Blog post front matter
```yaml
---
title: "..."
date: 2024-03-15T15:30:52Z   # UTC, with Z
authors: ["Richard Hundhausen"]
slug: "..."
draft: false
tags: ["Scrum", "TFS"]
---
```

### Templates (`layouts/`)
- `blog/list.html` — the `/blog/` index: search box, tag + author dropdowns (side by side in `.blog-filters`), post cards, pagination.
- `blog/single.html` — a post; wraps content in `data-pagefind-body` for search.
- `_default/taxonomy.html` — **gotcha:** in this Hugo version BOTH the taxonomy index (`/blog/tags/`) AND individual term pages (`/blog/tags/scrum/`) render through `taxonomy.html`; a `_default/term.html` is NOT picked up. It branches on `.Kind` ("term" → card list, else → term cloud).
- `partials/blog-card.html` — shared post card (list + term pages).
- `partials/tag-filter.html`, `partials/author-filter.html` — dropdown filters (navigate to the term page, preselect the current term).
- `partials/pagination.html` — custom Bulma-styled numbered pagination. Do NOT use Hugo's internal `_internal/pagination.html`; it emits Bootstrap classes Bulma doesn't style.
- `partials/blog-search.html` — Pagefind UI plus the "hide filters/cards while searching" behavior (toggles `body.blog-searching`).

### Search (Pagefind)
Full-text search uses [Pagefind](https://pagefind.app), a static post-build indexer:
- The `pagefind` CLI runs after `hugo --minify` (a step in `ci.yml`) and writes `public/pagefind/`.
- `single.html` marks the indexed region with `data-pagefind-body`, so only blog posts are searched.
- Local testing: `hugo --minify -d public && npx pagefind --site public --serve` → search works at the served URL. The normal `hugo server` has no index, so the box is inert there (guarded so it doesn't error).

### Images & attachments
Post images AND downloadable files (zip/pdf/ppt/etc.) are co-located in each post's page-bundle folder, localized out of `C:\Blog\Files`, `\Uploads`, `\Content`, and `\Attachments` by filename match. `.content img` (in `custom.css`) frames every content image with a border + drop shadow + spacing; UI icons (`/images/icons/`, `/images/courseware/`) are excluded.

- **`/files/` slash-strip bug:** the import mangled some dasBlog refs — `/files/Foo.jpg` became `filesFoo.jpg` (slash dropped) or stayed `files/Foo.jpg`. Recovery strips the `files` prefix / `files/` subpath and matches the remaining filename. Handle BOTH `src=` and `href=` (full-size images are linked from thumbnails, not just shown).
- **25 MiB guard:** Cloudflare Pages rejects any file over 25 MiB, so localization skips them (a 43 MB `.mov` was removed; the CI deploy job also fails fast on oversized files). Host large media externally.
- **Old personal blog:** `blog.hundhausen.com` / `hundhausen.com/blog` links (the author's older blog) were repointed to `/blog/tags/life/`; plain `www.hundhausen.com` links are left alone.
- Audit broken links/assets anytime with `broken_scan.py` (below), which writes `broken-links.md`. A few refs are unrecoverable junk: `file:///C:/...` clipboard paths and old `.aspx` admin links from the dasBlog era.

### Import / maintenance scripts (local, not committed)
The one-time WordPress→Hugo import and the bulk content/tag/image tooling live in `C:\Blog\Backups` on the author's machine. They edit `content/blog/` in place, are re-runnable, and are byte/BOM-safe (the original ~100 posts carry a UTF-8 BOM that must be detected and preserved):
- `convert.py` — import posts; `parse_wp.py` — authors/tags from the SQL dump (writes `_maps.json`)
- `add-authors.py` — convert `author:` string front matter to the `authors:` list
- `rename-tags.py`, `tagger.py` — bulk tag rename/consolidate and rule-based tag additions
- `localize.py`, `localize2.py` — image/file localization from the source folders
- `attach.py`, `img_fix.py`, `files_slash.py` — recover attachments/images, including the `/files/` slash-strip cases (handle `src=` and `href=`)
- `replace-oldblog.py` — repoint old personal-blog links to `/blog/tags/life/`
- `broken_scan.py` — audit all posts for broken links/assets, writes `broken-links.md`

## Build & Config Notes

- **`[minify] disableJS = true` in `config.toml` is REQUIRED.** Imported posts contain dead inline `<script>` (old dasBlog chat UI) that Hugo's JS minifier can't parse; without this, `hugo --minify` (used by CI) fails the whole build. Our real JS is external static files, so disabling inline-JS minification costs nothing.
- The footer auto-stamps the build date: `layouts/partials/footer.html` uses `v{{ now.Format "06.1.2" }}` (e.g. `v26.6.23`). Builds run in UTC.
- `baseof.html` prefixes the `<body>` class with `page-` (e.g. `page-tags`). This avoids a section/page name colliding with a Bulma utility class — `tags`, `box`, `content`, `title`, etc. are all Bulma classes, and an unprefixed `class="tags"` turns `<body>` into a flexbox.

## Local Dev Gotchas

- **`hugo server` does NOT reliably pick up bulk or external changes.** After a script edits many posts' front matter, or after a `config.toml` taxonomy change, the running server serves a STALE taxonomy (dropdowns / term pages show old data). Fully restart it, and run `hugo server --disableFastRender` (fast render also skips re-rendering taxonomy/term pages).
- **`hugo --minify` strips quotes off attribute values** (`class="x"` → `class=x`). Account for this when grepping built HTML in `public/`.

## Debugging Layout Issues

When investigating visual layout or spacing issues (page bounce, misalignment, etc.):
1. **Always compare rendered HTML first** — use browser DevTools (F12) or view page source to compare the actual rendered output between working and broken pages
2. Don't assume CSS is the issue — structural differences (missing navbar partials, different template paths) often cause layout shifts
3. Look for missing partials or template elements rather than only analyzing CSS rules

## Browser & Device Support

Target **latest evergreen desktop browsers** (Chrome, Firefox, Safari, Edge from the current year) and the **most popular mobile devices** (iOS 15+, Android 12+). Optimize for:

- **Desktop**: 1920px+ width (primary), 1366px+ (secondary)
- **Mobile**: iPhone 12+ (iOS 15+), flagship Android devices (Android 12+)
- Do NOT support older browsers or devices — modern CSS/ES2020+ is acceptable
- Use CSS Grid, Flexbox, custom properties, and modern features freely; no IE11 polyfills needed

This approach means recommending modern web standards without legacy workarounds, avoiding polyfills or compatibility hacks, and optimizing for current device capabilities rather than historical support.

**Mobile is a hard requirement, not an afterthought.** Every page and every interactive element MUST be verified at phone width (iPhone 12, ~390px) before it is considered done - this explicitly includes the navigation (burger menu), the light/dark theme toggle, hero, cards, and any new component. Test by narrowing the browser or using DevTools device emulation (F12, then Ctrl+Shift+M). A feature that only works on desktop is not finished.

## Writing Style

- Do NOT use em-dashes (—). Use hyphens (-), spaces with hyphens, or rephrase sentences instead.

## Testing

Cloudflare Worker tests use Vitest with `@cloudflare/vitest-pool-workers` (`cloudflare-worker/test/index.spec.ts`). They mock the Worker's outbound `fetch` (Google siteverify + Resend) and cover CORS, every CAPTCHA verification gate, and the happy/error paths. `vitest.config.mts` must point at `wrangler.toml` (not `.jsonc`).

```sh
cd cloudflare-worker
npm run test        # watch mode
npm run test:run    # one-shot (used by CI and the predeploy gate)
```

A `predeploy` script runs the tests before `npm run deploy`, so a failing test blocks a manual Worker deploy.

## Deployment (CI/CD)

`.github/workflows/ci.yml` is one workflow with two jobs:
- **test** — runs the Worker vitest suite; on every push and PR.
- **deploy** — push to `main` (or manual `workflow_dispatch`) only, gated on `test` passing. Steps: `hugo --minify` → generate the Pagefind index (`npx pagefind --site public`) → fail fast if any file exceeds Cloudflare's 25 MiB per-file limit → deploy `./public` to Cloudflare Pages via `wrangler-action`.

Repo secrets: `CLOUDFLARE_API_TOKEN`, `CLOUDFLARE_ACCOUNT_ID`.

- **Cloudflare Pages constraint:** no single file may exceed **25 MiB**. Host large media externally (R2 / Stream / YouTube). The deploy job guards against this so you get a clear error with the filename instead of a cryptic wrangler failure.
- **Cloudflare Worker** (contact form) deploys separately and manually via `npm run deploy` in `cloudflare-worker/`.

## Key Dependencies

- **Hugo**: Static site generator (installed separately, not in repo)
- **wrangler**: Cloudflare Workers CLI and bundler
- **TypeScript**: Type checking for Worker code
- **Vitest**: Test runner for Worker tests
- **@cloudflare/vitest-pool-workers**: Vitest integration for Cloudflare Workers testing

## Design System & Theme (2026 redesign)

The site was reskinned with a CSS design-token system and a light/dark theme toggle. Design spec + plan live in `docs/superpowers/specs/2026-06-26-site-redesign-design.md` and `docs/superpowers/plans/2026-06-26-site-redesign.md`.

### Tokens & theme
- **Tokens** live at the top of `assets/css/custom.css` as `[data-theme="light"]` / `[data-theme="dark"]` custom-property blocks. ALL components reference tokens (`var(--accent)`, `--bg`, `--ink`, `--line`, `--card`, `--muted`, `--shadow`, etc.), never raw hex. Brand accent: light `#0078D7` (the logo's Microsoft/Azure blue), dark `#4ea6ff`.
- **Font:** Inter, set via `[params.font]` in `config.toml` (do not edit `css.html`).
- **Theme toggle:** light is the default. A no-flash inline script in `baseof.html` `<head>` sets `<html data-theme>` from `localStorage` key `acc-theme` BEFORE paint. `static/js/theme.js` flips the theme + syncs `aria-pressed`. The toggle's active state is driven purely by CSS (`[data-theme="light"] #theme-light{...}`), NOT a JS-added class - this avoids a per-navigation flicker. Don't reintroduce a JS `.active` class for the toggle.

### Navbar (unified)
- ONE `<header class="site-nav">` is rendered once from `baseof.html` via `partials/navbar.html`. The old triple-navbar setup (inline header + `navbar.html` + `navbar-clone.html`) was removed; `navbar-clone.html` is deleted. Do not re-add per-page navbar includes.
- The theme toggle markup sits INSIDE `<nav id="nav-links">` so that on mobile (<=860px) it collapses into the hamburger menu; on desktop it shows inline at the right.

### Homepage
- `layouts/index.html` includes `partials/home/`: `hero.html`, `topics.html`, `customers.html`, `stats.html`. The old autoplay video + student photo are gone.
- **Stats band** (`home/stats.html`) still has PLACEHOLDER numbers marked `TODO real number` (25+ years, 30+ courses). "2,000+ Teams trained" and "500+ Companies trained" are owner-confirmed. `static/js/stats-counter.js` count-up-animates them on scroll (honors reduced-motion).
- **Topic-card icons** are inline SVG using `currentColor` (so they theme + invert), EXCEPT the Scrum card, which uses a PNG alpha mask: `.ic-scrum{--ic:url("/images/icons/scrum-sprint.png")}` painted with `background:currentColor` via CSS `mask`. GitHub = official Octicons mark; Azure DevOps = official mark; AI = starburst.

### Customer logo marquee
- `partials/home/customers.html` holds a Hugo `slice` of `{f: slug, n: "Display Name"}` rendered TWICE (second copy `aria-hidden`) so the `translateX(-50%)` loops seamlessly. Files live in `static/images/customers/` (600x240 transparent PNG tiles).
- **Order = most-recognizable first** (a phone only shows a few). When adding logos: copy with `cp -n` (skip dupes), splice into the slice by popularity, and VERIFY the rotation matches disk (referenced slugs == files in `static/images/customers/`, no dupes/missing). Bump the `.logo-track` `animation` duration proportionally to logo count so per-logo speed stays constant (~226s for 152 logos).
- Logos are monochromed via `filter:grayscale(1)` on a light `--logo-band-bg` card (works in both themes), full color on hover. (A `brightness(0)` silhouette was rejected - it flattened detailed logos like Starbucks into blobs.)

### Dark-mode icons & logo
- Dark monochrome brand marks that vanish on a dark bg are inverted in dark mode via `[data-theme="dark"] img[src$="/images/.../x.png"]{filter:invert(1) brightness(1.25)}` rules in `custom.css` (covers `class.png`, `github.png`, `chatgpt.png`, `scrum-org-logo.png`). New dark monochrome icons need the same treatment or a light variant.
- The brand wordmark has a light variant `static/images/logo-150-dark.png`; nav + footer swap `.logo-light`/`.logo-dark` by theme.

### Image framing scoped to blog
- The bordered/drop-shadow frame (and the dark-mode light "matte") apply ONLY to blog post images: `.blog-single .content img:not([icons]):not([courseware])`. Other content pages (courses, scrum, about) show images unframed. Don't widen this back to all `.content img`.

### Blog extras
- **RSS:** `layouts/blog/rss.xml` is a custom feed template that sets the channel `<title>` to "Accentient" (the Hugo default was "Blog on Accentient"). Autodiscovery `<link>` is in `meta.html`; footer has an RSS icon.
- **Color blog art:** 36 book-derived posts had B&W figures; they were replaced with color versions from `C:\Blog\... \Professional Scrum Development with Azure DevOps\Content\Images` (matched by perceptual hashing, downscaled to ~1400px). If a post's figure looks wrong, re-match that one.

### Workflow note
- Per owner preference, work directly on `main` for this repo (no feature branches). Still verify (worker tests, clean `hugo --minify`, no file >25 MiB) and confirm before pushing, since pushing `main` deploys to production.
