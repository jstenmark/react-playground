import React from 'react'
import HorseDetails from './HorseDetails'
import { GameRace } from '../types/gameResponse'
import { Box, Typography, Divider } from '@mui/material'
import { useAppDispatch, useAppSelector } from '../app/hooks'
import { toggleHorse } from '../features/horseSlice'

interface HorseListProps {
  race: GameRace
}

const HorseList: React.FC<HorseListProps> = ({ race }) => {
  const dispatch = useAppDispatch()
  const { toggledHorseName, isToggled } = useAppSelector(state => state.horse)

  const handleToggleHorse = (horseName: string) => {
    dispatch(toggleHorse(horseName))
  }

  if (!race) {
    return <Typography variant="subtitle1">No horses available for this race.</Typography>
  }

  return (
    <Box>
      {race.starts.map((start, index: number) => (
        <Box key={start.number} sx={{ paddingLeft: 2, marginBottom: 1 }}>
          <Typography variant="body1" onClick={() => handleToggleHorse(start.horse.name)} sx={{ cursor: 'pointer' }}>
            {start.number} {start.horse.name} - {start.driver.firstName} {start.driver.lastName}
          </Typography>
          {isToggled && toggledHorseName === start.horse.name && <HorseDetails horse={start.horse} />}
          {index < race.starts.length - 1 && <Divider sx={{ marginTop: 1 }} />}
        </Box>
      ))}
    </Box>
  )
}

export default HorseList
