import { NavLink } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import lion from '@assets/lion-face.png'
import { cn } from '@shared/lib/cn'
import { NAV_ITEMS } from './navigation'

export interface SidebarProps {
  className?: string
}

export function Sidebar({ className }: SidebarProps) {
  const { t } = useTranslation('common')

  return (
    <aside
      className={cn(
        'glass-surface glass-surface--elevated hidden h-screen w-72 shrink-0 flex-col gap-y-6 overflow-y-auto rounded-none border-r px-6 py-6 lg:flex',
        className,
      )}
    >
      <div className="flex items-center gap-3">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[image:var(--grad-neon-soft)] p-2 ring-1 ring-[color:var(--glass-border-hi)]">
          <img src={lion} alt="" className="h-full w-auto" />
        </div>
        <div>
          <p className="text-sm font-semibold text-[color:var(--text-primary)]">
            {t('app.name')}
          </p>
          <p className="text-xs text-[color:var(--text-muted)]">{t('app.tagline')}</p>
        </div>
      </div>

      <nav aria-label="Navigation principale" className="flex flex-1 flex-col">
        <ul className="flex flex-col gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  cn(
                    'group relative flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors',
                    isActive
                      ? 'text-[color:var(--text-primary)]'
                      : 'text-[color:var(--text-secondary)] hover:bg-[color-mix(in_srgb,var(--text-primary)_8%,transparent)] hover:text-[color:var(--text-primary)]',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="sidebar-active"
                        className="absolute inset-0 -z-10 rounded-xl bg-[image:var(--grad-neon-soft)] ring-1 ring-[color:var(--glass-border-hi)]"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                    <item.icon
                      className={cn(
                        'h-5 w-5 shrink-0 transition-colors',
                        isActive
                          ? 'text-[color:var(--color-neon-cyan-400)]'
                          : 'text-[color:var(--text-muted)] group-hover:text-[color:var(--color-neon-cyan-400)]',
                      )}
                    />
                    <span>{t(item.labelKey)}</span>
                  </>
                )}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>

      <p className="mt-auto text-[11px] text-[color:var(--text-faint)]">
        {t('footer.copyright', { year: new Date().getFullYear() })}
      </p>
    </aside>
  )
}
