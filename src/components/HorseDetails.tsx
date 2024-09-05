import React from 'react'
import { Box, Typography } from '@mui/material'

interface HorseDetailsProps {
  horse: any
}

const HorseDetails: React.FC<HorseDetailsProps> = ({ horse }: any) => {
  if (!horse) return null

  return (
    <Box sx={{ paddingLeft: 4, color: 'gray' }}>
      <Typography variant="body2" sx={{ fontSize: '14px' }}>
        Hästens tränare: {horse.trainer.firstName} {horse.trainer.lastName}
      </Typography>
      <Typography variant="body2" sx={{ fontSize: '14px' }}>
        Hästens far: {horse.pedigree.father.name}
      </Typography>
    </Box>
  )
}

export default HorseDetails
