import { BrowserRouter, Routes, Route } from "react-router-dom";
import Invitation from "./components/Invitation/Invitation";

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
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
