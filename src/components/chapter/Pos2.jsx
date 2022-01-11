import React from "react";
import "../style/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Sience from "../../assets/sience1_1.png";
import Padat from "../../assets/Padat.png";
import Cair from "../../assets/cair.png";
import Gas from "../../assets/gas.png";
import MencairPict from "../../assets/mencaiir.png";
import Mindmap from "../../assets/mindmap.png";
import Mencair from "../../media/content/mencair.mp4";
import Membeku from "../../media/content/membeku.mp4";

import { useNavigate, useLocation } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/solid";

const Pos2 = () => {
  const navigate = useNavigate();
  return (
    <div id="bodyHome" className="p-5">
      <button
        className=" h-12 w-12 p-0 z-40 m-1  border-2 border-white border-solid justify-center content-center rounded-full bg-red-500 absolute bottom-0 right-0"
        onClick={() => {
          navigate("/map");
        }}
      >
        <XCircleIcon className="text-white m-0" />
      </button>
      <div className="flex h-full rounded-xl  bg-white">
        <Swiper navigation={true} className="mySwiper">
          <SwiperSlide>
            <Slide1 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide2 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide3 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide4 />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
const Slide1 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <div className="w-4/12 rounded-xl h-full p-1 flex justify-center items-center">
        <video src={Membeku} autoPlay muted loop type="video/mp4" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-red-300 p-2">
        <h1 className="font-bold text-xl">POS PADAT DAN CAIR</h1>
        <p className="font-bold">Membeku (Cair – Padat)</p>
        <p className="text-justify">Membeku merupakan peristiwa perubahan wujud dari zat cair menjadi zat padat yang disebabkan karena pelepasan kalor.</p>
        <ul class="list-disc px-5 text-sm">
          <li className="">Terbentuknya es batu ketika air dimasukkan ke dalam freezer.</li>
          <li>Mempunyai massa atau berat.</li>
          <li>Membekunya minyak goreng yang didinginkan dalam lemari es.</li>
          <li>Lelehan lilin jika dibiarkan akan mengeras kembali.</li>
          <li>Terbentuknya belerang pada kawah gunung.</li>
        </ul>
      </div>
    </div>
  );
};
const Slide2 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <div className="w-4/12 rounded-xl h-full p-1 flex justify-center items-center">
        <video src={Mencair} autoPlay muted loop type="video/mp4" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-emerald-300 p-2">
        <p className="font-bold">Mencair (Padat – Cair)</p>
        <ul class="list-disc px-5 ">
          <li>Mencairnya es batu yang diletakkan di ruangan terbuka.</li>
          <li>Melelehnya mentega saat dipanaskan.</li>
          <li>Melelehnya lilin saat dibakar.</li>
          <li>Coklat batangan akan meleleh jika dipanaskan.</li>
        </ul>
      </div>
    </div>
  );
};
const Slide3 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-10">
      <img src={MencairPict} className="2-64" />
    </div>
  );
};
const Slide4 = () => {
  return (
    <div className="flex h-full  flex-row justify-center items-center p-5">
      <button className="p-5 bg-blue-500 rounded-xl">
        <p className="text-xl text-white font-bold">Mulai Tes</p>
      </button>
    </div>
  );
};
export default Pos2;
