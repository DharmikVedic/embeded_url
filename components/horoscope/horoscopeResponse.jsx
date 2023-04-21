import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { Loader2 } from "../utils/loader";
import { Sign } from "../utils/gtmSign";
import { CommonCardPage, signs } from "./horoscopeCards";
import { FetchApi } from "../utils/fetchapi";
import { Button } from "../cards/calculatorCard";

export default function HoroscopeHome({ signsName }) {
  const [response, setResponse] = useState({
    status: true,
    sun_sign: "aries",
    prediction_date: "19-4-2023",
    prediction: {
      personal_life:
        "Love interests that arise are mostly flings or possibly friends with benefits flings, which help you to cash into the spirit of the season without thinking about commitment.",
      profession:
        "A favourable time to invest in art, jewellery or stocks and shares to do with retail or the entertainment industry.",
      health:
        "While you are feeling rather relaxed and happy, decisions about the long term are weighing heavy and causing you some stress and so do not cross your bridges until you come to them as much can still happen.",
      travel: "Travel is favored if it is in connection with a public role.",
      luck: "You are lucky in the area of recognition and reward.",
      emotions: "Emotionally, the Moon brings acceptance and inner peace.",
    },
  });

  const router = useRouter();

  const handleSelectZodiac = async (e) => {
    const { title } = e.currentTarget;
    // await router.push(`${title.toLowerCase()}-daily-horoscope`);
  };

  useEffect(() => {
    //apiCall();
  }, []);

  const apiCall = async () => {
    const Dailyapi = { apiName: `sun_sign_prediction/daily/${signsName}` };
    const Dailyresponse = await FetchApi({ ...Dailyapi });
    setResponse(Dailyresponse);
  };

  return (
    <div>
      <Button url="/" />
      {Object.keys(response).length !== 0 ? (
        <div className="px-5 flex flex-col gap-10 md:gap-20 md:py-24 py-14">
          <h1 className="max-w-5xl dark:text-white mx-auto font-semibold capitalize md:text-[2.8rem] text-3xl">
            {signsName} Daily Horoscope Prediction
          </h1>
          <div className="flex md:flex-row flex-col max-w-5xl  mx-auto items-start md:gap-20 gap-0">
            <div className="flex flex-col gap-10">
              <CommonCardPage data={response} />
            </div>

            <div
              className={`w-full md:max-w-[300px]  flex flex-col border border-zinc-300 divide-zinc-300 dark:border-[#FAE8BC] dark:divide-[#FAE8BC] divide-y`}
            >
              {signs.map((item, i) => (
                <div
                  key={i}
                  title={item}
                  onClick={handleSelectZodiac}
                  className={`flex dark:text-zinc-300 dark:hover:text-zinc-800 hover:text-zinc-800 hover:bg-[#FAE8BC] gap-2 duration-100 ease-in cursor-pointer justify-between  items-center md:text-lg md:py-3 py-1 px-5`}
                >
                  <div className="flex  gap-2 items-center">
                    <Sign
                      size="md:text-[35px] text-[30px]"
                      name={item}
                      color="text-current"
                    />
                    <h4>{item}</h4>
                  </div>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="w-5 h-5"
                    >
                      <path
                        fillRule="evenodd"
                        d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <Loader2 />
      )}
    </div>
  );
}
