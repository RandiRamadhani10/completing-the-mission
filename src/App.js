import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Mainmenu from "./components/MainMenu";
import Splash from "./components/splash";
import Hint from "./components/Hint";
import Map from "./components/Map";
import Profile from "./components/profile";
import Exams from "./components/Exams";
import Final from "./components/Final";

import Pos1 from "./components/chapter/Pos1";
import Pos2 from "./components/chapter/Pos2";
import Pos3 from "./components/chapter/Pos3";
import Pos4 from "./components/chapter/Pos4";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/menu" element={<Mainmenu />} />
      <Route path="/hint" element={<Hint />} />
      <Route path="/map" element={<Map />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/final" element={<Final />} />
      <Route path="/exam" element={<Exams />} />
      <Route path="/pos1" element={<Pos1 />} />
      <Route path="/pos2" element={<Pos2 />} />
      <Route path="/pos3" element={<Pos3 />} />
      <Route path="/pos4" element={<Pos4 />} />
    </Routes>
  );
}

export default App;
