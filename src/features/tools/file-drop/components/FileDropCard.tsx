import { ChangeEvent, DragEvent, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { CloudArrowUpIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { Input } from '@shared/ui/Input'
import { NeonButton } from '@shared/ui/NeonButton'
import { Badge } from '@shared/ui/Badge'
import { GaugeLine } from '@shared/ui/GaugeLine'
import { useToast } from '@shared/ui/Toast'
import { useFileDropUpload } from '../hooks/useFileDropUpload'

export function FileDropCard() {
  const { t } = useTranslation('tools')
  const { push } = useToast()
  const [file, setFile] = useState<File | null>(null)
  const [note, setNote] = useState('')
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)
  const { link, loading, progress, error, upload } = useFileDropUpload()

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const dropped = e.dataTransfer.files[0]
    if (dropped) setFile(dropped)
  }

  const handleUpload = () => {
    if (!file) return
    void upload(file, note)
  }

  const handleCopy = () => {
    if (!link) return
    void navigator.clipboard.writeText(link)
    push({ type: 'success', message: t('secureNote.copied') })
  }

  return (
    <GlassPanel
      title={t('fileDrop.title')}
      icon={<CloudArrowUpIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
      padding="lg"
    >
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={(e) => e.key === 'Enter' && inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault()
          setIsDragging(true)
        }}
        onDragLeave={() => setIsDragging(false)}
        onDrop={handleDrop}
        className={`flex cursor-pointer flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed p-6 text-center text-sm transition-colors ${
          isDragging
            ? 'border-[color:var(--color-neon-cyan-400)] bg-[color-mix(in_srgb,var(--color-neon-cyan-400)_8%,transparent)]'
            : 'border-[color:var(--glass-border)]'
        }`}
      >
        <span>{file ? file.name : t('fileDrop.dropzoneLabel')}</span>
        <input
          ref={inputRef}
          type="file"
          className="hidden"
          onChange={(e: ChangeEvent<HTMLInputElement>) => setFile(e.target.files?.[0] ?? null)}
        />
      </div>

      <Input value={note} onChange={(e) => setNote(e.target.value)} placeholder={t('fileDrop.noteOptional')} />

      {error === 'tooLarge' && <p className="text-sm text-[color:var(--color-neon-red-400)]">{t('fileDrop.errors.tooLarge')}</p>}
      {error === 'empty' && <p className="text-sm text-[color:var(--color-neon-red-400)]">{t('fileDrop.errors.empty')}</p>}
      {(error === 'backendUnavailable' || error === 'uploadFailed') && (
        <Badge tone="amber">{t('errors.backendUnavailable')}</Badge>
      )}

      {loading && <GaugeLine filled={progress} total={100} className="w-full" />}

      <NeonButton type="button" loading={loading} disabled={!file} onClick={handleUpload}>
        {t('fileDrop.upload')}
      </NeonButton>

      <p className="text-xs text-[color:var(--text-muted)]">{t('fileDrop.maxSizeHint')}</p>

      {link && (
        <div className="flex flex-col gap-2 rounded-xl border border-[color:var(--glass-border)] bg-[var(--glass-bg)] p-3">
          <p className="text-xs text-[color:var(--text-muted)]">{t('fileDrop.linkCreated')}</p>
          <button type="button" onClick={handleCopy} className="break-all text-left font-mono text-xs text-[color:var(--color-neon-cyan-300)]">
            {link}
          </button>
        </div>
      )}
    </GlassPanel>
  )
}
