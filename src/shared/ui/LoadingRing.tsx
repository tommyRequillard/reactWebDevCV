import { cn } from '@shared/lib/cn'

export interface LoadingRingProps {
  size?: 'sm' | 'md' | 'lg'
  fullscreen?: boolean
  label?: string
  className?: string
}

const sizeMap = {
  sm: 'w-10 h-10',
  md: 'w-20 h-20',
  lg: 'w-28 h-28',
} as const

const dotSize = {
  sm: 'w-1.5 h-1.5',
  md: 'w-3 h-3',
  lg: 'w-4 h-4',
} as const

const translateMap = {
  sm: 18,
  md: 30,
  lg: 42,
} as const

export function LoadingRing({
  size = 'md',
  fullscreen = false,
  label = 'Chargement…',
  className,
}: LoadingRingProps) {
  const ring = (
    <div
      role="status"
      aria-label={label}
      className={cn('relative animate-[spin_3s_linear_infinite]', sizeMap[size], className)}
    >
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <div
          key={i}
          className={cn(
            'absolute rounded-full animate-[pulse-opacity_1.5s_ease-in-out_infinite]',
            dotSize[size],
            i % 2 === 0 ? 'bg-[color:var(--color-neon-cyan-400)]' : 'bg-[color:var(--color-neon-purple-500)]',
          )}
          style={{
            top: '50%',
            left: '50%',
            transform: `translate(-50%, -50%) rotate(${45 * (i - 1)}deg) translate(${translateMap[size]}px)`,
            animationDelay: `${i * 0.1}s`,
          }}
        />
      ))}
      <span className="sr-only">{label}</span>
    </div>
  )

  if (!fullscreen) return ring
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[color-mix(in_srgb,var(--bg-canvas)_75%,transparent)] backdrop-blur-md">
      {ring}
    </div>
  )
}
