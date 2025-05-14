import React from "react";
import { ContainerFotoHistoria, ContainerHistoria, ContainerRelatoHistoria } from "./historiaStyle";
import FotoVolcan from "../../../public/img/Volcan.jpg";

function NuestraHistoria({ parrafo = "No hay información disponible en este momento." }) { // 📌 Se define un valor por defecto
    return (
        <ContainerHistoria>
            <ContainerFotoHistoria>
                <img src={FotoVolcan} alt="Vista panorámica del Volcán Galeras en Pasto, Colombia" />
                <figcaption>Pasto, Colombia</figcaption>
            </ContainerFotoHistoria>
            <ContainerRelatoHistoria>
                <p>{parrafo}</p>
            </ContainerRelatoHistoria>
        </ContainerHistoria>
    );
}

export default NuestraHistoria;
