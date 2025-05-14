import styled from "styled-components";

// 📌 Variables reutilizables para colores y sombras
const theme = {
    primaryColor: "#c73d0f",
    hoverColor: "#a52a0d",
    textColor: "#555",
    shadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
    verdeWhatsApp: "#25d366",
};

// 📌 Contenedor principal de la tarjeta
export const CardContainer = styled.div`
    width: 250px;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    text-align: center;
    padding: 15px;
    background: #fff;
    box-shadow: ${theme.shadow};
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.05);
    }
`;

// 📌 Imagen del producto
export const ProductImage = styled.img`
    width: 100%;
    height: 200px;
    object-fit: cover; /* Mejora ajuste de imágenes */
    border-radius: 8px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

// 📌 Contenedor de la información del producto
export const ProductInfo = styled.div`
    padding: 10px 0;

    h3 {
        font-size: 25px;
        margin-bottom: 5px;
        color: ${theme.primaryColor};
    }

    p {
        font-size: 17px;
        color: ${theme.textColor};    
    }

    @media (max-width: 768px) {
        h3 {
            font-size: 26px;
        }   
        p {
            font-size: 17px;
        }  
    }

    @media (max-width: 480px) {
        h3 {
            font-size: 2rem;
        }
        p {
            font-size: 1.4rem;
        }
    }
`;

// 📌 Botón para añadir al carrito
export const AddButton = styled.button`
    margin-top: 10px;
    background: ${theme.verdeWhatsApp};
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 100%;
    transition: background 0.3s ease-in-out;

    &:hover {
        background: ${theme.hoverColor};
    }
`;
