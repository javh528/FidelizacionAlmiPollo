import React from "react";
import { ContainerTituloAsadero } from "./titulo";
import logo from "/img/logo.png";

function TituloAsadero({ titulo = "Bienvenido a Almi Pollo", parrafo = "Disfruta de los mejores sabores de nuestra cocina." }) {
    return (
        <ContainerTituloAsadero>
            <img src={logo} alt="Logo de Almi Pollo - Asadero y Broaster" />
            <h3>{titulo}</h3>
            <p>{parrafo}</p>
        </ContainerTituloAsadero>
    );
}

export default TituloAsadero;
