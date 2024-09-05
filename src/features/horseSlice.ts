import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface HorseState {
  toggledHorseName: string | null
  isToggled: boolean
}

const initialState: HorseState = {
  toggledHorseName: null,
  isToggled: false,
}

const horseSlice = createSlice({
  name: 'horse',
  initialState,
  reducers: {
    toggleHorse: (state, action: PayloadAction<string | null>) => {
      if (state.toggledHorseName === action.payload) {
        state.isToggled = false
        state.toggledHorseName = null
      } else {
        state.isToggled = true
        state.toggledHorseName = action.payload
      }
    },
  },
})

export const { toggleHorse } = horseSlice.actions
export default horseSlice.reducer
