import styled from "styled-components";

// 📌 Variables reutilizables para colores y sombras
const theme = {
    primaryColor: "#c73d0f",
    textColor: "#333",
    buttonTextHover: "#fff",
    overlayBackground: "rgba(0, 0, 0, 0.5)",
};

// 📌 Contenedor Principal del Menú
export const MenuContainer = styled.div`
    width: 90%;
    border-radius: 10px;
    height: auto;
    margin: 20px auto;
    text-align: center;
    box-shadow: 1px 1px 15px 1px rgb(108, 45, 2);
    padding: 20px;

    @media (max-width: 768px) {
        width: 100%;
        margin: 10px auto;
    }
`;

// 📌 Contenedor de Categorías (Botones)
export const Categories = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin: 10px auto;

    @media (max-width: 480px) {
        gap: 10px;
    }
`;

// 📌 Botón de categoría con estilo dinámico
export const CategoryButton = styled.button`
    background: ${({ active }) => (active ? theme.primaryColor : "#fff")};
    color: ${({ active }) => (active ? theme.buttonTextHover : theme.primaryColor)};
    border: 2px solid ${theme.primaryColor};
    padding: 10px 20px;
    font-size: 20px;
    cursor: pointer;
    border-radius: 15px;
    transition: all 0.3s ease;

    &:hover {
        background: ${theme.primaryColor};
        color: ${theme.buttonTextHover};
    }

    @media (max-width: 768px) {
        font-size: 22px;
        padding: 8px 15px;
    }

    @media (max-width: 480px) {
        font-size: 18px;
        padding: 6px;
    }
`;

// 📌 Contenedor de los productos del menú
export const MenuItems = styled.div`
    display: grid;
    gap: 20px;
    justify-content: center;
    justify-items: center;
    margin: 15px auto;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
`;

// 📌 Overlay genérico para dispositivos móviles y grandes pantallas
const OverlayBase = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: ${theme.overlayBackground};
    backdrop-filter: blur(10px);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;

    div {
        background: white;
        padding: 20px;
        border-radius: 10px;
        text-align: center;
        max-width: 300px;
    }

    p {
        font-size: 18px;
        color: ${theme.textColor};
        margin-bottom: 15px;
    }

    button {
        background: red;
        color: white;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        font-size: 16px;
    }

    button:hover {
        background: darkred;
    }
`;

export const MobileOverlay = styled(OverlayBase)``;
export const LargeScreenOverlay = styled(OverlayBase)``;
