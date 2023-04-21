import { useRouter } from "next/router";
import React from "react";

export default function CalculatorCard() {
  return (
    <div
      style={{
        backgroundColor: "#6247aa",
        backgroundImage: "linear-gradient(316deg, #6247aa 0%, #a594f9 74%)",
      }}
      className="md:p-7 p-5 rounded-[20px]"
    >
      <div className="flex flex-col gap-5 items-start">
        <h2 className="font-extrabold md:text-2xl text-xl">
          Free Birth Chart Natal Chart Report
        </h2>
        <p className="font-nunito md:text-lg">
          Discover the key to your life path & personality
        </p>
        <button className="font-nunito font-semibold bg-white rounded-md py-2 px-10">
          Calculate Yout Free Birth Chart
        </button>
      </div>
    </div>
  );
}

export function Button({ url }) {
  const router = useRouter();
  return (
    <div className="absolute px-5 max-w-7xl mx-auto w-full left-1/2 -translate-x-1/2 top-4 md:top-10">
      <button
        onClick={() => router.push(url)}
        className=" dark:text-white dark:hover:text-blue-500 hover:text-blue-500 top-5 left-5 flex gap-1 items-center"
      >
        <span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-5 h-5"
          >
            <path
              fillRule="evenodd"
              d="M17 10a.75.75 0 01-.75.75H5.612l4.158 3.96a.75.75 0 11-1.04 1.08l-5.5-5.25a.75.75 0 010-1.08l5.5-5.25a.75.75 0 111.04 1.08L5.612 9.25H16.25A.75.75 0 0117 10z"
              clipRule="evenodd"
            />
          </svg>
        </span>
        Back
      </button>
    </div>
  );
}
