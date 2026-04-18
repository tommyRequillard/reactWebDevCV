import { UserCircleIcon } from '@heroicons/react/24/outline'
import { profile } from '../data/profile'

export function PersonalProfileSection() {
  return (
    <section className="py-4">
      <header className="mb-2 flex items-center gap-2">
        <UserCircleIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />
        <h2 className="text-lg font-semibold">Profil personnel</h2>
      </header>
      <p className="text-sm text-[color:var(--text-secondary)]">{profile.bio}</p>
    </section>
  )
}
