import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Charactor {
  title: string
}

interface State {
  selectedCharactors: Charactor[]
}

const initialState: State = {
  selectedCharactors: []
}

export const charactorSlice = createSlice({
  name: 'charactor',
  initialState,
  reducers: {
    addCharactor: (state, actions: PayloadAction<Charactor>) => {
      state.selectedCharactors.push(actions.payload)
    }
  }
})

export const { addCharactor } = charactorSlice.actions
export default charactorSlice.reducer
