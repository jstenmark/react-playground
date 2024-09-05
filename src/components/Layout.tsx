import React, { ReactNode } from 'react'
import { Box } from '@mui/material'

interface LayoutProps {
  children: ReactNode
  props?: any
}

const Layout: React.FC<LayoutProps> = ({ children, ...props }) => {
  return (
    <Box sx={{ padding: { xs: 2, sm: 3, md: 4 } }} {...props}>
      {children}
    </Box>
  )
}

export default Layout
