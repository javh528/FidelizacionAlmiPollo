import React from "react";
import { useCart } from "../../Context/CartContext";
import { FinalizarButton } from "./carritoStyled";

// Constantes globales
const WHATSAPP_PHONE = "3138312412";

function Carrito() {
    const { cartItems } = useCart();

    // Función para generar el mensaje de WhatsApp
    const generarMensajeWhatsApp = () => {
        let mensaje = "¡Hola! Quiero hacer el siguiente pedido:\n\n";
        let total = 0;

        cartItems.forEach((item, index) => {
            mensaje += `${index + 1}. ${item.nombre} - $${item.precio.toFixed(3)}\n`;
            total += item.precio;
        });

        mensaje += `\n🧾 Total: $${total.toFixed(3)}`;
        return mensaje;
    };

    // Función para enviar el pedido por WhatsApp
    const enviarPedidoPorWhatsApp = () => {
        if (cartItems.length === 0) {
            alert("El carrito está vacío.");
            return;
        }

        const mensaje = generarMensajeWhatsApp();
        const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(mensaje)}`;
        window.open(url, "_blank");
    };

    return (
        <div>
            {cartItems.length > 0 ? (
                <FinalizarButton
                    onClick={enviarPedidoPorWhatsApp}
                    aria-label="Finalizar pedido por WhatsApp"
                >
                    Finalizar Pedido por WhatsApp
                </FinalizarButton>
            ) : (
                <p style={{ color: "gray", textAlign: "center", marginTop: "10px" }}>
                    Tu carrito está vacío.
                </p>
            )}
        </div>
    );
}

export default Carrito;
