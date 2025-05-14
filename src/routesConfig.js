import Home from "./Pages/Home/home";
import Formulario from "./Pages/Formulario/formulario";
import Error404 from "./Pages/Error404/error404";

const routes = [
    { path: "/", element: <Home /> },
    { path: "/formulario", element: <Formulario /> },
    { path: "*", element: <Error404 /> },
];

export default routes;