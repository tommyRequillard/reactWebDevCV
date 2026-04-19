import type { ComponentType, SVGProps } from 'react'
import {
  HomeIcon,
  BuildingStorefrontIcon,
  PhotoIcon,
  ShieldCheckIcon,
  DocumentDuplicateIcon,
  UserGroupIcon,
  EnvelopeOpenIcon,
} from '@heroicons/react/24/outline'

export interface NavItem {
  to: string
  labelKey: string
  icon: ComponentType<SVGProps<SVGSVGElement>>
  end?: boolean
}

export const NAV_ITEMS: NavItem[] = [
  { to: '/cv', labelKey: 'nav.cv', icon: HomeIcon, end: true },
  { to: '/services', labelKey: 'nav.services', icon: BuildingStorefrontIcon },
  { to: '/portfolio', labelKey: 'nav.portfolio', icon: PhotoIcon },
  { to: '/cybersecurity', labelKey: 'nav.cybersecurity', icon: ShieldCheckIcon },
  { to: '/documents', labelKey: 'nav.documents', icon: DocumentDuplicateIcon },
  { to: '/skills', labelKey: 'nav.skills', icon: UserGroupIcon },
  { to: '/contact', labelKey: 'nav.contact', icon: EnvelopeOpenIcon },
]
