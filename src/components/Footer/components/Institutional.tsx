
import { Box, Typography, Link, useMediaQuery } from '@mui/material';
import React from 'react';
import useThemeMode from '../../../hooks/useThemeMode';
import { tokens } from '../../../themes/theme';
import useMediaQueryAdapter from '../../../hooks/useMediaQuery';

const Institutional = () => {
  const { mode } = useThemeMode()
  const { md } = useMediaQueryAdapter()
  const colors = tokens(mode)
  const alignItens = md ? 'center' : 'start'

  return (
    <Box display='flex' flexDirection='column' alignItems={alignItens}>
      <Typography color={colors.yellow[100]} mb={1}>
        INSTITUCIONAL
      </Typography>

      <Link href='/'>
        <Typography
          color={colors.grey[100]}
          variant='body2'
          sx={{ underline: "aways" }}
        >
          {md && 'Home'}
          {!md && '- Home'}
        </Typography>
      </Link>
      <Link href='/'>
        <Typography
          color={colors.grey[100]}
          variant='body2'
          sx={{ underline: "aways" }}
        >
          {md && 'Catálogo'}
          {!md && '- Catálogo'}
        </Typography>
      </Link>
    </Box>
  );
};

export default Institutional;