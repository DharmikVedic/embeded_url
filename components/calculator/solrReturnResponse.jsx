import {
  AspectCard,
  PlanetHouse,
  ProfileDetailCard2,
} from "../../components/calculator/utils";

import { PlanetCard2 } from "../../components/calculator/planetCards";
import React, { useCallback, useEffect, useState } from "react";
import { Loader2 } from "@/components/utils/loader";
import { FetchApi } from "@/components/utils/fetchapi";
import { TabUI } from "@/components/tabui/horoscopeTab";
import { mL } from "../utils/date";
import Test2 from "@/pages/test2";
import {
  SolarReturnAspectReport,
  SolarReturnPlanetReport,
} from "./extraCalculatorCard";

export default function SolarReturnReport({ userdata, handleForm }) {
  const [detail, setdetail] = useState({});
  const [chartlocation, setchartlocation] = useState({});
  const [tabResponse, setTabResponse] = useState({
    "SR Planet Report": {},
    "SR Aspects Report": {},
  });

  const [active, setActive] = useState("SR Planets");

  const [svg, setsvg] = useState(null);

  useEffect(() => {
    if (userdata) {
      API(userdata);
    }
  }, [userdata]);

  const API = async (userdata) => {
    if (userdata) {
      const chartDetail = await FetchApi({
        apiName: "solar_return_details",
        userData: userdata,
      });
      const r = chartDetail?.solar_return_date.split(" ");
      const date = r[0].split("-");
      const time = r[1].split(":");
      const obj = {
        month: date[0],
        day: date[1],
        year: date[2],
        hour: time[0],
        min: time[1],
        second: time[2],
      };
      setchartlocation(obj);

      const ApiCall = await FetchApi({
        apiName: "natal_wheel_chart",
        userData: {
          ...userdata,
          theme_name: "WHEEL_CHART_THEME_UPASTROLOGY",
        },
      });
      const ApiDetail = await FetchApi({
        apiName: "solar_return_horoscope",
        userData: userdata,
      });
      if (ApiCall.status) {
        setdetail(ApiDetail);
        setsvg(ApiCall.chart_url);
      }
    } else {
      await router.push("/solar-return");
    }
  };

  const handleActive = (val) => {
    if (url[val]) {
      tabCallback(url[val], val);
    }
    setActive(val);
  };

  const tabCallback = useCallback(async (tab, key) => {
    const ApiCall = await FetchApi({
      apiName: tab,
      userData: userdata,
    });
    setTabResponse((prev) => ({ ...prev, [key]: ApiCall }));
  }, []);

  return (
    <>
      <div className="min-h-screen w-full">
        <div>
          <div className="max-w-4xl mx-auto pb-10 pt-5 md:pb-14">
            <h1 className="md:text-5xl text-4xl text-center font-bold dark:text-white">
              Solar Return Report
            </h1>
          </div>

          {/* profile data */}
          <div className="py-0 relative z-[1] max-w-lg dark:border-zinc-500 border-zinc-400 rounded max-w-4xl mx-auto w-full border">
            <div className="w-full z-[-1] opacity-[0.2] h-full absolute  bg-[url('/natal/noise.png')] overflow-hidden bg-repeat" />
            <div className="absolute z-[-1] dark:opacity-[1] opacity-[.6] top-0 right-0 w-full h-full">
              <img
                src="/natal/cta-glow-tr.svg"
                className="w-full object-cover"
              />
            </div>
            <button
              onClick={() => {
                handleForm("solar");
              }}
              className="duration-100 ease-in hover:bg-white hover:text-zinc-800 dark:hover:text-zinc-800  text-zinc-500 dark:text-white p-1 rounded-full absolute top-5 right-5 z-[2]"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
            </button>
            <ProfileDetailCard2
              hidebtn={true}
              handleForm={handleForm}
              userDetail={userdata}
              link="/"
            >
              <div className="pt-5 dark:border-zinc-500 border-zinc-400  mt-2 border-t">
                <h4 className="font-semibold md:text-xl text-lg text-zinc-800 dark:text-white">
                  Solar Return Details
                </h4>
                <div className="flex flex-col mt-3 gap-2">
                  <p className="flex items-center gap-3 dark:text-zinc-300 text-zinc-700">
                    <span className="mt-[8px]">
                      <svg
                        version="1.0"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 64.000000 64.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                          stroke="none"
                        >
                          <path
                            d="M100 615 c0 -20 -5 -25 -25 -25 -14 0 -37 -11 -50 -25 l-25 -24 0
-246 0 -246 25 -24 24 -25 271 0 271 0 24 25 25 24 0 246 0 246 -25 24 c-13
14 -36 25 -50 25 -20 0 -25 5 -25 25 0 21 -5 25 -30 25 -25 0 -30 -4 -30 -25
l0 -25 -160 0 -160 0 0 25 c0 21 -5 25 -30 25 -25 0 -30 -4 -30 -25z m0 -100
c0 -21 5 -25 30 -25 25 0 30 4 30 25 l0 25 160 0 160 0 0 -25 c0 -21 5 -25 30
-25 26 0 30 4 30 26 0 21 4 25 22 22 19 -2 24 -10 26 -40 l3 -38 -270 0 -271
0 0 33 c0 38 6 47 32 47 13 0 18 -7 18 -25z m488 -287 l-3 -173 -265 0 -265 0
-3 173 -2 172 270 0 270 0 -2 -172z"
                          />
                          <path
                            d="M92 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
                          />
                          <path
                            d="M192 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                          />
                          <path
                            d="M292 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                          />
                          <path
                            d="M392 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                          />
                          <path
                            d="M492 328 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                          />
                          <path
                            d="M92 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
                          />
                          <path
                            d="M192 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                          />
                          <path
                            d="M292 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                          />
                          <path
                            d="M392 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                          />
                          <path
                            d="M492 228 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                          />
                          <path
                            d="M92 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22 -27
0 -31 -3 -28 -22z"
                          />
                          <path
                            d="M192 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                          />
                          <path
                            d="M292 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                          />
                          <path
                            d="M392 128 c2 -17 10 -23 28 -23 18 0 26 6 28 23 3 19 -1 22 -28 22
-27 0 -31 -3 -28 -22z"
                          />
                        </g>
                      </svg>
                    </span>
                    {mL[parseInt(chartlocation?.month)]}{" "}
                    {parseInt(chartlocation?.day)}, {chartlocation?.year}{" "}
                    {chartlocation?.hour}:{chartlocation?.min}:
                    {chartlocation?.second}
                  </p>
                  <p className="flex items-center gap-3 dark:text-zinc-300 text-zinc-700">
                    <span className="mt-[8px]">
                      <svg
                        version="1.0"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 64.000000 64.000000"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <g
                          transform="translate(0.000000,64.000000) scale(0.100000,-0.100000)"
                          stroke="none"
                        >
                          <path
                            d="M223 622 c-109 -39 -178 -112 -210 -221 -29 -102 4 -228 82 -306 122
-121 328 -121 450 0 91 92 118 241 64 356 -69 146 -241 223 -386 171z m77 -86
l0 -64 -42 5 c-24 3 -45 7 -47 9 -7 6 31 103 42 108 40 16 47 8 47 -58z m84
58 c13 -5 53 -101 45 -108 -2 -2 -23 -6 -46 -9 l-43 -5 0 64 c0 66 5 73 44 58z
m-200 -62 c-7 -32 -25 -40 -52 -23 -10 6 -6 15 19 35 17 15 33 25 35 23 2 -2
1 -18 -2 -35z m320 -1 c18 -20 18 -20 -8 -27 -32 -8 -32 -8 -41 34 -6 31 -5
33 12 24 10 -6 27 -19 37 -31z m-369 -63 c20 -9 25 -18 25 -47 0 -74 -6 -81
-67 -81 l-55 0 7 36 c9 49 36 104 51 104 7 0 25 -5 39 -12z m438 -22 c8 -19
19 -50 22 -70 l7 -36 -55 0 c-61 0 -67 7 -67 81 0 27 5 38 23 47 37 18 53 13
70 -22z m-307 -6 l34 0 0 -50 0 -50 -55 0 c-61 0 -61 0 -48 73 4 28 10 37 20
33 8 -4 30 -6 49 -6z m178 -27 c12 -73 12 -73 -49 -73 l-55 0 0 49 0 50 43 4
c23 2 45 4 48 5 4 1 9 -15 13 -35z m-290 -135 c3 -13 6 -39 6 -59 0 -29 -5
-38 -25 -47 -14 -7 -32 -12 -39 -12 -15 0 -42 55 -51 104 l-7 36 55 0 c48 0
55 -3 61 -22z m146 -27 l0 -49 -47 -4 c-27 -3 -49 -4 -50 -4 -1 1 -5 25 -9 54
l-7 52 57 0 56 0 0 -49z m146 -3 c-4 -29 -8 -53 -9 -54 -1 0 -23 1 -49 4 l-48
4 0 49 0 49 56 0 57 0 -7 -52z m149 16 c-9 -49 -36 -104 -51 -104 -7 0 -25 5
-39 12 -20 9 -25 18 -25 47 0 74 6 81 67 81 l55 0 -7 -36z m-295 -159 c0 -55
-3 -65 -17 -65 -29 0 -42 13 -58 59 -20 59 -20 59 23 64 20 2 40 4 45 5 4 1 7
-27 7 -63z m129 49 c8 -7 -32 -103 -45 -108 -39 -15 -44 -8 -44 58 l0 64 43
-5 c23 -3 44 -7 46 -9z m-245 -46 c3 -17 4 -33 2 -35 -2 -2 -18 8 -35 23 -25
20 -29 29 -19 35 27 17 45 9 52 -23z m324 23 c10 -6 6 -15 -19 -35 -17 -15
-33 -25 -35 -23 -2 2 -1 18 2 35 7 32 25 40 52 23z"
                          />
                        </g>
                      </svg>
                    </span>
                    {userdata?.current_location}
                  </p>
                </div>
              </div>
            </ProfileDetailCard2>
          </div>

          {svg !== null ? (
            <div className="max-w-md mt-14 mx-auto w-full px-5">
              <img
                className="w-full bg-white rounded-full"
                src={svg}
                alt="solar chart"
              />
            </div>
          ) : (
            <Loader2 />
          )}
        </div>

        <div className="max-w-4xl mx-auto mt-14">
          <TabUI active={active} handleTime={handleActive} tabs={tabs} />

          {Object.keys(detail).length !== 0 ? (
            <>
              <div className="pt-10  md:pt-14">
                <>
                  {active === "SR Planets" && (
                    <PlanetCard2
                      title="Solar Return Planets"
                      desc="The planets represent energies and cosmic forces that can manifest in
          different ways. They are like the actors in a play. The signs describe
          the ways in which these planetary energies are used. They show the
          motivation and the roles the different actors play. As with everything
          in the material world, these energies can and usually do operate in
          two directions, the positive and negative."
                      response={detail.planets}
                    />
                  )}
                </>
                {active === "SR Houses" && (
                  <PlanetHouse
                    title="Solar Return Houses"
                    desc=" The planets represent energies and cosmic forces that can be utilized
          in various ways. They are like the actors in a play. Houses represent
          the different spheres of life where these energies can be and are
          brought to bear, for better or for worse. If the planets are the
          actors in a play, then the houses represent the various settings in
          which the actors play out their roles (signs)."
                    detail={detail.houses}
                  />
                )}
                {active === "SR Aspects" && (
                  <div className="md:pb-20 pb-14">
                    <AspectCard
                      title="Solar Return Aspect"
                      desc=" The planets represent energies and cosmic forces that can manifest in
          different ways. They are like the actors in a play. The signs describe
          the ways in which these planetary energies are used. They show the
          motivation and the roles the different actors play. As with everything
          in the material world, these energies can and usually do operate in
          two directions, the positive and negative."
                      response={detail.aspects}
                    />
                  </div>
                )}
                {active === "SR Aspects Report" && (
                  <SolarReturnAspectReport data1={tabResponse[active]} />
                )}
                {active === "SR Planet Report" && (
                  <SolarReturnPlanetReport data1={tabResponse[active]} />
                )}
                {active == "PDF Download" && <Test2 />}
              </div>
            </>
          ) : (
            <Loader2 />
          )}
        </div>
      </div>
    </>
  );
}

const tabs = [
  "SR Planets",
  "SR Houses",
  "SR Aspects",
  "SR Planet Report",
  "SR Aspects Report",
  "PDF Download",
];

const url = {
  "SR Planet Report": "solar_return_planet_report",
  "SR Aspects Report": "solar_return_aspects_report",
};
