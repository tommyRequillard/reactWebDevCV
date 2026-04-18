import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { NeonButton } from '../NeonButton'

describe('NeonButton', () => {
  it('renders label and handles click', async () => {
    const onClick = vi.fn()
    const user = userEvent.setup()
    render(<NeonButton onClick={onClick}>Download</NeonButton>)
    const btn = screen.getByRole('button', { name: /download/i })
    await user.click(btn)
    expect(onClick).toHaveBeenCalledTimes(1)
  })

  it('disables during loading and renders spinner sibling of label', () => {
    render(<NeonButton loading>Scan</NeonButton>)
    const btn = screen.getByRole('button', { name: /scan/i })
    expect(btn).toBeDisabled()
  })

  it('supports asChild polymorphism', () => {
    render(
      <NeonButton asChild>
        <a href="/contact">Contactez</a>
      </NeonButton>,
    )
    const link = screen.getByRole('link', { name: /contactez/i })
    expect(link).toHaveAttribute('href', '/contact')
  })
})
