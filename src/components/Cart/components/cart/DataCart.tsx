import { Box, Typography, IconButton } from "@mui/material";
import { CartProps } from "../../Cart";
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import { useState } from "react";

const DataCart = ({ name, color, size, quantityShirts, setQuantityShirts }: CartProps) => {

  const handleSubtrat = () => {
    if (quantityShirts > 1) {
      setQuantityShirts(quantityShirts => quantityShirts - 1)
    }
  }

  return (
    <>
      <Box display='flex' flexDirection='column' gap={3} mt={1}>
        <Typography>{name}</Typography>
        <Typography>Cor: {color}</Typography>
        <Typography>Tamanho: {size}</Typography>
      </Box>
      <Box display='flex' gap={1} mt={2} height={50} alignItems='center' ml={-1}>
        <IconButton onClick={handleSubtrat}>
          <RemoveCircleOutlinedIcon fontSize="small" />
        </IconButton>
        <Typography>{quantityShirts}</Typography>
        <IconButton onClick={() => setQuantityShirts(quantityShirts => quantityShirts + 1)}>
          <AddCircleOutlinedIcon fontSize="small" />
        </IconButton>
      </Box>
    </>
  );
}

export default DataCart;