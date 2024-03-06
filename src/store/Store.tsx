import {configureStore} from "@reduxjs/toolkit"
import counterReducer from "../features/Counter.tsx"
import statisticsReducer from "../features/statistics.tsx"

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    statistics: statisticsReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;