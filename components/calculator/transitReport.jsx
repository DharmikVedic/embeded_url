import React, { useEffect, useRef, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { Loader2 } from "../../components/utils/loader";
import { FetchApi } from "../utils/fetchapi";
import {
  CallculatedateforTransit,
  CustomInput,
  TimeForTransit,
  addDays,
  subDays,
} from "./utils";
import { TransitProfileCard } from "./planetCards";
import { SignBgColor, SignColor, typeTextColor, typebgColor } from "./color";
import { Sign } from "../utils/gtmSign";
import { TabUI } from "../tabui/horoscopeTab";
import { numberSufix } from "../utils/date";

export default function Transitreport({ userdata, handleForm }) {
  const [loader, setloader] = useState(false);
  const [state, setstate] = useState(new Date());
  const [response, setResponse] = useState({});
  const [active, setActive] = useState("Daily Transit");

  const ref = useRef();

  useEffect(() => {
    if (userdata) {
      API(userdata);
    }
  }, [userdata]);

  const API = async (userdata) => {
    const obj = {
      month: state.getMonth() + 1,
      day: state.getDate(),
      year: state.getFullYear(),
    };
    const ApiCall = await FetchApi({
      apiName: "natal_transits/daily",
      userData: { ...userdata, ...obj },
    });
    if (ApiCall) {
      setloader(false);
      const sortterm = ApiCall?.transit_relation.filter(
        (item) =>
          item.transit_planet !== "Jupiter" &&
          item.transit_planet !== "Saturn" &&
          item.transit_planet !== "Uranus" &&
          item.transit_planet !== "Neptune" &&
          item.transit_planet !== "Chiron"
      );
      const longterm = ApiCall?.transit_relation.filter(
        (item) =>
          item.transit_planet === "Jupiter" ||
          item.transit_planet === "Saturn" ||
          item.transit_planet === "Uranus" ||
          item.transit_planet === "Neptune" ||
          item.transit_planet === "Chiron"
      );
      setResponse({ short: sortterm, long: longterm, all: ApiCall });
    }
  };

  const handleActive = (val) => {
    setActive(val);
  };

  return (
    <div className="min-h-screen w-full">
      <div className=" max-w-4xl mx-auto text-center">
        <h1 className="text-zinc-800 dark:text-white md:text-5xl text-4xl font-semibold">
          Personalised Transit Report
        </h1>
      </div>
      {/* birth details */}
      <div className="max-w-4xl mx-auto">
        <div className="py-14 flex md:flex-row flex-col justify-between md:gap-20  gap-14">
          <TransitProfileCard handleForm={handleForm} userDetail={userdata} />
          <div className="flex gap-5  sm:max-w-sm w-full flex-col ">
            <h5 className="md:text-lg  text-zinc-800 dark:text-white uppercase border-b border-zinc-300 dark:border-zinc-500 pb-2 ">
              TRANSIT DATE
            </h5>
            <div>
              <DatePicker
                selected={state}
                onChange={(date) => {
                  setstate(date);
                  setloader(true);
                }}
                dateFormat="MMMM d, yyyy"
                minDate={subDays(new Date(), 1)}
                maxDate={addDays(new Date(), 1)}
                dropdownMode="select"
                customInput={<CustomInput ref={ref} />}
              />
              <p className="text-base text-zinc-700 dark:text-zinc-300 mt-5 items-center flex gap-2">
                <svg
                  className="w-4 h-4  fill-current"
                  version="1.0"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g transform="translate(0 64) scale(.1 -.1)">
                    <path d="m100 615c0-20-5-25-25-25-14 0-37-11-50-25l-25-24v-246-246l25-24 24-25h271 271l24 25 25 24v246 246l-25 24c-13 14-36 25-50 25-20 0-25 5-25 25 0 21-5 25-30 25s-30-4-30-25v-25h-160-160v25c0 21-5 25-30 25s-30-4-30-25zm0-100c0-21 5-25 30-25s30 4 30 25v25h160 160v-25c0-21 5-25 30-25 26 0 30 4 30 26 0 21 4 25 22 22 19-2 24-10 26-40l3-38h-270-271v33c0 38 6 47 32 47 13 0 18-7 18-25zm488-287-3-173h-265-265l-3 173-2 172h270 270l-2-172z" />
                    <path d="m92 328c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m192 328c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m292 328c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m392 328c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m492 328c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m92 228c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m192 228c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m292 228c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m392 228c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m492 228c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m92 128c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m192 128c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m292 128c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                    <path d="m392 128c2-17 10-23 28-23s26 6 28 23c3 19-1 22-28 22s-31-3-28-22z" />
                  </g>
                </svg>

                {userdata?.current_location}
              </p>
            </div>
          </div>
        </div>
      </div>
      {Object.keys(response).length > 0 && !loader ? (
        <div className="max-w-4xl mx-auto">
          <TabUI active={active} handleTime={handleActive} tabs={tabs} />

          {/* {active === "Daily Transit House" && (
            <div className="flex flex-col gap-7">
              <h4 className="md:text-3xl text-2xl font-medium dark:text-zinc-300 text-zinc-700">
                Daily Transit House
              </h4>
              <div className="grid-cols-1 md:grid-cols-2 grid gap-5 md:gap-7">
                {response?.transit_relation?.map((item, i) => (
                  <OneFeture2 key={i} data={item} />
                ))}
              </div>
            </div>
          )} */}
          {active === "Daily Transit" && (
            <div className=" max-w-xl pt-10 mx-auto grid grid-cols-1 gap-14 md:gap-20">
              <div className="flex flex-col gap-5">
                <h5 className="md:text-2xl text-xl font-medium  pb-2 text-zinc-700 dark:text-zinc-300">
                  Short Term Transit
                </h5>
                <div className="flex  flex-col divide-y divide-zinc-400 dark:divide-zinc-500 border-zinc-400 dark:border-zinc-500 border">
                  {response.short?.map((item, i) => (
                    <OneFeture key={i} number={i} data={item} />
                  ))}
                </div>
              </div>
              <div className="flex  flex-col gap-7">
                <h5 className="md:text-2xl text-xl font-medium  pb-2 text-zinc-700 dark:text-zinc-300">
                  Long Term Transit
                </h5>
                <div className="flex  flex-col divide-y divide-zinc-400 dark:divide-zinc-500 border-zinc-400 dark:border-zinc-500 border">
                  {response.long?.map((item, i) => (
                    <OneFeture key={i} number={i} data={item} />
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <Loader2 />
      )}
    </div>
  );
}

const tabs = ["Daily Transit"];

export const OneFeture = (props) => {
  return (
    <div
      className={` px-5 py-2 text-zinc-700 dark:text-zinc-300  flex md:text-[16px] w-full  items-start gap-3`}
    >
      <Sign
        size="text-[27px] md:text-[33px] md:mt-[3px] mt-[-3px]"
        color={`${
          typeTextColor[props.data.aspect_type.toLowerCase()]
        } text-light_bg`}
        name={props.data.aspect_type}
      />
      <span className="leading-8">
        {props.data.transit_planet} {props.data.aspect_type}{" "}
        {props.data.natal_planet} start{" "}
        <b
          className={`${
            typebgColor[props.data.aspect_type.toLowerCase()]
          } mx-1 font-normal ${
            typeTextColor[props.data.aspect_type]
          } text-center text-zinc-800  px-2 py-[1px] rounded-full`}
        >
          {TimeForTransit(props.data.exact_time)[0]
            ? TimeForTransit(props.data.exact_time)[0]
            : "-"}
        </b>{" "}
        at{" "}
        <b
          className={`${typebgColor[props.data.aspect_type]} ${
            typeTextColor[props.data.aspect_type]
          } text-center  mx-1 font-normal`}
        >
          {TimeForTransit(props.data.exact_time)[1]
            ? TimeForTransit(props.data.exact_time)[1]
            : "-"}
        </b>{" "}
      </span>
    </div>
  );
};

const OneFeture2 = (props) => {
  return (
    <div
      className={`${
        SignBgColor[props.data.transit_planet.toLowerCase()]
      } dark:text-zinc-300 text-zinc-700  flex md:text-lg px-5 py-2 max-w-max  items-center gap-3`}
    >
      <Sign
        size={`text-[25px]  md:text-[30px]`}
        color={`${
          SignColor[props.data.transit_planet.toLowerCase()]
        } text-zinc-800`}
        name={props.data.transit_planet}
      />
      <span>
        {props.data.transit_planet} in {props.data.transit_sign} in{" "}
        <b
          className={`${
            SignColor[props.data.transit_planet.toLowerCase()]
          } text-center py-1 px-2 rounded-[8px] text-zinc-800 font-cera_medium`}
        >
          {numberSufix(props.data.natal_house)} House
        </b>
      </span>
    </div>
  );
};
