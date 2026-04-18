import { useCallback, useRef, useState } from 'react'
import { exportElementToPdf, type ExportPdfOptions } from '../services/pdfService'

export function usePdfExport(options?: ExportPdfOptions) {
  const targetRef = useRef<HTMLDivElement>(null)
  const [isExporting, setIsExporting] = useState(false)
  const [error, setError] = useState<Error | null>(null)

  const download = useCallback(async () => {
    if (!targetRef.current) return
    setIsExporting(true)
    setError(null)
    try {
      await exportElementToPdf(targetRef.current, options)
    } catch (err) {
      setError(err instanceof Error ? err : new Error(String(err)))
    } finally {
      setIsExporting(false)
    }
  }, [options])

  return { targetRef, isExporting, error, download }
}
