import styled from "styled-components";

// 📌 Variables de tema para colores y estilos reutilizables
const theme = {
    degradado: "linear-gradient(135deg, rgba(227, 95, 7, 0.8) 0%, rgba(239, 227, 227, 0.7) 50%, rgba(247, 100, 2, 0.8) 100%)",
    sombra: "1px 1px 15px 1px rgb(108, 45, 2)",
    verdeWhatsApp: "#25d366",
    verdeWhatsAppHover: "#128c7e",
    botonNavegacionFondo: "rgba(0, 0, 0, 0.5)",
    botonNavegacionHover: "rgba(170, 72, 7, 0.8)"
};

// 📌 Contenedor principal del carrusel con degradado
export const ContainerPpaCarrusel = styled.section`
    width: 90%;
    border-radius: 10px;
    height: auto;
    margin: 10px auto;
    text-align: center;
    box-shadow: ${theme.sombra};
    background: ${theme.degradado};
    padding: 10px; 

    /* Aplicamos borde con degradado correctamente */
    border: 1px solid transparent;
    background-clip: padding-box, border-box;

    @media (max-width: 768px) {
        width: 90%;
        margin: 10px auto;
    }
`;

// 📌 Contenedor del carrusel con posición relativa y diseño flexible
export const CarruselContainer = styled.div`
    width: 100%;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    overflow: hidden;
    margin: 30px auto;
`;

// 📌 Imagen del carrusel con bordes y sombra sutil
export const ImagenCarrusel = styled.img`
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
`;

// 📌 Botones de navegación con mejor estructura
export const Controles = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 500px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    
    button {
        background: ${theme.botonNavegacionFondo};
        color: white;
        border: none;
        padding: 10px 15px;
        font-size: 20px;
        cursor: pointer;
        border-radius: 20%;
        transition: background 0.3s ease-in-out;
    }

    button:hover {
        background: ${theme.botonNavegacionHover};
    }
`;

// 📌 Estilo para el botón "Pedirlo aquí" que redirige a WhatsApp
export const WhatsAppButton = styled.button`
    background-color: ${theme.verdeWhatsApp};
    color: white;
    border: none;
    padding: 12px 20px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    margin-top: 15px;
    transition: background-color 0.3s ease-in-out;

    &:hover {
        background-color: ${theme.verdeWhatsAppHover};
    }
`;
