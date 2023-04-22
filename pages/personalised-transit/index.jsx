import SolarReturnReport from "@/components/calculator/solrReturnResponse";
import Transitreport from "@/components/calculator/transitReport";
import { Button } from "@/components/cards/calculatorCard";
import useForm from "@/components/context/useForm";
import Form2 from "@/components/form/form";
import React, { useEffect, useState } from "react";

const formKeys = {
  date: "My date of birth is",
  place: "I was born in",
  email: "Enter Your Email",
  name: "My name is",
  current: "My current location",
  button: "Create free Transit Report",
  solar_year: "Select Solar Year",
};

export default function TransitChart() {
  const date = new Date();
  const { transit, adduserdata, deleteuserdata } = useForm();
  const [userData, setUserdata] = useState({});

  const initialvalue = {
    name: "",
    day: "",
    month: "",
    year: "",
    min: "",
    hour: "",
    gender: "male",
    tzone: 5.5,
    place: "",
    country: "India",
    current_location: "",
    current_lat: "",
    current_lon: "",
    current_tzone: "",
  };

  useEffect(() => {
    if (transit) {
      setUserdata(transit);
    }
  }, [transit]);

  const handleData = (data) => {
    adduserdata({ transit: data });
  };

  const handleForm = (val) => {
    deleteuserdata({ [val]: null });
    setUserdata({});
  };

  return (
    <div className="px-5 bg-gradient-to-tl dark:from-transparent dark:to-transparent from-[#EDF1F4]/20 to-[#C3CBDC]/20 md:py-24 py-20 flex flex-col gap-14 items-center">
      <Button url="/" />
      {Object.keys(userData).length > 0 ? (
        <Transitreport handleForm={handleForm} userdata={userData} />
      ) : (
        <>
          <div className=" text-center flex flex-col gap-5">
            <h1 className="md:text-5xl font-bold text-4xl dark:text-white text-zinc-800">
              Transit Chart Calculator
            </h1>
            <p className="md:text-lg max-w-3xl mx-auto dark:text-zinc-300 text-zinc-600">
              Navigate the cosmic currents and gain valuable insight into the
              current astrological climate and its impact on your life's
              journey. Make the most of opportunities and know the best timing
              for important events with confidence and clarity today
            </p>
          </div>
          <Form2
            transit={true}
            passData={handleData}
            formKey={formKeys}
            initialValues={initialvalue}
          />
        </>
      )}
    </div>
  );
}
