import { Button } from "@/components/cards/calculatorCard";
import { signs } from "@/components/horoscope/horoscopeCards";
import React, { useCallback, useState } from "react";
import style from "../../styles/Home.module.css";
import { Loader2 } from "@/components/utils/loader";
import { ZodiacPartnerCompatibility } from "@/components/calculator/zodiacCompatibility/responseCalculator";
import { FetchApi } from "@/components/utils/fetchapi";

export default function ZodiacCompatibility() {
  const [state, setState] = useState({ zodiac1: "aries", zodiac2: "gemini" });
  const [response, setResponse] = useState({});
  const [loader, setLoader] = useState(false);

  const handleZodiacSign = (e, key) => {
    const { value } = e.target;
    setState((prev) => ({ ...prev, [key]: value }));
  };

  const handleSubmit = useCallback(async () => {
    await API();
  }, []);

  const API = async () => {
    setLoader(true);
    const ApiCall = await FetchApi({
      apiName: `zodiac_compatibility/${state.zodiac1}/${state.zodiac2}`,
    });
    if (ApiCall) {
      setResponse(ApiCall);
      setLoader(false);
    }
  };

  return (
    <>
      {loader ? (
        <Loader2 />
      ) : (
        <div className="md:py-24 py-20 px-5">
          <Button url="/" />
          {Object.keys(response).length > 0 ? (
            <ZodiacPartnerCompatibility data={response} />
          ) : (
            <>
              <div className="max-w-4xl text-center mx-auto flex flex-col gap-5">
                <h1 className="md:text-5xl text-4xl font-bold dark:text-white text-zinc-800">
                  Zodiac Comaptibility
                </h1>
                <p className="md:text-lg max-w-3xl mx-auto dark:text-zinc-300 text-zinc-700">
                  Find out if you and your love interest or partner are soul
                  mates, best friends, or a recipe for disaster. But no fear -
                  even opposites can attract. Find out how you fare now.
                </p>
              </div>
              <div className="md:mt-10 flex flex-col gap-14 items-center">
                <div className="mt-14 items-center max-w-lg mx-auto flex gap-10 md:gap-20 justify-center">
                  <div className="flex w-full flex-col items-center justify-center gap-5 md:gap-7">
                    <div
                      className={`bg-pink-400 md:p-7 p-5 border max-w-max mx-auto  shadow-lg shadow-rose-300/30 cursor-pointer rounded-full`}
                    >
                      <span>
                        <img
                          className="w-[80px]"
                          src={`/zodiac/${state.zodiac1}.svg`}
                          alt={`${state.zodiac1}`}
                        />
                      </span>
                    </div>

                    <select
                      onChange={(e) => handleZodiacSign(e, "zodiac1")}
                      className={`w-full px-5 border border-zinc-300 dark:border-zinc-500 rounded-md dark:text-white text-zinc-800 py-2 ${style.select2}`}
                    >
                      {signs.map((item, i) => (
                        <option key={i} value={item.toLowerCase()}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="w-full md:w-[90%]">
                    <img src="/imgs/heart.png" className="w-full" />
                  </div>
                  <div className="flex w-full flex-col items-center justify-center gap-5">
                    <div
                      className={`bg-pink-400 md:p-7 p-5 border max-w-max mx-auto  shadow-lg shadow-rose-300/30 cursor-pointer rounded-full`}
                    >
                      <span>
                        <img
                          className="w-[80px]"
                          src={`/zodiac/${state.zodiac2}.svg`}
                          alt={`${state.zodiac2}`}
                        />
                      </span>
                    </div>

                    <select
                      onChange={(e) => handleZodiacSign(e, "zodiac2")}
                      className={`w-full px-5 border border-zinc-300 dark:border-zinc-500 rounded-md dark:text-white text-zinc-800 py-2 ${style.select2}`}
                    >
                      {signs.map((item, i) => (
                        <option key={i} value={item.toLowerCase()}>
                          {item}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                <button
                  onClick={handleSubmit}
                  style={{
                    backgroundImage:
                      "linear-gradient(75deg,#e8dd8e,#f5f8cd 30%,#b57d26 95%)",
                  }}
                  className="py-3  hover:scale-[1.05] ease-in duration-100 max-w-sm rounded-full px-10 w-full font-bold"
                >
                  Get Your Compatibility
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
}
