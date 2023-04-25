import SolarReturnReport from "@/components/calculator/solrReturnResponse";
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
  button: "Create free Solar Return Chart",
  solar_year: "Select Solar Year",
};

export default function SolarReturn() {
  const date = new Date();
  const { solar, adduserdata, deleteuserdata } = useForm();
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
    solar_year: date.getFullYear(),
  };

  useEffect(() => {
    if (solar) {
      setUserdata(solar);
    }
  }, [solar]);

  const handleData = (data) => {
    //console.log(data);
    adduserdata({ solar: data });
  };

  const handleForm = (val) => {
    deleteuserdata({ [val]: null });
    setUserdata({});
  };

  return (
    <div className="px-5 bg-gradient-to-tl dark:from-transparent dark:to-transparent from-[#EDF1F4]/20 to-[#C3CBDC]/20 md:py-24 py-14 flex flex-col gap-14 items-center">
      <Button url="/" />
      {Object.keys(userData).length > 0 ? (
        <SolarReturnReport handleForm={handleForm} userdata={userData} />
      ) : (
        <>
          <div className=" text-center flex flex-col gap-5">
            <h1 className="md:text-5xl font-bold text-4xl dark:text-white text-zinc-800">
              Solar Return Chart
            </h1>
            <p className="md:text-lg dark:text-zinc-300 text-zinc-600">
              Your Birthday Forecast: Get Ready for an Amazing Year Ahead!
            </p>
          </div>
          <Form2
            solar={true}
            passData={handleData}
            formKey={formKeys}
            initialValues={initialvalue}
          />
        </>
      )}
    </div>
  );
}
