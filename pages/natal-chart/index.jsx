import { Button } from "@/components/cards/calculatorCard";
import useForm from "@/components/context/useForm";
import Form2 from "@/components/form/form";
import React, { useEffect, useState } from "react";
import BirthReport from "./report";

export const initialvalue = {
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
  button: "Create free Natal Chart",
};

export default function NatalChart() {
  const { natal, adduserdata, deleteuserdata } = useForm();
  const [userData, setUserdata] = useState({});

  useEffect(() => {
    if (natal) {
      setUserdata(natal);
    }
  }, [natal]);

  const handleData = (data) => {
    adduserdata({ natal: data });
  };

  const handleForm = (val) => {
    deleteuserdata({ [val]: null });
    setUserdata({});
  };

  return (
    <div className="px-5 bg-gradient-to-tl dark:from-transparent dark:to-transparent from-[#EDF1F4]/20 to-[#C3CBDC]/20 md:py-24 py-20 flex flex-col gap-14 items-center">
      <Button url="/" />
      {Object.keys(userData).length > 0 ? (
        <BirthReport handleForm={handleForm} userdata={userData} />
      ) : (
        <>
          <div className=" text-center">
            <h1 className="md:text-5xl font-bold text-4xl dark:text-white text-zinc-800">
              Natal Chart
            </h1>
            <p className="dark:text-zinc-300 text-zinc-700 md:text-lg mt-5 max-w-3xl">
              Calculate the position of the planets at your birth and unlock the
              hidden patterns and potentials that shape your life's journey.
              Gain valuable insight into your purpose, personality, and
              opportunities for growth and transformation today
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
