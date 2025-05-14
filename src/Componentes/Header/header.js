import styled from "styled-components";

// 📌 Variables reutilizables para colores y tamaños
const theme = {
    borderColor: "rgba(239, 236, 235, 0.28)",
    hoverBorderColor: "rgb(203, 87, 10)",
    shadowHover: "10px 0px 10px rgb(234, 143, 83)",
    menuBackground: "rgba(0, 0, 0, 0.9)",
    menuWidthMobile: "50%", // Ajustamos el ancho en móviles
};

// 📌 Contenedor principal del header
export const ContainerHeader = styled.header`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    width: 90%;
    max-width: 1500px;
    min-height: 11vh;
    box-sizing: border-box;
    margin: 0 auto;
    
    padding: 0 20px;
    border-bottom: 2px solid ${theme.borderColor};
    transition: box-shadow 0.3s ease-in-out, border-bottom 0.3s ease-in-out;

    &:hover {
        border-bottom: 2px solid ${theme.hoverBorderColor};
        box-shadow: ${theme.shadowHover};
    }
    @media (min-width: 769px) and ( max-width: 1024px) {
        width: 100%;
    }
    @media (max-width: 768px) {
        justify-content: space-between;
    }
`;

// 📌 Menú de navegación
export const ContainerHeaderNav = styled.div`
    display: flex;
    gap: 15px 0;
    align-items: center;
    flex-wrap: nowrap;

    @media (min-width: 769px) and ( max-width: 825px) {
        width: 100%;
        justify-content: flex-end;
        margin: 0px;
        
    }

    @media (max-width: 768px) {
        position: fixed;
        top: 0;
        right: ${({ $menuOpen }) => ($menuOpen ? "0" : "-100%")};
        width: ${theme.menuWidthMobile}; /* Mejor ajuste en móviles */
        height: 100vh;
        background: ${theme.menuBackground};
        flex-direction: column;
        align-items: center;
        justify-content: center;
        transition: right 0.3s ease-in-out;
        z-index: 100;
    }

    button {
        color: white;
        font-size: 1.4rem;
        transition: color 0.3s ease-in-out;
        margin: 0px;
        max-width: 100%; /* Evita que el botón sea más grande que el contenedor */
        flex-shrink: 1; /* Permite que el botón se reduzca en caso de falta de espacio */
        margin: 15 5px; /* Evitar margen extra */

        &:hover {
            color: orange;
        }

        @media (max-width: 1024px) {
            font-size: 1.5rem;
        }

        @media (max-width: 1480px) {
            font-size: 1.9rem;
        }
    }
`;

// 📌 Botón de menú hamburguesa
export const MenuButton = styled.button`
    display: none;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;

    @media (max-width: 768px) {
        display: block;
        position: absolute;
        right: 20px;
        z-index: 200;
    }
`;

// 📌 Logo del negocio
export const Logo = styled.img`
    display: none;

    @media (max-width: 768px) {
        height: 12vh;
        display: block;
    }
`;
