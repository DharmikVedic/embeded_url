import React, { useEffect, useState } from "react";
import { BorderInput, BorderSelect, Label } from "./inpututils";

export default function NumerologyForm({
  initialValue,
  passdata,
  button_text,
}) {
  const [error, seterror] = useState(null);
  const [loader, setloader] = useState(false);

  const [formValue, setformValue] = useState(initialValue);
  const [formError, setformError] = useState(initialValue);

  useEffect(() => {
    setformValue(initialValue);
  }, [initialValue]);

  if (error) {
    setTimeout(() => seterror(null), 2000);
  }
  const submitingform = (e) => {
    e.preventDefault();
    setformError(validay(formValue));

    if (Object.keys(validay(formValue)).length !== 0) {
      seterror("All detailed are must be filled");
      setformValue(formValue);
    } else if (Object.keys(validay(formValue)).length === 0) {
      setloader(true);
      let rea = formValue;
      passdata(rea);
      seterror(null);
    } else {
      setformError(validay(formValue));
      seterror("Please enter correct day");
    }
  };
  const validay = (values) => {
    let error = {};
    if (!values.full_name || values.full_name == "") {
      error.full_name = "*required";
    }

    if (!values.year) {
      error.year = "*required";
    }
    if (!values.month) {
      error.month = "*required";
    }
    if (!values.date) {
      error.date = "*required";
    }
    return error;
  };

  const handleInput = (e) => {
    const { name, value } = e.target;
    setformValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleNumber = (e) => {
    const { name, value } = e.target;
    setformValue((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <form
        id="numerology"
        onSubmit={submitingform}
        className="max-w-max shadow-md shadow-zinc-100/10   mx-auto bg-white dark:bg-[#333147] p-3 w-full flex  flex-col gap-8 md:gap-12 dark:text-zinc-100"
      >
        <div
          className={`md:p-7 border-orange-100 border-4  p-5 flex  flex-col gap-y-8 w-full max-w-lg mx-auto`}
        >
          <div className="flex flex-col items-start">
            <Label text={`Enter your Name`}></Label>
            <div className="w-full">
              <BorderInput
                type="text"
                name="full_name"
                handle={handleInput}
                active={formValue.full_name}
                placeholder="Your Name"
              />
            </div>
          </div>

          <div className="w-full flex   flex-col gap-4 ">
            <div className="grid grid-cols-4 gap-5 sm:items-center w-full dark:text-zinc-200">
              <div className="flex col-span-2 items-center w-full gap-5">
                <BorderSelect
                  name="month"
                  handle={handleNumber}
                  active={formValue.month}
                >
                  <option value>Birth Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </BorderSelect>
              </div>
              <div className="inputbox">
                <div className="">
                  <BorderInput
                    type="number"
                    name="date"
                    handle={handleInput}
                    active={formValue.date}
                    placeholder="DD"
                  />
                </div>
              </div>

              <div className="inputbox">
                <div className="">
                  <BorderInput
                    type="number"
                    name="year"
                    handle={handleInput}
                    active={formValue.year}
                    placeholder="YYYY"
                  />
                </div>
              </div>
            </div>
          </div>
          {error !== null && (
            <span
              className={`${
                error !== null ? "block " : "hidden"
              }  p-1 text-white bg-red-400 w-full pl-3`}
            >
              {error}
            </span>
          )}
          <button
            className={`w-full duration-100 ease-in font-semibold cursor-pointer text-[17px] rounded-md px-10 py-3 bg-gradient-to-r from-rose-400 hover:from-orange-400 hover:to-rose-400 to-orange-400   text-white mt-3 md:float-right`}
          >
            {button_text}
          </button>
        </div>
      </form>
    </>
  );
}
