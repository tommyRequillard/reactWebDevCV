import { useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { TrophyIcon } from '@heroicons/react/24/solid'
import { useGamificationStore } from '@stores/gamificationStore'

const AUTO_DISMISS_MS = 4500

export function AchievementToast() {
  const pendingAchievement = useGamificationStore((s) => s.pendingAchievement)
  const dismissAchievement = useGamificationStore((s) => s.dismissAchievement)

  useEffect(() => {
    if (!pendingAchievement) return
    const timer = setTimeout(() => dismissAchievement(), AUTO_DISMISS_MS)
    return () => clearTimeout(timer)
  }, [pendingAchievement, dismissAchievement])

  return (
    <AnimatePresence>
      {pendingAchievement && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 60, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9, transition: { duration: 0.25 } }}
          transition={{ type: 'spring', stiffness: 350, damping: 25 }}
          className="pointer-events-auto fixed bottom-6 left-1/2 z-[200] flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-[color:var(--color-neon-amber-400)]/30 bg-[color:var(--glass-bg)] px-5 py-3 shadow-[0_0_30px_var(--color-neon-amber-400)/20] backdrop-blur-xl"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-[color:var(--color-neon-amber-400)]/15">
            <TrophyIcon className="h-5 w-5 text-[color:var(--color-neon-amber-400)]" />
          </span>
          <div className="flex flex-col">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-[color:var(--color-neon-amber-400)]">
              Succès déverrouillé
            </span>
            <span className="text-sm font-medium text-[color:var(--text-primary)]">
              {pendingAchievement}
            </span>
          </div>
          <button
            type="button"
            onClick={dismissAchievement}
            aria-label="Fermer"
            className="ml-2 text-[color:var(--text-muted)] transition-colors hover:text-[color:var(--text-primary)]"
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
