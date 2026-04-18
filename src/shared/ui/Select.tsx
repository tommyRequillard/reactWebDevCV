import { forwardRef, useId, type ReactNode, type SelectHTMLAttributes } from 'react'
import { cn } from '@shared/lib/cn'

export interface SelectOption {
  value: string
  label: string
  disabled?: boolean
}

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: ReactNode
  error?: ReactNode
  hint?: ReactNode
  options: SelectOption[]
  placeholder?: string
  variant?: 'glass' | 'outline'
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(function Select(
  {
    label,
    error,
    hint,
    options,
    placeholder,
    variant = 'glass',
    className,
    id,
    ...rest
  },
  ref,
) {
  const generatedId = useId()
  const selectId = id ?? generatedId

  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label
          htmlFor={selectId}
          className="text-sm font-medium text-[color:var(--text-secondary)]"
        >
          {label}
        </label>
      )}
      <select
        ref={ref}
        id={selectId}
        aria-invalid={!!error || undefined}
        className={cn(
          'appearance-none rounded-xl border px-3 py-2 pr-8 text-sm text-[color:var(--text-primary)] bg-no-repeat bg-right bg-[length:16px_16px] focus:outline-none transition-colors',
          variant === 'glass'
            ? 'bg-[var(--glass-bg)] backdrop-blur-[10px] border-[color:var(--glass-border)]'
            : 'bg-transparent border-[color:var(--line-strong)]',
          error && 'border-[color:var(--color-neon-red-400)]',
          'focus:border-[color:var(--color-neon-cyan-400)] focus:shadow-[0_0_0_3px_color-mix(in_srgb,var(--color-neon-cyan-400)_20%,transparent)]',
          className,
        )}
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='12' height='8' viewBox='0 0 12 8' fill='none'><path d='M1 1.5L6 6.5L11 1.5' stroke='%2367e8f9' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/></svg>\")",
          backgroundPosition: 'right 12px center',
        }}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value} disabled={opt.disabled}>
            {opt.label}
          </option>
        ))}
      </select>
      {hint && !error && <p className="text-xs text-[color:var(--text-muted)]">{hint}</p>}
      {error && <p className="text-xs text-[color:var(--color-neon-red-400)]">{error}</p>}
    </div>
  )
})
