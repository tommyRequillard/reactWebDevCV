import { useCallback, useState } from 'react'
import QRCode from 'qrcode'

export function useQrGenerator() {
  const [dataUrl, setDataUrl] = useState<string | null>(null)
  const [svg, setSvg] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const generate = useCallback(async (text: string, size: number) => {
    if (!text.trim()) {
      setDataUrl(null)
      setSvg(null)
      return
    }
    try {
      const [png, svgString] = await Promise.all([
        QRCode.toDataURL(text, { width: size }),
        QRCode.toString(text, { type: 'svg' }),
      ])
      setDataUrl(png)
      setSvg(svgString)
      setError(null)
    } catch {
      setError('generationFailed')
    }
  }, [])

  return { dataUrl, svg, error, generate }
}
