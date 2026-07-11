import dress from "../../assets/vestimenta.png";
import "./Outfit.css";

function Outfit() {
  return (
    <section className="outfit-container">
      <h2> Código de</h2>
      <h3> Vestimenta</h3>
      <img className="dress-code-img" src={dress} alt="imagen vestimenta" />
      <h4>Casual Elegante </h4>
      <p>Evita tonos rosa y lila</p>
    </section>
  );
}

export default Outfit;
