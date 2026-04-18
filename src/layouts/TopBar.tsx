import { useMatches } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { ThemeToggle } from '@shared/ui/ThemeToggle'
import { LanguageSwitcher } from '@shared/ui/LanguageSwitcher'
import { cn } from '@shared/lib/cn'
import { useUIStore } from '@stores/uiStore'

interface RouteHandle {
  titleKey?: string
  titleNs?: string
}

export interface TopBarProps {
  className?: string
}

export function TopBar({ className }: TopBarProps) {
  const { t } = useTranslation('common')
  const openMobile = useUIStore((s) => s.openMobileNav)
  const matches = useMatches()
  const active = [...matches].reverse().find((m) => (m.handle as RouteHandle | undefined)?.titleKey)
  const handle = active?.handle as RouteHandle | undefined
  const title = handle?.titleKey ? t(handle.titleKey, { ns: handle.titleNs ?? 'common' }) : ''

  return (
    <header
      className={cn(
        'glass-surface sticky top-0 z-30 flex h-16 items-center gap-3 rounded-none border-b px-4 sm:px-6',
        className,
      )}
    >
      <button
        type="button"
        aria-label={t('nav.open')}
        onClick={openMobile}
        className="grid h-9 w-9 place-items-center rounded-full border border-[color:var(--glass-border)] text-[color:var(--text-secondary)] transition-colors hover:text-[color:var(--text-primary)] lg:hidden"
      >
        <Bars3Icon className="h-5 w-5" />
      </button>

      <h1 className="truncate text-sm font-semibold text-[color:var(--text-primary)] sm:text-base">
        {title}
      </h1>

      <div className="ml-auto flex items-center gap-2">
        <LanguageSwitcher />
        <ThemeToggle />
      </div>
    </header>
  )
}
