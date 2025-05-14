import React, { createContext, useState, useContext } from "react";

// ✅ Creamos el contexto
export const CartContext = createContext();

// ✅ Hook personalizado para usar el contexto fácilmente
export const useCart = () => useContext(CartContext);

// ✅ Proveedor del contexto
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState([]);

    // ➕ Agrega un producto al carrito
    const addToCart = (item) => {
        setCartItems((prev) => [...prev, item]);
    };

    // 🗑️ Elimina un producto del carrito según su índice
    const removeFromCart = (index) => {
        setCartItems((prevItems) => prevItems.filter((_, i) => i !== index));
    };

    // ❌ Vacía completamente el carrito
    const clearCart = () => {
        setCartItems([]);
    };

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
            {children}
        </CartContext.Provider>
    );
};
