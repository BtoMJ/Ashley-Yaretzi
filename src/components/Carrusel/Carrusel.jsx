import { useState, useEffect, useRef } from "react";
import "./Carrusel.css";

const slides = [
  <div className="slide-container-1"></div>,
  <div className="slide-container-2"></div>,
  <div className="slide-container-3"></div>,
  <div className="slide-container-4"></div>,
  // <div className="slide-container-5"></div>,
];

function Carrusel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);
  const delay = 2700;

  const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () => setIndex((prevIndex) => (prevIndex + 1) % slides.length),
      delay,
    );
    return () => resetTimeout();
  }, [index]);

  return (
    <div className="carrusel-container">
      <div className="carousel-fade">
        {slides.map((content, i) => (
          <div key={i} className={`fade-slide ${i === index ? "active" : ""}`}>
            {content}
          </div>
        ))}
      </div>
      <p className="cita">
        Cada foto guarda un momento, cada momento nos acerca al{" "}
        <i>para siempre</i>.
      </p>
      <p className="end-title">Te esperamos</p>
    </div>
  );
}

export default Carrusel;
