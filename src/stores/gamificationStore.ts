import { create } from 'zustand'

const ALL_PAGES = ['/', '/services', '/portfolio', '/tools', '/documents', '/skills', '/contact']

interface GamificationState {
  achievements: string[]
  visitedPages: string[]
  hasFoundTerminal: boolean
  pendingAchievement: string | null
  isTerminalOpen: boolean

  unlockTerminal: () => void
  openTerminal: () => void
  closeTerminal: () => void
  trackPage: (path: string) => void
  dismissAchievement: () => void
}

export const useGamificationStore = create<GamificationState>((set, get) => ({
  achievements: [],
  visitedPages: [],
  hasFoundTerminal: false,
  pendingAchievement: null,
  isTerminalOpen: false,

  unlockTerminal: () => {
    const { achievements, hasFoundTerminal } = get()
    if (hasFoundTerminal) return
    set({
      hasFoundTerminal: true,
      achievements: [...achievements, 'Le Hacker'],
      pendingAchievement: 'Le Hacker',
    })
  },

  openTerminal: () => {
    get().unlockTerminal()
    set({ isTerminalOpen: true })
  },

  closeTerminal: () => set({ isTerminalOpen: false }),

  trackPage: (path: string) => {
    const { visitedPages, achievements } = get()
    if (visitedPages.includes(path)) return

    const updated = [...visitedPages, path]
    const allVisited = ALL_PAGES.every((p) => updated.includes(p))

    if (allVisited && !achievements.includes("L'Explorateur")) {
      set({
        visitedPages: updated,
        achievements: [...achievements, "L'Explorateur"],
        pendingAchievement: "L'Explorateur",
      })
    } else {
      set({ visitedPages: updated })
    }
  },

  dismissAchievement: () => set({ pendingAchievement: null }),
}))
