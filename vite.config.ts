import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Charge les variables d'environnement (dont DEPLOY_TARGET du workflow)
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    // Si DEPLOY_TARGET est 'gh-pages', on met le préfixe du repo, sinon racine '/'
    base: env.DEPLOY_TARGET === 'gh-pages' ? '/reactWebDevCV/' : '/',
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './src/test/setup.ts',
    },
  }
})