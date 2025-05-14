import React, { useState } from "react";
import { ContainerHeader, ContainerHeaderNav, Logo, MenuButton } from "./header";
import { Button } from "@mui/joy";
import { useNavigate } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logoNav from "/img/logo.png";

function Header({ onScrollToInformacion, onScrollToMenu, onScrollToCombos }) { 
    const navegar = useNavigate(); // Hook para la navegación
    const [menuOpen, setMenuOpen] = useState(false); // Estado del menú hamburguesa

    const toggleMenu = () => setMenuOpen(!menuOpen); // Función para abrir/cerrar el menú

    // 📌 Opciones de navegación en un array
    const menuItems = [
        { label: "Home", action: () => navegar("/") },
        { label: "Menu", action: onScrollToMenu },
        { label: "Combos", action: onScrollToCombos },
        { label: "Registrarse", action: () => navegar("/error404") },
        { label: "Contacto", action: onScrollToInformacion },
    ];

    return (
        <ContainerHeader>
            {/* 📌 Logo del negocio */}
            <Logo src={logoNav} alt="Logo de ALMI POLLO" />

            {/* 📌 Botón menú hamburguesa */}
            <MenuButton onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </MenuButton>

            {/* 📌 Menú de navegación */}
            <ContainerHeaderNav $menuOpen={menuOpen}>
                {menuItems.map(({ label, action }, index) => (
                    <Button
                        key={index}
                        variant="text"
                        color="primary"
                        size="lg"
                        onClick={() => {
                            action();           // Ejecuta la acción (scroll o navegar)
                            setMenuOpen(false); // Cierra el menú automáticamente
                        }}
                    >
                        {label}
                    </Button>
                ))}
            </ContainerHeaderNav>
        </ContainerHeader>
    );
}

export default Header;
