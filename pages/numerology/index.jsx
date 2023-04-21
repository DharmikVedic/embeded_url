import { Button } from "@/components/cards/calculatorCard";
import useForm from "@/components/context/useForm";
import NumerologyForm from "@/components/form/numerologyForm";
import { FetchApi } from "@/components/utils/fetchapi";
import { Loader2 } from "@/components/utils/loader";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function Numerlogy() {
  const router = useRouter();
  let initialValue = {
    full_name: "",
    date: "",
    month: "",
    year: "",
  };
  const { numerology, adduserdata, deleteuserdata } = useForm();

  const [loader, setLoader] = useState(false);
  const [userData, setUserData] = useState(initialValue);
  const [response, setResponse] = useState(null);

  useEffect(() => {
    const { asPath } = router;
    const splitDate = asPath.split("?");
    if (splitDate.length >= 2) {
      const splitd = splitDate[1].split("=");
      if (splitd.length >= 2) {
        const splitdd = splitd[1].split("-");
        setUserData((prev) => ({
          ...prev,
          date: splitdd[0],
          month: splitdd[1],
          year: splitdd[2],
        }));
      }
    }
    if (numerology) {
      setUserData(numerology);
    }
  }, [numerology]);

  const handleData = (data) => {
    adduserdata({ numerology: data });
    fetchdata(data);
  };

  const handleForm = (val) => {
    deleteuserdata({ [val]: null });
    setUserData(initialValue);
    setResponse(null);
  };

  const fetchdata = async (e) => {
    const ApiCall = await FetchApi({
      apiName: "numerological_numbers",
      userData: e,
    });
    setResponse(ApiCall ? ApiCall : null);
    setLoader(false);
  };

  return (
    <div className="md:py-28 py-20 px-5">
      <Button url="/" />
      {!response && !loader ? (
        <div className="flex flex-col gap-14">
          <div className="flex flex-col gap-5 max-w-4xl mx-auto text-center ">
            <h1
              style={{ lineHeight: 1.1 }}
              className="md:text-6xl text-4xl sm:text-5xl text-zinc-800 dark:text-white text-center font-bold"
            >
              Numerology Predictions
            </h1>
            <p className="md:text-lg dark:text-zinc-300 text-zinc-700">
              Unveil the secrets of the universe and reveal your true identity
              and hidden meanings of the world. Numerology provides predictions
              and helps realize potential, like a secret roadmap to life.
            </p>
          </div>
          <NumerologyForm
            initialValue={userData}
            button_text="Calculate Your Numerology"
            passdata={handleData}
          />
        </div>
      ) : (
        <>
          {loader ? (
            <div className="mt-[100px]">
              <Loader2 />
            </div>
          ) : (
            <div className="flex flex-col gap-14 w-full">
              <div className="flex max-w-3xl mx-auto border-b border-light_bg/50  w-full pb-10 gap-6  items-start">
                <div className="flex flex-col gap-4">
                  <h6 className=" text-zinc-800 dark:text-zinc-200 md:text-lg">
                    {response?.name}
                  </h6>
                  <h6 className="text-zinc-700 dark:text-zinc-200">
                    {Callculatedate(response?.birth_date)}
                  </h6>
                </div>
                <button
                  onClick={() => {
                    handleForm("numerology");
                  }}
                  className="duration-100 ease-in hover:bg-white hover:text-zinc-800  text-zinc-500 dark:text-white p-1 rounded-full"
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
              <div className="max-w-3xl mx-auto flex flex-col gap-5 ">
                <FavorableTable
                  name="Life path number"
                  color="bg-gradient-to-r from-blue-200 to-blue-300"
                  desc={`Your life path number is ${response?.lifepath_number}. It represents both the situation and opportunities that are attracted to you as the result of your actions.`}
                  value={response?.lifepath_number}
                />
                <FavorableTable
                  name="Personality Number"
                  color="bg-gradient-to-r from-pink-200 to-pink-300"
                  desc={`Your Personality number also called as Persona is ${response?.personality_number}. Personality Number is compliment to the inner aspect of the self.`}
                  value={response?.personality_number}
                />
                <FavorableTable
                  name="Expression Number"
                  color="bg-gradient-to-r from-purple-200 to-purple-300"
                  desc={`Your Expression Number or Total Name Number is ${response?.expression_number}. It describes the magic that you bring into the world.`}
                  value={response?.expression_number}
                />
                <FavorableTable
                  name="Challenge Numbers"
                  color="bg-gradient-to-r from-red-200 to-red-300"
                  value={response?.challenge_numbers.join(",")}
                />
                <FavorableTable
                  name=" Soul Urge Number "
                  color="bg-gradient-to-r from-yellow-100 to-yellow-300"
                  value={response?.subconscious_self_number}
                />
                <FavorableTable
                  name="Subconscious Self Number"
                  color="bg-gradient-to-r from-indigo-200 to-indigo-300"
                  value={response?.subconscious_self_number}
                />
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export function FavorableTable(props) {
  const color = props.color || "";
  return (
    <div
      className={`${color} flex rounded-[10px] md:p-10 p-5 text-left justify-between text-sm`}
    >
      <div className="flex flex-col gap-4">
        <h6 className=" font-semibold text-gray-800 md:text-2xl text-xl w-full">
          {props.name}
        </h6>
        {props.desc && (
          <p
            className="md:text-lg max-w-xl"
            dangerouslySetInnerHTML={{ __html: props.desc }}
          ></p>
        )}
      </div>
      <p className="text-center md:text-4xl text-2xl sm:text-3xl text-gray-800">
        {props.value}
      </p>
    </div>
  );
}

export const Callculatedate = (d) => {
  const s = d.split("-");
  return monthobj2[s[1]] + " " + s[2] + ", " + s[0];
};

export let monthobj2 = {
  1: "Jan",
  2: "Feb",
  3: "Mar",
  4: "Apr",
  5: "May",
  6: "June",
  7: "July",
  8: "Aug",
  9: "Sept",
  10: "Oct",
  11: "Nov",
  12: "Dec",
};
