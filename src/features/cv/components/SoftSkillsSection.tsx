import { SparklesIcon } from '@heroicons/react/24/outline'
import { Badge } from '@shared/ui/Badge'
import { softSkills } from '../data/softSkills'

export function SoftSkillsSection() {
  return (
    <section className="py-4">
      <header className="mb-2 flex items-center gap-2">
        <SparklesIcon className="h-5 w-5 text-[color:var(--color-neon-purple-400)]" />
        <h2 className="text-lg font-semibold">Soft skills</h2>
      </header>
      <div className="flex flex-wrap gap-2">
        {softSkills.map((skill) => (
          <Badge key={skill} tone="purple">
            {skill}
          </Badge>
        ))}
      </div>
    </section>
  )
}
