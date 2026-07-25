import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { GradientText } from '@shared/ui/GradientText'
import { Tabs, type TabItem } from '@shared/ui/Tabs'
import { fadeInUp, stagger } from '@shared/motion/variants'

import { SecureNoteCard } from './secure-note/components/SecureNoteCard'
import { FileDropCard } from './file-drop/components/FileDropCard'
import { HashCalculatorCard } from './hash-calculator/components/HashCalculatorCard'
import { PasswordGeneratorCard } from './components/PasswordGeneratorCard'
import { DnsLookupCard } from './components/DnsLookupCard'
import { WhoisCard } from './components/WhoisCard'
import { SubnetCalculatorCard } from './components/SubnetCalculatorCard'
import { UnitConverterCard } from './components/UnitConverterCard'
import { Base64Card } from './components/Base64Card'
import { TextDiffCard } from './text-diff/components/TextDiffCard'
import { QrGeneratorCard } from './qr-generator/components/QrGeneratorCard'
import { ScreenTesterLauncherCard } from './components/ScreenTesterLauncherCard'

type TabId = 'secure-share' | 'network' | 'dev' | 'display'

export function ToolsPage() {
  const { t } = useTranslation('tools')
  const [tab, setTab] = useState<TabId>('secure-share')

  const tabs: TabItem[] = [
    { id: 'secure-share', label: t('tabs.secureShare') },
    { id: 'network', label: t('tabs.network') },
    { id: 'dev', label: t('tabs.dev') },
    { id: 'display', label: t('tabs.display') },
  ]

  return (
    <motion.section variants={stagger} initial="hidden" animate="show" className="flex flex-col gap-6">
      <motion.header variants={fadeInUp} className="flex flex-col gap-2">
        <GradientText as="h1" className="text-3xl font-bold sm:text-4xl">
          {t('page.title')}
        </GradientText>
        <p className="text-sm text-[color:var(--text-secondary)]">{t('page.subtitle')}</p>
      </motion.header>

      <motion.div variants={fadeInUp}>
        <Tabs tabs={tabs} value={tab} onChange={(id) => setTab(id as TabId)} />
      </motion.div>

      <motion.div variants={fadeInUp} className="grid gap-4 lg:grid-cols-2">
        {tab === 'secure-share' && (
          <>
            <SecureNoteCard />
            <div className="lg:col-span-2">
              <FileDropCard />
            </div>
            <HashCalculatorCard />
            <PasswordGeneratorCard />
          </>
        )}
        {tab === 'network' && (
          <>
            <DnsLookupCard />
            <WhoisCard />
            <SubnetCalculatorCard />
            <UnitConverterCard />
          </>
        )}
        {tab === 'dev' && (
          <>
            <Base64Card />
            <div className="lg:col-span-2">
              <TextDiffCard />
            </div>
            <QrGeneratorCard />
          </>
        )}
        {tab === 'display' && <ScreenTesterLauncherCard />}
      </motion.div>
    </motion.section>
  )
}
