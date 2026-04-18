import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { GlassCard } from '../GlassCard'

describe('GlassCard', () => {
  it('renders children with default glass classes', () => {
    render(
      <GlassCard data-testid="card">
        <span>content</span>
      </GlassCard>,
    )
    const card = screen.getByTestId('card')
    expect(card).toHaveClass('glass-surface')
    expect(screen.getByText('content')).toBeInTheDocument()
  })

  it('applies variant and glow modifiers', () => {
    render(
      <GlassCard variant="elevated" glow="neon" data-testid="card">
        x
      </GlassCard>,
    )
    const card = screen.getByTestId('card')
    expect(card.className).toMatch(/glass-surface--elevated/)
    expect(card.className).toMatch(/glass-glow-neon/)
  })

  it('uses no-blur variant for PDF safety', () => {
    render(
      <GlassCard variant="no-blur" data-testid="card">
        x
      </GlassCard>,
    )
    expect(screen.getByTestId('card').className).toMatch(/glass-surface--no-blur/)
  })

  it('polymorphs via the as prop', () => {
    render(
      <GlassCard as="section" data-testid="card">
        content
      </GlassCard>,
    )
    expect(screen.getByTestId('card').tagName.toLowerCase()).toBe('section')
  })
})
