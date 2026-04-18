export type ClassValue =
  | string
  | number
  | bigint
  | null
  | undefined
  | false
  | Record<string, unknown>
  | ClassValue[]

function toClassList(value: ClassValue, out: string[]): void {
  if (value === null || value === undefined || value === false || value === '' || value === 0 || value === 0n) {
    return
  }
  if (typeof value === 'string' || typeof value === 'number' || typeof value === 'bigint') {
    out.push(String(value))
    return
  }
  if (Array.isArray(value)) {
    for (const item of value) toClassList(item, out)
    return
  }
  if (typeof value === 'object') {
    for (const key in value) {
      if (value[key]) out.push(key)
    }
  }
}

export function cn(...values: ClassValue[]): string {
  const out: string[] = []
  for (const v of values) toClassList(v, out)
  return out.join(' ')
}
