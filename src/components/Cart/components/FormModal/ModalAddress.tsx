import {
  Button,
  CircularProgress,
  Grid,
  Link,
  Modal,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import useMediaQuery from "../../../../hooks/useMediaQuery";
import useModal from "../../../../hooks/useModal";
import useThemeMode from "../../../../hooks/useThemeMode";
import {
  AddressErrorProps,
  AddressProps,
} from "../../../../interfaces/interfaces";
import { tokens } from "../../../../themes/theme";
import WhatsAppButton from "../../../Whatsapp/WhatsAppButton";
import FormAddress from "../../FormAddress";

interface ModalAddressProps {
  open: boolean;
  handleClose: () => void;
  clientName: string;
  shirtSize: string;
  shirtPrice: string;
  shirtName: string;
}

const ModalAddress = ({
  open,
  handleClose,
  clientName,
  shirtPrice,
  shirtSize,
  shirtName,
}: ModalAddressProps) => {
  const { mode } = useThemeMode();
  const { sm } = useMediaQuery();

  const [isLoading, setIsLoading] = useState<Boolean>(false);
  const colors = tokens(mode);
  const [address, setAddress] = useState<AddressProps>({
    road: "",
    neighborhood: "",
    complement: "",
    houseNumber: "",
    city: "",
    state: "",
  });
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: sm ? 330 : 450,
    bgcolor: colors.black[900],
    boxShadow: 24,
    p: 4,
    borderRadius: "15px",
  };

  const [errorAddress, setErrorAddress] = useState<AddressErrorProps>({
    errorRoad: false,
    errorNeighborhood: false,
    errorComplement: false,
    errorHouseNumber: false,
    errorCity: false,
    errorState: false,
    errorMessage: "",
  });
  const handleCloseModal = () => {
    setErrorAddress({
      errorRoad: false,
      errorNeighborhood: false,
      errorComplement: false,
      errorHouseNumber: false,
      errorCity: false,
      errorState: false,
      errorMessage: "",
    });
    handleClose();
  };
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableScrollLock={true}
    >
      <Grid container sx={style} direction="column" gap={1}>
        <Grid item display="flex" justifyContent="center">
          <Typography variant="h6" sx={{ color: colors.grey[100] }}>
            Formulário de compra
          </Typography>
        </Grid>
        <FormAddress
          setAddress={setAddress}
          setErrorAddress={setErrorAddress}
          address={address}
          errorAddress={errorAddress}
        />

        <Grid item mt={2}>
          <Button
            variant="contained"
            fullWidth
            sx={{ bgcolor: colors.grey[100] }}
          >
            {isLoading ? (
              <CircularProgress size={18} />
            ) : (
              <WhatsAppButton
                clientName={clientName}
                road={address.road}
                neighborhood={address.neighborhood}
                complement={address.complement}
                houseNumber={address.houseNumber}
                shirtPrice={shirtPrice}
                shirtSize={shirtSize}
                shirtName={shirtName}
              />
            )}
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default ModalAddress;
