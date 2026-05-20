# evouchers.in

Marketing website for eVoucher — India's digital prepaid voucher and wallet platform.

## Stack

- **Next.js 16.2.6** (static export to GitHub Pages)
- **React 19** + **TypeScript 5**
- **Tailwind CSS 3.4** with Emerald Ledger design system
- **Yarn 3.8.7** (Corepack managed)

## Quick Start

```bash
make install   # Install dependencies
make run       # Start dev server (localhost:3000)
make build     # Lint + build static export to out/
make preview   # Build + serve static site locally
```

## Architecture

Content-driven design: page text lives in `src/data/`, components in `src/components/sections/`, pages are thin compositions. See the plan in `.cursor/plans/` for full details.

## Deployment

Pushes to `main` trigger GitHub Actions → GitHub Pages. Custom domain via Cloudflare CNAME.

## Design Reference

Stitch designs are visual specs only (like Figma mockups). See `CG-003` in the icash-replica project for the binding guideline: never copy Stitch HTML — build from scratch with proper React architecture.
