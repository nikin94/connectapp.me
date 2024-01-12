import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import CssBaseline from '@mui/material/CssBaseline'

import { ReactNode } from 'react'
import Header from './Header'
import Footer from './Footer'

interface LayoutProps {
  children: ReactNode
  centerX?: boolean
  centerY?: boolean
}

const Layout = ({ children, centerX, centerY }: LayoutProps) => (
  <Box sx={{ bgcolor: '#f3f2f8' }}>
    <CssBaseline />
    <Header />
    <Container maxWidth='lg'>
      <Box
        sx={{
          p: 4,
          minHeight: 'calc(100vh - 128px)',
          display: 'flex',
          bgcolor: '#fff',
          flexDirection: 'column',
          alignItems: centerX ? 'center' : 'flex-start',
          justifyContent: centerY ? 'center' : 'flex-start'
        }}
      >
        {children}
      </Box>
    </Container>
    <Footer />
  </Box>
)

export default Layout
