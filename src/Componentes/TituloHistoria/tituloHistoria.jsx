import React from "react";
import { ContainerTituloHistoria } from "./tituloHistoriaStyled";

function TituloHistoria({ titulo = "Nuestra Historia", color = " " }) {
    return (
        <ContainerTituloHistoria color={color} aria-label="Título de la sección historia">
            <h2>{titulo}</h2>
        </ContainerTituloHistoria>
    );
}

export default TituloHistoria;
