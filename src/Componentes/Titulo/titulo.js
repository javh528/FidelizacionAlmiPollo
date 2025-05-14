import styled from "styled-components";

// 📌 Variables reutilizables para colores y sombras
const theme = {
    borderColor: "rgba(239, 236, 235, 0.28)",
    textShadowDefault: "2px 2px 10px black",
    titleSizeLarge: "2rem",
    titleSizeSmall: "1.6rem",
    textSizeLarge: "1.6rem",
    textSizeSmall: "1.4rem",
};

// 📌 Contenedor principal del título
export const ContainerTituloAsadero = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    width: 100%;
    height: auto;
    border-bottom: 1px solid ${theme.borderColor}; 
    text-align: center;
    padding: 20px;

    @media (max-width: 768px) {
        border-bottom: none;
    }

    h3 {
        font-size: ${theme.titleSizeLarge};
        margin-bottom: 0;
        text-shadow: ${theme.textShadowDefault};
    }

    p {
        font-size: ${theme.textSizeLarge};
        margin-top: 0;
        max-width: 80%;
    }

    @media (max-width: 391px) {
        h3 {
            font-size: ${theme.titleSizeSmall};
            text-shadow: ${theme.textShadowDefault};
        }
        p {
            font-size: ${theme.textSizeSmall};
            text-shadow: ${theme.textShadowDefault};
        }
    }

    @media (max-width: 768px) {
        h3 {
            font-size: 1.9rem;
            text-shadow: ${theme.textShadowDefault};
        }
        p {
            font-size: ${theme.textSizeSmall};
        }
    }
`;

