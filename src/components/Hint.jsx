import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style/style.css";
import { XCircleIcon } from "@heroicons/react/solid";

const Hint = () => {
  const navigate = useNavigate();
  return (
    <div id="bodyHome">
      <div className="flex w-full h-full items-center flex-col ">
        <div className="w-80  rounded-xl p-2  flex justify-center bg-red-200 m-2">
          <h1 className="text-3xl font-semibold ">Petunjuk</h1>
        </div>
        <div className="relative flex items-center h-full w-full" id="list-hint">
          <ol className="w-90 h-90 py-2 px-10 list-decimal flex  mx-5 flex-col bg-neutral-50 rounded-xl">
            <li>Klik tombol “Start” untuk memulai misi.</li>
            <li>Misi ini dilakukan secara individu.</li>
            <li>Cantumkan namamu pada tempat yang tersedia sebelum memulai misi.</li>
            <li>Pilih pos pertama untuk kamu bisa memulai misi.</li>
            <li>Misi dimulai dengan mempelajari materi yang tersedia dalam pos tersebut, kemudian selesaikan pertanyaan yang berkaitan dengan materi tersebut.</li>
            <li>Jawablah pertanyaan dengan teliti.</li>
            <li>Kamu akan mendapatkan skor pada tiap-tiap pos atas jawabanmu.</li>
            <li>Pemain dengan skor sama atau melebihi skor minimal akan lanjut ke pos selanjutnya untuk melanjutkan misi.</li>
            <li>Pemain dengan skor kurang dari minimal akan mengulang pada pos tersebut dan tidak dapat melanjutkan ke pos misi selanjutnya.</li>
            <li>Ulangi langkah 4-8 pada pos selanjutnya hingga akhir.</li>
          </ol>
          <button
            className="absolute right-0 top-0 h-12 w-12  p-0  border-2 border-white border-solid justify-center content-center rounded-full bg-blue-500 "
            onClick={() => {
              navigate("/menu");
            }}
          >
            <XCircleIcon className="text-white m-0" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hint;
