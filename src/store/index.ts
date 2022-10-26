import { configureStore } from '@reduxjs/toolkit'
import playerReducer from './slices/players'
import charactorReducer from './slices/charactor'

export const store = configureStore({
  reducer: {
    player: playerReducer,
    charactor: charactorReducer
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
