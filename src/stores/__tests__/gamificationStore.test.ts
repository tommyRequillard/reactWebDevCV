import { describe, it, expect, beforeEach } from 'vitest'
import { useGamificationStore } from '../gamificationStore'

describe('gamificationStore', () => {
  beforeEach(() => {
    useGamificationStore.setState({
      achievements: [],
      visitedPages: [],
      hasFoundTerminal: false,
      pendingAchievement: null,
      isTerminalOpen: false,
    })
  })

  it('should start with empty state', () => {
    const state = useGamificationStore.getState()
    expect(state.achievements).toEqual([])
    expect(state.visitedPages).toEqual([])
    expect(state.hasFoundTerminal).toBe(false)
    expect(state.pendingAchievement).toBeNull()
  })

  it('should unlock "Le Hacker" achievement when terminal is found', () => {
    const { unlockTerminal } = useGamificationStore.getState()
    unlockTerminal()
    const state = useGamificationStore.getState()
    expect(state.hasFoundTerminal).toBe(true)
    expect(state.achievements).toContain('Le Hacker')
    expect(state.pendingAchievement).toBe('Le Hacker')
  })

  it('should not duplicate terminal achievement', () => {
    const { unlockTerminal } = useGamificationStore.getState()
    unlockTerminal()
    unlockTerminal()
    expect(useGamificationStore.getState().achievements).toEqual(['Le Hacker'])
  })

  it('should track visited pages', () => {
    const { trackPage } = useGamificationStore.getState()
    trackPage('/')
    trackPage('/services')
    expect(useGamificationStore.getState().visitedPages).toEqual(['/', '/services'])
  })

  it('should not duplicate visited pages', () => {
    const { trackPage } = useGamificationStore.getState()
    trackPage('/')
    trackPage('/')
    expect(useGamificationStore.getState().visitedPages).toEqual(['/'])
  })

  it('should unlock "L\'Explorateur" when all pages visited', () => {
    const { trackPage } = useGamificationStore.getState()
    const allPages = ['/', '/services', '/portfolio', '/tools', '/documents', '/skills', '/contact']
    allPages.forEach((page) => trackPage(page))
    const state = useGamificationStore.getState()
    expect(state.achievements).toContain("L'Explorateur")
    expect(state.pendingAchievement).toBe("L'Explorateur")
  })

  it('should dismiss pending achievement', () => {
    const { unlockTerminal, dismissAchievement } = useGamificationStore.getState()
    unlockTerminal()
    expect(useGamificationStore.getState().pendingAchievement).toBe('Le Hacker')
    dismissAchievement()
    expect(useGamificationStore.getState().pendingAchievement).toBeNull()
  })
})
