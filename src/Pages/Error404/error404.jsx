import React, { useEffect } from "react";
import GlobalStylesError404 from "../../Styles/GlobalStylesError404";
import { ContainerError404 } from "./errorStyles404.js";
import { useNavigate } from "react-router-dom";

function Error404() {
    const navigate = useNavigate();

    // 📌 Función para manejar la redirección
    useEffect(() => {
        const handleRedirect = setTimeout(() => {
            navigate("/");
        }, 3000); // 3000ms = 3 segundos

        return () => clearTimeout(handleRedirect);
    }, [navigate]);

    return (
        <>
            <GlobalStylesError404 />
            <ContainerError404 $bgImage="/error4041.jpg">
                <h1>Pronto podras registrarte y obtener muchos beneficios</h1>
            </ContainerError404>
        </>
    );
}

export default Error404;
