import { ChatBubbleLeftRightIcon } from '@heroicons/react/24/outline'
import { GlassCard } from '@shared/ui/GlassCard'
import { testimonials } from '../data/testimonials'

export function TestimonialsSection() {
  return (
    <section className="border-t border-[color:var(--glass-border)] p-4">
      <header className="mb-3 flex items-center gap-2">
        <ChatBubbleLeftRightIcon className="h-5 w-5 text-[color:var(--color-neon-cyan-400)]" />
        <h2 className="text-lg font-semibold">Recommandations</h2>
      </header>
      <div className="grid gap-4 md:grid-cols-2">
        {testimonials.map((t) => (
          <GlassCard
            key={t.id}
            as="figure"
            variant="elevated"
            padding="md"
            radius="xl"
            className="flex flex-col gap-3"
          >
            <blockquote className="text-sm italic leading-relaxed text-[color:var(--text-secondary)]">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="flex flex-col">
              {t.linkedinUrl ? (
                <a
                  href={t.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-semibold text-[color:var(--color-neon-cyan-400)] hover:underline"
                >
                  {t.author}
                </a>
              ) : (
                <span className="text-sm font-semibold">{t.author}</span>
              )}
              <span className="text-xs text-[color:var(--text-secondary)]">{t.role}</span>
              <span className="text-xs text-[color:var(--text-tertiary)]">{t.relationship}</span>
            </figcaption>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
