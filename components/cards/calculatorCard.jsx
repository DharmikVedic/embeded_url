import { useRouter } from "next/router";
import React from "react";

export default function CalculatorCard({ title, desc, btn, link, style }) {
  const router = useRouter();
  return (
    <div className={`p-[2px] ${style} rounded-[10px]`}>
      <div
        onClick={() => router.push(link)}
        className="bg-white dark:bg-c_light_dark cursor-pointer md:p-6 group p-5 rounded-[10px]"
      >
        <div className="flex flex-col gap-3 items-start">
          <h2 className="font-semibold dark:text-white text-zinc-800 md:text-2xl text-xl">
            {title}
          </h2>
          <p className="font-nunito  dark:text-zinc-300 text-zinc-700  md:text-lg">
            {desc}
          </p>
          <button className="ml-auto duration-100 ease-in font-semibold group-hover:bg-white group-hover:text-zinc-800 dark:text-white border border-current rounded-full p-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-4 h-4"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
          </button>
        </div>
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
