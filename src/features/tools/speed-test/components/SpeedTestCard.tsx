import { useTranslation } from 'react-i18next'
import { BoltIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { NeonButton } from '@shared/ui/NeonButton'
import { useSpeedTest } from '../hooks/useSpeedTest'

function StatTile({ label, value, unit }: { label: string; value: string; unit: string }) {
  return (
    <div className="rounded-xl border border-[color:var(--glass-border)] p-4 text-center">
      <dt className="text-xs uppercase tracking-wide text-[color:var(--text-muted)]">{label}</dt>
      <dd className="mt-1 text-2xl font-semibold text-[color:var(--text-primary)]">
        {value}
        <span className="ml-1 text-sm font-normal text-[color:var(--text-muted)]">{unit}</span>
      </dd>
    </div>
  )
}

export function SpeedTestCard() {
  const { t } = useTranslation('tools')
  const { phase, progress, result, error, run } = useSpeedTest()
  const running = phase === 'ping' || phase === 'download' || phase === 'upload'

  return (
    <GlassPanel
      title={t('speedTest.title')}
      icon={<BoltIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
      padding="lg"
    >
      <p className="mb-4 text-sm text-[color:var(--text-secondary)]">{t('speedTest.description')}</p>

      <NeonButton onClick={run} loading={running} disabled={running}>
        {running ? t(`speedTest.phase.${phase}`) : t('speedTest.start')}
      </NeonButton>

      {running && (
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-[color:var(--glass-border)]">
          <div
            className="h-full bg-[color:var(--color-neon-cyan-400)] transition-all"
            style={{
              width: `${phase === 'download' ? progress * 100 : phase === 'ping' ? 10 : 55}%`,
            }}
          />
        </div>
      )}

      {error && <p className="mt-3 text-sm text-[color:var(--color-neon-red-400)]">{error}</p>}

      {result && (
        <dl className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <StatTile label={t('speedTest.ping')} value={result.pingMs.toFixed(0)} unit="ms" />
          <StatTile label={t('speedTest.jitter')} value={result.jitterMs.toFixed(1)} unit="ms" />
          <StatTile label={t('speedTest.download')} value={result.downloadMbps.toFixed(1)} unit="Mbps" />
          <StatTile label={t('speedTest.upload')} value={result.uploadMbps.toFixed(1)} unit="Mbps" />
        </dl>
      )}
    </GlassPanel>
  )
}
