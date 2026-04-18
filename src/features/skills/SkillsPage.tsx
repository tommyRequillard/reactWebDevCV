import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import { GradientText } from '@shared/ui/GradientText'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { Tabs } from '@shared/ui/Tabs'
import { fadeInUp, stagger } from '@shared/motion/variants'

import { SkillsRadarChart } from './components/SkillsRadarChart'
import { technicalCategories } from './data/technicalSkills'
import { behavioralSkills } from './data/behavioralSkills'

const behavioralTab = {
  id: 'behavioral',
  labelKey: 'tabs.behavioral',
}

export function SkillsPage() {
  const { t } = useTranslation('skills')
  const [active, setActive] = useState<string>('frontend')

  const tabs = useMemo(
    () => [
      ...technicalCategories.map((cat) => ({ id: cat.id, label: t(cat.labelKey) })),
      { id: behavioralTab.id, label: t(behavioralTab.labelKey) },
    ],
    [t],
  )

  const technical = technicalCategories.find((c) => c.id === active)

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

      <motion.div variants={fadeInUp} className="flex justify-center">
        <Tabs tabs={tabs} value={active} onChange={setActive} variant="pill" />
      </motion.div>

      <motion.div variants={fadeInUp}>
        {technical && (
          <GlassPanel title={t(technical.labelKey)} padding="lg">
            <SkillsRadarChart data={technical.skills} name={t(technical.labelKey)} />
          </GlassPanel>
        )}
        {active === 'behavioral' && (
          <div className="grid gap-5 lg:grid-cols-2">
            <GlassPanel title="Contributions individuelles" padding="lg">
              <SkillsRadarChart data={behavioralSkills.individual} name="Individuel" />
            </GlassPanel>
            <GlassPanel title="Contributions interpersonnelles" padding="lg">
              <SkillsRadarChart data={behavioralSkills.interpersonal} name="Interpersonnel" />
            </GlassPanel>
            <GlassPanel title="Contributions organisationnelles" padding="lg">
              <SkillsRadarChart data={behavioralSkills.organizational} name="Organisationnel" />
            </GlassPanel>
            <GlassPanel title="Ressources personnelles" padding="lg">
              <SkillsRadarChart data={behavioralSkills.personal} name="Ressources" />
            </GlassPanel>
          </div>
        )}
      </motion.div>
    </motion.section>
  )
}
