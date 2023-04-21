import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export function IconCard({
  text,
  img,
  link,
  bg,

  breakword,
  desc,
}) {
  return (
    <Link href={link} legacyBehavior>
      <a
        className={`${bg} rounded-[5px] group duration-100 ease-linear group md:p-7 p-5 flex flex-col  gap-5 justify-between cursor-pointer w-full`}
      >
        <div className={`flex gap-9 justify-between w-full items-center`}>
          <h6
            className={`font-semibold md:text-xl text-lg  group-hover:text-bg_dark duration-[200ms] ease-in leading-7 ${
              breakword ? "break-all" : ""
            } text-left`}
          >
            {text}
          </h6>
          <span
            dangerouslySetInnerHTML={{ __html: img }}
            className="w-[40px] text-light_bg group-hover:text-bg_dark  sm:w-[33px] sm:min-w-[33px] mt-[5px]"
          ></span>
        </div>
        <p className="text-para group-hover:text-bg_dark_1">{desc}</p>
        <button
          className={` ml-auto group-hover:text-bg_dark bg-white rounded-full p-2 sm:ml-auto  cursor-pointer  `}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5  w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </a>
    </Link>
  );
}

export function TarotCard({ extra }) {
  const router = useRouter();
  return (
    <div
      style={{
        backgroundColor: "#f9d29d",
        backgroundImage: "linear-gradient(315deg, #f9d29d 0%, #fca5a5 74%)",
      }}
      className={`flex gap-10 md:p-10 p-6  rounded-[5px]  ${extra} flex-col-reverse items-center md:flex-row-reverse`}
    >
      <div className="flex w-full md:text-left text-center flex-col gap-5">
        <h2 className="text-2xl font-semibold">Tarot Predictions</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s,
        </p>
        <button
          onClick={() => router.push("/tarot")}
          className="text-[15px] duration-100 ease-linear hover:bg-zinc-800 hover:text-white  capitalize py-3.5 px-5 font-semibold rounded-md  bg-white"
        >
          Pick up a card and get an answer
        </button>
      </div>
      <div className=" h-[110px] sm:h-[150px]  flex justify-center relative w-full">
        {/*Cards*/}
        <div className="flex w-full  relative">
          <div className=" md:w-[90px] w-[70px]  group  absolute rotate-[-10deg] left-1/2 -translate-x-1/2">
            <img
              className="w-full border-2 group-hover:shadow-2xl duration-100 ease-in group-hover:shadow-white/60 group-hover:-translate-y-1 border-zinc-100 translate-x-[-80px]"
              src={"/imgs/tarot.jpeg"}
              alt="tarot"
            />
          </div>
          <div className="md:w-[90px] w-[70px] absolute group rotate-[-10deg] left-1/2 -translate-x-1/2 ">
            <img
              className="w-full group-hover:shadow-2xl duration-100 ease-in group-hover:shadow-white/60 group-hover:-translate-y-1 border-2  border-zinc-100  translate-x-[-40px]"
              src={"/imgs/tarot.jpeg"}
              alt="tarot"
            />
          </div>
          <div className=" md:w-[90px] w-[70px] absolute z-10 group  left-1/2 -translate-x-1/2">
            <img
              className="w-full  border-2 group-hover:shadow-2xl duration-100 ease-in group-hover:shadow-white/60 group-hover:-translate-y-1 border-zinc-100"
              src={"/imgs/tarot.jpeg"}
              alt="tarot"
            />
          </div>
          <div className=" md:w-[90px] w-[70px] z-[3] rotate-[10deg] group  absolute left-1/2 -translate-x-1/2">
            <img
              className="w-full  border-2 group-hover:shadow-2xl duration-100 ease-in group-hover:shadow-white/60 group-hover:-translate-y-1 border-zinc-100 translate-x-[40px]"
              src={"/imgs/tarot.jpeg"}
              alt="tarot"
            />
          </div>
          <div className=" md:w-[90px] w-[70px] z-[2] rotate-[10deg] group absolute left-1/2 -translate-x-1/2 ">
            <img
              className="w-full  border-2 group-hover:shadow-2xl duration-100 ease-in group-hover:shadow-white/60 group-hover:-translate-y-1 border-zinc-100 translate-x-[80px]"
              src={"/imgs/tarot.jpeg"}
              alt="tarot"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export function Numerology2() {
  const [datetyle, setdatetyle] = useState("text");
  const [error, seterror] = useState(null);
  const [dates, setdate] = useState(null);
  const handleDate = (e) => {
    const parsed = new Date(e.target.value);
    setdate(parsed);
  };
  const handleType = (e) => {
    setdatetyle("date");
  };

  if (error) {
    setTimeout(() => seterror(null), 2500);
  }

  const router = useRouter();
  const handleSubmit = () => {
    if (dates !== null) {
      const year = dates.getFullYear();
      const day = dates.getDate();
      const month = dates.getMonth() + 1;
      const v = daysInMonth(month, year);
      if (v < day) {
        seterror("please write correct date");
      } else {
        const url = [day, month, year];
        router.push({
          pathname: "/numerology",
          query: { date: url.join("-") },
        });
      }
    } else {
      seterror("please write correct date");
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#118ab2",
          backgroundImage:
            "linear-gradient(319deg, #118ab2 0%, #06d6a0 37%, #ffd166 100%)",
        }}
        className="p-8 snap-center	items-center shrink-0 rounded shadow-xl flex flex-col gap-8"
      >
        <h2 className="text-white font-semibold md:text-[19px] text-[18px] text-center">
          Unlock Your Lucky, Destiny and Friendly Numbers through Numerology
        </h2>
        <form className="text-center flex flex-col gap-4 font-cera_medium">
          <label className="text-white" htmlFor="date">
            Enter Your Birth Date
          </label>
          <input
            id="date"
            onFocus={handleType}
            onChange={handleDate}
            min="1900-01-01"
            max="2100-01-01"
            placeholder="EX: 03 / 11 / 2022"
            pattern="\d{4}-\d{2}-\d{2}"
            className="border border-zinc-200 hover:border-white outline-none placeholder:text-zinc-100 focus:border-white text-white cursor-text	 max-w-[230px] rounded text-center bg-transparent  w-full uppercase appearance-none py-1.5 px-5 text-base"
            type={datetyle}
          />
        </form>
        <div className="flex w-full flex-col gap-3 mt-2">
          {error !== null && (
            <span className="text-white capitalize py-1 px-3 text-center  bg-red-500 rounded ">
              {error}
            </span>
          )}
          <button
            onClick={handleSubmit}
            type="submit"
            className="capitalize w-full bg-white text-[15px] text-zinc-800 hover:bg-[#222236] hover:text-white font-semibold duration-100 ease-in py-2.5 px-4 rounded"
          >
            Get Numerology report
          </button>
        </div>
      </div>
    </>
  );
}

export function daysInMonth(month, year) {
  return new Date(year, month, 0).getDate();
}
