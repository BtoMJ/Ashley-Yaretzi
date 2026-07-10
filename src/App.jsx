import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Music from "./components/Music/Music";
import Invitation from "./components/Invitation/Invitation";
import NotFound from "./components/NotFound/NotFound";

import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="info">
          <Routes>
            <Route path="/" element={<Home />} />

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
