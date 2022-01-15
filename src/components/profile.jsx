import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./style/style.css";
import { XCircleIcon } from "@heroicons/react/solid";
import ProfileDev from "../assets/profile.jpeg";
const Profile = () => {
  const navigate = useNavigate();
  return (
    <div id="bodyHome">
      <div className="flex w-full h-full items-center flex-col ">
        <div className="w-64  rounded-xl p-2  flex justify-center bg-colorCustom-wood border-4 border-colorCustom-leaf m-2">
          <h1 className="text-2xl font-semibold ">Profil Pengembang</h1>
        </div>
        <div className="relative flex items-center justify-center h-full w-full" id="list-hint">
          <div className="m-5 w-full flex flex-col rounded-xl border-4 border-colorCustom-leaf bg-neutral-50">
            <img src={ProfileDev} className="h-32 w-28 mx-auto p-3" alt="" />

            <p className="px-10">Mahasiswa </p>
            <ol className=" py-2 px-10  list-disc text-sm mx-5   ">
              <li>Nama : Dwi Agustin Purnaning.</li>
              <li>NIM : 18010644099.</li>
              <li>Jurusan : S1 Pendidikan Guru Sekolah Dasar.</li>
              <li>Alamat : Ds. Kebonagung Kec. Ploso Kab Jombang.</li>
              <li>Email : dwiagustinprn@gmail.com.</li>
            </ol>
            <p className="px-10">Dosen Pembimbing </p>
            <p className="px-10">Farida Istianah, S.Pd., M.Pd. </p>
          </div>
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

export default Profile;
