import React, { useState } from "react";
import { 
    ContainerFooter, 
    FooterContacto, 
    IconoWrapper, 
    IconoRed, 
    ContainerfirmaHome, 
    GithubIcon, 
    ModalOverlay, 
    Modal 
} from "./footer"; // Importa los estilos

function Footer() {
    const [mostrarModal, setMostrarModal] = useState(false);

    const handleInstagramClick = (e) => {
        e.preventDefault();
        setMostrarModal(true); // Muestra el modal
        setTimeout(() => {
            setMostrarModal(false); // Cierra el modal automáticamente después de 2 segundos
        }, 3000); // Tiempo en milisegundos
    };

    return (
        <>
            <ContainerFooter>
                <FooterContacto>
                    {[
                        {
                            href: "https://www.facebook.com/AlmipolloAsaderoyBroaster",
                            src: "/iconos/facebook.png",
                            alt: "Facebook - Almipollo Asadero y Broaster",
                            label: "Facebook",
                        },
                        {
                            href: "#",
                            src: "/iconos/instagram.png",
                            alt: "Instagram - Página en construcción",
                            label: "Instagram",
                            onClick: handleInstagramClick,
                        },
                        {
                            href: "https://api.whatsapp.com/send?phone=3138312412&Text=Hola,%20quiero%20ver%20el%20Menu,%20vengo%20de%20la%20pagina",
                            src: "/iconos/whatssapp.png",
                            alt: "WhatsApp - Contáctanos",
                            label: "WhatsApp",
                        },
                        {
                            href: "mailto:asaderoybroasteralmipollo@gmail.com",
                            src: "/iconos/correo.png",
                            alt: "Correo Electrónico",
                            label: "Correo",
                        },
                    ].map(({ href, src, alt, label, onClick }, index) => (
                        <figure key={index}>
                            <a href={href} target="_blank" rel="noopener noreferrer" onClick={onClick}>
                                <IconoWrapper>
                                    <IconoRed src={src} alt={alt} />
                                </IconoWrapper>
                            </a>
                            <figcaption>{label}</figcaption>
                        </figure>
                    ))}
                </FooterContacto>
                <ContainerfirmaHome>
                    <GithubIcon />
                    <p>javh528</p>
                    <p>Elaborado por Julián Andrés Vidal</p>
                </ContainerfirmaHome>
            </ContainerFooter>

            {/* Modal */}
            {mostrarModal && (
                <ModalOverlay>
                    <Modal>
                        <p style={{ fontSize: "15px", color: "black", fontWeight: "none" }}>
                            Nuestra página en Instagram está en construcción. ¡Pronto estaremos en línea!
                        </p>
                    </Modal>
                </ModalOverlay>
            )}
        </>
    );
}

export default Footer;

