import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Tabs } from '../Tabs'

const tabs = [
  { id: 'a', label: 'Frontend' },
  { id: 'b', label: 'Backend' },
  { id: 'c', label: 'DevOps', disabled: true },
]

describe('Tabs', () => {
  it('marks the active tab with aria-selected', () => {
    render(<Tabs tabs={tabs} value="a" onChange={() => {}} />)
    const active = screen.getByRole('tab', { name: 'Frontend' })
    expect(active).toHaveAttribute('aria-selected', 'true')
    const inactive = screen.getByRole('tab', { name: 'Backend' })
    expect(inactive).toHaveAttribute('aria-selected', 'false')
  })

  it('fires onChange on click', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Tabs tabs={tabs} value="a" onChange={onChange} />)
    await user.click(screen.getByRole('tab', { name: 'Backend' }))
    expect(onChange).toHaveBeenCalledWith('b')
  })

  it('does not fire onChange on a disabled tab', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Tabs tabs={tabs} value="a" onChange={onChange} />)
    await user.click(screen.getByRole('tab', { name: 'DevOps' }))
    expect(onChange).not.toHaveBeenCalled()
  })
})
