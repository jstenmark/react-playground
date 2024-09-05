import React, { useEffect, useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchBetTypeGames, setBetType } from '../features/betTypeSlice'
import { BetType, Status } from '../types'
import {
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  CircularProgress,
  Typography,
  SelectChangeEvent,
} from '@mui/material'

const BetTypeSelector: React.FC = () => {
  const dispatch = useAppDispatch()
  const { betType, status } = useAppSelector(state => state.betType)

  useEffect(() => {
    dispatch(fetchBetTypeGames(betType))
  }, [betType, dispatch])

  const handleBetTypeChange = useCallback(
    (event: SelectChangeEvent<BetType>) => {
      dispatch(setBetType(event.target.value as BetType))
    },
    [dispatch],
  )

  return (
    <div>
      <FormControl fullWidth variant="outlined" margin="normal">
        <InputLabel id="bet-type-label">Bet typ</InputLabel>
        <Select labelId="bet-type-label" value={betType} onChange={handleBetTypeChange} label="Bet type">
          {Object.values(BetType).map(type => (
            <MenuItem key={type} value={type}>
              {type}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {status === Status.Loading && (
        <Box mt={2}>
          <CircularProgress />
        </Box>
      )}

      {status === Status.Failed && (
        <Typography variant="subtitle1" color="error" mt={2}>
          Failed to load games. Please try again.
        </Typography>
      )}
    </div>
  )
}

export default BetTypeSelector
