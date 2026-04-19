import type { ReactNode } from 'react'
import { motion } from 'framer-motion'
import { fadeInUp } from '@shared/motion/variants'

export interface PageTransitionProps {
  children: ReactNode
  className?: string
}

export function PageTransition({ children, className }: PageTransitionProps) {
  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      exit="exit"
      className={className}
    >
      {children}
    </motion.div>
  )
}
