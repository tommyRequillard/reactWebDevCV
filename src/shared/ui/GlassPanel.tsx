import type { ReactNode } from 'react'
import { GlassCard, type GlassCardProps } from './GlassCard'
import { cn } from '@shared/lib/cn'

export interface GlassPanelProps extends Omit<GlassCardProps, 'title'> {
  title?: ReactNode
  description?: ReactNode
  icon?: ReactNode
  actions?: ReactNode
}

export function GlassPanel({
  title,
  description,
  icon,
  actions,
  children,
  className,
  padding = 'lg',
  ...rest
}: GlassPanelProps) {
  return (
    <GlassCard padding={padding} className={cn('flex flex-col gap-4', className)} {...rest}>
      {(title || actions || icon) && (
        <header className="flex items-start justify-between gap-4">
          <div className="flex items-start gap-3">
            {icon && (
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--grad-neon-soft)] text-[color:var(--color-neon-cyan-300)]">
                {icon}
              </span>
            )}
            <div className="flex flex-col gap-1">
              {title && (
                <h3 className="text-lg font-semibold text-[color:var(--text-primary)]">{title}</h3>
              )}
              {description && (
                <p className="text-sm text-[color:var(--text-muted)]">{description}</p>
              )}
            </div>
          </div>
          {actions && <div className="flex shrink-0 items-center gap-2">{actions}</div>}
        </header>
      )}
      <div className="flex flex-col gap-3 text-[color:var(--text-secondary)]">{children}</div>
    </GlassCard>
  )
}
