import {
  createBrowserRouter,
  createRoutesFromElements, RouterProvider, Route, Outlet,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading.tsx";

const Home = lazy(() => import('../pages/Home'));
const Error404 = lazy(() => import('../pages/Error404'));
const Documents = lazy(() => import('../pages/Documents'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Cybersecurity = lazy(() => import('../pages/Cybersecurity'));
const Skills = lazy(() => import('../pages/Skills.tsx'));

export default function AppRouter() {
  const browserRoutes = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
      <Route path="/portfolio" element={<Suspense fallback={<Loading />}><Portfolio /></Suspense>} />
      <Route path="/cybersecurity" element={<Suspense fallback={<Loading />}><Cybersecurity /></Suspense>} />
      <Route path="/documents" element={<Suspense fallback={<Loading />}><Documents /></Suspense>} />
      <Route path="/skills" element={<Suspense fallback={<Loading />}><Skills /></Suspense>} />
      <Route path="*" element={<Suspense fallback={<Loading />}><Error404 /></Suspense>} />
    </Route>
  ));

  return (
    <RouterProvider router={browserRoutes} />
  );
}