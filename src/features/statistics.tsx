import {createSlice} from "@reduxjs/toolkit"
import {projects} from "../components/portfolio/frontend/PortfolioCards.tsx"

const initialState = {
  numberOfProjects: 0,
  stacksMostUsed: {},
}

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    getNumberOfProjects: (state) => {
      state.numberOfProjects = projects.length
    },
    getStacksMostUsed: (state) => {
      const stacks = projects.map((project) => project.stacks)
      const stacksFlat = stacks.flat()
      const stacksMostUsed = stacksFlat.reduce((acc, stack) => {
        if (acc[stack]) {
          acc[stack]++
        } else {
          acc[stack] = 1
        }
        return acc
      }, {})
      state.stacksMostUsed = stacksMostUsed

    }
  },
})

export const {getNumberOfProjects, getStacksMostUsed} = statisticsSlice.actions
export default statisticsSlice.reducer
