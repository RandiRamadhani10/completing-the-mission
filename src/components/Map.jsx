import React from "react";
import HumanPin from "../assets/humanPin.png";
import "./style/style.css";
const Map = () => {
  const data = true;
  return (
    <div id="bodyHome" className="">
      <div className="flex w-full h-full flex-row justify-center items-center">
        <div className="flex justify-between items-center w-full px-10 bg-orange-900 h-2">
          <div className={data ? "h-16 w-16 rounded-full bg-blue-500" : "rounded-full bg-red-500"}>
            <button index={3} id="buttonMusic" className="h-16 w-16  p-2 rounded-full  border-2 border-white border-solid flex justify-center content-center " disabled={false} onClick={() => {}}>
              <img src={HumanPin} className="h-16 " alt="" />
            </button>
          </div>
          <div className={data ? "rounded-full bg-blue-500" : "rounded-full bg-red-500"}>
            <button index={3} id="buttonMusic" className="h-16 w-16  p-2 rounded-full  border-2 border-white border-solid justify-center content-center " disabled={false} onClick={() => {}}>
              <p className="font-bold text-white">1</p>
            </button>
          </div>
          <div className={data ? "rounded-full bg-blue-500" : "rounded-full bg-red-500"}>
            <button index={3} id="buttonMusic" className="h-16 w-16 p-2 rounded-full  border-2 border-white border-solid justify-center content-center " disabled={false} onClick={() => {}}>
              <p className="font-bold text-white">2</p>
            </button>
          </div>
          <div className={data ? "rounded-full bg-blue-500" : "rounded-full bg-red-500"}>
            <button index={3} id="buttonMusic" className="h-16 w-16 p-2 rounded-full  border-2 border-white border-solid justify-center content-center " disabled={false} onClick={() => {}}>
              <p className="font-bold text-white">3</p>
            </button>
          </div>
          <div className={data ? "rounded-full bg-blue-500" : "rounded-full bg-red-500"}>
            <button index={3} id="buttonMusic" className="h-16 w-16 p-2 rounded-full  border-2 border-white border-solid justify-center content-center " disabled={false} onClick={() => {}}>
              <p className="font-bold text-white">4</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Map;
