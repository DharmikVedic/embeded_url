import React, { useEffect, useState } from "react";
import { BorderInput, BorderSelect, Label } from "./inpututils";
import Sample from "./typehead";
import { FetchApi } from "../utils/fetchapi";

export default function Form2(props) {
  const date = new Date();
  const [error, seterror] = useState(null);
  const [reqdate, setreqdate] = useState(false);
  const [formValues, setFormValues] = useState(props.initialValues);
  const [resetReq, setResetReq] = useState(false);

  const [formErrors, setFormErrors] = useState({});

  const handleinput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  setTimeout(function () {
    seterror(null);
    setreqdate(false);
  }, 4000);

  const handleNumber = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: parseInt(value) });
  };

  const submitingform = async (e) => {
    console.log(Object.keys(validate(formValues)));

    e.preventDefault();
    if (
      daysInMonth(formValues.month, formValues.year) < parseInt(formValues.day)
    ) {
      setreqdate(true);
      setFormValues((prev) => ({ ...prev, place: "" }));
      setResetReq(true);
      seterror("Please enter correct date");
    } else if (Object.keys(validate(formValues)).length !== 0) {
      seterror("All detailed are must be filled");
    } else if (Object.keys(validate(formValues)).length === 0 && !reqdate) {
      let rea = Object.assign({}, formValues);
      props.passData(rea);
    } else {
      // setFormErrors(validate(formValues));
      seterror("Please enter correct date");
    }
  };

  const validate = (values) => {
    let error = {};
    if (!values.name) {
      error.name = "*required";
    }
    if (values.hour === "" || isNaN(values.hour) || values.hour === null) {
      error.hour = "*required";
    }
    if (!values.year) {
      error.year = "*required";
    }
    if (!values.month) {
      error.month = "*required";
    }
    if (!values.day) {
      error.day = "*required";
    }
    if (values.min === "" || isNaN(values.min) || values.min === null) {
      error.min = "*required";
    }
    if (values.place == "") {
      error.place = "*required";
    }
    if (props.solar && values.current_location == "") {
      error.current_location = "*required";
    }
    // if (formValues.email && == "") {
    //   error.email = "*required";
    // }
    return error;
  };

  const Timezone = async (input) => {
    const date =
      formValues.month + "-" + formValues.day + "-" + formValues.year;
    if (input.country !== "India") {
      const timezone = await FetchApi({
        apiName: "timezone_with_dst",
        userData: {
          latitude: parseFloat(input.lat),
          longitude: parseFloat(input.lon),
          date: date,
        },
      });
      return timezone.timezone;
    } else {
      return 5.5;
    }
  };

  const handle = async (input, solar) => {
    if (input) {
      if (
        isNaN(formValues.day) ||
        formValues.day === "" ||
        isNaN(formValues.month) ||
        formValues.month === "" ||
        isNaN(formValues.year) ||
        formValues.year === ""
      ) {
        setFormValues((prev) => ({
          ...prev,
          [solar ? "current_location" : "place"]: "",
        }));
        setResetReq(true);
        seterror("Please enter correct Date");
      } else {
        const tzone = await Timezone(input);
        if (solar) {
          setFormValues((prev) => ({
            ...prev,
            current_location: input.name,
            current_lat: input.lat,
            current_lon: input.lon,
            current_country: input.country,
            current_tzone: tzone,
          }));
        } else {
          setFormValues((prev) => ({
            ...prev,
            place: input.name,
            lat: input.lat,
            lon: input.lon,
            country: input.country,
            tzone: tzone,
          }));
        }
      }
    }
  };

  return (
    <div
      className={`flex p-1.5 shadow-md shadow-zinc-100/10  max-w-max flex-col bg-white dark:bg-[#333147] w-full`}
    >
      <form
        onSubmit={submitingform}
        className={`md:p-7 border-orange-100 border-4  p-5 flex  flex-col gap-y-8 w-full max-w-lg mx-auto`}
      >
        <div className="flex sm:flex-row flex-col md:items-center gap-2 md:gap-3">
          <Label text={props.formKey.name} />
          <div className="w-full">
            <BorderInput
              type="text"
              name="name"
              handle={handleinput}
              active={formValues.name}
              placeholder="Your Name"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col md:items-center gap-2 md:gap-3">
          <Label text="My date of birth is"></Label>
          <div className="flex gap-5 flex-grow-0">
            <div className="inputbox">
              <BorderInput
                dark={props.dark}
                type="number"
                name="day"
                handle={handleNumber}
                active={formValues.day}
                placeholder="DD"
              />
            </div>
            <div className="inputbox">
              <BorderSelect
                name="month"
                handle={handleNumber}
                active={formValues.month}
              >
                <option value>MM</option>
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
              <BorderInput
                type="number"
                name="year"
                handle={handleNumber}
                active={formValues.year}
                placeholder="YYYY"
              />
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col md:items-center gap-2 md:gap-3">
          <div className="flex gap-5 w-full">
            <div className="md:w-[55%] md:block hidden w-full"></div>
            <div className="flex gap-5 w-full">
              <div className="inputbox">
                <BorderSelect
                  name="hour"
                  handle={handleNumber}
                  active={formValues.hour}
                >
                  <option value>HH</option>
                  <option value="0">00 (12 midnight)</option>
                  <option value="1">01 (am)</option>
                  <option value="2">02 (am)</option>
                  <option value="3">03 (am)</option>
                  <option value="4">04 (am)</option>
                  <option value="5">05 (am)</option>
                  <option value="6">06 (am)</option>
                  <option value="7">07 (am)</option>
                  <option value="8">08 (am)</option>
                  <option value="9">09 (am)</option>
                  <option value="10">10 (am)</option>
                  <option value="11">11 (am)</option>
                  <option value="12">12 (noon)</option>
                  <option value="13">13 (1 pm)</option>
                  <option value="14">14 (2 pm)</option>
                  <option value="15">15 (3 pm)</option>
                  <option value="16">16 (4 pm)</option>
                  <option value="17">17 (5 pm)</option>
                  <option value="18">18 (6 pm)</option>
                  <option value="19">19 (7 pm)</option>
                  <option value="20">20 (8 pm)</option>
                  <option value="21">21 (9 pm)</option>
                  <option value="22">22 (10 pm)</option>
                  <option value="23">23 (11 pm)</option>
                </BorderSelect>
              </div>
              <div className="inputbox">
                <BorderSelect
                  name="min"
                  handle={handleNumber}
                  active={formValues.min}
                >
                  <option value>MM</option>
                  <option value="0">00</option>
                  <option value="1">01</option>
                  <option value="2">02</option>
                  <option value="3">03</option>
                  <option value="4">04</option>
                  <option value="5">05</option>
                  <option value="6">06</option>
                  <option value="7">07</option>
                  <option value="8">08</option>
                  <option value="9">09</option>
                  <option value="10">10</option>
                  <option value="11">11</option>
                  <option value="12">12</option>
                  <option value="13">13</option>
                  <option value="14">14</option>
                  <option value="15">15</option>
                  <option value="16">16</option>
                  <option value="17">17</option>
                  <option value="18">18</option>
                  <option value="19">19</option>
                  <option value="20">20</option>
                  <option value="21">21</option>
                  <option value="22">22</option>
                  <option value="23">23</option>
                  <option value="24">24</option>
                  <option value="25">25</option>
                  <option value="26">26</option>
                  <option value="27">27</option>
                  <option value="28">28</option>
                  <option value="29">29</option>
                  <option value="30">30</option>
                  <option value="31">31</option>
                  <option value="32">32</option>
                  <option value="33">33</option>
                  <option value="34">34</option>
                  <option value="35">35</option>
                  <option value="36">36</option>
                  <option value="37">37</option>
                  <option value="38">38</option>
                  <option value="39">39</option>
                  <option value="40">40</option>
                  <option value="41">41</option>
                  <option value="42">42</option>
                  <option value="43">43</option>
                  <option value="44">44</option>
                  <option value="45">45</option>
                  <option value="46">46</option>
                  <option value="47">47</option>
                  <option value="48">48</option>
                  <option value="49">49</option>
                  <option value="50">50</option>
                  <option value="51">51</option>
                  <option value="52">52</option>
                  <option value="53">53</option>
                  <option value="54">54</option>
                  <option value="55">55</option>
                  <option value="56">56</option>
                  <option value="57">57</option>
                  <option value="58">58</option>
                  <option value="59">59</option>
                </BorderSelect>
              </div>
            </div>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col md:items-center gap-2 md:gap-3">
          <Label text={props.formKey.place} />
          <Sample
            defaultPlace={[
              { name: formValues?.place, country: formValues?.country },
            ]}
            passdata={handle}
            clear={resetReq}
          />
        </div>

        {props.solar && (
          <div className="w-full md:flex-row md:items-center flex-col flex gap-5">
            <Label text={props.formKey.solar_year} />
            <div className="flex w-full gap-5">
              <div
                className={`${
                  formValues.solar_year == date.getFullYear()
                    ? "bg-c_yellow dark:text-zinc-800 border-transparent"
                    : "dark:text-zinc-300 dark:border-zinc-500 border-zinc-300"
                } flex gap-2 border py-2 px-2 cursor-pointer rounded  w-full  items-center`}
              >
                <input
                  onChange={handleinput}
                  defaultChecked={formValues.solar_year === date.getFullYear()}
                  type="radio"
                  name="solar_year"
                  className="w-3.5 h-3.5 accent-zinc-800"
                  id="current"
                  value={date.getFullYear()}
                />
                <label htmlFor="current">Current Year</label>
              </div>
              <div
                className={`${
                  formValues.solar_year == (date.getFullYear() + 1).toString()
                    ? "bg-c_yellow dark:text-zinc-800 border-transparent"
                    : "dark:text-zinc-300 dark:border-zinc-500 border-zinc-300"
                } flex gap-2 border py-2 px-2 cursor-pointer rounded  w-full items-center`}
              >
                <input
                  onChange={handleinput}
                  type="radio"
                  defaultChecked={
                    formValues.solar_year ===
                    (date.getFullYear() + 1).toString()
                  }
                  name="solar_year"
                  className="w-3.5 h-3.5 accent-zinc-800 "
                  id="next"
                  value={date.getFullYear() + 1}
                />
                <label htmlFor="next">Next Year</label>
              </div>
            </div>
          </div>
        )}

        {(props.solar || props.transit) && (
          <div className="flex sm:flex-row flex-col md:items-center gap-2 md:gap-3">
            <Label text={props.formKey.current} />
            <Sample
              defaultPlace={[
                {
                  name: formValues?.current_location,
                  country: formValues?.current_country,
                },
              ]}
              passdata={(val) => handle(val, true)}
              clear={resetReq}
            />
          </div>
        )}
        {/* email */}
        {/* <div className="flex sm:flex-row flex-col md:items-center gap-2 md:gap-3">
          <Label text={props.formKey.email} />
          <div className="w-full">
            <BorderInput
              type="email"
              name="email"
              handle={handleinput}
              active={formValues.email}
              placeholder="Your Email"
            />
          </div>
        </div> */}

        {error !== null && (
          <span
            className={`${
              error !== null ? "block " : "hidden"
            }  p-1 text-white bg-red-400 w-full pl-3`}
          >
            {error}
          </span>
        )}
        <div>
          <button
            type="submit"
            className={`w-full duration-100 ease-in font-semibold cursor-pointer text-[17px] rounded-md px-10 py-3 bg-gradient-to-r from-rose-400 hover:from-orange-400 hover:to-rose-400 to-orange-400   text-white mt-3 md:float-right`}
          >
            {props.formKey.button}
          </button>
        </div>
      </form>
    </div>
  );
}

export function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
