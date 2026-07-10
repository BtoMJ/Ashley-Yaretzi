import { useParams } from "react-router-dom";
import Home from "../Home/Home";
import Event from "../Event/Event";
import Places from "../Places/Places";
import Parents from "../Parents/Parents";
import Carrusel from "../Carrusel/Carrusel";
import data from "../../data/data";
import Confirm from "../Confirm/Confirm";
import Outfit from "../Outfit/Outfit";

function Invitation() {
  const { fam } = useParams();

  const guest = data.find((item) => item.url === fam);

  if (!guest) {
    return <h1>Invitación no encontrada</h1>;
  }

  return (
    <>
      <Home />
      <Event />
      <Places />
      <Parents />
      <Carrusel />
      <Outfit />
      <Confirm guest={guest} />
      {/* <h1>Bienvenido {invitado.nombre}</h1>

      <p>
        Adultos:
        {invitado.adultos}
      </p>
      <p>
        Niños:
        {invitado.niños}
      </p> */}
    </>
  );
}

export default Invitation;
