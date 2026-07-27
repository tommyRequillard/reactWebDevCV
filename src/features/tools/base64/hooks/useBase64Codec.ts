import { useCallback, useState } from 'react'

export function encodeBase64(text: string): string {
  const bytes = new TextEncoder().encode(text)
  let binary = ''
  for (const byte of bytes) binary += String.fromCharCode(byte)
  return btoa(binary)
}

export function decodeBase64(b64: string): string {
  const binary = atob(b64)
  const bytes = new Uint8Array(binary.length)
  for (let i = 0; i < binary.length; i += 1) bytes[i] = binary.charCodeAt(i)
  return new TextDecoder().decode(bytes)
}

export function useBase64Codec() {
  const [output, setOutput] = useState('')
  const [error, setError] = useState<string | null>(null)

  const encode = useCallback((input: string) => {
    setError(null)
    setOutput(encodeBase64(input))
  }, [])

  const decode = useCallback((input: string) => {
    try {
      setOutput(decodeBase64(input))
      setError(null)
    } catch {
      setError('invalidBase64')
      setOutput('')
    }
  }, [])

  return { output, error, encode, decode }
}
