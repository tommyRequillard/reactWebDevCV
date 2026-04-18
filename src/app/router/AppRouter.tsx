import { useMemo } from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import { routes } from './routes'

interface AppRouterProps {
  basename?: string
}

export function AppRouter({ basename }: AppRouterProps) {
  const router = useMemo(() => createBrowserRouter(routes, { basename }), [basename])
  return <RouterProvider router={router} />
}
