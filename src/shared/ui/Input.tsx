import { forwardRef, useId, type InputHTMLAttributes, type ReactNode } from 'react'
import { cn } from '@shared/lib/cn'

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: ReactNode
  error?: ReactNode
  hint?: ReactNode
  leftIcon?: ReactNode
  rightIcon?: ReactNode
  variant?: 'glass' | 'outline'
}

export const Input = forwardRef<HTMLInputElement, InputProps>(function Input(
  {
    label,
    error,
    hint,
    leftIcon,
    rightIcon,
    variant = 'glass',
    className,
    id,
    ...rest
  },
  ref,
) {
  const generatedId = useId()
  const inputId = id ?? generatedId
  const hintId = `${inputId}-hint`
  const errorId = `${inputId}-error`

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={inputId}
          className="text-sm font-medium text-[color:var(--text-secondary)]"
        >
          {label}
        </label>
      )}
      <div
        className={cn(
          'relative flex items-center gap-2 rounded-xl border transition-colors',
          variant === 'glass'
            ? 'bg-[var(--glass-bg)] backdrop-blur-[10px] border-[color:var(--glass-border)]'
            : 'bg-transparent border-[color:var(--line-strong)]',
          error && 'border-[color:var(--color-neon-red-400)]',
          'focus-within:border-[color:var(--color-neon-cyan-400)] focus-within:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-neon-cyan-400)_20%,transparent)]',
        )}
      >
        {leftIcon && <span className="pl-3 text-[color:var(--text-muted)]">{leftIcon}</span>}
        <input
          ref={ref}
          id={inputId}
          aria-invalid={!!error || undefined}
          aria-describedby={cn(hint && hintId, error && errorId) || undefined}
          className={cn(
            'w-full bg-transparent px-3 py-2 text-sm text-[color:var(--text-primary)] placeholder:text-[color:var(--text-faint)] focus:outline-none',
            leftIcon && 'pl-2',
            rightIcon && 'pr-2',
            className,
          )}
          {...rest}
        />
        {rightIcon && <span className="pr-3 text-[color:var(--text-muted)]">{rightIcon}</span>}
      </div>
      {hint && !error && (
        <p id={hintId} className="text-xs text-[color:var(--text-muted)]">
          {hint}
        </p>
      )}
      {error && (
        <p id={errorId} className="text-xs text-[color:var(--color-neon-red-400)]">
          {error}
        </p>
      )}
    </div>
  )
})
