import { useState, useEffect, useRef } from "react";
import marcoArriba from "../../assets/marcoArriba.png";
import marcoAbajo from "../../assets/marcoAbajo.png";
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
      <img
        className="flowers-top"
        src={marcoArriba}
        alt="marco superior de flores"
      />
      <div className="carousel-fade">
        {slides.map((content, i) => (
          <div key={i} className={`fade-slide ${i === index ? "active" : ""}`}>
            {content}
          </div>
        ))}
      </div>
      <img
        className="flowers-bottom"
        src={marcoAbajo}
        alt="marco superior de flores"
      />
      <p className="cita">Pequeños instantes, grandes recuerdos</p>
      {/* <p className="end-title">Te esperamos</p> */}
    </div>
  );
}

export default Carrusel;
