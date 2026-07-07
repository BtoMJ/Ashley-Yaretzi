import Countdown from "../Countdown/Countdown";
import bg2 from "../../assets/bg2.png";
import "./Event.css";

function Event() {
  return (
    <section className="event-container">
      <Countdown />
      <h3 className="event-text">
        Los momentos más esperados se sueñan y se construyen paso a paso. La
        noche de mis sueños necesita de ti para ser perfecta.
      </h3>
      <div className="event-image">
        <img src={bg2} alt="Background" />
      </div>
    </section>
  );
}

export default Event;
