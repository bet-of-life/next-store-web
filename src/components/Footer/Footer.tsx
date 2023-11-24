import { Box, Typography } from '@mui/material'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useThemeMode from '../../hooks/useThemeMode';
import { tokens } from '../../themes/theme';

const Footer = () => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)

  return (
    <Box
      width='100%'
      height='160px'
      display='flex'
      bgcolor={colors.black[900]}
      pl='200px'
      pr='200px'
      pt='20px'
      pb='20px'
    >
      <Box display='flex' flexDirection='column' >
        <Typography color='white'>INSTITUCIONAL</Typography>
        <Link href='/'>
          <Typography color='white'>Home</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;