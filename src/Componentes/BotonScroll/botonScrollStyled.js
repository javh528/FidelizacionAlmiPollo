import styled from "styled-components";

export const ScrollButton = styled.div`
    position: fixed; /* Fijamos el botón en la pantalla */
    bottom: 30px; /* Distancia desde la parte inferior */
    right: 30px; /* Distancia desde el borde derecho */
    background-color: #c73d0f;
    color: white;
    padding: 10px 15px;
    border-radius: 50px;
    cursor: pointer;
    font-weight: bold; /* Texto en negrita */
    display: ${({ $mostrarBoton }) => ($mostrarBoton ? 'flex' : 'none')}; /* Mostrar solo si es verdadero */
    align-items: center;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); /* Corrección de opacidad */
    transition: background-color 0.3s ease-in-out; /* Transición suave */

    &:hover {
        background-color: #a52a0d; /* Cambio de color al pasar el mouse */
    }
`;
