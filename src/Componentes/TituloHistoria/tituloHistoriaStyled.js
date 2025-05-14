import styled from "styled-components";

// 📌 Variables reutilizables para colores y sombras
const theme = {
    defaultBackground: "#fff",
    titleSizeLarge: "42px",
    titleSizeMedium: "2.3rem",
    titleSizeSmall: "2.1rem",
    textShadowDefault: "2px 2px 10px black",
};

// 📌 Contenedor del título de historia
export const ContainerTituloHistoria = styled.section`
    display: flex;
    justify-content: center;
    text-align: center;
    margin: 0;
    background-color: ${({ color }) => color || theme.defaultBackground}; /* Fallback seguro */

    h2 {
        font-size: ${theme.titleSizeLarge};
        margin: 50px 0 0 0;
        text-shadow: ${theme.textShadowDefault};
    }

    @media (max-width: 391px) {
        h2 {
            font-size: ${theme.titleSizeSmall};
        }
    }

    @media (max-width: 768px) {
        h2 {
            font-size: ${theme.titleSizeMedium};
        }
    }
`;
