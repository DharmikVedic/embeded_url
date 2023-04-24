import { useRouter } from "next/router";
import { useState } from "react";
import style from "../../styles/Home.module.css";
import Sample from "../form/typehead";
export function NtalChartCalculator({ extra, passData }) {
  const [datetyle, setdatetyle] = useState("text");
  const [error, seterror] = useState(null);
  const [typehead, settypwhead] = useState(false);

  const handleDate = (e) => {
    const parsed = new Date(e.target.value);
    const d = {
      day: parsed.getDate(),
      month: parsed.getMonth() + 1,
      year: parsed.getFullYear(),
    };
    setFormValues((prev) => ({ ...prev, ...d }));
    //setdate(parsed);
  };

  const initialvalue = {
    name: "",
    place: "",
    day: "",
    month: "",
    year: "",
    lat: "",
    lon: "",
    min: "",
    country: "",
    hour: "",
    tzone: 5.5,
  };

  const [formValues, setFormValues] = useState(initialvalue);

  if (error !== null) {
    setTimeout(() => seterror(null), 3000);
  }

  const handleNumber = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: parseInt(value) });
  };

  const handleinput = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
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

  const handle = async (input) => {
    if (input) {
      const tzone = await Timezone(input);
      setFormValues((prev) => ({
        ...prev,
        country: input.country,
        lat: input.lat,
        lon: input.lon,
        place: input.name,
        tzone: tzone,
      }));
      settypwhead(true);
    } else {
      settypwhead(false);
    }
  };

  const handleType = (e) => {
    setdatetyle("date");
  };

  //fadeLeft

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
    return error;
  };

  const router = useRouter();
  const submitingform = (e) => {
    e.preventDefault();
    if (Object.keys(validate(formValues)).length !== 0) {
      seterror("All detailed are must be filled");
      setFormValues(formValues);
    } else {
      passData(formValues);
    }
  };

  return (
    <div
      className={`w-full ${extra} sm:max-w-sm rounded bg-gradient-to-bl p-1 from-amber-300 to-cyan-400`}
    >
      <div className="relative  z-[1] bg-white dark:bg-c_light_dark    py-7 md:px-7 px-5">
        <div className="absolute top-0  z-[-1] left-0 w-full h-full"></div>
        <div className="flex flex-col gap-10">
          <h2 className="md:text-2xl text-xl font-semibold text-center dark:text-c_yellow">
            Create Free Natal Chart
          </h2>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <label
                className="text-[15px] text-zinc-700 dark:text-zinc-50 font-medium"
                htmlFor="name"
              >
                Enter Your Name
              </label>
              <input
                id="name"
                className="border border-zinc-400 hover:border-white outline-none placeholder:text-zinc-500 dark:placeholder:text-zinc-100 focus:border-zinc-800 dark:focus:border-white cursor-text rounded bg-transparent text-zinc-800 dark:text-white w-full appearance-none py-2 px-3 text-base"
                type="text"
                name="name"
                onChange={handleinput}
                value={formValues.name}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                className="text-[15px] text-zinc-700 dark:text-zinc-50 font-medium"
                htmlFor="date"
              >
                Enter Your Birth Date
              </label>
              <input
                id="date"
                onFocus={handleType}
                onChange={handleDate}
                min="1900-01-01"
                max="2100-01-01"
                placeholder="EX: 06 / 01 / 2000"
                pattern="\d{4}-\d{2}-\d{2}"
                className="border  border-zinc-300 dark:placeholder:text-zinc-200 placeholder:text-zinc-500 dark:border-zinc-400 hover:border-white outline-none  focus:border-white text-zinc-800 dark:text-white cursor-text rounded bg-transparent  w-full uppercase appearance-none py-2 px-3 text-base"
                type={datetyle}
              />
            </div>

            <div className="flex fadeLeft flex-col gap-5">
              <div className="flex gap-5  w-full">
                <div className="w-full">
                  <select
                    name="hour"
                    value={formValues.hour}
                    className={`text-zinc-800  dark:text-white ${style.select2} !py-2 px-3 border dark:border-zinc-400 border-zinc-300 w-full rounded-md`}
                    onChange={handleNumber}
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
                  </select>
                </div>
                <div className="w-full">
                  <select
                    name="min"
                    value={formValues.min}
                    className={`text-zinc-800 dark:text-white ${style.select2} !py-2 px-3 border dark:border-zinc-400 border-zinc-300 w-full rounded-md`}
                    onChange={handleNumber}
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
                  </select>
                </div>
              </div>
            </div>
            <div className="w-full fadeLeft flex flex-col gap-y-5">
              <label className="text-[15px] text-zinc-700 dark:text-zinc-50 font-medium">
                Select Your Birth Place
              </label>
              <Sample
                typeheadStyle="rounded-md border dark:border-zinc-400 border-zinc-300 px-3"
                selectStyle="rounded-md border dark:border-zinc-400 border-zinc-300 px-3"
                defaultPlace={[
                  {
                    name: formValues?.current_location,
                    country: formValues?.current_country,
                  },
                ]}
                passdata={(val) => handle(val, true)}
              />
              {error !== null && (
                <span
                  className={`${
                    error !== null ? "block " : "hidden"
                  } text-white rounded p-2 bg-red-400 w-full pl-3`}
                >
                  {error}
                </span>
              )}
              <button
                onClick={submitingform}
                className="capitalize font-semibold mt-3 bg-gradient-to-tr from-amber-200 to-green-200 text-[15px] text-zinc-800  py-2.5 px-4 rounded"
              >
                Create Free Natal Chart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
