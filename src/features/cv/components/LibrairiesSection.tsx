import { BookOpenIcon } from '@heroicons/react/24/outline'
import { librairies } from '../data/librairies'
import { SkillsShowcase } from './SkillsShowcase'

export function LibrairiesSection() {
  return (
    <section className="border-y border-[color:var(--glass-border)] p-4">
      <header className="mb-3 flex items-center gap-2">
        <BookOpenIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />
        <h2 className="text-lg font-semibold">Librairies &amp; frameworks</h2>
      </header>
      <SkillsShowcase items={librairies} />
    </section>
  )
}
