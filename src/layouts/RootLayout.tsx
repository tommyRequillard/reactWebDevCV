import { Outlet } from 'react-router-dom'
import { BackgroundBlobs } from './BackgroundBlobs'

export function RootLayout() {
  return (
    <div className="relative min-h-screen text-[color:var(--text-primary)]">
      <BackgroundBlobs />
      <Outlet />
    </div>
  )
}
