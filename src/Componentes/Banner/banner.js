import styled from "styled-components";

const theme = {
    background: "rgba(241, 233, 233, 0.2)",
    borderColor: "rgba(239, 236, 235, 0.28)",
    blur: "15px",
    mobileWidth: "768px",
};

export const BannerSection = styled.section`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
    width: 80%;
    height: auto;
    margin: 55px auto;
    background: ${theme.background};
    backdrop-filter: blur(${theme.blur});
    -webkit-backdrop-filter: blur(${theme.blur});
    border-radius: 20px; 

    @media (max-width: ${theme.mobileWidth}) {
        width: 100%;
    }
`;

export const ContenedorQR = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;
    
    img {
        height: 300px;
        max-height: 100%;
        object-fit: contain;
        margin: 0;
        alt: "Código QR";

        @media (max-width: ${theme.mobileWidth}) {
            display: none;
        }
    }
`;

export const ContenedorMaps = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: auto;

    img {
        width: 100%;
        height: auto;
        border-bottom: 1px solid ${theme.borderColor};
        alt: "Mapa de ubicación";

        @media (max-width: ${theme.mobileWidth}) {
            border-bottom: none;
            width: 90%;
        }
    }
`;
