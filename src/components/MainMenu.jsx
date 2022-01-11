import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Alert from "../Helper/Alert";

import Human from "../assets/human1.png";
import { UserCircleIcon, InformationCircleIcon, XCircleIcon, PlayIcon } from "@heroicons/react/solid";

import "./style/style.css";
import Swal from "sweetalert2";

const src = require("../media/sound/backsound.mp3");
const audio = new Audio(src);

const Mainmenu = ({ data }) => {
  const location = useLocation();
  const navigate = useNavigate();
  console.log(location);
  return (
    <div id="bodyHome">
      <div className="absolute bottom-0 left-10 flex flex-row ">
        <img src={Human} className="h-80" />
        <div className="p-4 h-10 flex justify-center items-center m-2 rounded-full bg-neutral-50">
          <h1 className="font-semibold">Hai Aku Salam</h1>
        </div>
      </div>
      <div className="flex h-full flex flex-col justify-between items-center  absolute right-0 p-5">
        <button
          className=" h-12 w-12  p-0  m-2 border-2 border-white border-solid justify-center content-center rounded-full bg-blue-500 "
          onClick={() => {
            Alert.biodata();
          }}
        >
          <UserCircleIcon className="text-white m-0" />
        </button>
        <button
          className=" h-12 w-12  p-0  m-2 border-2 border-white border-solid justify-center content-center rounded-full bg-blue-500 "
          onClick={() => {
            navigate("/hint");
          }}
        >
          <InformationCircleIcon className="text-white m-0" />
        </button>
        <button
          className=" h-12 w-12  p-0  m-2 border-2 border-white border-solid justify-center content-center rounded-full bg-blue-500 "
          onClick={() => {
            navigate("/");
          }}
        >
          <XCircleIcon className="text-white m-0" />
        </button>
      </div>
      <div className="flex h-full justify-center items-center">
        <button
          className=" h-32  w-32  p-0 m-2 border-2 border-white border-solid justify-center content-center rounded-full bg-blue-500"
          onClick={() => {
            navigate("/map", { state: "juga" });
          }}
        >
          <PlayIcon className="text-white m-0" />
        </button>
      </div>
    </div>
  );
};

export default Mainmenu;
