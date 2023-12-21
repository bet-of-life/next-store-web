import { Box, Typography } from '@mui/material'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useThemeMode from '../../hooks/useThemeMode';
import { tokens } from '../../themes/theme';

const Footer = () => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)
  const router = useRouter()
  const route = router.pathname
  const verifyPostion = route === "/shoppingCart/[...params]" && { position:'fixed' }

  return (
    <Box
    component='footer'
    width='100%'
    display='flex'
    justifyContent='center'
    alignItems='center'
    bgcolor={colors.black[900]}
    py='20px' // Espaçamento vertical uniforme
    sx={verifyPostion}
    bottom='0'
    left='0'
    right='0'
  >
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography color='white' variant='body1'>INSTITUCIONAL</Typography>
      <Link href='/' color='white' >
        <Typography color='white' variant='body1'>Home</Typography>
      </Link>
    </Box>
  </Box>
  );
}

export default Footer;