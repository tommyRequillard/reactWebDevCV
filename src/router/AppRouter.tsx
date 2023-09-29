import {
  createBrowserRouter,
  createRoutesFromElements, RouterProvider, Route, Outlet,
} from "react-router-dom"
import {lazy, Suspense} from "react"
import Loading from "../components/Loading.tsx"

const Home = lazy(() => import('../pages/Home'))
const Error404 = lazy(() => import('../pages/Error404'))
const Documents = lazy(() => import('../pages/Documents'))
const Portfolio = lazy(() => import('../pages/Portfolio'))
const Counter = lazy(() => import('../pages/Counter'))
const Stats = lazy(() => import('../pages/Stats'))


export default function AppRouter() {
  const browserRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Outlet/>}>
      <Route index element={<Suspense fallback={<Loading/>}> <Home/></Suspense>}/>
      <Route path='/portfolio' element={<Suspense fallback={<Loading/>}> <Portfolio/></Suspense>}/>
      <Route path="/documents" element={<Suspense fallback={<Loading/>}> <Documents/></Suspense>}/>
      <Route path="/counter" element={<Suspense fallback={<Loading/>}> <Counter/></Suspense>}/>
      <Route path="/stats" element={<Suspense fallback={<Loading/>}> <Stats/></Suspense>}/>
      <Route path="*" element={<Suspense fallback={<Loading/>}> <Error404/></Suspense>}/>
    </Route>
  ))

  return (
    <RouterProvider router={browserRoutes}/>
  )
}