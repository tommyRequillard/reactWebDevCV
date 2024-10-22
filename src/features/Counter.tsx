import {createSlice} from '@reduxjs/toolkit'

export interface CounterState {
    total: number
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    total: 0
  },
  reducers: {
    increment(state) {
      state.total++
    },
    decrement(state) {
      state.total--
    },
    reset(state) {
      state.total = 0
    }
  }
})

export const {increment, decrement, reset} = counterSlice.actions
export default counterSlice.reducer