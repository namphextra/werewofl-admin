import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import {db} from '@/indexedServer'
import {Player} from '@/indexedServer/models/player'

interface State {
  players: Player[]
}

type AssignCharactorPayload = {
  charactor: string
  index: number
}

type UpdateActionPayload = {
  index: number
  action: string
  value: any
}

const initialState: State = {
  players: []
}

export const fetchPlayers = createAsyncThunk('player/fetchPlayers', async () => {
  return await db.getPlayers()
})

export const playerSlice = createSlice({
  name: 'player',
  initialState,
  reducers: {
    addPlayer: (state, actions: PayloadAction<string>) => {
      state.players.push({ name: actions.payload })
    },
    removePlayer: (state, actions: PayloadAction<number>) => {
      state.players.splice(actions.payload, 1)
    },
    assignCharactor: (state, actions: PayloadAction<AssignCharactorPayload>) => {
      state.players[actions.payload.index].charactor = actions.payload.charactor
    },
    setAction: (state, actions: PayloadAction<UpdateActionPayload>) => {
      // state.players[actions.payload.index].action[actions.payload.action] = actions.payload.value
    }
  },
  extraReducers(builder) {
    builder.addCase(fetchPlayers.fulfilled, (state, action) => {
      state.players = action.payload
    })
  },
})

export const { addPlayer, removePlayer, assignCharactor } = playerSlice.actions
export default playerSlice.reducer
