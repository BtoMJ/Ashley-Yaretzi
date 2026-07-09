import "./Parents.css";
import florTitle from "../../assets/florTitle.png";

function Parents() {
  return (
    <section className="parents-container">
      <h2>Nos Acompañan</h2>
      <div className="parents">
        <h3>Mis Padres</h3>
        <img className="flor-title" src={florTitle} alt="flor" />
        <p>Lizbeth Alejandra Torres Murguía</p>
        <p>Victor Eduardo González Pérez</p>
      </div>
      <div className="parents">
        <h3>Mis Padrinos</h3>
        <img className="flor-title" src={florTitle} alt="flor" />
        <p>Gloria Murguía Díaz</p>
        <p>Venancio Torres Castro</p>
      </div>
    </section>
  );
}

export default Parents;
