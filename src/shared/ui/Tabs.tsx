import type { ReactNode } from 'react'
import { cn } from '@shared/lib/cn'

export interface TabItem {
  id: string
  label: ReactNode
  icon?: ReactNode
  disabled?: boolean
}

export interface TabsProps {
  tabs: TabItem[]
  value: string
  onChange: (id: string) => void
  variant?: 'pill' | 'underline'
  className?: string
}

export function Tabs({ tabs, value, onChange, variant = 'pill', className }: TabsProps) {
  return (
    <div
      role="tablist"
      aria-orientation="horizontal"
      className={cn(
        'inline-flex gap-1 overflow-x-auto',
        variant === 'pill'
          ? 'rounded-full border border-[color:var(--glass-border)] bg-[var(--glass-bg)] p-1 backdrop-blur-[10px]'
          : 'border-b border-[color:var(--line-subtle)]',
        className,
      )}
    >
      {tabs.map((tab) => {
        const active = tab.id === value
        return (
          <button
            key={tab.id}
            role="tab"
            type="button"
            disabled={tab.disabled}
            aria-selected={active}
            tabIndex={active ? 0 : -1}
            onClick={() => !tab.disabled && onChange(tab.id)}
            className={cn(
              'inline-flex items-center gap-2 whitespace-nowrap px-3 py-1.5 text-sm font-medium transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color:var(--color-neon-cyan-400)] disabled:opacity-50 disabled:cursor-not-allowed',
              variant === 'pill'
                ? cn(
                    'rounded-full',
                    active
                      ? 'bg-[image:var(--grad-neon)] text-[color:var(--text-on-neon)] shadow-[var(--glow-neon)]'
                      : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]',
                  )
                : cn(
                    '-mb-px border-b-2 px-2 py-2',
                    active
                      ? 'border-[color:var(--color-neon-cyan-400)] text-[color:var(--text-primary)]'
                      : 'border-transparent text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]',
                  ),
            )}
          >
            {tab.icon && <span className="shrink-0">{tab.icon}</span>}
            <span>{tab.label}</span>
          </button>
        )
      })}
    </div>
  )
}
