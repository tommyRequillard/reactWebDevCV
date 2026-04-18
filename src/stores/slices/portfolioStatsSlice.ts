import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

export interface PortfolioStatsState {
  numberOfProjects: number
  stacksMostUsed: Record<string, number>
}

const initialState: PortfolioStatsState = {
  numberOfProjects: 0,
  stacksMostUsed: {},
}

const portfolioStatsSlice = createSlice({
  name: 'portfolioStats',
  initialState,
  reducers: {
    computeStats(state, action: PayloadAction<{ projects: { stacks: string[] }[] }>) {
      const { projects } = action.payload
      state.numberOfProjects = projects.length
      state.stacksMostUsed = projects
        .flatMap((p) => p.stacks)
        .reduce<Record<string, number>>((acc, stack) => {
          acc[stack] = (acc[stack] ?? 0) + 1
          return acc
        }, {})
    },
    resetStats(state) {
      state.numberOfProjects = 0
      state.stacksMostUsed = {}
    },
  },
})

export const { computeStats, resetStats } = portfolioStatsSlice.actions
export default portfolioStatsSlice.reducer
