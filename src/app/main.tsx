import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '@fontsource/geist-sans/400.css'
import '@fontsource/geist-sans/500.css'
import '@fontsource/geist-sans/600.css'
import '@fontsource/geist-sans/700.css'
import '@fontsource/geist-mono/400.css'
import '@fontsource/geist-mono/500.css'
import '@styles/index.css'
import { App } from './App'

const container = document.getElementById('root')
if (!container) throw new Error('Root element #root is missing')

createRoot(container).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
