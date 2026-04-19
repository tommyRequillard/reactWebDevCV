import { Outlet } from 'react-router-dom'
import { BackgroundBlobs } from './BackgroundBlobs'
import { TerminalEmulator } from '@shared/ui/TerminalEmulator'
import { AchievementToast } from '@shared/ui/AchievementToast'
import { CustomCursor } from '@shared/ui/CustomCursor'

export function RootLayout() {
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
