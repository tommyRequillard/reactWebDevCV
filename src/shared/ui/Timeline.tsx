import type { ComponentType, ReactNode, SVGProps } from 'react'
import { motion } from 'framer-motion'
import { cn } from '@shared/lib/cn'

export interface TimelineItem {
  id: string
  period: string
  title: string
  subtitle?: string
  description?: ReactNode
  icon?: ComponentType<SVGProps<SVGSVGElement>>
}

export interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <ol className={cn('relative ml-3 flex flex-col gap-5 pl-6', className)}>
      <span
        aria-hidden
        className="pointer-events-none absolute left-0 top-1 bottom-1 w-px bg-gradient-to-b from-[color:var(--color-neon-cyan-400)] via-[color:var(--color-neon-cyan-400)]/40 to-transparent"
      />
      {items.map((item, index) => {
        const Icon = item.icon
        return (
          <motion.li
            key={item.id}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.45, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <span
              aria-hidden
              className="absolute -left-[26px] top-1 flex h-4 w-4 items-center justify-center rounded-full bg-[color:var(--bg-primary,#0b0f17)] ring-2 ring-[color:var(--color-neon-cyan-400)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[color:var(--color-neon-cyan-400)] shadow-[0_0_8px_var(--color-neon-cyan-400)]" />
            </span>

            <div className="flex flex-col gap-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-neon-cyan-400)]">
                {item.period}
              </p>
              <p className="flex items-center gap-2 text-sm font-semibold text-[color:var(--text-primary)]">
                {Icon ? <Icon className="h-4 w-4 text-[color:var(--color-neon-cyan-400)]" /> : null}
                <span>{item.title}</span>
              </p>
              {item.subtitle ? (
                <p className="text-xs text-[color:var(--text-secondary)]">{item.subtitle}</p>
              ) : null}
              {item.description ? (
                <div className="text-sm text-[color:var(--text-secondary)]">{item.description}</div>
              ) : null}
            </div>
          </motion.li>
        )
      })}
    </ol>
  )
}
