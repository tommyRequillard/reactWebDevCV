import { UserGroupIcon } from '@heroicons/react/24/outline'
import { GaugeSegmented } from '@shared/ui/GaugeSegmented'
import { Stars } from '@shared/ui/Stars'
import { programmingLanguages } from '../data/programmingLanguages'
import { skillsDomains } from '../data/skillsDomains'

export function CvSidebar() {
  const sortedLangs = [...programmingLanguages].sort((a, b) => b.stars - a.stars)
  const topSkills = [...skillsDomains].sort((a, b) => b.stars - a.stars).slice(0, 6)

  return (
    <aside className="flex w-full flex-col gap-6 border-r border-[color:var(--glass-border)] bg-[color-mix(in_srgb,var(--bg-elevated)_55%,transparent)] p-6 md:w-64 md:shrink-0">
      <section>
        <div className="mb-4 flex items-center gap-2">
          <UserGroupIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />
          <h2 className="text-lg font-semibold">Skills pro</h2>
        </div>
        <ul className="grid grid-cols-2 gap-3 md:grid-cols-1">
          {sortedLangs.map((lang) => (
            <li key={lang.id} className="flex flex-col items-center gap-1 text-sm">
              <img src={lang.logoPath} alt="" className="h-8 w-8" />
              <span className="font-medium">{lang.name}</span>
              <GaugeSegmented data={Array(lang.stars).fill(1)} />
            </li>
          ))}
        </ul>
      </section>

      <section>
        <h3 className="mb-3 text-sm font-semibold uppercase tracking-wide text-[color:var(--text-muted)]">
          Domaines
        </h3>
        <ul className="flex flex-col gap-2">
          {topSkills.map((skill) => (
            <li key={skill.id} className="flex items-center justify-between gap-2 text-sm">
              <span>{skill.name}</span>
              <Stars value={skill.stars} />
            </li>
          ))}
        </ul>
      </section>
    </aside>
  )
}
