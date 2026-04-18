import { useId } from 'react'
import { cn } from '@shared/lib/cn'

export interface GaugeRingProps {
  value: number
  size?: 'small' | 'medium' | 'large'
  showValue?: boolean
  className?: string
  color?: string
  trackColor?: string
}

const sizes = {
  small: { width: 60, stroke: 6, fontSize: 'text-xs' },
  medium: { width: 100, stroke: 8, fontSize: 'text-lg' },
  large: { width: 140, stroke: 10, fontSize: 'text-2xl' },
} as const

export function GaugeRing({
  value,
  size = 'medium',
  showValue = true,
  className,
  color = '#22d3ee',
  trackColor = 'rgba(148, 163, 184, 0.25)',
}: GaugeRingProps) {
  const { width, stroke, fontSize } = sizes[size]
  const center = width / 2
  const radius = width / 2 - stroke
  const circumference = 2 * Math.PI * radius
  const safeValue = Math.min(Math.max(value, 0), 100)
  const strokeDashoffset = circumference - (safeValue / 100) * circumference
  const gradientId = `gauge-${useId().replace(/:/g, '')}`

  return (
    <div className={cn('relative flex items-center justify-center', className)}>
      <svg
        width={width}
        height={width}
        viewBox={`0 0 ${width} ${width}`}
        className="-rotate-90"
        role="img"
        aria-label={`${safeValue}%`}
      >
        <defs>
          <linearGradient id={gradientId} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke={trackColor}
          strokeWidth={stroke}
        />
        <circle
          cx={center}
          cy={center}
          r={radius}
          fill="transparent"
          stroke={color === 'neon' ? `url(#${gradientId})` : color}
          strokeWidth={stroke}
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: 'none' }}
        />
      </svg>
      {showValue && (
        <div
          className={cn(
            'absolute font-bold text-[color:var(--text-primary)]',
            fontSize,
          )}
        >
          {safeValue}%
        </div>
      )}
    </div>
  )
}
