import {createSlice} from "@reduxjs/toolkit"
import {projects} from "../components/portfolio/frontend/PortfolioCards.tsx"

interface Project {
  stacks: string[]; 
}

const initialState = {
  numberOfProjects: 0,
  stacksMostUsed: {} as Record<string, number>, // Utilisation de Record pour indiquer que c'est un objet avec des clés de type string et des valeurs de type number
};

const statisticsSlice = createSlice({
  name: "statistics",
  initialState,
  reducers: {
    getNumberOfProjects: (state) => {
      state.numberOfProjects = projects.length;
    },
    getStacksMostUsed: (state) => {
      const stacks = projects.map((project: Project) => project.stacks);
      const stacksFlat = stacks.flat();
      const stacksMostUsed = stacksFlat.reduce<Record<string, number>>((acc, stack) => {
        if (acc[stack]) {
          acc[stack]++;
        } else {
          acc[stack] = 1;
        }
        return acc;
      }, {});
      state.stacksMostUsed = stacksMostUsed;
    }
  },
});

export const {getNumberOfProjects, getStacksMostUsed} = statisticsSlice.actions
export default statisticsSlice.reducer
