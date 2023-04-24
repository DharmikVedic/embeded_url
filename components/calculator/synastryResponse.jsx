import { Loader2 } from "../../components/utils/loader";
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { TabUI } from "../tabui/horoscopeTab";
import { AspectCard, ProfileDetailCard2 } from "./utils";
import { FetchApi } from "../utils/fetchapi";
import { Sign, getDMS } from "../utils/gtmSign";
import { PlanetColor, SignBgColor, SignColor, typeTextColor } from "./color";

export default function SynastryReport({ userdata }) {
  const [loader, setloader] = useState(true);
  const [active, setActive] = useState("positions");
  const [response, setResponse] = useState({});
  const [svg, setsvg] = useState(null);

  useEffect(() => {
    if (userdata) {
      API(userdata);
    }
  }, [userdata]);

  const API = async () => {
    if (userdata) {
      await CallApi(userdata, "synastry_wheel_chart");
      await CallApi(userdata, "synastry_horoscope");
    }
  };

  const CallApi = async (userdata, api) => {
    const ApiDetail = await FetchApi({
      apiName: api,
      userData: {
        ...userdata,
        theme_name: "WHEEL_CHART_THEME_UPASTROLOGY",
      },
    });
    if (ApiDetail) {
      setloader(false);
      if (api === "synastry_horoscope") {
        setResponse(ApiDetail);
      } else {
        setsvg(ApiDetail);
      }
    }
  };

  const handleActive = (val) => {
    setActive(val);
  };

  return (
    <>
      <div className="min-h-screen w-full">
        <div className="flex flex-col gap-10 pb-10">
          <div className="max-w-4xl mx-auto ">
            <h1 className="md:text-5xl text-4xl text-center font-bold text-zinc-800 dark:text-white">
              Synastry Chart Report
            </h1>
          </div>

          {svg !== null ? (
            <div className="max-w-md mx-auto w-full px-5">
              <img
                className="w-full bg-white rounded-full"
                src={svg?.chart_url}
                alt="Synastry chart"
              />
            </div>
          ) : (
            <Loader2 />
          )}
        </div>

        <div className="py-0 max-w-lg relative  overflow-hidden  dark:border-zinc-500 border-zinc-500  rounded-[10px] mx-auto w-full border">
          <button className="absolute cursor-pointer z-[1] duration-100 ease-in dark:hover:text-zinc-800 dark:hover:bg-white p-1.5 rounded-full dark:text-zinc-300 text-zinc-700  top-5 right-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
              />
            </svg>
          </button>
          <div className="w-full z-[-1] opacity-[0.2] h-full absolute  bg-[url('/natal/noise.png')] overflow-hidden bg-repeat" />
          <div className="absolute z-[-1] dark:opacity-[1] opacity-[.6] top-0 right-0 w-full h-full">
            <img src="/natal/cta-glow-tr.svg" className="w-full object-cover" />
          </div>{" "}
          <ProfileDetailCard2
            hidebtn={true}
            userDetail={reverseRequest(userdata)}
            link="/synastry-chart"
          />
          <div className="border-t dark:border-zinc-500 border-zinc-400">
            <ProfileDetailCard2
              hidebtn={true}
              userDetail={reverseRequest(userdata, true)}
            />
          </div>
        </div>

        {Object.keys(response).length > 0 ? (
          <div className="max-w-4xl mx-auto mt-14">
            <TabUI active={active} handleTime={handleActive} tabs={tabs} />

            {active == "positions" && (
              <div className=" w-full pt-10 max-w-3xl mx-auto ">
                <h2 className="font-semibold md:text-4xl text-3xl mb-10  dark:text-white">
                  Synastry Positions
                </h2>
                <div className="border border-b-0 dark:border-zinc-500 border-zinc-400">
                  {response["first"].map((item, i) => (
                    <SynastryOneFeture
                      color={i}
                      data2={response["second"][i]}
                      key={i}
                      data={item}
                    />
                  ))}
                </div>
              </div>
            )}
            {active == "Aspects" && (
              <div className="pt-10">
                <SynastryAspectCard
                  title="Synastry Aspect"
                  desc=" The planets represent energies and cosmic forces that can manifest in
          different ways. They are like the actors in a play. The signs describe
          the ways in which these planetary energies are used. They show the
          motivation and the roles the different actors play. As with everything
          in the material world, these energies can and usually do operate in
          two directions, the positive and negative."
                  response={response.synastry.aspects}
                />
              </div>
            )}
            {active == "PDF Download" && <Test2 />}
          </div>
        ) : (
          <Loader2 />
        )}
      </div>
    </>
  );
}

const tabs = ["Positions", "Aspects", "PDF Download"];

export function reverseRequest(data, partner) {
  if (partner) {
    let maleDetail = {
      name: data.p_name,
      day: data.p_day,
      month: data.p_month,
      year: data.p_year,
      hour: data.p_hour,
      min: data.p_min,
      country: data.p_country,
      place: data.p_place,
      tzone: data.p_tzone,
      lat: data.p_lat,
      lon: data.p_lon,
    };
    return maleDetail;
  } else {
    let femaleDetail = {
      name: data.s_name,
      day: data.s_day,
      month: data.s_month,
      year: data.s_year,
      hour: data.s_hour,
      min: data.s_min,
      country: data.s_country,
      place: data.s_place,
      tzone: data.s_tzone,
      lat: data.s_lat,
      lon: data.s_lon,
    };
    return femaleDetail;
  }
}

export const SynastryOneFeture = (props) => {
  return (
    <div
      className={`flex  border-b border-zinc-400 dark:border-zinc-500 px-5 py-5  items-center gap-3`}
    >
      <div className="md:flex-row  text-[15px] flex-wrap flex-col  text-para flex gap-2">
        <div className="flex gap-2 dark:text-zinc-300 text-zinc-800 items-center">
          <Sign
            size="text-[25px] pr-1"
            color={PlanetColor[props.data.name.toLowerCase()]}
            name={props.data.name}
          />
          Your {props.data.name} is in{" "}
          <b
            className={` py-[2px] px-3 rounded-full text-zinc-800 ${
              SignBgColor[props.data.name.toLowerCase()]
            }`}
          >
            {getDMS(props.data.norm_degree)} {props.data.sign}
          </b>
        </div>
        <div className="flex gap-2 items-center flex-wrap text-zinc-800 dark:text-zinc-300">
          and your partner's {props.data2.name} is in{" "}
          <b
            className={`${
              SignBgColor[props.data.name.toLowerCase()]
            } py-[2px]  px-3 rounded-full text-zinc-800`}
          >
            {getDMS(props.data2.norm_degree)} {props.data2.sign}
          </b>
        </div>
      </div>
    </div>
  );
};

export function SynastryAspectCard({ response, title, desc }) {
  return (
    <div className="max-w-4xl mx-auto flex flex-col gap-10">
      <div className="w-full">
        <h2 className="font-semibold md:text-4xl text-3xl mb-5  pb-3 text-zinc-800 dark:text-white ">
          {title}
        </h2>
        <p className=" text-bg_dark p-5 bg-blue-200 text-sm sm:text-base leading-7 rounded-md ">
          {desc}
        </p>
      </div>
      <div className="grid grid-cols-1 border md:grid-cols-2 border-t-0 border-zinc-400 dark:border-zinc-500  w-full text-zinc-700 dark:text-zinc-300">
        {response.map((item, i) => (
          <div
            key={i}
            className={`${
              i % 2 == 0
                ? "border-r-0 border-l-0 border-b-0 "
                : "border-b-0 md:border-l border-l-0 border-r-0"
            } border-zinc-400 dark:border-zinc-500 border flex w-full text-center px-5 py-3.5 items-center `}
          >
            <div
              className={`text-[15px] overflow-x-auto text-left items-center flex gap-2`}
            >
              {item.sr && "SR"}{" "}
              <Sign
                size="text-[25px]"
                color={PlanetColor[item.first.toLowerCase()]}
                name={item.first}
              />{" "}
              {item.first}{" "}
              <Sign
                size="text-[25px]"
                color={typeTextColor[item.type.toLowerCase()]}
                name={item.type}
              />
              {item.type}
              <Sign
                size="text-[25px]"
                color={PlanetColor[item.second.toLowerCase()]}
                name={item.second}
              />
              {item.second}{" "}
              <span className="text-xs whitespace-nowrap border border-current py-[2px] px-[5px] rounded-full text-blue-300 dark:text-[#9DCDE4]/80">
                Orb {item.orb}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
