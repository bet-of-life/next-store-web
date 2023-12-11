import { Box, Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";

interface CartProps {
  id: number;
  name: string;
  color: string;
  price: string;
  src: string;
  size: string;
}

const Cart = ({ id, name, color, price, src, size }: CartProps) => {

    const [quantityShirts, setQuantityShirts] = useState(0);

  return (
    <Grid container>
      <Grid item>
        <Box>
          <Image
            src={src}
            alt="camisa"
            fill={true}
            style={{ borderRadius: "8px 8px 0 0" }}
          />
        </Box>
      </Grid>
      <Grid item>
        <Box>
          <Typography>{name}</Typography>
          <Typography>Cor: {color}</Typography>
          <Typography>Tamanho: {size}</Typography>
        </Box>
        <Box>
          <Button onClick={() => setQuantityShirts(quantityShirts => quantityShirts - 1 )}>
            <Typography>-</Typography>
          </Button>
          <Typography>{quantityShirts}</Typography>
          <Button  onClick={() => setQuantityShirts(quantityShirts => quantityShirts + 1 )}>
            <Typography>+</Typography>
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Cart;
