import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./style/style.css";

import { VolumeUpIcon } from "@heroicons/react/solid";
import { VolumeOffIcon } from "@heroicons/react/solid";
import { PlayIcon } from "@heroicons/react/solid";
import ReactAudioPlayer from "react-audio-player";
import Human from "../assets/human.png";
import Title from "../assets/tittle.png";

import Swal from "sweetalert2";

const src = require("../media/sound/backsound.mp3");
const audio = new Audio(src);
Swal.fire({ title: "Selamat datang", confirmButtonText: "Lanjutkan" }).then((result) => {
  if (result.isConfirmed) {
    audio.loop = true;
    audio.volume = 0.2;
    audio.play();
  }
});
const Home = () => {
  const [playing, setPlaying] = useState(true);
  const navigate = useNavigate();
  useEffect(async () => {
    audio.loop = true;
    audio.volume = 0.2;
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
            <img src={Title} alt="" className="h-40 animate-bounce" />
          </div>
        </div>
      </div>
      <div className="absolute left-10 bottom-0">
        <img src={Human} alt="" className="h-80 " />
      </div>
      <button
        className=" h-12 w-12  p-0 m-2 border-2 border-white border-solid justify-center content-center rounded-full bg-blue-500 absolute right-2 bottom-0"
        onClick={() => {
          navigate("menu", { state: "Randi Ganteng" });
        }}
      >
        <PlayIcon className="text-white m-0" />
      </button>
    </div>
  );
};

export default Home;
