import React from 'react';
import QRCode from 'react-qr-code';
import { ContainerQR } from './generadorqr.styles';

const FORM_URL = "http://192.168.100.49:5173/formulario";  // Definimos la URL como constante fuera del componente

const GeneradorQR = () => {
  return (
    <ContainerQR>
      <h2>Regístrate en nuestra plataforma:</h2>
      <QRCode value={FORM_URL} size={250} alt="Código QR para registro" />
      <p>Recibe descuentos, promociones y mucho más.</p>
    </ContainerQR>
  );
};

export default GeneradorQR;
