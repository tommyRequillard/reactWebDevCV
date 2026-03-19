import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import LightboxButton from '../components/documents/LightboxButton'

describe('LightboxButton', () => {
  it('renders the button text', () => {
    render(<LightboxButton />)
    expect(screen.getByText('Visualisez les documents')).toBeInTheDocument()
  })

  it('calls onClick when clicked', async () => {
    const user = userEvent.setup()
    const onClick = vi.fn()
    render(<LightboxButton onClick={onClick} />)
    await user.click(screen.getByRole('button'))
    expect(onClick).toHaveBeenCalledOnce()
  })
})
