import { AcademicCapIcon } from '@heroicons/react/24/outline'
import { formations } from '../data/formations'

export function FormationsSection() {
  return (
    <section className="p-4">
      <header className="mb-3 flex items-center gap-2">
        <AcademicCapIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />
        <h2 className="text-lg font-semibold">Formations</h2>
      </header>
      <ul className="flex flex-col gap-2">
        {formations.map((f, i) => (
          <li key={`${f.year}-${i}`} className="flex items-start gap-3 text-sm">
            <span className="w-10 shrink-0 text-right font-semibold text-[color:var(--color-neon-cyan-400)]">
              {f.year}
            </span>
            <p className="text-[color:var(--text-secondary)]">{f.label}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}
