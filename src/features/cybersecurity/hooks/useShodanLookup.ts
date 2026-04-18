import { useCallback, useState } from 'react'
import axios from 'axios'

export interface ShodanResult {
  ports: number[]
  cpes: string[]
  hostnames: string[]
  tags: string[]
  vulns?: string[]
}

const IPV4_REGEX = /^(?:(?:25[0-5]|2[0-4]\d|[01]?\d\d?)\.){3}(?:25[0-5]|2[0-4]\d|[01]?\d\d?)$/

export function useShodanLookup() {
  const [data, setData] = useState<ShodanResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const lookup = useCallback(async (ip: string) => {
    const trimmed = ip.trim()
    if (!IPV4_REGEX.test(trimmed)) {
      setError('invalidIp')
      return
    }
    setLoading(true)
    setError(null)
    setData(null)
    try {
      const response = await axios.get<ShodanResult>(`https://internetdb.shodan.io/${trimmed}`)
      setData(response.data)
    } catch (err) {
      if (axios.isAxiosError(err)) {
        setError(err.response?.data?.error ?? err.message)
      } else if (err instanceof Error) {
        setError(err.message)
      } else {
        setError('unknown')
      }
    } finally {
      setLoading(false)
    }
  }, [])

  return { data, loading, error, lookup }
}
