import React from 'react'
import { useAppSelector } from '../app/hooks'
import { Box, Typography } from '@mui/material'

const DevComponent: React.FC = () => {
  const betTypeState = useAppSelector(state => state.betType)
  const gameState = useAppSelector(state => state.game)
  const horseState = useAppSelector(state => state.horse)

  if (process.env.REACT_APP_DEV_COMPONENT === 'true') return null

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2 }}>
      <Box sx={{ flex: '1 1 25%', border: '1px solid gray', padding: 2 }}>
        <Typography variant="h6">Bet Type</Typography>
        <Typography>Type: {betTypeState.betType}</Typography>
        <Typography>Status: {betTypeState.status}</Typography>
        <Typography>Total Games: {betTypeState.results.length}</Typography>
      </Box>

      <Box sx={{ flex: '1 1 25%', border: '1px solid gray', padding: 2 }}>
        <Typography variant="h6">Games</Typography>
        <Typography>Toggled: {gameState.isToggled ? 'Toggled' : 'Not Toggled'}</Typography>
        <Typography>Game Id: {gameState.toggledGameId}</Typography>
        <Typography>Loading: {gameState.loading ? 'Yes' : 'No'}</Typography>
        <Typography>Error: {gameState.error || 'None'}</Typography>
      </Box>

      <Box sx={{ flex: '1 1 25%', border: '1px solid gray', padding: 2 }}>
        <Typography variant="h6">Horses</Typography>
        <Typography>Is Toggled: {horseState.isToggled ? 'Yes' : 'No'}</Typography>
        <Typography>Toggled Horse Name: {horseState.toggledHorseName || 'None'}</Typography>
      </Box>

      <Box sx={{ flex: '1 1 25%', border: '1px solid gray', padding: 2 }}>
        <Typography variant="h6">Debug Info</Typography>
        <Typography>Current Version: {process.env.REACT_APP_VERSION || 'N/A'}</Typography>
        <Typography>Api URL: {process.env.REACT_APP_API_URL || 'N/A'}</Typography>
      </Box>
    </Box>
  )
}

export default DevComponent
