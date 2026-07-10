// import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Home from "./components/Home/Home";
// import Event from "./components/Event/Event";
// import Places from "./components/Places/Places";
// import Parents from "./components/Parents/Parents";
// import Carrusel from "./components/Carrusel/Carrusel";
// import Music from "./components/Music/Music";
// import Confirm from "./components/Confirm/Confirm";
import Invitation from "./components/Invitation/Invitation";
// import data from "./data/data";
import "./App.css";

function App() {
  // const urlCompleta = window.location.href;
  // const urlCompleta = useLocation();
  // const [user, setUser] = useState(null);

  // useEffect(() => {
  //   console.log("Ruta actual:", urlCompleta.pathname);
  //   console.log("Parámetros de búsqueda:", urlCompleta.search);
  // }, [urlCompleta]);

  // useEffect(() => {
  //   const userConfirm = async () => {
  //     try {
  //       const user = await data.find(
  //         (person) => person.url === urlCompleta.pathname,
  //       );
  //       setUser(user);
  //     } catch (error) {
  //       console.error("Error al buscar el usuario:", error);
  //     }
  //   };
  //   userConfirm();
  // }, [urlCompleta]);

  // console.log("User data:", user); // Log the user data to the console
  // console.log("URL:", urlCompleta); // Log the user data to the console

  // const urlCompleta = useLocation();
  // console.log(urlCompleta);

  return (
    <BrowserRouter>
      <div className="container">
        <div className="info">
          <Routes>
            {/* Página principal */}
            <Route path="/" element={<Home />} />

            {/* Ruta dinámica para TODOS los invitados */}
            <Route path="/:token" element={<Invitation />} />

            {/* Página no encontrada */}
            {/* <Route path="*" element={<NotFound />} /> */}
          </Routes>
          {/* <Home />
          <Event />
          <Places />
          <Parents />
          <Carrusel />
          <Confirm />
          <Music /> */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
