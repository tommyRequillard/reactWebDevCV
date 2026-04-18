import { StarIcon as StarSolid } from '@heroicons/react/24/solid'
import { StarIcon as StarOutline } from '@heroicons/react/24/outline'
import { cn } from '@shared/lib/cn'

export interface StarsProps {
  value: number
  total?: number
  size?: 'sm' | 'md'
  className?: string
}

export function Stars({ value, total = 5, size = 'sm', className }: StarsProps) {
  const full = Math.max(0, Math.min(total, Math.round(value)))
  const iconSize = size === 'sm' ? 'h-3.5 w-3.5' : 'h-4 w-4'
  return (
    <span
      role="img"
      aria-label={`${full}/${total}`}
      className={cn('inline-flex items-center gap-0.5', className)}
    >
      {Array.from({ length: total }).map((_, i) =>
        i < full ? (
          <StarSolid
            key={i}
            className={cn(iconSize, 'text-[color:var(--color-neon-amber-400)]')}
          />
        ) : (
          <StarOutline
            key={i}
            className={cn(iconSize, 'text-[color:var(--text-faint)]')}
          />
        ),
      )}
    </span>
  )
}
