import { Karma_destiny_response } from "@/components/calculator/zodiacCompatibility/responseCalculator";
import { Numerology2 } from "@/components/calculatorCard";
import { Button } from "@/components/cards/calculatorCard";
import useForm from "@/components/context/useForm";
import SynastryForm from "@/components/form/synastryForm";
import React, { useEffect, useState } from "react";

const formKeys = {
  female: {
    date: "My date of birth is",
    place: "I was born in",
    name: "My name is",
    button: "Create synastry chart",
  },
  male: {
    email: "Enter Your Email",
    date: "My partner birthday is",
    place: "My partner born in",
    name: "My partner's name is",
    button: "Check your karma destiny",
  },
};

export default function Karmadestiny() {
  const { karma_destiny, adduserdata, deleteuserdata } = useForm();
  const [userData, setUserdata] = useState({});

  const initialvalue = {
    p_day: "",
    p_name: "",
    p_month: "",
    p_year: "",
    p_hour: "",
    p_min: "",
    p_lat: "",
    p_lon: "",
    p_tzone: "",
    p_country: "",
    s_day: "",
    s_name: "",
    s_month: "",
    s_year: "",
    s_hour: "",
    s_min: "",
    s_lat: "",
    s_lon: "",
    s_tzone: "",
    s_country: "",
  };

  useEffect(() => {
    if (karma_destiny) {
      setUserdata(karma_destiny);
    }
  }, [karma_destiny]);

  const handleData = (data) => {
    adduserdata({ karma_destiny: data });
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
          <Karma_destiny_response userdata={userData} handleForm={handleForm} />
          <div className="md:max-w-[350px] md:mt-24">
            <Numerology2 />
          </div>
        </div>
      ) : (
        <>
          <div className=" text-center flex flex-col gap-5">
            <h1 className="md:text-5xl font-bold text-4xl dark:text-white text-zinc-800">
              Karma Destiny
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

          <SynastryForm
            passData={handleData}
            formKey={formKeys}
            initialValues={initialvalue}
          />
        </>
      )}
    </div>
  );
}
