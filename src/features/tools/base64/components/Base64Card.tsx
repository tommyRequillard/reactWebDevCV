import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CodeBracketIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { Textarea } from '@shared/ui/Textarea'
import { NeonButton } from '@shared/ui/NeonButton'
import { useBase64Codec } from '../hooks/useBase64Codec'

export function Base64Card() {
  const { t } = useTranslation('tools')
  const [input, setInput] = useState('')
  const { output, error, encode, decode } = useBase64Codec()

  return (
    <GlassPanel
      title={t('base64.title')}
      icon={<CodeBracketIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
      padding="lg"
    >
      <Textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={t('base64.inputPlaceholder')}
      />
      <div className="flex gap-2">
        <NeonButton type="button" variant="secondary" onClick={() => encode(input)}>
          {t('base64.encode')}
        </NeonButton>
        <NeonButton type="button" variant="secondary" onClick={() => decode(input)}>
          {t('base64.decode')}
        </NeonButton>
      </div>
      {error && <p className="text-sm text-[color:var(--color-neon-red-400)]">{t('base64.errors.invalidBase64')}</p>}
      <Textarea value={output} readOnly placeholder={t('base64.outputPlaceholder')} />
    </GlassPanel>
  )
}
