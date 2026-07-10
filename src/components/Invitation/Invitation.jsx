import { useParams } from "react-router-dom";
import invitados from "../../data/data";

function Invitation() {
  const { token } = useParams();

  const invitado = invitados.find((item) => item.token === token);

  if (!invitado) {
    return <h1>Invitación no encontrada</h1>;
  }

  return (
    <>
      <h1>Bienvenido {invitado.nombre}</h1>

      <p>
        Lugares reservados:
        {invitado.adultos}
      </p>
    </>
  );
}

export default Invitation;
