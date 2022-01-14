import React, { useState } from "react";
import "./style/style.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

import Question from "../data/exams.json";

import { useNavigate, useLocation } from "react-router-dom";
import { XCircleIcon } from "@heroicons/react/solid";

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
      <div className="flex h-full rounded-xl  bg-white">
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
  return (
    <div className="p-2 flex h-full w-full flex-col justify-start items-center bg-neutral-50">
      <div className="p-3 flex flex-row bg-blue-500 rounded-xl w-full m-5">
        <p>{datas.no}. </p>
        <p>{datas.question}</p>
      </div>

      <form className="px-7 rounded-xl w-full">
        {datas.answer.map((data, index) => {
          let id = uniqid();
          return (
            <div key={index} className="p-3 flex flex-row items-center bg-red-500 rounded-xl w-full my-1">
              <input
                type="radio"
                id={id}
                name="fav_language"
                value={data.validate}
                onClick={() => {
                  arr[indexProp].data = data.validate;
                  console.log(arr);
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
  return (
    <div>
      <button
        onClick={() => {
          console.log(arr);
        }}
      >
        button
      </button>
    </div>
  );
};
export default Exams;