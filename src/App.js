import React from "react";
import { Routes, Route, Link } from "react-router-dom";

import Home from "./components/Home";
import Splash from "./components/splash";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
