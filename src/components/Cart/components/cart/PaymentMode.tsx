import { Box, colors, Typography } from "@mui/material";
import { useState } from "react";
import useThemeMode from "../../../../hooks/useThemeMode";
import { tokens } from "../../../../themes/theme";

const PaymentMode = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [payment, setPayment] = useState<string>('');
  const { mode } = useThemeMode()
  const colors = tokens(mode)
  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  return (
    <Box display='flex' flexDirection='column' py={2} gap={2}>
      <Box>
        <Typography>
          Forma de Pagamento:{payment}
        </Typography>
      </Box>
      <Box display='flex' gap={2}>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          width={40}
          height={40}
          border='1px solid'
          borderRadius={2}
          borderColor={isFocused ? colors.grey[100] : colors.grey[600]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={() => setPayment('Pix')}
          sx={{ cursor: 'pointer', '&:hover': { borderColor: colors.grey[100] } }}
          tabIndex={0}
        >
          <Typography>
            Pix
          </Typography>
        </Box>
        <Box
          display='flex'
          justifyContent='center'
          alignItems='center'
          width={100}
          height={40}
          border='1px solid'
          borderRadius={2}
          borderColor={isFocused ? colors.grey[100] : colors.grey[600]}
          onFocus={handleFocus}
          onBlur={handleBlur}
          onClick={() => setPayment('Dinheiro')}
          sx={{ cursor: 'pointer', '&:hover': { borderColor: colors.grey[100] } }}
          tabIndex={0}
        >
          <Typography>
            Dinheiro
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}

export default PaymentMode;