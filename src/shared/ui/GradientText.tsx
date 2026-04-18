import type { ElementType, ReactNode } from 'react'
import { cn } from '@shared/lib/cn'

export interface GradientTextProps {
  as?: ElementType
  animated?: boolean
  className?: string
  children: ReactNode
}

export function GradientText({
  as,
  animated = false,
  className,
  children,
}: GradientTextProps) {
  const Component = (as ?? 'span') as ElementType
  return (
    <Component
      className={cn(
        'text-gradient-neon font-semibold',
        animated && 'animated-gradient',
        className,
      )}
    >
      {children}
    </Component>
  )
}
