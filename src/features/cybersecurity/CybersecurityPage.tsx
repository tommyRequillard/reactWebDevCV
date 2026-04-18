import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  EyeIcon,
  BoltIcon,
  ArrowTopRightOnSquareIcon,
  BeakerIcon,
} from '@heroicons/react/24/outline'

import { GradientText } from '@shared/ui/GradientText'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { GlassCard } from '@shared/ui/GlassCard'
import { fadeInUp, stagger } from '@shared/motion/variants'

import { VirusTotalCard } from './components/VirusTotalCard'
import { ShodanCard } from './components/ShodanCard'
import { HibpCard } from './components/HibpCard'
import { PipelinesRow } from './components/PipelinesRow'

export function CybersecurityPage() {
  const { t } = useTranslation('cybersecurity')
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
        <GlassCard variant="default" interactive padding="md" className="flex items-center gap-3">
          <EyeIcon className="h-8 w-8 text-[color:var(--color-neon-cyan-400)]" />
          <div className="flex flex-1 flex-col">
            <span className="text-sm font-semibold">Veille cybersécurité</span>
            <span className="text-xs text-[color:var(--text-muted)]">
              Sélection Wakelet · menaces & contre-mesures
            </span>
          </div>
          <a
            href="https://wakelet.com/@CyberMenaces4188"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 text-sm text-[color:var(--color-neon-cyan-400)] hover:underline"
          >
            Ouvrir <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </a>
        </GlassCard>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <GlassPanel
          title="Pipelines CI/CD"
          icon={<BoltIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
          padding="lg"
        >
          <PipelinesRow />
        </GlassPanel>
      </motion.div>

      <motion.div variants={fadeInUp}>
        <GlassPanel
          title="Laboratoire"
          icon={<BeakerIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
          padding="lg"
        >
          <div className="grid gap-4 lg:grid-cols-2">
            <VirusTotalCard />
            <ShodanCard />
            <div className="lg:col-span-2">
              <HibpCard />
            </div>
          </div>
        </GlassPanel>
      </motion.div>
    </motion.section>
  )
}
