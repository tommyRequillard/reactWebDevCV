import { motion } from 'framer-motion'
import { useReducedMotion } from '@shared/hooks/useReducedMotion'
import { useMediaQuery } from '@shared/hooks/useMediaQuery'

export function BackgroundBlobs() {
  const reduced = useReducedMotion()
  const isMobile = useMediaQuery('(max-width: 768px)')

  if (reduced) return null

  const floatA = {
    animate: {
      x: [0, 40, -20, 0],
      y: [0, -30, 20, 0],
    },
    transition: { duration: 22, ease: 'easeInOut' as const, repeat: Infinity },
  }

  const floatB = {
    animate: {
      x: [0, -30, 20, 0],
      y: [0, 20, -40, 0],
    },
    transition: { duration: 26, ease: 'easeInOut' as const, repeat: Infinity },
  }

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        animate={floatA.animate}
        transition={floatA.transition}
        className="absolute -left-40 -top-40 h-[480px] w-[480px] rounded-full opacity-60 blur-3xl"
        style={{ background: 'radial-gradient(closest-side, var(--color-neon-cyan-400), transparent)' }}
      />
      {!isMobile && (
        <motion.div
          animate={floatB.animate}
          transition={floatB.transition}
          className="absolute -right-40 bottom-[-180px] h-[520px] w-[520px] rounded-full opacity-50 blur-3xl"
          style={{
            background:
              'radial-gradient(closest-side, var(--color-neon-purple-500), transparent)',
          }}
        />
      )}
    </div>
  )
}
