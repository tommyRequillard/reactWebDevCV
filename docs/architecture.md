# Architecture

## Frontend — feature-sliced layout

The app follows a feature-sliced structure under `src/`:

- **`app/`** — composition root: `main.tsx`, `AppProviders` (ErrorBoundary → I18n → Theme → Toast), router (`react-router` 7 with lazy-loaded pages).
- **`features/<name>/`** — one folder per page or feature. Each contains its page component plus local `components/`, `hooks/`, `data/` (and `services/`, `schemas/`, `lib/` where needed). Features never import from each other; they share code through `shared/`.
  - **`features/tools/`** — one subfolder per tool (`base64/`, `dns-lookup/`, `password-generator/`, `subnet-calculator/`, `unit-converter/`, `whois/`, `speed-test/`, `secure-note/`, `file-drop/`, `hash-calculator/`, `text-diff/`, `qr-generator/`, `screen-test/`, `cybersecurity/`), each with its own `components/` and `hooks/`. Shared tool config lives in `tools/lib/`.
- **`layouts/`** — `AppShell`, sidebars, top bar, secondary column.
- **`shared/`** — `ui/` (design-system components, exported through `ui/index.ts`), `lib/` (helpers, `env.ts`), `hooks/`, `motion/` (framer-motion variants).
- **`stores/`** — zustand stores: `gamificationStore` (achievements, terminal easter egg), `uiStore`.
- **`i18n/`** — i18next with FR/EN namespaces per feature.
- **`styles/`** — design tokens, glassmorphism utilities, animations, fonts.

State that is purely derived from static data (e.g. portfolio stats) is computed with pure functions + `useMemo`, not stored.

## Tools proxy — Cloudflare Pages Functions

Some tools need a server-side component (secrets, CORS, storage). Data flow:

```
Client hooks (src/features/tools/**)
  └─> https://tools-proxy.pages.dev/api/…   (base URL in src/features/tools/lib/config.ts)
        ├─ /api/notes     → functions/api/notes/[[path]].ts     → KV TOOLS_NOTES_KV
        ├─ /api/files     → functions/api/files/[[path]].ts     → KV TOOLS_FILES_META_KV + R2 TOOLS_FILES_R2
        ├─ /api/speedtest → functions/api/speedtest/[[path]].ts
        └─ /api/whois     → functions/api/whois/[[path]].ts
```

- `functions/` **must stay at the repo root** — Cloudflare Pages auto-discovers it there. Bindings are declared in `wrangler.toml`.
- The route names under `functions/api/` are a contract with the client hooks; renaming them breaks the deployed proxy.
- The VirusTotal scan tool talks to a separate project, `vt-proxy.pages.dev` (own repo).

## Deployment targets

| Target | What | Trigger |
|---|---|---|
| Netlify | The CV site (`dist/`) | GitHub Actions + GitLab CI on `master` (with SonarCloud scan) |
| Cloudflare Pages `tools-proxy` | `functions/` API | Cloudflare Pages project |
| GitHub Pages | Secondary/manual (`npm run deploy`, `DEPLOY_TARGET=gh-pages` base path) | Manual |

## Historical plans

`docs/plans/` keeps the April 2026 "Refonte Référence Absolue" design + TDD plan as an archive; that work is fully implemented.
