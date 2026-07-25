import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { KeyIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { NeonButton } from '@shared/ui/NeonButton'
import { Input } from '@shared/ui/Input'
import { useToast } from '@shared/ui/Toast'
import { usePasswordGenerator } from '../hooks/usePasswordGenerator'

export function PasswordGeneratorCard() {
  const { t } = useTranslation('tools')
  const { push } = useToast()
  const { password, generate } = usePasswordGenerator()
  const [length, setLength] = useState(16)
  const [uppercase, setUppercase] = useState(true)
  const [lowercase, setLowercase] = useState(true)
  const [numbers, setNumbers] = useState(true)
  const [symbols, setSymbols] = useState(false)

  const handleGenerate = () => {
    generate({ length, uppercase, lowercase, numbers, symbols })
  }

  const handleCopy = () => {
    if (!password) return
    void navigator.clipboard.writeText(password)
    push({ type: 'success', message: t('passwordGenerator.copied') })
  }

  return (
    <GlassPanel
      title={t('passwordGenerator.title')}
      icon={<KeyIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
      padding="lg"
    >
      <button
        type="button"
        onClick={handleCopy}
        disabled={!password}
        className="w-full truncate rounded-xl border border-[color:var(--glass-border)] bg-[var(--glass-bg)] px-3 py-2 text-left font-mono text-sm text-[color:var(--text-primary)] disabled:opacity-50"
      >
        {password || t('passwordGenerator.description')}
      </button>

      <div className="flex flex-col gap-3">
        <Input
          type="range"
          min={8}
          max={64}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
          label={`${t('passwordGenerator.length')} : ${length}`}
        />
        <div className="grid grid-cols-2 gap-2 text-sm">
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={uppercase} onChange={(e) => setUppercase(e.target.checked)} />
            {t('passwordGenerator.uppercase')}
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={lowercase} onChange={(e) => setLowercase(e.target.checked)} />
            {t('passwordGenerator.lowercase')}
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={numbers} onChange={(e) => setNumbers(e.target.checked)} />
            {t('passwordGenerator.numbers')}
          </label>
          <label className="flex items-center gap-2">
            <input type="checkbox" checked={symbols} onChange={(e) => setSymbols(e.target.checked)} />
            {t('passwordGenerator.symbols')}
          </label>
        </div>
        <NeonButton type="button" onClick={handleGenerate}>
          {t('passwordGenerator.generate')}
        </NeonButton>
      </div>
    </GlassPanel>
  )
}
