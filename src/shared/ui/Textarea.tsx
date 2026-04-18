import { forwardRef, useId, type ReactNode, type TextareaHTMLAttributes } from 'react'
import { cn } from '@shared/lib/cn'

export interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: ReactNode
  error?: ReactNode
  hint?: ReactNode
  variant?: 'glass' | 'outline'
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(function Textarea(
  { label, error, hint, variant = 'glass', className, id, rows = 4, ...rest },
  ref,
) {
  const generatedId = useId()
  const textareaId = id ?? generatedId
  const hintId = `${textareaId}-hint`
  const errorId = `${textareaId}-error`

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={textareaId}
          className="text-sm font-medium text-[color:var(--text-secondary)]"
        >
          {label}
        </label>
      )}
      <textarea
        ref={ref}
        id={textareaId}
        rows={rows}
        aria-invalid={!!error || undefined}
        aria-describedby={cn(hint && hintId, error && errorId) || undefined}
        className={cn(
          'w-full rounded-xl border px-3 py-2 text-sm text-[color:var(--text-primary)] placeholder:text-[color:var(--text-faint)] focus:outline-none transition-colors resize-y min-h-[96px]',
          variant === 'glass'
            ? 'bg-[var(--glass-bg)] backdrop-blur-[10px] border-[color:var(--glass-border)]'
            : 'bg-transparent border-[color:var(--line-strong)]',
          error && 'border-[color:var(--color-neon-red-400)]',
          'focus:border-[color:var(--color-neon-cyan-400)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-neon-cyan-400)_20%,transparent)]',
          className,
        )}
        {...rest}
      />
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
