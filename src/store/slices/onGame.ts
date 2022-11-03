import { createSlice } from '@reduxjs/toolkit'
import { TIME_DAY, TIME_NIGHT } from '@/constants/onGame'

interface State {
  date: number
  time: string
}

const initialState: State = {
  date: 0,
  time: TIME_DAY
}

export const playerSlice = createSlice({
  name: 'onGame',
  initialState,
  reducers: {
    nextDay: (state) => {
      state.date += 1
    },
    switchTime: (state) => {
      state.time = state.time === TIME_DAY ? TIME_NIGHT : TIME_DAY
    }
  },
  extraReducers(builder) {
    // builder.addCase(fetchPlayers.fulfilled, (state, action) => {
    //   state.players = action.payload
    // })
  },
})

export const { nextDay, switchTime } = playerSlice.actions
export default playerSlice.reducer
