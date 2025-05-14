// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDosIgqO7iXy_oAXIg_ogdxbequl4fj5Io",
  authDomain: "clientesalmipollo.firebaseapp.com",
  projectId: "clientesalmipollo",
  storageBucket: "clientesalmipollo.firebasestorage.app",
  messagingSenderId: "351328598574",
  appId: "1:351328598574:web:222d25ea3193ce8ae9bdbf",
  measurementId: "G-YV6H2LN74R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app)

export {db}
