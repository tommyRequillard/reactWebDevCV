import {
  createBrowserRouter,
  createRoutesFromElements, RouterProvider, Route, Outlet,
} from "react-router-dom"
import {lazy, Suspense} from "react"

const Home = lazy(() => import('../pages/Home'))
const Error404 = lazy(() => import('../pages/Error404'))
const Documents = lazy(() => import('../pages/Documents'))
const Portfolio = lazy(() => import('../pages/Portfolio'))
const Counter = lazy(() => import('../pages/Counter'))

export default function AppRouter() {
  const browserRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Outlet/>}>
      <Route index element={<Suspense fallback={<>Chargement</>}> <Home/></Suspense>}/>
      <Route path='/portfolio' element={<Suspense fallback={<>Chargement</>}> <Portfolio/></Suspense>}/>
      <Route path="/documents" element={<Suspense fallback={<>Chargement</>}> <Documents/></Suspense>}/>
      <Route path="/counter" element={<Suspense fallback={<>Chargement</>}> <Counter/></Suspense>}/>
      <Route path="*" element={<Suspense fallback={<>Chargement</>}> <Error404/></Suspense>}/>
    </Route>
  ))

  return (
    <RouterProvider router={browserRoutes}/>
  )
}