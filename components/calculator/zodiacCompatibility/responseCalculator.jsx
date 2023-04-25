import { FetchApi } from "@/components/utils/fetchapi";
import { Sign, getDMS } from "@/components/utils/gtmSign";
import { Loader2 } from "@/components/utils/loader";
import React, { useEffect, useState } from "react";
import { ProfileCard22 } from "../utils";
import { reverseRequest } from "../synastryResponse";
// import CircularProgressBar from "@/components/animation/circularProgress";
import PieChart from "@/components/animation/circularProgress";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
const DynamicPieChart = dynamic(
  () => import("@/components/animation/circularProgress"),
  { ssr: false }
);

export function Romantic_personality_report_response({ userdata, handleForm }) {
  const [response, setResponse] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (userdata) {
      API();
    }
  }, [userdata]);

  const API = async () => {
    const ApiCall = await FetchApi({
      apiName: "romantic_personality_report/tropical",
      userData: userdata,
    });
    setResponse(ApiCall);
    setLoader(false);
  };

  return (
    <>
      {loader ? (
        <Loader2 />
      ) : (
        <div className="w-full flex flex-col md:gap-10 gap-5">
          <h2 className="text-center md:text-5xl text-4xl font-semibold dark:text-white text-zinc-800">
            Romantic Personality Report
          </h2>
          <div className="mt-5 dark:border-zinc-500 border-zinc-500 mx-auto w-full border-b">
            <ProfileCard22
              handleForm={handleForm}
              userDetail={userdata}
              link="/"
            />
          </div>
          <div className="flex flex-col gap-5">
            {response?.report?.map((item, i) => (
              <p
                key={i}
                className="md:text-lg dark:text-zinc-300 text-zinc-700 text-base"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export function Karma_destiny_response({ userdata, handleForm }) {
  const [response, setResponse] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (userdata) {
      API();
    }
  }, [userdata]);

  const API = async () => {
    const ApiCall = await FetchApi({
      apiName: "karma_destiny_report/tropical",
      userData: userdata,
    });
    setResponse(ApiCall);
    setLoader(false);
  };

  return (
    <>
      {loader ? (
        <Loader2 />
      ) : (
        <div className="max-w-2xl mx-auto flex flex-col md:gap-10 gap-5">
          <h2 className="text-center md:text-5xl text-4xl font-semibold dark:text-white text-zinc-800">
            Karma Destiny Report
          </h2>
          <div className="mt-5 dark:border-zinc-500 border-zinc-500 mx-auto w-full border-b">
            <ProfileCard22
              handleForm={handleForm}
              userDetail={reverseRequest(userdata)}
              link="/"
            />
            <ProfileCard22
              hidebtn={true}
              handleForm={handleForm}
              userDetail={reverseRequest(userdata, true)}
              link="/"
            />
          </div>
          <div className="flex flex-col gap-5">
            {response?.karma_destiny_report?.map((item, i) => (
              <p
                key={i}
                className="md:text-lg dark:text-zinc-300 text-zinc-700 text-base"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export function Friendship_report_response({ userdata, handleForm }) {
  const [response, setResponse] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (userdata) {
      API();
    }
  }, [userdata]);

  const API = async () => {
    const ApiCall = await FetchApi({
      apiName: "friendship_report/tropical",
      userData: userdata,
    });
    setResponse(ApiCall);
    setLoader(false);
  };

  return (
    <>
      {loader ? (
        <Loader2 />
      ) : (
        <div className="w-full flex flex-col md:gap-10 gap-5">
          <h2 className="text-center md:text-5xl text-4xl font-semibold dark:text-white text-zinc-800">
            Friendship Report
          </h2>
          <div className="mt-5 dark:border-zinc-500 border-zinc-500 mx-auto w-full border-b">
            <ProfileCard22
              handleForm={handleForm}
              userDetail={reverseRequest(userdata)}
              link="/"
            />
            <ProfileCard22
              hidebtn={true}
              handleForm={handleForm}
              userDetail={reverseRequest(userdata, true)}
              link="/"
            />
          </div>
          <div className="flex flex-col gap-5">
            {response?.friendship_report?.map((item, i) => (
              <p
                key={i}
                className="md:text-lg dark:text-zinc-300 text-zinc-700 text-base"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

export function Personality_report_response({ userdata, handleForm }) {
  const [response, setResponse] = useState({});
  const [planets, setPlanets] = useState({});
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    if (userdata) {
      API();
    }
  }, [userdata]);

  const API = async () => {
    const ApiCall = await FetchApi({
      apiName: "personality_report/tropical",
      userData: userdata,
    });
    const ApiDetail = await FetchApi({
      apiName: "planets/tropical",
      userData: userdata,
    });
    setResponse(ApiCall);
    setPlanets(ApiDetail);
    setLoader(false);
  };

  return (
    <>
      {loader ? (
        <Loader2 />
      ) : (
        <div className="w-full flex flex-col md:gap-10 gap-5">
          <h2 className="text-center md:text-5xl text-4xl font-semibold dark:text-white text-zinc-800">
            Personality Report
          </h2>
          <div className="mt-5 dark:border-zinc-500 border-zinc-500 mx-auto w-full border-b">
            <ProfileCard22
              handleForm={handleForm}
              userDetail={userdata}
              link="/"
            />
          </div>
          <div className="flex flex-col gap-5 mt-5">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-5 ">
              <SignCalculator
                data={planets[0]}
                bg="bg-gradient-to-tl from-yellow-300 to-amber-200"
              />
              <SignCalculator
                bg="bg-gradient-to-tl from-blue-300 to-violet-200"
                data={planets[1]}
              />
              <SignCalculator
                bg="bg-gradient-to-tl from-rose-300 to-pink-200 md:col-span-1 col-span-2"
                data={planets[10]}
              />
            </div>

            <div className="px-5 mt-5 shadow shadow-zinc-100/20 py-3 rounded-md dark:bg-c_light_dark dark:border-transparent border-2 border-lime-500">
              <p className="dark:text-c_yellow md:text-lg font-medium">
                {response?.spiritual_lesson}
              </p>
            </div>
            {response?.report?.map((item, i) => (
              <p
                key={i}
                className="md:text-lg dark:text-zinc-300 text-zinc-700 text-base"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      )}
    </>
  );
}

function SignCalculator({ data, bg, color }) {
  return (
    <>
      <div className={`${bg} p-5 rounded-md w-full`}>
        <h6 className="font-medium">
          {data.name} in {data.sign}
        </h6>
        <div className="flex  items-center gap-5">
          <Sign color={color} name={data.name} size="text-[30px]" />
          <span className={color}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </span>
          <Sign color={color} name={data.sign} size="text-[30px]" />
        </div>
        <p className="text-right">{getDMS(data.normDegree)}</p>
      </div>
    </>
  );
}

export function ZodiacPartnerCompatibility({ data }) {
  const router = useRouter();
  return (
    <div className="max-w-5xl flex md:flex-row flex-col gap-24 items-start mx-auto">
      <div className="w-full flex flex-col gap-10 sm:gap-14">
        <h2
          style={{ lineHeight: 1.3 }}
          className="text-center md:text-4xl text-3xl font-bold dark:text-white text-zinc-800"
        >
          {data.your_sign} Love Relationship with {data?.your_partner_sign}
        </h2>
        <div className="flex md:max-w-md w-full rounded-[20px] p-8 md:p-10 bg-gradient-to-tl from-pink-400 to-red-300 items-center gap-10 mx-auto">
          <span className="w-full sm:w-[100px]">
            <img
              className="w-10/12 sm:w-full"
              src={`/zodiac/${data?.your_sign.toLowerCase()}.svg`}
              alt={`${data?.your_sign}`}
            />
          </span>
          <div className="bg-white p-5 flex justify-center items-center w-[60px] h-[60px] sm:w-[80px] sm:h-[80px] rounded-full">
            <h6 className="md:text-2xl text-xl font-bold text-zinc-800">
              {data?.compatibility_percentage}%
            </h6>
          </div>
          {/* <DynamicPieChart /> */}
          <span className="w-full sm:w-[100px]">
            <img
              className="w-10/12 sm:w-full"
              src={`/zodiac/${data?.your_partner_sign.toLowerCase()}.svg`}
              alt={`${data?.your_partner_sign}`}
            />
          </span>
        </div>

        {/* <CircularProgressBar value={data1.compatibility_percentage} max={100} /> */}
        <p className="md:text-lg dark:text-zinc-300 text-zinc-700">
          {data.compatibility_report}
        </p>
      </div>
      <div className="md:mt-24 flex gap-4 flex-col items-center text-center bg-gradient-to-tr p-5 rounded-[10px] sm:max-w-[350px] w-full from-fuchsia-200 to-indigo-300">
        <h2 className="font-semibold md:text-2xl text-xl">Daily Tarot</h2>
        <p className="md:text-base mb-1">
          Start your day with this reading to get psyched for all the
          possibilities.
        </p>
        <img src="/imgs/tarot-card.png" className="w-[150px]" />
        <button
          onClick={() => router.push("tarot")}
          className="bg-white w-full px-10 md:text-lg py-2 rounded-md hover:bg-indigo-400"
        >
          Check Now
        </button>
      </div>
    </div>
  );
}
