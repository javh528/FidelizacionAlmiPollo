import React from "react";
import { ContainerDatos, ContainerInformacion, ContainerMaps, InfoItem } from "./informacionStylesd";
import { FaBuilding, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";
import MapaUbicacion from "../MapaUbicacion/mapa";

function Informacion() {
    // 📌 Datos de contacto estructurados en un array
    const datos = [
        { icono: <FaMapMarkerAlt />, texto: "Popayán - Colombia" },
        { icono: <FaBuilding />, texto: "Vereda Pomona Parte Alta CS 24" },
        { icono: <FaPhoneAlt />, texto: "313-8312412" },
        { icono: <FaEnvelope />, texto: "asaderoybroasteralmipollo@gmail.com" }
    ];

    return (
        <ContainerInformacion>
            <ContainerDatos>
                {datos.map(({ icono, texto }, index) => (
                    <InfoItem key={index}>
                        {icono}
                        <p>{texto}</p>
                    </InfoItem>
                ))}
            </ContainerDatos>
            <ContainerMaps>
                <MapaUbicacion />
            </ContainerMaps>
        </ContainerInformacion>
    );
}

export default Informacion;
