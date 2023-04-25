import React, { useEffect, useState } from "react";

export default function Layout({ children }) {
  const [localtheme, setloclatheme] = useState("dark");

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
      <div className=" fixed top-5 md:top-7 max-w-max w-full  right-5 md:right-7 z-[2]  flex justify-end">
        <label
          htmlFor="toggle-example"
          className="flex items-center cursor-pointer relative "
        >
          <input
            checked={localtheme === "dark"}
            onChange={handleTheme}
            type="checkbox"
            id="toggle-example"
            className="sr-only switcher "
          />
          <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full" />
        </label>
      </div>
      <div className="spheres-wrapper  bg-[#f6fdff] dark:bg-[#222236] min-h-screen">
        {children}
      </div>
    </>
  );
}
