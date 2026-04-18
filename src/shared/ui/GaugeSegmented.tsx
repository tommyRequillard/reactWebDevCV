import { cn } from '@shared/lib/cn'

export interface GaugeSegmentedProps {
  data: number[]
  className?: string
}

const SEGMENT_COLORS = [
  'rgba(34, 211, 238, 0.35)',
  'rgba(34, 211, 238, 0.55)',
  'rgba(34, 211, 238, 0.75)',
  'rgba(168, 85, 247, 0.85)',
  'rgba(168, 85, 247, 1)',
]

export function GaugeSegmented({ data, className }: GaugeSegmentedProps) {
  const total = data.reduce((a, b) => a + b, 0)

  return (
    <div
      className={cn(
        'mx-auto h-6 w-[150px] rounded-full border border-[color:var(--glass-border)] bg-[color-mix(in_srgb,var(--bg-elevated)_60%,transparent)] p-2 text-left',
        className,
      )}
    >
      <ul className="mx-auto flex h-2 overflow-hidden rounded-full p-0">
        {data.map((seg, index) => {
          const percent = total === 0 ? 0 : (seg / total) * 100
          const isFirst = index === 0
          const isLast = index === data.length - 1
          return (
            <li
              key={index}
              className="inline-block h-full"
              style={{
                width: `calc(${percent}% - .5px)`,
                background: SEGMENT_COLORS[index] ?? SEGMENT_COLORS[SEGMENT_COLORS.length - 1],
                borderLeft: isFirst ? 'none' : '2px solid var(--bg-canvas)',
                borderTopLeftRadius: isFirst ? '10%' : 0,
                borderBottomLeftRadius: isFirst ? '10%' : 0,
                borderTopRightRadius: isLast ? '15%' : 0,
                borderBottomRightRadius: isLast ? '15%' : 0,
              }}
            />
          )
        })}
      </ul>
    </div>
  )
}
