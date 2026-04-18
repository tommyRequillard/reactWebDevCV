import { GlobeAltIcon } from '@heroicons/react/24/outline'
import { GaugeRing } from '@shared/ui/GaugeRing'
import { foreignLanguages } from '../data/foreignLanguages'

export function ForeignLanguagesSection() {
  return (
    <section className="p-4">
      <header className="mb-4 flex items-center gap-2">
        <GlobeAltIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />
        <h2 className="text-lg font-semibold">Langues étrangères</h2>
      </header>
      <div className="flex flex-wrap items-center justify-around gap-6">
        {foreignLanguages.map((lang) => (
          <div key={lang.label} className="flex flex-col items-center gap-2">
            <span className="text-sm font-medium">{lang.label}</span>
            <GaugeRing value={lang.value} size="medium" showValue color="neon" />
          </div>
        ))}
      </div>
    </section>
  )
}
