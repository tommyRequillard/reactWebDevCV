import { motion } from 'framer-motion'
import { stagger, fadeInUp } from '@shared/motion/variants'
import { ProjectCard } from './ProjectCard'
import type { Project } from '../data/projects'

export interface ProjectGridProps {
  projects: Project[]
}

export function ProjectGrid({ projects }: ProjectGridProps) {
  return (
    <motion.ul
      variants={stagger}
      initial="hidden"
      animate="show"
      className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
    >
      {projects.map((p) => (
        <motion.li key={p.id} variants={fadeInUp}>
          <ProjectCard project={p} />
        </motion.li>
      ))}
    </motion.ul>
  )
}
