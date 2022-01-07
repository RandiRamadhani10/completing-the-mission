import React, { useState, useEffect } from "react";
import "./style/style.css";

import { VolumeUpIcon } from "@heroicons/react/solid";
import { VolumeOffIcon } from "@heroicons/react/solid";
import ReactAudioPlayer from "react-audio-player";

import Human from "../assets/human1.png";
import Sound from "../media/sound/backsound.mp3";
const Home = () => {
  const [audio] = useState(new Audio(Sound));
  const [playing, setPlaying] = useState(true);
  useEffect(() => {
    playing ? audio.play() : audio.pause();
  }, [playing]);
  return (
    <div id="bodyHome">
      <div className="flex-col justify-start">
        <button
          id="buttonMusic"
          className="h-12 w-12 p-2 m-2 border-2 border-white border-solid justify-center content-center rounded-full bg-blue-500"
          onClick={() => {
            playing ? setPlaying(false) : setPlaying(true);
          }}
        >
          {playing ? <VolumeUpIcon className="text-white m-0" /> : <VolumeOffIcon className="text-white m-0" />}
        </button>
      </div>
      <div className="absolute left-10 bottom-0">
        <img src={Human} alt="" className="h-80" />
      </div>
    </div>
  );
};

export default Home;
