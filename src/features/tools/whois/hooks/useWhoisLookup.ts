import { useCallback, useState } from 'react'
import axios from 'axios'
import { TOOLS_PROXY_BASE } from '../../lib/config'

export interface WhoisEvent {
  eventAction: string
  eventDate: string
}

export interface WhoisResult {
  ldhName?: string
  status?: string[]
  nameservers?: { ldhName: string }[]
  events?: WhoisEvent[]
  entities?: { roles?: string[]; vcardArray?: unknown }[]
}

const DOMAIN_REGEX = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i

export function useWhoisLookup() {
  const [result, setResult] = useState<WhoisResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const lookup = useCallback(async (domain: string) => {
    const trimmed = domain.trim()
    if (!DOMAIN_REGEX.test(trimmed)) {
      setError('invalidDomain')
      return
    }
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const response = await axios.get<WhoisResult>(`${TOOLS_PROXY_BASE}/api/whois/${trimmed}`)
      setResult(response.data)
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response ? 'notFound' : 'backendUnavailable')
      } else if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('unknown')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  return { result, loading, error, lookup }
}
