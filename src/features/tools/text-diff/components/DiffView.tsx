import type { Change } from 'diff'
import { cn } from '@shared/lib/cn'

export function DiffView({ changes }: { changes: Change[] }) {
  return (
    <p className="whitespace-pre-wrap break-words rounded-xl border border-[color:var(--glass-border)] bg-[var(--glass-bg)] p-3 font-mono text-sm">
      {changes.map((part, i) => (
        <span
          key={i}
          className={cn(
            part.added && 'bg-[color-mix(in_srgb,var(--color-neon-lime-400)_25%,transparent)] text-[color:var(--color-neon-lime-400)]',
            part.removed && 'bg-[color-mix(in_srgb,var(--color-neon-red-400)_25%,transparent)] text-[color:var(--color-neon-red-400)] line-through',
          )}
        >
          {part.value}
        </span>
      ))}
    </p>
  )
}
