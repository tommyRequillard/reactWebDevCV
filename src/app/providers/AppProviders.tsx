import { type ReactNode } from 'react'
import { Provider as ReduxProvider } from 'react-redux'

import { store } from '@stores/index'
import { ThemeProvider } from './ThemeProvider'
import { I18nProvider } from './I18nProvider'
import { ToastProvider } from '@shared/ui/Toast'
import { ErrorBoundary } from '@app/ErrorBoundary'

interface AppProvidersProps {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ErrorBoundary>
      <ReduxProvider store={store}>
        <I18nProvider>
          <ThemeProvider>
            <ToastProvider>{children}</ToastProvider>
          </ThemeProvider>
        </I18nProvider>
      </ReduxProvider>
    </ErrorBoundary>
  )
}
