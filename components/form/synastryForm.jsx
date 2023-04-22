import React, { useState } from "react";
import { BorderInput, BorderSelect, Label } from "./inpututils";
import Sample from "./typehead";

export default function SynastryForm(props) {
  const date = new Date();
  const [error, seterror] = useState(null);
  const [reqdate, setreqdate] = useState(false);
  const [formValues, setFormValues] = useState(props.initialValues);

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
    e.preventDefault();
    if (
      daysInMonth(formValues.month, formValues.year) < parseInt(formValues.day)
    ) {
      setreqdate(true);
      setFormValues((prev) => ({ ...prev, place: "" }));
      seterror("Please enter correct date");
    } else if (Object.keys(validate(formValues)).length !== 0) {
      seterror("All detailed are must be filled");
      // setFormValues(formValues);
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
    if (!values.p_name) {
      error.p_name = "*required";
    }
    if (
      values.p_hour === "" ||
      isNaN(values.p_hour) ||
      values.p_hour === null
    ) {
      error.p_hour = "*required";
    }
    if (!values.p_year) {
      error.p_year = "*required";
    }
    if (!values.p_month) {
      error.p_month = "*required";
    }
    if (!values.p_day) {
      error.p_day = "*required";
    }
    if (values.p_min === "" || isNaN(values.p_min) || values.p_min === null) {
      error.p_min = "*required";
    }
    if (values.p_place == "") {
      error.p_place = "*required";
    }
    if (!values.s_name) {
      error.s_name = "*required";
    }
    if (
      values.s_hour === "" ||
      isNaN(values.s_hour) ||
      values.s_hour === null
    ) {
      error.s_hour = "*required";
    }
    if (!values.s_year) {
      error.s_year = "*required";
    }
    if (!values.s_month) {
      error.s_month = "*required";
    }
    if (!values.s_day) {
      error.s_day = "*required";
    }
    if (values.s_min === "" || isNaN(values.s_min) || values.s_min === null) {
      error.s_min = "*required";
    }
    if (values.s_place == "") {
      error.s_place = "*required";
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
      return timezone.response.timezone;
    } else {
      return 5.5;
    }
  };

  const handle = async (input, partner) => {
    if (input) {
      if (
        isNaN(partner ? formValues.p_hour : formValues.s_hour) || partner
          ? formValues.p_hour === ""
          : formValues.s_hour === "" ||
            isNaN(partner ? formValues.p_min : formValues.s_min) ||
            partner
          ? formValues.p_min === ""
          : formValues.s_min === "" ||
            isNaN(partner ? formValues.p_day : formValues.s_day) ||
            partner
          ? formValues.p_day === ""
          : formValues.s_day === "" ||
            isNaN(partner ? formValues.p_month : formValues.s_month) ||
            partner
          ? formValues.p_month === ""
          : formValues.s_month === "" ||
            isNaN(partner ? formValues.p_year : formValues.s_year) ||
            partner
          ? formValues.p_year === ""
          : formValues.s_year === ""
      ) {
        setFormValues((prev) => ({
          ...prev,
          [partner ? "p_place" : "s_place"]: "",
        }));
        seterror("Please enter correct Date");
      } else {
        const tzone = await Timezone(input);
        if (partner) {
          console.log("sssssss");
          setFormValues((prev) => ({
            ...prev,
            p_place: input.name,
            p_lat: input.lat,
            p_lon: input.lon,
            p_country: input.country,
            p_tzone: tzone,
          }));
        } else {
          setFormValues((prev) => ({
            ...prev,
            s_place: input.name,
            s_lat: input.lat,
            s_lon: input.lon,
            s_country: input.country,
            s_tzone: tzone,
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
          <Label text={props.formKey.female.name} />
          <div className="w-full">
            <BorderInput
              type="text"
              name="s_name"
              handle={handleinput}
              active={formValues.s_name}
              placeholder="Your Name"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col md:items-center gap-2 md:gap-3">
          <Label text={props.formKey.female.date}></Label>
          <div className="flex gap-5 flex-grow-0">
            <div className="inputbox">
              <BorderInput
                dark={props.dark}
                type="number"
                name="s_day"
                handle={handleNumber}
                active={formValues.s_day}
                placeholder="DD"
              />
            </div>
            <div className="inputbox">
              <BorderSelect
                name="s_month"
                handle={handleNumber}
                active={formValues.s_month}
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
                name="s_year"
                handle={handleNumber}
                active={formValues.s_year}
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
                  name="s_hour"
                  handle={handleNumber}
                  active={formValues.s_hour}
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
                  name="s_min"
                  handle={handleNumber}
                  active={formValues.s_min}
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
          <Label text={props.formKey.female.place} />
          <Sample
            defaultPlace={[
              { name: formValues?.s_place, country: formValues?.s_country },
            ]}
            passdata={handle}
            clear={reqdate}
          />
        </div>

        <div className="flex sm:flex-row flex-col md:items-center gap-2 md:gap-3">
          <Label text={props.formKey.male.name} />
          <div className="w-full">
            <BorderInput
              type="text"
              name="p_name"
              handle={handleinput}
              active={formValues.p_name}
              placeholder="Your Partner's Name"
            />
          </div>
        </div>
        <div className="flex sm:flex-row flex-col md:items-center gap-2 md:gap-3">
          <Label text={props.formKey.male.date}></Label>
          <div className="flex gap-5 flex-grow-0">
            <div className="inputbox">
              <BorderInput
                dark={props.dark}
                type="number"
                name="p_day"
                handle={handleNumber}
                active={formValues.p_day}
                placeholder="DD"
              />
            </div>
            <div className="inputbox">
              <BorderSelect
                name="p_month"
                handle={handleNumber}
                active={formValues.p_month}
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
                name="p_year"
                handle={handleNumber}
                active={formValues.p_year}
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
                  name="p_hour"
                  handle={handleNumber}
                  active={formValues.p_hour}
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
                  name="p_min"
                  handle={handleNumber}
                  active={formValues.p_min}
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
          <Label text={props.formKey.male.place} />
          <Sample
            defaultPlace={[
              { name: formValues?.p_place, country: formValues?.p_country },
            ]}
            passdata={(val) => handle(val, true)}
            clear={reqdate}
          />
        </div>

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
            {props.formKey.male.button}
          </button>
        </div>
      </form>
    </div>
  );
}

export function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
