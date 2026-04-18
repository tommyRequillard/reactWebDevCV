import { create } from 'zustand'

interface UIState {
  mobileNavOpen: boolean
  openMobileNav: () => void
  closeMobileNav: () => void
  toggleMobileNav: () => void

  secondaryColumnCollapsed: boolean
  toggleSecondaryColumn: () => void
}

export const useUIStore = create<UIState>((set) => ({
  mobileNavOpen: false,
  openMobileNav: () => set({ mobileNavOpen: true }),
  closeMobileNav: () => set({ mobileNavOpen: false }),
  toggleMobileNav: () => set((s) => ({ mobileNavOpen: !s.mobileNavOpen })),

  secondaryColumnCollapsed: false,
  toggleSecondaryColumn: () =>
    set((s) => ({ secondaryColumnCollapsed: !s.secondaryColumnCollapsed })),
}))
