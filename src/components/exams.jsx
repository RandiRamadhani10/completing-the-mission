import React, { useState } from "react";
import "./style/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Alert from "../Helper/Alert";
import Question from "../data/exams.json";
import Swal from "sweetalert2";
import { useNavigate, useLocation } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/solid";
import chapters from "../data/chapter.json";
import dataLocal from "../models/dataLokal";
const Exams = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [answer, setAnswer] = useState([{ data: 0 }, { data: 0 }, { data: 0 }, { data: 0 }, { data: 0 }]);
  console.log(Question[0].data[location.state].pos);
  const arr = [{ data: 0 }, { data: 0 }, { data: 0 }, { data: 0 }, { data: 0 }];
  const dataQuestions = Question[0].data[location.state].pos;
  return (
    <div id="bodyHome" className="p-2">
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
          {dataQuestions.map((data, index) => {
            return (
              <SwiperSlide>
                <Quest prop={{ data: data, index: index }} arr={arr} />
              </SwiperSlide>
            );
          })}
          <SwiperSlide>
            <End arr={arr} />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};
const Quest = ({ prop, arr }) => {
  const datas = prop.data;
  const indexProp = prop.index;
  const uniqid = () => {
    const id = Math.random().toString();
    return id.slice(2);
  };
  const datasRandom = datas.answer.sort(() => Math.random() - 0.5);
  return (
    <div className="p-2 flex h-full w-full flex-col justify-start rounded-xl items-center ">
      {datas.type == "normal" ? (
        <div className="p-3 flex flex-row bg-neutral-50 border-4 border-colorCustom-leaf rounded-xl w-full m-5">
          <p>{datas.no}. </p>
          <p>{datas.question}</p>
        </div>
      ) : (
        <div className="p-3 flex flex-col bg-neutral-50 border-4 border-colorCustom-leaf rounded-xl w-full m-2">
          <div className="flex flex-row">
            <p>{datas.no}. </p>
            <p>{datas.question}</p>
          </div>
          <ul class="list-decimal px-5 text-xs">
            {datas.detailQuestion.map((data, index) => {
              return <li>{data.data}</li>;
            })}
          </ul>
          <p className="text-xs">{datas.question1}</p>
        </div>
      )}
      <form className="px-7 rounded-xl w-full flex flex-wor flex-wrap justify-between items-center">
        {datasRandom.map((data, index) => {
          let id = uniqid();

          return (
            <div key={index} className="p-3 border-2 w-2/5 border-colorCustom-leaf flex flex-row items-center bg-neutral-50 border-2s rounded-xl w-full my-1">
              <input
                type="radio"
                id={id}
                name="answer"
                value={data.validate}
                onClick={() => {
                  arr[indexProp].data = data.validate;
                }}
              />
              <label for={id} className="px-2 text-xs w-full">
                {data.choice}
              </label>
            </div>
          );
        })}
      </form>
    </div>
  );
};
const End = ({ arr }) => {
  const localStorage = dataLocal.loadData("checkpoint");
  const location = useLocation();
  const navigate = useNavigate();
  let count = 0;
  let data;

  localStorage.length > 0 ? (data = localStorage[0].data) : (data = chapters[0].data);
  const validate = () => {
    arr.map((datas, index) => {
      datas.data ? (count = count + 20) : (count = count);
    });
    count < 80
      ? Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Kamu belum berhasil",
        }).then((result) => {
          if (result.isConfirmed) {
            return navigate("/map");
          } else {
            return false;
          }
        })
      : Swal.fire({
          icon: "success",
          title: "Good job!",
          text: "Kamu berhasil",
        }).then((result) => {
          if (result.isConfirmed) {
            let dataPush = data;
            let index = parseInt(location.state);

            dataPush[index].exam = count;
            location.state < 3 ? (dataPush[index + 1].checkpoint = true) : console.log("pancet");
            dataPush = [{ data: dataPush }];

            dataLocal.setData(dataPush, "checkpoint");
            return navigate("/map");
          } else {
            return false;
          }
        });
  };
  return (
    <div className="flex h-full  flex-row justify-center items-center p-5">
      <button
        className="p-5 bg-blue-500 rounded-xl"
        onClick={() => {
          validate();
        }}
      >
        <p className="text-xl text-white font-bold">Akhiri Tes</p>
      </button>
    </div>
  );
};
export default Exams;
