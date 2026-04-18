import { Radio, RadioGroup } from '@headlessui/react'
import { useTranslation } from 'react-i18next'
import { cn } from '@shared/lib/cn'

export type Billing = 'monthly' | 'annual'

export interface BillingToggleProps {
  value: Billing
  onChange: (v: Billing) => void
}

export function BillingToggle({ value, onChange }: BillingToggleProps) {
  const { t } = useTranslation('services')
  const options: Billing[] = ['monthly', 'annual']
  return (
    <RadioGroup
      value={value}
      onChange={onChange}
      className="inline-flex rounded-full border border-[color:var(--glass-border)] bg-[var(--glass-bg)] p-1 text-sm backdrop-blur-[10px]"
    >
      {options.map((opt) => (
        <Radio
          key={opt}
          value={opt}
          className={cn(
            'cursor-pointer rounded-full px-4 py-1.5 font-medium transition-colors focus:outline-none',
            value === opt
              ? 'bg-[image:var(--grad-neon)] text-[color:var(--text-on-neon)]'
              : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]',
          )}
        >
          {t(`billing.${opt}`)}
        </Radio>
      ))}
    </RadioGroup>
  )
}
