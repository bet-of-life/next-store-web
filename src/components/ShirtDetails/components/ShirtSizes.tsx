import useThemeMode from '../../../hooks/useThemeMode';
import { tokens } from '../../../themes/theme';
import { Box, Typography } from '@mui/material';
import { useState } from 'react';

interface ShirtSizesProps {
  setShirtSizes: (size: string) => void,
  value: string
}

const ShirtSizes = ({ setShirtSizes, value }: ShirtSizesProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const { mode } = useThemeMode()
  const colors = tokens(mode)
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };
  return (
    <Box
      display='flex'
      justifyContent='center'
      alignItems='center'
      width={40}
      height={40}
      border='1px solid'
      borderRadius={2}
      borderColor={isFocused ? colors.grey[100]: colors.grey[600]}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onClick={() => setShirtSizes(value)}
      sx={{ cursor: 'pointer', '&:hover': { borderColor: colors.grey[100] } }}
      tabIndex={0}
    >
      <Typography>
        {value}
      </Typography>
    </Box>
  );
}

export default ShirtSizes