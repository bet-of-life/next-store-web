import { Button, Grid, Modal, Typography, } from "@mui/material";
import useThemeMode from "../../../hooks/useThemeMode";
import { tokens } from "../../../themes/theme";
import useMediaQueryAdapter from "../../../hooks/useMediaQuery";
import { useForm } from "react-hook-form";
import RoadInput from "./inputsModal/RoadInput";
import HouseNumberInput from "./inputsModal/HouseNumberInput";
import NeighborhoodInput from "./inputsModal/NeighborhoodInput";
import CityInput from "./inputsModal/CityInput";
import StateInput from "./inputsModal/StateInput";
import { formatMessage } from "../utils";
import ComplementInput from "./inputsModal/ComplementInput";

interface ModalAddressProps {
  open: boolean;
  handleClose: () => void;
  clientName: string;
  shirtSize: string;
  shirtPrice: string;
  shirtName: string;
  payment: string;
}

interface FormDataAdressProps {
  road: string,
  houseNumber: string
  complement: string,
  neighborhood: string,
  city: string,
  state: string,
}

const ModalAddress = ({ open, handleClose, clientName, shirtPrice, shirtSize, shirtName, payment }: ModalAddressProps) => {
  const { mode } = useThemeMode();
  const { sm } = useMediaQueryAdapter();
  const { register, handleSubmit, formState: { errors } } = useForm<FormDataAdressProps>()

  const colors = tokens(mode);

  const onSubmit = ({ road, neighborhood, complement, houseNumber }: FormDataAdressProps) => {
    const clienteData = {
      Nome: clientName,
      Endereco: road,
      Bairro: neighborhood,
      Complemento: complement || "",
      Numero: houseNumber,
      Pedido: {
        Camisa: shirtName,
        Tamanho: shirtSize,
        Preço: shirtPrice,
        "Forma de Pagamento": payment
      },
    };
    const whatsappMessage = formatMessage(clienteData);
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = "+558596689462";
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  }

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

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      disableScrollLock={true}
    >
      <Grid container sx={style} direction="column" gap={2}>
        <Grid item display="flex" justifyContent="center">
          <Typography variant="h6" sx={{ color: colors.grey[100] }}>
            Informe seu Endereço
          </Typography>
        </Grid>
        <Grid item>
          <RoadInput register={register} errors={errors} />
        </Grid>
        <Grid item>
          <HouseNumberInput register={register} errors={errors} />
        </Grid>
        <Grid item>
          <NeighborhoodInput register={register} errors={errors} />
        </Grid>
        <Grid item>
          <ComplementInput register={register} errors={errors} />
        </Grid>
        <Grid item>
          <CityInput register={register} errors={errors} />
        </Grid>
        <Grid item>
          <StateInput register={register} errors={errors} />
        </Grid>
        <Grid item mt={2}>
          <Button
            variant="contained"
            fullWidth
            sx={{ bgcolor: colors.grey[100] }}
            onClick={handleSubmit(onSubmit)}
          >
            <Typography sx={{ color: colors.grey[900], fontWeight: 'bold' }}>Finalizar Compra</Typography>
          </Button>
        </Grid>
      </Grid>
    </Modal>
  );
};

export default ModalAddress;