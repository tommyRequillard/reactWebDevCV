import { cn } from '@shared/lib/cn'

export interface GaugeLineProps {
  filled: number
  total: number
  className?: string
}

export function GaugeLine({ filled, total, className }: GaugeLineProps) {
  const percent = total === 0 ? 0 : Math.min(100, (filled / total) * 100)
  return (
    <div
      className={cn(
        'mx-auto h-3 w-[150px] rounded-full border border-[color:var(--glass-border)] bg-[color-mix(in_srgb,var(--bg-elevated)_60%,transparent)] p-1 text-left',
        className,
      )}
    >
      <div className="h-1 overflow-hidden rounded-full">
        <div
          className="h-1 rounded-full bg-[image:var(--grad-neon)]"
          style={{ width: `${percent}%`, transition: 'none' }}
        />
      </div>
    </div>
  )
}
