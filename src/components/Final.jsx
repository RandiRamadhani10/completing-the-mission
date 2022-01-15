import React from "react";
import "./style/style.css";
import chapters from "../data/chapter.json";
import dataLocal from "../models/dataLokal";
const Final = () => {
  const localStorage = dataLocal.loadData("checkpoint");
  const data = localStorage[0].data;
  let point = 0;
  data.map((data, index) => {
    point = point + data.exam;
  });
  return (
    <div id="bodyHome">
      <div className="flex flex-col justify-center items-center bg-red-300">
        <p className="text-xl font-bold">{point}</p>
      </div>
    </div>
  );
};

export default Final;
