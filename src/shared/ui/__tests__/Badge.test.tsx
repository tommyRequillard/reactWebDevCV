import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Badge } from '../Badge'

describe('Badge', () => {
  it('renders the label', () => {
    render(<Badge>new</Badge>)
    expect(screen.getByText('new')).toBeInTheDocument()
  })

  it('accepts a tone prop', () => {
    render(<Badge tone="cyan">cyan</Badge>)
    const el = screen.getByText('cyan')
    expect(el.className).toMatch(/neon-cyan/)
  })
})
