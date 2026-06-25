import flores1 from "../../assets/flores1.png";
import flores2 from "../../assets/flores2.png";
import mariposa from "../../assets/mariposa1.gif";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <img className="flower2" src={flores2} alt="flores arriba" />
      <div className="name">
        <img className="butterfly" src={mariposa} alt="mariposa" />
        <h1>Ashley</h1>
        <h4>MIS XV AÑOS</h4>
      </div>
      <img className="flower1" src={flores1} alt="flores abajo" />
      <div className="date-event">
        <div className="square">sábado</div>
        <div className="day-event">15</div>
        <div className="square">agosto</div>
      </div>
      <p className="text-1">
        Estás invitado a celebrar conmigo mis 15 años. Será una noche mágica e
        inolvidable, llena de música, baile y diversión
      </p>
    </div>
  );
}

export default Home;
