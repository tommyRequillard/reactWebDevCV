import { useState } from 'react'
import { motion } from 'framer-motion'
import { useTranslation } from 'react-i18next'
import { GradientText } from '@shared/ui/GradientText'
import { stagger, fadeInUp } from '@shared/motion/variants'
import { tiers } from './data/tiers'
import { BillingToggle, type Billing } from './components/BillingToggle'
import { TierCard } from './components/TierCard'

export function ServicesPage() {
  const { t } = useTranslation('services')
  const [billing, setBilling] = useState<Billing>('monthly')

  return (
    <motion.section
      variants={fadeInUp}
      initial="hidden"
      animate="show"
      className="flex flex-col gap-8"
    >
      <header className="flex flex-col items-center gap-4 text-center">
        <GradientText as="h1" className="text-3xl font-bold sm:text-4xl">
          {t('page.title')}
        </GradientText>
        <p className="max-w-2xl text-sm text-[color:var(--text-secondary)] sm:text-base">
          {t('page.subtitle')}
        </p>
        <BillingToggle value={billing} onChange={setBilling} />
      </header>

      <motion.div
        variants={stagger}
        initial="hidden"
        animate="show"
        className="grid gap-6 md:grid-cols-2 xl:grid-cols-3"
      >
        {tiers.map((tier) => (
          <motion.div key={tier.id} variants={fadeInUp}>
            <TierCard tier={tier} billing={billing} />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  )
}
