import { lazy, Suspense } from 'react'
import { useMatches } from 'react-router-dom'
import { Skeleton } from '@shared/ui/Skeleton'
import { cn } from '@shared/lib/cn'

interface RouteHandle {
  secondary?: 'articles'
}

const WakeletEmbed = lazy(() =>
  import('@features/articles/components/WakeletEmbed').then((m) => ({ default: m.WakeletEmbed })),
)

export interface SecondaryColumnProps {
  className?: string
}

export function SecondaryColumn({ className }: SecondaryColumnProps) {
  const matches = useMatches()
  const handle = [...matches].reverse().find((m) => (m.handle as RouteHandle | undefined)?.secondary)
  const section = (handle?.handle as RouteHandle | undefined)?.secondary

  if (!section) return null

  return (
    <aside
      className={cn(
        'hidden h-[calc(100vh-4rem)] w-96 shrink-0 overflow-y-auto border-l border-[color:var(--glass-border)] px-4 py-6 xl:block',
        className,
      )}
    >
      <Suspense fallback={<Skeleton variant="rect" className="h-full w-full" />}>
        {section === 'articles' && <WakeletEmbed />}
      </Suspense>
    </aside>
  )
}
