import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Mainmenu from "./components/MainMenu";
import Splash from "./components/splash";
import Hint from "./components/Hint";
import Map from "./components/Map";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Mainmenu />} />
      <Route path="/hint" element={<Hint />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  );
}

export default App;
