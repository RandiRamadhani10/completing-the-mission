import React, { useEffect, useState } from "react";

import { BrowserRouter, useNavigate } from "react-router-dom";
const Splash = () => {
  let navigate = useNavigate();
  useEffect(() => {
    const run = () => {
      navigate("/Home");
    };
    run();
  });
  return <div></div>;
};

export default Splash;
