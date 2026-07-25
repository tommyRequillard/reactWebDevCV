import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { LockOpenIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { Textarea } from '@shared/ui/Textarea'
import { Badge } from '@shared/ui/Badge'
import { LoadingRing } from '@shared/ui/LoadingRing'
import { fadeInUp, stagger } from '@shared/motion/variants'
import { useSecureNoteReveal } from '../hooks/useSecureNoteReveal'

export function SecureNoteResultPage() {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('tools')
  const state = useSecureNoteReveal(id)

  return (
    <motion.section variants={stagger} initial="hidden" animate="show" className="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-10">
      <motion.div variants={fadeInUp}>
        <GlassPanel
          title={t('secureNoteReveal.title')}
          icon={<LockOpenIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
          padding="lg"
        >
          {state.status === 'loading' && (
            <div className="flex items-center gap-2">
              <LoadingRing size="sm" />
              <span>{t('secureNoteReveal.loading')}</span>
            </div>
          )}
          {state.status === 'missingKey' && <Badge tone="red">{t('secureNoteReveal.missingKey')}</Badge>}
          {state.status === 'notFound' && <Badge tone="red">{t('secureNoteReveal.notFound')}</Badge>}
          {state.status === 'decryptError' && <Badge tone="red">{t('secureNoteReveal.decryptError')}</Badge>}
          {state.status === 'success' && <Textarea value={state.text} readOnly rows={10} />}
        </GlassPanel>
      </motion.div>
    </motion.section>
  )
}
