import { Outlet } from 'react-router-dom'
import { Sidebar } from './Sidebar'
import { MobileSidebar } from './MobileSidebar'
import { TopBar } from './TopBar'
import { SecondaryColumn } from './SecondaryColumn'

export function AppShell() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <MobileSidebar />

      <div className="flex min-w-0 flex-1 flex-col">
        <TopBar />
        <div className="flex flex-1">
          <main className="min-w-0 flex-1 px-4 py-6 sm:px-6 lg:px-8 lg:py-8">
            <Outlet />
          </main>
          <SecondaryColumn />
        </div>
      </div>
    </div>
  )
}
