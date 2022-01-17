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
import cairPadat1 from "../../assets/chapter/pos1/cairPadat1.jpg";
import cairPadat2 from "../../assets/chapter/pos1/cairPadat2.jpg";
import cairPadat3 from "../../assets/chapter/pos1/cairPadat3.jpg";
import PadatCair1 from "../../assets/chapter/pos1/padatCair1.jpg";
import PadatCair2 from "../../assets/chapter/pos1/padatCair2.jpg";
import PadatCair3 from "../../assets/chapter/pos1/padatCair3.jpg";
import PadatCair4 from "../../assets/chapter/pos1/padatCair4.jpg";

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
      <div className="flex h-full rounded-xl">
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
          <SwiperSlide>
            <Slide5 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide6 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide7 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide8 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide9 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide10 />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
const Slide1 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <div className="w-4/12 rounded-xl h-full p-1 flex justify-center  items-center">
        <video src={Membeku} autoPlay muted loop type="video/mp4" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-colorCustom-wood border-4 border-colorCustom-leaf p-2">
        <div className="flex justify-center">
          <h1 className="font-bold text-xl">POS PADAT DAN CAIR</h1>
        </div>
        <p className="font-bold">Membeku (Cair – Padat)</p>
        <p className="text-justify text-sm">Membeku merupakan peristiwa perubahan wujud dari zat cair menjadi zat padat yang disebabkan karena pelepasan kalor.</p>
      </div>
    </div>
  );
};
const Slide2 = () => {
  return (
    <div className="flex h-full   flex-row justify-evenly items-center px-10">
      <p className="font-bold">Contoh dalam Kehidupan Sehari-hari</p>

      <div className="w-6/12 flex flex-col justify-center rounded-xl h-full bg-colorCustom-wood border-4 border-colorCustom-leaf p-2">
        <ul class="list-disc px-5 text-sm">
          <li>
            Terbentuknya es batu ketika air dimasukkan ke dalam <span className="italic">freezer</span>.
          </li>
          <li>Membekunya minyak goreng yang didinginkan dalam lemari es.</li>
          <li>Lelehan lilin jika dibiarkan akan mengeras kembali.</li>
          <li>Terbentuknya belerang pada kawah gunung.</li>
        </ul>
      </div>
    </div>
  );
};
const Slide3 = () => {
  return (
    <div className="flex h-full flex-warp   flex-row justify-evenly items-center p-5">
      <div className="flex h-80 w-11/12 bg-colorCustom-wood border-4 border-colorCustom-leaf rounded-xl flex-wrap  flex-row justify-evenly items-center p-1">
        <div className=" rounded-xl h-48 w-48   flex flex-col justify-center items-center">
          <img src={cairPadat1} className="w-11/12" />
          <p className="text-sm text-center">
            Air dan minyak ketika dimasukan di <span className="italic">freezer</span> akan membeku
          </p>
          <p className="text-xs text-blue-800">id.aliexpress.com/</p>
        </div>
        <div className=" rounded-xl h-48 w-48 m-2  flex flex-col justify-center items-center">
          <img src={cairPadat2} className="w-11/12" />
          <p className="text-sm text-center">Lelehan lilin akan mengeras jika dibiarkan</p>
          <p className="text-xs text-blue-800">amuzigi.com/</p>
        </div>
      </div>
    </div>
  );
};
const Slide4 = () => {
  return (
    <div className="flex h-full flex-warp   flex-row justify-evenly items-center p-5">
      <div className="flex h-80 w-11/12 bg-colorCustom-wood border-4 border-colorCustom-leaf rounded-xl  flex-wrap  flex-row justify-evenly items-center p-1">
        <div className=" rounded-xl h-48 w-48 m-2  flex flex-col justify-center items-center">
          <img src={cairPadat3} className="w-11/12" />
          <p className="text-sm text-center">Terbentuknya belerang pada kawah gunung</p>
          <p className="text-xs text-blue-800">kompasiana.com/</p>
        </div>
      </div>
    </div>
  );
};
const Slide5 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <div className="w-4/12 rounded-xl h-full p-1 flex  justify-center items-center">
        <video src={Mencair} autoPlay muted loop type="video/mp4" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-colorCustom-wood border-4 border-colorCustom-leaf p-2">
        <p className="font-bold ">Mencair (Padat – Cair)</p>
        <p className="text-justify text-sm">Mencair adalah peristiwa berubahnya zat padat menjadi zat cair, peristiwa ini disebabkan karena penyerapan kalor.</p>
      </div>
    </div>
  );
};
const Slide6 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center px-10">
      <p className=" font-bold">Contoh dalam Kehidupan Sehari-hari</p>

      <div className="w-6/12 flex flex-col justify-center rounded-xl h-full bg-colorCustom-wood border-4 border-colorCustom-leaf p-2">
        <ul class="list-disc px-5 text-sm">
          <li>Mencairnya es batu yang diletakkan di ruangan terbuka.</li>
          <li>Melelehnya mentega saat dipanaskan.</li>
          <li>Melelehnya lilin saat dibakar.</li>
          <li>Coklat batangan akan meleleh jika dipanaskan.</li>
        </ul>
      </div>
    </div>
  );
};

const Slide7 = () => {
  return (
    <div className="flex h-full flex-warp   flex-row justify-evenly items-center p-5">
      <div className="flex h-80 w-11/12  flex-wrap bg-colorCustom-wood border-4 border-colorCustom-leaf  flex-row justify-evenly items-center p-1">
        <div className=" rounded-xl h-48 w-48  flex flex-col justify-center items-center">
          <img src={PadatCair4} className="w-11/12" />
          <p className="text-sm text-center">Melelehnya lilin saat dibakar.</p>
          <p className="text-xs text-blue-800">auliatrisna01.wordpress.com//</p>
        </div>
        <div className=" rounded-xl h-48 w-48 m-2  flex flex-col justify-center items-center">
          <img src={PadatCair3} className="w-11/12" />
          <p className="text-sm text-center">Coklat batangan akan meleleh jika dipanaskan.</p>
          <p className="text-xs text-blue-800">usaha321.net/</p>
        </div>
      </div>
    </div>
  );
};
const Slide8 = () => {
  return (
    <div className="flex h-full flex-warp   flex-row justify-evenly items-center p-5">
      <div className="flex h-80 w-11/12  flex-wrap bg-colorCustom-wood border-4 border-colorCustom-leaf flex-row justify-evenly items-center p-1">
        <div className=" rounded-xl h-48 w-48  flex flex-col justify-center items-center">
          <img src={PadatCair1} className="w-11/12" />
          <p className="text-sm text-center">Mencairnya es batu yang diletakkan di ruang terbuka.</p>
          <p className="text-xs text-blue-800">oddyazis.blogspot.com//</p>
        </div>
        <div className=" rounded-xl h-48 w-48 m-2  flex flex-col justify-center items-center">
          <img src={PadatCair2} className="w-11/12" />
          <p className="text-sm text-center">Melelehnya mentega saat dipanaskan.</p>
          <p className="text-xs text-blue-800">detikFood.com/</p>
        </div>
      </div>
    </div>
  );
};
const Slide9 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-10">
      <img src={MencairPict} className="2-64" />
    </div>
  );
};
const Slide10 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full  flex-row justify-center items-center p-5">
      <button
        className="p-5 bg-blue-500 rounded-xl"
        onClick={() => {
          navigate("/exam", { state: "1" });
        }}
      >
        <p className="text-xl text-white font-bold">Mulai Tes</p>
      </button>
    </div>
  );
};
export default Pos2;
