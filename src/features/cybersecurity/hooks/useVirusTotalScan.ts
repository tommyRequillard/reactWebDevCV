import { useCallback, useState } from 'react'
import axios from 'axios'

export interface VirusTotalEngine {
  result: string
  category: string
}

export interface VirusTotalReport {
  results: Record<string, VirusTotalEngine>
}

export interface VirusTotalStats {
  total: number
  clean: number
  malicious: number
  cleanPercent: number
  maliciousPercent: number
}

function computeStats(report: VirusTotalReport): VirusTotalStats {
  const entries = Object.values(report.results)
  const total = entries.length || 1
  let clean = 0
  let malicious = 0
  for (const entry of entries) {
    if (entry.result === 'clean') clean += 1
    else if (entry.result === 'malicious') malicious += 1
  }
  return {
    total: entries.length,
    clean,
    malicious,
    cleanPercent: Number(((clean / total) * 100).toFixed(2)),
    maliciousPercent: Number(((malicious / total) * 100).toFixed(2)),
  }
}

export function useVirusTotalScan() {
  const [report, setReport] = useState<VirusTotalReport | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const scan = useCallback(async (url: string) => {
    const cleanUrl = url.replace(/^https?:\/\//, '').trim()
    if (!cleanUrl) {
      setError('invalidUrl')
      return
    }
    setLoading(true)
    setError(null)
    setReport(null)
    try {
      const response = await axios.post<VirusTotalReport>('https://vt-proxy.pages.dev/api/scan', {
        url: cleanUrl,
      })
      setReport(response.data)
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.message ?? err.message)
      } else if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('unknown')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  const reset = useCallback(() => {
    setReport(null)
    setError(null)
  }, [])

  return {
    report,
    stats: report ? computeStats(report) : null,
    loading,
    error,
    scan,
    reset,
  }
}
