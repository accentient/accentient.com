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
2. Verifies the token against Google's reCAPTCHA API (minimum score 0.5)
3. Sends the verified form data to info@accentient.com via Resend API
4. Returns CORS headers for cross-origin requests

**Environment variables** (required in Cloudflare):
- `RECAPTCHA_SECRET` — Google reCAPTCHA secret key
- `RESEND_API_KEY` — Resend email API key

**CORS**: Currently allows all origins (`Access-Control-Allow-Origin: *`). Change to specific domain in production.

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
- Custom stylesheets: `static/css/custom.css` overlays additional styles
- Custom layouts in `layouts/` override theme defaults
- Navbar links configured via `config.toml` `[params.navbar]` array

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

## Writing Style

- Do NOT use em-dashes (—). Use hyphens (-), spaces with hyphens, or rephrase sentences instead.

## Testing

Cloudflare Worker tests use Vitest with `@cloudflare/vitest-pool-workers`:
- Unit-style tests: mock the worker directly with `env` and `ExecutionContext`
- Integration-style tests: use `SELF.fetch()` for full request handling

```sh
cd cloudflare-worker
npm run test
```

## Deployment

- **Hugo site**: Static files generated in `/public` — deploy to any static host (Cloudflare Pages, etc.)
- **Cloudflare Worker**: Deploy via `npm run deploy` in cloudflare-worker/ (requires `wrangler` configured with Cloudflare account credentials)

## Key Dependencies

- **Hugo**: Static site generator (installed separately, not in repo)
- **wrangler**: Cloudflare Workers CLI and bundler
- **TypeScript**: Type checking for Worker code
- **Vitest**: Test runner for Worker tests
- **@cloudflare/vitest-pool-workers**: Vitest integration for Cloudflare Workers testing
