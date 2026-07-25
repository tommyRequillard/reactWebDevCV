import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowsUpDownIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { Textarea } from '@shared/ui/Textarea'
import { NeonButton } from '@shared/ui/NeonButton'
import { useTextDiff } from '../hooks/useTextDiff'
import { DiffView } from './DiffView'

export function TextDiffCard() {
  const { t } = useTranslation('tools')
  const [original, setOriginal] = useState('')
  const [modified, setModified] = useState('')
  const { changes, compare } = useTextDiff()

  return (
    <GlassPanel
      title={t('textDiff.title')}
      icon={<ArrowsUpDownIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
      padding="lg"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <Textarea
          label={t('textDiff.original')}
          value={original}
          onChange={(e) => setOriginal(e.target.value)}
          placeholder={t('textDiff.originalPlaceholder')}
        />
        <Textarea
          label={t('textDiff.modified')}
          value={modified}
          onChange={(e) => setModified(e.target.value)}
          placeholder={t('textDiff.modifiedPlaceholder')}
        />
      </div>
      <NeonButton type="button" onClick={() => compare(original, modified)}>
        {t('textDiff.compare')}
      </NeonButton>
      {changes && changes.length > 0 && <DiffView changes={changes} />}
    </GlassPanel>
  )
}
