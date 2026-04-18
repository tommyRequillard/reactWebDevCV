import { useEffect, type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from '@i18n/index'

export function I18nProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    const applyLang = (lng: string) => {
      document.documentElement.setAttribute('lang', lng.slice(0, 2))
    }
    applyLang(i18n.language || 'fr')
    i18n.on('languageChanged', applyLang)
    return () => {
      i18n.off('languageChanged', applyLang)
    }
  }, [])

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
}
