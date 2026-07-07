import florTitle from "../../assets/florTitle.png";
import "./Places.css";

function Places() {
  return (
    <section className="places-container">
      <div className="place">
        <h2>Misa</h2>
        <img className="flor-title" src={florTitle} alt="flor" />
        <h3>Templo de Los Dominicos</h3>
        <h4>Calle Domingo Velázquez, El Paraiso </h4>
        <p>3:00 PM</p>
        <a
          href="https://maps.google.com/?q=Templo+de+Los+Dominicos"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver en Google Maps
        </a>
      </div>
      <div className="place">
        <h2>Recepción</h2>
        <img className="flor-title" src={florTitle} alt="flor" />
        <h3>Salón de Eventos Lupe Díaz</h3>
        <h4>La Escondida, San Francisco del Rincón </h4>
        <p>4:30 PM</p>
        <a
          href="https://maps.google.com/?q=Salón+de+Eventos+Lupe+Díaz"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ver en Google Maps
        </a>
      </div>
    </section>
  );
}

export default Places;
