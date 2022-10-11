import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Player {
  name: string
}

interface State {
  players: Player[]
}

const initialState: State = {
  players: []
}

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addPlayer: (state, actions: PayloadAction<string>) => {
      state.players = [...state.players, actions.payload]
    }
  }
})

export const { addPlayer } = playerSlice.actions
export default playerSlice.reducer
