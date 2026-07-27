# Tommy Requillard — CV Portfolio

> 🇬🇧 English version: [README.md](README.md)

CV / portfolio personnel (SPA) avec un espace d'outils interactifs (partage sécurisé, utilitaires réseau, aides dev, recherches cybersécurité, tests d'écran).

**Site en ligne :** déployé sur Netlify. Le backend des outils est un projet Cloudflare Pages séparé (`tools-proxy.pages.dev`).

## Stack technique

- **UI** : React 19, TypeScript 5, Vite 7, Tailwind CSS 4, framer-motion
- **Routing / état** : react-router 7, zustand
- **i18n** : i18next (français / anglais)
- **Formulaires** : react-hook-form + zod
- **Graphiques** : recharts
- **Tests** : vitest + Testing Library + MSW (unitaires), Playwright (e2e)

## Démarrage

Nécessite Node 20+.

```bash
npm install
cp .env.example .env   # puis renseigner les clés API
npm run dev
```

## Scripts

| Script | Description |
|---|---|
| `npm run dev` | Serveur de dev Vite |
| `npm run build` | Vérification des types (`tsc`) puis build de production dans `dist/` |
| `npm run lint` | ESLint (flat config, zéro warning toléré) |
| `npm run test` | Tests unitaires (vitest, exécution unique) |
| `npm run test:watch` | Tests unitaires en mode watch |
| `npm run test:coverage` | Tests unitaires avec couverture V8 |
| `npm run test:e2e` | E2E Playwright — build et preview sur le port 4173 |
| `npm run preview` | Sert le build de production en local |
| `npm run deploy` | Publie `dist/` sur GitHub Pages (cible secondaire) |

## Structure du projet

```
├── src/
│   ├── app/          # Point d'entrée, providers, routeur, ErrorBoundary
│   ├── features/     # Un dossier par page/fonctionnalité (cv, portfolio, contact,
│   │   └── tools/    #   tools : un sous-dossier par outil — components/ + hooks/)
│   ├── layouts/      # AppShell, sidebars, barre supérieure
│   ├── shared/       # ui/ (composants design-system + barrel), lib/, hooks/, motion/
│   ├── stores/       # Stores zustand (gamification, UI)
│   ├── i18n/         # Config i18next + locales/{en,fr}
│   ├── styles/       # CSS global (tokens, glass, animations, fonts)
│   └── test/         # Setup vitest
├── e2e/              # Specs Playwright (testDir dans playwright.config.ts)
├── functions/        # Cloudflare Pages Functions — API tools-proxy (voir plus bas)
├── public/           # Assets statiques copiés tels quels dans dist/
├── push_script.ps1   # Double push GitHub + GitLab (lié à un raccourci clavier local)
└── docs/             # Notes d'architecture + plans d'implémentation historiques
```

Voir [docs/architecture.md](docs/architecture.md) pour les détails.

## Alias de chemins

Les alias sont déclarés **à la fois** dans `vite.config.ts` et `tsconfig.json` (`paths`) et doivent rester synchronisés : `@`, `@app`, `@shared`, `@features`, `@layouts`, `@stores`, `@styles`, `@i18n`, `@assets`, `@test`.

## Déploiement

- **Netlify** (principal) : le workflow GitHub Actions (`.github/workflows/main.yml`) et le pipeline GitLab (`.gitlab-ci.yml`) lancent un scan SonarCloud, buildent avec `DEPLOY_TARGET=netlify` et déploient `dist/` à chaque push sur `master`.
- **Cloudflare Pages** (`tools-proxy`) : le dossier `functions/` contient les Pages Functions derrière `https://tools-proxy.pages.dev/api/{notes,files,speedtest,whois}`, avec les bindings KV + R2 déclarés dans `wrangler.toml`. `functions/` doit rester à la racine du dépôt — c'est là que Cloudflare Pages le découvre.
- Le proxy VirusTotal vit dans un **dépôt séparé** (`vt-proxy`, déployé sur `vt-proxy.pages.dev`).
- `push_script.ps1` (racine du dépôt) pousse `master` vers les deux remotes `github` et `gitlab`.

## Tests

- Les tests unitaires sont co-localisés avec le code dans des dossiers `__tests__/`.
- L'e2e couvre trois viewports Chromium (desktop 1440×900, tablette 768×1024, Pixel 5).
