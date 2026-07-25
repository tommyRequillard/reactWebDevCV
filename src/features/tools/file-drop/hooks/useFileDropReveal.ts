import { useEffect, useState } from 'react'
import axios from 'axios'
import { base64UrlToBytes, decryptBytes, importKeyFromUrlSafeBase64, unpackPayload } from '../../lib/e2ee'
import { TOOLS_PROXY_BASE } from '../../lib/config'
import type { FileMeta } from './useFileDropUpload'

type RevealState =
  | { status: 'loading' }
  | { status: 'missingKey' }
  | { status: 'notFound' }
  | { status: 'decryptError' }
  | { status: 'success'; meta: FileMeta; blobUrl: string }

function initialState(id: string | undefined): RevealState {
  if (!id) return { status: 'notFound' }
  if (!/k=([^&]+)/.exec(window.location.hash)) return { status: 'missingKey' }
  return { status: 'loading' }
}

export function useFileDropReveal(id: string | undefined) {
  const [state, setState] = useState<RevealState>(() => initialState(id))

  useEffect(() => {
    const keyMatch = /k=([^&]+)/.exec(window.location.hash)
    const keyB64 = keyMatch?.[1]
    if (!id || !keyB64) return

    let cancelled = false
    async function reveal() {
      try {
        const response = await axios.get<ArrayBuffer>(`${TOOLS_PROXY_BASE}/api/files/${id}`, {
          responseType: 'arraybuffer',
        })
        const fileIvB64 = response.headers['x-file-iv'] as string | undefined
        const metaPayload = response.headers['x-file-meta'] as string | undefined
        if (!fileIvB64 || !metaPayload) throw new Error('missing headers')

        const key = await importKeyFromUrlSafeBase64(keyB64 as string)

        const fileIv = base64UrlToBytes(fileIvB64)
        const fileBuffer = await decryptBytes(key, fileIv, response.data)

        const { iv: metaIv, ciphertext: metaCiphertext } = unpackPayload(metaPayload)
        const metaBuffer = await decryptBytes(key, metaIv, metaCiphertext)
        const meta = JSON.parse(new TextDecoder().decode(metaBuffer)) as FileMeta

        const blobUrl = URL.createObjectURL(new Blob([fileBuffer], { type: meta.mime }))
        if (!cancelled) setState({ status: 'success', meta, blobUrl })
      } catch (err) {
        if (cancelled) return
        if (axios.isAxiosError(err)) {
          setState({ status: 'notFound' })
        } else {
          setState({ status: 'decryptError' })
        }
      }
    }
    void reveal()

    return () => {
      cancelled = true
    }
  }, [id])

  return state
}
