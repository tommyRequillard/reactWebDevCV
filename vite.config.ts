import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ mode }) => {
  // On utilise '/' par défaut (Netlify & Dev)
  // On utilise '/reactWebDevCV/' uniquement si on déploie spécifiquement pour GitHub
  const isGitHubPages = process.env.DEPLOY_TARGET === 'gh-pages';

  return {
    plugins: [react()],
    base: isGitHubPages ? '/reactWebDevCV/' : '/',
  }
})