import { createGlobalStyle } from "styled-components";


// 📌 Variables reutilizables para colores y fuentes
const theme = {
    gradientBackground: "radial-gradient(circle, rgb(253, 102, 2) 10%, rgb(34, 6, 1) 90%)",
    primaryColor: "#9c2001",
    secondaryColor: "#f78233",
    buttonHoverGradient: "linear-gradient(175deg, #f78233 20%, rgb(188, 43, 6) 80%)",
    textColor: "white",
    fontBody: '"Lora", serif',
    fontTitle: '"Cinzel", serif',
};

const GlobalStylesError404 = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: inherit;
    }

    html {
        box-sizing: border-box;
    }

    body {
        min-height: 100%;
        margin: 0;
        padding: 0;
        overflow-x: hidden;
        background: ${theme.gradientBackground};
        font-family: ${theme.fontBody};
        color: ${theme.textColor};
    }

    #root {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
    }

    /* 📌 Estilos Globales para Botones */
    button {
        font-family: ${theme.fontBody};
        background-color: transparent;
        color: ${theme.primaryColor};
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
        cursor: pointer;
        transition: all 0.3s ease-in-out;

        &:hover {
            background: ${theme.buttonHoverGradient};
            color: rgb(243, 241, 240);
        }

        &:focus {
            outline: 2px solid ${theme.secondaryColor}; /* Mejora accesibilidad */
        }
    }

    main {
        flex: 1;
    }

    h3 {
        font-family: ${theme.fontTitle};
        font-optical-sizing: auto;
        font-style: normal;
    }
`;

export default GlobalStylesError404;
