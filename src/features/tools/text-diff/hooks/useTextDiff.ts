import { useCallback, useState } from 'react'
import { diffWords, type Change } from 'diff'

export function useTextDiff() {
  const [changes, setChanges] = useState<Change[] | null>(null)

  const compare = useCallback((original: string, modified: string) => {
    setChanges(diffWords(original, modified))
  }, [])

  return { changes, compare }
}
