import { Romantic_personality_report_response } from "@/components/calculator/zodiacCompatibility/responseCalculator";
import { Button } from "@/components/cards/calculatorCard";
import useForm from "@/components/context/useForm";
import Form2 from "@/components/form/form";
import React, { useEffect, useState } from "react";

export default function TransitChart() {
  const { romantic_personality, adduserdata, deleteuserdata } = useForm();
  const [userData, setUserdata] = useState({});

  const initialvalue = {
    name: "",
    place: "",
    day: "",
    month: "",
    year: "",
    min: "",
    hour: "",
    gender: "male",
    tzone: 5.5,
    place: "",
    country: "India",
    email: "",
  };

  const formKeys = {
    date: "My date of birth is",
    place: "I was born in",
    email: "Enter Your Email",
    name: "My name is",
    button: "Check your romantic personality",
  };

  useEffect(() => {
    if (romantic_personality) {
      setUserdata(romantic_personality);
    }
  }, [romantic_personality]);

  const handleData = (data) => {
    adduserdata({ romantic_personality: data });
  };

  const handleForm = (val) => {
    deleteuserdata({ [val]: null });
    setUserdata({});
  };

  return (
    <div className="px-5 bg-gradient-to-tl dark:from-transparent dark:to-transparent from-[#EDF1F4]/20 to-[#C3CBDC]/20 md:py-24 py-20 flex flex-col gap-14 items-center">
      <Button url="/" />
      {Object.keys(userData).length > 0 ? (
        <div className="max-w-6xl mx-auto md:flex-row flex-col flex md:gap-14 gap-14 items-start">
          <Romantic_personality_report_response
            userdata={userData}
            handleForm={handleForm}
          />
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
      ) : (
        <>
          <div className=" text-center flex flex-col gap-5">
            <h1 className="md:text-5xl font-bold text-4xl dark:text-white text-zinc-800">
              Romentic Personality
            </h1>
            <p className="md:text-lg max-w-3xl mx-auto dark:text-zinc-300 text-zinc-600">
              If you've ever wondered about the cosmic connection between you
              and someone special, the Synastry Calculator is here to reveal
              all! Explore the unique astrological aspects that define your bond
              and gain valuable insights into how to navigate your relationship
              with ease. Don't leave your cosmic compatibility to chance - try
              the Synastry Calculator today!
            </p>
          </div>

          <Form2
            passData={handleData}
            formKey={formKeys}
            initialValues={initialvalue}
          />
        </>
      )}
    </div>
  );
}
