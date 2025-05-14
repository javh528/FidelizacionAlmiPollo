import styled from "styled-components";

// 📌 Variables reutilizables para colores y sombras
const theme = {
    backgroundOpacity: "rgba(133, 130, 130, 0.2)",
    boxShadowStrong: "1px 1px 15px 1px rgb(144, 60, 4)",
    boxShadowImage: "1px 1px 15px 1px rgb(79, 33, 3)",
    figCaptionSize: "1.1rem",
};

// 📌 Contenedor principal de la historia
export const ContainerHistoria = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 90%;
    margin: 10px auto;
    gap: 20px;
    border-radius: 10px;
    box-shadow: ${theme.boxShadowStrong};
    padding: 3%;
    background: ${theme.backgroundOpacity}; /* Color de fondo con opacidad */

    p {
        font-size: 1.5rem;
        margin: 0; 
        text-align: justify;
    }

    /* Estilos para móviles */
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        text-align: center;

        p {
            font-size: 1.3rem;
        }
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        flex-direction: column;
    }
`;

// 📌 Contenedor de la imagen de la historia
export const ContainerFotoHistoria = styled.figure`
    width: 50%;
    min-width: 300px;
    margin: 10px auto;
    overflow: hidden;
    border-radius: 10px;
    box-shadow: ${theme.boxShadowImage};
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Imagen dentro del contenedor */
    img {
        width: 100%;
        height: auto;
        display: block;
        transition: transform 0.3s ease-in-out;
    }

    /* Efecto de zoom al pasar el mouse */
    &:hover img {
        transform: scale(1.1);
    }

    /* Texto opcional debajo de la imagen */
    figcaption {
        text-align: center;
        font-size: ${theme.figCaptionSize};
        margin-top: 15px;
    }

    /* Estilos para móviles */
    @media (max-width: 768px) {
        width: 100%;
    }

    @media (min-width: 769px) and (max-width: 1024px) {
        width: 100%;
    }
`;

// 📌 Contenedor del relato de la historia
export const ContainerRelatoHistoria = styled.div`
    flex: 1 1 50%;
    min-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;

    /* Estilos para móviles */
    @media (max-width: 768px) {
        width: 100%;
    }
`;
