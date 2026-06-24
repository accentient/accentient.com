# Accentient.com

Accentient.com's website — A Hugo-based site showcasing expert training and consulting services in Azure DevOps, Scrum, GitHub, and AI practices.

## Getting Started

- **Hugo Site**: Run `hugo server` from the root directory to develop locally (outputs to `localhost:1313`)
- **Cloudflare Worker**: Navigate to `cloudflare-worker/` and run `npm run dev` to test the contact form handler
- **Deployment**: See CLAUDE.md for full build and deployment instructions

## Project Structure

- `content/` — Markdown pages and blog posts
- `layouts/` — Custom Hugo templates extending the hugo-fresh theme
- `static/` — Images, PDFs, and downloadable assets
- `cloudflare-worker/` — TypeScript contact form handler (reCAPTCHA + email via Resend)
- `config.toml` — Hugo site configuration
- `CLAUDE.md` — Detailed development guide for Claude Code

## Development Journal

**2025-12-17**: Last manual updates
- Previous development cycle completed

**2026-05-30**: Claude Code onboarded
- Created CLAUDE.md with comprehensive project documentation
- Merged duplicate todo files and organized task list by category
- Updated README.md with project overview and links to development resources
- Enhanced .gitignore for VS Code and Hugo development
- Updated .gitattributes with cross-platform line ending controls

**2026-06-23**: Blog buildout + hardening
- Imported ~990 posts from the old WordPress/dasBlog archive (~1,090 total) into `content/blog/`
- Enabled the `tags` taxonomy and populated `authors` (list front matter); added tag + author filter dropdowns and `/tags/`, `/authors/` pages
- Added Pagefind full-text search (build-time index, generated in CI)
- Localized ~840 post images/files into page bundles; framed content images (border + shadow)
- Bulk tag cleanup and consolidation (Visual Studio/TFS/Azure DevOps/Testing/etc.)
- Hardened the contact-form Worker (CORS allow-list, reCAPTCHA action/hostname checks) and added a real vitest suite
- Combined CI into one `ci.yml` (test → deploy), with a Pagefind step and a 25 MiB Cloudflare file-size guard
- Footer version now auto-stamps the build date; added `[minify] disableJS` so legacy inline scripts don't break `hugo --minify`
- See CLAUDE.md "Blog System", "Build & Config Notes", and "Local Dev Gotchas" for details