import React from "react";
import "../style/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Sience from "../../assets/sience1_1.png";
import Padat from "../../assets/Padat.png";
import Cair from "../../assets/cair.png";
import Gas from "../../assets/gas.png";
import Mindmap from "../../assets/mindmap.png";
import SwiperCore, { Navigation } from "swiper";

import { useNavigate, useLocation } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/solid";

SwiperCore.use([Navigation]);
const Pos1 = () => {
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
      <div className="flex h-full rounded-xl  bg-neutral-100">
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
        </Swiper>
      </div>
    </div>
  );
};
const Slide1 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <div className="w-4/12 rounded-xl h-full bg-indigo-200 p-1 flex justify-center items-center">
        <img src={Sience} className="2-64" />
      </div>
      <div className="w-6/12 rounded-xl h-full bg-red-300 p-2 text-xs">
        <h1 className="font-bold text-xl">Pos Ilmu</h1>
        <p className="font-bold">Bentuk Benda dan Sifatnya</p>
        <p className="text-justify">
          Wujud benda dibedakan menjadi 3, yakni padat, cair, dan gas. Contoh benda padat yaitu seperti kayu, batu, dan besi. Contoh benda cair adalah minyak, air, dan kecap. Sedangkan contoh benda gas yaitu gas oksigen, gas karbondioksida,
          asap, dll. Setiap benda di sekitar manusia berbentuk padat, cair, dan gas memiliki sifat dan ciri yang berbeda. Berikut adalah sifat dari masing-masing bentuk benda:
        </p>
      </div>
    </div>
  );
};
const Slide2 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <div className="w-4/12 rounded-xl h-full bg-indigo-200 p-1 flex justify-center items-center">
        <img src={Padat} className="2-64" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-emerald-300 p-2">
        <p className="font-bold">1. Padat</p>
        <ul class="list-disc px-5 text-sm">
          <li>Bentuk dan volumenya tetap.</li>
          <li>Mempunyai massa atau berat.</li>
          <li>Dapat disentuh dan dipegang.</li>
          <li>memiliki kekerasan tertentu.</li>
          <li>ukuran warna tidak dapat diubah</li>
        </ul>
      </div>
    </div>
  );
};
const Slide3 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <div className="w-4/12 rounded-xl h-full bg-indigo-200 p-1 flex justify-center items-center">
        <img src={Cair} className="2-64" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-blue-300 p-2">
        <p className="font-bold">2. Cair</p>
        <ul class="list-disc px-5 text-sm">
          <li>Bentuknya berubah-ubah sesuai dengan tempatnya.</li>
          <li>Mempunyai volume yang tetap.</li>
          <li>mempunyai massa.</li>
          <li>Mengalir ke tempat yang lebih rendah.</li>
          <li>Dapat melarutkan suatu zat tertentu.</li>
        </ul>
      </div>
    </div>
  );
};
const Slide4 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <div className="w-4/12 rounded-xl h-full bg-indigo-200 p-1 flex justify-center items-center">
        <img src={Gas} className="2-64" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-orange-300 p-2">
        <p className="font-bold">3. Gas</p>
        <ul class="list-disc px-5 text-sm">
          <li>Mengisi seluruh ruang yang ditempati.</li>
          <li>Menekan segala arah.</li>
          <li>Bergerak ke segala arah.</li>
          <li>Volumenya berubah-ubah.</li>
          <li>Tidak dapat dilihat namun dapat dirasakan.</li>
        </ul>
      </div>
    </div>
  );
};
const Slide5 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <div className="w-4/12 rounded-xl h-full bg-indigo-200 p-1 flex justify-center items-center">
        <img src={Mindmap} className="2-64" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-lime-300 p-2">
        <p className="font-bold">Pengertian Perubahan Wujud Benda</p>
        <p className="text-justify text-sm">
          Wujud benda dapat berubah disebabkan karena benda tersebut melepaskan atau menerima kalor. Kalor sendiri memiliki arti sebagai energi panas yang berpindah dari benda bersuhu tinggi ke benda bersuhu lebih rendah. Sedangkan
          perubahan wujud benda adalah suatu proses berubahnya wujud suatu benda menjadi wujud benda yang lain karena pelepasan atau penyerapan kalor.{" "}
        </p>
      </div>
    </div>
  );
};
const Slide6 = () => {
  return (
    <div className="flex h-full  flex-row justify-center items-center p-5">
      <button className="p-5 bg-blue-500 rounded-xl">
        <p className="text-xl text-white font-bold">Mulai Tes</p>
      </button>
    </div>
  );
};

export default Pos1;
