import { MoonIcon, SunIcon } from '@heroicons/react/24/outline'
import { useTheme } from '@shared/hooks/useTheme'
import { useTranslation } from 'react-i18next'
import { cn } from '@shared/lib/cn'

export interface ThemeToggleProps {
  className?: string
}

export function ThemeToggle({ className }: ThemeToggleProps) {
  const { theme, toggle } = useTheme()
  const { t } = useTranslation('common')
  const label = theme === 'dark' ? t('theme.switchToLight') : t('theme.switchToDark')

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={cn(
        'inline-flex h-9 w-9 items-center justify-center rounded-full border border-[color:var(--glass-border)] bg-[var(--glass-bg)] text-[color:var(--text-secondary)] backdrop-blur-[10px] transition-all hover:border-[color:var(--glass-border-hi)] hover:text-[color:var(--text-primary)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-neon-cyan-400)]',
        className,
      )}
    >
      {theme === 'dark' ? (
        <SunIcon className="h-4 w-4" />
      ) : (
        <MoonIcon className="h-4 w-4" />
      )}
    </button>
  )
}
