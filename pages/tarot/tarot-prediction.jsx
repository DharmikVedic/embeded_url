import { Button } from "@/components/cards/calculatorCard";
import { FetchApi } from "@/components/utils/fetchapi";
import { Loader2 } from "@/components/utils/loader";
import React, { useCallback, useState } from "react";
import { tarots } from "./yes-no-tarot1";

export default function TarotPrediction() {
  const [response, setResponse] = useState({});
  const [loader, setLoader] = useState(false);
  const [prediction, setPrediction] = useState({
    love: 1,
    career: 1,
    finance: 1,
  });
  const [torot, settarot] = useState({
    love: false,
    career: false,
    financial: false,
  });

  const handleTarot = (e) => {
    const { title } = e.currentTarget;
    settarot((prev) => ({ ...prev, [title.toLowerCase()]: true }));
  };

  const Call = useCallback(() => APICall(), []);

  const APICall = async () => {
    setLoader(true);

    const obj = {
      love: randomIntArrayInRange(1, 26, 1),
      finance: randomIntArrayInRange(27, 52, 1),
      career: randomIntArrayInRange(53, 78, 1),
    };

    const tarot = await FetchApi({
      apiName: "tarot_predictions",
      userData: obj,
    });
    setPrediction(obj);
    setResponse(tarot);
    setLoader(false);
  };

  return (
    <div>
      <style jsx>
        {`
          .arrow {
            position: relative;
          }
          .arrow:before {
            position: absolute;
            content: "";
            top: 100%;
            left: 50%;
            transform: translateX(-50%);
            border: 10px solid;
            border-color: #4d8fcc transparent transparent;
          }
        `}
      </style>

      <div className="md:py-24 py-14">
        <Button url="/tarot" />
        {loader ? (
          <Loader2 />
        ) : (
          <>
            {Object.keys(response).length === 0 ? (
              <div className="md:mt-0 px-5 mt-14 flex flex-col">
                <div className="flex flex-col mx-auto gap-5 text-center max-w-4xl">
                  <h1 className="md:text-5xl font-bold text-4xl text-center dark:text-white">
                    Tarot Prediction
                  </h1>
                  <p className="md:text-lg text-zinc-700 dark:text-zinc-300">
                    Insight into Your Future: Get a Free Tarot Reading for Your
                    Love, Career, and Financial Path
                  </p>
                  <h6 className="mt-5 md:text-lg arrow border border-blue-400 max-w-max mx-auto px-10 py-1.5 rounded-full text-lg text-blue-400">
                    Draw a 3 cards
                  </h6>
                </div>

                <div className=" grid mt-10 grid-cols-3 max-w-4xl mx-auto gap-3 sm:gap-5 md:gap-10">
                  <TarotCardReveal
                    title="Love"
                    img1="tarotcard.png"
                    img2="34.jpg"
                    reveal={torot.love}
                    handle={handleTarot}
                  />
                  <TarotCardReveal
                    title="Career"
                    img1="tarotcard.png"
                    img2="34.jpg"
                    reveal={torot.career}
                    handle={handleTarot}
                  />

                  <TarotCardReveal
                    title="Financial"
                    img1="tarotcard.png"
                    img2="34.jpg"
                    reveal={torot.financial}
                    handle={handleTarot}
                  />
                </div>

                {torot.love && torot.career && torot.financial && (
                  <button
                    onClick={Call}
                    style={{
                      backgroundImage:
                        "linear-gradient(75deg,#e8dd8e,#f5f8cd 20%,#b57d26 85%)",
                    }}
                    className="mt-10 hover:scale-[1.04] duration-100 ease-in mx-auto w-full max-w-[300px] px-10 py-3 font-semibold rounded-md"
                  >
                    Show Tarot Reading
                  </button>
                )}
              </div>
            ) : (
              <div className=" max-w-5xl divide-y dark:divide-zinc-500 divide-zinc-300 mx-auto flex flex-col">
                <TarotResponseCard
                  data={response.love}
                  number={prediction.love}
                />
                <TarotResponseCard
                  data={response.finance}
                  number={prediction.career}
                />
                <TarotResponseCard
                  data={response.career}
                  number={prediction.finance}
                />
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

function TarotCardReveal({ img1, img2, reveal, handle, title }) {
  return (
    <div
      title={title}
      className="cursor-pointer flex  flex-col gap-3 items-center"
      onClick={handle}
    >
      <span className="md:text-xl capitalize dark:text-white text-zinc-800">
        {title}
      </span>
      <img
        className={`w-full h-[400px] duration-100 ease-in group-hover:shadow-2xl  group-hover:shadow-white/60 group-hover:-translate-y-2`}
        src={`/imgs/${reveal ? img2 : img1}`}
        alt="tarot"
      />
    </div>
  );
}

function TarotResponseCard({ data, number }) {
  return (
    <div className="flex md:py-20 py-14 md:flex-row flex-col md:gap-14 gap-10 items-center ">
      <div className="w-full max-w-[280px]">
        <img src="/imgs/34.png" className="w-full" alt="tarot" />
      </div>
      <div className="w-full">
        <h2 className="font-semibold md:text-2xl text-xl mb-5 text-zinc-800 dark:text-white ">
          Card : {getTarotName(number)}
        </h2>
        <p className=" text-para flex flex-col gap-2 dark:text-zinc-300 text-zinc-700">
          {data}
        </p>
      </div>
    </div>
  );
}

const randomIntArrayInRange = (min, max, n = 1) =>
  Array.from(
    { length: n },
    () => Math.floor(Math.random() * (max - min + 1)) + min
  );

function getTarotName(id) {
  const a = tarotCards.filter((item) => item.id == id);
  return a[0]?.tarot_name;
}

const tarotCards = [
  { id: "1", tarot_name: "KING OF WANDS" },

  { id: "2", tarot_name: "QUEEN OF WANDS" },

  { id: "3", tarot_name: "KNIGHT OF WANDS" },

  { id: "4", tarot_name: "PAGE OF WANDS" },

  { id: "5", tarot_name: "TEN OF WANDS" },

  { id: "6", tarot_name: "NINE OF WANDS" },

  { id: "7", tarot_name: "EIGHT OF WANDS" },

  { id: "8", tarot_name: "SEVEN OF WANDS" },

  { id: "9", tarot_name: "SIX OF WANDS" },

  { id: "10", tarot_name: "FIVE OF WANDS" },

  { id: "11", tarot_name: "FOUR OF WANDS" },

  { id: "12", tarot_name: "THREE OF WANDS" },

  { id: "13", tarot_name: "TWO OF WANDS" },

  { id: "14", tarot_name: "ACE OF WANDS" },

  { id: "15", tarot_name: "KING OF SWORDS" },

  { id: "16", tarot_name: "QUEEN OF SWORDS" },

  { id: "17", tarot_name: "KNIGHT OF SWORDS" },

  { id: "18", tarot_name: "PAGE OF SWORDS" },

  { id: "19", tarot_name: "TEN OF SWORDS " },

  { id: "20", tarot_name: "NINE OF SWORDS" },

  { id: "21", tarot_name: "EIGHT OF SWORDS" },

  { id: "22", tarot_name: "SEVEN OF SWORDS" },

  { id: "23", tarot_name: "SIX OF SWORDS" },

  { id: "24", tarot_name: "FIVE OF SWORDS" },

  { id: "25", tarot_name: "FOUR OF SWORDS" },

  { id: "26", tarot_name: "THREE OF SWORDS" },

  { id: "27", tarot_name: "TWO OF SWORDS" },

  { id: "28", tarot_name: "ACE OF SWORDS" },

  { id: "29", tarot_name: "KING OF CUPS" },

  { id: "30", tarot_name: "QUEEN OF CUPS" },

  { id: "31", tarot_name: "KNIGHT OF CUPS" },

  { id: "32", tarot_name: "PAGE OF CUPS" },

  { id: "33", tarot_name: "TEN OF CUPS " },

  { id: "34", tarot_name: "NINE OF CUPS" },

  { id: "35", tarot_name: "EIGHT OF CUPS" },

  { id: "36", tarot_name: "SEVEN OF CUPS" },

  { id: "37", tarot_name: "SIX OF CUPS" },

  { id: "38", tarot_name: "FIVE OF CUPS" },

  { id: "39", tarot_name: "FOUR OF CUPS" },

  { id: "40", tarot_name: "THREE OF CUPS" },

  { id: "41", tarot_name: "TWO OF CUPS" },

  { id: "42", tarot_name: "ACE OF CUPS " },

  { id: "43", tarot_name: "KING OF PENTACLES" },

  { id: "44", tarot_name: "QUEEN OF PENTACLES" },

  { id: "45", tarot_name: "KNIGHT OF PENTACLES " },

  { id: "46", tarot_name: "PAGE OF PENTACLES" },

  { id: "47", tarot_name: "TEN OF PENTACLES" },

  { id: "48", tarot_name: "NINE OF PENTACLES" },

  { id: "49", tarot_name: "EIGHT OF PENTACLES" },

  { id: "50", tarot_name: "SEVEN OF PENTACLES" },

  { id: "51", tarot_name: "SIX OF PENTACLES" },

  { id: "52", tarot_name: "FIVE OF PENTACLES" },

  { id: "53", tarot_name: "FOUR OF PENTACLES" },

  { id: "54", tarot_name: "THREE OF PENTACLES" },

  { id: "55", tarot_name: "TWO OF PENTACLES" },

  { id: "56", tarot_name: "ACE OF PENTACLES" },

  { id: "57", tarot_name: "THE FOOL" },

  { id: "58", tarot_name: "THE MAGICIAN" },

  { id: "59", tarot_name: "THE HIGH PRIESTESS" },

  { id: "60", tarot_name: "THE EMPERESS" },

  { id: "61", tarot_name: "THE EMPEROR" },

  { id: "62", tarot_name: "THE HIEROPHPANT" },

  { id: "63", tarot_name: "THE LOVERS" },

  { id: "64", tarot_name: "THE CHARIOT" },

  { id: "65", tarot_name: "STRENGTH" },

  { id: "66", tarot_name: "THE HERMIT" },

  { id: "67", tarot_name: "WHEEL OF FORTUNE" },

  { id: "68", tarot_name: "JUSTICE" },

  { id: "69", tarot_name: "THE HANGED MAN" },

  { id: "70", tarot_name: "DEATH" },

  { id: "71", tarot_name: "TEMPERANCE" },

  { id: "72", tarot_name: "THE DEVIL" },

  { id: "73", tarot_name: "THE TOWER" },

  { id: "74", tarot_name: "THE STAR" },

  { id: "75", tarot_name: "THE MOON" },

  { id: "76", tarot_name: "THE SUN" },

  { id: "77", tarot_name: "JUDGEMENT" },

  { id: "78", tarot_name: "THE WORLD" },
];
