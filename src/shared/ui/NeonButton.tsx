import {
  cloneElement,
  forwardRef,
  isValidElement,
  type ButtonHTMLAttributes,
  type ReactElement,
  type ReactNode,
} from 'react'
import { cn } from '@shared/lib/cn'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger'
type ButtonSize = 'sm' | 'md' | 'lg'

export interface NeonButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  loading?: boolean
  fullWidth?: boolean
  asChild?: boolean
}

const base =
  'inline-flex items-center justify-center gap-2 font-medium rounded-xl transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:cursor-not-allowed select-none'

const sizeClass: Record<ButtonSize, string> = {
  sm: 'text-sm px-3 py-1.5 h-9',
  md: 'text-sm px-4 py-2 h-10',
  lg: 'text-base px-5 py-2.5 h-12',
}

const variantClass: Record<ButtonVariant, string> = {
  primary:
    'text-[color:var(--text-on-neon)] bg-[image:var(--grad-neon)] hover:shadow-[var(--glow-neon)] hover:brightness-110 active:scale-[0.98] focus-visible:outline-[color:var(--color-neon-cyan-400)]',
  secondary:
    'text-[color:var(--text-primary)] bg-[var(--glass-bg)] backdrop-blur-[12px] border border-[color:var(--glass-border)] hover:border-[color:var(--glass-border-hi)] hover:bg-[color-mix(in_srgb,var(--bg-elevated)_85%,transparent)] active:scale-[0.98]',
  ghost:
    'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-[color-mix(in_srgb,var(--text-primary)_8%,transparent)] active:scale-[0.98]',
  danger:
    'text-white bg-[color:var(--color-neon-red-400)] hover:shadow-[0_0_24px_color-mix(in_srgb,var(--color-neon-red-400)_40%,transparent)] active:scale-[0.98]',
}

export const NeonButton = forwardRef<HTMLButtonElement, NeonButtonProps>(function NeonButton(
  {
    variant = 'primary',
    size = 'md',
    leftIcon,
    rightIcon,
    loading = false,
    fullWidth = false,
    asChild = false,
    className,
    children,
    disabled,
    type = 'button',
    ...rest
  },
  ref,
) {
  const classes = cn(
    base,
    sizeClass[size],
    variantClass[variant],
    fullWidth && 'w-full',
    className,
  )

  if (asChild && isValidElement(children)) {
    const element = children as ReactElement<{ className?: string }>
    return cloneElement(element, {
      className: cn(classes, element.props.className),
    })
  }

  return (
    <button ref={ref} type={type} disabled={disabled || loading} className={classes} {...rest}>
      {loading ? (
        <span className="inline-flex h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
      ) : (
        leftIcon
      )}
      <span>{children}</span>
      {!loading && rightIcon}
    </button>
  )
})
