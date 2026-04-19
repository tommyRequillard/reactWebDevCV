import type { ReactNode } from 'react'
import { motion, type Variants } from 'framer-motion'

export interface ScrollRevealProps {
  children: ReactNode
  /** Animation direction */
  direction?: 'up' | 'down' | 'left' | 'right'
  /** Delay in seconds */
  delay?: number
  /** Duration in seconds */
  duration?: number
  /** Only animate once */
  once?: boolean
  /** Extra CSS classes */
  className?: string
}

const directionOffsets: Record<string, { x: number; y: number }> = {
  up: { x: 0, y: 24 },
  down: { x: 0, y: -24 },
  left: { x: 24, y: 0 },
  right: { x: -24, y: 0 },
}

export function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.5,
  once = true,
  className,
}: ScrollRevealProps) {
  const offset = directionOffsets[direction]

  const variants: Variants = {
    hidden: { opacity: 0, x: offset.x, y: offset.y },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  }

  return (
    <motion.div
      variants={variants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-60px' }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
