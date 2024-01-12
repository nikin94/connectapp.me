import { Link } from 'react-router-dom'
import { AppBar, Box, Container, Typography, useMediaQuery } from '@mui/material'
import { LINKS } from '../routes'

const Header = () => {
  const md = useMediaQuery('(min-width:768px)')
  const sm = useMediaQuery('(min-width:480px)')

  return (
    <AppBar sx={{ position: 'relative', zIndex: 1, height: md ? 64 : 'auto', bgcolor: '#2F2F2F' }}>
      <Container maxWidth='lg' sx={{ display: 'flex', height: '100%', pt: 1, pb: 1 }}>
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: md ? 'row' : 'column',
            flex: 1,
            justifyContent: 'space-between',
            gap: 2
          }}
        >
          <Link to='/'>
            <Typography sx={{ fontWeight: 'bold', textTransform: 'uppercase', color: '#fff' }}>
              Connectapp.me
            </Typography>
          </Link>
          <Box sx={{ display: 'flex', gap: 2, flexDirection: sm ? 'row' : 'column' }}>
            <Link to={LINKS.privacyPolicy}>
              <Typography sx={{ color: '#fff', textAlign: 'center' }}>Политика конфиденциальности</Typography>
            </Link>
            <Link to={LINKS.termsOfUse}>
              <Typography sx={{ color: '#fff', textAlign: 'center' }}>Пользовательское соглашение</Typography>
            </Link>
            <Link to={LINKS.contactUs}>
              <Typography sx={{ color: '#fff', textAlign: 'center' }}>Связаться с&nbsp;нами</Typography>
            </Link>
          </Box>
        </Box>
      </Container>
    </AppBar>
  )
}

export default Header
