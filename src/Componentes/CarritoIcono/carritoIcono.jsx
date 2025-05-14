import React, { useContext, useState } from "react";
import { CartContext } from "../Context/CardContext";
import {
    CarritoFlotante,
    IconoCarrito,
    Contador,
    PanelCarrito,
    Producto,
    BotonFinalizar,
    BotonVaciar,
    Overlay,
    MensajeCarritoVacio, // Importar el nuevo componente
} from "./carritoStyled";
import { FaShoppingCart, FaTrashAlt } from "react-icons/fa";

// Constantes globales
const WHATSAPP_PHONE = "3138312412";
const DOMICILIO_MESSAGE = "Con Domicilio";

function CarritoIcono() {
    const { cartItems, clearCart, removeFromCart } = useContext(CartContext);
    const [visible, setVisible] = useState(false);

    // Calcular el total del carrito
    const total = cartItems.reduce((acc, item) => acc + item.precio, 5.0);

    // Verificar si el carrito está vacío
    const isCartEmpty = cartItems.length === 0;

    // Generar el mensaje para WhatsApp
    const generarMensajeWhatsApp = () => {
        const mensajeProductos = cartItems
            .map((item) => `- ${item.nombre}: $${item.precio.toFixed(3)}`)
            .join("\n");
        return `¡Hola! Quiero pedir:\n${mensajeProductos}\n\nTotal: $${total.toFixed(3)}\n${DOMICILIO_MESSAGE}`;
    };

    // Enviar el mensaje a WhatsApp
    const enviarWhatsApp = () => {
        const mensajeCompleto = generarMensajeWhatsApp();
        const url = `https://api.whatsapp.com/send?phone=${WHATSAPP_PHONE}&text=${encodeURIComponent(mensajeCompleto)}`;
        window.open(url, "_blank");
    };

    // Vaciar el carrito y cerrar el panel
    const vaciarCarrito = () => {
        clearCart();
        setVisible(false);
    };

    return (
        <>
            {/* Mostrar el overlay cuando el carrito esté visible */}
            {visible && <Overlay onClick={() => setVisible(false)} />}

            <CarritoFlotante>
                {/* Botón del ícono del carrito */}
                <IconoCarrito onClick={() => setVisible(!visible)}>
                    <FaShoppingCart size={28} />
                    {cartItems.length > 0 && <Contador>{cartItems.length}</Contador>}
                </IconoCarrito>

                {visible && (
                    <PanelCarrito>
                        <h4>Mi Pedido</h4>
                        {isCartEmpty ? (
                            <MensajeCarritoVacio> No hay productos en el carrito.</MensajeCarritoVacio>
                        ) : (
                            <React.Fragment>
                                {cartItems.map((producto, index) => (
                                    <Producto key={index}>
                                        <span>{producto.nombre}</span>
                                        <span>${producto.precio.toFixed(3)}</span>
                                        <FaTrashAlt
                                            onClick={() => removeFromCart(index)}
                                            style={{ cursor: "pointer", color: "red" }}
                                        />
                                    </Producto>
                                ))}
                                <strong>Total: ${total.toFixed(3)}</strong>
                                <BotonFinalizar onClick={enviarWhatsApp}>
                                    Finalizar compra por WhatsApp
                                </BotonFinalizar>
                                <BotonVaciar onClick={vaciarCarrito}>
                                    Vaciar carrito
                                </BotonVaciar>
                            </React.Fragment>
                        )}
                    </PanelCarrito>
                )}
            </CarritoFlotante>
        </>
    );
}

export default CarritoIcono;




