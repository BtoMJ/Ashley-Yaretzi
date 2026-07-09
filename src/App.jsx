import { useEffect, useState } from "react";
import Home from "./components/Home/Home";
import Event from "./components/Event/Event";
import Places from "./components/Places/Places";
import Parents from "./components/Parents/Parents";
import Carrusel from "./components/Carrusel/Carrusel";
import Music from "./components/Music/Music";
import Confirm from "./components/Confirm/Confirm";
import data from "./data/data";
import "./App.css";

function App() {
  const urlCompleta = window.location.href;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userConfirm = () => {
      const user = data.find((person) => person.url === urlCompleta);
      setUser(user);
    };
    userConfirm();
  }, [urlCompleta]);
  // useEffect(() => {
  //   const userConfirm = async () => {
  //     try {
  //       const user = await data.find((person) => person.url === urlCompleta);
  //       setUser(user);
  //     } catch (error) {
  //       console.error("Error al buscar el usuario:", error);
  //     }
  //   };
  //   userConfirm();
  // }, [urlCompleta]);

  console.log("User data:", user); // Log the user data to the console
  return (
    <div className="container">
      <div className="info">
        <Home />
        <Event />
        <Places />
        <Parents />
        <Carrusel />
        <Confirm user={user} />
        <Music />
      </div>
    </div>
  );
}

export default App;
