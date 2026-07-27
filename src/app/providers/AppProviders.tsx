import { type ReactNode } from 'react'

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
      <I18nProvider>
        <ThemeProvider>
          <ToastProvider>{children}</ToastProvider>
        </ThemeProvider>
      </I18nProvider>
    </ErrorBoundary>
  )
}
