import { FaWhatsapp } from "react-icons/fa";
import florTitle from "../../assets/florTitle.png";
import "./Confirm.css";

function Confirm({ guest }) {
  const sendToWhatsapp = () => {
    const message = `${guest?.name} Confirma asistencia al evento`;

    const phone = "5214761136307";

    const urlWhatsApp = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
    window.open(urlWhatsApp, "_blank");
  };

  return (
    <section className="confirm-container">
      <h2> Asistencia</h2>
      <img className="flor-title" src={florTitle} alt="flor" />
      <p>¡Gracias por acompañarme en este día tan importante!</p>
      <p>Favor de confirmar tu asistencia antes del evento.</p>
      <p>¡Muchas Gracias!</p>
      <div className="pase">
        <p className="user-name">{guest?.name}</p>
        <p className="pase-count">Adultos: {guest?.adults}</p>
        <p className={guest?.kids !== 0 ? "pase-count" : "pase-no-count"}>
          Niños: {guest?.kids}
        </p>
      </div>
      <button className="btn-whatsapp" onClick={sendToWhatsapp}>
        <FaWhatsapp className="whatsapp-icon" /> Confirmar
      </button>
    </section>
  );
}

export default Confirm;
