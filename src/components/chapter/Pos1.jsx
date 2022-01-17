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

import Bendacair1 from "../../assets/posIlmu/benda cair 1 (money.kompas.com) minyak.jpg";
import BendaCair2 from "../../assets/posIlmu/benda cair 2 (haruspintar.com) air.jpg";
import BendaCair3 from "../../assets/posIlmu/benda cair 3 (makanabis.com)kecap.jpg";
import BendaGas1 from "../../assets/posIlmu/benda gas 1 (id.theasianparent.com) udara.jpg";
import BendaGas2 from "../../assets/posIlmu/benda gas 2 (suara.com) asap pabrik.jpg";
import BendaGas3 from "../../assets/posIlmu/benda gas 3 (liptan6.com) asap kebakaran.jpg";
import BendaPadat1 from "../../assets/posIlmu/benda padat 1 (haruspintar.com) kayu.jpg";
import BendaPadat2 from "../../assets/posIlmu/benda padat 2 (alvianisme.com) batu.jpg";
import BendaPadat3 from "../../assets/posIlmu/benda padat 3 (islampos.com) besi.jpg";

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
      <div className="flex h-full rounded-xl ">
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
        </Swiper>
      </div>
    </div>
  );
};
const Slide1 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <div className="w-4/12 rounded-xl h-full bg-colorCustom-wood border-4 border-colorCustom-leaf p-1 flex justify-center items-center">
        <img src={Sience} className="2-64" />
      </div>
      <div className="w-6/12 rounded-xl h-full bg-colorCustom-wood border-4 border-colorCustom-leaf p-2 text-xs">
        <div className="flex justify-center">
          <h1 className="font-bold text-xl">POS ILMU</h1>
        </div>
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
      <div className="w-4/12 rounded-xl h-full bg-colorCustom-wood border-4 border-colorCustom-leaf p-1 flex justify-center items-center">
        <img src={Padat} className="2-64" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-colorCustom-wood border-4 border-colorCustom-leaf p-2">
        <p className="font-bold">1. Padat</p>
        <ul class="list-disc px-5 text-sm">
          <li>Bentuk dan volumenya tetap.</li>
          <li>Mempunyai massa atau berat.</li>
          <li>Dapat disentuh dan dipegang.</li>
          <li>Memiliki kekerasan tertentu.</li>
          <li>Ukuran warna tidak dapat diubah.</li>
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
          <img src={BendaPadat1} className="w-11/12" />
          <p className="text-sm text-center">Kayu</p>
          <p className="text-xs text-blue-800">haruspintar.com</p>
        </div>
        <div className=" rounded-xl h-48 w-48 m-2  flex flex-col justify-center items-center">
          <img src={BendaPadat2} className="w-11/12" />
          <p className="text-sm text-center">Batu</p>
          <p className="text-xs text-blue-800">haruspintar.com/</p>
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
          <img src={BendaPadat3} className="w-11/12" />
          <p className="text-sm text-center">Besi</p>
          <p className="text-xs text-blue-800">islampos.com</p>
        </div>
      </div>
    </div>
  );
};
const Slide5 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <div className="w-4/12 rounded-xl h-full bg-colorCustom-wood border-4 border-colorCustom-leaf p-1 flex justify-center items-center">
        <img src={Cair} className="2-64" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-colorCustom-wood border-4 border-colorCustom-leaf p-2">
        <p className="font-bold">2. Cair</p>
        <ul class="list-disc px-5 text-sm">
          <li>Bentuknya berubah-ubah sesuai dengan tempatnya.</li>
          <li>Mempunyai volume yang tetap.</li>
          <li>Mempunyai massa.</li>
          <li>Mengalir ke tempat yang lebih rendah.</li>
          <li>Dapat melarutkan suatu zat tertentu.</li>
        </ul>
      </div>
    </div>
  );
};
const Slide6 = () => {
  return (
    <div className="flex h-full flex-warp   flex-row justify-evenly items-center p-5">
      <div className="flex h-80 w-11/12 bg-colorCustom-wood border-4 border-colorCustom-leaf rounded-xl flex-wrap  flex-row justify-evenly items-center p-1">
        <div className=" rounded-xl h-48 w-48   flex flex-col justify-center items-center">
          <img src={Bendacair1} className="w-11/12" />
          <p className="text-sm text-center">Minyak</p>
          <p className="text-xs text-blue-800">money.kompas.com</p>
        </div>
        <div className=" rounded-xl h-48 w-48 m-2  flex flex-col justify-center items-center">
          <img src={BendaCair2} className="w-11/12" />
          <p className="text-sm text-center">Air</p>
          <p className="text-xs text-blue-800">alvianisme.com/</p>
        </div>
      </div>
    </div>
  );
};

const Slide7 = () => {
  return (
    <div className="flex h-full flex-warp   flex-row justify-evenly items-center p-5">
      <div className="flex h-80 w-11/12 bg-colorCustom-wood border-4 border-colorCustom-leaf rounded-xl  flex-wrap  flex-row justify-evenly items-center p-1">
        <div className=" rounded-xl h-48 w-48 m-2  flex flex-col justify-center items-center">
          <img src={BendaCair3} className="w-11/12" />
          <p className="text-sm text-center">Kecap</p>
          <p className="text-xs text-blue-800">makanabis.com</p>
        </div>
      </div>
    </div>
  );
};
const Slide8 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <div className="w-4/12 rounded-xl h-full bg-colorCustom-wood border-4 border-colorCustom-leaf p-1 flex justify-center items-center">
        <img src={Gas} className="2-64" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-colorCustom-wood border-4 border-colorCustom-leaf p-2">
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
const Slide9 = () => {
  return (
    <div className="flex h-full flex-warp   flex-row justify-evenly items-center p-5">
      <div className="flex h-80 w-11/12 bg-colorCustom-wood border-4 border-colorCustom-leaf rounded-xl flex-wrap  flex-row justify-evenly items-center p-1">
        <div className=" rounded-xl h-48 w-48   flex flex-col justify-center items-center">
          <img src={BendaGas1} className="w-11/12" />
          <p className="text-sm text-center">Udara</p>
          <p className="text-xs text-blue-800">id.theasianparent.com</p>
        </div>
        <div className=" rounded-xl h-48 w-48 m-2  flex flex-col justify-center items-center">
          <img src={BendaGas2} className="w-11/12" />
          <p className="text-sm text-center">Pabrik</p>
          <p className="text-xs text-blue-800">suara.com/</p>
        </div>
      </div>
    </div>
  );
};
const Slide10 = () => {
  return (
    <div className="flex h-full flex-warp   flex-row justify-evenly items-center p-5">
      <div className="flex h-80 w-11/12 bg-colorCustom-wood border-4 border-colorCustom-leaf rounded-xl  flex-wrap  flex-row justify-evenly items-center p-1">
        <div className=" rounded-xl h-48 w-48 m-2  flex flex-col justify-center items-center">
          <img src={BendaGas3} className="w-11/12" />
          <p className="text-sm text-center">Asap Kebakaran</p>
          <p className="text-xs text-blue-800">liptan6.com</p>
        </div>
      </div>
    </div>
  );
};
const Slide11 = () => {
  return (
    <div className="flex h-full  flex-row justify-evenly items-center p-5">
      <div className="w-4/12 rounded-xl h-full bg-colorCustom-wood border-4 border-colorCustom-leaf p-1 flex justify-center items-center">
        <img src={Mindmap} className="2-64" />
      </div>
      <div className="w-6/12  rounded-xl h-full bg-colorCustom-wood border-4 border-colorCustom-leaf p-2">
        <p className="font-bold">Pengertian Perubahan Wujud Benda</p>
        <p className="text-justify text-xs">
          Wujud benda dapat berubah disebabkan karena benda tersebut melepaskan atau menerima kalor. <p>Kalor sendiri memiliki arti sebagai energi panas yang berpindah dari benda bersuhu tinggi ke benda bersuhu lebih rendah.</p> Sedangkan
          perubahan wujud benda adalah suatu proses berubahnya wujud suatu benda menjadi wujud benda yang lain karena pelepasan atau penyerapan kalor.
        </p>
      </div>
    </div>
  );
};
const Slide12 = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full  flex-row justify-center items-center p-5">
      <button
        className="p-5 bg-blue-500 rounded-xl"
        onClick={() => {
          navigate("/exam", { state: "0" });
        }}
      >
        <p className="text-xl text-white font-bold">Mulai Tes</p>
      </button>
    </div>
  );
};

export default Pos1;
