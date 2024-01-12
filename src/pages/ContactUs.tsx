import { Box, Typography } from '@mui/material'
import { Telegram, WhatsApp, Facebook } from '@mui/icons-material'
import { Layout } from '../components'
import { Link } from 'react-router-dom'

const ContactUs = () => (
  <Layout centerX centerY>
    <Typography fontSize={22} fontWeight='bold' textTransform='uppercase' textAlign='center'>
      Остались вопросы?
    </Typography>
    <Typography sx={{ mt: 2 }}>Пишите нам:</Typography>
    <Box sx={{ display: 'flex', flexDirection: 'row', gap: 2, mt: 2 }}>
      <Link to='/'>
        <Telegram sx={{ color: '#2F2F2F', fontSize: 48 }} />
      </Link>
      <Link to='/'>
        <WhatsApp sx={{ color: '#2F2F2F', fontSize: 48 }} />
      </Link>
      <Link to='/'>
        <Facebook sx={{ color: '#2F2F2F', fontSize: 48 }} />
      </Link>
    </Box>
  </Layout>
)

export default ContactUs
