import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Select } from '../Select'

const options = [
  { value: '', label: 'All' },
  { value: 'react', label: 'React' },
  { value: 'ts', label: 'TypeScript' },
]

describe('Select', () => {
  it('binds the label', () => {
    render(<Select label="Stack" options={options} />)
    expect(screen.getByLabelText('Stack')).toBeInTheDocument()
  })

  it('fires onChange', async () => {
    const onChange = vi.fn()
    const user = userEvent.setup()
    render(<Select label="Stack" options={options} value="" onChange={onChange} />)
    await user.selectOptions(screen.getByLabelText('Stack'), 'react')
    expect(onChange).toHaveBeenCalled()
  })
})
