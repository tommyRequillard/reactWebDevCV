import { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DocumentMagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { Input } from '@shared/ui/Input'
import { NeonButton } from '@shared/ui/NeonButton'
import { Badge } from '@shared/ui/Badge'
import { useWhoisLookup } from '../hooks/useWhoisLookup'

export function WhoisCard() {
  const { t } = useTranslation('tools')
  const [domain, setDomain] = useState('')
  const { result, loading, error, lookup } = useWhoisLookup()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    void lookup(domain)
  }

  const creationDate = result?.events?.find((e) => e.eventAction === 'registration')?.eventDate
  const expirationDate = result?.events?.find((e) => e.eventAction === 'expiration')?.eventDate

  return (
    <GlassPanel
      title={t('whois.title')}
      icon={<DocumentMagnifyingGlassIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
      padding="lg"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <Input
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder={t('whois.domainPlaceholder')}
          className="sm:flex-1"
        />
        <NeonButton type="submit" loading={loading}>
          {t('whois.lookup')}
        </NeonButton>
      </form>

      {error === 'invalidDomain' && (
        <p className="text-sm text-[color:var(--color-neon-red-400)]">{t('whois.errors.invalidDomain')}</p>
      )}
      {error === 'notFound' && (
        <p className="text-sm text-[color:var(--color-neon-red-400)]">{t('whois.errors.notFound')}</p>
      )}
      {error === 'backendUnavailable' && <Badge tone="amber">{t('errors.backendUnavailable')}</Badge>}

      {result && (
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <dt className="text-[color:var(--text-muted)]">{t('whois.fields.domain')}</dt>
          <dd className="font-mono">{result.ldhName ?? '—'}</dd>
          <dt className="text-[color:var(--text-muted)]">{t('whois.fields.status')}</dt>
          <dd className="font-mono">{result.status?.join(', ') ?? '—'}</dd>
          <dt className="text-[color:var(--text-muted)]">{t('whois.fields.nameservers')}</dt>
          <dd className="font-mono">{result.nameservers?.map((ns) => ns.ldhName).join(', ') ?? '—'}</dd>
          <dt className="text-[color:var(--text-muted)]">{t('whois.fields.creationDate')}</dt>
          <dd className="font-mono">{creationDate ?? '—'}</dd>
          <dt className="text-[color:var(--text-muted)]">{t('whois.fields.expirationDate')}</dt>
          <dd className="font-mono">{expirationDate ?? '—'}</dd>
        </dl>
      )}
    </GlassPanel>
  )
}
