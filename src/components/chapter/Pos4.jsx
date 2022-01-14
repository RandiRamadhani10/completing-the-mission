import React from "react";
import "../style/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Menyublin from "../../media/content/menyublin.mp4";
import Mengkristal from "../../media/content/mengkristal.mp4";
import PadatGas1 from "../../assets/chapter/pos3/padatGas1.jpg";
import PadatGas2 from "../../assets/chapter/pos3/padatGas2.jpg";
import PadatGas3 from "../../assets/chapter/pos3/padatGas3.jfif";
import PadatGas4 from "../../assets/chapter/pos3/padatGas4.jpg";
import GasPadat1 from "../../assets/chapter/pos3/gasPadat1.jpg";
import GasPadat2 from "../../assets/chapter/pos3/gasPadat2.jpg";
import GasPadat3 from "../../assets/chapter/pos3/gasPadat3.jpg";
import GasPadat4 from "../../assets/chapter/pos3/gasPadat4.jpg";
import Bagan from "../../assets/chapter/pos3/bagan.png";

import { useNavigate, useLocation } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/solid";

const Pos4 = () => {
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
      <div className="w-4/12 rounded-xl h-full p-1 flex justify-center items-center">
        <video src={Menyublin} autoPlay muted loop type="video/mp4" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-red-300 p-2">
        <h1 className="font-bold text-xl">POS GAS DAN PADAT</h1>
        <p className="font-bold">Menyublim (Padat – Gas)</p>
        <p className="text-justify text-sm">Menyublim merupakan peristiwa perubahan zat padat menjadi zat cair yang dipengaruhi oleh meningkatnya kalor.</p>
      </div>
    </div>
  );
};
const Slide2 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-10">
      <p>Contoh dalam Kehidupan Sehari-hari</p>

      <div className="w-6/12 flex flex-col justify-center rounded-xl h-full bg-red-300 p-2">
        <ul class="list-disc px-5 text-sm">
          <li>Kapur barus yang diletakkan di lemari lama-kelamaan akan habis.</li>
          <li>Obat nyamuk yang dibakar akan menghasilkan asap sebagai racun nyamuk.</li>
          <li>Arang yang dibakar menjadi gas CO2</li>
          <li>Es batu yang dikeluarkan pada suhu ruangan akan mengeluarkan gas seperti asap berwarna putih. </li>
        </ul>
      </div>
    </div>
  );
};
const Slide3 = () => {
  return (
    <div className="flex h-full flex-warp   flex-row justify-evenly items-center p-5">
      <div className="flex h-80 w-11/12  flex-wrap  flex-row justify-evenly items-center p-1">
        <div className=" rounded-xl h-48 w-48  flex flex-col justify-center items-center">
          <img src={PadatGas1} className="w-11/12" />
          <p className="text-sm text-center">Kapur barus yang diletakkan di lemari lama-kelamaan akan habis.</p>
          <p className="text-xs text-blue-800">suara.com</p>
        </div>
        <div className=" rounded-xl h-48 w-48 m-2  flex flex-col justify-center items-center">
          <img src={PadatGas2} className="w-11/12" />
          <p className="text-sm text-center">Obat nyamuk yang dibakar akan menghasilkan asap sebagai racun nyamuk.</p>
          <p className="text-xs text-blue-800">detik.com/</p>
        </div>
      </div>
    </div>
  );
};
const Slide4 = () => {
  return (
    <div className="flex h-full flex-warp   flex-row justify-evenly items-center p-5">
      <div className="flex h-80 w-11/12  flex-wrap  flex-row justify-evenly items-center p-1">
        <div className=" rounded-xl h-48 w-48  flex flex-col justify-center items-center">
          <img src={PadatGas3} className="w-11/12" />
          <p className="text-sm text-center">Arang yang dibakar menjadi gas CO2.</p>
          <p className="text-xs text-blue-800">mojok.co</p>
        </div>
        <div className=" rounded-xl h-48 w-48 m-2  flex flex-col justify-center items-center">
          <img src={PadatGas4} className="w-11/12" />
          <p className="text-sm text-center">Es batu yang dikeluarkan pada suhu ruangan akan mengeluarkan gas seperti asap berwarna putih.</p>
          <p className="text-xs text-blue-800">Grid.id</p>
        </div>
      </div>
    </div>
  );
};
const Slide5 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <div className="w-4/12 rounded-xl h-full p-1 flex justify-center items-center">
        <video src={Mengkristal} autoPlay muted loop type="video/mp4" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-emerald-300 p-2">
        <p className="font-bold">Mengkristal (Gas – Padat)</p>
        <p className="text-justify text-sm">Mengkristal adalah peristiwa berubahnya zat gas menjadi zat padat yang disebabkan karena pelepasan kalor dari suatu benda.</p>
      </div>
    </div>
  );
};
const Slide6 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-10">
      <p>Contoh dalam Kehidupan Sehari-hari</p>

      <div className="w-6/12 flex flex-col justify-center rounded-xl h-full bg-emerald-300 p-2">
        <ul class="list-disc px-5 text-sm">
          <li>Timbulnya bunga es pada dinding freezer.</li>
          <li>Terbentuknya salju akibat uap air yang mengeras.</li>
          <li>Pembuatan es kering dari karbondioksida.</li>
          <li>Lubang knalpot menjadi kotor berwarna hitam karena gas CO2 yang dikeluarkan mengeras.</li>
        </ul>
      </div>
    </div>
  );
};

const Slide7 = () => {
  return (
    <div className="flex h-full flex-warp   flex-row justify-evenly items-center p-5">
      <div className="flex h-80 w-11/12  flex-wrap  flex-row justify-evenly items-center p-1">
        <div className=" rounded-xl h-48 w-48  flex flex-col justify-center items-center">
          <img src={GasPadat1} className="w-11/12" />
          <p className="text-sm text-center">Pembuatan es kering dari karbondioksida.</p>
          <p className="text-xs text-blue-800">mojok.co</p>
        </div>
        <div className=" rounded-xl h-48 w-48 m-2  flex flex-col justify-center items-center">
          <img src={GasPadat2} className="w-11/12" />
          <p className="text-sm text-center">Lubang knalpot menjadi kotor berwarna hitam karena gas CO2 yang dikeluarkan mengeras.</p>
          <p className="text-xs text-blue-800">cnnindonesia.com</p>
        </div>
      </div>
    </div>
  );
};
const Slide8 = () => {
  return (
    <div className="flex h-full flex-warp   flex-row justify-evenly items-center p-5">
      <div className="flex h-80 w-11/12  flex-wrap  flex-row justify-evenly items-center p-1">
        <div className=" rounded-xl h-48 w-48  flex flex-col justify-center items-center">
          <img src={GasPadat3} className="w-11/12" />
          <p className="text-sm text-center">Arang yang dibakar menjadi gas CO2.</p>
          <p className="text-xs text-blue-800">Alodokter.com</p>
        </div>
        <div className=" rounded-xl h-48 w-48 m-2  flex flex-col justify-center items-center">
          <img src={GasPadat4} className="w-11/12" />
          <p className="text-sm text-center">Es batu yang dikeluarkan pada suhu ruangan akan mengeluarkan gas seperti asap berwarna putih.</p>
          <p className="text-xs text-blue-800">Cargo.id</p>
        </div>
      </div>
    </div>
  );
};

const Slide9 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-10">
      <img src={Bagan} className="2-64" />
    </div>
  );
};
const Slide10 = () => {
  return (
    <div className="flex h-full  flex-row justify-center items-center p-5">
      <button className="p-5 bg-blue-500 rounded-xl">
        <p className="text-xl text-white font-bold">Mulai Tes</p>
      </button>
    </div>
  );
};
export default Pos4;
