import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon, BeakerIcon, BoltIcon, EyeIcon } from '@heroicons/react/24/outline'
import { GradientText } from '@shared/ui/GradientText'
import { GlassCard } from '@shared/ui/GlassCard'
import { GlassPanel } from '@shared/ui/GlassPanel'
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
import { SpeedTestCard } from './speed-test/components/SpeedTestCard'
import { Base64Card } from './components/Base64Card'
import { TextDiffCard } from './text-diff/components/TextDiffCard'
import { QrGeneratorCard } from './qr-generator/components/QrGeneratorCard'
import { ScreenTesterLauncherCard } from './components/ScreenTesterLauncherCard'
import { VirusTotalCard } from './cybersecurity/components/VirusTotalCard'
import { ShodanCard } from './cybersecurity/components/ShodanCard'
import { HibpCard } from './cybersecurity/components/HibpCard'
import { PipelinesRow } from './cybersecurity/components/PipelinesRow'

type TabId = 'secure-share' | 'network' | 'dev' | 'display' | 'cybersecurity'

const TAB_IDS: TabId[] = ['secure-share', 'network', 'dev', 'cybersecurity', 'display']

export function ToolsPage() {
  const { t } = useTranslation('tools')
  const [searchParams] = useSearchParams()
  const requestedTab = searchParams.get('tab')
  const [tab, setTab] = useState<TabId>(
    TAB_IDS.includes(requestedTab as TabId) ? (requestedTab as TabId) : 'secure-share',
  )

  const tabs: TabItem[] = [
    { id: 'secure-share', label: t('tabs.secureShare') },
    { id: 'network', label: t('tabs.network') },
    { id: 'dev', label: t('tabs.dev') },
    { id: 'cybersecurity', label: t('tabs.cybersecurity') },
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

      {tab === 'cybersecurity' ? (
        <motion.div variants={fadeInUp} className="flex flex-col gap-6">
          <GlassCard variant="default" interactive padding="md" className="flex items-center gap-3">
            <EyeIcon className="h-8 w-8 text-[color:var(--color-neon-cyan-400)]" />
            <div className="flex flex-1 flex-col">
              <span className="text-sm font-semibold">{t('cyberWatch.title')}</span>
              <span className="text-xs text-[color:var(--text-muted)]">{t('cyberWatch.subtitle')}</span>
            </div>
            <a
              href="https://wakelet.com/@CyberMenaces4188"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-sm text-[color:var(--color-neon-cyan-400)] hover:underline"
            >
              {t('cyberWatch.open')} <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          </GlassCard>

          <GlassPanel
            title={t('pipelines.title')}
            icon={<BoltIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
            padding="lg"
          >
            <PipelinesRow />
          </GlassPanel>

          <GlassPanel
            title={t('laboratory.title')}
            icon={<BeakerIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
            padding="lg"
          >
            <div className="grid gap-4 lg:grid-cols-2">
              <VirusTotalCard />
              <ShodanCard />
              <div className="lg:col-span-2">
                <HibpCard />
              </div>
            </div>
          </GlassPanel>
        </motion.div>
      ) : (
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
              <div className="lg:col-span-2">
                <SpeedTestCard />
              </div>
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
      )}
    </motion.section>
  )
}
