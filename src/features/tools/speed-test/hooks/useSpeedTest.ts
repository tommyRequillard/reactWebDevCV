import { useCallback, useState } from 'react'
import { TOOLS_PROXY_BASE } from '../../lib/config'

export type SpeedTestPhase = 'idle' | 'ping' | 'download' | 'upload' | 'done' | 'error'

export interface SpeedTestResult {
  pingMs: number
  jitterMs: number
  downloadMbps: number
  uploadMbps: number
}

const PING_SAMPLES = 6
const DOWNLOAD_BYTES = 20 * 1024 * 1024
const UPLOAD_BYTES = 8 * 1024 * 1024

function mbps(bytes: number, seconds: number): number {
  if (seconds <= 0) return 0
  return (bytes * 8) / seconds / 1_000_000
}

export function useSpeedTest() {
  const [phase, setPhase] = useState<SpeedTestPhase>('idle')
  const [progress, setProgress] = useState(0)
  const [result, setResult] = useState<SpeedTestResult | null>(null)
  const [error, setError] = useState<string | null>(null)

  const run = useCallback(async () => {
    setError(null)
    setResult(null)
    setProgress(0)
    try {
      setPhase('ping')
      const samples: number[] = []
      for (let i = 0; i < PING_SAMPLES; i++) {
        const start = performance.now()
        await fetch(`${TOOLS_PROXY_BASE}/api/speedtest/ping?t=${Date.now()}-${i}`, { cache: 'no-store' })
        samples.push(performance.now() - start)
      }
      const pingMs = samples.reduce((a, b) => a + b, 0) / samples.length
      const jitterMs = Math.sqrt(
        samples.reduce((acc, s) => acc + (s - pingMs) ** 2, 0) / samples.length,
      )

      setPhase('download')
      setProgress(0)
      const dlStart = performance.now()
      const dlResponse = await fetch(`${TOOLS_PROXY_BASE}/api/speedtest/download?bytes=${DOWNLOAD_BYTES}`, {
        cache: 'no-store',
      })
      const reader = dlResponse.body?.getReader()
      let received = 0
      if (reader) {
        for (;;) {
          const { done, value } = await reader.read()
          if (done) break
          received += value?.length ?? 0
          setProgress(Math.min(1, received / DOWNLOAD_BYTES))
        }
      }
      const downloadMbps = mbps(received, (performance.now() - dlStart) / 1000)

      setPhase('upload')
      setProgress(0)
      const uploadData = new Uint8Array(UPLOAD_BYTES)
      const upStart = performance.now()
      await fetch(`${TOOLS_PROXY_BASE}/api/speedtest/upload`, {
        method: 'POST',
        body: uploadData,
        headers: { 'Content-Type': 'application/octet-stream' },
      })
      const uploadMbps = mbps(UPLOAD_BYTES, (performance.now() - upStart) / 1000)

      setResult({ pingMs, jitterMs, downloadMbps, uploadMbps })
      setProgress(1)
      setPhase('done')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'unknown')
      setPhase('error')
    }
  }, [])

  return { phase, progress, result, error, run }
}
