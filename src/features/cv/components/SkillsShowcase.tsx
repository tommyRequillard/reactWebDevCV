import { Stars } from '@shared/ui/Stars'

export interface SkillItem {
  id: number
  name: string
  stars: number
  logoPath: string
}

export interface SkillsShowcaseProps {
  items: SkillItem[]
  sort?: boolean
}

export function SkillsShowcase({ items, sort = true }: SkillsShowcaseProps) {
  const list = sort ? [...items].sort((a, b) => b.stars - a.stars) : items
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {list.map((item) => (
        <li
          key={item.id}
          className="flex flex-col items-center gap-1 rounded-xl border border-[color:var(--glass-border)] bg-[color-mix(in_srgb,var(--bg-elevated)_60%,transparent)] p-3 text-center"
        >
          <img src={item.logoPath} alt="" className="h-8 w-8" />
          <span className="text-sm font-medium">{item.name}</span>
          <Stars value={item.stars} />
        </li>
      ))}
    </ul>
  )
}
