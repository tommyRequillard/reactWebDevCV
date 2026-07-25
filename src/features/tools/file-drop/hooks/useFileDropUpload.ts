import { useCallback, useState } from 'react'
import axios from 'axios'
import { bytesToBase64Url, encryptBytes, exportKeyToUrlSafeBase64, generateKey, packPayload } from '../../lib/e2ee'
import { TOOLS_PROXY_BASE } from '../../lib/config'

const MAX_BYTES = 100 * 1024 * 1024
const TTL_SECONDS = 60 * 60 * 24 * 7

export interface FileMeta {
  filename: string
  mime: string
  note: string
}

export function useFileDropUpload() {
  const [link, setLink] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)

  const upload = useCallback(async (file: File, note: string) => {
    if (!file) {
      setError('empty')
      return
    }
    if (file.size > MAX_BYTES) {
      setError('tooLarge')
      return
    }
    setLoading(true)
    setProgress(0)
    setError(null)
    setLink(null)
    try {
      const key = await generateKey()

      const fileBuffer = await file.arrayBuffer()
      const fileEncrypted = await encryptBytes(key, fileBuffer)

      const meta: FileMeta = { filename: file.name, mime: file.type || 'application/octet-stream', note }
      const metaBytes = new TextEncoder().encode(JSON.stringify(meta))
      const metaEncrypted = await encryptBytes(key, metaBytes.buffer as ArrayBuffer)
      const metaPayload = packPayload(metaEncrypted.iv, metaEncrypted.ciphertext)

      const form = new FormData()
      form.append('blob', new Blob([fileEncrypted.ciphertext]))
      form.append('fileIv', bytesToBase64Url(fileEncrypted.iv))
      form.append('meta', metaPayload)
      form.append('ttl', String(TTL_SECONDS))

      const response = await axios.post<{ id: string }>(`${TOOLS_PROXY_BASE}/api/files`, form, {
        onUploadProgress: (evt) => {
          if (evt.total) setProgress(Math.round((evt.loaded / evt.total) * 100))
        },
      })

      const keyB64 = await exportKeyToUrlSafeBase64(key)
      const base = import.meta.env.BASE_URL.replace(/\/$/, '')
      setLink(`${window.location.origin}${base}/tools/file/${response.data.id}#k=${keyB64}`)
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

  return { link, loading, progress, error, upload }
}
