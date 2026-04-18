import type { HTMLAttributes, ReactNode } from 'react'
import { cn } from '@shared/lib/cn'

type BadgeTone = 'cyan' | 'purple' | 'lime' | 'red' | 'amber' | 'neutral' | 'neon'

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  tone?: BadgeTone
  children: ReactNode
}

const toneClass: Record<BadgeTone, string> = {
  cyan: 'bg-[color-mix(in_srgb,var(--color-neon-cyan-400)_16%,transparent)] text-[color:var(--color-neon-cyan-300)] border-[color:color-mix(in_srgb,var(--color-neon-cyan-400)_30%,transparent)]',
  purple:
    'bg-[color-mix(in_srgb,var(--color-neon-purple-500)_16%,transparent)] text-[color:var(--color-neon-purple-300)] border-[color:color-mix(in_srgb,var(--color-neon-purple-500)_30%,transparent)]',
  lime: 'bg-[color-mix(in_srgb,var(--color-neon-lime-400)_18%,transparent)] text-[color:var(--color-neon-lime-400)] border-[color:color-mix(in_srgb,var(--color-neon-lime-400)_30%,transparent)]',
  red: 'bg-[color-mix(in_srgb,var(--color-neon-red-400)_18%,transparent)] text-[color:var(--color-neon-red-400)] border-[color:color-mix(in_srgb,var(--color-neon-red-400)_30%,transparent)]',
  amber:
    'bg-[color-mix(in_srgb,var(--color-neon-amber-400)_18%,transparent)] text-[color:var(--color-neon-amber-400)] border-[color:color-mix(in_srgb,var(--color-neon-amber-400)_30%,transparent)]',
  neutral:
    'bg-[color-mix(in_srgb,var(--text-muted)_15%,transparent)] text-[color:var(--text-secondary)] border-[color:var(--line-subtle)]',
  neon: 'bg-[image:var(--grad-neon-soft)] text-[color:var(--text-primary)] border-[color:var(--glass-border-hi)]',
}

export function Badge({ tone = 'neutral', className, children, ...rest }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium',
        toneClass[tone],
        className,
      )}
      {...rest}
    >
      {children}
    </span>
  )
}
