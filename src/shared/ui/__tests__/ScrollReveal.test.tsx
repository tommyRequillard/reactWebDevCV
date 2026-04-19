import { describe, it, expect, beforeAll, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { ScrollReveal } from '../ScrollReveal'

beforeAll(() => {
  class MockIntersectionObserver {
    observe = vi.fn()
    unobserve = vi.fn()
    disconnect = vi.fn()
    takeRecords = vi.fn(() => [])
    root = null
    rootMargin = ''
    thresholds = []
  }
  vi.stubGlobal('IntersectionObserver', MockIntersectionObserver)
})

describe('ScrollReveal', () => {
  it('renders its children', () => {
    render(
      <ScrollReveal>
        <p>revealed content</p>
      </ScrollReveal>,
    )
    expect(screen.getByText('revealed content')).toBeInTheDocument()
  })

  it('applies the provided className on the wrapper', () => {
    render(
      <ScrollReveal className="custom-wrapper">
        <span data-testid="child">x</span>
      </ScrollReveal>,
    )
    const wrapper = screen.getByTestId('child').parentElement
    expect(wrapper?.className).toMatch(/custom-wrapper/)
  })

  it('accepts direction, delay and duration props without crashing', () => {
    render(
      <ScrollReveal direction="left" delay={0.2} duration={0.8} once={false}>
        <span>ok</span>
      </ScrollReveal>,
    )
    expect(screen.getByText('ok')).toBeInTheDocument()
  })
})
