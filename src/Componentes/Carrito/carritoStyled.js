import styled from "styled-components";

// Colores reutilizables
const colors = {
    whatsapp: "#25D366",
    whatsappHover: "#1ebe5d",
    white: "#ffffff",
};

// Botón para finalizar el pedido
export const FinalizarButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    padding: 14px 18px;
    background-color: ${colors.whatsapp}; /* Color oficial de WhatsApp */
    color: ${colors.white};
    border: none;
    border-radius: 50px;
    font-size: 1rem;
    cursor: pointer;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
    z-index: 1000;
    transition: background-color 0.3s ease;

    &:hover {
        background-color: ${colors.whatsappHover};
    }

    &:focus {
        outline: 2px solid ${colors.whatsappHover};
        outline-offset: 2px;
    }

    @media (max-width: 768px) {
        font-size: 0.9rem;
        padding: 12px 16px;
    }
`;
