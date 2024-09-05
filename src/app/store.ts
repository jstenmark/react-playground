import { configureStore } from '@reduxjs/toolkit'
import betTypeReducer from '../features/betTypeSlice'
import gameReducer from '../features/gameSlice'
import horseReducer from '../features/horseSlice'

export const store = configureStore({
  reducer: {
    betType: betTypeReducer,
    game: gameReducer,
    horse: horseReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
