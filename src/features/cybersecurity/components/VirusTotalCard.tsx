import { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ShieldCheckIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { Input } from '@shared/ui/Input'
import { NeonButton } from '@shared/ui/NeonButton'
import { Badge } from '@shared/ui/Badge'
import { useVirusTotalScan } from '../hooks/useVirusTotalScan'

export function VirusTotalCard() {
  const { t } = useTranslation('cybersecurity')
  const [url, setUrl] = useState('')
  const [showDetails, setShowDetails] = useState(false)
  const { report, stats, loading, error, scan } = useVirusTotalScan()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    scan(url)
  }

  return (
    <GlassPanel
      title={t('virusTotal.title')}
      icon={<ShieldCheckIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
      padding="lg"
    >
      <p className="mb-4 text-sm text-[color:var(--text-secondary)]">
        {t('virusTotal.description')}
      </p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="url"
          inputMode="url"
          placeholder={t('virusTotal.placeholder')}
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          className="sm:flex-1"
          aria-label={t('virusTotal.title')}
        />
        <NeonButton type="submit" loading={loading} disabled={!url.trim()}>
          {t('virusTotal.scan')}
        </NeonButton>
      </form>
      {error && (
        <p className="mt-3 text-sm text-[color:var(--color-neon-red-400)]">
          {error === 'invalidUrl' ? t('errors.invalidUrl') : error}
        </p>
      )}
      {stats && report && (
        <div className="mt-5 flex flex-col gap-4">
          <div className="flex flex-wrap items-center gap-3">
            <Badge tone={stats.malicious > 0 ? 'red' : 'lime'}>
              {t('virusTotal.positives', { count: stats.malicious, total: stats.total })}
            </Badge>
            <span className="text-xs text-[color:var(--text-muted)]">
              {stats.cleanPercent}% clean · {stats.maliciousPercent}% malicious
            </span>
          </div>
          <div>
            <div className="mb-1 flex items-center justify-between text-xs text-[color:var(--text-muted)]">
              <span>{t('virusTotal.reputation')}</span>
              <span>{stats.cleanPercent}%</span>
            </div>
            <div className="h-2 overflow-hidden rounded-full bg-[color-mix(in_srgb,var(--bg-elevated)_60%,transparent)]">
              <div
                className={
                  stats.malicious > 0
                    ? 'h-full bg-[color:var(--color-neon-red-400)]'
                    : 'h-full bg-[image:var(--grad-neon)]'
                }
                style={{ width: `${stats.cleanPercent}%` }}
              />
            </div>
          </div>
          <button
            type="button"
            className="self-start text-sm text-[color:var(--color-neon-cyan-400)] hover:underline"
            onClick={() => setShowDetails((v) => !v)}
          >
            {showDetails ? '− Détails' : '+ Détails'}
          </button>
          {showDetails && (
            <ul className="max-h-56 overflow-y-auto rounded-lg bg-[color-mix(in_srgb,var(--bg-elevated)_60%,transparent)] p-3 text-xs">
              {Object.entries(report.results).map(([engine, res]) => (
                <li
                  key={engine}
                  className="flex items-center justify-between border-b border-[color:var(--line-subtle)] py-1 last:border-0"
                >
                  <span className="font-medium text-[color:var(--text-primary)]">{engine}</span>
                  <span
                    className={
                      res.result === 'malicious'
                        ? 'text-[color:var(--color-neon-red-400)]'
                        : 'text-[color:var(--text-muted)]'
                    }
                  >
                    {res.result} · {res.category}
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      )}
    </GlassPanel>
  )
}
