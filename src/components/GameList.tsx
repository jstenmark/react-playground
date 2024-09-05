import React from 'react'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import GameDetails from './GameDetails'
import { Box, Typography } from '@mui/material'
import { toggleGame } from '../features/gameSlice'

const GameList: React.FC = () => {
  const games = useAppSelector(state => state.betType.results)
  const dispatch = useAppDispatch()
  const toggledGameId = useAppSelector(state => state.game.toggledGameId)

  const handleToggleGame = (gameId: string) => {
    dispatch(toggleGame(gameId))
  }

  const gameDetailStyle = { paddingBottom: 2, paddingTop: 2, borderBottom: '2px solid #000' }

  return (
    <Box>
      {games.map(result => (
        <Box key={result.id} sx={gameDetailStyle}>
          <Box onClick={() => handleToggleGame(result.id)} sx={{ cursor: 'pointer' }}>
            <Typography variant="h5">
              {result.tracks.map(track => track.name).join(', ')} -{' '}
              {new Date(result.startTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Typography>
          </Box>
          {toggledGameId === result.id && <GameDetails gameId={result.id} />}
        </Box>
      ))}
    </Box>
  )
}

export default GameList
