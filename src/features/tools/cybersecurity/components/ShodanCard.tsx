import { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { Input } from '@shared/ui/Input'
import { NeonButton } from '@shared/ui/NeonButton'
import { Badge } from '@shared/ui/Badge'
import { useShodanLookup } from '../hooks/useShodanLookup'

export function ShodanCard() {
  const { t } = useTranslation('tools')
  const [ip, setIp] = useState('')
  const { data, loading, error, lookup } = useShodanLookup()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    lookup(ip)
  }

  return (
    <GlassPanel
      title={t('shodan.title')}
      icon={<GlobeAltIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
      padding="lg"
    >
      <p className="mb-4 text-sm text-[color:var(--text-secondary)]">{t('shodan.description')}</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <Input
          inputMode="numeric"
          placeholder={t('shodan.placeholder')}
          value={ip}
          onChange={(e) => setIp(e.target.value)}
          className="sm:flex-1"
          aria-label={t('shodan.title')}
        />
        <NeonButton type="submit" loading={loading} disabled={!ip.trim()}>
          {t('shodan.lookup')}
        </NeonButton>
      </form>
      {error && (
        <p className="mt-3 text-sm text-[color:var(--color-neon-red-400)]">
          {error === 'invalidIp' ? t('errors.invalidIp') : error}
        </p>
      )}
      {data && (
        <dl className="mt-5 grid grid-cols-1 gap-3 text-sm sm:grid-cols-2">
          <div>
            <dt className="text-xs uppercase tracking-wide text-[color:var(--text-muted)]">
              {t('shodan.ports')}
            </dt>
            <dd className="mt-1 flex flex-wrap gap-1">
              {data.ports.length > 0 ? (
                data.ports.map((port) => (
                  <Badge key={port} tone="cyan">
                    {port}
                  </Badge>
                ))
              ) : (
                <span className="text-[color:var(--text-muted)]">—</span>
              )}
            </dd>
          </div>
          <div>
            <dt className="text-xs uppercase tracking-wide text-[color:var(--text-muted)]">
              {t('shodan.hostnames')}
            </dt>
            <dd className="mt-1 text-[color:var(--text-primary)]">
              {data.hostnames.length > 0 ? data.hostnames.join(', ') : '—'}
            </dd>
          </div>
          <div className="sm:col-span-2">
            <dt className="text-xs uppercase tracking-wide text-[color:var(--text-muted)]">Tags</dt>
            <dd className="mt-1 flex flex-wrap gap-1">
              {data.tags.length > 0 ? (
                data.tags.map((tag) => (
                  <Badge key={tag} tone="purple">
                    {tag}
                  </Badge>
                ))
              ) : (
                <span className="text-[color:var(--text-muted)]">—</span>
              )}
            </dd>
          </div>
          {data.vulns && data.vulns.length > 0 && (
            <div className="sm:col-span-2">
              <dt className="text-xs uppercase tracking-wide text-[color:var(--color-neon-red-400)]">
                Vulnérabilités
              </dt>
              <dd className="mt-1 flex flex-wrap gap-1">
                {data.vulns.map((v) => (
                  <Badge key={v} tone="red">
                    {v}
                  </Badge>
                ))}
              </dd>
            </div>
          )}
        </dl>
      )}
    </GlassPanel>
  )
}
