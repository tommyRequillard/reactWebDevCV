import { useTranslation } from 'react-i18next'
import { GlassPanel } from '@shared/ui/GlassPanel'

export function TrelloBoard() {
  const { t } = useTranslation('documents')
  return (
    <GlassPanel title={t('trello.title')} padding="lg">
      <p className="text-sm text-[color:var(--text-secondary)]">
        Suggestions bienvenues — ouvrez une carte ou un ticket sur le tableau public ci-dessous.
      </p>
      <div className="mt-3 overflow-hidden rounded-xl border border-[color:var(--glass-border)]">
        <iframe
          src="https://trello.com/b/kp9ZUMxf.html"
          title={t('trello.title')}
          className="h-[650px] w-full"
          loading="lazy"
          allow="autoplay"
        />
      </div>
    </GlassPanel>
  )
}
