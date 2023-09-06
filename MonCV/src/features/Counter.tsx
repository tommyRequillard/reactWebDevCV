import {createSlice} from '@reduxjs/toolkit'

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