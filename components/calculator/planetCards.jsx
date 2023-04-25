import React from "react";
import {
  PlanetColor,
  SignBgColor,
  SignColor,
  colorPlanet,
  typeTextColor,
  typebgColor,
} from "./color";
import { Sign, getDMS } from "../utils/gtmSign";
import { Time, ampmconvertor, convert24hoursto12hours } from "../utils/date";
import { Loader2 } from "../utils/loader";

export function TransitProfileCard({ userDetail, handleForm }) {
  return (
    <div className="flex flex-col w-full md:max-w-xs gap-4">
      <h5 className="md:text-lg text-white uppercase border-b border-zinc-400 dark:border-zinc-500 pb-2  ">
        Your birth details
      </h5>
      <div className=" w-full relative  md:max-w-sm flex flex-col gap-4">
        {userDetail !== null && (
          <>
            <p className="font-cera_medium  text-zinc-700 dark:text-zinc-300">
              {userDetail?.name}
            </p>
            <div className="flex flex-col gap-4">
              <p className="flex items-center gap-3 text-zinc-700 dark:text-zinc-300">
                <svg
                  className="w-5 h-5 mt-[6px]  fill-current"
                  version="1.0"
                  viewBox="0 0 64 64"
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
                {date(userDetail?.month, userDetail?.day)}, {userDetail?.year}{" "}
                at{" "}
                {Time(
                  convert24hoursto12hours(userDetail?.hour),
                  userDetail?.min
                )}{" "}
                {ampmconvertor(userDetail?.hour)}
                {/*March 03, 2000 at 07:45 AM*/}
              </p>
              <p className=" flex gap-3  items-start text-zinc-700 dark:text-zinc-300">
                <svg
                  version="1.0"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5 fill-current"
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

                {userDetail?.place}
              </p>
              <button
                onClick={() => handleForm("transit")}
                className="hover:bg-zinc-800 absolute top-0 right-0 hover:text-white  text-zinc-200  p-1 rounded-full"
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
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default function PlanetCards({ response }) {
  return (
    <div className="max-w-sm w-full">
      <table className="border-collapse w-full">
        <thead>
          <tr>
            <th className="bg-purple-500 font-semibold md:text-xl text-lg text-white py-3 px-5">
              Natal Planet
            </th>
          </tr>
        </thead>
        <tbody>
          {response.planets.map((item, i) => (
            <tr key={i}>
              <td className="border px-5 py-1">
                <div className="flex  items-center gap-3">
                  <Sign
                    name={item.name}
                    color={PlanetColor[item.name.toLowerCase()]}
                  />
                  {item.name} in {getDMS(item.norm_degree)}
                  <Sign
                    name={item.sign}
                    color={SignColor[item.sign.toLowerCase()]}
                  />
                  {item.sign}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function PlanetCard2({ title, desc, response }) {
  return (
    <div className="w-full flex flex-col gap-10">
      <div className="w-full">
        <h2 className="font-semibold mb-5 md:text-4xl text-3xl  text-zinc-800 dark:text-white">
          {title}
        </h2>
        <p className="dark:text-zinc-300 leading-6 rounded-md ">{desc}</p>
      </div>
      <div className="w-full  grid grid-cols-1 md:grid-cols-2  gap-y-4 gap-x-10 max-w-3xl mx-auto">
        {response.map((item, i) => (
          <div
            key={i}
            className={`flex px-5 rounded py-3 ${colorPlanet[i]} gap-3 text-para rounded items-center text-lg`}
          >
            <Sign name={item.name} color="text-light_bg/70" />
            {item.name} in {getDMS(item.norm_degree)} {item.sign}
          </div>
        ))}
      </div>
    </div>
  );
}

export function General_ascendant_report({ data }) {
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Loader2 />
      ) : (
        <div
          className={`bg-pink-300 gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
        >
          <span
            style={{ lineHeight: 1.2 }}
            className="bg-white shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center"
          >
            <Sign name={data.ascendant} color="text-zinc-800" />
            {data.ascendant} Rising
          </span>
          {divideParagrahIntoSubPara(data.report, 60).map((item, i) => (
            <p key={i} className="text-zinc-700 sm:text-base text-sm">
              {item}
            </p>
          ))}
          {/* <p className="text-zinc-700 sm:text-base text-sm">{data.report}</p> */}
        </div>
      )}
    </>
  );
}

export function House_cusps_report({ data }) {
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Loader2 />
      ) : (
        <div className="flex flex-col gap-5">
          {data.map((item, i) => (
            <div
              className={`${
                SignBgColor[item.planet_name.toLowerCase()]
              } gap-5  md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
            >
              <span className="bg-white shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center">
                <Sign
                  size="text-[25px]"
                  name={item.planet_name}
                  color="text-zinc-800"
                />
                {item.planet_name} in {item.house}
                {date(item.house)} House
              </span>
              <p className="text-zinc-700 sm:text-base text-sm">
                {item.report}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export function NatalAspectReport({ data }) {
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Loader2 />
      ) : (
        <div className="flex flex-col gap-5">
          {data.map((item, i) => (
            <div
              className={`${
                typebgColor[item.type.toLowerCase()]
              } gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
            >
              <span className="bg-white shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center">
                <Sign
                  size="text-[25px]"
                  name={item.aspecting_planet}
                  color={PlanetColor[item.aspecting_planet.toLowerCase()]}
                />
                {item.aspecting_planet}{" "}
                <Sign
                  size="text-[25px]"
                  name={item.type}
                  color={typeTextColor[item.type.toLowerCase()]}
                />{" "}
                {item.type}
                <Sign
                  size="text-[25px]"
                  name={item.aspected_planet}
                  color={PlanetColor[item.aspected_planet.toLowerCase()]}
                />{" "}
                {item.aspected_planet}
              </span>
              <p className="text-zinc-700 sm:text-base text-sm">
                {item.report}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export function Natal_house_cusp_report({ data }) {
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Loader2 />
      ) : (
        <div className="flex flex-col gap-5">
          {data?.map((item, i) => (
            <div
              className={`${colorPlanet[i]} gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
            >
              <span className="bg-white shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center">
                {item.house}
                {date(item.house)} House start at {getDMS(item.degree)}{" "}
                {item.sign}
              </span>
              <p className="text-zinc-700 sm:text-base text-sm">
                {item.report}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
}

export function Planet_sign_report({ data }) {
  return (
    <>
      {Object.keys(data).length === 0 ? (
        <Loader2 />
      ) : (
        <div className="flex flex-col gap-5">
          {data?.map((item, i) => (
            <div
              className={`${colorPlanet[i]} gap-5 md:p-10 p-5 rounded-[15px] flex flex-col items-start`}
            >
              <span
                style={{ lineHeight: 1.2 }}
                className="bg-white  shadow-lg px-3 py-1 rounded-[15px] gap-2 font-semibold flex items-center"
              >
                <Sign
                  size="text-[25px]"
                  name={item.planet_name}
                  color="text-zinc-800"
                />
                {item.planet_name} in{" "}
                <Sign
                  size="text-[25px]"
                  name={item.sign_name}
                  color="text-zinc-800"
                />
                {item.sign_name}
              </span>
              {divideParagrahIntoSubPara(item.report, 65).map((text, i) => (
                <p key={i} className="text-zinc-700 sm:text-base text-sm">
                  {text}
                </p>
              ))}
              {/* <p className="text-zinc-700 sm:text-base text-sm">
                {item.report}
              </p> */}
            </div>
          ))}
        </div>
      )}
    </>
  );
}

function date(number) {
  if (number == 1) {
    return "st";
  } else if (number == 2) {
    return "nd";
  } else if (number == 3) {
    return "rd";
  } else if (number > 3) {
    return "th";
  }
}

export function divideParagrahIntoSubPara(para, maxWord) {
  const maxWords = maxWord; // maximum number of words per sub-paragraph

  const words = para.split(/\s+/);
  const subParagraphs = [];

  for (let i = 0; i < words.length; i += maxWords) {
    // loop through words in increments of maxWords
    subParagraphs.push(words.slice(i, i + maxWords).join(" "));
    // add a sub-paragraph containing maxWords words to the array
  }

  return subParagraphs;
}
