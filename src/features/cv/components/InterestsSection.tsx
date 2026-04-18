import { PuzzlePieceIcon } from '@heroicons/react/24/outline'
import { interests } from '../data/interests'

export function InterestsSection() {
  return (
    <section className="border-b border-[color:var(--glass-border)] p-4">
      <header className="mb-2 flex items-center gap-2">
        <PuzzlePieceIcon className="h-5 w-5 text-[color:var(--color-neon-lime-400)]" />
        <h2 className="text-lg font-semibold">Centres d&apos;intérêt</h2>
      </header>
      <p className="text-sm text-[color:var(--text-secondary)]">{interests}</p>
    </section>
  )
}
