import { Box, colors, Typography, Button } from "@mui/material";

import { useState } from "react";
import PaymentMode from "./PaymentMode";
import useModal from "../../../../hooks/useModal";
import { CartProps } from "../../../../interfaces/interfaces";

const FinishCart = ({ price, quantityShirts, handleOpenModal }: CartProps) => {

  return (
    <Box
      width='100%'
      height={250}
      bgcolor={colors.grey[900]}
      borderRadius={2}
      p={2}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap={1}
    >
      <Box width='100%' display='flex' justifyContent='center'>
        <PaymentMode />
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
      <Button variant="contained" sx={{ bgcolor: colors.grey[100] }} fullWidth onClick={handleOpenModal}>
        <Typography sx={{ color: colors.grey[900], fontWeight: 'bold' }} textTransform="capitalize">
          Finalizar Compra
        </Typography>
      </Button>
    </Box>
  );
}

export default FinishCart;