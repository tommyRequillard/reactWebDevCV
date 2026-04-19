import { Outlet } from 'react-router-dom'
import { BackgroundBlobs } from './BackgroundBlobs'
import { TerminalEmulator } from '@shared/ui/TerminalEmulator'
import { AchievementToast } from '@shared/ui/AchievementToast'

export function RootLayout() {
  return (
    <div className="relative min-h-screen text-[color:var(--text-primary)]">
      <BackgroundBlobs />
      <Outlet />
      <TerminalEmulator />
      <AchievementToast />
    </div>
  )
}
