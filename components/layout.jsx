import Link from "next/link";
import React, { useEffect, useState } from "react";
import MobileMenu1 from "./menu/mobilemenu";
import { dropdownMenu } from "./jsonData/menu";

export default function Layout({ children }) {
  const [localtheme, setloclatheme] = useState("light");
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const d = localStorage.getItem("theme");
      if (d) {
        setloclatheme(d);
        document.documentElement.classList.add(d);
      }
    }
  }, []);

  const handleTheme = (e) => {
    const { checked } = e.target;
    if (checked) {
      setloclatheme("dark");
      localStorage.theme = "dark";
    } else {
      setloclatheme("light");
      localStorage.theme = "light";
    }
    document.documentElement.classList.toggle("dark");
  };

  const handlemenu = () => {
    setMobileMenu((prev) => !prev);
  };

  return (
    <>
      <style jsx>
        {`
          .spheres-wrapper {
            position: relative;
            z-index: 1;
          }
          .spheres-wrapper:before {
            position: absolute;
            content: "";
            top: 0;
            z-index: -1;
            background-repeat: no-repeat;
            left: 0;
            background-image: url("/imgs/bg.svg");
            background-position: 50%;
            width: 100%;
            height: 100%;
            background-size: 2800px 8109px;
          }
        `}
      </style>
      {mobileMenu && (
        <>
          <div className="" />
          <MobileMenu1
            Mactive={mobileMenu}
            passclose={handlemenu}
            data={dropdownMenu}
          />
        </>
      )}
      <div className="spheres-wrapper   bg-[#f6fdff] dark:bg-[#222236] min-h-screen">
        <div className="flex border-b border-zinc-300 md:dark:border-transparent dark:border-c_yellow/30 md:dark:bg-transparent dark:bg-c_light_dark/50 md:border-transparent max-w-7xl items-center mx-auto w-full px-5 py-5  justify-between">
          <div className="">
            <div className="w-full">
              <Link href="/">
                <img
                  src={`/imgs/${
                    localtheme == "dark" ? "logo-white.svg" : "logo-black.svg"
                  }`}
                  className="w-[150px]"
                />
              </Link>
            </div>
          </div>
          <div className="">
            <label
              htmlFor="toggle-example"
              className="flex items-center cursor-pointer relative "
            >
              <input
                checked={localtheme === "dark"}
                onChange={handleTheme}
                type="checkbox"
                id="toggle-example"
                className="sr-only switcher"
              />
              <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full" />
            </label>
          </div>
          <button
            onClick={handlemenu}
            className="dark:text-white text-zinc-800"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-7 h-7"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>
        {children}
      </div>
    </>
  );
}
