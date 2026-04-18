import { AppProviders } from './providers/AppProviders'
import { AppRouter } from './router/AppRouter'

const basename = import.meta.env.DEPLOY_TARGET === 'gh-pages' ? '/reactWebDevCV' : undefined

export function App() {
  return (
    <AppProviders>
      <AppRouter basename={basename} />
    </AppProviders>
  )
}

export default App
