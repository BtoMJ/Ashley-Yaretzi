import { BrowserRouter, Routes, Route } from "react-router-dom";
import Music from "./components/Music/Music";
import Invitation from "./components/Invitation/Invitation";
import NotFound from "./components/NotFound/NotFound";

import "./App.css";
import Hero from "./components/Hero/Hero";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="info">
          <Routes>
            <Route path="/" element={<Hero />} />

            <Route path="/:fam" element={<Invitation />} />

            <Route path="*" element={<NotFound />} />
          </Routes>

          <Music />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
