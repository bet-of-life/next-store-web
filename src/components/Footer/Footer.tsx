import { Box, Grid, Typography } from '@mui/material'
import { useRouter } from 'next/router';
import useThemeMode from '../../hooks/useThemeMode';
import { tokens } from '../../themes/theme';
import Institutional from './components/Institutional';
import PaymentTypes from './components/PaymentTypes';
import Service from './components/Service';
import useMediaQueryAdapter from '../../hooks/useMediaQuery';
import SocialIcons from '../NavBar/SocialIcons';

const Footer = () => {
  const { mode } = useThemeMode()
  const { tv, md } = useMediaQueryAdapter()

  const colors = tokens(mode)
  const router = useRouter()
  const route = router.pathname
  const verifyPostion = route === "/shoppingCart/[...params]" ? { position: 'fixed' } : {}
  const maxWidth = tv ? 1130 : 1220
  const direction = md ? 'column' : 'row'
  const gapGrid = md ? 1 : 0

  return (
    <Box
      component='footer'
      width='100%'
      display='flex'
      alignItems='center'
      justifyContent='center'
      bgcolor={colors.black[900]}
      py='20px' // Espaçamento vertical uniforme
      sx={verifyPostion}
      bottom='0'
      left='0'
      right='0'
    >
      <Grid container direction={direction} maxWidth={maxWidth} gap={gapGrid}>
        <Grid item xs={3} display='flex' flexDirection='column' alignItems='center'>
          <Institutional />
        </Grid>
        <Grid item xs={3} display='flex' flexDirection='column' alignItems='center'>
          <Service />
        </Grid>
        <Grid item xs={3} display='flex' flexDirection='column' alignItems='center'>
          <PaymentTypes />
        </Grid>
        <Grid item xs={3} display='flex' flexDirection='column' alignItems='center'>
          <Box>
            <Typography color={colors.yellow[100]}>SIGA-NOS</Typography>
            <SocialIcons />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Footer;