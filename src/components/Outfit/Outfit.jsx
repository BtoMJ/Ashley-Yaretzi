import dress from "../../assets/vestimenta.png";
import "./Outfit.css";

function Outfit() {
  return (
    <section className="outfit-container">
      {/* <h2>Código de Vestimenta</h2> */}
      <h2> Vestimenta</h2>
      <img className="dress-code-img" src={dress} alt="imagen vestimenta" />
      <h3>Casual Elegante </h3>
      <p>Evita tonos rosa y lila</p>
    </section>
  );
}

export default Outfit;
