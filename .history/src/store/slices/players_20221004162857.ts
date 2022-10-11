import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Player {
  name: string
  charactor?: string
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
      state.players.push({ name: actions.payload })
    }
  }
})

export const { addPlayer } = playerSlice.actions
export default playerSlice.reducer
