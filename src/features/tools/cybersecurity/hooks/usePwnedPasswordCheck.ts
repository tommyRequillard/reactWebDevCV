import { useCallback, useState } from 'react'
import axios from 'axios'
import CryptoJS from 'crypto-js'

export interface PwnedResult {
  leaked: boolean
  count: number
}

export function usePwnedPasswordCheck() {
  const [result, setResult] = useState<PwnedResult | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const check = useCallback(async (password: string) => {
    if (!password) {
      setError('required')
      return
    }
    setLoading(true)
    setError(null)
    setResult(null)
    try {
      const hash = CryptoJS.SHA1(password).toString().toUpperCase()
      const prefix = hash.slice(0, 5)
      const suffix = hash.slice(5)
      const response = await axios.get<string>(`https://api.pwnedpasswords.com/range/${prefix}`)
      const match = response.data
        .split('\n')
        .map((line) => line.split(':'))
        .find(([hashSuffix]) => hashSuffix.trim().toUpperCase() === suffix)
      if (match) {
        setResult({ leaked: true, count: Number(match[1]) || 0 })
      } else {
        setResult({ leaked: false, count: 0 })
      }
    } catch (err) {
      if (err instanceof Error) setError(err.message)
      else setError('unknown')
    } finally {
      setLoading(false)
    }
  }, [])

  const reset = useCallback(() => {
    setResult(null)
    setError(null)
  }, [])

  return { result, loading, error, check, reset }
}
