import styled from "styled-components";
import FotoPopayan from "../../../public/img/popayan.jpg";

// 📌 Variables reutilizables para colores y sombras
const theme = {
    backgroundOpacity: "rgba(241, 233, 233, 0.05)",
    boxShadowStrong: "1px 1px 35px 1px rgb(144, 60, 4)",
    boxShadowLight: "1px 1px 15px 1px rgb(144, 60, 4)",
    iconColor: "rgb(242, 143, 13)",
    hoverIconColor: "rgb(8, 5, 0)",
    textColor: "rgb(80, 48, 1)",
    hoverTextColor: "rgb(26, 16, 1)",
};

// 📌 Contenedor principal de la información
export const ContainerInformacion = styled.section`
    display: flex;
    flex-direction: row;
    text-align: center;
    justify-content: center;
    width: 90%;
    height: auto;
    margin: 30px auto;
    background-image: url(${FotoPopayan});
    background-size: cover; 
    background-position: center;
    gap: 35px;
    padding: 25px;
    border-radius: 15px;

    @media (max-width: 1024px){
        flex-direction: column;
    }

    /* 📱 Responsive para móviles */
    @media (max-width: 768px) {
        width: 100%;
        flex-direction: column;
        height: auto;
        gap: 20px;
        padding: 15px;
        border-radius: 0px;
    }
`;

// 📌 Contenedor de los datos
export const ContainerDatos = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: 30vh;
    gap: 15px;
    background: ${theme.backgroundOpacity};
    backdrop-filter: blur(25px);
    border-radius: 50px;
    box-shadow: ${theme.boxShadowStrong};

    @media (max-width: 1024px){
        width: 100%;
        height: auto;
    }

    /* 📱 Responsive para móviles */
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        padding: 20px;
        border-radius: 20px; 
        box-shadow: none;
        backdrop-filter: blur(8px);
    }
`;

// 📌 Contenedor del mapa
export const ContainerMaps = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    width: 50%;
    height: auto;
    background: ${theme.backgroundOpacity};
    backdrop-filter: blur(5px);
    border-radius: 50px;
    box-shadow: ${theme.boxShadowStrong};

    @media (max-width: 1024px){
        width: 100%;
    }

    /* 📱 Responsive para móviles */
    @media (max-width: 768px) {
        width: 100%;
        height: auto;
        padding: 15px;
        border-radius: 20px;
    }
`;

// 📌 Ítem de información
export const InfoItem = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 60%;
    align-items: center;
    gap: 10px;
    font-size: 18px;
    color: ${theme.textColor};

    @media (max-width: 1024px){
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        text-align: center;
        padding: 10px;
    }

    /* 📱 Responsive para móviles */
    @media (max-width: 768px) {
        width: 100%;
        justify-content: center;
        flex-direction: column;
    }
    
    @media (max-width: 450px){
        width: 100%;
        flex-direction: column;
        align-items: center;
        text-align: center;
    }

    svg {
        color: ${theme.iconColor};
        font-size: 35px;
        transition: color 0.3s ease-in-out;

        &:hover {
            color: ${theme.hoverIconColor};
        }

        @media (max-width: 1024px){
            font-size: 50px;
        }

        /* 📱 Responsive para móviles */
        @media (max-width: 768px) {
            font-size: 50px;
        }
        
        @media (max-width: 450px) {
            font-size: 35px;
        }
    }

    p {
        margin: 0;
        color: ${theme.textColor};
        transition: color 0.3s ease-in-out;

        &:hover {
            color: ${theme.hoverTextColor};
        }

        @media (max-width: 768px) {
            font-size: 23px;
            text-align: center;
        }

        @media (max-width: 450px) {
            font-size: 19px;
        }
    }
`;
