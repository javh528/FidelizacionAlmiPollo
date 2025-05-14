import styled from "styled-components";
import fondo from "../../../public/img/error4041.jpg";

// 📌 Variables reutilizables para colores y tamaños
const theme = {
    overlayBackground: "rgba(0, 0, 0, 0.6)",
    textColor: "white",
    borderRadiusLarge: "20px",
    borderRadiusSmall: "10px",
    containerWidth: "90%",
    maxContainerWidth: "800px",
};

export const ContainerError404 = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: ${theme.containerWidth};
    max-width: ${theme.maxContainerWidth};
    height: 500px;
    margin: 90px auto;
    border-radius: ${theme.borderRadiusLarge};
    position: relative;
    padding: 20px;
    background-image: url(${fondo});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    /* 📌 Capa de opacidad sin afectar el texto */
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${theme.overlayBackground};
        border-radius: ${theme.borderRadiusLarge};
        z-index: 1;
    }

    /* 📌 Estilos para el contenido */
    > * {
        position: relative;
        z-index: 2;
        color: ${theme.textColor};
    }

    /* 📱 Estilos responsivos */
    @media (max-width: 768px) {
        height: 400px;
        padding: 15px;
    }

    @media (max-width: 480px) {
        height: 350px;
        border-radius: ${theme.borderRadiusSmall};
    }
`;
