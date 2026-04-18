import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { LanguageIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import { cn } from '@shared/lib/cn'

const languages = [
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'en', label: 'English', flag: '🇬🇧' },
] as const

export interface LanguageSwitcherProps {
  className?: string
}

export function LanguageSwitcher({ className }: LanguageSwitcherProps) {
  const { i18n, t } = useTranslation('common')
  const current = i18n.language?.slice(0, 2) ?? 'fr'

  const change = (code: string) => {
    void i18n.changeLanguage(code)
    try {
      localStorage.setItem('cv.lang', code)
    } catch {
      /* noop */
    }
    document.documentElement.setAttribute('lang', code)
  }

  return (
    <Menu as="div" className={cn('relative', className)}>
      <MenuButton
        aria-label={t('language.switch')}
        className="inline-flex h-9 items-center gap-1.5 rounded-full border border-[color:var(--glass-border)] bg-[var(--glass-bg)] px-3 text-sm text-[color:var(--text-secondary)] backdrop-blur-[10px] transition-all hover:border-[color:var(--glass-border-hi)] hover:text-[color:var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-neon-cyan-400)]"
      >
        <LanguageIcon className="h-4 w-4" />
        <span className="uppercase">{current}</span>
      </MenuButton>
      <MenuItems
        anchor="bottom end"
        className="glass-surface glass-surface--elevated z-50 mt-2 flex w-40 flex-col overflow-hidden rounded-xl p-1 text-sm focus:outline-none"
      >
        {languages.map((lng) => (
          <MenuItem key={lng.code}>
            {({ focus }) => (
              <button
                type="button"
                onClick={() => change(lng.code)}
                className={cn(
                  'flex items-center gap-2 rounded-lg px-3 py-2 text-left transition-colors',
                  focus
                    ? 'bg-[color-mix(in_srgb,var(--text-primary)_10%,transparent)] text-[color:var(--text-primary)]'
                    : 'text-[color:var(--text-secondary)]',
                  current === lng.code && 'font-semibold text-[color:var(--text-primary)]',
                )}
              >
                <span>{lng.flag}</span>
                <span>{lng.label}</span>
              </button>
            )}
          </MenuItem>
        ))}
      </MenuItems>
    </Menu>
  )
}
