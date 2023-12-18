import { Box, colors, styled, Typography } from "@mui/material";
import { Dispatch, SetStateAction, useState } from "react";
import useThemeMode from "../../../../hooks/useThemeMode";
import { tokens } from "../../../../themes/theme";

interface PaymentProps {
  payment: string
  setPayment: Dispatch<SetStateAction<string>>
}

const PaymentMode = ({ payment, setPayment }: PaymentProps) => {
  const [isFocusedPix, setIsFocusedPix] = useState<boolean>(false);
  const [isFocusedDinheiro, setIsFocusedDinheiro] = useState<boolean>(false);

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
    <Box display='flex' width='100%' flexDirection='column' gap={2} mb={2}>
      <Box display='flex' justifyContent='center'>
        <Typography>
          Forma de Pagamento:
        </Typography>
        <Typography fontWeight='bold' ml={1}>
          {payment}
        </Typography>
      </Box>
      <Box display='flex' gap={2} justifyContent='center'>
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