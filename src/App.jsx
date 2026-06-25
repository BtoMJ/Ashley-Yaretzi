import Music from "./components/Music/Music";
import Home from "./components/Home/Home";
import Countdown from "./components/Countdown/Countdown";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="info">
        <Home />
        <Countdown />
        <Music />
      </div>
    </div>
  );
}

export default App;
