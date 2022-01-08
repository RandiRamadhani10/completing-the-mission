import React, { useState, useEffect } from "react";
import "./style/style.css";

import { VolumeUpIcon } from "@heroicons/react/solid";
import { VolumeOffIcon } from "@heroicons/react/solid";
import { PlayIcon } from "@heroicons/react/solid";
import ReactAudioPlayer from "react-audio-player";
import Human from "../assets/human1.png";
import Title from "../assets/tittle.png";

import Swal from "sweetalert2";
// Swal.fire("Selamat Datang");
const Home = () => {
  const src = require("../media/sound/backsound.mp3");
  const [audio] = useState(new Audio(src));
  const [playing, setPlaying] = useState(true);
  document.body.addEventListener("mousemove", function () {
    audio.play();
  });

  useEffect(async () => {
    playing ? audio.play() : audio.pause();
  }, [playing]);
  return (
    <div id="bodyHome">
      <div className=" h-full flex justify-center items-center">
        <button
          id="buttonMusic"
          className="h-12 w-12 p-2 m-2 border-2 border-white border-solid justify-center content-center rounded-full bg-blue-500 absolute left-2 top-0"
          onClick={() => {
            playing ? setPlaying(false) : setPlaying(true);
          }}
        >
          {playing ? <VolumeUpIcon className="text-white m-0" /> : <VolumeOffIcon className="text-white m-0" />}
        </button>
        <div className="flex justify-center items-center ">
          <div>
            <img src={Title} alt="" className="h-40" />
          </div>
        </div>
      </div>
      <div className="absolute left-10 bottom-0">
        <img src={Human} alt="" className="h-80" />
      </div>
      <button id="buttonMusic" className="h-12 w-12 p-0 m-2 border-2 border-white border-solid justify-center content-center rounded-full bg-blue-500 absolute right-2 bottom-0" onClick={() => {}}>
        <PlayIcon className="text-white m-0" />
      </button>
    </div>
  );
};

export default Home;
