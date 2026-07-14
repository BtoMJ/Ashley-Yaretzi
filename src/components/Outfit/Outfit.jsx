import dress from "../../assets/vestimenta.png";
import florTitle from "../../assets/florTitle.png";
import "./Outfit.css";

function Outfit() {
  return (
    <section className="outfit-container">
      <h2> Código de</h2>
      <h3> Vestimenta</h3>
      <img className="flor-title" src={florTitle} alt="flor" />
      <img className="dress-code-img" src={dress} alt="imagen vestimenta" />
      <h4>Casual Elegante </h4>
      <p>Evita tonos rosa y lila</p>
    </section>
  );
}

export default Outfit;
