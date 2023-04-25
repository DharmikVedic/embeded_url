import useMediaSIze from "@/components/context/useMediaDevice";
import { Loader2 } from "../../components/utils/loader";
import React, { useCallback, useState } from "react";
import { Button } from "@/components/cards/calculatorCard";
import { FetchApi } from "@/components/utils/fetchapi";

export default function TarotCard2({ staticData }) {
  const { state } = useMediaSIze();
  const [response, setResponse] = useState({});
  const [loader, setLoader] = useState(false);
  const randomIntArrayInRange = (min, max, n = 1) =>
    Array.from(
      { length: n },
      () => Math.floor(Math.random() * (max - min + 1)) + min
    );

  const Call = useCallback((id) => APICall(id), []);

  const APICall = async (id) => {
    setLoader(true);
    const tarot = await FetchApi({
      apiName: "yes_no_tarot",
      userData: {
        tarot_id: id,
      },
    });

    setResponse(tarot);
    setLoader(false);
  };

  return (
    <>
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
            border-color: #0284c7 transparent transparent;
          }
        `}
      </style>
      <div className="md:py-20 py-20">
        <Button url="/tarot" />
        {loader ? (
          <Loader2 />
        ) : (
          <>
            {Object.keys(response).length == 0 ? (
              <>
                <div className="w-full md:h-[750px] h-[510px]">
                  <div className="max-w-5xl px-5 mx-auto flex flex-col text-center gap-5">
                    <h1 className="md:text-5xl text-4xl text-zinc-800 dark:text-white font-bold">
                      Yes No Tarot Prediction
                    </h1>
                    <p className="md:text-lg dark:text-zinc-300 text-zinc-700">
                      Tarot Magic in Seconds: Your Free Yes/No Tarot Reading
                      Awaits
                    </p>
                    <span className="md:text-base text-sm bg-sky-600 text-white arrow  px-5 md:px-10 py-2 max-w-max rounded-full mx-auto  mt-5">
                      SELECT A CARDS FROM THE DECK BELOW
                    </span>
                    <div className="flex justify-center gap-2 w-full mt-10">
                      {randomIntArrayInRange(1, 22, 10).map((tarot_id, i) => (
                        <div
                          onClick={() => Call(tarot_id)}
                          style={{
                            transform: `translateX(${
                              state ? -120 + i * 20 : -250 + i * 40
                            }px)`,
                          }}
                          key={i}
                          className={`w-[80px] sm:w-[100px] md:w-[150px] left-1/2  absolute  group  cursor-pointer  `}
                        >
                          <img
                            className={`w-full border-2 duration-100 ease-in group-hover:shadow-2xl  group-hover:shadow-white/60 group-hover:-translate-y-3`}
                            src="/imgs/tarotcard.png"
                            alt="tarot"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <div className="max-w-5xl mx-auto flex flex-col md:gap-24 gap-10  px-5">
                <h1 className="md:text-4xl text-zinc-800 dark:text-white text-3xl font-bold text-center">
                  YES OR NO TAROT READING
                </h1>
                <div className="flex md:flex-row flex-col md:gap-14 gap-10 items-center ">
                  <div className="w-full max-w-[300px]">
                    <img src="/imgs/34.png" className="w-full" alt="tarot" />
                  </div>
                  <div className="w-full">
                    <h2 className="font-semibold text-white md:text-2xl text-xl mb-5">
                      {response.name}
                    </h2>
                    <p className="md:text-lg dark:text-zinc-300  text-zinc-700 flex flex-col gap-2">
                      <span className="text-para">{response.value}</span>
                      {response.description}
                    </p>
                    <button
                      onClick={() => setResponse({})}
                      className="mt-5 p-[2px]  rounded-md bg-gradient-to-tl from-sky-400  dark:from-blue-200 to-[#333147]"
                    >
                      <h6 className="bg-[#333147] font-semibold text-white px-10 py-3 rounded-md">
                        Pick up another card
                      </h6>
                    </button>
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export const tarots = [
  { tarot_id: 1, card_name: "The Magician" },
  { tarot_id: 2, card_name: "The Hierophant" },
  { tarot_id: 3, card_name: "The Emperor" },
  { tarot_id: 4, card_name: "Death" },
  { tarot_id: 5, card_name: "The Hermit" },
  { tarot_id: 6, card_name: "The Devil" },
  { tarot_id: 7, card_name: "Temperance" },
  { tarot_id: 8, card_name: "The Fool" },
  { tarot_id: 9, card_name: "The Chariot" },
  { tarot_id: 10, card_name: "Justice" },
  { tarot_id: 11, card_name: "The Judgment" },
  { tarot_id: 12, card_name: "Strength" },
  { tarot_id: 13, card_name: "The Empress" },
  { tarot_id: 14, card_name: "The Wheel of Fortune" },
  { tarot_id: 15, card_name: "The Star" },
  { tarot_id: 16, card_name: "The Moon" },
  { tarot_id: 17, card_name: "The Lovers" },
  { tarot_id: 18, card_name: "The Sun" },
  { tarot_id: 19, card_name: "The Hanged Man" },
  { tarot_id: 20, card_name: "The Tower" },
  { tarot_id: 21, card_name: "The World" },
  { tarot_id: 22, card_name: "The High Priestess" },
];
