import { FormEvent, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { KeyIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { Input } from '@shared/ui/Input'
import { NeonButton } from '@shared/ui/NeonButton'
import { Badge } from '@shared/ui/Badge'
import { usePwnedPasswordCheck } from '../hooks/usePwnedPasswordCheck'

export function HibpCard() {
  const { t } = useTranslation('cybersecurity')
  const [password, setPassword] = useState('')
  const { result, loading, error, check } = usePwnedPasswordCheck()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    check(password)
  }

  return (
    <GlassPanel
      title={t('hibp.title')}
      icon={<KeyIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
      padding="lg"
    >
      <p className="mb-4 text-sm text-[color:var(--text-secondary)]">{t('hibp.description')}</p>
      <form onSubmit={handleSubmit} className="flex flex-col gap-3 sm:flex-row">
        <Input
          type="password"
          autoComplete="off"
          placeholder={t('hibp.placeholder')}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="sm:flex-1"
          aria-label={t('hibp.title')}
        />
        <NeonButton type="submit" loading={loading} disabled={!password}>
          {t('hibp.check')}
        </NeonButton>
      </form>
      {error && (
        <p className="mt-3 text-sm text-[color:var(--color-neon-red-400)]">{error}</p>
      )}
      {result && (
        <div className="mt-5">
          {result.leaked ? (
            <Badge tone="red">{t('hibp.leaked', { count: result.count })}</Badge>
          ) : (
            <Badge tone="lime">{t('hibp.safe')}</Badge>
          )}
        </div>
      )}
    </GlassPanel>
  )
}
