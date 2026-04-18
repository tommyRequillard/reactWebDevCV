import { CheckIcon } from '@heroicons/react/24/outline'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { motion } from 'framer-motion'
import { GlassCard } from '@shared/ui/GlassCard'
import { NeonButton } from '@shared/ui/NeonButton'
import { Badge } from '@shared/ui/Badge'
import { GradientText } from '@shared/ui/GradientText'
import { cardHover } from '@shared/motion/variants'
import type { Tier } from '../data/tiers'
import type { Billing } from './BillingToggle'

export interface TierCardProps {
  tier: Tier
  billing: Billing
}

export function TierCard({ tier, billing }: TierCardProps) {
  const { t } = useTranslation('services')
  const isCustom = tier.price === 'custom'
  const amount =
    tier.price === 'custom' ? null : billing === 'monthly' ? tier.price.monthly : tier.price.annual
  const suffix = billing === 'monthly' ? t('billing.perMonth') : t('billing.perYear')

  return (
    <motion.div variants={cardHover} initial="rest" whileHover="hover" className="h-full">
      <GlassCard
        variant={tier.featured ? 'elevated' : 'default'}
        glow={tier.featured ? 'neon' : 'none'}
        padding="lg"
        className="flex h-full flex-col gap-5"
      >
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-xl font-semibold">{t(`tiers.${tier.id}.name`)}</h3>
          {tier.featured && <Badge tone="neon">{t('tiers.pro.badge')}</Badge>}
        </div>
        <p className="text-sm text-[color:var(--text-secondary)]">
          {t(`tiers.${tier.id}.tagline`)}
        </p>

        <div className="flex items-baseline gap-1">
          {isCustom ? (
            <GradientText as="span" className="text-3xl font-bold">
              {t('cta.contact')}
            </GradientText>
          ) : (
            <>
              <GradientText as="span" className="text-4xl font-bold">
                {amount}€
              </GradientText>
              <span className="text-sm text-[color:var(--text-muted)]">{suffix}</span>
            </>
          )}
        </div>

        <ul className="flex flex-1 flex-col gap-2 text-sm text-[color:var(--text-secondary)]">
          {tier.features.map((f) => (
            <li key={f} className="flex items-start gap-2">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-[color:var(--color-neon-lime-400)]" />
              <span>{f}</span>
            </li>
          ))}
        </ul>

        <NeonButton
          asChild
          variant={tier.featured ? 'primary' : 'secondary'}
          fullWidth
        >
          <Link to="/contact">
            {isCustom ? t('cta.contact') : t('cta.choose')}
          </Link>
        </NeonButton>
      </GlassCard>
    </motion.div>
  )
}
