import { Link } from 'react-router-dom'
import { AppBar, Box, Container, Typography } from '@mui/material'

const Footer = () => {
  return (
    <AppBar sx={{ position: 'relative', zIndex: 1, height: 64, bgcolor: '#2F2F2F' }}>
      <Container maxWidth='lg' sx={{ display: 'flex', height: '100%' }}>
        <Box flexShrink={1} alignItems='center' display='flex'>
          <Link to='/'>
            <Typography sx={{ fontWeight: 'bold', color: '#fff' }}>© Connectapp 2024</Typography>
          </Link>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Footer
