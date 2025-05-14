import React, { useState, useEffect } from "react"; // Importa React y dos hooks: useState y useEffect
import {
    MenuContainer,
    Categories,
    CategoryButton,
    MenuItems,
    MobileOverlay,
    LargeScreenOverlay,
} from "./menuStyles"; // Importa componentes estilizados desde un archivo de estilos

import ECard from "../Ecard/ecard"; // Importa el componente de tarjeta de producto

const MENSAJE_FIN_DE_SEMANA = "Venta únicamente sábados y domingos"; // Mensaje mostrado si no es fin de semana

function Menu() {
    // Estados del componente
    const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Pollo Broaster"); // Categoría activa
    const [menuData, setMenuData] = useState({}); // Datos del menú (se cargan desde JSON)
    const [mostrarMensaje, setMostrarMensaje] = useState(false); // Controla si se muestra el mensaje de disponibilidad
    const [esMovil, setEsMovil] = useState(window.matchMedia("(max-width: 768px)").matches); // Detecta si la pantalla es móvil
    
    const hoy = new Date(); // Fecha actual
    const esFinDeSemana = hoy.getDay() === 0 || hoy.getDay() === 6; // Verifica si es sábado (6) o domingo (0)

    // Hook para manejar cambios en el tamaño de la pantalla
    useEffect(() => {
        const manejarResize = () => setEsMovil(window.matchMedia("(max-width: 768px)").matches); // Actualiza estado si cambia el tamaño

        window.addEventListener("resize", manejarResize); // Escucha evento de redimensionamiento
        return () => window.removeEventListener("resize", manejarResize); // Limpia el listener al desmontar el componente
    }, []);

    // Hook para cargar los datos del menú desde un archivo JSON
    useEffect(() => {
        const cargarMenu = async () => {
            try {
                const response = await fetch("/menu.json"); // Realiza petición al archivo local
                const data = await response.json(); // Convierte la respuesta a JSON
                setMenuData(data); // Guarda los datos en el estado
            } catch (error) {
                console.error("Error al cargar el menú:", error); // Muestra error en consola si falla
            }
        };
        cargarMenu(); // Llama la función al montar el componente
    }, []);

    // Función para cambiar de categoría y controlar el mensaje del "Pollo Asado"
    const manejarClickCategoria = (categoria) => {
        setCategoriaSeleccionada(categoria); // Cambia la categoría activa
        if (categoria === "Pollo Asado" && !esFinDeSemana) {
            setMostrarMensaje(!mostrarMensaje); // Muestra mensaje si es "Pollo Asado" y no es fin de semana
        }
    };

    // Muestra mensaje de carga si aún no se han cargado los datos del menú
    if (Object.keys(menuData).length === 0) {
        return <div>Cargando el menú...</div>;
    }

    return (
        <MenuContainer>
            {/* Renderiza botones con las categorías del menú */}
            <Categories>
                {Object.keys(menuData).map((categoria) => (
                    <CategoryButton
                        key={categoria}
                        $active={categoria === categoriaSeleccionada} // Aplica estilo activo si es la seleccionada
                        onClick={() => manejarClickCategoria(categoria)} // Maneja el clic
                    >
                        {categoria}
                    </CategoryButton>
                ))}
            </Categories>

            {/* Renderiza los productos de la categoría seleccionada */}
            <MenuItems>
                {menuData[categoriaSeleccionada].map((producto) => (
                    <ECard key={producto.id} {...producto} /> // Pasa todos los datos del producto a la tarjeta
                ))}
            </MenuItems>

            {/* Muestra un mensaje superpuesto si es móvil y se activa el mensaje */}
            {esMovil && mostrarMensaje && (
                <MobileOverlay onClick={() => setMostrarMensaje(false)}>
                    <div>
                        <p>{MENSAJE_FIN_DE_SEMANA}</p>
                        <button onClick={() => setMostrarMensaje(false)}>Cerrar</button>
                    </div>
                </MobileOverlay>
            )}

            {/* Muestra el mismo mensaje pero para pantallas grandes */}
            {!esMovil && mostrarMensaje && (
                <LargeScreenOverlay onClick={() => setMostrarMensaje(false)}>
                    <div>
                        <p>{MENSAJE_FIN_DE_SEMANA}</p>
                        <button onClick={() => setMostrarMensaje(false)}>Cerrar</button>
                    </div>
                </LargeScreenOverlay>
            )}
        </MenuContainer>
    );
}

export default Menu; // Exporta el componente para ser usado en otros archivos

