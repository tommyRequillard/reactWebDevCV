import type { HTMLAttributes } from 'react'
import { cn } from '@shared/lib/cn'

export interface SkeletonProps extends HTMLAttributes<HTMLDivElement> {
  variant?: 'text' | 'rect' | 'circle'
  width?: number | string
  height?: number | string
}

export function Skeleton({
  variant = 'rect',
  width,
  height,
  className,
  style,
  ...rest
}: SkeletonProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'relative overflow-hidden bg-[color-mix(in_srgb,var(--text-muted)_15%,transparent)]',
        'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_1.4s_infinite] before:bg-gradient-to-r before:from-transparent before:via-[color-mix(in_srgb,var(--color-neon-cyan-300)_10%,transparent)] before:to-transparent',
        variant === 'text' && 'h-4 rounded',
        variant === 'rect' && 'rounded-xl',
        variant === 'circle' && 'rounded-full',
        className,
      )}
      style={{
        width: width ?? (variant === 'text' ? '100%' : undefined),
        height:
          height ??
          (variant === 'text' ? '1em' : variant === 'circle' ? (width ?? 40) : '1.5rem'),
        ...style,
      }}
      {...rest}
    />
  )
}
