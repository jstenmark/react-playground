import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { GameResponse } from '../types'
import { getGameDetails } from '../services/api'

interface GameState {
  games: Record<string, GameResponse>
  loading: boolean
  error: string | null
  isToggled: boolean
  toggledGameId: string | null
}

const initialState: GameState = {
  games: {},
  loading: false,
  error: null,
  isToggled: false,
  toggledGameId: null,
}

export const fetchGameDetails = createAsyncThunk(
  'games/fetchGameDetails',
  async (gameId: string): Promise<GameResponse> => {
    const response = await getGameDetails(gameId)
    return response
  },
)

const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    toggleGame: (state, action: PayloadAction<string | null>) => {
      if (state.toggledGameId === action.payload) {
        state.isToggled = false
        state.toggledGameId = null
      } else {
        state.isToggled = true
        state.toggledGameId = action.payload
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchGameDetails.pending, state => {
        state.loading = true
        state.error = null
      })
      .addCase(fetchGameDetails.fulfilled, (state, action) => {
        state.loading = false
        state.games[action.payload.id] = action.payload
      })
      .addCase(fetchGameDetails.rejected, state => {
        state.loading = false
        state.error = 'Failed to fetch game details'
      })
  },
})

export const { toggleGame } = gameSlice.actions
export default gameSlice.reducer
