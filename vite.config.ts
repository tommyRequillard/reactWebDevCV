import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 600000, // 1 Mo
    rollupOptions: {
      output: {
        manualChunks: {
          layoutsChunk: [
            'src/layouts/MainArea.tsx',
            'src/layouts/MainLayout.tsx',
            'src/layouts/SecondaryCol.tsx',
          ],
          cvChunk: [
            'src/components/cv/header/EtatCivil.tsx',
            'src/components/cv/leftSideBar/LeftSideBar.tsx',
            'src/components/cv/leftSideBar/Materiels.tsx',
            'src/components/cv/leftSideBar/ProgrammingLanguagesCards.tsx',
            'src/components/cv/leftSideBar/SkillsCards.tsx',
            'src/components/cv/main/Experiences.tsx',
            'src/components/cv/main/PersonnalProfile.tsx',
            'src/components/cv/main/SoftSkills.tsx',
            'src/components/cv/Card.tsx',
            'src/components/cv/ForeignLanguages.tsx',
            'src/components/cv/Formations.tsx',
            'src/components/cv/Interets.tsx',
            'src/components/cv/Librairies.tsx',
            'src/components/cv/LibrairiesCards.tsx',
            'src/components/cv/Softs.tsx',
            'src/components/cv/SoftsCards.tsx',
          ],
          servicesChunk: [
            'src/services/ButtonMailTo.tsx',
            'src/services/pdfService.ts',
            'src/services/starsRating.tsx',
          ],
          pagesChunk: [
            'src/pages/Counter.tsx',
            'src/pages/Home.tsx',
            'src/pages/Documents.tsx',
            'src/pages/Error404.tsx',
            'src/pages/Portfolio.tsx',
          ],
          gaugesChunk: [
            'src/components/GaugeLine.tsx',
            'src/components/GaugeRing.tsx',
            'src/components/GaugeSegmented.tsx',
          ],
        },
      },
    },
  },
})
