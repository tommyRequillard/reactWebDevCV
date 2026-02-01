import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [react()],
  // Use '/' for dev, '/reactWebDevCV/' for GitHub Pages production
  base: mode === 'production' ? '/reactWebDevCV/' : '/',
}))
