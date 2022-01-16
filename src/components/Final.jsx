import React from "react";
import "./style/style.css";
import chapters from "../data/chapter.json";
import dataLocal from "../models/dataLokal";

import { useNavigate, useLocation } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/solid";
import Human from "../assets/human1.png";
const Final = () => {
  const navigate = useNavigate();
  const localStorage = dataLocal.loadData("checkpoint");
  const data = localStorage[0].data;
  let point = 0;
  data.map((data, index) => {
    point = point + data.exam;
  });
  return (
    <div id="bodyHome">
      <div className="flex flex-col justify-center items-center">
        <div className="bg-colorCustom-wood m-5 border-4 border-colorCustom-leaf p-5 rounded-full">
          <p className="text-sm font-bold">“Terima Kasih Sudah Menyelesaikan Misi Bersama Salam. See You”</p>
        </div>
        <div className="">
          <img src={Human} alt="" className="h-64 " />
        </div>
      </div>
      <button
        className=" h-12 w-12  p-0  m-2 border-2 border-white border-solid justify-center content-center rounded-full bg-blue-500 absolute bottom-0 right-0"
        onClick={() => {
          navigate("/");
        }}
      >
        <XCircleIcon className="text-white m-0" />
      </button>
    </div>
  );
};

export default Final;
