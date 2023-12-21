
import { Box, Typography } from '@mui/material';
import Link from 'next/link';
import React from 'react';

const Institutional = () => {
  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography color='white' variant='body1'>INSTITUCIONAL</Typography>
      <Link href='/' color='white' >
        <Typography color='white' variant='body1'>Home</Typography>
      </Link>
    </Box>
  );
};

export default Institutional;