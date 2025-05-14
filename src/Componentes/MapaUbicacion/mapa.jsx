import React from "react";
import { ContainerMapa } from "./mapaStyled";

function MapaUbicacion() {
    return (
        <ContainerMapa>
            <iframe
                title="Mapa de ubicación"
                width="100%" 
                height="400px"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3986.1813529529086!2d-76.59914962545326!3d2.4466044975323062!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3003fbf10c296b%3A0xbfa4027a89e090ac!2sALMI-POLLO%20Asadero%20y%20Broaster!5e0!3m2!1ses!2sco!4v1740895098996!5m2!1ses!2sco"
                allowFullScreen
                loading="lazy"
                aria-label="Mapa de ubicación de ALMI-POLLO Asadero y Broaster"
            ></iframe>
        </ContainerMapa>
    );
}

export default MapaUbicacion;


