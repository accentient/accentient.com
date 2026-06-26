# Accentient.com Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Reskin accentient.com with a brand-blue design-token system, Inter typography, a unified responsive navbar, a rebuilt homepage, and a site-wide light/dark theme toggle (light default) that is polished on every page including the blog.

**Architecture:** Introduce CSS custom properties themed via `[data-theme]` on `<html>`, set before paint by a tiny inline script and flipped by a small vanilla script that also drives the mobile burger. All components reference tokens instead of hard-coded colors. Collapse the three overlapping navbars into one sticky token-based navbar rendered once from `baseof.html`. Layer everything in `assets/css/custom.css` (concatenated last in the Hugo Pipes bundle, so it wins).

**Tech Stack:** Hugo (hugo-fresh theme / Bulma), Hugo Pipes CSS bundle, vanilla JS, Inter via Google Fonts, PowerShell for logo asset generation.

## Global Constraints

- No em-dashes (-) anywhere. Use hyphens or rephrase. (User + project rule.)
- `[minify] disableJS = true` MUST stay in `config.toml` (imported posts have dead inline JS; removing it breaks `hugo --minify`).
- New JS lives in external `static/js/` files; CSS stays in the Hugo Pipes bundle (`bulma.css`, `style.css`, `custom.css` via `css.html`).
- Light is the default theme everywhere. Toggle persists in `localStorage` key `acc-theme`. No flash of wrong theme on load.
- Mobile is a hard gate: every page and interactive element (nav burger, theme toggle, hero, cards) MUST be verified at ~390px before a task is done.
- Brand accent: light `#0078D7` / hover `#005fa8`; dark `#4ea6ff` / hover `#6db4ff`.
- Target modern evergreen browsers only; CSS Grid/Flexbox/custom properties are fine. No polyfills.
- No single file may exceed 25 MiB (Cloudflare Pages limit).
- All components reference tokens, never raw hex (outside the token definitions themselves).

## File Structure

- `config.toml` - add `[params.font]` (Inter); hero copy/CTA params for the new homepage.
- `assets/css/custom.css` - token blocks (`:root`, `[data-theme=...]`), base element theming, component restyles. Replaces the hard-coded `#fff`/`#000`/`!important` rules.
- `layouts/_default/baseof.html` - no-flash theme script, `data-theme` plumbing, render the single unified navbar, include theme JS.
- `layouts/partials/navbar.html` - rewritten as the single sticky responsive navbar (logo + links + theme toggle + CTA + burger).
- `layouts/partials/navbar-clone.html` - removed from use (clone machinery deleted).
- `layouts/index.html` + `layouts/partials/home/hero.html`, `topics.html`, `stats.html` - rebuilt homepage.
- `layouts/partials/single/single.html`, `layouts/blog/list.html`, `layouts/blog/single.html` - drop the per-page navbar includes (baseof renders it now).
- `layouts/partials/footer.html` - token restyle.
- `layouts/partials/blog-card.html` - minor class hooks if needed (mostly CSS).
- `static/js/theme.js` - theme toggle + burger behavior (vanilla).
- `static/images/logo-150-dark.png` - generated light logo variant for the dark theme.

---

### Task 1: Design tokens, Inter font, and base theming

**Files:**
- Modify: `config.toml` (add `[params.font]`)
- Modify: `assets/css/custom.css:1-54` (replace hard-coded html/body/heading rules) and prepend token system
- Modify: `layouts/_default/baseof.html:1-2` (no-flash script + data-theme)

**Interfaces:**
- Produces: CSS custom properties available globally: `--bg --bg-soft --ink --muted --line --card --accent --accent-strong --accent-ink --band --band-ink --shot-mat --radius --shadow`. `<html data-theme>` set to `light` by default before paint.

- [ ] **Step 1: Switch the site font to Inter**

In `config.toml`, add under `[params]` (anywhere in the params block, e.g. after the `Description` line):

```toml
[params.font]
name = "Inter"
sizes = [400, 500, 600, 700, 800]
```

`css.html` already builds the Google Fonts URL from these values, so no template change is needed.

- [ ] **Step 2: Add the no-flash theme script to baseof**

In `layouts/_default/baseof.html`, replace:

```html
<!DOCTYPE html>
<html lang="{{ .Site.Language.Lang }}">
  <head>
    {{ partial "meta.html" . }}
```

with:

```html
<!DOCTYPE html>
<html lang="{{ .Site.Language.Lang }}">
  <head>
    <script>
      // Set theme before paint to avoid a flash. Default = light.
      (function(){try{var t=localStorage.getItem('acc-theme')||'light';
      document.documentElement.setAttribute('data-theme',t);}catch(e){
      document.documentElement.setAttribute('data-theme','light');}})();
    </script>
    {{ partial "meta.html" . }}
```

- [ ] **Step 3: Prepend the token system to custom.css**

Insert at the very top of `assets/css/custom.css` (before the current line 1):

```css
/* ===== DESIGN TOKENS ===== */
[data-theme="light"]{
  --bg:#ffffff; --bg-soft:#f8fafc; --ink:#0f172a; --muted:#475569;
  --line:#e2e8f0; --card:#ffffff;
  --accent:#0078D7; --accent-strong:#005fa8; --accent-ink:#ffffff;
  --band:#0b1224; --band-ink:#ffffff; --band-muted:#94a3b8;
  --shot-mat:#ffffff;
  --radius:13px; --pill:999px;
  --shadow:0 16px 34px rgba(15,23,42,.10);
  --shadow-sm:0 2px 6px rgba(15,23,42,.08);
  --nav-bg:rgba(255,255,255,.85);
}
[data-theme="dark"]{
  --bg:#0a0e1a; --bg-soft:#0f1525; --ink:#e6edf6; --muted:#94a3b8;
  --line:#1e2740; --card:#111a2e;
  --accent:#4ea6ff; --accent-strong:#6db4ff; --accent-ink:#04222a;
  --band:#0f1525; --band-ink:#e6edf6; --band-muted:#94a3b8;
  --shot-mat:#f3f5f8;
  --radius:13px; --pill:999px;
  --shadow:0 18px 40px rgba(0,0,0,.5);
  --shadow-sm:0 2px 10px rgba(0,0,0,.4);
  --nav-bg:rgba(10,14,26,.78);
}
html, body{ background:var(--bg); color:var(--ink);
  transition:background .25s ease, color .25s ease; }
@media (prefers-reduced-motion: reduce){ *{ transition:none !important; } }
/* ===== END TOKENS ===== */
```

- [ ] **Step 4: Replace the hard-coded html/body/heading rules**

In `assets/css/custom.css`, replace this current block (lines ~1-54):

```css
html, body {
  background-color: #fff !important;
  color: #000 !important;
  height: 100%;
  margin: 0;
  padding: 0;
}

html {
  overflow-y: scroll;
}

body.home {
  background-size: cover;
  background-attachment: fixed;
  background-color: white !important;
  color: #fff !important;
}

h1, h2, h3 {
  color: #000 !important;
}
```

with:

```css
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
}

html {
  overflow-y: scroll;
}

h1, h2, h3 {
  color: var(--ink);
}
```

Then delete the now-conflicting `body.home h1,h2,h3 { color:black !important }` block and the `.content strong { color:#000 !important }` / `body.home .content strong` blocks (replace all four declarations' color values with `var(--ink)` by removing the overrides; `strong` inherits `--ink` fine). Specifically remove lines that force `color: black !important` / `color:#000 !important` for `.home` headings and `.content strong`.

- [ ] **Step 5: Build to verify it compiles and defaults to light**

Run: `hugo --minify`
Expected: exits 0, no template/CSS errors, `public/` regenerated.

- [ ] **Step 6: Visual check (light default)**

Run: `hugo server` and open `http://localhost:1313/`.
Expected: page renders in Inter, white background, dark text. In DevTools, `<html>` has `data-theme="light"`. Manually setting `data-theme="dark"` on `<html>` flips background to dark navy.

- [ ] **Step 7: Commit**

```bash
git add config.toml assets/css/custom.css layouts/_default/baseof.html
git commit -m "Add design tokens, Inter font, and theme plumbing"
```

---

### Task 2: Theme toggle + unified responsive navbar

**Files:**
- Modify: `layouts/_default/baseof.html:27-55` (replace inline header with navbar partial)
- Rewrite: `layouts/partials/navbar.html`
- Modify: `layouts/partials/single/single.html`, `layouts/blog/list.html:3-4`, `layouts/blog/single.html`, `layouts/partials/hero.html` (remove navbar/clone includes)
- Create: `static/js/theme.js`
- Modify: `layouts/partials/javascript.html` (include theme.js)
- Modify: `assets/css/custom.css` (navbar + toggle styles, replace old navbar rules)

**Interfaces:**
- Consumes: tokens from Task 1.
- Produces: one `<header class="site-nav">` rendered once per page from baseof; `#theme-light`/`#theme-dark` buttons; `#nav-burger` toggling `.site-nav__links.open`.

- [ ] **Step 1: Rewrite navbar.html as the unified nav**

Replace the entire contents of `layouts/partials/navbar.html` with:

```html
<header class="site-nav">
  <div class="site-nav__inner">
    <a class="site-nav__brand" href="/">
      <img class="logo-light" src="{{ "images/logo-150.png" | relURL }}" alt="{{ .Site.Title }}" width="150" height="70">
      <img class="logo-dark" src="{{ "images/logo-150-dark.png" | relURL }}" alt="{{ .Site.Title }}" width="150" height="70">
    </a>
    <nav class="site-nav__links" id="nav-links">
      {{- range .Site.Params.navbar }}
      <a href="{{ .url }}">{{ .title }}</a>
      {{- end }}
    </nav>
    <div class="theme-switch" role="group" aria-label="Color theme">
      <button id="theme-light" type="button" aria-label="Light mode" title="Light">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>
      </button>
      <button id="theme-dark" type="button" aria-label="Dark mode" title="Dark">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>
      </button>
    </div>
    <button class="site-nav__burger" id="nav-burger" type="button" aria-label="Menu" aria-expanded="false">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><path d="M3 6h18M3 12h18M3 18h18"/></svg>
    </button>
  </div>
</header>
```

- [ ] **Step 2: Render the navbar once from baseof**

In `layouts/_default/baseof.html`, replace the whole inline `<header class="navbar ...">...</header>` block (current lines ~27-55) with:

```html
    <!-- Navigation Bar -->
    {{ partial "navbar.html" . }}
```

- [ ] **Step 3: Remove duplicate navbar includes from page partials**

In `layouts/partials/single/single.html`, replace:

```html
{{ partial "navbar.html" . }}
{{ partial "navbar-clone.html" . }}
{{ partial "single/content.html" . }}
```

with:

```html
{{ partial "single/content.html" . }}
```

In `layouts/blog/list.html`, delete the two lines:

```html
{{ partial "navbar.html" . }}
{{ partial "navbar-clone.html" . }}
```

In `layouts/partials/hero.html`, delete the lines `{{ partial "navbar.html" . }}` and `{{ partial "navbar-clone.html" . }}` (the hero keeps only `hero-body` / `hero-footer`, and Task 3 replaces the hero anyway).

`layouts/blog/single.html` has no navbar include to remove (it relies on baseof) - leave it.

- [ ] **Step 4: Create the theme + burger script**

Create `static/js/theme.js`:

```js
(function () {
  var root = document.documentElement;
  var KEY = 'acc-theme';
  var bL = document.getElementById('theme-light');
  var bD = document.getElementById('theme-dark');

  function paint() {
    var t = root.getAttribute('data-theme');
    if (bL) bL.classList.toggle('active', t === 'light');
    if (bD) bD.classList.toggle('active', t === 'dark');
  }
  function setTheme(t) {
    root.setAttribute('data-theme', t);
    try { localStorage.setItem(KEY, t); } catch (e) {}
    paint();
  }
  if (bL) bL.addEventListener('click', function () { setTheme('light'); });
  if (bD) bD.addEventListener('click', function () { setTheme('dark'); });
  paint();

  var burger = document.getElementById('nav-burger');
  var links = document.getElementById('nav-links');
  if (burger && links) {
    burger.addEventListener('click', function () {
      var open = links.classList.toggle('open');
      burger.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
})();
```

- [ ] **Step 5: Include theme.js**

In `layouts/partials/javascript.html`, add as the last line:

```html
<script src="{{ "js/theme.js" | relURL }}"></script>
```

- [ ] **Step 6: Add navbar + toggle styles; remove old navbar rules**

In `assets/css/custom.css`, delete the old navbar rules (the `.navbar`, `.navbar .navbar-item`, `.navbar-item`, `.navbar-item img`, `.navbar.is-fresh .navbar-brand img`, and the `--bulma-navbar-item-img-max-height` `:root` block, current lines ~113-149). Append this block:

```css
/* ===== UNIFIED NAVBAR ===== */
.site-nav{position:sticky;top:0;z-index:60;background:var(--nav-bg);
  backdrop-filter:saturate(180%) blur(12px);border-bottom:1px solid var(--line);}
.site-nav__inner{max-width:1180px;margin:0 auto;padding:0 24px;display:flex;
  align-items:center;gap:26px;min-height:72px;}
.site-nav__brand img{display:block;height:auto;max-height:54px;width:auto;}
.logo-dark{display:none;}
[data-theme="dark"] .logo-light{display:none;}
[data-theme="dark"] .logo-dark{display:block;}
.site-nav__links{display:flex;gap:20px;margin-left:auto;font-weight:500;font-size:.92rem;}
.site-nav__links a{color:var(--muted);text-decoration:none;}
.site-nav__links a:hover{color:var(--accent);}
.theme-switch{display:inline-flex;align-items:center;background:var(--bg-soft);
  border:1px solid var(--line);border-radius:var(--pill);padding:3px;gap:2px;}
.theme-switch button{border:0;background:transparent;cursor:pointer;width:34px;height:30px;
  border-radius:var(--pill);display:flex;align-items:center;justify-content:center;color:var(--muted);}
.theme-switch button svg{width:17px;height:17px;}
.theme-switch button.active{background:var(--accent);color:var(--accent-ink);}
.theme-switch button:focus-visible{outline:2px solid var(--accent);outline-offset:2px;}
.site-nav__burger{display:none;border:0;background:transparent;color:var(--ink);
  cursor:pointer;width:42px;height:42px;align-items:center;justify-content:center;}
.site-nav__burger svg{width:24px;height:24px;}
@media(max-width:860px){
  .site-nav__inner{flex-wrap:wrap;gap:12px;min-height:0;padding-top:12px;padding-bottom:12px;}
  .site-nav__burger{display:flex;order:4;margin-left:auto;}
  .theme-switch{order:3;}
  .site-nav__brand{order:1;}
  .site-nav__links{order:9;flex-basis:100%;flex-direction:column;gap:0;margin-left:0;
    display:none;border-top:1px solid var(--line);padding-top:6px;}
  .site-nav__links.open{display:flex;}
  .site-nav__links a{padding:11px 2px;border-bottom:1px solid var(--line);font-size:1rem;}
}
/* ===== END NAVBAR ===== */
```

- [ ] **Step 7: Build and verify**

Run: `hugo --minify`
Expected: exits 0, no errors.

- [ ] **Step 8: Visual check, desktop + mobile, both themes**

Run `hugo server`, open `http://localhost:1313/`:
- Exactly one navbar appears (no duplicate/cloned bar on scroll).
- Sun/moon pill flips the whole page light/dark and survives a reload.
- Narrow to ~390px (DevTools device toolbar): links collapse to a burger; the toggle stays visible next to the burger and still works without opening the menu.
- Check the same on a section page (`/training/`) and `/blog/`.

- [ ] **Step 9: Commit**

```bash
git add layouts/_default/baseof.html layouts/partials/navbar.html layouts/partials/single/single.html layouts/blog/list.html layouts/partials/hero.html static/js/theme.js layouts/partials/javascript.html assets/css/custom.css
git commit -m "Unify navbar into one sticky token-based bar with theme toggle"
```

---

### Task 3: Rebuild the homepage

**Files:**
- Rewrite: `layouts/index.html`
- Create: `layouts/partials/home/hero.html`, `layouts/partials/home/topics.html`, `layouts/partials/home/stats.html`
- Modify: `assets/css/custom.css` (homepage styles; remove stale `.home`/hero/landing-caption/video rules)

**Interfaces:**
- Consumes: tokens (Task 1), navbar rendered by baseof (Task 2).
- Produces: homepage composed of hero + topics + stats + footer. No video, no student photo.

- [ ] **Step 1: Rewrite index.html**

Replace the entire contents of `layouts/index.html` with:

```html
{{ define "main" }}
  {{ partial "home/hero.html" . }}
  {{ partial "home/topics.html" . }}
  {{ partial "home/stats.html" . }}
{{ end }}
```

(The footer is already rendered by `baseof.html`, so it is not included here.)

- [ ] **Step 2: Create the hero partial**

Create `layouts/partials/home/hero.html`:

```html
<section class="home-hero">
  <div class="home-wrap">
    <span class="eyebrow">AI &middot; GitHub &middot; Azure DevOps &middot; Scrum</span>
    <h1 class="home-hero__title">Ship better software, faster.</h1>
    <p class="home-hero__sub">Accentient is a training and consulting company that helps teams deliver high-quality products quickly and efficiently, with hands-on, expert-led instruction.</p>
    <div class="home-hero__cta">
      <a class="btn btn-primary" href="/training/">View training &rarr;</a>
      <a class="btn btn-ghost" href="/contact/">Talk to us</a>
    </div>
  </div>
</section>
```

- [ ] **Step 3: Create the topics partial**

Create `layouts/partials/home/topics.html`:

```html
<section class="home-section">
  <div class="home-wrap">
    <div class="sec-head">
      <h2>What we teach</h2>
      <p>Practical, role-based training across the tools and practices your teams actually use.</p>
    </div>
    <div class="topic-grid">
      <a class="topic-card" href="/ai/">
        <span class="topic-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3l1.9 5.8H20l-4.9 3.6 1.9 5.8L12 14.6 7 18.2l1.9-5.8L4 8.8h6.1z"/></svg></span>
        <h3>AI</h3><p>Practical AI for software teams, agents, and modern delivery.</p>
      </a>
      <a class="topic-card" href="/github/">
        <span class="topic-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6 0C7.2 2.3 6.1 2.6 6.1 2.6a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4.7 9c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21"/></svg></span>
        <h3>GitHub</h3><p>Actions, Copilot, advanced security, and platform engineering.</p>
      </a>
      <a class="topic-card" href="/azure-devops/">
        <span class="topic-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 12h4l3 8 4-16 3 8h4"/></svg></span>
        <h3>Azure DevOps</h3><p>Boards, Pipelines, and end-to-end CI/CD that scales.</p>
      </a>
      <a class="topic-card" href="/scrum/">
        <span class="topic-ic"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.2-8.6"/><path d="M21 4v6h-6"/></svg></span>
        <h3>Scrum</h3><p>Professional Scrum, taught by a Scrum.org steward.</p>
      </a>
    </div>
  </div>
</section>
```

- [ ] **Step 4: Create the stats partial (clearly-marked placeholders)**

Create `layouts/partials/home/stats.html`:

```html
{{/* PLACEHOLDER NUMBERS - owner to replace before launch. */}}
<section class="home-stats">
  <div class="home-wrap">
    <div class="stat-grid">
      <div class="stat"><div class="stat-n">1,000+</div><div class="stat-l">Teams trained <!-- TODO real number --></div></div>
      <div class="stat"><div class="stat-n">25+</div><div class="stat-l">Years in practice <!-- TODO real number --></div></div>
      <div class="stat"><div class="stat-n">30+</div><div class="stat-l">Courses <!-- TODO real number --></div></div>
      <div class="stat"><div class="stat-n">100%</div><div class="stat-l">Expert-led</div></div>
    </div>
  </div>
</section>
```

- [ ] **Step 5: Remove stale homepage CSS**

In `assets/css/custom.css`, delete these now-unused blocks: `body.home {...}`, `.hero, .main, .section, section {...}` (the transparent override), `#main, #content {...}`, `.hero-body`, `.landing-caption`, `.title-wrapper` + `.title-wrapper h1.title`, `.title.section-title`, `.custom-title`, `.hero .subtitle`, `.landing-caption a.button`, and the `.video-box` / `.video-text` blocks (video is removed). Also remove their mobile counterparts in the `@media (max-width:768px)` block (`.custom-title`, `.hero .subtitle`, `.video-box`, `.video-text`, the landscape `.video-box` rule).

- [ ] **Step 6: Append homepage + shared component CSS**

Append to `assets/css/custom.css`:

```css
/* ===== SHARED LAYOUT + BUTTONS ===== */
.home-wrap{max-width:1180px;margin:0 auto;padding:0 24px;}
.btn{display:inline-flex;align-items:center;gap:8px;padding:13px 24px;border-radius:11px;
  font-weight:600;font-size:1rem;text-decoration:none;transition:transform .15s ease, background .15s ease;}
.btn-primary{background:var(--accent);color:var(--accent-ink);}
.btn-primary:hover{background:var(--accent-strong);transform:translateY(-2px);}
.btn-ghost{border:1.5px solid var(--line);color:var(--ink);}
.btn-ghost:hover{border-color:var(--accent);color:var(--accent);}
.eyebrow{display:inline-block;font-weight:600;font-size:.8rem;letter-spacing:.08em;
  text-transform:uppercase;color:var(--accent);
  background:color-mix(in srgb, var(--accent) 10%, transparent);
  border:1px solid color-mix(in srgb, var(--accent) 22%, transparent);
  padding:6px 14px;border-radius:var(--pill);margin-bottom:20px;}
.sec-head{text-align:center;max-width:60ch;margin:0 auto 42px;}
.sec-head h2{font-size:clamp(1.8rem,3vw,2.4rem);font-weight:800;letter-spacing:-.02em;margin:0 0 10px;color:var(--ink);}
.sec-head p{color:var(--muted);font-size:1.1rem;margin:0;}

/* ===== HOMEPAGE ===== */
.home-hero{padding:92px 0 64px;position:relative;overflow:hidden;}
.home-hero::before{content:"";position:absolute;inset:0;pointer-events:none;
  background:radial-gradient(60% 60% at 82% -5%, color-mix(in srgb, var(--accent) 16%, transparent), transparent 70%);}
.home-hero__title{font-size:clamp(2.4rem,5vw,3.6rem);line-height:1.05;letter-spacing:-.03em;
  font-weight:800;margin:0 0 18px;max-width:16ch;color:var(--ink);}
.home-hero__sub{font-size:1.2rem;color:var(--muted);max-width:56ch;margin:0 0 30px;}
.home-hero__cta{display:flex;gap:14px;flex-wrap:wrap;}
.home-section{padding:64px 0;}
.topic-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:20px;}
.topic-card{background:var(--card);border:1px solid var(--line);border-top:3px solid var(--accent);
  border-radius:var(--radius);padding:26px 22px;text-decoration:none;color:var(--ink);
  transition:transform .18s ease, box-shadow .18s ease;}
.topic-card:hover{transform:translateY(-5px);box-shadow:var(--shadow);}
.topic-ic{width:46px;height:46px;border-radius:11px;display:flex;align-items:center;justify-content:center;
  margin-bottom:14px;color:var(--accent);
  background:color-mix(in srgb, var(--accent) 12%, transparent);
  border:1px solid color-mix(in srgb, var(--accent) 20%, transparent);}
.topic-ic svg{width:24px;height:24px;}
.topic-card h3{margin:0 0 6px;font-size:1.15rem;font-weight:700;}
.topic-card p{margin:0;color:var(--muted);font-size:.95rem;}
.home-stats{background:var(--band);padding:56px 0;}
.stat-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:24px;text-align:center;}
.stat-n{font-size:2.6rem;font-weight:800;letter-spacing:-.02em;
  background:linear-gradient(90deg,var(--accent),#a78bfa);
  -webkit-background-clip:text;background-clip:text;color:transparent;}
.stat-l{color:var(--band-muted);font-size:.95rem;margin-top:4px;}
@media(max-width:860px){
  .topic-grid{grid-template-columns:1fr;}
  .stat-grid{grid-template-columns:repeat(2,1fr);}
  .home-hero{padding:54px 0 44px;}
  .home-section{padding:44px 0;}
}
/* ===== END HOMEPAGE ===== */
```

- [ ] **Step 7: Build and verify**

Run: `hugo --minify`
Expected: exits 0; `public/index.html` contains `home-hero` and no `video-box`.

- [ ] **Step 8: Visual check, both themes, desktop + mobile**

Open `http://localhost:1313/`:
- Hero headline + two CTAs render; no video; no student photo.
- Topic cards link to `/ai/`, `/github/`, `/azure-devops/`, `/scrum/` and lift on hover.
- Stats band shows placeholders.
- Toggle flips the whole homepage; at ~390px the topic cards stack and stats go 2-up.

- [ ] **Step 9: Commit**

```bash
git add layouts/index.html layouts/partials/home/ assets/css/custom.css
git commit -m "Rebuild homepage: clean hero, topic cards, stats band (no video)"
```

---

### Task 4: Restyle section, course, and content pages

**Files:**
- Modify: `layouts/partials/single/content.html` (wrapper class for width/tokens)
- Modify: `assets/css/custom.css` (content typography, tables, grids, timeline, quote, contact-form, content img, tags; all token-based)

**Interfaces:**
- Consumes: tokens; the ~35 pages rendering through `single.html`.
- Produces: token-themed `.content` and shared content components.

- [ ] **Step 1: Constrain content width**

In `layouts/partials/single/content.html`, replace `<section class="section is-medium pb-0">` with `<section class="section is-medium pb-0 page-section">`. (Adds a hook without breaking Bulma spacing.)

- [ ] **Step 2: Replace token-conflicting content rules**

In `assets/css/custom.css`, update these existing rules to use tokens:
- `.content img:not(...)` border: change `border: 1px solid #000;` to `border:1px solid var(--line);` and `box-shadow: 2px 2px 10px rgba(0,0,0,0.5);` to `box-shadow:var(--shadow-sm);`
- `table th { color:#000 !important }` (both occurrences) change to `table th{ color:var(--ink); }`
- `.quote` `border-left:4px solid #ccc;` change to `border-left:4px solid var(--line);` and add `color:var(--muted);`
- `.timeline-content{ background-color:#f9f9f9; }` change to `background:var(--bg-soft);` and `box-shadow:var(--shadow-sm);`; `.timeline::after{ background-color:#ccc; }` to `var(--line)`; `.timeline-item::after{ background-color:#fff; border:4px solid #007acc; }` to `background:var(--bg);border:4px solid var(--accent);`
- `.courseware-grid img{ border:1px solid black; }` change to `border:1px solid var(--line);`

- [ ] **Step 3: Append content theming**

Append to `assets/css/custom.css`:

```css
/* ===== CONTENT PAGES ===== */
.page-section .container{max-width:1000px;}
.content{color:var(--ink);}
.content h1,.content h2,.content h3,.content h4{color:var(--ink);letter-spacing:-.01em;}
.content a{color:var(--accent);text-decoration:none;}
.content a:hover{color:var(--accent-strong);text-decoration:underline;}
.content table{width:100%;border-collapse:collapse;}
.content th,.content td{border:1px solid var(--line);padding:.5rem .65rem;}
.content thead th{background:var(--bg-soft);}
.content blockquote{border-left:4px solid var(--accent);background:var(--bg-soft);
  padding:.75rem 1rem;color:var(--muted);border-radius:0 8px 8px 0;}
.section-title{color:var(--ink);}
.subtitle{color:var(--muted) !important;}
.divider{height:1px;background:var(--line);border:0;margin:1rem 0 1.5rem;}
/* ===== END CONTENT PAGES ===== */
```

- [ ] **Step 4: Build and verify**

Run: `hugo --minify`
Expected: exits 0.

- [ ] **Step 5: Visual check, both themes, desktop + mobile**

Open these and toggle light/dark on each, then narrow to ~390px:
- `/training/` (tables-heavy), `/aqatp/` (course page), `/scrum/` (`.scrum-grid`), `/courseware/` (`.courseware-grid`), `/contact/` (form), `/about/`.
Expected: text legible in both themes; tables, grids, timeline, quotes, the contact form, and images all read correctly with no black-on-dark or white-glare artifacts. Links use brand accent.

- [ ] **Step 6: Commit**

```bash
git add layouts/partials/single/content.html assets/css/custom.css
git commit -m "Restyle section, course, and content pages with theme tokens"
```

---

### Task 5: Restyle the blog and polish dark-mode screenshots

**Files:**
- Modify: `assets/css/custom.css` (blog cards, filters, search, pagination, tags, blog `.content img` matte for dark)
- Modify: `layouts/blog/single.html:2` (drop inline padding hack in favor of class)

**Interfaces:**
- Consumes: tokens; existing blog templates and `.blog-search` Pagefind variables.
- Produces: token-themed blog; dark-mode screenshot matte so imported light screenshots don't glare.

- [ ] **Step 1: Migrate blog-card colors to tokens**

In `assets/css/custom.css`, in the `.blog-card` rules replace hard-coded colors with tokens:
- `.blog-card{ background-color:#fff; border:1px solid #d8e6f2; border-top:4px solid #1a73e8; box-shadow:0 2px 6px rgba(0,0,0,0.08); }` -> `background:var(--card);border:1px solid var(--line);border-top:4px solid var(--accent);box-shadow:var(--shadow-sm);`
- `.blog-card:hover{ box-shadow:0 10px 22px rgba(0,0,0,0.13); border-top-color:#0b57c2; }` -> `box-shadow:var(--shadow);border-top-color:var(--accent-strong);`
- `.blog-card .title.is-5 a{ color:#0a3d62; }` -> `color:var(--ink);`
- `.blog-card .blog-meta{ color:#333; }` -> `color:var(--muted);`
- `.blog-card .read-more{ color:#1a73e8; }` -> `color:var(--accent);`

- [ ] **Step 2: Migrate tags, filters, search labels, result count to tokens**

In `assets/css/custom.css`:
- `.tag{ border:1px solid #000; color:#000; }` -> `border:1px solid var(--line);color:var(--ink);background:transparent;` and `.tag:hover{ background:var(--accent);color:var(--accent-ink);border-color:var(--accent); }`
- `.author-tag{ border:1px solid #000; color:#000; }` and `:hover` -> same token treatment as `.tag`.
- `.blog-result-count{ color:#555; }` -> `color:var(--muted);`
- `.blog-search{ --pagefind-ui-primary:#1a73e8; --pagefind-ui-text:#0a3d62; --pagefind-ui-background:#fff; --pagefind-ui-border:#d8e6f2; }` -> use tokens: `--pagefind-ui-primary:var(--accent); --pagefind-ui-text:var(--ink); --pagefind-ui-background:var(--card); --pagefind-ui-border:var(--line);`

- [ ] **Step 3: Add the dark-mode screenshot matte**

Append to `assets/css/custom.css`:

```css
/* ===== BLOG DARK-MODE SCREENSHOT MATTE =====
   Imported posts are full of light-UI screenshots. In dark mode, sit each
   content image on a light matte so it reads as an intentional card rather
   than a glaring rectangle. Excludes UI icon sets and courseware thumbs,
   matching the existing .content img framing rule. */
[data-theme="dark"] .content img:not([src^="/images/icons/"]):not([src^="/images/courseware/"]){
  background:var(--shot-mat);
  padding:8px;
  border:1px solid var(--line);
  border-radius:8px;
}
/* ===== END BLOG MATTE ===== */
```

- [ ] **Step 4: Replace the blog-single inline padding with a class**

In `layouts/blog/single.html`, replace `<main class="section" style="padding-top: 6rem;">` with `<main class="section blog-single">`, and append to `assets/css/custom.css`:

```css
.blog-single{padding-top:5rem;}
.blog-single .title{color:var(--ink);}
.blog-single small{color:var(--muted);}
.blog-single small a{color:var(--accent);}
```

- [ ] **Step 5: Build and generate the search index**

Run: `hugo --minify -d public`
Then: `npx pagefind --site public`
Expected: both succeed; `public/pagefind/` exists.

- [ ] **Step 6: Visual check with search, both themes, desktop + mobile**

Run: `npx pagefind --site public --serve` and open the served URL:
- `/blog/`: cards, tag + author filters, pagination all themed; toggle flips them.
- Run a search; results render in both themes.
- Open a post with screenshots (e.g. any post under `/blog/` with images); in dark mode screenshots sit on a light matte and are legible, not glaring. In light mode they look unchanged.
- `/blog/tags/`: tag cloud themed. Narrow to ~390px: cards go full width, filters wrap.

- [ ] **Step 7: Commit**

```bash
git add assets/css/custom.css layouts/blog/single.html
git commit -m "Restyle blog and add dark-mode screenshot matte"
```

---

### Task 6: Footer restyle + dark-theme logo variant

**Files:**
- Create: `static/images/logo-150-dark.png` (generated)
- Modify: `layouts/partials/footer.html` (token classes, dark logo swap)
- Modify: `assets/css/custom.css` (footer tokens; replace `#fff`/`#000` footer rules)

**Interfaces:**
- Consumes: tokens; brand logo at `static/images/logo-150.png`.
- Produces: themed footer; `logo-150-dark.png` used on dark theme via the `.logo-light`/`.logo-dark` swap already styled in Task 2.

- [ ] **Step 1: Generate the light logo variant**

Run this PowerShell (whitens the dark "Accentient" text to `#e6edf6`, brightens the blue swoosh to the dark-theme accent `#4ea6ff`, keeps transparency):

```powershell
Add-Type -AssemblyName System.Drawing
$inPath  = "C:\Projects\Data\Repos\GitHub\Accentient\accentient.com\static\images\logo-150.png"
$outPath = "C:\Projects\Data\Repos\GitHub\Accentient\accentient.com\static\images\logo-150-dark.png"
$img = [System.Drawing.Bitmap]::FromFile($inPath)
$out = New-Object System.Drawing.Bitmap $img.Width, $img.Height
for($y=0;$y -lt $img.Height;$y++){
  for($x=0;$x -lt $img.Width;$x++){
    $p = $img.GetPixel($x,$y)
    if($p.A -lt 24){ $out.SetPixel($x,$y,$p); continue }
    if($p.B -gt 90 -and $p.B -gt ($p.R + 25) -and $p.B -gt ($p.G + 15)){
      # blue swoosh -> dark-theme accent #4ea6ff
      $out.SetPixel($x,$y,[System.Drawing.Color]::FromArgb($p.A,78,166,255))
    } else {
      # dark text -> light ink #e6edf6, preserving the pixel's alpha (anti-aliasing)
      $out.SetPixel($x,$y,[System.Drawing.Color]::FromArgb($p.A,230,237,246))
    }
  }
}
$img.Dispose()
$out.Save($outPath,[System.Drawing.Imaging.ImageFormat]::Png)
$out.Dispose()
"Wrote $outPath"
```

Expected: prints `Wrote ...logo-150-dark.png`.

- [ ] **Step 2: Use the dark logo in the footer**

In `layouts/partials/footer.html`, replace the footer logo block:

```html
      <div class="footer-logo mb-4">
        <a href="{{ "/" | relURL }}">
          <img src="{{ $logo | relURL }}" alt="Accentient Logo" style="max-height: 80px;">
        </a>
      </div>
```

with:

```html
      <div class="footer-logo mb-4">
        <a href="{{ "/" | relURL }}">
          <img class="logo-light" src="{{ "images/logo-150.png" | relURL }}" alt="Accentient Logo" style="max-height: 80px;">
          <img class="logo-dark" src="{{ "images/logo-150-dark.png" | relURL }}" alt="Accentient Logo" style="max-height: 80px;">
        </a>
      </div>
```

- [ ] **Step 3: Replace footer color rules with tokens**

In `assets/css/custom.css`, replace the footer rules:
- `footer.footer, .footer.footer-light, .footer.footer-dark { background-color:#fff !important; color:#000 !important; }` -> `background:var(--bg);color:var(--ink);`
- `.footer.footer-dark a { color:#000 !important; }` -> `color:var(--ink);`
- `.footer.footer-dark a:hover { color:red !important; }` -> `color:var(--accent);`
- `.footer-bottom-links a { color:#000; }` -> `color:var(--ink);` and `.footer-bottom-links a:hover { color:#0077b5; }` -> `color:var(--accent);`

Append:

```css
.footer{border-top:1px solid var(--line);}
.footer hr{background:var(--line);}
```

- [ ] **Step 4: Build and verify**

Run: `hugo --minify`
Expected: exits 0; `public/images/logo-150-dark.png` exists.

- [ ] **Step 5: Visual check, both themes, mobile**

Open any page, toggle to dark:
- Footer background matches the page; the logo (footer and navbar) is the light variant and is clearly visible on dark; in light mode the original logo shows.
- Footer links use brand accent on hover. Check at ~390px.

- [ ] **Step 6: Commit**

```bash
git add static/images/logo-150-dark.png layouts/partials/footer.html assets/css/custom.css
git commit -m "Theme the footer and add a light logo variant for dark mode"
```

---

### Task 7: Cross-page QA, cleanup, and final build

**Files:**
- Delete: `static/mockup-light.html`, `static/mockup-dark.html`, `static/mockup-toggle.html`
- Modify: none expected (fix-ups only if QA finds issues)

**Interfaces:**
- Consumes: the whole site from Tasks 1-6.

- [ ] **Step 1: Remove the temporary mockup files**

```bash
git rm -f --ignore-unmatch static/mockup-light.html static/mockup-dark.html static/mockup-toggle.html
rm -f static/mockup-light.html static/mockup-dark.html static/mockup-toggle.html
```

(The `git rm` handles any that were ever committed; the `rm` clears the untracked copies. Both are no-ops if already gone.)

- [ ] **Step 2: Full production build + search index**

Run: `hugo --minify -d public`
Then: `npx pagefind --site public`
Expected: both succeed with no errors.

- [ ] **Step 3: Enforce the 25 MiB file guard**

Run (Git Bash):

```bash
find public -type f -size +25M -print
```

Expected: no output (no oversized files). If any path prints, that file must be hosted externally before deploy.

- [ ] **Step 4: Cross-page QA matrix**

Serve the built site: `npx pagefind --site public --serve`. For EACH page below, verify in BOTH themes at desktop (1366px+) AND phone (~390px): readable text, correct accent, working toggle (persists on reload), working burger on mobile, no layout shift, no black-on-dark or white-glare.

- `/` (homepage) - hero, topic cards, stats
- `/training/` - tables
- `/aqatp/` - course page
- `/scrum/` - scrum grid
- `/courseware/` - courseware grid
- `/contact/` - form (also confirm the form still posts: fields render, no console errors)
- `/about/`
- `/blog/` - cards, filters, search, pagination
- a blog post with screenshots - dark matte
- `/blog/tags/` - tag cloud

- [ ] **Step 5: Commit cleanup (and any QA fixes)**

```bash
git add -A
git commit -m "Remove preview mockups and finalize redesign QA"
```

---

## Self-Review

**Spec coverage:**
- Token system + Inter -> Task 1. Theme toggle (light default, no flash, persists, mobile-reachable) -> Tasks 1-2. Unified navbar -> Task 2. New homepage, video removed, placeholder stats -> Task 3. Section/course pages -> Task 4. Blog incl. dark screenshot polish -> Task 5. Footer + dark logo -> Task 6. Mobile gate, 25 MiB guard, mockup cleanup, build/pagefind verification -> every task's checks + Task 7. Brand accent `#0078D7`/`#4ea6ff` -> Task 1 tokens, used throughout. No-em-dash + `disableJS` constraints -> Global Constraints. All spec sections map to a task.

**Placeholder scan:** The only "placeholders" are the intentional, clearly-marked stats numbers (Task 3, owner to fill) - flagged in code comments, not a plan gap. No TBD/TODO-as-instruction, no "similar to Task N", every code step shows real code.

**Type/name consistency:** `data-theme` values `light`/`dark`, `localStorage` key `acc-theme`, element IDs `theme-light`/`theme-dark`/`nav-burger`/`nav-links`, and classes `.logo-light`/`.logo-dark`/`.site-nav*`/`.topic-card`/`.home-*`/`.btn*` are used identically across baseof, navbar.html, theme.js, footer, and CSS. The dark logo path `images/logo-150-dark.png` matches between Task 2 navbar, Task 6 generation, and footer.
