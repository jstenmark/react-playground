import React, { useEffect } from 'react'
import HorseList from './HorseList'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { fetchGameDetails } from '../features/gameSlice'
import { Typography, Box, Divider } from '@mui/material'
import { formatRaceName } from '../utils/utils'

interface RaceListProps {
  gameId: string
}

const GameDetails: React.FC<RaceListProps> = ({ gameId }) => {
  const dispatch = useAppDispatch()
  const game = useAppSelector(state => state.game.games[gameId])
  const { loading, error } = useAppSelector(state => state.game)

  useEffect(() => {
    if (!game) {
      dispatch(fetchGameDetails(gameId))
    }
  }, [gameId, game, dispatch])

  if (loading) {
    return <Typography>Loading...</Typography>
  }

  if (error) {
    return <Typography color="error">{error}</Typography>
  }

  if (!game || game.races.length === 0) {
    return <Typography>No races available for this game.</Typography>
  }

  return (
    <Box sx={{ paddingTop: 1, marginTop: 1, borderTop: '1px solid #000' }}>
      {game.races.map((race, index: number) => (
        <Box key={race.id} sx={{ marginBottom: 2, marginLeft: 2 }}>
          <Typography variant="h6">
            {race.number} - {formatRaceName(race.name)}{' '}
            {new Date(race.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
          </Typography>
          <HorseList race={race} />
          {index < game.races.length - 1 && <Divider sx={{ marginTop: 1 }} />}
        </Box>
      ))}
    </Box>
  )
}

export default GameDetails
