import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Status, BetType, BetTypeState } from '../types'
import { ProductResponse } from '../types'
import { getProductDetails } from '../services/api'

const initialState: BetTypeState = {
  betType: BetType.V75,
  results: [],
  status: Status.Idle,
}

export const fetchBetTypeGames = createAsyncThunk(
  'betType/fetchBetTypeGames',
  async (betType: BetType): Promise<ProductResponse> => await getProductDetails(betType),
)

const betTypeSlice = createSlice({
  name: 'betType',
  initialState,
  reducers: {
    setBetType: (state, action: PayloadAction<BetType>) => {
      state.betType = action.payload
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchBetTypeGames.pending, state => {
        state.status = Status.Loading
      })
      .addCase(fetchBetTypeGames.fulfilled, (state, action) => {
        state.status = Status.Succeeded
        state.results = action.payload.results
      })
      .addCase(fetchBetTypeGames.rejected, state => {
        state.status = Status.Failed
      })
  },
})

export const { setBetType } = betTypeSlice.actions
export default betTypeSlice.reducer
