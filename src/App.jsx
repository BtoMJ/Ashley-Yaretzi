import Home from "./components/Home/Home";
import Event from "./components/Event/Event";
import Places from "./components/Places/Places";
import Parents from "./components/Parents/Parents";
import Carrusel from "./components/Carrusel/Carrusel";
import Music from "./components/Music/Music";
import "./App.css";
import Confirm from "./components/Confirm/Confirm";
<Parents />;

function App() {
  return (
    <div className="container">
      <div className="info">
        <Home />
        <Event />
        <Places />
        <Parents />
        <Carrusel />
        <Confirm />
        <Music />
      </div>
    </div>
  );
}

export default App;
