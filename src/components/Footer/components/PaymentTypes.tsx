import { Box, Typography } from '@mui/material';
import Image from 'next/image';
import useThemeMode from '../../../hooks/useThemeMode';
import { tokens } from '../../../themes/theme';
import useMediaQueryAdapter from '../../../hooks/useMediaQuery';

const PaymentTypes = () => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)

  return (
    <Box display='flex' flexDirection='column' alignItems='center'>
      <Typography color={colors.yellow[100]}>
        FORMAS DE PAGAMENTO
      </Typography>
      <Box display='flex' flexDirection='row' alignItems='center' gap={1}>
        <Image src='/dinheiro.png' alt='money symbol' width={55} height={60} />
        <Image src='/pix.webp' alt='money symbol' width={55} height={33} />
      </Box>
    </Box>
  );
};

export default PaymentTypes;