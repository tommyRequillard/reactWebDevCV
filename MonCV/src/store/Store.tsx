import {configureStore} from "@reduxjs/toolkit"
import counter from "../features/Counter.tsx"

export const store = configureStore({
  reducer: {
    counter,
  }
})
