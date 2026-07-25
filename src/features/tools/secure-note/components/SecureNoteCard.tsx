import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { LockClosedIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { Textarea } from '@shared/ui/Textarea'
import { Select } from '@shared/ui/Select'
import { NeonButton } from '@shared/ui/NeonButton'
import { Badge } from '@shared/ui/Badge'
import { useToast } from '@shared/ui/Toast'
import { useSecureNoteCreate } from '../hooks/useSecureNoteCreate'

const EXPIRATION_OPTIONS = [
  { value: '3600', labelKey: 'expiration1h' },
  { value: '86400', labelKey: 'expiration1d' },
  { value: '604800', labelKey: 'expiration7d' },
]

export function SecureNoteCard() {
  const { t } = useTranslation('tools')
  const { push } = useToast()
  const [text, setText] = useState('')
  const [ttl, setTtl] = useState('86400')
  const [burnAfterRead, setBurnAfterRead] = useState(true)
  const { link, loading, error, create } = useSecureNoteCreate()

  const handleSubmit = () => {
    void create(text, Number(ttl), burnAfterRead)
  }

  const handleCopy = () => {
    if (!link) return
    void navigator.clipboard.writeText(link)
    push({ type: 'success', message: t('secureNote.copied') })
  }

  return (
    <GlassPanel
      title={t('secureNote.title')}
      icon={<LockClosedIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
      padding="lg"
    >
      <Textarea value={text} onChange={(e) => setText(e.target.value)} placeholder={t('secureNote.placeholder')} />

      <div className="flex flex-wrap items-end gap-3">
        <Select
          label={t('secureNote.expirationLabel')}
          options={EXPIRATION_OPTIONS.map((o) => ({ value: o.value, label: t(`secureNote.${o.labelKey}`) }))}
          value={ttl}
          onChange={(e) => setTtl(e.target.value)}
        />
        <label className="flex items-center gap-2 pb-2 text-sm">
          <input type="checkbox" checked={burnAfterRead} onChange={(e) => setBurnAfterRead(e.target.checked)} />
          {t('secureNote.burnAfterRead')}
        </label>
      </div>

      {error === 'empty' && <p className="text-sm text-[color:var(--color-neon-red-400)]">{t('secureNote.errors.empty')}</p>}
      {error === 'backendUnavailable' && <Badge tone="amber">{t('errors.backendUnavailable')}</Badge>}
      {error === 'uploadFailed' && <Badge tone="red">{t('errors.backendUnavailable')}</Badge>}

      <NeonButton type="button" loading={loading} onClick={handleSubmit}>
        {t('secureNote.create')}
      </NeonButton>

      {link && (
        <div className="flex flex-col gap-2 rounded-xl border border-[color:var(--glass-border)] bg-[var(--glass-bg)] p-3">
          <p className="text-xs text-[color:var(--text-muted)]">{t('secureNote.linkCreated')}</p>
          <button type="button" onClick={handleCopy} className="break-all text-left font-mono text-xs text-[color:var(--color-neon-cyan-300)]">
            {link}
          </button>
        </div>
      )}
    </GlassPanel>
  )
}
