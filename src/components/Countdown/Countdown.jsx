import { useState, useEffect } from "react";
import "./Countdown.css";

function Countdown() {
  const targetDate = new Date("2026-08-15T15:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({});
  const [isOver, setIsOver] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        clearInterval(interval);
        setIsOver(true);
      } else {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((distance / (1000 * 60)) % 60),
          seconds: Math.floor((distance / 1000) % 60),
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  if (isOver) {
    return (
      <div
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontFamily: "serif",
          color: "#d63384",
          marginTop: "2rem",
        }}
      >
        ¡Llegó el día de mis XV años!
      </div>
    );
  }

  return (
    <div className="countdown-container">
      <div className="number-container">
        <div className="number-bg">
          <div className="glass">
            <p className="number">{timeLeft.days}</p>
          </div>
        </div>
        <div className="title">
          <p>Días</p>
        </div>
      </div>
      <div className="number-container">
        <div className="number-bg">
          <div className="glass">
            <p className="number">{timeLeft.hours}</p>
          </div>
        </div>
        <div className="title">
          <p>Hrs</p>
        </div>
      </div>
      <div className="number-container">
        <div className="number-bg">
          <div className="glass">
            <p className="number">{timeLeft.minutes}</p>
          </div>
        </div>
        <div className="title">
          <p>Min</p>
        </div>
      </div>
      <div className="number-container">
        <div className="number-bg">
          <div className="glass">
            <p className="number">{timeLeft.seconds}</p>
          </div>
        </div>
        <div className="title">
          <p>Seg</p>
        </div>
      </div>
    </div>
  );
}

export default Countdown;
