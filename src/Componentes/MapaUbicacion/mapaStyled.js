import styled from "styled-components";

// 📌 Variables reutilizables para colores y tamaños
const theme = {
    textColor: "#333",
    borderRadius: "25px",
    padding: "20px",
};

// 📌 Contenedor principal del mapa
export const ContainerMapa = styled.section`
    width: 100%;
    padding: ${theme.padding};
`;

// 📌 Estilos para el título
export const Title = styled.h1`
    margin-bottom: 20px;
    font-size: 24px;
    color: ${theme.textColor};
    text-align: center;
`;

// 📌 Estilos para el iframe
export const MapaIframe = styled.iframe`
    border: none;
    border-radius: ${theme.borderRadius};
    overflow: hidden; /* Evita desbordes en pantallas pequeñas */
    width: 100%;
    height: 400px;
`;

