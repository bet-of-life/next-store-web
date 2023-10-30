import { Box, useTheme, Typography } from '@mui/material'
import Link from 'next/link';
import { useEffect, useState } from 'react';

const Footer = () => {
  const theme = useTheme()
  const [background, setBackground] = useState('black')

  useEffect(() => {
    theme.palette.mode === 'dark' ? setBackground('#2e2929') : setBackground('black')
  }, [theme])

  return (
    <Box
      width='100%'
      height='160px'
      display='flex'
      sx={{ backgroundColor: background }}
      pl='200px'
      pr='200px'
      pt='20px'
      pb='20px'
    >
      <Box display='flex' flexDirection='column' width='20%' height='auto'>
        <Typography color='secondary'>INSTITUCIONAL</Typography>
        <Link href='/'>
          <Typography color='secondary'>Home</Typography>
        </Link>
      </Box>
    </Box>
  );
}

export default Footer;