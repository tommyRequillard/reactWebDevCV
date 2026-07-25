import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { QrCodeIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { Input } from '@shared/ui/Input'
import { Select } from '@shared/ui/Select'
import { NeonButton } from '@shared/ui/NeonButton'
import { useQrGenerator } from '../hooks/useQrGenerator'

const SIZE_OPTIONS = [128, 256, 512]

function downloadUrl(url: string, filename: string) {
  const a = document.createElement('a')
  a.href = url
  a.download = filename
  a.click()
}

export function QrGeneratorCard() {
  const { t } = useTranslation('tools')
  const [text, setText] = useState('')
  const [size, setSize] = useState(256)
  const { dataUrl, svg, generate } = useQrGenerator()

  const handleGenerate = () => {
    void generate(text, size)
  }

  const handleDownloadSvg = () => {
    if (!svg) return
    const blob = new Blob([svg], { type: 'image/svg+xml' })
    downloadUrl(URL.createObjectURL(blob), 'qrcode.svg')
  }

  return (
    <GlassPanel
      title={t('qrGenerator.title')}
      icon={<QrCodeIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
      padding="lg"
    >
      <Input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder={t('qrGenerator.textPlaceholder')}
      />
      <div className="flex gap-2">
        <Select
          className="flex-1"
          options={SIZE_OPTIONS.map((s) => ({ value: String(s), label: `${s}px` }))}
          value={String(size)}
          onChange={(e) => setSize(Number(e.target.value))}
        />
        <NeonButton type="button" onClick={handleGenerate}>
          {t('qrGenerator.generate')}
        </NeonButton>
      </div>

      <div className="flex flex-col items-center gap-3">
        {dataUrl ? (
          <img src={dataUrl} alt="QR Code" className="rounded-lg" width={size} height={size} />
        ) : (
          <p className="text-sm text-[color:var(--text-muted)]">{t('qrGenerator.placeholder')}</p>
        )}
        {dataUrl && (
          <div className="flex gap-2">
            <NeonButton variant="secondary" size="sm" onClick={() => downloadUrl(dataUrl, 'qrcode.png')}>
              {t('qrGenerator.downloadPng')}
            </NeonButton>
            <NeonButton variant="secondary" size="sm" onClick={handleDownloadSvg}>
              {t('qrGenerator.downloadSvg')}
            </NeonButton>
          </div>
        )}
      </div>
    </GlassPanel>
  )
}
