import { describe, it, expect, beforeEach, vi, afterEach } from 'vitest'
import { render, screen, waitFor, act } from '@testing-library/react'
import { AchievementToast } from '../AchievementToast'
import { useGamificationStore } from '@stores/gamificationStore'

describe('AchievementToast', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    useGamificationStore.setState({
      achievements: [],
      visitedPages: [],
      hasFoundTerminal: false,
      pendingAchievement: null,
    })
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should not render when no pending achievement', () => {
    const { container } = render(<AchievementToast />)
    expect(container.querySelector('[role="status"]')).toBeNull()
  })

  it('should render achievement text when pending', () => {
    useGamificationStore.setState({ pendingAchievement: 'Le Hacker' })
    render(<AchievementToast />)
    expect(screen.getByText(/Le Hacker/)).toBeTruthy()
  })

  it('should auto-dismiss after delay', async () => {
    useGamificationStore.setState({ pendingAchievement: 'Le Hacker' })
    render(<AchievementToast />)
    expect(screen.getByText(/Le Hacker/)).toBeTruthy()

    await act(async () => {
      vi.advanceTimersByTime(5000)
    })
    expect(useGamificationStore.getState().pendingAchievement).toBeNull()
  })
})
