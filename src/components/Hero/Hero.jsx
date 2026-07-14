import ashley from "../../assets/AshlyXV-Hero.png";
import mariposa from "../../assets/mariposa1.gif";
import flores from "../../assets/floreshero.png";
import "./Hero.css";
import ViewLandscape from "../ViewLandscape/ViewLandscape";

function Hero() {
  return (
    <>
      <section className="hero-container">
        <div className="photo-frame">
          <img src={ashley} alt="foto de Ashley" />
        </div>
        <div className="data-ash">
          <img className="butterfly" src={mariposa} alt="mariposa" />
          <h2>Ashley</h2>
          <h3>MIS XV AÑOS</h3>
          <p>Recuerda ingresar a tu invitación desde el enlace proporcionado</p>
        </div>
        <img
          className="flower1-hero"
          src={flores}
          alt="flores abajo izquierda"
        />
        <img className="flower2-hero" src={flores} alt="flores abajo derecha" />
      </section>
      <ViewLandscape />
    </>
  );
}

export default Hero;
