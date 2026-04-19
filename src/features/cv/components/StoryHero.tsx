import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import {
  WrenchScrewdriverIcon,
  ArrowsRightLeftIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline'
import type { ComponentType, SVGProps } from 'react'

import { GlassCard } from '@shared/ui/GlassCard'
import { GradientText } from '@shared/ui/GradientText'
import { storyChapters, type StoryChapterId } from '../data/story'

const chapterIcons: Record<StoryChapterId, ComponentType<SVGProps<SVGSVGElement>>> = {
  builder: WrenchScrewdriverIcon,
  bridge: ArrowsRightLeftIcon,
  vision: SparklesIcon,
}

export function StoryHero() {
  const { t } = useTranslation('cv')

  return (
    <section className="flex flex-col gap-6">
      <div className="flex flex-col gap-2 text-center sm:text-left">
        <GradientText as="h2" className="text-2xl font-bold sm:text-3xl">
          {t('story.headline')}
        </GradientText>
        <p className="text-sm text-[color:var(--text-secondary)] sm:text-base">
          {t('story.subtitle')}
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {storyChapters.map((chapter, index) => {
          const Icon = chapterIcons[chapter.id]
          return (
            <motion.div
              key={chapter.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              <GlassCard padding="md" radius="lg" glow="cyan" className="h-full">
                <div className="flex flex-col gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-[color:var(--color-neon-cyan-400)]/10 text-[color:var(--color-neon-cyan-400)] ring-1 ring-[color:var(--color-neon-cyan-400)]/40">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="text-base font-semibold text-[color:var(--text-primary)]">
                    {t(`story.chapters.${chapter.i18nKey}.title`)}
                  </h3>
                  <p className="text-sm leading-relaxed text-[color:var(--text-secondary)]">
                    {t(`story.chapters.${chapter.i18nKey}.body`)}
                  </p>
                </div>
              </GlassCard>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
