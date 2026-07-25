import { useTranslation } from 'react-i18next'
import { NeonButton } from '@shared/ui/NeonButton'

interface ScreenTestNavProps {
  title: string
  instructions: string
  index: number
  total: number
  isFirst: boolean
  isLast: boolean
  onPrevious: () => void
  onNext: () => void
  onExit: () => void
}

export function ScreenTestNav({
  title,
  instructions,
  index,
  total,
  isFirst,
  isLast,
  onPrevious,
  onNext,
  onExit,
}: ScreenTestNavProps) {
  const { t } = useTranslation('tools')
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 flex flex-col items-center gap-3 bg-gradient-to-t from-black/80 to-transparent p-6 text-center text-white">
      <div className="pointer-events-auto flex flex-col items-center gap-1">
        <span className="text-xs uppercase tracking-wide text-white/70">
          {t('screenTest.stepOf', { current: index + 1, total })}
        </span>
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="max-w-md text-sm text-white/80">{instructions}</p>
      </div>
      <div className="pointer-events-auto flex items-center gap-2">
        <NeonButton variant="secondary" size="sm" onClick={onPrevious} disabled={isFirst}>
          {t('screenTest.previous')}
        </NeonButton>
        {isLast ? (
          <NeonButton variant="danger" size="sm" onClick={onExit}>
            {t('screenTest.exit')}
          </NeonButton>
        ) : (
          <NeonButton variant="secondary" size="sm" onClick={onNext}>
            {t('screenTest.next')}
          </NeonButton>
        )}
        <NeonButton variant="ghost" size="sm" onClick={onExit}>
          {t('screenTest.exit')}
        </NeonButton>
      </div>
    </div>
  )
}
