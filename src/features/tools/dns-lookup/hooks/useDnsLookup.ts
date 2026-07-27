import { useCallback, useState } from 'react'
import axios from 'axios'

export type DnsRecordType = 'A' | 'AAAA' | 'MX' | 'TXT' | 'CNAME'

export const DNS_RECORD_TYPES: DnsRecordType[] = ['A', 'AAAA', 'MX', 'TXT', 'CNAME']

export interface DnsAnswer {
  name: string
  type: number
  TTL: number
  data: string
}

interface DohResponse {
  Status: number
  Answer?: DnsAnswer[]
}

const DOMAIN_REGEX = /^(?:[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?\.)+[a-z]{2,}$/i

export function useDnsLookup() {
  const [answers, setAnswers] = useState<DnsAnswer[] | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const lookup = useCallback(async (domain: string, type: DnsRecordType) => {
    const trimmed = domain.trim()
    if (!DOMAIN_REGEX.test(trimmed)) {
      setError('invalidDomain')
      return
    }
    setLoading(true)
    setError(null)
    setAnswers(null)
    try {
      const response = await axios.get<DohResponse>('https://dns.google/resolve', {
        params: { name: trimmed, type },
      })
      if (response.data.Status !== 0 || !response.data.Answer?.length) {
        setAnswers([])
      } else {
        setAnswers(response.data.Answer)
      }
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.message)
      } else if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('unknown')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  return { answers, loading, error, lookup }
}
