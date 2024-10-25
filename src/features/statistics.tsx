import {createSlice} from "@reduxjs/toolkit"
import {projects} from "../components/portfolio/frontend/PortfolioCards.tsx"

const initialState = {
  numberOfProjects: 0,
  skillsMostUsed: {},
}

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    getNumberOfProjects: (state) => {
      state.numberOfProjects = projects.length
    },
    getSkillsMostUsed: (state) => {
      const skills = projects.map((project) => project.skills)
      const skillsFlat = skills.flat()
      const skillsMostUsed = skillsFlat.reduce((acc, skill) => {
        if (acc[skill]) {
          acc[skill]++
        } else {
          acc[skill] = 1
        }
        return acc
      }, {})
      state.skillsMostUsed = skillsMostUsed

    }
  },
})

export const {getNumberOfProjects, getSkillsMostUsed} = statisticsSlice.actions
export default statisticsSlice.reducer
