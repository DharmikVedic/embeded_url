import React from "react";
import { signs } from "../horoscope/horoscopeCards";
import style from "../../styles/Home.module.css";

export default function HoroscopeTab({ tabs, active, handleTime }) {
  return (
    <div className="flex dark:text-white text-zinc-800 whitespace-nowrap gap-5 border-b border-zinc-300 dark:border-zinc-600">
      {tabs.map((item, i) => (
        <button
          onClick={() => handleTime(item.link)}
          key={i}
          className={`border-b-4 cursor-pointer pb-2 ${
            active.toLowerCase() === item.link.toLowerCase()
              ? "border-blue-500"
              : "border-transparent"
          }`}
        >
          <h6 className="cursor-pointer uppercase">{item.name}</h6>
        </button>
      ))}
    </div>
  );
}

export function HoroscopeTopBar({ sign, time, handleSign }) {
  const HandleChange = (e) => {
    const { value } = e.target;
    handleSign(value);
  };

  const timeObject = {
    daily: "Today",
    next: "Tommorrow",
    monthly: "Monthly",
    weekly: "Weekly",
  };

  return (
    <div className="bg-[#2C2B46] shadow-md  py-5 px-5">
      <div className=" max-w-7xl mx-auto">
        <div className="flex flex-col gap-2">
          <h6 className="text-c_yellow text-sm  uppercase ">
            {timeObject[time.toLowerCase()]}
          </h6>
          <div className="flex gap-5 items-center">
            <h2 className="font-semibold text-white capitalize md:text-2xl text-xl">
              {sign} Horoscope
            </h2>
            <select
              onChange={HandleChange}
              value={sign}
              className={`border ${style.select2} capitalize dark:border-zinc-500 border-zinc-300 text-white bg-transparent rounded p-2`}
            >
              <option disabled>Change Sign</option>
              {signs.map((item, i) => (
                <option key={i} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export function TabUI({ tabs, active, handleTime }) {
  return (
    <div className="flex overflow-x-auto dark:text-white text-zinc-800 whitespace-nowrap gap-5 border-b border-zinc-300 dark:border-zinc-600">
      {tabs.map((item, i) => (
        <button
          onClick={() => handleTime(item)}
          key={i}
          className={`border-b-4 cursor-pointer pb-2 ${
            active.toLowerCase() === item.toLowerCase()
              ? "border-blue-500"
              : "border-transparent"
          }`}
        >
          <h6 className="cursor-pointer md:text-base text-sm capitalize">
            {item}
          </h6>
        </button>
      ))}
    </div>
  );
}
