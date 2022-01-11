import React, { useState, useEffect } from "react";
import HumanPin from "../assets/humanPin.png";
import "./style/style.css";
import { useNavigate, useLocation } from "react-router-dom";

import { XCircleIcon } from "@heroicons/react/solid";
import chapters from "../data/chapter.json";
import dataLocal from "../models/dataLokal";
const Map = () => {
  const [chapterOn, setChapterOn] = useState();
  const navigate = useNavigate();
  const localStorage = dataLocal.loadData("checkpoint");
  let data;
  localStorage.length > 0 ? (data = localStorage[0].data) : (data = chapters[0].data);

  const [pos1, setPos1] = useState();
  const [pos2, setPos2] = useState();
  const [pos3, setPos3] = useState();
  const [pos4, setPos4] = useState();
  console.log(data[1].checkpoint);
  return (
    <div id="bodyHome" className="">
      <div className="w-full flex  justify-center items-center">
        <h1 className="p-4 bg-neutral-50 rounded-xl m-1 font-bold">AYO BELAJAR</h1>
      </div>
      <div className="flex w-full h-full flex-row justify-center items-center">
        <div className="flex justify-between items-center w-full px-10 bg-orange-900 h-2">
          <div className="h-16 w-16 rounded-full bg-blue-500">
            <button index={0} id="buttonMusic" className="h-16 w-16  p-2 rounded-full  border-2 border-white border-solid flex justify-center content-center " disabled={true} onClick={() => {}}>
              <img src={HumanPin} className="h-16 " alt="" />
            </button>
          </div>
          <div className={data[0].checkpoint ? "rounded-full bg-blue-500" : "rounded-full bg-neutral-400"}>
            <button
              index={1}
              id="buttonMusic"
              className="h-16 w-16  p-2 rounded-full  border-2 border-white border-solid justify-center content-center "
              disabled={data[0].checkpoint ? false : true}
              onClick={() => {
                navigate("/pos1");
              }}
            >
              <p className="font-bold text-white">1</p>
            </button>
          </div>
          <div className={data[1].checkpoint ? "rounded-full bg-blue-500" : "rounded-full  bg-neutral-400"}>
            <button
              index={2}
              id="buttonMusic"
              className="h-16 w-16 p-2 rounded-full  border-2 border-white border-solid justify-center content-center "
              disabled={data[1].checkpoint ? false : true}
              onClick={() => {
                navigate("/pos2");
              }}
            >
              <p className="font-bold text-white">2</p>
            </button>
          </div>
          <div className={data[2].checkpoint ? "rounded-full bg-blue-500" : "rounded-full  bg-neutral-400"}>
            <button
              index={3}
              id="buttonMusic"
              className="h-16 w-16 p-2 rounded-full  border-2 border-white border-solid justify-center content-center "
              disabled={data[2].checkpoint ? false : true}
              onClick={() => {
                navigate("/pos3");
              }}
            >
              <p className="font-bold text-white">3</p>
            </button>
          </div>
          <div className={data[3].checkpoint ? "rounded-full bg-blue-500" : "rounded-full  bg-neutral-400"}>
            <button
              index={4}
              id="buttonMusic"
              className="h-16 w-16 p-2 rounded-full  border-2 border-white border-solid justify-center content-center "
              disabled={data[3].checkpoint ? false : true}
              onClick={() => {
                navigate("/pos4");
              }}
            >
              <p className="font-bold text-white">4</p>
            </button>
          </div>
        </div>
      </div>
      <button
        className=" h-12 w-12  p-0  m-2 border-2 border-white border-solid justify-center content-center rounded-full bg-blue-500 absolute bottom-0 right-0"
        onClick={() => {
          navigate("/menu");
        }}
      >
        <XCircleIcon className="text-white m-0" />
      </button>
    </div>
  );
};

export default Map;
