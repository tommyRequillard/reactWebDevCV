import {createSlice} from "@reduxjs/toolkit"
import {projects} from "../components/portfolio/PortfolioCards.tsx"

const initialState = {
  numberOfProjects: 0,
}

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    getNumberOfProjects: (state) => {
      state.numberOfProjects = projects.length
    }
  },
})

export const {getNumberOfProjects} = statisticsSlice.actions
export default statisticsSlice.reducer
