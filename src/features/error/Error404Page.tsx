import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { GlassCard } from '@shared/ui/GlassCard'
import { GradientText } from '@shared/ui/GradientText'
import { NeonButton } from '@shared/ui/NeonButton'

export function Error404Page() {
  const { t } = useTranslation('common')
  return (
    <div className="grid min-h-[60vh] place-items-center">
      <GlassCard variant="elevated" glow="neon" padding="xl" className="max-w-md text-center">
        <GradientText as="p" className="mb-2 text-7xl font-bold">
          404
        </GradientText>
        <h1 className="mb-3 text-xl font-semibold">{t('errors.notFound')}</h1>
        <p className="mb-6 text-sm text-[color:var(--text-secondary)]">
          {t('errors.unknown')}
        </p>
        <NeonButton asChild variant="primary">
          <Link to="/">{t('errors.backHome')}</Link>
        </NeonButton>
      </GlassCard>
    </div>
  )
}
