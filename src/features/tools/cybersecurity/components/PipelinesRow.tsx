import type { ReactNode } from 'react'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { motion } from 'framer-motion'
import { GlassCard } from '@shared/ui/GlassCard'
import { cardHover } from '@shared/motion/variants'

interface PipelineLink {
  label: string
  href: string
  logo: ReactNode
}

const pipelines: PipelineLink[] = [
  {
    label: 'GitHub Actions',
    href: 'https://github.com/tommyRequillard/reactWebDevCV/actions',
    logo: (
      <svg viewBox="0 0 48 48" className="h-10 w-10">
        <path
          fill="#00bcd4"
          d="M24 4C13 4 4 13 4 24s9 20 20 20 20-9 20-20S35 4 24 4zm0 36c-8.8 0-16-7.2-16-16S15.2 8 24 8s16 7.2 16 16-7.2 16-16 16z"
        />
        <path
          fill="currentColor"
          d="M14.2 23.5c0-4.4 4.6-8.5 10.3-8.5s10.3 4 10.3 8.5S31.5 31 24.5 31s-10.3-3.1-10.3-7.5z"
        />
      </svg>
    ),
  },
  {
    label: 'GitLab CI',
    href: 'https://gitlab.com/tommyRequillard/reactWebDevCV/-/pipelines',
    logo: (
      <svg viewBox="0 0 48 48" className="h-10 w-10">
        <path fill="#e53935" d="M24 43L16 20 32 20z" />
        <path fill="#ff7043" d="M24 43L42 20 32 20z" />
        <path fill="#e53935" d="M37 5L42 20 32 20z" />
        <path fill="#ffa726" d="M24 43L42 20 45 28z" />
        <path fill="#ff7043" d="M24 43L6 20 16 20z" />
        <path fill="#e53935" d="M11 5L6 20 16 20z" />
        <path fill="#ffa726" d="M24 43L6 20 3 28z" />
      </svg>
    ),
  },
]

export function PipelinesRow() {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {pipelines.map((p) => (
        <motion.a
          key={p.label}
          href={p.href}
          target="_blank"
          rel="noreferrer"
          variants={cardHover}
          initial="rest"
          whileHover="hover"
          className="block"
        >
          <GlassCard variant="default" interactive padding="md" className="flex items-center gap-4">
            <div className="text-[color:var(--color-neon-cyan-400)]">{p.logo}</div>
            <div className="flex flex-1 flex-col">
              <span className="text-sm font-semibold text-[color:var(--text-primary)]">
                {p.label}
              </span>
              <span className="text-xs text-[color:var(--text-muted)]">
                Pipeline CI/CD · build & tests
              </span>
            </div>
            <ArrowTopRightOnSquareIcon className="h-5 w-5 text-[color:var(--text-muted)]" />
          </GlassCard>
        </motion.a>
      ))}
    </div>
  )
}
