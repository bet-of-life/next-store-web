import { Box, colors, styled, Typography } from "@mui/material";
import { useState } from "react";
import useThemeMode from "../../../../hooks/useThemeMode";
import { tokens } from "../../../../themes/theme";

const PaymentMode = () => {
  const [isFocusedPix, setIsFocusedPix] = useState<boolean>(false);
  const [isFocusedDinheiro, setIsFocusedDinheiro] = useState<boolean>(false);
  const [payment, setPayment] = useState<string>('');
  const { mode } = useThemeMode()
  const colors = tokens(mode)

  const handleFocusPix = () => {
    setIsFocusedPix(true);
    setIsFocusedDinheiro(false);
    setPayment('Pix')
  };

  const handleFocusDinheiro = () => {
    setIsFocusedDinheiro(true);
    setIsFocusedPix(false);
    setPayment('Dinheiro')
  };

  const handleBlur = () => {
    setIsFocusedPix(false);
    setIsFocusedDinheiro(false)
  };

  const CustomBox = styled(Box)(() => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 40,
    border: '1px solid',
    borderRadius: '5px',
    cursor: 'pointer',
    '&:hover': { borderColor: colors.grey[100] },
    tabIndex: 0
  }))

  return (
    <Box display='flex' flexDirection='column' gap={2} mb={2}>
      <Box>
        <Typography>
          Forma de Pagamento: {payment}
        </Typography>
      </Box>
      <Box display='flex' gap={2}>
        <CustomBox
          onClick={handleFocusPix}
          sx={{ borderColor: isFocusedPix ? colors.grey[100] : colors.grey[600] }}
          onBlur={handleBlur}
        >
          <Typography>
            Pix
          </Typography>
        </CustomBox>
        <CustomBox
          onClick={handleFocusDinheiro}
          sx={{ borderColor: isFocusedDinheiro ? colors.grey[100] : colors.grey[600] }}
          onBlur={handleBlur}
        >
          <Typography>
            Dinheiro
          </Typography>
        </CustomBox>
      </Box>
    </Box>
  );
}

export default PaymentMode;