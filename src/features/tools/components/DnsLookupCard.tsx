import { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { Input } from '@shared/ui/Input'
import { Select } from '@shared/ui/Select'
import { NeonButton } from '@shared/ui/NeonButton'
import { DNS_RECORD_TYPES, useDnsLookup, type DnsRecordType } from '../hooks/useDnsLookup'

export function DnsLookupCard() {
  const { t } = useTranslation('tools')
  const [domain, setDomain] = useState('')
  const [type, setType] = useState<DnsRecordType>('A')
  const { answers, loading, error, lookup } = useDnsLookup()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    void lookup(domain, type)
  }

  return (
    <GlassPanel
      title={t('dnsLookup.title')}
      icon={<GlobeAltIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
      padding="lg"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <Input
          value={domain}
          onChange={(e) => setDomain(e.target.value)}
          placeholder={t('dnsLookup.domainPlaceholder')}
          className="sm:flex-1"
        />
        <Select
          options={DNS_RECORD_TYPES.map((rt) => ({ value: rt, label: rt }))}
          value={type}
          onChange={(e) => setType(e.target.value as DnsRecordType)}
        />
        <NeonButton type="submit" loading={loading}>
          {t('dnsLookup.lookup')}
        </NeonButton>
      </form>

      {error && <p className="text-sm text-[color:var(--color-neon-red-400)]">{t('dnsLookup.errors.invalidDomain')}</p>}

      {answers && answers.length === 0 && (
        <p className="text-sm text-[color:var(--text-muted)]">{t('dnsLookup.noResults')}</p>
      )}

      {answers && answers.length > 0 && (
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-[color:var(--text-muted)]">
              <th className="pb-1 pr-2">{t('dnsLookup.columns.name')}</th>
              <th className="pb-1 pr-2">{t('dnsLookup.columns.ttl')}</th>
              <th className="pb-1">{t('dnsLookup.columns.data')}</th>
            </tr>
          </thead>
          <tbody>
            {answers.map((a, i) => (
              <tr key={`${a.name}-${i}`} className="font-mono">
                <td className="pr-2">{a.name}</td>
                <td className="pr-2">{a.TTL}</td>
                <td className="break-all">{a.data}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </GlassPanel>
  )
}
