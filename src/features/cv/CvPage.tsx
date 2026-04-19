import { ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import { GlassCard } from '@shared/ui/GlassCard'
import { NeonButton } from '@shared/ui/NeonButton'
import { GradientText } from '@shared/ui/GradientText'
import { useToast } from '@shared/ui/Toast'
import { ScrollReveal } from '@shared/ui/ScrollReveal'
import { fadeInUp } from '@shared/motion/variants'

import { CvHeader } from './components/CvHeader'
import { CvSidebar } from './components/CvSidebar'
import { PersonalProfileSection } from './components/PersonalProfileSection'
import { ExperiencesSection } from './components/ExperiencesSection'
import { SoftSkillsSection } from './components/SoftSkillsSection'
import { FormationsSection } from './components/FormationsSection'
import { LibrairiesSection } from './components/LibrairiesSection'
import { ToolsSection } from './components/ToolsSection'
import { InterestsSection } from './components/InterestsSection'
import { ForeignLanguagesSection } from './components/ForeignLanguagesSection'
import { usePdfExport } from './hooks/usePdfExport'

export function CvPage() {
  const { t } = useTranslation('cv')
  const { t: tc } = useTranslation('common')
  const { targetRef, isExporting, download } = usePdfExport({
    filename: 'cv-tommy-requillard.pdf',
  })
  const { push } = useToast()

  const handleDownload = async () => {
    try {
      await download()
    } catch {
      push({ type: 'error', message: tc('errors.unknown') })
    }
  }

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-6"
    >
      <header className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <GradientText as="h1" className="text-3xl font-bold sm:text-4xl">
            {t('page.title')}
          </GradientText>
          <p className="mt-1 text-sm text-[color:var(--text-secondary)]">{t('page.subtitle')}</p>
        </div>
        <NeonButton
          variant="primary"
          size="md"
          leftIcon={<ArrowDownTrayIcon className="h-4 w-4" />}
          loading={isExporting}
          onClick={handleDownload}
        >
          {tc('actions.downloadPdf')}
        </NeonButton>
      </header>

      <div ref={targetRef} id="cv-document">
        <GlassCard variant="no-blur" padding="none" radius="2xl" className="overflow-hidden">
          <CvHeader />
          <div className="flex flex-col md:flex-row">
            <CvSidebar />
            <div className="flex flex-1 flex-col px-6">
              <ScrollReveal>
                <PersonalProfileSection />
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <ExperiencesSection />
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <SoftSkillsSection />
              </ScrollReveal>
            </div>
          </div>
          <ScrollReveal>
            <FormationsSection />
          </ScrollReveal>
          <ScrollReveal delay={0.05}>
            <LibrairiesSection />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <ToolsSection />
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <InterestsSection />
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <ForeignLanguagesSection />
          </ScrollReveal>
        </GlassCard>
      </div>
    </motion.section>
  )
}
