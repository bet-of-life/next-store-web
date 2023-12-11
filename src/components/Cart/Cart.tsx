import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React, { useContext, useState } from "react";
import Layout from "../Layout";
import useThemeMode from "../../hooks/useThemeMode";
import { tokens } from "../../themes/theme";
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import ModalAddress from "./components/FormModal/ModalAddress";
import useModal from "../../hooks/useModal";
import { AuthContext } from "../../context/AuthContenxt";
import { data } from "../ShirtDetails/utils";

interface CartProps {
  id: number;
  name: string;
  color: string;
  price: string;
  src: string;
  size: string;
}

const Cart = ({ id, name, color, price, src, size }: CartProps) => {

  const [quantityShirts, setQuantityShirts] = useState(1);
  const { user } = useContext(AuthContext)
  const { mode } = useThemeMode()
  const colors = tokens(mode)
  const { toggleModal, isOpenModal } = useModal();
  const handleSubtrat = () => {
    if (quantityShirts > 1) {
      setQuantityShirts(quantityShirts => quantityShirts - 1)
    }
  }

  return (
    <Box width='70vw' display='flex' justifyContent='center' flexDirection='column'>
      <Box width='70%' height={200} bgcolor='blue'>
      <ModalAddress 
          open={isOpenModal}
          handleClose={toggleModal}
          clientName={user?.name}
          shirtSize={size}
          shirtPrice={price}
          shirtName={name}
        />
      </Box>
      <Grid container py={5} direction='row'>
        <Grid item xs={2} border='1px solid'>
          <Image
            src={src}
            alt="camisa"
            width={140}
            height={200}
            style={{ borderRadius: "8px" }}
          />
        </Grid>
        <Grid item xs={8} border='1px solid'>
          <Box display='flex' flexDirection='column' gap={3}>
            <Typography>{name}</Typography>
            <Typography>Cor: {color}</Typography>
            <Typography>Tamanho: {size}</Typography>
          </Box>
          <Box display='flex' gap={1} mt={2} height={50} alignItems='center' ml={-1}>
            <IconButton onClick={toggleModal}>
              <RemoveCircleOutlinedIcon fontSize="small" />
            </IconButton>
            <Typography>{quantityShirts}</Typography>
            <IconButton onClick={() => setQuantityShirts(quantityShirts => quantityShirts + 1)}>
              <AddCircleOutlinedIcon fontSize="small" />
            </IconButton>
          </Box>
        </Grid>
        
        <Grid item xs={2} border='1px solid'>
          <Typography>{quantityShirts * parseFloat(price)}</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
