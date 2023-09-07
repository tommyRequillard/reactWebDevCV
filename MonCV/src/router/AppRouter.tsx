import {
  createBrowserRouter,
  createRoutesFromElements, RouterProvider, Route, Outlet,
} from "react-router-dom"
import Home from "../pages/Home"
import Error404 from "../pages/Error404"
import Calendar from "../pages/Calendar.tsx"
import Documents from "../pages/Documents.tsx"
import Portfolio from "../pages/Portfolio.tsx"
import Counter from "../pages/Counter.tsx"

export default function AppRouter() {
  const browserRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Outlet/>}>
      <Route index element={<Home/>}/>
      <Route path="/calendar" element={<Calendar/>}/>
      <Route path="/documents" element={<Documents/>}/>
      <Route path="/portfolio" element={<Portfolio/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="*" element={<Error404/>}/>
    </Route>
  ))

  return (
    <RouterProvider router={browserRoutes}/>
  )
}