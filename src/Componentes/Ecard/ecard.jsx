import React from "react";
import { motion } from "framer-motion";
import { CardContainer, ProductImage, ProductInfo, AddButton } from "./ecardstyles";
import { useCart } from "../Context/CardContext"; // 👈 usamos el hook personalizado

function ECard({ nombre, descripcion, precio, imagen }) {
  const { addToCart } = useCart(); // 👈 accedemos a la función para agregar al carrito

  const handleAddToCart = () => {
    const producto = { nombre, descripcion, precio, imagen };
    addToCart(producto); // 👈 lo agregamos al estado global
  };

  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CardContainer>
        <ProductImage src={imagen} alt={`Imagen de ${nombre}`} />
        <ProductInfo>
          <h3>{nombre}</h3>
          <p>{descripcion || "Descripción no disponible"}</p>
          <p><strong>${precio.toFixed(3)}</strong></p>
          <AddButton onClick={handleAddToCart}>Agregar al carrito</AddButton>
        </ProductInfo>
      </CardContainer>
    </motion.div>
  );
}

export default ECard;


