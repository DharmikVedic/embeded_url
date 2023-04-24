import { useRouter } from "next/router";
import { useState } from "react";
import { Sign } from "../utils/gtmSign";

export function HoroscopeCalculator({ extra }) {
  const [zodiac, setzodiac] = useState("");
  // const [currentzodiac,setcurrentzodiac] = useState(null);
  const [allsigns, setsigns] = useState(null);
  const signs = [
    "Aries",
    "Taurus",
    "Gemini",
    "Cancer",
    "Leo",
    "Virgo",
    "Libra",
    "Scorpio",
    "Sagittarius",
    "Capricorn",
    "Aquarius",
    "Pisces",
  ];
  const router = useRouter();
  const handleSubmit = (e) => {
    router.push(`/horoscope/${zodiac.toLowerCase()}-daily-horoscope`);
  };

  return (
    <div
      className={`sm:max-w-xs snap-center	${extra} shrink-0 flex flex-col gap-8 rounded p-8 bg-gradient-to-tl from-emerald-600 to-green-300`}
    >
      <h2 className="font-semibold text-xl text-center text-white">
        Choose your Sun Sign based on your date of birth.
      </h2>
      {/*<div>*/}
      <div className="flex flex-col items-center justify-center">
        {!allsigns && (
          <div className="flex items-center flex-col gap-2 text-white uppercase font-cera_medium">
            <button
              onClick={() => setsigns((prev) => !prev)}
              className={`${
                zodiac !== ""
                  ? "bg-emerald-300 shadow-xl"
                  : "hover:bg-emerald-300 hover:shadow-xl"
              } bg-emerald-100 bg-opacity-20 p-4 border max-w-max mx-auto  relative shadow-md cursor-pointer rounded-full`}
            >
              {zodiac == "" ? (
                <img
                  className="w-[40px]"
                  src={`${
                    zodiac !== ""
                      ? `/zodiacImage/${zodiac.toLowerCase()}.svg`
                      : "/icons/question2.svg"
                  }`}
                  alt={zodiac === "" ? "question" : zodiac}
                />
              ) : (
                <div className="flex justify-center items-center w-[40px] h-[40px] rounded-full">
                  <Sign name={zodiac} color="white" size="text-[40px]" />
                </div>
              )}
            </button>
            <span>{zodiac}</span>
          </div>
        )}
        {allsigns && (
          <div className="flex flex-wrap gap-y-1 justify-center gap-x-3">
            {signs.map((item, i) => (
              <button
                onClick={() => {
                  setzodiac(item);
                  setsigns((prev) => !prev);
                }}
                key={i}
                className="underline hover:text-zinc-800 text-[15px] cursor-pointer text-white text-lg "
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
      {/*                <span className="text-white mx-auto relative before:absolute before:h-[1px] before:w-[42%] before:left-[0px] before:bg-white before:top-1/2 before:-translate-y-1/2 after:absolute after:h-[1px] after:w-[42%] after:right-[0px] after:bg-white after:top-1/2 after:-translate-y-1/2 text-center">*/}
      {/*                    OR*/}
      {/*                </span>*/}
      {/*<div>*/}
      {/*    <div  className="text-center flex flex-col gap-4 font-cera_medium">*/}
      {/*        <label className="text-white" htmlFor="date">Enter Your Birth Date</label>*/}
      {/*        <input id="date" onChange={handleDate} min="1900-01-01" max="2100-01-01" placeholder="EX: 03 / 11 / 2022"  pattern="\d{4}-\d{2}-\d{2}" className="border border-zinc-50 hover:border-black outline-none placeholder:text-zinc-100 focus:border-black cursor-text	 max-w-[230px] rounded text-center bg-transparent text-white w-full uppercase appearance-none py-1.5 px-5 text-base" type="date"/>*/}
      {/*    </div>*/}
      {/*    <button onClick={handleDate} type="submit"*/}
      {/*            className="capitalize   border-zinc-50 bg-white/30 text-[15px] text-white border  hover:border-opacity-100 border-opacity-20 hover:shadow-pink-400/60 hover:-translate-y-1 hover:bg-opacity-40 duration-100 ease-in hover:shadow-lg py-2.5 px-4 rounded  font-cera_bold">*/}
      {/*        Get your daily horoscope*/}
      {/*    </button>*/}
      {/*</div>*/}

      <button
        onClick={handleSubmit}
        type="submit"
        disabled={allsigns === null || allsigns === true}
        className={`${
          allsigns === null || allsigns === true
            ? "cursor-not-allowed"
            : "cursor-pointer"
        } capitalize   border-zinc-50 bg-white/30 text-[15px] text-white border  hover:border-opacity-100 border-opacity-20 hover:shadow-emerald-400/60 hover:-translate-y-1 hover:bg-opacity-40 duration-100 ease-in hover:shadow-lg py-2.5 px-4 rounded  font-cera_bold`}
      >
        Get your daily horoscope
      </button>

      {/*</div>*/}
    </div>
  );
}
