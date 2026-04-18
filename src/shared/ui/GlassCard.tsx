import { forwardRef, type ElementType, type HTMLAttributes, type ReactNode } from 'react'
import { cn } from '@shared/lib/cn'

type GlassVariant = 'default' | 'elevated' | 'solid' | 'no-blur'
type GlassGlow = 'none' | 'cyan' | 'purple' | 'neon'

export interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  as?: ElementType
  variant?: GlassVariant
  glow?: GlassGlow
  interactive?: boolean
  padding?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
  radius?: 'md' | 'lg' | 'xl' | '2xl'
  children?: ReactNode
}

const variantClass: Record<GlassVariant, string> = {
  default: 'glass-surface',
  elevated: 'glass-surface glass-surface--elevated',
  solid: 'glass-surface glass-surface--solid',
  'no-blur': 'glass-surface glass-surface--no-blur',
}

const glowClass: Record<GlassGlow, string> = {
  none: '',
  cyan: 'glass-glow-cyan',
  purple: 'glass-glow-purple',
  neon: 'glass-glow-neon',
}

const paddingClass = {
  none: '',
  sm: 'p-3',
  md: 'p-5',
  lg: 'p-7',
  xl: 'p-10',
} as const

const radiusClass = {
  md: 'rounded-xl',
  lg: 'rounded-2xl',
  xl: 'rounded-3xl',
  '2xl': 'rounded-[32px]',
} as const

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(function GlassCard(
  {
    as,
    variant = 'default',
    glow = 'none',
    interactive = false,
    padding = 'md',
    radius = 'xl',
    className,
    children,
    ...rest
  },
  ref,
) {
  const Component = (as ?? 'div') as ElementType
  return (
    <Component
      ref={ref}
      className={cn(
        variantClass[variant],
        glowClass[glow],
        paddingClass[padding],
        radiusClass[radius],
        interactive && 'glass-surface--interactive cursor-pointer',
        className,
      )}
      {...rest}
    >
      {children}
    </Component>
  )
})
