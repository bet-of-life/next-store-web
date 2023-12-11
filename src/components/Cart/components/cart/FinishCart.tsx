import { Box, colors, Typography, Button } from "@mui/material";
import { CartProps } from "../../Cart";
import { useState } from "react";
import PaymentMode from "./PaymentMode";

const FinishCart = ({ price, quantityShirts }: CartProps) => {

  return (
    <Box
      width='85%'
      height={270}
      bgcolor={colors.grey[700]}
      borderRadius={2}
      p={2}
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
      gap={2}
    >
      <Box width='100%'>
        <PaymentMode />
      </Box>
      <Box
        width='100%'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        py={2}
      >
        <Typography>Total:</Typography>
        <Typography fontWeight='bold'>R$ {(quantityShirts * parseFloat(price)).toFixed(2)}</Typography>
      </Box>
      <Button variant="contained" sx={{ bgcolor: colors.grey[100] }} fullWidth>
        <Typography sx={{ color: colors.grey[900], fontWeight: 'bold' }} textTransform="capitalize">
          Filanizar Compra
        </Typography>
      </Button>
    </Box>
  );
}

export default FinishCart;