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
import Menguap from "../../media/content/menguap.mp4";
import Mengembun from "../../media/content/mengembun.mp4";
import Gascair1 from "../../assets/chapter/pos2/gasCair1.jpg";
import Gascair2 from "../../assets/chapter/pos2/gasCair2.jpg";
import Gascair3 from "../../assets/chapter/pos2/gasCair3.jpg";
import Gascair4 from "../../assets/chapter/pos2/gasCair4.jpg";
import Cairgas1 from "../../assets/chapter/pos2/cairGas1.jpg";
import Cairgas2 from "../../assets/chapter/pos2/cairGas2.jpg";
import Cairgas3 from "../../assets/chapter/pos2/cairGas3.jpg";
import Cairgas4 from "../../assets/chapter/pos2/cairGas4.jpg";

import Tutor6 from "../../assets/chapter/pos2/tutor6.jpg";
import Tutor5 from "../../assets/chapter/pos2/tutor5.jpg";
import Tutor4 from "../../assets/chapter/pos2/tutor4.jpg";
import Tutor3 from "../../assets/chapter/pos2/tutor3.jpg";
import Tutor2 from "../../assets/chapter/pos2/tutor2.jpg";
import Tutor1 from "../../assets/chapter/pos2/tutor1.jpg";

import { useNavigate, useLocation } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/solid";

const Pos3 = () => {
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
          <SwiperSlide>
            <Slide11 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide12 />
          </SwiperSlide>
          <SwiperSlide>
            <Slide13 />
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
        <video src={Mengembun} autoPlay muted loop type="video/mp4" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-red-300 p-2">
        <h1 className="font-bold text-xl">POS CAIR DAN GAS</h1>
        <p className="font-bold">Mengembun (Gas – Cair)</p>
        <p className="text-justify text-sm">Mengembun merupakan peristiwa berubahnya wujud dari zat gas menjadi zat cair yang disebabkan karena pelepasan kalor.</p>
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
          <li>Es batu di dalam gelas akan menghasilkan bintik-bintik air diluar gelas.</li>
          <li>Titik air di rumput saat pagi hari berasal dari uap air yang menempel di daun menjadi embun.</li>
          <li>Ketika hujan akan muncul butiran air pada kaca mobil.</li>
          <li>Akan terlihat butiran air pada kaca saat kita menghembuskan napas di depannya.</li>
        </ul>
      </div>
    </div>
  );
};
const Slide3 = () => {
  return (
    <div className="flex h-full flex-warp   flex-row justify-evenly items-center p-5">
      <div className="flex h-80 w-11/12  flex-wrap  flex-row justify-evenly items-center p-1">
        <div className=" rounded-xl h-36 w-36 m-2  flex flex-col justify-center items-center">
          <img src={Gascair1} className="w-11/12" />
          <p className="text-xs text-blue-800">facebook.com/</p>
        </div>
        <div className=" rounded-xl h-36 w-36 m-2  flex flex-col justify-center items-center">
          <img src={Gascair2} className="w-11/12" />
          <p className="text-xs text-blue-800">picsels.com/</p>
        </div>
        <div className=" rounded-xl h-36 w-36 m-2  flex flex-col justify-center items-center">
          <img src={Gascair3} className="w-11/12" />
          <p className="text-xs text-blue-800">otosia.com/</p>
        </div>
        <div className=" rounded-xl h-36 w-36 m-2  flex flex-col justify-center items-center">
          <img src={Gascair4} className="w-11/12" />
          <p className="text-xs text-blue-800">DocsPlayer.com/</p>
        </div>
      </div>
    </div>
  );
};
const Slide4 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <div className="w-4/12 rounded-xl h-full p-1 flex justify-center items-center">
        <video src={Menguap} autoPlay muted loop type="video/mp4" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-emerald-300 p-2">
        <p className="font-bold">Menguap (Cair – Gas)</p>
        <p className="text-justify text-sm">Mengup adalah peristiwa berubahnya zat cair menjadi zat gas karena menyerapan kalor.</p>
      </div>
    </div>
  );
};
const Slide5 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <p>Contoh dalam Kehidupan Sehari-hari</p>
      <div className="w-6/12  rounded-xl h-full bg-emerald-300 p-2 flex flex-col justify-center">
        <ul class="list-disc px-5 ">
          <li>Pembuatan garam oleh petani garam.</li>
          <li>Baju basah akan kering jika dijemur di bawah terik matahari.</li>
          <li>Air yang dimasak sampai mendidih lama-kelamaan akan berkurang.</li>
          <li>Baju yang disemprot parfum menjadi harum. </li>
        </ul>
      </div>
    </div>
  );
};
const Slide6 = () => {
  return (
    <div className="flex h-full flex-warp   flex-row justify-evenly items-center p-5">
      <div className="flex h-80 w-11/12  flex-wrap  flex-row justify-evenly items-center p-1">
        <div className=" rounded-xl h-36 w-36 m-2  flex flex-col justify-center items-center">
          <img src={Cairgas1} className="w-11/12" />
          <p className="text-xs text-blue-800">idxchannel.com/</p>
        </div>
        <div className=" rounded-xl h-36 w-36 m-2  flex flex-col justify-center items-center">
          <img src={Cairgas2} className="w-11/12" />
          <p className="text-xs text-blue-800">dekoruma.com/</p>
        </div>
        <div className=" rounded-xl h-36 w-36 m-2  flex flex-col justify-center items-center">
          <img src={Cairgas3} className="w-11/12" />
          <p className="text-xs text-blue-800">suarasurabaya.net/</p>
        </div>
        <div className=" rounded-xl h-36 w-36 m-2  flex flex-col justify-center items-center">
          <img src={Cairgas4} className="w-11/12" />
          <p className="text-xs text-blue-800">Beautynesia.com/</p>
        </div>
      </div>
    </div>
  );
};
const Slide7 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <div className="w-4/12 rounded-xl h-full p-1 flex justify-center items-center">
        <img src={Tutor5} className="w-11/12" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-emerald-300 p-2">
        <p className="font-bold">Penguapan dapat dipercepat, berikut adalah peristiwa yang dapat mempercepat pengupan:</p>
        <p className="text-justify ">1. Memanaskan zat cair. Contohnya adalah saat menjemur pakaian basah, agar pakaian cepat kering maka pakaian dijemur di bawah terik sinar matahari.</p>
      </div>
    </div>
  );
};
const Slide8 = () => {
  return (
    <div className="flex h-full  flex-col justify-evenly items-center p-5">
      <div className="rounded-xl h-full p-1 flex justify-center items-center">
        <img src={Tutor4} className="w-3/12" />
      </div>
      <div className="   m-10  rounded-xl h-full bg-emerald-300 p-2">
        <p className="text-justify ">
          2. Meniupkan udara di atas permukaan benda cair. Contohnya adalah saat meniup air teh yang masih panas, angin yang ditiupkan akan membawa molekul air meninggalkan air teh sehingga teh akan cepat dingin.
        </p>
      </div>
    </div>
  );
};
const Slide9 = () => {
  return (
    <div className="flex h-full  flex-col justify-evenly items-center p-5">
      <div className=" rounded-xl h-full p-1 flex justify-center items-center">
        <img src={Tutor3} className="w-6/12" />
      </div>
      <div className="   m-10  rounded-xl h-full bg-emerald-300 p-2">
        <p className="text-justify ">
          3. Mengurangi tekanan pada permukaan zat cair. Zat cair yang berjumlah sedikit akan lebih cepat menguap dari pada zat cair yang berjumlah lebih banyak. Contohnya adalah terdapar dua gelas yang sama dengan jumlah isi air teh panas
          yang berbeda. Maka air teh dengan jumlah lebih sedikit akan lebih cepat dingin.
        </p>
      </div>
    </div>
  );
};
const Slide10 = () => {
  return (
    <div className="flex h-full  flex-col justify-evenly items-center p-5">
      <div className="rounded-xl h-full pt-3 flex justify-center items-center">
        <img src={Tutor2} className="w-6/12" />
      </div>
      <div className="   m-10  rounded-xl h-full bg-emerald-300 p-2">
        <p className="text-justify ">
          4. Memperluas permukaan zat cair. Jika permukaan semakin lebar maka semakin banyak molekul dipermukan yang dapt meninggalkan zat cair menjadi gas. Contohnya adalah air teh panas di dalam gelas dipindahkan ke piring atau wadah yang
          lebih lebar permukaanya.
        </p>
      </div>
    </div>
  );
};
const Slide11 = () => {
  return (
    <div className="flex h-full  flex-col justify-evenly items-center p-5">
      <div className=" rounded-xl h-full p-1 flex justify-center items-center">
        <img src={Tutor1} className="w-6/12" />
      </div>
      <div className="   m-10  rounded-xl h-full bg-emerald-300 p-2">
        <p className="text-justify ">5. Menyemburkan zait cair atau sama dengan memperluas permukaan zat cair dan memberi kemampuan menguap lebih besar. Contohnya adalah saat menyemprotkan parfum.</p>
      </div>
    </div>
  );
};
const Slide12 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-10">
      <img src={Tutor6} className="2-64" />
    </div>
  );
};
const Slide13 = () => {
  return (
    <div className="flex h-full  flex-row justify-center items-center p-5">
      <button className="p-5 bg-blue-500 rounded-xl">
        <p className="text-xl text-white font-bold">Mulai Tes</p>
      </button>
    </div>
  );
};
export default Pos3;
