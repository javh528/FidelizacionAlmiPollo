import React from "react";
import { BannerSection, ContenedorMaps, ContenedorQR } from "./banner"; // asegúrate que este existe
import FotoBanner from "/img/Portada.png"; 
import TituloAsadero from "../Titulo/titulo.jsx";

// Este componente se llama Banner
function Banner() {
    return (
        <BannerSection>
            <ContenedorQR>
                <TituloAsadero titulo="ASADERO Y BROASTER" parrafo="Una experiencia de sabor" />
            </ContenedorQR>
            <ContenedorMaps>
                <img src={FotoBanner} alt="Foto Banner" />
            </ContenedorMaps>
        </BannerSection>
    );
}

export default Banner;
