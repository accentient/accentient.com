# Accentient.com Visual Redesign - Design Spec

Date: 2026-06-26
Status: Awaiting approval

## Goal

Make accentient.com look like a modern, polished "big boy" training/consulting site
without ripping off any competitor. Introduce a coherent design system (color tokens,
type, spacing, components), a refreshed homepage, and a site-wide **light/dark theme
toggle** that defaults to light. Every page and component must work on a phone.

This is a visual/structural reskin. It does not change site content, the Hugo content
model, the Cloudflare Worker, the build pipeline, taxonomies, or search behavior.

## Decisions locked with the owner

- **Theme:** light is the default everywhere. A light/dark toggle is present site-wide.
- **Dark scope:** site-wide and fully polished, **including the blog** - blog text,
  links, tables, cards, search, and content screenshots all read correctly in dark.
- **Accent:** derived from the logo's brand blue `#0078D7` (classic Microsoft/Azure blue).
  Lightened for the dark theme so it reads on a dark background.
- **Homepage:** replace the current hero (stretched title + student photo + autoplay
  video) with a clean hero (headline + two CTAs) followed by an icon-card grid and a
  stats band. **The autoplay intro video is removed.**
- **Stats band:** clearly-marked placeholder numbers the owner swaps in before launch.
- **Font:** Inter, loaded via the existing Google Fonts mechanism in `css.html`.
- **Logo:** reuse the real logo image; generate a light/white variant for the dark theme.

## Design system

### Color tokens (CSS custom properties)

Defined once, themed via `[data-theme="light"]` / `[data-theme="dark"]` on `<html>`.
All components reference tokens, never raw hex. This replaces the current hard-coded
`#fff`/`#000` + `!important` rules.

Light theme:
- `--bg` #ffffff, `--bg-soft` #f8fafc, `--ink` #0f172a, `--muted` #475569,
  `--line` #e2e8f0, `--card` #ffffff
- `--accent` #0078D7, `--accent-strong` #005fa8 (hover), `--accent-ink` #ffffff (text on accent)
- `--band` #0b1224 (dark stats band), `--band-ink` #ffffff

Dark theme:
- `--bg` #0a0e1a, `--bg-soft` #0f1525, `--ink` #e6edf6, `--muted` #94a3b8,
  `--line` #1e2740, `--card` #111a2e
- `--accent` #4ea6ff (lightened brand blue), `--accent-strong` #6db4ff, `--accent-ink` #04222a
- `--band` #0f1525, `--band-ink` #e6edf6
- `--shot-mat` #f3f5f8 (light matte behind content screenshots, see Blog/dark images)

### Type
- Family: Inter, system-ui fallback stack.
- Weights: 400/500/600/700/800.
- Headings tight tracking (letter-spacing ~ -0.02em), generous size; body 1rem/1.6.

### Spacing, radius, elevation
- Section vertical rhythm: ~72px desktop, ~48px mobile.
- Radius: 11-14px on cards/buttons, 999px on pills/toggle.
- Shadows are token-driven and theme-aware (soft neutral shadow in light, deeper in dark).
- `prefers-reduced-motion`: disable hover transforms/transitions.

## Theme toggle

- `<html data-theme>` controls everything. Default `light`.
- A tiny inline script in `<head>` (before paint) reads `localStorage` key `acc-theme`
  and sets `data-theme` to avoid a flash of the wrong theme.
- An IDE-style sun/moon pill in the navbar flips the theme and persists the choice.
- The toggle is reachable on mobile **without opening the burger menu** (it sits next to
  the burger, not inside the collapsed list).
- Accessible: real `<button>`s, `aria-label`s, visible focus ring, active-state indication.

## Navigation (unify the two navbars)

Today there are two navbar implementations (inline in `baseof.html` and
`partials/navbar.html`). Consolidate into **one** responsive partial used everywhere:
- Brand logo (light variant swapped in for the dark theme), nav links from
  `config.toml` `[params.navbar]`, the theme toggle, a primary "Contact"/"Talk to us" CTA.
- Sticky, translucent, blurred background using tokens.
- Below ~860px: links collapse into a burger dropdown; logo + toggle + burger stay in the bar.
- Remove the now-redundant second navbar and the `navbar-clone` workaround.

## Page-by-page plan

### Homepage (`layouts/index.html` + partials)
New structure, top to bottom:
1. Unified navbar.
2. Hero: eyebrow (topic list), headline, one-line subhead (the existing
   "training and consulting company..." line), two CTAs (View training / Contact).
   Subtle accent radial glow. **No video, no student photo.**
3. "What we teach" icon-card grid (AI, GitHub, Azure DevOps, Scrum; expandable to
   Claude/Training/Courseware). Cards link to existing section pages.
4. Stats band (dark) with placeholder numbers, clearly marked `TODO` for the owner.
5. Footer.

Retire `hero-body.html`, `section-video.html`, `hero-footer.html` usage on the homepage
(kept in repo but no longer included, or deleted if unused elsewhere).

### Section / landing / course pages (`single.html` via `partials/single/content.html`)
All top-level content pages (ai, claude, github, azure-devops, scrum, training,
courseware, about, contact, and the ~30 course pages like aqatp, cicd, mars) render
through `single.html`. They inherit the new system automatically once tokens, type,
and the navbar/footer are in place. Work here is restyling shared content elements:
- Title/subtitle/divider, headings, links, buttons, tables, lists, blockquotes,
  the existing `.scrum-grid`, `.courseware-grid`, `.timeline`, `.contact-form`, `.quote`,
  and `.content img` framing - all re-expressed in tokens so they theme correctly.
- The contact form keeps its existing Worker integration and honeypot; only styling changes.

### Blog (list + single + taxonomy + search)
- Blog cards already use a blue accent and hover lift; re-express them in tokens so they
  work in both themes (the card's hard-coded blues/greys move to `--accent`/`--line`/`--card`).
- List page: search box, tag/author filters, pagination - retheme via tokens
  (Pagefind UI variables already centralized in `.blog-search`).
- Single post: body typography in tokens; `data-pagefind-body` unchanged.
- **Dark-mode screenshots (the "fully polished" piece):** the ~1,090 imported posts are
  full of light-UI screenshots. In dark mode, content images get a light **matte frame**
  (`--shot-mat` background + padding + subtle border) so they read as intentional cards
  rather than glaring white rectangles, and remain legible. Selectors continue to exclude
  `/images/icons/` and `/images/courseware/`. This is CSS-only and applies across all posts
  at once - no per-post editing.

### Footer (`partials/footer.html`)
Restyle to tokens (theme-aware), keep the logo (light variant on dark), nav links,
social icons, copyright, and the auto-stamped build version.

## Files touched (anticipated)

- `assets/css/custom.css` - the bulk: introduce tokens, theme blocks, components;
  remove the `!important` white/black hard-coding that breaks theming.
- `config.toml` - `[params.font]` set to Inter; possibly hero copy/CTA params.
- `layouts/_default/baseof.html` - no-flash theme script, unified navbar include,
  `data-theme` plumbing, body class handling.
- `layouts/partials/navbar.html` (+ remove `navbar-clone.html`) - unified responsive nav
  with theme toggle.
- `layouts/index.html` + `layouts/partials/hero*.html` - new homepage sections.
- `layouts/partials/footer.html`, `layouts/partials/single/content.html`,
  `layouts/blog/*`, `layouts/partials/blog-card.html` - token restyle.
- `static/js/` - small `theme-toggle.js` (or inline) for the toggle + burger.
- `static/images/` - generated light/white logo variant for dark theme.

## Non-goals / out of scope
- No content rewrites, no information-architecture changes, no new pages.
- No Cloudflare Worker changes.
- No Bulma removal (we layer tokens over it; a full de-Bulma is a separate future project).
- No per-post manual editing of the 1,090 blog posts (dark handling is global CSS).

## Risks & mitigations
- **`!important` hard-coding fights dark mode.** Mitigation: systematically replace with
  tokens; audit `custom.css` for `#fff`/`#000`/`!important` and migrate.
- **Two navbars / Bulma coupling.** Mitigation: unify into one partial; verify hero and
  blog pages still align (CLAUDE.md notes navbar partials affect layout consistency).
- **Build safety.** `[minify] disableJS = true` must stay (imported posts have dead inline
  JS). New JS lives in external static files. Keep CSS in the Hugo Pipes bundle.
- **Logo on dark.** Mitigation: generate a white-text logo variant; swap by theme.
- **Large-file guard.** No new media that breaches Cloudflare's 25 MiB per-file limit.

## Verification plan
- `hugo --minify` builds clean; Pagefind index still generates.
- Manual visual pass in **both themes** at **desktop (1920/1366) and phone (~390px)** on a
  representative set: homepage, one section page (e.g. training), one course page (aqatp),
  blog list, a blog post with screenshots, tags index, contact form.
- Toggle: defaults light, flips correctly, persists across reloads, no flash, reachable on mobile.
- Accessibility: AA contrast for text/accent in both themes; visible focus; reduced-motion honored.
- Confirm no file exceeds 25 MiB before deploy.

## Rollout
- Implement on a feature branch; preview locally with `hugo --minify -d public` +
  `npx pagefind --site public --serve` (so blog search works in preview).
- Remove the temporary `static/mockup-*.html` preview files before finishing.
- Merge to `main` triggers the existing CI deploy.
