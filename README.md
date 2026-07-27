# Tommy Requillard — CV Portfolio

> 🇫🇷 Version française : [README.fr.md](README.fr.md)

Personal CV / portfolio single-page app with an interactive tools playground (secure sharing, network utilities, dev helpers, cybersecurity lookups, display tests).

**Live site:** deployed on Netlify. The tools backend runs as a separate Cloudflare Pages project (`tools-proxy.pages.dev`).

## Tech stack

- **UI**: React 19, TypeScript 5, Vite 7, Tailwind CSS 4, framer-motion
- **Routing / state**: react-router 7, zustand
- **i18n**: i18next (French / English)
- **Forms**: react-hook-form + zod
- **Charts**: recharts
- **Tests**: vitest + Testing Library + MSW (unit), Playwright (e2e)

## Getting started

Requires Node 20+.

```bash
npm install
cp .env.example .env   # then fill in the API keys
npm run dev
```

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Vite dev server |
| `npm run build` | Type-check (`tsc`) then production build to `dist/` |
| `npm run lint` | ESLint (flat config, zero warnings allowed) |
| `npm run test` | Unit tests (vitest, single run) |
| `npm run test:watch` | Unit tests in watch mode |
| `npm run test:coverage` | Unit tests with V8 coverage |
| `npm run test:e2e` | Playwright e2e — builds and serves a preview on port 4173 |
| `npm run preview` | Serve the production build locally |
| `npm run deploy` | Publish `dist/` to GitHub Pages (secondary target) |

## Project structure

```
├── src/
│   ├── app/          # App entry, providers, router, ErrorBoundary
│   ├── features/     # One folder per page/feature (cv, portfolio, contact,
│   │   └── tools/    #   tools: one subfolder per tool — components/ + hooks/)
│   ├── layouts/      # AppShell, sidebars, top bar
│   ├── shared/       # ui/ (design-system components + barrel), lib/, hooks/, motion/
│   ├── stores/       # zustand stores (gamification, UI)
│   ├── i18n/         # i18next setup + locales/{en,fr}
│   ├── styles/       # Global CSS (tokens, glass, animations, fonts)
│   └── test/         # vitest setup
├── e2e/              # Playwright specs (testDir in playwright.config.ts)
├── functions/        # Cloudflare Pages Functions — tools-proxy API (see below)
├── public/           # Static assets copied as-is into dist/
├── push_script.ps1   # Dual push to GitHub + GitLab (bound to a local keyboard shortcut)
└── docs/             # Architecture notes + historical implementation plans
```

See [docs/architecture.md](docs/architecture.md) for details.

## Path aliases

Aliases are declared **in both** `vite.config.ts` and `tsconfig.json` (`paths`) and must stay in sync: `@`, `@app`, `@shared`, `@features`, `@layouts`, `@stores`, `@styles`, `@i18n`, `@assets`, `@test`.

## Deployment

- **Netlify** (primary): both the GitHub Actions workflow (`.github/workflows/main.yml`) and the GitLab pipeline (`.gitlab-ci.yml`) run a SonarCloud scan, build with `DEPLOY_TARGET=netlify`, and deploy `dist/` on pushes to `master`.
- **Cloudflare Pages** (`tools-proxy`): the `functions/` directory holds the Pages Functions behind `https://tools-proxy.pages.dev/api/{notes,files,speedtest,whois}`, with KV + R2 bindings declared in `wrangler.toml`. `functions/` must stay at the repo root — that is where Cloudflare Pages discovers it.
- The VirusTotal proxy lives in a **separate repo** (`vt-proxy`, deployed at `vt-proxy.pages.dev`).
- `push_script.ps1` (repo root) pushes `master` to both the `github` and `gitlab` remotes.

## Testing

- Unit tests are co-located with the code in `__tests__/` folders.
- E2E runs three Chromium viewports (desktop 1440×900, tablet 768×1024, Pixel 5).
