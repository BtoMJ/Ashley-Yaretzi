import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import data from "../../data/data";
import "./Confirm.css";

function Confirm() {
  const urlCompleta = window.location.href;
  const [user, setUser] = useState(null);

  useEffect(() => {
    const userConfirm = async () => {
      try {
        const user = await data.find((person) => person.url === urlCompleta);
        setUser(user);
      } catch (error) {
        console.error("Error al buscar el usuario:", error);
      }
    };
    userConfirm();
  }, [urlCompleta]);

  return (
    <section className="confirm-container">
      <h2> Asistencia</h2>
      <p>¡Gracias por acompañarme en este día tan importante!</p>
      <p>Favor de confirmar tu asistencia antes del evento.</p>
      <p>¡Muchas Gracias!</p>
      <div className="pase">
        <p className="user-name">{user?.nombre}</p>
        <p className="pase-count">Adultos: {user?.adultos}</p>
        <p className={user?.niños !== 0 ? "pase-count" : "pase-no-count"}>
          Niños: {user?.niños}
        </p>
      </div>
      <a href="#" target="_blank">
        <FaWhatsapp className="whatsapp-icon" /> Confirmar
      </a>
    </section>
  );
}

export default Confirm;
