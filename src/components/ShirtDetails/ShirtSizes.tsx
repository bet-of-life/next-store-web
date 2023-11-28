import useThemeMode from '../../hooks/useThemeMode';
import { tokens } from '../../themes/theme';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

interface ShirtSizesProps {
  setShirtSizes: (size: string) => void,
  value: string
}

const ShirtSizes = ({ setShirtSizes, value }: ShirtSizesProps) => {

  const { mode } = useThemeMode()
  const colors = tokens(mode)

  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      width={40}
      height={40}
      border='1px solid'
      borderRadius={2}
      borderColor={colors.grey[600]}
      onClick={() => setShirtSizes(value)}
      sx={{ cursor: 'pointer' }}
    >
      <Typography>
        {value}
      </Typography>
    </Box>
  );
}

export default ShirtSizes