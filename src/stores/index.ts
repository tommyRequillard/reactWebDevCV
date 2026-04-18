import { configureStore } from '@reduxjs/toolkit'
import portfolioStatsReducer from './slices/portfolioStatsSlice'

export const store = configureStore({
  reducer: {
    portfolioStats: portfolioStatsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
