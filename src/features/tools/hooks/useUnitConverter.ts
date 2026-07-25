import { useCallback, useState } from 'react'

export type StorageUnit = 'o' | 'Ko' | 'Mo' | 'Go' | 'To'
export type SpeedUnit = 'bps' | 'Kbps' | 'Mbps' | 'Gbps' | 'Mo/s'

const STORAGE_EXPONENT: Record<StorageUnit, number> = { o: 0, Ko: 1, Mo: 2, Go: 3, To: 4 }

export function convertStorage(value: number, from: StorageUnit, to: StorageUnit, base: 1000 | 1024): number {
  const bytes = value * base ** STORAGE_EXPONENT[from]
  return bytes / base ** STORAGE_EXPONENT[to]
}

const SPEED_TO_BPS: Record<SpeedUnit, number> = {
  bps: 1,
  Kbps: 1_000,
  Mbps: 1_000_000,
  Gbps: 1_000_000_000,
  'Mo/s': 8_000_000,
}

export function convertSpeed(value: number, from: SpeedUnit, to: SpeedUnit): number {
  const bps = value * SPEED_TO_BPS[from]
  return bps / SPEED_TO_BPS[to]
}

export function useUnitConverter() {
  const [storageBase, setStorageBase] = useState<1000 | 1024>(1024)

  const convertStorageValue = useCallback(
    (value: number, from: StorageUnit, to: StorageUnit) => convertStorage(value, from, to, storageBase),
    [storageBase],
  )

  return { storageBase, setStorageBase, convertStorageValue, convertSpeed }
}
