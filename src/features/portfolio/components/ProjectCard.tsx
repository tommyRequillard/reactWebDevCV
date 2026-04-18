import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { useTranslation } from 'react-i18next'
import { GlassCard } from '@shared/ui/GlassCard'
import { Badge } from '@shared/ui/Badge'
import { cardHover } from '@shared/motion/variants'
import type { Project } from '../data/projects'

export interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const { t } = useTranslation('portfolio')
  return (
    <motion.a
      href={project.link}
      target="_blank"
      rel="noreferrer"
      variants={cardHover}
      initial="rest"
      whileHover="hover"
      className="block"
      aria-label={`${project.name} — ${t('project.viewLive')}`}
    >
      <GlassCard
        variant="default"
        interactive
        padding="none"
        radius="2xl"
        className="flex h-full flex-col overflow-hidden"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={project.image}
            alt=""
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[color:var(--bg-canvas)] to-transparent" />
          <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[color-mix(in_srgb,var(--bg-elevated)_80%,transparent)] text-[color:var(--text-primary)] backdrop-blur-md">
            <ArrowTopRightOnSquareIcon className="h-4 w-4" />
          </span>
        </div>
        <div className="flex flex-1 flex-col gap-3 p-4">
          <h3 className="text-lg font-semibold">{project.name}</h3>
          <p className="flex-1 text-sm text-[color:var(--text-secondary)]">
            {project.description}
          </p>
          <ul className="flex flex-wrap gap-1.5">
            {project.stacks.slice(0, 6).map((s) => (
              <li key={s}>
                <Badge tone="cyan">{s}</Badge>
              </li>
            ))}
            {project.stacks.length > 6 && (
              <li>
                <Badge tone="neutral">+{project.stacks.length - 6}</Badge>
              </li>
            )}
          </ul>
        </div>
      </GlassCard>
    </motion.a>
  )
}
