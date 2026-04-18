import { BriefcaseIcon } from '@heroicons/react/24/outline'
import { experiences } from '../data/experiences'

export function ExperiencesSection() {
  return (
    <section className="border-y border-[color:var(--glass-border)] py-4">
      <header className="mb-3 flex items-center gap-2">
        <BriefcaseIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />
        <h2 className="text-lg font-semibold">Expériences professionnelles</h2>
      </header>
      <ol className="flex flex-col gap-4">
        {experiences.map((exp) => (
          <li key={`${exp.period}-${exp.company}`} className="flex flex-col gap-1">
            <p className="text-xs font-semibold uppercase tracking-wide text-[color:var(--color-neon-cyan-400)]">
              {exp.period}
            </p>
            <p className="text-sm font-semibold text-[color:var(--text-primary)]">
              {exp.role} — {exp.company}
            </p>
            <p className="text-sm text-[color:var(--text-secondary)]">
              {exp.description}
              {exp.link && (
                <>
                  {' '}
                  <a
                    href={exp.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-[color:var(--color-neon-cyan-400)] underline-offset-2 hover:text-[color:var(--text-primary)]"
                  >
                    {exp.link.label}
                  </a>
                </>
              )}
            </p>
          </li>
        ))}
      </ol>
    </section>
  )
}
