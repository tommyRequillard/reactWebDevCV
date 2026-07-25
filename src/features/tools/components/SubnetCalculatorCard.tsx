import { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CalculatorIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { Input } from '@shared/ui/Input'
import { NeonButton } from '@shared/ui/NeonButton'
import { useSubnetCalculator } from '../hooks/useSubnetCalculator'

export function SubnetCalculatorCard() {
  const { t } = useTranslation('tools')
  const [value, setValue] = useState('192.168.1.1/24')
  const { result, error, calculate } = useSubnetCalculator()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    calculate(value)
  }

  return (
    <GlassPanel
      title={t('subnetCalculator.title')}
      icon={<CalculatorIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
      padding="lg"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <Input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={t('subnetCalculator.placeholder')}
          className="sm:flex-1"
        />
        <NeonButton type="submit">{t('subnetCalculator.calculate')}</NeonButton>
      </form>

      {error && <p className="text-sm text-[color:var(--color-neon-red-400)]">{t('subnetCalculator.errors.invalidCidr')}</p>}

      {result && (
        <dl className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <dt className="text-[color:var(--text-muted)]">{t('subnetCalculator.results.networkAddress')}</dt>
          <dd className="font-mono">{result.networkAddress}</dd>
          <dt className="text-[color:var(--text-muted)]">{t('subnetCalculator.results.broadcastAddress')}</dt>
          <dd className="font-mono">{result.broadcastAddress}</dd>
          <dt className="text-[color:var(--text-muted)]">{t('subnetCalculator.results.hostCount')}</dt>
          <dd className="font-mono">{result.hostCount}</dd>
          <dt className="text-[color:var(--text-muted)]">{t('subnetCalculator.results.usableRange')}</dt>
          <dd className="font-mono">
            {result.firstHost} - {result.lastHost}
          </dd>
        </dl>
      )}
    </GlassPanel>
  )
}
