import { Box, Grid } from "@mui/material";
import Image from "next/image";
import React, { useContext, useState } from "react";
import DataCart from "./components/cart/DataCart";
import FinishCart from "./components/cart/FinishCart";
import useModal from "../../hooks/useModal";
import ModalAddress from "./components/FormModal/ModalAddress";
import { AuthContext } from "../../context/AuthContenxt";
import { CartProps } from "../../interfaces/interfaces";
import { useWindowDimensions } from "../../hooks/useWindowDimensions";

const Cart = ({ name, color, price, src, size }: CartProps) => {
  const [quantityShirts, setQuantityShirts] = useState<number>(1)

  const { isOpenModal, toggleModal } = useModal()
  const { user } = useContext(AuthContext)
  const sizeWindowWidth = useWindowDimensions();

  const BoxWidth = sizeWindowWidth.width < 1025 ? '90vw' : '70vw'
  const paddingY = sizeWindowWidth.width < 900 ? 5 : 13
  const marginTopGrid = sizeWindowWidth.width < 1025 ? 3 : 0

  return (
    <Box
      width={BoxWidth}
      display='flex'
      justifyContent='center'
      flexDirection='column'
      alignItems='center'
      py={paddingY}
    >
      <ModalAddress
        open={isOpenModal}
        handleClose={toggleModal}
        clientName={user?.name}
        shirtSize={size}
        shirtPrice={price}
        shirtName={name}
      />
      <Grid container py={5} direction='row'>
        <Grid item xs={12} lg={8}>
          <Box display='flex'>
            <Box>
              <Image
                src={src}
                alt="camisa"
                width={140}
                height={200}
                style={{ borderRadius: "8px" }}
              />
            </Box>
            <Box ml={2}>
              <DataCart name={name} color={color} size={size} quantityShirts={quantityShirts} setQuantityShirts={setQuantityShirts} />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} lg={4} display='flex' alignItems='center' justifyContent='center' mt={marginTopGrid}>
          <FinishCart price={price} quantityShirts={quantityShirts} handleOpenModal={toggleModal} />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Cart;
