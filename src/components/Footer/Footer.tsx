import { Box, Typography } from '@mui/material'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import useThemeMode from '../../hooks/useThemeMode';
import { tokens } from '../../themes/theme';
import Institutional from './components/Institutional';
import PaymentTypes from './components/PaymentTypes';
import Service from './components/Service';

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
    justifyContent='space-between'
    alignItems='center'
    bgcolor={colors.black[900]}
    py='20px' // Espaçamento vertical uniforme
    sx={verifyPostion}
    bottom='0'
    left='0'
    right='0'
  >
    <Institutional />
    <Service />
    <PaymentTypes />
  </Box>
  );
}

export default Footer;