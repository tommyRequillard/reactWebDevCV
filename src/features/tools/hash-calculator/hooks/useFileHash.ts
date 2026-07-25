import { useCallback, useState } from 'react'

export type HashAlgorithm = 'SHA-1' | 'SHA-256' | 'SHA-512'

export const HASH_ALGORITHMS: HashAlgorithm[] = ['SHA-1', 'SHA-256', 'SHA-512']

function bufferToHex(buffer: ArrayBuffer): string {
  return Array.from(new Uint8Array(buffer))
    .map((b) => b.toString(16).padStart(2, '0'))
    .join('')
}

export interface FileHashResult {
  fileName: string
  hash: string
}

export function useFileHash() {
  const [results, setResults] = useState<FileHashResult[]>([])
  const [loading, setLoading] = useState(false)

  const computeHashes = useCallback(async (files: FileList | File[], algorithm: HashAlgorithm) => {
    setLoading(true)
    const list = Array.from(files)
    const computed: FileHashResult[] = []
    for (const file of list) {
      const buffer = await file.arrayBuffer()
      const digest = await crypto.subtle.digest(algorithm, buffer)
      computed.push({ fileName: file.name, hash: bufferToHex(digest) })
    }
    setResults(computed)
    setLoading(false)
  }, [])

  return { results, loading, computeHashes }
}
