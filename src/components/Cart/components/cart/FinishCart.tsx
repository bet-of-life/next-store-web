import { Box, Typography, Button } from "@mui/material";
import PaymentMode from "./PaymentMode";
import { CartProps } from "../../../../interfaces/interfaces";
import { toast } from "react-toastify";
import useThemeMode from "../../../../hooks/useThemeMode";
import { tokens } from "../../../../themes/theme";

const FinishCart = ({ price, quantityShirts, handleOpenModal, payment, setPayment }: CartProps) => {
  const { mode } = useThemeMode()
  const colors = tokens(mode)

  const handleFinishPayment = () => {
    if (!payment) {
      toast.error('Por favor escolha a forma de pagamento')
    } else {
      handleOpenModal()
    }
  }

  return (
    <Box
      width='100%'
      height={250}
      bgcolor={colors.grey[800]}
      borderRadius={2}
      p={2}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap={1}
    >
      <Box width='100%' display='flex' justifyContent='center'>
        <PaymentMode payment={payment} setPayment={setPayment} />
      </Box>
      <Box
        width='100%'
        display='flex'
        justifyContent='center'
        alignItems='center'
        gap={0.5}
        mb={2}
      >
        <Typography>Total:</Typography>
        <Typography fontWeight='bold'>R$ {(quantityShirts * parseFloat(price)).toFixed(2)}</Typography>
      </Box>
      <Button variant="contained" sx={{ bgcolor: colors.grey[100] }} fullWidth onClick={handleFinishPayment}>
        <Typography sx={{ color: colors.grey[900], fontWeight: 'bold' }} textTransform="capitalize">
          Finalizar Compra
        </Typography>
      </Button>
    </Box>
  );
}

export default FinishCart;