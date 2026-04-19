import type { RouteObject } from 'react-router-dom'
import { RootLayout } from '@layouts/RootLayout'
import { AppShell } from '@layouts/AppShell'
import { LandingPage } from '@features/landing/LandingPage'
import { CvPage } from '@features/cv/CvPage'
import { ServicesPage } from '@features/services/ServicesPage'
import { PortfolioPage } from '@features/portfolio/PortfolioPage'
import { CybersecurityPage } from '@features/cybersecurity/CybersecurityPage'
import { DocumentsPage } from '@features/documents/DocumentsPage'
import { SkillsPage } from '@features/skills/SkillsPage'
import { ContactPage } from '@features/contact/ContactPage'
import { Error404Page } from '@features/error/Error404Page'

export const routes: RouteObject[] = [
  {
    element: <RootLayout />,
    children: [
      { index: true, element: <LandingPage />, handle: { titleKey: 'nav.cv', titleNs: 'common' } },
      {
        element: <AppShell />,
        children: [
          {
            path: 'cv',
            element: <CvPage />,
            handle: { titleKey: 'nav.cv', titleNs: 'common' },
          },
          {
            path: 'services',
            element: <ServicesPage />,
            handle: { titleKey: 'nav.services', titleNs: 'common' },
          },
          {
            path: 'portfolio',
            element: <PortfolioPage />,
            handle: { titleKey: 'nav.portfolio', titleNs: 'common', secondary: 'articles' },
          },
          {
            path: 'cybersecurity',
            element: <CybersecurityPage />,
            handle: { titleKey: 'nav.cybersecurity', titleNs: 'common' },
          },
          {
            path: 'documents',
            element: <DocumentsPage />,
            handle: { titleKey: 'nav.documents', titleNs: 'common' },
          },
          {
            path: 'skills',
            element: <SkillsPage />,
            handle: { titleKey: 'nav.skills', titleNs: 'common' },
          },
          {
            path: 'contact',
            element: <ContactPage />,
            handle: { titleKey: 'nav.contact', titleNs: 'common' },
          },
          { path: '*', element: <Error404Page /> },
        ],
      },
    ],
  },
]
