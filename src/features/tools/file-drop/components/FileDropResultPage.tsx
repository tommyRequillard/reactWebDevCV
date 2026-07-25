import { useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { NeonButton } from '@shared/ui/NeonButton'
import { Badge } from '@shared/ui/Badge'
import { LoadingRing } from '@shared/ui/LoadingRing'
import { fadeInUp, stagger } from '@shared/motion/variants'
import { useFileDropReveal } from '../hooks/useFileDropReveal'

export function FileDropResultPage() {
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation('tools')
  const state = useFileDropReveal(id)

  return (
    <motion.section variants={stagger} initial="hidden" animate="show" className="mx-auto flex max-w-2xl flex-col gap-6 px-4 py-10">
      <motion.div variants={fadeInUp}>
        <GlassPanel
          title={t('fileDropReveal.title')}
          icon={<ArrowDownTrayIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
          padding="lg"
        >
          {state.status === 'loading' && (
            <div className="flex items-center gap-2">
              <LoadingRing size="sm" />
              <span>{t('fileDropReveal.loading')}</span>
            </div>
          )}
          {state.status === 'missingKey' && <Badge tone="red">{t('fileDropReveal.missingKey')}</Badge>}
          {state.status === 'notFound' && <Badge tone="red">{t('fileDropReveal.notFound')}</Badge>}
          {state.status === 'decryptError' && <Badge tone="red">{t('fileDropReveal.decryptError')}</Badge>}
          {state.status === 'success' && (
            <div className="flex flex-col gap-3">
              <p className="font-mono text-sm">{state.meta.filename}</p>
              {state.meta.note && <p className="text-sm text-[color:var(--text-secondary)]">{state.meta.note}</p>}
              <NeonButton asChild>
                <a href={state.blobUrl} download={state.meta.filename}>
                  {t('fileDropReveal.download')}
                </a>
              </NeonButton>
            </div>
          )}
        </GlassPanel>
      </motion.div>
    </motion.section>
  )
}
