import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Loading from "../components/Loading.tsx";

const Home = lazy(() => import('../pages/Home'));
const Services = lazy(()=> import ('../pages/Services.tsx'));
const Error404 = lazy(() => import('../pages/Error404'));
const Documents = lazy(() => import('../pages/Documents'));
const Portfolio = lazy(() => import('../pages/Portfolio'));
const Cybersecurity = lazy(() => import('../pages/Cybersecurity'));
const Skills = lazy(() => import('../pages/Skills.tsx'));
const Contact = lazy(() => import('../pages/Contact.tsx'));

export default function AppRouter() {
  // Créer les routes
  const routes = createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={<Suspense fallback={<Loading />}><Home /></Suspense>} />
      <Route path="/Services" element={<Suspense fallback={<Loading />}><Services /></Suspense>} />
      <Route path="/portfolio" element={<Suspense fallback={<Loading />}><Portfolio /></Suspense>} />
      <Route path="/cybersecurity" element={<Suspense fallback={<Loading />}><Cybersecurity /></Suspense>} />
      <Route path="/documents" element={<Suspense fallback={<Loading />}><Documents /></Suspense>} />
      <Route path="/skills" element={<Suspense fallback={<Loading />}><Skills /></Suspense>} />
      <Route path="/contact" element={<Suspense fallback={<Loading />}><Contact /></Suspense>} />
      <Route path="*" element={<Suspense fallback={<Loading />}><Error404 /></Suspense>} />
    </Route>
  );

  // Créer le routeur avec les options futures
  const browserRoutes = createBrowserRouter(routes, {
    future: {
      v7_relativeSplatPath: true,
      v7_fetcherPersist: true,
      v7_normalizeFormMethod: true,
      v7_partialHydration: true,
      v7_skipActionErrorRevalidation: true,
    },
  });

  return (
    <RouterProvider router={browserRoutes} future={{ v7_startTransition: true }}/>
  );
}