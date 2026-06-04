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