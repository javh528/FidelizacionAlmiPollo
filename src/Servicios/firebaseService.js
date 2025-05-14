// src/Servicios/firebaseService.js
import { collection, addDoc } from "firebase/firestore";
import { db } from "/firebase-config";  // Asegúrate de importar db correctamente

export const agregarCliente = async (nombre, celular, preferencia) => {
  try {
    // Validar que los datos no estén vacíos
    if (!nombre || !celular || !preferencia) {
      alert('Por favor, completa todos los campos');
      return;
    }
    
    // Agregar cliente a la colección "clientes" en Firestore
    await addDoc(collection(db, "clientes"), {
      nombre,
      celular,
      preferencia
    });

    alert('Cliente registrado exitosamente!');
  } catch (error) {
    console.error("Error al agregar cliente:", error);
    alert("Hubo un error al registrar el cliente.");
  }
  console.log(addDoc)
};
