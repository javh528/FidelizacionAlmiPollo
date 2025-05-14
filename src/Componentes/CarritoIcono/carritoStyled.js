import styled from "styled-components";

// Variables de tema para colores y tamaños
const theme = {
  primaryColor: " #ff6600",
  primaryHover: " #e65c00",
  dangerColor: " #ff0000",
  dangerHover: " #e60000",
  successColor: " #25d366",
  successHover: " #1ebe5b",
  overlayBackground: "rgba(0, 0, 0, 0.3)",
  boxShadow: "0 4px 10px rgba(0,0,0,0.2)",
  borderRadius: "8px",
  fontSizeSmall: "0.8rem",
};

// Estilo del contenedor flotante del carrito
export const CarritoFlotante = styled.div`
  position: fixed;
  top: 60%;
  right: 20px;
  z-index: 999;
  transform: translateY(-90%);

  @media (max-width: 768px) {
    left: 0; /* En pantallas pequeñas, lo movemos al lado izquierdo */
    right: unset; /* Desactivamos la posición a la derecha */
  }
`;

// Estilo del ícono del carrito
export const IconoCarrito = styled.button`
  background: ${theme.dangerColor};
  border: none;
  border-radius: 50%;
  padding: 10px;
  cursor: pointer;
  color: white;
  position: relative;

  &:hover {
    background: ${theme.primaryHover};
  }
`;

// Estilo del contador de productos
export const Contador = styled.span`
  position: absolute;
  top: -5px;
  right: -5px;
  background: ${theme.dangerColor};
  color: black;
  border-radius: 50%;
  padding: 2px 6px;
  font-size: ${theme.fontSizeSmall};
  font-weight: bold;
`;

// Panel desplegable del carrito
export const PanelCarrito = styled.div`
  position: absolute;
  bottom: 60px;
  right: 0;
  background: url('img/cenizas.gif') center/cover no-repeat; /* Agrega un gif de cenizas animadas */
  opacity: 0.85; /* Opacidad del panel */
  border: 1px solid #ddd;
  border-radius: ${theme.borderRadius};
  box-shadow: ${theme.boxShadow};
  width: 260px;
  padding: 15px;

  @media (max-width: 768px) {
    position: static;
  }

  /* Fondo GIF con transparencia */
  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: url('/cenizas.gif') center/cover no-repeat;
    opacity: 0.5; /* 🎯 solo afecta al fondo, no al contenido */
    z-index: 0;
  }

  /* Contenido encima del fondo */
  > * {
    position: relative;
    z-index: 1;
  }
`;

// Estilo de cada producto en el carrito
export const Producto = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0;
  color: black;
`;

// Botón para finalizar la compra
export const BotonFinalizar = styled.button`
  width: 100%;
  padding: 10px;
  background: ${theme.successColor};
  color: white;
  font-weight: bold;
  border: none;
  border-radius: ${theme.borderRadius};
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: ${theme.successHover};
  }
`;

// Botón para vaciar el carrito
export const BotonVaciar = styled.button`
  width: 100%;
  padding: 10px;
  background: ${theme.dangerColor};
  color: white;
  font-weight: bold;
  border: none;
  border-radius: ${theme.borderRadius};
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background: ${theme.dangerHover};
  }
`;

// Estilo del overlay
export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3); /* Fondo semitransparente */
  backdrop-filter: blur(5px); /* Efecto borroso */
  z-index: 998; /* Debajo del carrito flotante */
`;

export const MensajeCarritoVacio = styled.p`
  color: black; /* Cambia el color aquí */
  font-weight: bold;
  text-align: center;
  margin-top: 10px;
`;

