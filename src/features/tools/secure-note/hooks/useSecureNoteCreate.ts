import { useCallback, useState } from 'react'
import axios from 'axios'
import {
  encryptBytes,
  exportKeyToUrlSafeBase64,
  generateKey,
  packPayload,
} from '../../lib/e2ee'
import { TOOLS_PROXY_BASE } from '../../lib/config'

export function useSecureNoteCreate() {
  const [link, setLink] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const create = useCallback(async (text: string, ttlSeconds: number, burnAfterRead: boolean) => {
    if (!text.trim()) {
      setError('empty')
      return
    }
    setLoading(true)
    setError(null)
    setLink(null)
    try {
      const key = await generateKey()
      const encoded = new TextEncoder().encode(text)
      const { iv, ciphertext } = await encryptBytes(key, encoded.buffer as ArrayBuffer)
      const payload = packPayload(iv, ciphertext)
      const keyB64 = await exportKeyToUrlSafeBase64(key)

      const response = await axios.post<{ id: string }>(`${TOOLS_PROXY_BASE}/api/notes`, {
        payload,
        ttl: ttlSeconds,
        burnAfterRead,
      })

      const base = import.meta.env.BASE_URL.replace(/\/$/, '')
      setLink(`${window.location.origin}${base}/tools/note/${response.data.id}#k=${keyB64}`)
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response ? 'uploadFailed' : 'backendUnavailable')
      } else {
        setError('unknown')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  return { link, loading, error, create }
}
