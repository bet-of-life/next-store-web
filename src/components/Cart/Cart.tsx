import { Box, Button, Grid, IconButton, Typography } from "@mui/material";
import Image from "next/image";
import React, { Dispatch, SetStateAction, useContext, useState } from "react";
import useThemeMode from "../../hooks/useThemeMode";
import { tokens } from "../../themes/theme";
import RemoveCircleOutlinedIcon from '@mui/icons-material/RemoveCircleOutlined';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import DataCart from "./components/cart/DataCart";
import FinishCart from "./components/cart/FinishCart";
import useModal from "../../hooks/useModal";
import ModalAddress from "./components/FormModal/ModalAddress";
import { AuthContext } from "../../context/AuthContenxt";
import { CartProps } from "../../interfaces/interfaces";



const Cart = ({ id, name, color, price, src, size }: CartProps) => {
  const [quantityShirts, setQuantityShirts] = useState<number>(1)

  const { isOpenModal, toggleModal } = useModal()
  const { user } = useContext(AuthContext)

  return (
    <Box width='60vw' display='flex' justifyContent='center' flexDirection='column'>
      <ModalAddress
        open={isOpenModal}
        handleClose={toggleModal}
        clientName={user?.name}
        shirtSize={size}
        shirtPrice={price}
        shirtName={name}
      />
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
          <FinishCart price={price} quantityShirts={quantityShirts} handleOpenModal={toggleModal} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
