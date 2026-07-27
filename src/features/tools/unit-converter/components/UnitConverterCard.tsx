import { useMemo, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { ArrowsRightLeftIcon } from '@heroicons/react/24/outline'
import { GlassPanel } from '@shared/ui/GlassPanel'
import { Input } from '@shared/ui/Input'
import { Select } from '@shared/ui/Select'
import {
  convertSpeed,
  convertStorage,
  type SpeedUnit,
  type StorageUnit,
} from '../hooks/useUnitConverter'

const STORAGE_UNITS: StorageUnit[] = ['o', 'Ko', 'Mo', 'Go', 'To']
const SPEED_UNITS: SpeedUnit[] = ['bps', 'Kbps', 'Mbps', 'Gbps', 'Mo/s']

export function UnitConverterCard() {
  const { t } = useTranslation('tools')

  const [storageValue, setStorageValue] = useState('1')
  const [storageFrom, setStorageFrom] = useState<StorageUnit>('Go')
  const [storageTo, setStorageTo] = useState<StorageUnit>('Mo')
  const [binaryBase, setBinaryBase] = useState(true)

  const [speedValue, setSpeedValue] = useState('100')
  const [speedFrom, setSpeedFrom] = useState<SpeedUnit>('Mbps')
  const [speedTo, setSpeedTo] = useState<SpeedUnit>('Mo/s')

  const storageResult = useMemo(() => {
    const value = Number(storageValue)
    if (Number.isNaN(value)) return null
    return convertStorage(value, storageFrom, storageTo, binaryBase ? 1024 : 1000)
  }, [storageValue, storageFrom, storageTo, binaryBase])

  const speedResult = useMemo(() => {
    const value = Number(speedValue)
    if (Number.isNaN(value)) return null
    return convertSpeed(value, speedFrom, speedTo)
  }, [speedValue, speedFrom, speedTo])

  const unitOptions = (units: string[]) => units.map((u) => ({ value: u, label: u }))

  return (
    <GlassPanel
      title={t('unitConverter.title')}
      icon={<ArrowsRightLeftIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />}
      padding="lg"
    >
      <div className="flex flex-col gap-3">
        <p className="text-sm font-semibold text-[color:var(--text-primary)]">
          {t('unitConverter.storageTitle')}
        </p>
        <div className="grid grid-cols-3 gap-2">
          <Input type="number" value={storageValue} onChange={(e) => setStorageValue(e.target.value)} />
          <Select
            options={unitOptions(STORAGE_UNITS)}
            value={storageFrom}
            onChange={(e) => setStorageFrom(e.target.value as StorageUnit)}
          />
          <Select
            options={unitOptions(STORAGE_UNITS)}
            value={storageTo}
            onChange={(e) => setStorageTo(e.target.value as StorageUnit)}
          />
        </div>
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" checked={binaryBase} onChange={(e) => setBinaryBase(e.target.checked)} />
          {t('unitConverter.binaryToggle')}
        </label>
        {storageResult !== null && (
          <p className="font-mono text-sm text-[color:var(--color-neon-cyan-300)]">
            {storageResult.toLocaleString(undefined, { maximumFractionDigits: 6 })} {storageTo}
          </p>
        )}
      </div>

      <div className="flex flex-col gap-3 border-t border-[color:var(--glass-border)] pt-3">
        <p className="text-sm font-semibold text-[color:var(--text-primary)]">
          {t('unitConverter.speedTitle')}
        </p>
        <div className="grid grid-cols-3 gap-2">
          <Input type="number" value={speedValue} onChange={(e) => setSpeedValue(e.target.value)} />
          <Select
            options={unitOptions(SPEED_UNITS)}
            value={speedFrom}
            onChange={(e) => setSpeedFrom(e.target.value as SpeedUnit)}
          />
          <Select
            options={unitOptions(SPEED_UNITS)}
            value={speedTo}
            onChange={(e) => setSpeedTo(e.target.value as SpeedUnit)}
          />
        </div>
        {speedResult !== null && (
          <p className="font-mono text-sm text-[color:var(--color-neon-cyan-300)]">
            {speedResult.toLocaleString(undefined, { maximumFractionDigits: 6 })} {speedTo}
          </p>
        )}
      </div>
    </GlassPanel>
  )
}
