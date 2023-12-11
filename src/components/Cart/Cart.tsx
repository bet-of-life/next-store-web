import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useState } from "react";
import useThemeMode from "../../hooks/useThemeMode";
import { tokens } from "../../themes/theme";
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DataCart from "./components/cart/DataCart";
import FinishCart from "./components/cart/FinishCart";

export interface CartProps {
  id?: number;
  name?: string;
  color?: string;
  price?: string;
  src?: string;
  size?: string;
  quantityShirts?: number
  setQuantityShirts?: Dispatch<SetStateAction<number>>
}

const Cart = ({ id, name, color, price, src, size }: CartProps) => {
  const [quantityShirts, setQuantityShirts] = useState<number>(1)

  return (
    <Box width='60vw' display='flex' justifyContent='center' flexDirection='column'>
      <Grid container py={5} direction='row'>
        <Grid item xs={2}>
          <Image
            src={src}
            alt="camisa"
            width={140}
            height={200}
            style={{ borderRadius: "8px" }}
          />
        </Grid>
        <Grid item xs={6} pl={1}>
          <DataCart name={name} color={color} size={size} quantityShirts={quantityShirts} setQuantityShirts={setQuantityShirts} />
        </Grid>
        <Grid xs={4} display='flex' alignItems='center' justifyContent='center'>
          <FinishCart price={price} quantityShirts={quantityShirts} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
