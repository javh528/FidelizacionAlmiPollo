import React, { useState, useEffect } from "react";
import {
    CarruselContainer,
    ImagenCarrusel,
    Controles,
    ContainerPpaCarrusel,
    WhatsAppButton,
} from "./carruselStyled";

function Carrusel() {
    const [promociones, setPromociones] = useState([]);
    const [indice, setIndice] = useState(0);

    // Función para obtener las promociones desde el JSON
    const obtenerPromociones = async () => {
        try {
            const response = await fetch("/Promociones.json");
            const data = await response.json();
            
            // Validación del contenido del JSON
            if (data.Promociones && data.Promociones.length > 0) {
                setPromociones(data.Promociones);
            } else {
                console.error("El archivo JSON no contiene promociones válidas.");
                setPromociones([{ nombre: "No disponible", imagen: "placeholder.png" }]); // Fallback
            }
        } catch (error) {
            console.error("Error al cargar promociones:", error);
            setPromociones([{ nombre: "Error", imagen: "placeholder.png" }]); // Fallback
        }
    };

    useEffect(() => {
        obtenerPromociones();
    }, []); // Se ejecuta solo una vez al montar el componente

    const siguienteImagen = () => {
        if (promociones.length > 0) {
            setIndice((prev) => (prev + 1) % promociones.length);
        }
    };

    const anteriorImagen = () => {
        if (promociones.length > 0) {
            setIndice((prev) => (prev - 1 + promociones.length) % promociones.length);
        }
    };

    const enviarWhatsApp = (nombre) => {
        try {
            const mensaje = `¡Hola! buen día, Quiero pedir la promoción: *${nombre}.*`;
            const url = `https://api.whatsapp.com/send?phone=3138312412&text=${encodeURIComponent(mensaje)}`;
            window.open(url, "_blank");
        } catch (error) {
            console.error("Error al abrir WhatsApp:", error);
        }
    };
    
    

    return (
        <ContainerPpaCarrusel>
            <CarruselContainer>
                {promociones.length > 0 ? (
                    <>
                        <ImagenCarrusel
                            src={promociones[indice].imagen}
                            alt={`Imagen de la promoción ${promociones[indice].nombre}`}
                        />
                        <WhatsAppButton onClick={() => enviarWhatsApp(promociones[indice].nombre)}>
                            Pedirlo aquí
                        </WhatsAppButton>
                        <Controles>
                            <button onClick={anteriorImagen} aria-label="Imagen anterior">
                                ⬅️
                            </button>
                            <button onClick={siguienteImagen} aria-label="Imagen siguiente">
                                ➡️
                            </button>
                        </Controles>
                    </>
                ) : (
                    <p>Cargando promociones...</p>
                )}
            </CarruselContainer>
        </ContainerPpaCarrusel>
    );
}

export default Carrusel;

