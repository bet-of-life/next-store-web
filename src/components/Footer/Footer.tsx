import { Box, Typography } from '@mui/material'
import Link from 'next/link';
import { useEffect, useState } from 'react';
import useThemeMode from '../../hooks/useThemeMode';

const Footer = () => {
  const { mode } = useThemeMode()
  const [background, setBackground] = useState('black')

  useEffect(() => {
    mode === 'dark' ? setBackground('#171717') : setBackground('#000336')
  }, [mode])

  return (
    <Box
      width='100%'
      height='160px'
      display='flex'
      bgcolor={background}
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