import { useEffect, useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'

import { GlassPanel } from '@shared/ui/GlassPanel'
import { GradientText } from '@shared/ui/GradientText'
import { Select } from '@shared/ui/Select'
import { fadeInUp } from '@shared/motion/variants'
import { useAppDispatch, useAppSelector } from '@stores/hooks'
import { computeStats } from '@stores/slices/portfolioStatsSlice'

import { projects } from './data/projects'
import { ProjectGrid } from './components/ProjectGrid'
import { StacksRadarChart } from './components/StacksRadarChart'

export function PortfolioPage() {
  const { t } = useTranslation('portfolio')
  const dispatch = useAppDispatch()
  const stats = useAppSelector((s) => s.portfolioStats)
  const [filter, setFilter] = useState<string>('')

  useEffect(() => {
    dispatch(computeStats({ projects }))
  }, [dispatch])

  const stackOptions = useMemo(() => {
    const unique = Array.from(new Set(projects.flatMap((p) => p.stacks))).sort()
    return [
      { value: '', label: t('filters.all') },
      ...unique.map((s) => ({ value: s, label: s })),
    ]
  }, [t])

  const filtered = useMemo(
    () => (filter ? projects.filter((p) => p.stacks.includes(filter)) : projects),
    [filter],
  )

  const mostUsed = useMemo(() => {
    const entries = Object.entries(stats.stacksMostUsed)
    if (entries.length === 0) return null
    return entries.sort(([, a], [, b]) => b - a)[0]
  }, [stats.stacksMostUsed])

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-6"
    >
      <header className="flex flex-col gap-2">
        <GradientText as="h1" className="text-3xl font-bold sm:text-4xl">
          {t('page.title')}
        </GradientText>
        <p className="text-sm text-[color:var(--text-secondary)]">{t('page.subtitle')}</p>
      </header>

      <div className="grid gap-4 md:grid-cols-3">
        <GlassPanel padding="md">
          <p className="text-xs uppercase tracking-wide text-[color:var(--text-muted)]">
            {t('stats.projectCount', { count: 0 }).replace(/\d+/, '')}
          </p>
          <p className="mt-2 text-3xl font-bold">
            <GradientText>{stats.numberOfProjects}</GradientText>
          </p>
        </GlassPanel>
        <GlassPanel padding="md">
          <p className="text-xs uppercase tracking-wide text-[color:var(--text-muted)]">
            {t('stats.stackCount', { count: 0 }).replace(/\d+/, '')}
          </p>
          <p className="mt-2 text-3xl font-bold">
            <GradientText>{Object.keys(stats.stacksMostUsed).length}</GradientText>
          </p>
        </GlassPanel>
        <GlassPanel padding="md">
          <p className="text-xs uppercase tracking-wide text-[color:var(--text-muted)]">
            {t('stats.mostUsed')}
          </p>
          <p className="mt-2 text-3xl font-bold">
            {mostUsed ? <GradientText>{mostUsed[0]}</GradientText> : '—'}
          </p>
        </GlassPanel>
      </div>

      <GlassPanel title={t('radar.title')} padding="lg">
        <StacksRadarChart projects={projects} />
      </GlassPanel>

      <div className="flex items-end justify-end">
        <Select
          label={t('filters.placeholder')}
          options={stackOptions}
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="w-full sm:w-64"
        />
      </div>

      <ProjectGrid projects={filtered} />
    </motion.section>
  )
}
