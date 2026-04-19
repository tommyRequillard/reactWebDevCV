import { useTranslation } from 'react-i18next'
import { GlassPanel } from '@shared/ui/GlassPanel'

export function WakeletEmbed() {
  const { t } = useTranslation('portfolio')
  return (
    <GlassPanel title={t('secondary.articles')} padding="md" className="h-full">
      <div className="h-full min-h-[60vh] overflow-hidden rounded-xl border border-[color:var(--glass-border)]">
        <iframe
          title="Wakelet — Articles & veille"
          src="https://wakelet.com/@CyberMenaces4188"
          className="h-full min-h-[60vh] w-full"
          loading="lazy"
          referrerPolicy="no-referrer"
        />
      </div>
    </GlassPanel>
  )
}
