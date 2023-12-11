import React from "react";
import Button from "@mui/material/Button";
import { formatMessage, objectToXml } from "./utils";

interface WhatsAppButtonProps {
  clientName: string;
  road: string;
  neighborhood: string;
  complement: string;
  houseNumber: string;
  shirtName: string;
  shirtModel: string;
  shirtSize: string;
}

const WhatsAppButton = ({
  clientName,
  road,
  neighborhood,
  complement,
  houseNumber,
  shirtName,
  shirtModel,
  shirtSize,
}: WhatsAppButtonProps) => {
  const clienteData = {
    Nome: clientName,
    Endereco: road,
    Bairro: neighborhood,
    Complemento: complement,
    Numero: houseNumber,
    Pedido: {
      Camisa: shirtName,
      Modelo: shirtModel,
      Tamanho: shirtSize,
    },
  };

  const whatsappMessage = formatMessage(clienteData);
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = "+558596689462";
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
      Finalizar Compra
    </Button>
  
  );
};

export default WhatsAppButton;
