import { CommandLineIcon } from '@heroicons/react/24/outline'
import { tools } from '../data/tools'
import { SkillsShowcase } from './SkillsShowcase'

export function ToolsSection() {
  return (
    <section className="border-b border-[color:var(--glass-border)] p-4">
      <header className="mb-3 flex items-center gap-2">
        <CommandLineIcon className="h-5 w-5 text-[color:var(--color-neon-purple-400)]" />
        <h2 className="text-lg font-semibold">Outils &amp; logiciels</h2>
      </header>
      <SkillsShowcase items={tools} />
    </section>
  )
}
