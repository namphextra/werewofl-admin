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
    },
    removePlayer: (state, actions: PayloadAction<number>) => {
      state.players.splice(actions.payload, 1)
    }
  }
})

export const { addPlayer, removePlayer } = playerSlice.actions
export default playerSlice.reducer
