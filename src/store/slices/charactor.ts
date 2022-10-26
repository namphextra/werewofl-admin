import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CharactorState {
  title: string
  quantity: number
}

interface State {
  selectedCharactors: CharactorState[]
}

const initialState: State = {
  selectedCharactors: []
}

export const charactorSlice = createSlice({
  name: 'charactor',
  initialState,
  reducers: {
    addCharactor: (state, actions: PayloadAction<CharactorState>) => {
      const index = state.selectedCharactors.findIndex(v => v.title === actions.payload.title)
      if (index >= 0) {
        state.selectedCharactors[index].quantity += 1
      } else {
        state.selectedCharactors.push({title: actions.payload.title, quantity: 1})
      }
    },
    removeCharactor: (state, actions: PayloadAction<CharactorState>) => {
      const index = state.selectedCharactors.findIndex(v => v.title === actions.payload.title)
      if (index === -1) {
        return
      }
      if (state.selectedCharactors[index].quantity > 0) {
        state.selectedCharactors[index].quantity -= 1
      } else {
        state.selectedCharactors.splice(index, 1)
      }
    }
  }
})

export const { addCharactor, removeCharactor } = charactorSlice.actions
export default charactorSlice.reducer
