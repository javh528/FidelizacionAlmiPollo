import React, { useRef } from "react";
import GlobalStyles from "../../Styles/GlobalStyles";
import Header from "../../Componentes/Header/header.jsx";
import Banner from "../../Componentes/Banner/banner.jsx";
import Footer from "../../Componentes/Footer/footer.jsx";
import Menu from "../../Componentes/Menu/menu.jsx";
import NuestraHistoria from "../../Componentes/Historia/historia.jsx";
import TituloHistoria from "../../Componentes/TituloHistoria/tituloHistoria.jsx";
import Informacion from "../../Componentes/Informacion/informacion.jsx";
import Carrusel from "../../Componentes/Carrusel/carrusel.jsx";
import BotonScroll from "../../Componentes/BotonScroll/botonScroll.jsx";
import { CartProvider } from "../../Componentes/Context/CardContext.jsx";
import CarritoIcono from "../../Componentes/CarritoIcono/carritoIcono.jsx";



function Home() {
    // 📌 Referencias para las secciones
    const refs = {
        informacion: useRef(null),
        menu: useRef(null),
        home: useRef(null),
        combos: useRef(null),
    };

    // 📌 Función genérica para hacer scroll a cualquier sección
    const handleScrollToSection = (section) => {
        if (refs[section]?.current) {
            refs[section].current.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });
        }
    };

    return (
        <>
            <CarritoIcono />
            <GlobalStyles />
            <Header
                onScrollToInformacion={() => handleScrollToSection("informacion")}
                onScrollToMenu={() => handleScrollToSection("menu")}
                onScrollToCombos={() => handleScrollToSection("combos")}
            />
            <Banner />
            
            <TituloHistoria titulo="Nuestra Historia" />
            <NuestraHistoria
                parrafo="El exquisito sabor de nuestro pollo asado tiene sus raíces en el sur de Colombia, 
                específicamente en la región de Nariño. Fue allí, en el corazón de un pequeño pueblo agrícola, 
                donde un trabajador campesino, lleno de ingenio y creatividad, 
                combinó ingredientes locales y dio vida a una receta única y deliciosa. Inspirados por esta tradición, 
                decidimos llevar este sabroso pollo asado a la ciudad de Popayán en septiembre de 2022.
                Desde entonces, nuestro emprendimiento se ha basado en ofrecer un sabor inigualable, 
                un excelente servicio y una atención integral, buscando siempre que cada cliente disfrute de una experiencia
                memorable con nosotros."
            />
            <TituloHistoria titulo="Conoce Nuestro Menú" />
            <div ref={refs.menu}>
                <Menu />
            </div>
            <TituloHistoria titulo="Super Combos" />
            <div ref={refs.combos}>
                <Carrusel />
            </div>
            <TituloHistoria titulo="Contáctanos" />
            <div ref={refs.informacion}>
                <Informacion />
            </div>
            <Footer />
            <BotonScroll />
            </>
    );
}

export default Home;
