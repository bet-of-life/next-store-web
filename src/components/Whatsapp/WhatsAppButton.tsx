import React from 'react';
import Button from '@mui/material/Button';
import { clienteData, formatMessage, objectToXml } from './utils';

const WhatsAppButton = () => {
  const whatsappMessage = formatMessage(clienteData);
  const handleClick = () => {
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const phoneNumber = '+558596689462';
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <Button variant="contained" color="primary" onClick={handleClick}>
        Finalizar Compra
    </Button>
  );
};

export default WhatsAppButton;