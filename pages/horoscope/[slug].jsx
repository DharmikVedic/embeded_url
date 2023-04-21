import { Button } from "@/components/cards/calculatorCard";
import { CommonCardPage, signs } from "@/components/horoscope/horoscopeCards";
import { MonthlyHoroscopeComponent } from "@/components/horoscope/monthlyHoroscope";
import { WeeklyHoroscopeComponent } from "@/components/horoscope/weeklyHoroscope";
import HoroscopeTab, { HoroscopeTopBar } from "@/components/tabui/horoscopeTab";
import { FetchApi } from "@/components/utils/fetchapi";
import { Loader2 } from "@/components/utils/loader";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function HoroscopeSlug({ slug }) {
  const router = useRouter();

  const [loader, setLoder] = useState(true);

  const [active, setActive] = useState({
    sign: "",
    time: "",
  });

  const [response, setResponse] = useState({});

  useEffect(() => {
    setActive({
      sign: SplitLink(slug)[0],
      time: SplitLink(slug)[1],
    });
    apiCall(SplitLink(slug));
  }, [slug]);

  const apiCall = async (data) => {
    if (Array.isArray(data)) {
      setLoder(true);
      const link = {
        daily: "sun_sign_prediction/daily/",
        next: "sun_sign_prediction/daily/next/",
        monthly: "horoscope_prediction/monthly/",
      };
      const Dailyapi = { apiName: `${link[data[1]]}${data[0]}` };
      const Dailyresponse = await FetchApi({ ...Dailyapi });
      setResponse(Dailyresponse);
      setLoder(false);
    }
  };

  const handleSelectZodiac = async (val) => {
    await router.push(`${val.toLowerCase()}-${active.time}-horoscope`);
  };

  const handleTime = async (time) => {
    await router.push(
      `${active.sign.toLowerCase()}-${time.toLowerCase()}-horoscope`
    );
  };

  return (
    <div>
      {/*  tab ui  */}
      <Button url="/" />
      <div className="md:py-24 py-14 flex flex-col w-full gap-10">
        <HoroscopeTopBar
          handleSign={handleSelectZodiac}
          sign={active.sign}
          time={active.time}
        />
        <div className="max-w-6xl items-start w-full px-5 md:gap-20 gap-14 mx-auto flex md:flex-row flex-col">
          <div className="w-full flex flex-col gap-10">
            <HoroscopeTab
              active={active.time}
              handleTime={handleTime}
              tabs={tab}
            />
            {active.time === "monthly" ? (
              <>
                {Object.keys(response).length !== 0 && !loader ? (
                  <MonthlyHoroscopeComponent data={response} />
                ) : (
                  <Loader2 />
                )}
              </>
            ) : (
              <>
                {active.time === "weekly" ? (
                  <>
                    {Object.keys(response).length !== 0 && !loader ? (
                      <WeeklyHoroscopeComponent data={response} />
                    ) : (
                      <Loader2 />
                    )}
                  </>
                ) : (
                  <>
                    {Object.keys(response).length !== 0 && !loader ? (
                      <div className="flex flex-col gap-10">
                        <CommonCardPage data={response} />
                      </div>
                    ) : (
                      <Loader2 />
                    )}
                  </>
                )}
              </>
            )}
          </div>
          <div
            className={`w-full md:max-w-[320px]  flex flex-col mt-8  gap-14`}
          >
            <div className="flex text-center flex-col gap-5 bg-gradient-to-b from-pink-300 to-pink-400 text-white px-5 py-8 rounded">
              <h6 className="md:text-xl text-lg font-semibold ">
                Are you and your love interest meant to be?
              </h6>
              <p>Choose a Sign and find out now!</p>
              <button className="bg-white hover:bg-zinc-800 hover:text-white duration-100 ease-in text-zinc-800 p-2 rounded">
                Check our compatibility
              </button>
            </div>

            <div className="flex items-center flex-col gap-5 bg-gradient-to-b from-rose-300 to-red-400 text-center text-white px-5 py-8 rounded">
              <h6 className="md:text-xl text-lg font-semibold ">
                Chinese Zoadiac
              </h6>
              <img
                className="w-[100px]"
                src="/imgs/chinese.png"
                alt="chinese zodiac"
              />
              <p>
                Learn all about Chinese Zodiac sign to identify your strength
                and weeknesses
              </p>
              <button className="bg-white hover:bg-zinc-800 hover:text-white duration-100 ease-in text-zinc-800 p-2 rounded">
                Check our compatibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function getStaticPaths() {
  let paths = [];
  signs.map((item) => {
    for (let i = 0; i < 4; i++) {
      const slugname = ["daily", "next", "monthly"];
      const url = `${item.toLowerCase()}-${slugname[i]}-horoscope`;
      paths.push({ params: { slug: url } });
    }
  });
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      slug: params.slug,
    },
  };
}

function SplitLink(text) {
  return text.split("-");
}

const tab = [
  { name: "Today", link: "daily" },
  { name: "Tommorrow", link: "next" },
  { name: "Monthly", link: "monthly" },
];
