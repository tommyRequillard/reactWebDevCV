import { AcademicCapIcon } from '@heroicons/react/24/outline'
import { Timeline } from '@shared/ui/Timeline'
import { formations } from '../data/formations'

export function FormationsSection() {
  const items = formations.map((f, i) => ({
    id: `${f.year}-${i}`,
    period: f.year,
    title: f.label,
  }))

  return (
    <section className="p-4">
      <header className="mb-3 flex items-center gap-2">
        <AcademicCapIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />
        <h2 className="text-lg font-semibold">Formations</h2>
      </header>
      <Timeline items={items} />
    </section>
  )
}
