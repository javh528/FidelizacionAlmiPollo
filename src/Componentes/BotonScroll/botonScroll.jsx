import React, { useEffect, useState } from "react";
import { FaArrowUp } from 'react-icons/fa';
import { ScrollButton } from "./botonScrollStyled";

function BotonScroll() {
    const [mostrarBoton, setMostrarBoton] = useState(false);

    // Función para manejar el evento de scroll
    const manejarScroll = () => {
        setMostrarBoton(window.scrollY > 300); // Muestra el botón si el scroll supera 300px
    };

    useEffect(() => {
        window.addEventListener('scroll', manejarScroll);
        return () => window.removeEventListener('scroll', manejarScroll);
    }, []);

    const scrollArriba = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <ScrollButton onClick={scrollArriba} $mostrarBoton={mostrarBoton}>
            <FaArrowUp />
            arriba
        </ScrollButton>
    );
}

export default BotonScroll;
