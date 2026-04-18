import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import { GradientText } from '@shared/ui/GradientText'
import { fadeInUp, stagger } from '@shared/motion/variants'

import { CertificationsGallery } from './components/CertificationsGallery'
import { TrelloBoard } from './components/TrelloBoard'

export function DocumentsPage() {
  const { t } = useTranslation('documents')
  return (
    <motion.section
      variants={stagger}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-6"
    >
      <motion.header variants={fadeInUp} className="flex flex-col gap-2">
        <GradientText as="h1" className="text-3xl font-bold sm:text-4xl">
          {t('page.title')}
        </GradientText>
        <p className="text-sm text-[color:var(--text-secondary)]">{t('page.subtitle')}</p>
      </motion.header>

      <motion.div variants={fadeInUp}>
        <CertificationsGallery />
      </motion.div>

      <motion.div variants={fadeInUp}>
        <TrelloBoard />
      </motion.div>
    </motion.section>
  )
}
