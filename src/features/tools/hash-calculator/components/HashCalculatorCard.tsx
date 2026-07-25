import { ChangeEvent, DragEvent, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { DocumentTextIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { Select } from '@shared/ui/Select'
import { useToast } from '@shared/ui/Toast'
import { HASH_ALGORITHMS, useFileHash, type HashAlgorithm } from '../hooks/useFileHash'

export function HashCalculatorCard() {
  const { t } = useTranslation('tools')
  const { push } = useToast()
  const { results, loading, computeHashes } = useFileHash()
  const [algorithm, setAlgorithm] = useState<HashAlgorithm>('SHA-256')
  const [isDragging, setIsDragging] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (files: FileList | null) => {
    if (!files || files.length === 0) return
    void computeHashes(files, algorithm)
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    handleFiles(e.dataTransfer.files)
  }

  const handleCopy = (hash: string) => {
    void navigator.clipboard.writeText(hash)
    push({ type: 'success', message: t('hashCalculator.copy') })
  }

  return (
    <GlassPanel
      title={t('hashCalculator.title')}
      icon={<DocumentTextIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
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
        <span>{loading ? t('hashCalculator.computing') : t('hashCalculator.dropzoneLabel')}</span>
        <input
          ref={inputRef}
          type="file"
          multiple
          className="hidden"
          onChange={(e: ChangeEvent<HTMLInputElement>) => handleFiles(e.target.files)}
        />
      </div>

      <Select
        label={t('hashCalculator.algorithm')}
        options={HASH_ALGORITHMS.map((a) => ({ value: a, label: a }))}
        value={algorithm}
        onChange={(e) => setAlgorithm(e.target.value as HashAlgorithm)}
      />

      {results.length > 0 && (
        <ul className="flex flex-col gap-2">
          {results.map((r) => (
            <li key={r.fileName} className="flex flex-col gap-1">
              <span className="text-xs text-[color:var(--text-muted)]">{r.fileName}</span>
              <button
                type="button"
                onClick={() => handleCopy(r.hash)}
                className="break-all rounded-lg border border-[color:var(--glass-border)] bg-[var(--glass-bg)] px-2 py-1.5 text-left font-mono text-xs"
              >
                {r.hash}
              </button>
            </li>
          ))}
        </ul>
      )}
    </GlassPanel>
  )
}
