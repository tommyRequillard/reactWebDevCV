import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import commonFr from './locales/fr/common.json'
import cvFr from './locales/fr/cv.json'
import portfolioFr from './locales/fr/portfolio.json'
import documentsFr from './locales/fr/documents.json'
import skillsFr from './locales/fr/skills.json'
import contactFr from './locales/fr/contact.json'
import servicesFr from './locales/fr/services.json'
import toolsFr from './locales/fr/tools.json'

import commonEn from './locales/en/common.json'
import cvEn from './locales/en/cv.json'
import portfolioEn from './locales/en/portfolio.json'
import documentsEn from './locales/en/documents.json'
import skillsEn from './locales/en/skills.json'
import contactEn from './locales/en/contact.json'
import servicesEn from './locales/en/services.json'
import toolsEn from './locales/en/tools.json'

export const NAMESPACES = [
  'common',
  'cv',
  'portfolio',
  'documents',
  'skills',
  'contact',
  'services',
  'tools',
] as const

export type Namespace = (typeof NAMESPACES)[number]

const resources = {
  fr: {
    common: commonFr,
    cv: cvFr,
    portfolio: portfolioFr,
    documents: documentsFr,
    skills: skillsFr,
    contact: contactFr,
    services: servicesFr,
    tools: toolsFr,
  },
  en: {
    common: commonEn,
    cv: cvEn,
    portfolio: portfolioEn,
    documents: documentsEn,
    skills: skillsEn,
    contact: contactEn,
    services: servicesEn,
    tools: toolsEn,
  },
} as const

void i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    supportedLngs: ['fr', 'en'],
    ns: NAMESPACES as unknown as string[],
    defaultNS: 'common',
    interpolation: { escapeValue: false },
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      lookupLocalStorage: 'cv.lang',
      caches: ['localStorage'],
    },
  })

export default i18n
