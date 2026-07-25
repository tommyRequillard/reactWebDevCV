import { useTranslation } from 'react-i18next'
import { BoltIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'

export function SpeedTestCard() {
  const { t } = useTranslation('tools')

  return (
    <GlassPanel
      title={t('speedTest.title')}
      icon={<BoltIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
      padding="lg"
    >
      <p className="text-sm text-[color:var(--text-secondary)]">{t('speedTest.description')}</p>
      <div className="h-full min-h-[440px] overflow-hidden rounded-xl border border-[color:var(--glass-border)]">
        <iframe
          title="OpenSpeedTest"
          src="https://openspeedtest.com/speedtest"
          className="h-full min-h-[440px] w-full"
          loading="lazy"
          referrerPolicy="no-referrer"
          allow="fullscreen"
        />
      </div>
    </GlassPanel>
  )
}
