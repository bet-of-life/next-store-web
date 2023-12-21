import { Box, Typography } from '@mui/material';
import useThemeMode from '../../../hooks/useThemeMode';
import { tokens } from '../../../themes/theme';
import useMediaQueryAdapter from '../../../hooks/useMediaQuery';

const Service = () => {
  const { mode } = useThemeMode()
  const { md } = useMediaQueryAdapter()
  const colors = tokens(mode)
  const alignItens = md ? 'center' : 'start'

  return (
    <Box display='flex' flexDirection='column' alignItems={alignItens}>
      <Typography mb={1} color={colors.yellow[100]}>
        ATENDIMENTO
      </Typography>
      <Typography variant='body2' color={colors.grey[100]}>
        +55 (85) 99668-9462
      </Typography>
      <Typography variant='body2' color={colors.grey[100]}>
        rafael@gmail.com
      </Typography>
    </Box>
  );
};

export default Service;