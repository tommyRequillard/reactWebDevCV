import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          layoutsChunk: [
            'src/layouts/MainLayout.tsx',
            'src/layouts/MainLayout.tsx',
            'src/layouts/SecondaryCol.tsx',
          ],
          cvChunk: [
            'src/components/cv/Librairies.tsx',
            'src/components/cv/LibrairiesCards.tsx',
            'src/components/cv/ProgrammingLanguagesCards.tsx',
            'src/components/cv/SoftsCards.tsx',
          ],
        },
      },
    },
  },
})
