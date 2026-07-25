import { useEffect, useState } from 'react'
import axios from 'axios'
import { decryptBytes, importKeyFromUrlSafeBase64, unpackPayload } from '../../lib/e2ee'
import { TOOLS_PROXY_BASE } from '../../lib/config'

type RevealState =
  | { status: 'loading' }
  | { status: 'missingKey' }
  | { status: 'notFound' }
  | { status: 'decryptError' }
  | { status: 'success'; text: string }

function initialState(id: string | undefined): RevealState {
  if (!id) return { status: 'notFound' }
  if (!/k=([^&]+)/.exec(window.location.hash)) return { status: 'missingKey' }
  return { status: 'loading' }
}

export function useSecureNoteReveal(id: string | undefined) {
  const [state, setState] = useState<RevealState>(() => initialState(id))

  useEffect(() => {
    const keyMatch = /k=([^&]+)/.exec(window.location.hash)
    const keyB64 = keyMatch?.[1]
    if (!id || !keyB64) return

    let cancelled = false
    async function reveal() {
      try {
        const response = await axios.get<{ payload: string }>(`${TOOLS_PROXY_BASE}/api/notes/${id}`)
        const key = await importKeyFromUrlSafeBase64(keyB64 as string)
        const { iv, ciphertext } = unpackPayload(response.data.payload)
        const plainBuffer = await decryptBytes(key, iv, ciphertext)
        const text = new TextDecoder().decode(plainBuffer)
        if (!cancelled) setState({ status: 'success', text })
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
