// estilos.js
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";

const theme = {
    primaryHover: "rgb(251, 155, 12)",
    borderColor: "rgba(239, 236, 235, 0.28)",
    shadowHover: "0px 0px 10px rgb(234, 143, 83)",
    iconSize: "40px",
    iconSizeLarge: "50px",
    modalOverlay: "rgba(0, 0, 0, 0.5)", // Fondo del modal
    modalBackground: "#fff", // Fondo del contenido del modal
};

// 📌 Contenedor principal del footer
export const ContainerFooter = styled.footer`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: auto;
    padding: 20px 0;
    margin-top: 15px;
    border-top: 1px solid ${theme.borderColor};
    transition: box-shadow 0.3s ease-in-out, border-top 0.3s ease-in-out;
    flex-direction: column;
    gap: 25px;
    &:hover {
        border-top: 1px solid rgb(215, 104, 29);
        box-shadow: ${theme.shadowHover};
    }
`;

// 📌 Contenedor de los enlaces y redes sociales
export const FooterContacto = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        margin: 0;
    }

    figcaption {
        font-size: 14px;
        color: #fff;
        margin-top: 5px;

        @media (max-width: 768px) {
            font-size: 17px;
        }
        @media (max-width: 450px) {
            font-size: 16px;
        }
    }
`;

// 📌 Contenedor de icono con efecto hover
export const IconoWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: transparent;
    transition: background 0.3s ease-in-out;

    &:hover {
        background-color: ${theme.primaryHover};
    }
`;

// 📌 Estilos de los íconos de redes sociales
export const IconoRed = styled.img`
    width: ${theme.iconSize};
    height: ${theme.iconSize};
    transition: transform 0.3s ease-in-out;

    ${IconoWrapper}:hover & {
        transform: scale(1.2);
    }

    @media (max-width: 768px) {
        width: ${theme.iconSizeLarge};
        height: ${theme.iconSizeLarge};
    }
    @media (max-width: 450px) {
        width: ${theme.iconSize};
        height: ${theme.iconSize};
    }
`;

// 📌 Contenedor de firma
export const ContainerfirmaHome = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 15px;
    color: white;
    font-size: 14px;
    margin: 5px auto;
    p {
        display: flex;
        align-items: center;
        font-family: 'Courier New', Courier, monospace;
        color:${theme.shadowHover};
    }

    svg {
        color: red;
    }
`;

export const GithubIcon = styled(FaGithub)`
    font-size: 30px;
    color: black;
    cursor: pointer;
    transition: color 0.3s ease-in-out, transform 0.3s ease-in-out;

    &:hover {
        color:rgb(21, 10, 4);
        transform: scale(1.2);
    }
`;

// 📌 Estilos para el fondo borroso
export const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.modalOverlay};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;

// 📌 Estilos del modal
export const Modal = styled.div`
    background-color: ${theme.modalBackground};
    padding: 20px;
    border-radius: 10px;
    text-align: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    z-index: 1001;
`;
