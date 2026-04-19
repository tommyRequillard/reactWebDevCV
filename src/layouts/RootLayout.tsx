import { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { BackgroundBlobs } from './BackgroundBlobs'
import { TerminalEmulator } from '@shared/ui/TerminalEmulator'
import { AchievementToast } from '@shared/ui/AchievementToast'
import { CustomCursor } from '@shared/ui/CustomCursor'
import { useGamificationStore } from '@stores/gamificationStore'

export function RootLayout() {
  const { pathname } = useLocation()
  const trackPage = useGamificationStore((s) => s.trackPage)

  useEffect(() => {
    trackPage(pathname)
  }, [pathname, trackPage])

  return (
    <div className="relative min-h-screen text-[color:var(--text-primary)]">
      <BackgroundBlobs />
      <Outlet />
      <TerminalEmulator />
      <AchievementToast />
      <CustomCursor />
    </div>
  )
}
